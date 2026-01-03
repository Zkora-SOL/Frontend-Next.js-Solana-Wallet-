'use client';


import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { Transaction } from '@solana/web3.js';
import { buildEd25519Instruction, buildZKPayInstruction } from '@zkora/sdk';


export function ZKPay() {
const { connection } = useConnection();
const wallet = useWallet();


async function submit() {
if (!wallet.publicKey || !wallet.signTransaction) return;


// 1. Generate proof (mock)
const proof = {};
const publicInputs = {};
const message = new Uint8Array([1, 2, 3]);


// 2. Request attestation
const { signature } = await fetch('/api/attest').then(r => r.json());


// 3. Build transaction
const tx = new Transaction();


tx.add(buildEd25519Instruction(message, signature, new Uint8Array()));
tx.add(buildZKPayInstruction({
programId: wallet.publicKey,
authority: wallet.publicKey,
authorityConfig: wallet.publicKey,
nullifier: wallet.publicKey,
commitment: wallet.publicKey,
newRoot: new Uint8Array(32),
}));


await wallet.sendTransaction(tx, connection);
}


return <button onClick={submit}>Submit Private Payment</button>;
}
