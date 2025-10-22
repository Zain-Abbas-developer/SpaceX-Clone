import React from 'react'
import Navbar from './components/Navbar'
import space from '../src/assets/video/section_1.mp4'
import { ArrowRight} from 'lucide-react'

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
          <button className='flex w-[110px] h-[50px] place-items-center text-center justify-center text-xs uppercase gap-4 bg-black/50 rounded border-2 border-[#504646] mt-[60px] hover:bg-white hover:text-black hover:border-0 duration-150'>WATCH <ArrowRight className='transition-transform duration-300 group-hover:translate-x-2' size={18} /></button>
        </div>
    </div>
  )
}

export default App
