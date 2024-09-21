import { NavLink } from 'react-router-dom';

const AppHead = () => {

    return (
        <div>
            <header className="flex flex-row justify-center md:justify-between h-[100px]">
                <div className="flex justify-center items-center md:pl-16 text-2xl">
                    <h1 className="font-bold text-2xl sm:text-3xl">Abbas</h1>
                </div>
                <div className="hidden md:flex justify-center items-center sm:pr-2 md:pr-20">
                    <div className="space-x-10 sm:text-lg md:text-xl font-medium">
                        <NavLink to='/' className={({ isActive }) =>
                            isActive ? 'text-violet-600' : 'text-slate-700 hover:text-violet-600'} >
                            ABOUT ME
                        </NavLink>
                        <NavLink to='/project' className={({ isActive }) =>
                            isActive ? 'text-violet-600' : 'text-slate-700 hover:text-violet-600'} >
                            PROJECT
                        </NavLink>
                        <NavLink to='/blog' className={({ isActive }) =>
                            isActive ? 'text-violet-600' : 'text-slate-700 hover:text-violet-600'} >
                            BLOG
                        </NavLink>
                        <NavLink to='/contact' className={({ isActive }) =>
                            isActive ? 'text-violet-600' : 'text-slate-700 hover:text-violet-600'} >
                            CONTACT
                        </NavLink>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default AppHead;