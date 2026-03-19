// import logo from './logo.svg';

import { useState } from 'react';
import * as bip39 from "bip39";
import { Connection,clusterApiUrl } from "@solana/web3.js";
import { generateWalletFromSeed } from "./utils/wallet"
import './App.css';

function App() {
  const [mnemonic,setMnemonic]=useState("");
  const [address,setAddress]=useState("");
  const [balance,setBalance]=useState(0);
  const connection = new Connection(clusterApiUrl("devnet"));

  const handleGenerator= async()=>{
    const cleanMnemonic = mnemonic.trim();
    if(mnemonic==""){
      alert("Seed phrase cannot be empty ❌");
      return;
    }
    if (!bip39.validateMnemonic(cleanMnemonic)) {
    alert("Invalid seed phrase ❌");
    return;
  }
    const wallet = await generateWalletFromSeed(mnemonic,0);
    const pubKey = wallet.publicKey.toString();
    setAddress(pubKey);
    const bal = await connection.getBalance(wallet.publicKey);
    setBalance(bal/1e9);
  }
  return (
    <div>
        <h2>Solana wallet DashBoard</h2>
        <textarea placeholder='Enter Seed Phase'
        onChange={(e)=>setMnemonic(e.target.value)}/>
        <button onClick={handleGenerator}>Generate wallet</button>
        <h3>Address :{address}</h3>
        <h3>Balance :{balance}SOL</h3>
    </div>
  );
}

export default App;
