//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import { PriceFeed } from "./PriceFeed.sol";

interface IERC20Decimals {
    function decimals() external view returns (uint8);
}

/// @title Compare payment in token to price in eth
/// @author David, Enebeli
library PaymentChecker {
    using PriceFeed for address;

    function isPaymentSufficient(
        uint256 payment,
        address token,
        uint256 price,
        address feed,
        bool ethIsToken0
    ) internal view returns (bool) {
        if (ethIsToken0) return isPaymentSufficientSupportingFeedWithEthAsToken0(payment, token, price, feed);
        return isPaymentSufficientSupportingFeedWithEthAsToken1(payment, price, feed);
    }

    /// @param payment The payment
    /// @param token The payment token
    /// @param price The price of the content
    /// @return bool
    function isPaymentSufficientSupportingFeedWithEthAsToken0(
        uint256 payment,
        address token,
        uint256 price,
        address feed
    ) private view returns (bool) {
        uint256 paymentMajorFeedToken;
        uint256 paymentMinorFeedTokenNumerator;
        uint256 priceMajorFeedToken;
        uint256 priceMinorFeedTokenNumerator;

        uint tokenMultiplier = 10 ** IERC20Decimals(token).decimals();
        uint ethFeedTokenComboMultiplier = 1 ether * 10 ** feed.getDecimalPlaces();

        (paymentMajorFeedToken, paymentMinorFeedTokenNumerator) = convertTokenToFeedToken(
            payment,
            tokenMultiplier,
            ethFeedTokenComboMultiplier
        );
        (priceMajorFeedToken, priceMinorFeedTokenNumerator) = convertWEIToFeedToken(
            price,
            feed,
            tokenMultiplier,
            ethFeedTokenComboMultiplier
        );

        if (paymentMajorFeedToken > priceMajorFeedToken) return true;
        if (
            paymentMajorFeedToken == priceMajorFeedToken &&
            paymentMinorFeedTokenNumerator >= priceMinorFeedTokenNumerator
        ) return true;
        return false;
    }

    /// @notice Convert Wei to FeedToken
    /// @dev Since division is involved, to avoid loss, result has a major component and minor component.
    /// The major component is the whole number of usd
    /// The minor component is the numerator of the fractional usd scaled so that the effective denominator is TOKEN_MULTIPLIER X ETH_MULTIPLIER
    /// @param amount wei to convert
    /// @param feed feed
    /// @param tokenMultiplier tokenMultiplier
    /// @param ethFeedTokenComboMultiplier ethFeedTokenComboMultiplier
    /// @return majorFeedToken The whole number of feedToken
    /// @return minorFeedTokenNumerator The scaled numerator of the fractional feedToken.
    function convertWEIToFeedToken(
        uint256 amount,
        address feed,
        uint tokenMultiplier,
        uint ethFeedTokenComboMultiplier
    ) private view returns (uint256 majorFeedToken, uint256 minorFeedTokenNumerator) {
        uint256 feedTokenPerETH = feed.getPrice();
        uint256 majorFeedTokenPerWei = feedTokenPerETH / ethFeedTokenComboMultiplier;

        majorFeedToken = amount * majorFeedTokenPerWei;

        uint256 minorFeedTokenPerWei = feedTokenPerETH % ethFeedTokenComboMultiplier;
        minorFeedTokenNumerator = amount * minorFeedTokenPerWei * tokenMultiplier;
    }

    /// @dev Since division is involved, to avoid loss, result has a major component and minor component
    /// The major component is the whole number of chainlinkToken
    /// The minor component is the numerator of the fractional chainlinkToken scaled so that the effective denominator is TOKEN_MULTIPLIER X ETH_MULTIPLIER
    /// @param amount Token to convert
    /// @return majorFeedToken The whole number of feedToken
    /// @return minorFeedTokenNumerator The scaled numerator of the fractional usd.
    function convertTokenToFeedToken(
        uint256 amount,
        uint tokenMultiplier,
        uint ethFeedTokenComboMultiplier
    ) private pure returns (uint256 majorFeedToken, uint256 minorFeedTokenNumerator) {
        majorFeedToken = amount / tokenMultiplier;
        minorFeedTokenNumerator = (amount % tokenMultiplier) * ethFeedTokenComboMultiplier;
    }

    function isPaymentSufficientSupportingFeedWithEthAsToken1(
        uint256 amount,
        uint256 price,
        address feed
    ) private view returns (bool) {
        uint256 weiPerToken = feed.getPrice();
        uint256 tokenInWei = weiPerToken * amount;

        return tokenInWei >= price;
    }
}
