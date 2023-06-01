import Link from 'next/link';
import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx';

const Nav = () => {
    let Links =[
      {name:"Create Post",link:"post"},
      {name:"Profile",link:"profileDetails"},
      {name:"Need Testnet",link:"https://faucet.polygon.technology/"},
      {name:"Swap",link:"#"},
      {name:"Products",link:"allproducts"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0 '>
      <div className='md:flex items-center justify-between bg-[#30024A] py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-white'>
        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
        <ion-icon name="logo-ionic"></ion-icon>
        </span>
        <Link href="/">
        Amazan
        </Link>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <RxHamburgerMenu name={open ? 'close':'menu'}></RxHamburgerMenu>
      </div>

      <ul className={`md:flex md:items-center  md:pb-0 pb-12 absolute md:static bg-[#30024A] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-white hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
    
      </ul>
      </div>
    </div>
  )
}

export default Nav