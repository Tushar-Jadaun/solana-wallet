import * as bip39 from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair, keypair } from "@solana/web3.js";

export const generateWalletFromSeed = async(mnemonic,index=0)=>{
   const seed = await bip39.mnemonicToSeed(mnemonic);
   const path =`m/44'/501'/${index}'/0'`;
   const deriveSeed = derivePath(path,seed.toString("hex")).key;

   const keypair = Keypair.fromSeed(deriveSeed);
   return keypair;
}


// Seed Phrase (12 words)
//         ↓
// bip39 → master seed
//         ↓
// derivePath → specific account private key
//         ↓
// Keypair.fromSeed → wallet (public + private)