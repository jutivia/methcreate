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
}
