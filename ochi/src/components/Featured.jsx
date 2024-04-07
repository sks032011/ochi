import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'
import { Power4 } from "gsap/all";
function Featured() {
    const cards = [useAnimation(), useAnimation()];

    const handleHover = (index) => {
        cards[index].start({ y: "0" })
    }
    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" })
    }
    return (
        <div className='w-full py-20 '>
            <div className='w-full px-20 border-b-[1px] border-zinc-800 pb-20'>
                <h1 className='text-6xl font-sans tracking-tighter'>Featured Projects</h1>
            </div>
            <div className='px-20'>
                <div className="cards w-full flex mt-10 gap-10">

                    <motion.div onHoverStart={() => handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className=" relative cardcontainer   w-1/2 h-[75vh]">

                        <h1 className=' flex overflow-hidden absolute  text-[#c4eb35] text-8xl z-[9]  tracking-tighter leading-none right-0 translate-x-1/2 -translate-y-1/2 top-1/2'>
                            {"SKS".split('').map((item, index) => (
                                <motion.span initial={{ y: "100%" }} animate={cards[0]}
                                    className='inline-block '>{item}</motion.span>
                            ))}
                        </h1>

                        <div className=" card rounded-xl overflow-hidden w-full  h-full ">
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                        </div>
                    </motion.div>

                    <motion.div onHoverStart={() => handleHover(1)}  onHoverEnd={()=>handleHoverEnd(1)} className=" cardcontainer relative  w-1/2 h-[75vh]">
                        <h1 className='flex overflow-hidden absolute right-full text-[#c4eb35] text-8xl z-[9]  tracking-tighter leading-none translate-x-1/2 -translate-y-1/2 top-1/2'>
                            {"VISE".split('').map((item, index) => (
                                <motion.span
                                 initial={{ y: "100%" }}
                                animate={cards[1]}
                                transition={{ ease: [.22, 1, .36, 1], delay: index * .01 }}

                                    className='inline-block '>{item}</motion.span>
                            ))}
                        </h1>
                        <div className="rounded-xl card  overflow-hidden w-full  h-full ">
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Featured
