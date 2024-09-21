import { NavLink } from 'react-router-dom';

const AppContactBody = () => {
    return (
        <div className="flex flex-col">
            <div className="h-[100px] flex justify-start px-4 sm:px-6 md:px-10 lg:px-20">
                <div className="flex flex-row items-center w-full sm:w-3/4 md:w-1/2 h-full space-x-4 sm:space-x-8 pl-4 sm:pl-10">
                    <img src="/assets/email-icon.png" alt="email" className="object-cover w-8 h-8 sm:w-12 sm:h-12" />
                    <h1 className="text-lg sm:text-2xl">Get in touch</h1>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-20 px-4 sm:px-6 md:px-10 lg:px-20 py-6">
                <div className="w-full md:w-1/2">
                    <form action="" className="space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="border p-3 sm:p-4 pl-4 sm:pl-6 rounded-md w-full focus:outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="border p-3 sm:p-4 pl-4 sm:pl-6 rounded-md w-full focus:outline-none"
                        />
                        <textarea
                            name="Message"
                            placeholder="Message"
                            className="border p-3 sm:p-4 pl-4 sm:pl-6 rounded-md w-full focus:outline-none h-40 sm:h-48"
                        ></textarea>
                    </form>
                    <button className="bg-violet-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg mt-6 hover:bg-violet-500 transition duration-300">
                        Submit
                    </button>
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start lg:pb-40">
                    <p className="text-base sm:text-lg text-center md:text-left">You can contact me through these social media channels.</p>
                    <div className="flex flex-col mt-4 space-y-4">
                        <a href="https://www.facebook.com/profile.php?id=100006130935733" target="_blank" rel="noopener noreferrer" className="w-full">
                            <div className="flex flex-row items-center space-x-4 p-2 hover:bg-gray-100 rounded-md">
                                <img src="/assets/facebook-icon.png" alt="Facebook" className="w-8 h-8 sm:w-10 sm:h-10" />
                                <p className="text-base sm:text-lg">Abbas Leenud</p>
                            </div>
                        </a>
                        <a href="https://github.com/bqsst" target="_blank" rel="noopener noreferrer" className="w-full">
                            <div className="flex flex-row items-center space-x-4 p-2 hover:bg-gray-100 rounded-md">
                                <img src="/assets/github-icon.png" alt="GitHub" className="w-8 h-8 sm:w-10 sm:h-10" />
                                <p className="text-base sm:text-lg">bqsst</p>
                            </div>
                        </a>
                        <a href="https://www.instagram.com/bqsst.3651/" target="_blank" rel="noopener noreferrer" className="w-full">
                            <div className="flex flex-row items-center space-x-4 p-2 hover:bg-gray-100 rounded-md">
                                <img src="/assets/instagram-icon.png" alt="Instagram" className="w-8 h-8 sm:w-10 sm:h-10" />
                                <p className="text-base sm:text-lg">bqsst.3651</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="md:hidden flex flex-row justify-end items-center space-x-4 pr-6 pb-6">
                <NavLink to='/blog' className="bg-gray-200 text-black rounded-md py-[8px] px-4">
                    Back
                </NavLink>
            </div>
        </div>
    )
}

export default AppContactBody;
