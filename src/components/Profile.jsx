import { CONTRACT_ABI, CONTRACT_ADDRESS } from '@/Details/Contract'
import React from 'react'
import { useContractRead } from 'wagmi'
function Profile() {
  const { data, isError, isLoading } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'allitem',
  })
  console.log(data);
  return (
    <div className='mt-16'>
      jcb
    </div>
  )
}

export default Profile