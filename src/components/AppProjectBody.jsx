import { NavLink } from 'react-router-dom';
import datas from "../datas/projectData";
import AppProjectChild from "./AppProjectChild";

const AppProJectBody = () => {

    const projectElement = datas.map((data, index) => {
        return <AppProjectChild key={index} data={data} />
    })

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 sm:gap-4 p-4 w-2/3">
            {projectElement}
            <div className="md:hidden flex flex-row justify-end items-center space-x-4 pt-4 pb-6">
                <NavLink to='/' className="bg-gray-200 text-black rounded-md py-[8px] px-4">
                    Back
                </NavLink>
                <NavLink to='/blog' className="bg-violet-600 text-white rounded-md py-[8px] px-4">
                    Next
                </NavLink>
            </div>
        </div>
    )
}

export default AppProJectBody;