//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract MockPriceFeed {
    int256 public immutable price;
    uint public _decimals;

    constructor(int256 _price, uint dp) {
        price = _price;
        _decimals = dp;
    }

    function latestRoundData()
        external
        view
        returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)
    {
        return (0, price, 0, 0, 0);
    }

    function decimals() external view returns (uint) {
        return _decimals;
    }

    function setDecimals(uint newDecimals) external {
        _decimals = newDecimals;
    }
}
