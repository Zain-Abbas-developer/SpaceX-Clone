import React from 'react'
import Navbar from './components/Navbar'
import space from '../src/assets/video/section_1.mp4'

const App = () => {
  return (
    <div className=' relative h-screen bg-black/40'>
      <Navbar/>
      <div className=' relative w-full h-screen  top-[-55px] z-[-1] '>
        <div className=''>
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster
            preload='auto'
           >
            <source src={space} type="video/mp4" />
         </video>
        </div>
      </div>
      <div className='absolute bottom-[90px] left-0 ml-[80px] uppercase  text-white'>
          <span className=' text-md tracking-widest'>October 13,&nbsp; 2025</span>
          <h1 className='text-[3.5em] font-bold leading-[55px]'>Starship's Eleventh<br/> Flight Test</h1>
          {/* Changes here is being proved  */}
          <button className='flex w-[110px] h-[50px] place-items-center text-center justify-center text-xs uppercase gap-4 bg-black/50 rounded border-2 border-[#504646] mt-[60px] hover:bg-white hover:text-black hover:border-0 duration-150'>WATCH <svg className='w-[17px] h-[15px] text-white hover:text-black' viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-awx-c39="" d="M11.9893 5.58371L12.2471 5.89914L11.9893 6.21555L8.10059 10.9782L7.3252 10.3454L10.5479 6.39914L1.39941 6.39914L1.39941 5.39914L10.5479 5.39914L7.3252 1.45383L8.10059 0.821014L11.9893 5.58371Z" fill="#F0F0FA" fill-opacity="0.8"></path></svg></button>
        </div>
    </div>
  )
}

export default App
