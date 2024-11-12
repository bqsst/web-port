import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const AppAboutBody = (props) => {
    const { reset } = props;
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <div className="h-[450px] flex flex-col md:flex-row space-x-20 items-center justify-center sm:px-20">
            <div className="h-full w-full sm:w-2/3 md:w-full lg:w-1/2">
                {isLoading && (
                    <div className="absolute inset-0 right-[45%] flex items-center justify-center">
                        <div className="loader border-t-transparent border-4 border-violet-600 rounded-full w-10 h-10 animate-spin"></div>
                    </div>
                )}
                <img
                    src="/assets/my-picture.png"
                    alt="mypic"
                    className={`object-contain w-full h-full mt-20 md:mt-0 ${isLoading ? 'hidden' : ''}`}
                    onLoad={handleImageLoad}
                />
            </div>
            <div className="h-full w-full lg:w-1/2 pt-24 space-y-4">
                <h1 className="text-xl sm:text-3xl md:text-2xl lg:text-3xl font-semibold">About Me</h1>
                <h1 className={`overflow-hidden whitespace-nowrap text-xl sm:text-2xl md:text-xl lg:text-2xl text-violet-600 font-poppins ${!reset ? 'animate-typing' : ''
                    }`}
                    style={{ width: '0%' }}>
                    Web Developer
                </h1>
                <p className="text-gray-600 text-base mr-10 sm:text-lg md:text-base lg:text-lg">
                    Hello! My name is Abbas Leenud, and I'm passionate about Web Application Development. Here is my brief profile.
                </p>
                <p className="mt-4 text-base lg:text-lg">
                    <span className="font-semibold text-violet-600">Date of birth:</span> 9/10/2003 <br />
                    <span className="font-semibold text-violet-600">Sex:</span> Male <br />
                    <span className="font-semibold text-violet-600">Nationality:</span> Thai <br />
                    <span className="font-semibold text-violet-600">GPA:</span> 3.53
                </p>
                <h1 className="text-xl lg:text-2xl font-medium mt-6">Interest</h1>
                <p className="text-gray-600 mr-10 text-base md:text-base lg:text-lg">
                    I am interested in developing web applications and cybersecurity systems.
                </p>
                <div className="md:hidden flex justify-end items-center pr-20 pb-6">
                    <NavLink to='/project' className="bg-violet-600 text-white rounded-md py-[8px] px-4">
                        Next
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default AppAboutBody;