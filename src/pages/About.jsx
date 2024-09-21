import AppHead from "../components/AppHead";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AppAboutBody from "../components/AppAbout";

const AppAbout = () => {

    const [reset, setReset] = useState(false);

    useEffect(() => {
        const duration = 2000;
        const delay = 1000;
        const totalDuration = duration + delay;

        const timeout = setTimeout(() => {
            setReset(true);

            setTimeout(() => {
                setReset(false);
            }, 50);
        }, totalDuration);

        return () => clearTimeout(timeout);
    }, [reset]);

    return (
        <div>
            <AppHead />
            <motion.div initial={{ opacity: 0 }}   
                animate={{ opacity: 1 }}    
                exit={{ opacity: 0 }}       
                transition={{ duration: 0.5 }} >
                <AppAboutBody reset={reset} />
            </motion.div>
        </div>
    )
}

export default AppAbout;