import React from 'react'
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=' w-full h-[70px] z-10 px-[60px]'>
      <nav className='flex justify-between text-center items-center uppercase text-white text-[.75em] pt-2'>
        <span className='w-[50px] h-[50px] rounded-4xl px-[18px] py-[17px] bg-white/10 cursor-pointer'><button className='cursor-pointer'><FaXTwitter /></button></span>
        <ul className='flex gap-[37px] ' style={{fontFamily: 'D-DIN'}}>
            <li className='cursor-pointer'>careers</li>
            <li className='cursor-pointer'>updates</li>
            <li className='cursor-pointer'>privacy policy</li>
            <li className='cursor-pointer'>suppliers</li>
        </ul>
        <p>&copy; 2025 spacex</p>
      </nav>
    </footer>
  )
}

export default Footer
