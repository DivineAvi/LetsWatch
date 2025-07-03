import "./Moviecard.css"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
type MoviecardProps = {
    thumbnailUrl: string,
    title: string,
    description: string

}
export default function Moviecard(props: MoviecardProps) {
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (cardRef.current) {
            gsap.fromTo(
                cardRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: `top 90%`,
                        toggleActions: "restart none none reverse",
                    }
                }
            )
        }
    }, [])

    return (
        <div ref={cardRef} className='relative overflow-hidden movie-card-container flex'>
            <div className="absolute inset-0 card-gradient opacity-0 h-full top-0 bg-gradient-to-t from-black via-black/80 via-50% to-black pointer-events-none transition-all duration-500"></div>
            <div >
                <img src={props.thumbnailUrl} alt="" />
            </div>
            <div className='w-full max-h-full absolute card-stats top-[100%] transition-all duration-500 border-t-1 border-t-white/10 flex flex-col gap-4 '>
                <div className='font-bold text-[100%] md:text-[150%] w-full flex justify-center drop-shadow-[0_2px_8px_rgba(239,68,68,0.5)] h-40 overflow-hidden'>{props.title}</div>
                <div className="text-white">
                    Description
                </div>
                <div className="text-white/70 text-[100%] h-50 overflow-hidden text-ellipsis">
                    {props.description}
                </div>
                <div className="w-full flex justify-between items-center gap-1 p-2">
                    <button className=' cursor-pointer border-1 border-red-400 p-2 text-sm'>Watch Together</button>
                    <svg height="30" viewBox="0 0 512 512" width="30" xmlns="http://www.w3.org/2000/svg"><path d="m449.28 121.43a115.2 115.2 0 0 0 -137.89-35.75c-21.18 9.14-40.07 24.55-55.39 45-15.32-20.5-34.21-35.91-55.39-45a115.2 115.2 0 0 0 -137.89 35.75c-16.5 21.62-25.22 48.64-25.22 78.13 0 42.44 25.31 89 75.22 138.44 40.67 40.27 88.73 73.25 113.75 89.32a54.78 54.78 0 0 0 59.06 0c25-16.07 73.08-49.05 113.75-89.32 49.91-49.42 75.22-96 75.22-138.44 0-29.49-8.72-56.51-25.22-78.13z" strokeWidth='20px'stroke="#f9595f"/></svg>
                </div>
            </div>
        </div>
    )
}
