import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
function Landing() {
  return (
    
    <div data-scroll data-scroll-speed="-.3" data-scroll-section className='w-full h-screen bg-zinc-900 pt-1 '>
      <div className="textstructure mt-52 px-20">
        {["We create", "eye opening", "presentations"].map((items, index) => {

          return <div className="masker">
            <div className='w-fit flex  '>
              {/* can move this box using relative top... */}
              {index === 1 &&
               (<motion.div
                initial={{width:0}} 
                animate={{width:"9vw"}}
                 transition={{ease:[.76,0,.24,1],duration:1.5}}
                 className='mr-[1vw] w-[9vw] h-[5vw] bg-[url("https://i.pinimg.com/736x/f4/10/43/f41043ba7dc8673047dd26242ca676df.jpg")] bg-cover bg-center  relative top-[1vw]'></motion.div>)}

              <h1 className='uppercase text-[6vw] leading-[6vw] tracking-tighter font-bold'>{items}</h1>
            </div>
          </div>
        })}

      </div>
      <div className="border-t-2  mt-20 flex py-5 px-20 justify-between items-center">
        {["For Public and Private companies ", "From the first pitch to IPO "].map((item, index) => <p className='text-md font-light leading-none'>{item}</p>)}

        <div className="start  flex items-center gap-5">
          <div className='px-5 py-2 border-[.5vw] border-zinc-400 uppercase text-md font-light rounded-full'>start the project</div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400  rounded-full">
            <span className='rotate-[45deg]'>
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
