import React from 'react'
import { GlobalStore } from '../context/GlobalState'

const NavBar = () => {
  const { getModalConnect, disconnectWallet, currentAccount } = GlobalStore();
  // const isConnected = Boolean(accounts[0]);

  const handleConnect = async ()=>{
    await getModalConnect()
  }

  return (
    <div>
    {/*Left Side of the NavBar for Social media Icons*/}
    <div>Facebook</div>
    <div>Twitter</div>
    <div>Email</div>
    
    {/*Right Side of the NavBar for */}
    <div>About</div>
    <div>Mint</div>
    <div>Team</div>

    {/* Connect Button */}
    {currentAccount ? <button onClick={()=>disconnectWallet()}>Disconnect</button> : <button onClick={()=>handleConnect()}>Connect</button>}
    </div>
  )
}

export default NavBar