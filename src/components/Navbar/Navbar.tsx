import { useState } from "react"
import { NavLink } from "react-router-dom"
export default function Navbar() {
    const [NavOpen, SetNavOpen] = useState<Boolean>(false);

    return (
        <div className={`${NavOpen?'h-70':''} w-full h-20 fixed top-0 text-white/70 p-2 z-50 transition-all duration-1000`}>
            <div className="flex sm:justify-between sm:flex-row flex-col h-full p-3 rounded-xl border-1 border-white/10 backdrop-blur-md overflow-hidden ">
                <div className="flex sm:w-fit w-full justify-between items-center">
                    <div id="brand-logo" className="text-red-500 text-lg font-bold drop-shadow-[0_2px_8px_rgba(239,68,68,0.5)]">LetsWatch </div>
                    <svg onClick={()=>SetNavOpen(!NavOpen)}className="block sm:hidden border-1 border-white/50 p-1 rounded-xl" fill="none" height="40" viewBox="0 0 20 20" width="40" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m9 15c0-.5523.44772-1 1-1h6c.5523 0 1 .4477 1 1s-.4477 1-1 1h-6c-.55228 0-1-.4477-1-1zm-6-10c0-.55229.44771-1 1-1h12c.5523 0 1 .44771 1 1 0 .55228-.4477 1-1 1h-12c-.55229 0-1-.44772-1-1zm0 5c0-.55228.44771-1 1-1h12c.5523 0 1 .44772 1 1 0 .5523-.4477 1-1 1h-12c-.55229 0-1-.4477-1-1z" fill="white" fill-rule="evenodd" /></svg>
                </div>
                <div className={`${NavOpen?'opacity-100 ' :'sm:mt-0 mt-5  opacity-100'} flex flex-col sm:flex-row  items-center justify-between gap-10 w-full sm:w-full sm:pl-5 transition-all duration-1000`}>

                    <ul id="nav-links" className="flex sm:flex flex-col sm:flex-row gap-5 items-center">
                        <li><NavLink
                            to='/explore'
                            className={({ isActive }) =>
                                isActive
                                    ? 'px-3 py-2 rounded-lg bg-white text-black transition-all duration-300 hover:bg-gray-100'
                                    : 'px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-all duration-300'
                            }
                        >
                            Home
                        </NavLink></li>
                        <li><NavLink
                            to='/pricing'
                            className={({ isActive }) =>
                                isActive
                                    ? 'px-3 py-2 rounded-lg bg-white text-black transition-all duration-300 hover:bg-gray-100'
                                    : 'px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-all duration-300'
                            }
                        >
                            Pricing
                        </NavLink></li>
                        <li><NavLink
                            to='/about'
                            className={({ isActive }) =>
                                isActive
                                    ? 'px-3 py-2 rounded-lg bg-white text-black transition-all duration-300 hover:bg-gray-100'
                                    : 'px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-all duration-300'
                            }
                        >
                            About
                        </NavLink></li>
                    </ul>

                    <div id='nav-auth' className="flex gap-3 sm:flex items-center sm:border-l-1 border-l-white/10 pl-3">
                        <button className="px-4 py-2 rounded-lg cursor-pointer text-white focus:bg-white focus:text-black transition-all duration-300">Sign up</button>
                        <button className="px-4 py-2 rounded-lg cursor-pointer text-white focus:bg-white focus:text-black transition-all duration-300">Login</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
