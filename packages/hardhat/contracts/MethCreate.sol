// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./IMethCreate.sol";
import "./PaymentChecker.sol";

contract MethCreate is IMethCreate, Ownable, ERC721, ERC721URIStorage {
    using Counters for Counters.Counter;
    using Address for address payable;
    using EnumerableSet for EnumerableSet.AddressSet;

    Counters.Counter private _nftTokenIdCounter;
    mapping(uint => TokenInfo) public tokensInfo;
    mapping(address => EnumerableSet.AddressSet) sellersChoicePaymentTokens;
    mapping(address => address) public priceFeeds;

    modifier onlyTokenOwner(uint nftTokenId) {
        if (ownerOf(nftTokenId) != msg.sender) revert NotTokenOwner();
        _;
    }
    modifier onlySellableToken(uint nftTokenId) {
        if (!tokensInfo[nftTokenId].sellable) revert NotSellable();
        _;
    }

    constructor() ERC721("MethCreate", "MTC") {}

    function safeMint(string memory uri, uint price, bool sellable) external {
        uint256 nftTokenId = _nftTokenIdCounter.current();
        _nftTokenIdCounter.increment();
        _safeMint(msg.sender, nftTokenId);
        _setTokenURI(nftTokenId, uri);

        TokenInfo storage TokenInfo = tokensInfo[nftTokenId];
        TokenInfo.sellable = sellable;
        TokenInfo.price = price;
    }

    function setPrice(uint nftTokenId, uint price) external onlyTokenOwner(nftTokenId) {
        TokenInfo storage tokenInfo = tokensInfo[nftTokenId];
        tokenInfo.price = price;

        emit TokenUpdated(nftTokenId, price, tokenInfo.sellable);
    }

    function setSellable(uint nftTokenId, bool sellable) external onlyTokenOwner(nftTokenId) {
        TokenInfo storage tokenInfo = tokensInfo[nftTokenId];
        tokenInfo.sellable = sellable;

        emit TokenUpdated(nftTokenId, tokenInfo.price, sellable);
    }

    function buyNftWithEth(
        uint nftTokenId,
        uint newPrice,
        bool sellable
    ) external payable onlySellableToken(nftTokenId) {
        if (msg.value < tokensInfo[nftTokenId].price) revert InsufficientPayment();

        address seller = ownerOf(nftTokenId);
        this.safeTransferFrom(seller, msg.sender, nftTokenId);

        setTokenInfo(nftTokenId, newPrice, sellable);

        payable(seller).sendValue(msg.value);

        emit TokenSold(seller, msg.sender, nftTokenId, address(0), block.timestamp);
    }

    function buyNftWithToken(
        uint nftTokenId,
        uint newPrice,
        bool sellable,
        uint payment,
        address paymentToken
    ) external payable onlySellableToken(nftTokenId) {
        address seller = ownerOf(nftTokenId);
        address priceFeed = priceFeeds[paymentToken];

        if (!(sellersChoicePaymentTokens[seller].contains(paymentToken) && priceFeed != address(0)))
            revert InvalidPaymentToken();

        uint tokenPrice = tokensInfo[nftTokenId].price;
        if (!PaymentChecker.isPaymentSufficient(payment, paymentToken, tokenPrice, priceFeed))
            revert InsufficientPayment();

        this.safeTransferFrom(seller, msg.sender, nftTokenId);

        setTokenInfo(nftTokenId, newPrice, sellable);

        SafeERC20.safeTransferFrom(IERC20(paymentToken), msg.sender, seller, payment);

        emit TokenSold(seller, msg.sender, nftTokenId, address(0), block.timestamp);
    }

    function addToMyPaymentTokens(address token) external {
        if (priceFeeds[token] == address(0)) revert NoPriceFeedSupportForToken();
        sellersChoicePaymentTokens[msg.sender].add(token);

        emit SellerAddedPaymentTokens(msg.sender, token);
    }

    function removeFromMyPaymentTokens(address token) external {
        sellersChoicePaymentTokens[msg.sender].remove(token);

        emit SellerRemovedPaymentTokens(msg.sender, token);
    }

    function updatePriceFeed(address token, address priceFeed) external onlyOwner {
        priceFeeds[token] = priceFeed;

        emit PriceFeedUpdated(token, priceFeed);
    }

    function getSellersPaymentToken(address seller) external view returns (address[] memory tokens) {
        return sellersChoicePaymentTokens[seller].values();
    }

    function setTokenInfo(uint nftTokenId, uint price, bool sellable) public onlyTokenOwner(nftTokenId) {
        TokenInfo storage tokenInfo = tokensInfo[nftTokenId];
        tokenInfo.price = price;
        tokenInfo.sellable = sellable;

        emit TokenUpdated(nftTokenId, price, tokenInfo.sellable);
    }

    function tokenURI(
        uint256 nftTokenId
    ) public view override(ERC721, ERC721URIStorage, IMethCreate) returns (string memory) {
        return super.tokenURI(nftTokenId);
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 nftTokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(nftTokenId);
    }
}
