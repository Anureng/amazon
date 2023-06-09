import { CONTRACT_ABI, CONTRACT_ADDRESS } from '@/Details/Contract'
import React, { useEffect, useState } from 'react'
import { useContractRead,useAccount } from 'wagmi'
import Image from "next/legacy/image";
function Profile() {
  const { address, isConnecting, isDisconnected } = useAccount()
  const [id, setId] = useState()
  const { data, isError, isLoading } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'orders',
    args:[address,id]
  })

  const { data:OrderData } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'orderCount',
    args:[address]
  })
  console.log(OrderData);
 
  // const arrayDataItems = data.map(el =>
  //   <div className='flex space-x-4 border border-black p-2 flex-wrap'>
  //     <div className='lg:p-8 lg:text-xl p-2  shadow-xl  w-96 rounded-xl bg-purple-600  text-white'>
  //     <p> id :- {String(el.id)}</p>
  //     <img className='rounded-xl' src={"https://ipfs.io/ipfs/"+el.image} alt='loading' width={100} height={100} />
  //     <span> name :- {String(el.name)}</span> <br />
  //     <span> Rating By :- {String(el.rating)}</span><br />
  //     <span>Category :- {String(el.category)}</span><br />
  //     <span>cost by :- {String(el.cost)}</span><br />
  //     <span> stock :-{String(el.stock)}</span><br />
  //     </div>
  //   </div>
  // )
  console.log(data);
//   const arrayDataItems=data?.map(el=>
// <span>{el.id}</span>
// )

useEffect(() => {
setId(data)
}, [])


const productDetailsKeys = ["name", "id", "rating", "stock", "image", "cost","category"]

  return (
    <div className='mt-16'>
   <div>
    <div>
     <p>your orders are pending</p>
      <p>Order Count:- {String(parseInt(OrderData)-1)}</p>
    </div>
   </div>
   <div className=''>
   {/* {JSON.stringify(data, null,'')} */}
   {/* {data.map((val, idx) => {
                        val = ((typeof val === "boolean") && val === true) ? "true" : ((typeof val === "boolean")   && val === false)? "false" : val 
                          console.log(val,idx);
                       
                        return (<ul key={val.id} className='text-[#112642]'>
                          <li>{productDetailsKeys[idx]}: {typeof val  === "object" }</li>
                    </ul>)
                    }) } */}

                    <input type="text" className='' placeholder='Enter Id to View product' onChange={(e)=>setId(e.target.value)} />
                    <div className='border border-black w-96 text-xl rounded-xl p-4'>
                     {data && <div>Id :- {String(data.id)}</div>}
                     {data && <div> Name :- {String(data.name)}</div>}
                     {data && <img className='rounded-xl' src={"https://ipfs.io/ipfs/"+data.image} alt='loading' width={100} height={100} />}
                  {
                    data ? <div>

                  <span> Rating By :- {String(data.rating)}</span><br />
     <span>Category :- {String(data.category)}</span><br />
     <span>cost by :- {String(data.cost)}</span><br />
       <span> stock :-{String(data.stock)}</span><br />
                    </div>: <div>No product </div>}
             {/* {data.map((dataIdx,Idx)=>{
return(
  <div key={Idx}>
<span>{dataIdx.id}</span>
  </div>
)
             })} */}
             
                    </div>
   </div>
    </div>
  )
}

export default Profile