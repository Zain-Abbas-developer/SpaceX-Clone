import React from 'react'
import Navbar from './components/Navbar'
import space from '../src/assets/video/section_1.mp4'
import mars from '../src/assets/video/section_2.mp4'
import { ArrowRight} from 'lucide-react'

const App = () => {
  return (
    <div className='h-full bg-black/40 '>
      <Navbar/>
      <div className='relative w-full h-screen  bg-linear-to-t from-black to-transparent'>
          <div className=' relative w-full h-screen  top-[-55px] z-[-1] '>
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
         <div className='absolute bottom-[110px] left-0 ml-20 uppercase  text-white '>
              <span className=' text-md tracking-widest'>October 13,&nbsp; 2025</span>
              <h1 className='text-[3.5em] font-bold leading-[55px]'>Starship's Eleventh<br/> Flight Test</h1>
              <button className='group flex w-[110px] h-[53px] place-items-center text-center justify-center text-xs uppercase gap-4 bg-black/50 rounded border-2 border-[#504646] mt-[60px] hover:bg-white hover:text-black hover:border-0 duration-150'>WATCH 
              <ArrowRight className='-ml-2.5 transition-transform duration-300 ease-in-out group-hover:translate-x-2' size={20} />
              </button>  
         </div>
       </div>
       <div className=' relative w-full h-200 text-[#f0f0fa] gap-6 bg-linear-to-b from-black to-transparent'>
          <div className='h-screen flex ml-[70px]'>
              {/* content are here  */}
              <div className='basis-[60vw] content-center mt-[200px]'>
                <h1 className='uppercase text-5xl font-bold tracking-wide text-left'>Making life<br/> multiplanetary</h1>
                <p className='text-left py-5'>SpaceX was founded under the belief that a future where humanity is out exploring the stars is<br/> fundamentally more exciting than one where we are not.</p>
                <button className='group flex w-[110px] h-[53px] place-items-center text-center justify-center text-xs gap-4 bg-black/50 rounded border-2 border-[#504646] mt-5 hover:bg-white uppercase hover:text-black hover:border-0 duration-150'>explore
                 <ArrowRight className='-ml-2.5 transition-transform duration-300 ease-in-out group-hover:translate-x-2' size={20} />
                </button>
              </div>
              <div className='relative w-1/2 h-screen overflow-hidden content-center'>
                {/* video container */}
                 <video
                    className="absolute top-[50px] left-[-310px] w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                  >
                    <source src={mars} type="video/mp4" />
                  </video>
              </div>
          </div>
       </div>
       {/* content goes here and make it simple and more reliable  */}
    </div>
  )
}

export default App
