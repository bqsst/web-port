import AppBlogBody from "../components/AppBlogBody";
import AppHead from "../components/AppHead";
import { motion } from 'framer-motion';

const AppBlog = () => {
    return (
        <div>
            <AppHead />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}>
                <AppBlogBody />
            </motion.div>
        </div>
    );
};

export default AppBlog;
