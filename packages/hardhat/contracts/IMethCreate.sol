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

    event TokenUpdated(
        uint indexed tokenId,
        uint indexec price,
        bool indexed sellable
    );

    event TokenSold(
        address indexed seller,
        address indexed buyer,
        uint indexed tokenId,
        address paymentToken,
        uint time
    );
}
