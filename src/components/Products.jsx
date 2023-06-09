import React,{useState} from 'react'
import Search from './Search'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '@/Details/Contract' 
import { useContractRead,useAccount } from 'wagmi'
import { usePrepareContractWrite, useContractWrite } from 'wagmi'
function Products() {
  const { address, isConnecting, isDisconnected } = useAccount()
  const [id,setId] = useState()
  const { data, isError, isLoading } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'allitem',
  })

  let ok

// {address &&  ok==data[0].buyed}
  console.log(data);
  const arrayDataItems = data?.map(el =>
    <div key={el} className='flex space-x-4  p-2 flex-wrap'>
      <div className='lg:p-8 lg:text-xl p-2  shadow-xl  w-96 rounded-xl bg-purple-600  text-white' key={el.id}>
      <p> id :- {el.id.toString()}</p>
      <img className='rounded-xl' src={"https://ipfs.io/ipfs/"+el.image} alt='loading' width={100} height={100} />
      <span> name :- {el.name}</span> <br />
      <span> Rating By :- {el.rating.toString()}</span><br />
      <span>Category :- {el.category}</span><br />
      <span>cost by :- {el.cost.toString()}</span><br />
      <span> stock :-{el.stock.toString()}</span><br />
      <span>Buyed:-{ok?(<div>true</div>):(<div>false</div>)}</span>
      {ok}
      </div>
    </div>
  )

  const { config, error } = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'buy',
    args:[id]
  })
  const { write } = useContractWrite(config)

  return (
    <div className='mt-16 bg-purple-200 h-screen'>
     <div>
     </div>
     <div className='flex justify-center items-center flex-col space-y-4 p-2'>
      <p className='text-xl font-semibold mt-2'>Enter Product Id to Buy the product</p>
      <div className='space-x-2'>
     <input className='outline-none  px-1 py-2 rounded-xl' placeholder='Enter the Id' type="text" onChange={(e)=>setId(e.target.value)} />
     <button  className='px-1 py-2 bg-purple-600 text-white rounded-xl' disabled={!write} onClick={() => write?.()}>Click</button>
      </div>
     </div>
     <div>
     {arrayDataItems}
     </div>
   
    </div>
  )
}

export default Products