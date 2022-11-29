//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

interface IMethCreate {
    struct TokenInfo {
        bool sellable;
        uint price;
    }

    error NotTokenOwner();
    error NotSellable();
    error InsufficientPayment();

    event TokenUpdated(uint indexed tokenId, uint indexed price, bool indexed sellable);

    event TokenSold(
        address indexed seller,
        address indexed buyer,
        uint indexed tokenId,
        address paymentToken,
        uint time
    );

    event SellerAddedPaymentTokens(address indexed seller, address[] indexed tokens);

    event SellerRemovedPaymentTokens(address indexed seller, address[] indexed tokens);

    function safeMint(address to, string memory uri, uint price, bool sellable) external;

    function setPrice(uint tokenId, uint price) external;

    function setSellable(uint tokenId, bool sellable) external;

    function buyTokenWithEth(uint tokenId, uint newPrice, bool sellable) external payable;

    function addToMyPaymentTokens(address[] calldata tokens) external;

    function removeFromMyPaymentTokens(address[] calldata tokens) external;

    function getSellersPaymentToken(address seller) external view returns (address[] memory tokens);

    function setTokenInfo(uint tokenId, uint price, bool sellable) external;

    function tokenURI(uint256 tokenId) external view returns (string memory);
}
