import { NavLink } from 'react-router-dom';

const AppBlogBody = () => {
    return (
        <div className="h-[580px] grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-2 px-4 md:px-20">
            <div className="relative row-span-2 h-full">
                <img
                    src="/assets/myhob-bas-pic.jpg"
                    alt="myhobby"
                    className="h-full w-full object-cover"
                />
                <h1 className="absolute top-0 right-0 text-white text-3xl sm:text-4xl lg:text-5xl font-bold opacity-65 mr-3 m-2">
                    Besides coding, my favorite thing is playing basketball <br /> and.
                </h1>
            </div>
            <div className="relative h-full">
                <img
                    src="/assets/math-pic.jpg"
                    alt="math"
                    className="w-full h-full object-cover"
                />
                <h1 className="absolute bottom-0 right-0 text-white text-3xl sm:text-4xl lg:text-5xl font-bold opacity-65 mr-3 m-2">
                    Math
                </h1>
            </div>
            <div className="relative h-full">
                <img
                    src="/assets/cat-pic.jpg"
                    alt="cat"
                    className="w-full h-full object-cover"
                />
                <h1 className="absolute top-0 left-0 text-white text-3xl sm:text-4xl lg:text-5xl font-bold opacity-65 mr-3 m-2">
                    Cat
                </h1>
            </div>
            <div className="relative h-full">
                <img
                    src="/assets/game-pic.jpg"
                    alt="game"
                    className="w-full h-full object-cover"
                />
                <h1 className="absolute top-0 left-0 text-white text-3xl sm:text-4xl lg:text-5xl font-bold opacity-65 mr-3 m-2">
                    Game
                </h1>
            </div>
            <div className="relative h-full">
                <img
                    src="/assets/movie-pic.jpg"
                    alt="movie"
                    className="w-full h-full object-cover"
                />
                <h1 className="absolute bottom-0 left-0 text-white text-3xl sm:text-4xl lg:text-5xl font-bold opacity-65 mr-3 m-2">
                    Movie
                </h1>
            </div>
            <div className="md:hidden flex flex-row justify-end items-center space-x-4 pb-6">
                <NavLink to='/project' className="bg-gray-200 text-black rounded-md py-[8px] px-4">
                    Back
                </NavLink>
                <NavLink to='/contact' className="bg-violet-600 text-white rounded-md py-[8px] px-4">
                    Next
                </NavLink>
            </div>
        </div>
    )
}

export default AppBlogBody;