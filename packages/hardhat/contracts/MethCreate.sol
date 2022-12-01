// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./IMethCreate.sol";
import { PriceFeed } from "./PriceFeed.sol";

contract MethCreate is IMethCreate, Ownable, ERC721, ERC721URIStorage {
    using Counters for Counters.Counter;
    using Address for address payable;
    using EnumerableSet for EnumerableSet.AddressSet;

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
        _;
    }

    constructor() ERC721("MethCreate", "MTC") {}

    function safeMint(address to, string memory uri, uint price, bool sellable) external {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);

        TokenInfo storage TokenInfo = tokensInfo[tokenId];
        TokenInfo.sellable = sellable;
        TokenInfo.price = price;
    }

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
    }

    function getSellersPaymentToken(address seller) external view returns (address[] memory tokens) {
        return sellersChoicePaymentTokens[seller].values();
    }

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
    }
}
