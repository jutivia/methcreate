// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
<<<<<<< HEAD
=======
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/interfaces/IERC20.sol";
>>>>>>> d649ac7d4de327aa65c4758a25d681f00d8b551d
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./IMethCreate.sol";
<<<<<<< HEAD
import { PriceFeed } from "./PriceFeed.sol";
=======
import "./PaymentChecker.sol";
>>>>>>> d649ac7d4de327aa65c4758a25d681f00d8b551d

contract MethCreate is IMethCreate, Ownable, ERC721, ERC721URIStorage {
    using Counters for Counters.Counter;
    using Address for address payable;
    using EnumerableSet for EnumerableSet.AddressSet;

<<<<<<< HEAD
    Counters.Counter private _tokenIdCounter;
    mapping(uint => TokenInfo) tokensInfo;
    mapping(address => EnumerableSet.AddressSet) sellersChoicePaymentTokens;
    mapping(address => address) priceFeeds;

    modifier onlyTokenOwner(uint tokenId) {
        if (ownerOf(tokenId) != msg.sender) revert NotTokenOwner();
        _;
    }
    modifier onlySellableToken(uint tokenId) {
        if (!tokensInfo[tokenId].sellable) revert NotSellable();
=======
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
>>>>>>> d649ac7d4de327aa65c4758a25d681f00d8b551d
        _;
    }

    constructor() ERC721("MethCreate", "MTC") {}

<<<<<<< HEAD
    function safeMint(address to, string memory uri, uint price, bool sellable) external {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);

        TokenInfo storage TokenInfo = tokensInfo[tokenId];
=======
    function safeMint(string memory uri, uint price, bool sellable) external {
        uint256 nftTokenId = _nftTokenIdCounter.current();
        _nftTokenIdCounter.increment();
        _safeMint(msg.sender, nftTokenId);
        _setTokenURI(nftTokenId, uri);

        TokenInfo storage TokenInfo = tokensInfo[nftTokenId];
>>>>>>> d649ac7d4de327aa65c4758a25d681f00d8b551d
        TokenInfo.sellable = sellable;
        TokenInfo.price = price;
    }

<<<<<<< HEAD
    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function setPrice(uint tokenId, uint price) external onlyTokenOwner(tokenId) {
        TokenInfo storage tokenInfo = tokensInfo[tokenId];
        tokenInfo.price = price;

        emit TokenUpdated(tokenId, price, tokenInfo.sellable);
    }

    function setSellable(uint tokenId, bool sellable) external onlyTokenOwner(tokenId) {
        TokenInfo storage tokenInfo = tokensInfo[tokenId];
        tokenInfo.sellable = sellable;

        emit TokenUpdated(tokenId, tokenInfo.price, sellable);
    }

    function buyTokenWithEth(uint tokenId, uint newPrice, bool sellable) external payable onlySellableToken(tokenId) {
        if (msg.value <= tokensInfo[tokenId].price) revert InsufficientPayment();

        address seller = ownerOf(tokenId);
        safeTransferFrom(seller, msg.sender, tokenId);

        setTokenInfo(tokenId, newPrice, sellable);

        payable(seller).sendValue(msg.value);

        emit TokenSold(seller, msg.sender, tokenId, address(0), block.timestamp);
    }

    function addToMyPaymentTokens(address[] calldata tokens) external {
        address[] memory actualTokensAdded;
        for (uint i = 0; i < tokens.length; i++) {
            if (PriceFeed.hasPriceFeed(tokens[i])) {
                sellersChoicePaymentTokens[msg.sender].add(tokens[i]);
                actualTokensAdded[i] = tokens[i];
            }
        }

        emit SellerAddedPaymentTokens(msg.sender, actualTokensAdded);
    }

    function removeFromMyPaymentTokens(address[] calldata tokens) external {
        for (uint i = 0; i < tokens.length; i++) {
            sellersChoicePaymentTokens[msg.sender].remove(tokens[i]);
        }

        emit SellerRemovedPaymentTokens(msg.sender, tokens);
=======
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
>>>>>>> d649ac7d4de327aa65c4758a25d681f00d8b551d
    }

    function getSellersPaymentToken(address seller) external view returns (address[] memory tokens) {
        return sellersChoicePaymentTokens[seller].values();
    }

<<<<<<< HEAD
    function setTokenInfo(uint tokenId, uint price, bool sellable) public onlyTokenOwner(tokenId) {
        TokenInfo storage tokenInfo = tokensInfo[tokenId];
        tokenInfo.price = price;
        tokenInfo.sellable = sellable;

        emit TokenUpdated(tokenId, price, tokenInfo.sellable);
    }

    function tokenURI(
        uint256 tokenId
    ) public view override(ERC721, ERC721URIStorage, IMethCreate) returns (string memory) {
        return super.tokenURI(tokenId);
=======
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
>>>>>>> d649ac7d4de327aa65c4758a25d681f00d8b551d
    }
}
