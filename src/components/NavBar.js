import React from 'react'
import { GlobalStore } from '../context/GlobalState'
import { Box, Button, Flex, Image, Link, Spacer } from '@chakra-ui/react'
import Facebook from '../assets/social-media-icons/facebook_32x32.png';
import Twitter from '../assets/social-media-icons/twitter_32x32.png';
import email from '../assets/social-media-icons/email_32x32.png';

const NavBar = () => {
  const { getModalConnect, disconnectWallet, currentAccount } = GlobalStore();
  // const isConnected = Boolean(accounts[0]);

  const handleConnect = async () => {
    await getModalConnect()
  }

  return (
    <Flex justify="space-between" align='center' padding="30px">
      {/*Left Side of the NavBar for Social media Icons*/}
      <Flex justify="space-around" width="40%" padding="0 75px">
        <Link href="https://www.facebook.com/">
          <Image src={Facebook} boxSize='42px' margin='0 15px' />
        </Link>
        <Link href="https://www.twitter.com/">
          <Image src={Twitter} boxSize='42px' margin='0 15px' />
        </Link>
        <Link href="https://www.gmail.com/">
          <Image src={email} boxSize='42px' margin='0 15px' />
        </Link>
      </Flex>

      {/*Right Side of the NavBar for */}
      <Flex justify="space-around" width="40%" padding="0 75px">
        <Box margin="0 15px">About</Box>
        <Box margin="0 15px">Mint</Box>
        <Box margin="0 15px">Team</Box>
      </Flex>

      {/* Connect Button */}
      {currentAccount ? <Button
        backgroundColor="#D6517D"
          borderRadius='5px'
          boxShadow="0px 2px 2px 1px #0f0f0f"
          color='white'
          cursor='pointer'
          fontFamily='inherit'
          padding='15px'
          margin='0 15px'
        onClick={() => disconnectWallet()}>Disconnect</Button> : <Button
          backgroundColor="#D6517D"
          borderRadius='5px'
          boxShadow="0px 2px 2px 1px #0f0f0f"
          color='white'
          cursor='pointer'
          fontFamily='inherit'
          padding='15px'
          margin='0 15px'
          onClick={() => handleConnect()}>Connect</Button>}
    </Flex>
  )
}

export default NavBar