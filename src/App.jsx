import { SiSolana, SiEthereum } from "react-icons/si";
import { DiNetbeans } from "react-icons/di";
import { useState } from "react";

function App() {
  const[solana,setSolana]=useState();
  const[ethereum,setEthereum]=useState();
  return (
    <div className="bg-white min-h-screen">
      
      {/* Header */}
      <div className="flex items-center p-8 w-full  font-bold text-white bg-gray-600 text-5xl">
        <DiNetbeans size={50}/>
         Solana Wallet
      </div>

      {/* Main Section */}
      <div className="w-full bg-gray-600 p-8 h-120">
        <h1 className="text-4xl text-white">
          Kosh supports multiple blockchains
        </h1>

        <h2 className="text-2xl text-white">
          Choose a blockchain to get started.
        </h2>

        {/* Buttons */}
        <div className="flex m-2 gap-3">

          <button className="flex items-center gap-2 bg-white text-black p-3 rounded-2xl">
            <SiSolana size={22} />
            Solana
          </button>

          <button className="flex items-center gap-2 bg-white text-black p-3 rounded-2xl">
            <SiEthereum size={22} />
            Ethereum
          </button>

        </div>
      </div>

      {/* Footer */}
      <div className="flex text-left bg-gray-500 h-25 text-white p-8">
        Designed and Developed by Tushar Jadaun
      </div>

    </div>
  );
}

export default App;
