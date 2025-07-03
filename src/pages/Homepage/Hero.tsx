export default function Hero() {
  return (
    <div className="text-white/70 relative w-full h-full flex flex-col items-center justify-center pt-20">
      <div className="relative w-full h-full rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black via-transparent via-black to-black "></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black via-transparent via-black to-black "></div>
        <video 
          src="https://res.cloudinary.com/drmjq6ixk/video/upload/v1751225179/videoplayback_1_vfcofu.mp4" 
          className="w-full h-100 object-cover rounded-3xl " 
          muted 
          autoPlay
          loop
        />
      </div>

      <div className="text-center absolute z-10">
        <p className="text-[32px] text-white font-semibold"> 
         Watch all videos at oneplace
        </p>
        <p className="text-[20px] text-white"> 
            Online with friends
       </p>
      </div>
    </div>
  )
}
