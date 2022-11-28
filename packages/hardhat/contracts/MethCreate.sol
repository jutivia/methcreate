// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./IMethCreate.sol";

contract MethCreate is IMethCreate, ERC721, ERC721URIStorage {
    using Counters for Counters.Counter;
    using Address for address payable;

    Counters.Counter private _tokenIdCounter;
    mapping(uint => TokenInfo) tokensInfo;

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

    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function setSellable(uint tokenId, bool sellable) public onlyTokenOwner(tokenId) {
        TokenInfo storage TokenInfo = tokensInfo[tokenId];
        TokenInfo.sellable = sellable;
    }

    function setPrice(uint tokenId, uint price) external onlyTokenOwner(tokenId) {
        TokenInfo storage TokenInfo = tokensInfo[tokenId];
        TokenInfo.price = price;
    }

    function buyTokenWithEth(uint tokenId, bool sellable) external payable onlySellableToken(tokenId) {
        if (msg.value <= tokensInfo[tokenId].price) revert InsufficientPayment();

        address seller = ownerOf(tokenId);
        safeTransferFrom(seller, msg.sender, tokenId);

        setSellable(tokenId, sellable);

        payable(seller).sendValue(msg.value);
    }
}
