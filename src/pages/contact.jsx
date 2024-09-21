import AppContactBody from "../components/AppConntactBody";
import AppHead from "../components/AppHead";
import { motion } from 'framer-motion';

const AppContact = () => {
    return (
        <div>
            <AppHead />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}>
                <AppContactBody/>
            </motion.div>
        </div>
    )
}

export default AppContact;