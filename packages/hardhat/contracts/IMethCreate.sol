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
    error InvalidPaymentToken();
    error NoPriceFeedSupportForToken();

    event TokenUpdated(uint indexed nftTokenId, uint indexed price, bool indexed sellable);

    event TokenSold(
        address indexed seller,
        address indexed buyer,
        uint indexed nftTokenId,
        address paymentToken,
        uint time
    );

    event PriceFeedUpdated(address indexed token, address indexed priceFeed);

    event SellerAddedPaymentTokens(address indexed seller, address indexed token);

    event SellerRemovedPaymentTokens(address indexed seller, address indexed token);

    function safeMint(string memory uri, uint price, bool sellable) external;

    function setPrice(uint nftTokenId, uint price) external;

    function setSellable(uint nftTokenId, bool sellable) external;

    function buyNftWithEth(uint nftTokenId, uint newPrice, bool sellable) external payable;

    function buyNftWithToken(
        uint nftTokenId,
        uint newPrice,
        bool sellable,
        uint payment,
        address paymentToken
    ) external payable;

    function updatePriceFeed(address token, address priceFeed) external;

    function addToMyPaymentTokens(address token) external;

    function removeFromMyPaymentTokens(address token) external;

    function getSellersPaymentToken(address seller) external view returns (address[] memory tokens);

    function setTokenInfo(uint nftTokenId, uint price, bool sellable) external;

    function tokenURI(uint256 nftTokenId) external view returns (string memory);
}
