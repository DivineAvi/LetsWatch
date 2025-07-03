import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"
gsap.registerPlugin(ScrollTrigger)
export default function Room() {
    useEffect(() => {

    }, []);
    return (
        <div className="relative w-full h-130 flex justify-center overflow-hidden">
            <div className="absolute z-30 w-[99%] bg-black h-full ">
                <div className="flex flex-col justfiy-center items-center w-full h-full">
                    {/* <div className="flex relative flex-col items-center justify-center text-white m-5  border-1 border-white/10 pb-10 ">
                        <h1 className="text-[20px] relative top-0 -translate-y-1/2 lg:text-[48px] bg-black tracking-widest p-2">Browse Rooms </h1>
                        <div className="w-9/10 h-9/10 border-1 border-white/10 box-content">
                            <div>

                            </div>
                        </div>
                    </div> */}

                    <div className="flex flex-col min-w-3/12 h-full relative items-center text-white border-1 border-white/20 m-5">
                        <h1 className="md:text-[24px] relative -translate-y-1/2 bg-black p-2">Room Options </h1>
                        <div className="flex flex-col h-full justify-center items-center w-full p-5 gap-5">


                            <button className="border-red-400  text-red-400 border-1 px-6 py-2 w-full rounded-lg">Create Room</button>

                            <div className="flex w-full">
                                <input type="text" className="outline-none rounded-lg p-2 rounded-r-none border-2 border-gray-800 text-ellipsis w-full min-w-4" />
                            
                                    <button className="border-gray-800 bg-gray-800 border-2 text-white px-3 py-2 rounded-l-none border-l-0 rounded-lg whitespace-nowrap text-ellipsis ">Join Room</button>
                        
                            </div>
                            <hr className="border-white/30 w-full"/>
                            <button className="border-white/20  border-1 text-white px-6 py-2 w-full rounded-lg">Browse Rooms</button>
                            <div className="h-full border- border-white/20 rounded-xl w-full">
                                <div className="rounded-xl w-full h-full border-1 border-white/20">

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className="absolute z-2 h-full w-full bg-gradient-to-b from-black via-transparent to-black"></div>
            <div className="border-2 border-red-500 w-full h-full"></div>
        </div>
    )
}
