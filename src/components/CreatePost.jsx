import { CONTRACT_ABI, CONTRACT_ADDRESS } from '@/Details/Contract';
import React, { useState } from 'react'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { Web3Storage, getFilesFromPath } from 'web3.storage'
function CreatePost() {
  
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [fileSize, setFileSize] = useState(null);
  const [fileType, setFileType] = useState(null);
  const [fileurl, setFileurl] = useState()
  const [content, setContent] = useState()
  const [yourAddress, setYourAddress] = useState()
  const [checkFile, setCheckFile] = useState()
const [id, setId] = useState()
const [name, setName] = useState()
const [category, setCategory] = useState()
const [cost, setCost] = useState()
const [rating, setRating] = useState()
const [stock, setStock] = useState()
      // Construct with token and endpoint
const client = new Web3Storage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGVmMUZlZjFkMjM2NzdFNDNBZjkzNTYwNTNEQjhjZUU5MTgxNkFkRTciLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODUzNzQwNTQ5MzMsIm5hbWUiOiJhbWF6b24ifQ.CJO2iz7HqaIJJ14iZbfdbilW1-5FdQxYcKH_kozNId8" })

const captureFile = async (e) => {
  try {
    setFile(e.target.files);
    setFileName(e.target.files[0].name);
    setFileSize(e.target.files[0].size);
    setFileType(e.target.files[0].type);
  } catch (err) {
    console.log(err);
  }
};

const { config, error } = usePrepareContractWrite({
  address: CONTRACT_ADDRESS,
  abi: CONTRACT_ABI,
  functionName: 'list',
  args:[id,name,category,fileurl,cost,rating,stock],
  onError(error) {
    console.log('Error', error)
  },
})
const { write } = useContractWrite(config)

const uploadFile = async(e) => {
	e.preventDefault()
	console.log("UPLOADINGGG")
	if(file) {
		try {
			const uploadedFile = await client.put(file, {
				name: fileName,
				maxRetries: 3,
				wrapWithDirectory: false
			})
			console.log(uploadedFile)
      setFileurl(uploadedFile)
		} catch(err) {
			console.log(err)
		}
	} else {
		console.log("NO FILE FOUND!")
	}
}

  return (
    <div className='pt-16 flex justify-center items-center flex-col space-y-6 bg-[#b377d5] h-screen'>
      <div className=' text-lg mt-6'>
        You Can Create The Products
      </div>
      <div className='flex justify-center items-center flex-col border rounded-xl border-white p-2 lg:w-3/5'>
        
{/* <div class="flex items-center justify-center w-96">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
    </label>
</div>  */}
<div className='space-y-6 flex flex-wrap items-center justify-center space-x-4'>
        <input  onChange={(e)=>captureFile(e)} type="file"  />

{/* //Id */}
<div className='border-gray-300 border rounded-xl mt-6' >
<input onChange={(e)=>setId(e.target.value)} className='shadow-lg px-1 py-2 rounded-xl outline-none ' type="Number" placeholder='Enter the ID....' />
</div>
{/* //Name */}
<div  className='border-gray-300 border rounded-xl' >
  <input onChange={(e)=>setName(e.target.value)} className='shadow-lg px-1 py-2 rounded-xl outline-none ' type="text" placeholder='Enter the Name' />
</div>
{/* //Category */}
<div  className='border-gray-300 border rounded-xl' >
  <input onChange={(e)=>setCategory(e.target.value)} className='shadow-lg px-1 py-2 rounded-xl outline-none ' type="text" placeholder='Enter the Category' />
</div>
{/* //Image */}
{/* <div>
  <input type="text" placeholder='Enter the Image' />
</div> */}
{/* //cost */}
<div  className='border-gray-300 border rounded-xl' >
  <input onChange={(e)=>setCost(e.target.value)} className='shadow-lg px-1 py-2 rounded-xl outline-none ' type="Number" placeholder='Enter the cost' />
</div>
{/* //rating */}
<div  className='border-gray-300 border rounded-xl' >
  <input onChange={(e)=>setRating(e.target.value)} className='shadow-lg px-1 py-2 rounded-xl outline-none ' type="Number" placeholder='Enter the rating' />
</div>
{/* //stock */}
<div  className='border-gray-300 border rounded-xl' >
  <input onChange={(e)=>setStock(e.target.value)} className='shadow-lg px-1 py-2 rounded-xl outline-none ' type="Number" placeholder='Enter the Stock' />
</div>

  </div>
  <button type='submit' disabled={!write} onClick={() => write?.()} className='border-gray-200 mb-10 mt-6 border px-1 py-2 rounded-xl'>CLICK</button>
      </div>
    </div>
  )
}

export default CreatePost