import React from 'react'
import Navbar from './Navbar'
import { MdOutlinePostAdd,MdSwapHoriz } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { FaEthereum ,FaOpencart} from 'react-icons/fa';
import Link from 'next/link';

function Header() {
    const styling = {
        backgroundImage: `url('/Home.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100"
    }
    return (
        <div className='h-screen' style={styling}>
            <div><Navbar /></div>
            <div className='text-white font-bold p-10 text-xl flex items-center justify-center '>Welcome to the this Dapp</div>
            <div className='text-white text-xl px-8 space-y-12 py-2 w-96'>
                {/* <ul className='space-y-10 p-10 text-xl w-96 '>
                    <Link href="/post" className='space-y-10' >
                    <li className='flex items-center gap-x-2 space-y-2'> <MdOutlinePostAdd/> Create Post</li>
                    </Link>
                    <Link href="/profileDetails">
                    <li className='flex items-center gap-x-2'> <CgProfile/>Profile</li>
                    </Link>
                    <Link href="https://faucet.polygon.technology/">
                    <li className='flex items-center gap-x-2'><FaEthereum/> Need Polygon Mumbai Testnet</li>
                    </Link>
                    <Link href="#">
                    <li className='flex items-center gap-x-2'><MdSwapHoriz/> Swap TestNet</li>
                    </Link>
                    <Link href="allproducts">
                    <li className='flex items-center gap-x-2'><FaOpencart/>Products</li>
                    </Link>
                </ul> */}
                <div>
                <Link href="/post" className='space-y-10' >
                    <li className='flex items-center gap-x-2 space-y-2'> <MdOutlinePostAdd/> Create Product</li>
                    </Link>
                </div>
                <div>
                <Link href="/profileDetails">
                    <li className='flex items-center gap-x-2'> <CgProfile/>Profile</li>
                    </Link>
                </div>
                <div>
                <Link href="https://faucet.polygon.technology/">
                    <li className='flex items-center gap-x-2'><FaEthereum/> Need Polygon Mumbai Testnet</li>
                    </Link>
                </div>
                <div>
                <Link href="owner">
                    <li className='flex items-center gap-x-2'><FaEthereum/> Owner page</li>
                    </Link>
                </div>
                <div>
                <Link href="allproducts">
                    <li className='flex items-center gap-x-2'><FaOpencart/>Products</li>
                    </Link>
                </div>
            </div>
            <div className='text-white   font-bold text-xl flex justify-center  '>Made by Anurag Sidhu</div>
        </div>
    )
}

export default Header