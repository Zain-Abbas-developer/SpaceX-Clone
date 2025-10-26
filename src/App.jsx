import React from 'react'
import Navbar from './components/Navbar'
import space from '../src/assets/video/section_1.mp4'
import mars from '../src/assets/video/section_2.mp4'
import landing from '../src/assets/video/section_4.mp4'
import satellite  from './assets/video/section_6.mp4'
import { ArrowRight, MoveRight, Satellite} from 'lucide-react'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='h-full bg-black/40 '>
      <Navbar/>
      <div className='relative w-full h-screen  bg-linear-to-t from-black to-transparent'>
          <div className=' relative w-full h-screen z-[-1] '>
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
       <div className=' relative w-full h-[130vh] text-[#f0f0fa] gap-6 bg-linear-to-b from-black to-transparent'>
          <div className='h-screen flex ml-[70px]'>
              {/* content are here  */}
              <div className='basis-[60vw] content-center mt-[200px]'>
                <h1 className='uppercase text-5xl font-bold tracking-wide text-left'>Making life<br/> multiplanetary</h1>
                <p className='text-left py-5'>SpaceX was founded under the belief that a future where humanity is out exploring the stars is<br/> fundamentally more exciting than one where we are not.</p>
                <button className='group flex w-[110px] h-[53px] place-items-center text-center justify-center text-xs gap-4 bg-black/50 rounded border-2 border-[#504646] mt-5 hover:bg-white uppercase hover:text-black hover:border-0 duration-150'>explore
                 <ArrowRight className='-ml-2.5 transition-transform duration-300 ease-in-out group-hover:translate-x-2' size={20} />
                </button>
              </div>
              <div className='relative w-1/2 h-[120vh] border-0 outline-0 overflow-hidden content-center'>
                {/* video container */}
                 <video
                    className="absolute top-0 left-[-330px] w-full h-[130vh] outline-0 border-0 content-center overflow-visible object-cover"
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
       {/* Third section start here */}
       <div className=' relative w-full h-[120vh] bg-[url(./src/assets/images/section_3.jpg)] bg-cover bg-center'>
          <div className='w-full h-[120vh]' style={{background: 'linear-gradient(-270deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, .8) 100%)'}}></div>
          <div className='absolute top-20 right-0 w-[55vw] h-[50vh] text-[#f0f0fa]'>
            <h1 className='text-[3rem] uppercase leading-20' style={{fontFamily: "D-DIN-bold"}}>Revolutionizing space<br/> technology</h1>
            <p>SpaceX’s Starship spacecraft and Super Heavy rocket is a fully reusable transportation system<br/> designed to carry both crew and cargo to Earth orbit, the Moon, Mars, and beyond.</p>
            <button className='group flex w-[110px] h-[53px] place-items-center text-center justify-center text-[.65rem] gap-4 bg-black/50 rounded border-2 border-[#504646] mt-5 hover:bg-white uppercase hover:text-black hover:border-0 duration-150'>learn more
                 <ArrowRight className='-ml-2.5 transition-transform duration-300 ease-in-out group-hover:translate-x-2' size={20} />
                </button>
          </div>
       </div>
       {/* fourth section starting  */}
       <div className='relative w-full h-[150vh] bg-white'>
        <div className='video-section'>
          <video
                    className="absolute top-0 left-0 w-full h-[150vh] object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                  >
                    <source src={landing} type="video/mp4" />
                  </video>
        </div>
        <span className='section-4 absolute top-0 left-0 w-full h-[150vh]' style={{background: "linear-gradient(270deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, .8) 100%)"}}></span>
        <div className='absolute top-[120px] left-[100px] w-[50vw] h-[55vh] text-[#f0f0fa]'>
          <h1 className='text-[3.2rem] leading-[50px] uppercase mb-2' style={{fontFamily: "D-DIN-bold"}}>World’s leading launch<br/> service provider</h1>
          <p>SpaceX leads the world in launches with its reliable, reusable rockets and is developing the fully and rapidly reusable rockets necessary to transform humanity’s ability to access space into something as routine as air travel.</p>
          <button className='group flex w-[150px] h-[50px]  place-items-center text-center justify-center text-[.65rem] gap-4 bg-black/50 rounded border-2 border-[#504646] mt-6 hover:bg-white uppercase hover:text-black hover:border-0 duration-150'>reserve your ride
            <ArrowRight className='-ml-2.5 transition-transform duration-300 ease-in-out group-hover:translate-x-2' size={20} />
          </button>
        </div>
       </div>
       {/* fifth section  */}
       <div className='relative w-full h-[150vh] bg-white'>
        {/* image here */}
        <div className='w-full h-[150vh] bg-[url(./src/assets/images/section_5.jpg)] bg-cover bg-center'></div>
        {/* content here  */}
        <div className='absolute top-0 right-0 w-[55vw] h-[55vh] mt-[150px]  '>
          <h1 className=' text-[3.2em] uppercase text-[#f0f0fa] leading-[60px] mb-4' style={{fontFamily: 'D-DIN-bold'}}>Advancing human<br/> spaceflight</h1>
          <p className='text-[#f0f0fa] pr-[70px]'>Since returning human spaceflight capabilities to the United States in 2020, SpaceX is helping build a new era where not just hundreds of people, but thousands and ultimately millions will be able to explore space.</p>
          <button className='group flex w-[150px] h-[50px]  place-items-center text-center justify-center text-[.68rem] gap-4 text-white bg-black/50 rounded border-2 border-[#504646] mt-6 hover:bg-white uppercase hover:text-black hover:border-0 duration-150'>join a mission
            <ArrowRight className='-ml-2.5 transition-transform duration-300 ease-in-out group-hover:translate-x-2' size={20} />
          </button>
        </div>
       </div>
       {/* last section content */}
       <div className='relative w-full h-[150vh] bg-white'>
         <span className='w-full h-[150vh] absolute top-0 left-0 right-0 z-10' style={{background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 100%)"}}></span>
          {/* video content  */}
          <div className=''>
            <video
                    className="absolute top-0 left-0 w-full h-[150vh] object-cover bg-center"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
               >
                <source src={satellite} type="video/mp4" />
            </video>
          </div>
          {/* content section  */}
          <div className='absolute bottom-1 top-0 content-center w-[50vw] h-[55vh] my-[20%] ml-[100px] text-[#f0f0fa] z-10'>
            <h1 className='text-[3.2em] uppercase leading-[60px] mb-3' style={{fontFamily: 'D-DIN-bold'}}>Delivering high-speed internet from space</h1>
            <p>Starlink is the world’s most advanced satellite constellation in low-Earth orbit, delivering reliable broadband internet capable of supporting streaming, online gaming, video calls, and more.</p>
            <button className='group flex w-[120px] h-[50px]  place-items-center text-center justify-center text-[.68rem] gap-4 text-white bg-black/50 rounded border-2 border-[#504646] mt-[35px] hover:bg-white uppercase hover:text-black hover:border-0 duration-150'>order now
              <ArrowRight className='-ml-2.5 transition-transform duration-300 ease-in-out group-hover:translate-x-2' size={20} />
            </button>
          </div>
       </div>
       <Footer/>
    </div>
  )
}

export default App
