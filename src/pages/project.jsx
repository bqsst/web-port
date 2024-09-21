import AppHead from "../components/AppHead";
import { motion } from 'framer-motion';
import AppProJectBody from "../components/AppProjectBody";

const AppProject = () => {
    return (
        <div>
            <AppHead />
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center items-center">
                <div className="flex w-full justify-center h-[580px]">
                    <AppProJectBody/>
                </div>
            </motion.div>
        </div>
    )
}

export default AppProject;