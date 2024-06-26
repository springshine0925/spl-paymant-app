import {useMemo} from "react";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

import { clusterApiUrl } from "@solana/web3.js";
import "./App.css";
import"@solana/wallet-adapter-react-ui/styles.css";

function App() {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(()=>clusterApiUrl(network), [network]);
  const wallets = useMemo(
    ()=>[],
    [network],
  );

  return (
    <ConnectionProvider endpoint ={endpoint}>
      <WalletProvider wallets ={wallets} autoConnect>
        <WalletModalProvider>
        <WalletMultiButton/>
        <h1>Hello Solana</h1>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
export default App;