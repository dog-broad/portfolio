import React from 'react';
import { motion } from 'framer-motion';
import user_info from '../data/user_info';

const Hero = () => {
    return (
        <section id="hero" className="h-screen flex flex-col justify-center items-center bg-space-dark text-center">
            <motion.img
                src={user_info.main.photo}
                alt="Profile"
                className="rounded-full w-32 h-32"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            />
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl font-bold mt-4"
            >
                {user_info.main.name}
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-xl mt-4"
            >
                {user_info.main.role}
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-lg mt-4"
            >
                {user_info.main.description}
            </motion.p>
        </section>
    );
};

export default Hero;
