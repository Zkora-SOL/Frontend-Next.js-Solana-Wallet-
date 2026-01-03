'use client';


import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';


export function Providers({ children }: { children: React.ReactNode }) {
const network = WalletAdapterNetwork.Devnet;
const endpoint = 'https://api.devnet.solana.com';


return (
<ConnectionProvider endpoint={endpoint}>
<WalletProvider wallets={[new PhantomWalletAdapter()]} autoConnect>
<WalletModalProvider>{children}</WalletModalProvider>
</WalletProvider>
</ConnectionProvider>
);
}
