import { Routes, Route } from 'react-router-dom';
import AppAbout from "../pages/About";
import AppBlog from "../pages/blog";
import AppContact from "../pages/contact";
import AppProject from '../pages/project';

const AppNavigations = () => {

    return (
        <Routes>
            <Route path="/" element={<AppAbout />} />
            <Route path="/project" element={<AppProject />} />
            <Route path="/blog" element={<AppBlog />} />
            <Route path="/contact" element={<AppContact />} />
        </Routes>
    )
}

export default AppNavigations;