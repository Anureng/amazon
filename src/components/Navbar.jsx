import { ConnectButton } from '@rainbow-me/rainbowkit'
import React from 'react'
import { useAccount, useConnect, useEnsName } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

function Navbar() {


  return (
    <div className='flex items-center justify-evenly p-2 '>
      <div className='text-xl text-white'>
        Amazan
      </div>
      <div>
  <ConnectButton/>
      </div>
    </div>
  )
}

export default Navbar