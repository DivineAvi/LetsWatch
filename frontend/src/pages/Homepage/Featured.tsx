import Moviecard from '../../components/MovieCard/Moviecard'

export default function Featured() {
    return (
        <div className='text-white overflow-hidden'>
            <div className='px-5 py-2 flex sm:flex-row flex-col justify-center w-full items-center gap-5'>
                <div className='text-[40px] font-bold whitespace-nowrap '>
                    Watch Now
                </div>
                <div className='w-full flex gap-2 justify-center sm:justify-end items-center'>
                    <input type="text" className="outline-none border-b-1 border-white/60 p-2 h-[50%]  " placeholder='Search movies' name="" id="" />
                    <button className='cursor-pointer'>

                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                        <path fill='currentColor' d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"></path>
                    </svg>
                    </button>
                </div>

            </div>
            
            <div className='relative '>
            <div className="absolute inset-x-0 top-0 h-full z-10 pointer-events-none bg-gradient-to-b from-black/70 via-transparent to-black/70" />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 bg-black gap-1 border-1 border-white/10 p-2">
                
                <Moviecard thumbnailUrl='https://preview.redd.it/what-have-been-some-of-your-favorite-marvel-movie-posters-v0-ampkluv1updd1.jpg?width=1080&crop=smart&auto=webp&s=9da0be7a427b37cd6ed3e0c4dd7e64f44b98d402' description='Story of a boy who used to train dragons in past.' title='MARVELS : CIVIL WAR' />
                <Moviecard thumbnailUrl='https://preview.redd.it/what-have-been-some-of-your-favorite-marvel-movie-posters-v0-hefukfv1updd1.jpg?width=640&crop=smart&auto=webp&s=2dab28c070fad57ce94531098384e24fd4c95d29' description='Story of a antman saving the world from dangers.' title='MARVELS : ANT MAN' />
                <Moviecard thumbnailUrl='https://preview.redd.it/what-have-been-some-of-your-favorite-marvel-movie-posters-v0-c6h09tv1updd1.jpg?width=1080&crop=smart&auto=webp&s=cb3c99135beb1151c5891bfbc1e64603c0a1a6ef' description='Story of a boy who used to train dragons in past.' title='MARVELS : DR STRANGE' />
                <Moviecard thumbnailUrl='https://preview.redd.it/what-have-been-some-of-your-favorite-marvel-movie-posters-v0-wla9niw1updd1.jpg?width=1080&crop=smart&auto=webp&s=218142dd05df3d024ebbfeec76853a492148dccd' description='Story of a boy who used to train dragons in past.' title='MARVELS : GUARDIANS OF GALAXY' />
                <Moviecard thumbnailUrl='https://preview.redd.it/what-have-been-some-of-your-favorite-marvel-movie-posters-v0-ga6e7uv1updd1.jpg?width=1080&crop=smart&auto=webp&s=42cbe25ebc836f33adb984c631b8beadf397294b' description='Story of a boy who used to train dragons in past.' title='SPIDERMAN HOMECOMING' />
                <Moviecard thumbnailUrl='https://preview.redd.it/what-have-been-some-of-your-favorite-marvel-movie-posters-v0-ta9txvv1updd1.jpg?width=640&crop=smart&auto=webp&s=5e64a019b7c3f5ec169bc80e8f2d6b964c196a1d' description='Story of a boy who used to train dragons in past.' title='MARVELS : LOGAN' />

            </div>
            </div>
        </div>
    )
}
