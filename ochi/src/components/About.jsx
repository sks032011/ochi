import React from 'react'

function About() {
    return (
        <div className='w-full p-36 bg-[#76d826] rounded-tl-3xl text-black'>
            <h1 className='text-[3vw] leading-[3.6vw] tracking-tighter'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
            <div className="w-full border-t-[2px] pt-10 mt-20 border-[#3a6d10] flex gap-5 ">
                <div className="w-1/2 ">
                    <h1 className='text-7xl'>Our Approach:</h1>
                    <button className="px-10 uppercase mt-10 bg-zinc-900 py-5 rounded-full flex gap-10 items-center text-white">
                        Read More
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                    </button>
                </div>
                <div className="w-1/2 h-[60vh] rounded-3xl bg-green-800 "></div>
            </div>
        </div>
    )
}

export default About
