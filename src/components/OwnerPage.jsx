import { CONTRACT_ABI, CONTRACT_ADDRESS } from '@/Details/Contract'
import React,{useState} from 'react'
import { useContractRead } from 'wagmi'
import Image from 'next/image'
function OwnerPage() {
  const [contractAddress, setContractAddress] = useState()
  const { data, isError, isLoading } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'checkBalance',
  })
  console.log(data)
  return (
    <div className='mt-16'>
      <div className='flex flex-col h-screen bg-purple-200  justify-center items-center space-y-10'>
      <div className='flex justify-center items-center text-xl text-purple-950'>
       <p className='text-2xl'>
         Owner Address :- 
        </p>
       <p className='font-bold text-md'>
         0x0AcBD71649b4339A08C2d14f843dA3A4610d2730
        </p>
      </div>
      <div className='flex justify-center items-center space-x-4'>
        <div>
          <Image className='rounded-xl' src="/Home.jpg" alt='nothing' width={300} height={300}  />
        </div>
      <div className='p-4 rounded-xl bg-purple-600 space-x-2 space-y-2'>
        <p className='flex justify-center items-center text-lg text-white'>Only Owner Can make anyone owner by entering the address of user</p>
        <input className="bg-white outline-none text-white px-1 py-2 rounded-xl border border-white" placeholder='Enter Address' type="text" onChange={(e)=>setContractAddress(e.target.value)}/>
        <button className='bg-purple-200 text-black px-1 py-2 rounded-xl'>Click</button>
      </div>
      </div>
      </div>
    </div>
  )
}

export default OwnerPage