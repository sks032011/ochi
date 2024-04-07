import React from 'react'
import {motion} from 'framer-motion'
function Marquee() {
  return (
    
    <div data-scroll data-scroll-speed="-.2" data-scroll-section  className='w-full  py-20 rounded-tl-3xl  bg-[#004D43]'>
      <div className="text border-t-2 border-b-2 border-zinc-300 flex  whitespace-nowrap overflow-hidden">
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity,duration:10,ease:"linear"}}  className='text-[15vw]  leading-none font-bold uppercase pr-20'>We Are Ochi</motion.h1>

        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity,duration:10,ease:"linear"}}  className='text-[15vw]   leading-none font-bold uppercase'>We Are Ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
