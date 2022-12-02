import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { BigNumber, Contract } from "ethers";
import { defaultAbiCoder, hexlify, parseEther, parseUnits, randomBytes, zeroPad } from "ethers/lib/utils";
import { ethers } from "hardhat";

describe("MethCreate", function () {
  // quick fix to let gas reporter fetch data from gas station & coinmarketcap
  before((done) => {
    setTimeout(done, 2000);
  });

  describe("MethCreate", function () {
    const USDC_ADDRESS = "0x07865c6E87B9F70255377e024ace6630C1Eaa37F"; // Mumbai testnet
    const ZERO_ADDRESS = zeroPad("0x", 20);
    const PRICE_FEED = "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e"; // Mumbai testnet
    const CHAINLINK_USD_MULTIPLIER = parseUnits("1", 8);

    const WEI_PER_ETHER = parseEther("1");
    const USD_PER_WEI = BigNumber.from(2);
    const MOCK_USD_PER_ETH = USD_PER_WEI.mul(WEI_PER_ETHER).mul(CHAINLINK_USD_MULTIPLIER);

    const NFT_PRICE = parseEther("0.0000000000000001");
    const USDC_MULTIPLIER = parseUnits("1", 6);
    const USDC_PAYMENT = NFT_PRICE.mul(USD_PER_WEI).mul(USDC_MULTIPLIER);

    let USDC_CONTRACT: Contract;

    let methCreate: Contract;
    let ownerAddress;
    let sellerAddress;
    let seller: SignerWithAddress;
    let buyerAddress;
    let buyer: SignerWithAddress;
    let owner: SignerWithAddress;
    let setUSDCBalance: Function;
    let setETHBalance: Function;

    let INITIAL_USDC_BALANCE = parseUnits("10000000", 6); // just use a large number
    let INITIAL_ETH_BALANCE = parseEther("1000");

    before(async function () {
      [owner, seller, buyer] = await ethers.getSigners();
      ownerAddress = await owner.getAddress();
      sellerAddress = await seller.getAddress();
      buyerAddress = await buyer.getAddress();
      USDC_CONTRACT = await ethers.getContractAt("IERC20", USDC_ADDRESS);

      const methCreateFactory = await ethers.getContractFactory("MethCreate");
      methCreate = await methCreateFactory.deploy();

      setUSDCBalance = async (address: any, user: any, balance: any) => {
        const USDC_TOKEN_SLOT = 9;
        const index = ethers.utils.hexStripZeros(
          ethers.utils.solidityKeccak256(
            ["uint256", "uint256"],
            [address, USDC_TOKEN_SLOT], // key, slot
          ),
        );
        await ethers.provider.send("hardhat_setStorageAt", [
          USDC_ADDRESS,
          index.toString(),
          ethers.utils.defaultAbiCoder.encode(["uint256"], [balance]), // $10
        ]);

        // Approve MethCreate to spend.
        const approveTx = await USDC_CONTRACT.connect(user).approve(methCreate.address, balance);
        await approveTx.wait();
      };

      setETHBalance = async (address: any, balance: any) => {
        await ethers.provider.send("hardhat_setBalance", [address, balance.toHexString()]);
      };

      // Set Storage of Price feed to a Mocked version
      const mockPriceFeedFactory = await ethers.getContractFactory("MockPriceFeed");
      const mockPriceFeed = await mockPriceFeedFactory.deploy(MOCK_USD_PER_ETH, 8);

      await mockPriceFeed.deployed();
      const code = await ethers.provider.send("eth_getCode", [mockPriceFeed.address]);
      await ethers.provider.send("hardhat_setCode", [PRICE_FEED, code]);
    });

    beforeEach(async function () {
      const methCreateFactory = await ethers.getContractFactory("MethCreate");
      methCreate = await methCreateFactory.deploy();

      // Set USDC Balance of users.
      await setUSDCBalance(buyerAddress, buyer, INITIAL_USDC_BALANCE);
      await setUSDCBalance(sellerAddress, seller, 0);
    });

    it("should allow a seller to mint nft", async function () {
      await expect(methCreate.connect(seller).safeMint("firstTokenURI", NFT_PRICE, true))
        .to.emit(methCreate, "Transfer")
        .withArgs(ZERO_ADDRESS, sellerAddress, 0);
      expect(await methCreate.ownerOf(0)).to.be.equals(sellerAddress);

      const token0Info = await methCreate.tokensInfo(0);
      expect(token0Info[0]).to.be.equals(true);
      expect(BigNumber.from(token0Info[1]).eq(NFT_PRICE)).to.be.equals(true);

      await expect(methCreate.connect(seller).safeMint("secondTokenURI", NFT_PRICE, false))
        .to.emit(methCreate, "Transfer")
        .withArgs(ZERO_ADDRESS, sellerAddress, 1);
      expect(await methCreate.ownerOf(1)).to.be.equals(sellerAddress);

      const token1Info = await methCreate.tokensInfo(1);
      expect(token1Info[0]).to.be.equals(false);
      expect(BigNumber.from(token1Info[1]).eq(NFT_PRICE)).to.be.equals(true);
    });

    it("should allow a seller to update nft", async function () {
      await expect(methCreate.connect(seller).safeMint("firstTokenURI", NFT_PRICE, true))
        .to.emit(methCreate, "Transfer")
        .withArgs(ZERO_ADDRESS, sellerAddress, 0);

      const newPrice = NFT_PRICE.add(1);
      await expect(methCreate.connect(buyer).setPrice(0, newPrice)).to.be.revertedWithCustomError(
        methCreate,
        "NotTokenOwner",
      );
      await expect(methCreate.connect(seller).setPrice(0, newPrice))
        .to.emit(methCreate, "TokenUpdated")
        .withArgs(0, newPrice, true);
      const tokenInfoAfterPriceUpdate = await methCreate.tokensInfo(0);
      expect(tokenInfoAfterPriceUpdate[0]).to.be.equals(true);
      expect(BigNumber.from(tokenInfoAfterPriceUpdate[1]).eq(newPrice)).to.be.equals(true);

      await expect(methCreate.connect(buyer).setSellable(0, false)).to.be.revertedWithCustomError(
        methCreate,
        "NotTokenOwner",
      );
      await expect(methCreate.connect(seller).setSellable(0, false))
        .to.emit(methCreate, "TokenUpdated")
        .withArgs(0, newPrice, false);
      const tokenInfoAfterSellableUpdate = await methCreate.tokensInfo(0);
      expect(tokenInfoAfterSellableUpdate[0]).to.be.equals(false);
      expect(BigNumber.from(tokenInfoAfterSellableUpdate[1]).eq(newPrice)).to.be.equals(true);

      await expect(methCreate.connect(buyer).setTokenInfo(0, NFT_PRICE, true)).to.be.revertedWithCustomError(
        methCreate,
        "NotTokenOwner",
      );
      await expect(methCreate.connect(seller).setTokenInfo(0, NFT_PRICE, true))
        .to.emit(methCreate, "TokenUpdated")
        .withArgs(0, NFT_PRICE, true);
      const tokenInfoAfterCompleteUpdate = await methCreate.tokensInfo(0);
      expect(tokenInfoAfterCompleteUpdate[0]).to.be.equals(true);
      expect(BigNumber.from(tokenInfoAfterCompleteUpdate[1]).eq(NFT_PRICE)).to.be.equals(true);
    });

    it("should allow a buyer to buy an nft with eth", async function () {
      await expect(methCreate.connect(seller).safeMint("firstTokenURI", NFT_PRICE, false))
        .to.emit(methCreate, "Transfer")
        .withArgs(ZERO_ADDRESS, sellerAddress, 0);

      await methCreate.connect(seller).approve(methCreate.address, 0);

      const newPrice = NFT_PRICE.add(1);
      await expect(methCreate.connect(buyer).buyNftWithEth(0, newPrice, false)).to.be.revertedWithCustomError(
        methCreate,
        "NotSellable",
      );

      await methCreate.connect(seller).setSellable(0, true);

      await expect(
        methCreate.connect(buyer).buyNftWithEth(0, newPrice, false, { value: NFT_PRICE.sub(1) }),
      ).to.be.revertedWithCustomError(methCreate, "InsufficientPayment");

      await setETHBalance(sellerAddress, INITIAL_ETH_BALANCE);
      await expect(methCreate.connect(buyer).buyNftWithEth(0, newPrice, false, { value: NFT_PRICE }))
        .to.emit(methCreate, "TokenSold")
        .withArgs(sellerAddress, buyerAddress, 0, ZERO_ADDRESS, anyValue);
      expect((await ethers.provider.getBalance(sellerAddress)).eq(INITIAL_ETH_BALANCE.add(NFT_PRICE))).to.be.equals(
        true,
      );
      expect(await methCreate.ownerOf(0)).to.be.equals(buyerAddress);

      const tokenInfoAfterSale = await methCreate.tokensInfo(0);
      expect(tokenInfoAfterSale[0]).to.be.equals(false);
      expect(BigNumber.from(tokenInfoAfterSale[1]).eq(newPrice)).to.be.equals(true);
    });

    it("should allow buyer to buy an nft with a token", async function () {});

    it("should allow owner to update price feeds", async function () {
      await expect(methCreate.connect(buyer).updatePriceFeed(USDC_ADDRESS, [PRICE_FEED, true])).to.be.revertedWith(
        "Ownable: caller is not the owner",
      );

      await expect(methCreate.connect(owner).updatePriceFeed(USDC_ADDRESS, [PRICE_FEED, true]))
        .to.emit(methCreate, "PriceFeedUpdated")
        .withArgs(USDC_ADDRESS, PRICE_FEED, true);

      const priceFeedFromChain = await methCreate.priceFeeds(USDC_ADDRESS);
      expect(priceFeedFromChain[0]).to.be.equals(PRICE_FEED);
      expect(priceFeedFromChain[1]).to.be.equals(true);
    });

    it("should allow seller to manage payment tokens", async function () {
      await expect(methCreate.connect(seller).addToMyPaymentTokens(USDC_ADDRESS)).to.be.revertedWithCustomError(
        methCreate,
        "NoPriceFeedSupportForToken",
      );

      await methCreate.connect(owner).updatePriceFeed(USDC_ADDRESS, [PRICE_FEED, true]);
      await expect(methCreate.connect(seller).addToMyPaymentTokens(USDC_ADDRESS))
        .to.emit(methCreate, "SellerAddedPaymentTokens")
        .withArgs(sellerAddress, USDC_ADDRESS);

      const paymentTokensAfterAdding = await methCreate.getSellersPaymentToken(sellerAddress);
      expect(paymentTokensAfterAdding[0]).to.be.equals(USDC_ADDRESS);

      await expect(methCreate.connect(seller).removeFromMyPaymentTokens(USDC_ADDRESS))
        .to.emit(methCreate, "SellerRemovedPaymentTokens")
        .withArgs(sellerAddress, USDC_ADDRESS);

      const paymentTokensAfterRemoving = await methCreate.getSellersPaymentToken(sellerAddress);
      expect(paymentTokensAfterRemoving.length).to.be.equals(0);
    });
  });
});
