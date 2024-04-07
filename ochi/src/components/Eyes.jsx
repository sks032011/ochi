import React,{useEffect,useState,useRef} from 'react'

function Eyes() {
const [rotate, setRotate] = useState(0);

    // uEff as we only want it when we are at the screen 
    useEffect(() => {
      window.addEventListener("mousemove",(e)=>{
        let mouseX=e.clientX
        let mouseY=e.clientY
        let deltaX=mouseX-window.innerWidth/2;
        let deltaY=mouseY-window.innerHeight/2;
        let angle=Math.atan2(deltaY,deltaX)*(180/Math.PI);
        setRotate(angle-180);
      })

      
    })
    
    return (
        <div className='w-full h-screen eyes overflow-hidden'>
               {/* //with this scroll screen is visible for less time overlapp */}
            <div data-scroll data-scroll-speed="-.7" className='w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] bg-cover bg-center relative'>
                <div className="absolute flex gap-10   top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                    <div className=" flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white">
                        <div className="w-2/3 h-2/3 rounded-full bg-zinc-900 flex justify-center items-center">

                           {/* translatelagaya so that cirlc */}
                            <div style={{transform:`rotate(${rotate}deg)`}}className=" line w-full h-10 rotate-1">

                                <div className="w-10 h-10 bg-white rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white">
                        <div className="w-2/3 h-2/3 rounded-full bg-zinc-900 flex justify-center items-center">
                            
                            <div style={{transform:`rotate(${rotate}deg)`}}className=" line w-full h-10  rotate-1">

                                <div className="w-10 h-10 bg-white rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes
