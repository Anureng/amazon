import React from 'react'

function Search() {
  return (
    <>
    
    <div>
        <div className='flex  flex-col justify-center items-center space-y-6'>
            <div className='text-xl'>You can Search Here Any Products</div>
            <div><input type="text" placeholder='Search...' className='outline-none shadow-md px-1  border border-gray-10 py-2 rounded-xl flex-grow'  /></div>
          </div>
        <div>
        </div>
    </div>
      </>
  )
}

export default Search