import React, { useState } from 'react'
import { GlobalStore } from '../context/GlobalState'
import { ethers, BigNumber } from 'ethers'
import RoboPunksNFT from './RoboPunksNFT.json'

// const CONTRACT_ADDRESS = "0x2676037Fe2f9158D1C9bbA67D1CD28d33202a29B"
// const CONTRACT_ABI = RoboPunksNFT.abi;
// console.log("Contract ABI : ", CONTRACT_ABI)
const MainMint = () => {

  const { mintToken, mintAmount, setMintAmount, currentAccount } = GlobalStore();


  const handleMint = async () => {
    await mintToken()
  }

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1)
  }

  const handleIncrement = () => {
    if (mintAmount >= 3) return;
    setMintAmount(mintAmount + 1)
  }


  // console.log("accounts : ",abi)
  return (
    <div>
      <h2>ROBO PUNKS</h2>
      <p>
        Can the Robo Punks do something special. This is a test Project.
      </p>
      {currentAccount ?
        <div>
          <div>
            <button onClick={handleDecrement}>-</button>
            <input type="number" value={mintAmount} />
            <button onClick={handleIncrement}>+</button>
          </div>
          <button onClick={()=>handleMint()} >Mint</button>
        </div> : <div><p>Connect Metamask to Mint NFT</p></div>
      }
    </div>
  )
}

export default MainMint