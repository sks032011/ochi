import React from 'react'

function Cards() {
    return (
        <div className='h-screen w-full bg-zinc-900 items-center px-32 flex gap-5'>
            <div className="cardcontainer h-[50vh] w-1/2">
                <div className="card flex items-center justify-center relative rounded-xl w-full h-full bg-[#004D43]">

                    <img className='w-32' src="	https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />

                    <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full border-2 '>&copy; 2024-25</button>
                </div>
            </div>
            <div className="cardcontainer flex gap-5 h-[50vh] w-1/2">
                <div className="card flex items-center justify-center rounded-xl w-1/2 h-full bg-[#0a302c]">
                    <img className='w-32' src="		https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />

                  
                </div>
                <div className="card flex items-center justify-center relative rounded-xl w-1/2 h-full bg-[#0a302c]">
                    <img className='w-32' src="		https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />

                    <button className='absolute left-8 bottom-10 px-1  rounded-full border-2 '>&copy; 2024-25</button>
                </div>
            </div>
        </div>
    )
}

export default Cards
