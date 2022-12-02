// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import { AggregatorV3Interface } from "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";

library PriceFeed {
    /**
     * Returns the latest price
     */
    function getPrice(address feed) internal view returns (uint) {
        AggregatorV3Interface priceFeed = AggregatorV3Interface(feed);

        (
            ,
            /*uint80 roundID*/ int price /*uint startedAt*/ /*uint timeStamp*/ /*uint80 answeredInRound*/,
            ,
            ,

        ) = priceFeed.latestRoundData();

        return uint256(price);
    }

    function getDecimalPlaces(address feed) internal view returns (uint) {
        return AggregatorV3Interface(feed).decimals();
    }
}
