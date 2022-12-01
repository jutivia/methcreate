import "../styles/global.css";
import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { ChakraProvider } from "@chakra-ui/react";

const { chains, provider, webSocketProvider } = configureChains(
    /**@notice you can add or remove more chains as you see fit*/
    [chain.mainnet, chain.polygon, chain.polygonMumbai],
    /**@notice This is Alchemy's default API key.
      You can get your own at https://dashboard.alchemyapi.io */
    [alchemyProvider({ apiKey: 'RuHvFVIm3ilyK2kUP-20Tg7l3Z90wbJ8', }), publicProvider()]
);

const { connectors } = getDefaultWallets({
    appName: 'methcreate',
    chains,
});

const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
    webSocketProvider,
});
function MyApp({ Component, pageProps }) {
	return (
	<>
	 <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains}>
            <ChakraProvider >
	<Component {...pageProps} />;
    </ChakraProvider>
	</RainbowKitProvider>
        </WagmiConfig>
	</>
	);
}

export default MyApp;
