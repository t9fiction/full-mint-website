import React, { useState } from 'react'
import { GlobalStore } from '../context/GlobalState'
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
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
    <Flex justify="center" align='center' height='100vh' paddingBottom="150px">
      <Box width='520px'>
        <div>
          <Text fontSize='48px' textShadow='0 5px #000000'>DESI KUKKAR</Text>
          <Text fontSize='30px' letterSpacing='-5.5%' fontFamily='VT323' textShadow='0 2px 2px #000000'>
            Can the Robo Punks do something special. This is a test Project.
          </Text>
        </div>
        {currentAccount ?
          <div>
            <Flex justify="center" align='center'>
              <Button
                backgroundColor="#D6517D"
                borderRadius='5px'
                boxShadow="0px 2px 2px 1px #0f0f0f"
                color='white'
                cursor='pointer'
                fontFamily='inherit'
                padding='15px'
                marginTop='10px'
                onClick={handleDecrement}>-</Button>
              <Input
                readOnly
                fontFamily='inherit'
                width='100px'
                height='40px'
                textAlign='center'
                paddingLeft='19px'
                marginTop='10px'
                type="number" value={mintAmount} />
              <Button
                backgroundColor="#D6517D"
                borderRadius='5px'
                boxShadow="0px 2px 2px 1px #0f0f0f"
                color='white'
                cursor='pointer'
                fontFamily='inherit'
                padding='15px'
                marginTop='10px'
                onClick={handleIncrement}>+</Button>
            </Flex>
            <Button
              backgroundColor="#D6517D"
              borderRadius='5px'
              boxShadow="0px 2px 2px 1px #0f0f0f"
              color='white'
              cursor='pointer'
              fontFamily='inherit'
              padding='15px'
              marginTop='10px'
              onClick={() => handleMint()} >Mint</Button>
          </div> : <Text
          marginTop='70px'
          fontSize='30px'
          letterSpacing='-5.5%'
          fontFamily='VT323'
          textShadow='0 3px #000000'
          color='#D6517D'
          >Connect Metamask to Mint NFT</Text>
        }
      </Box>
    </Flex>
  )
}

export default MainMint