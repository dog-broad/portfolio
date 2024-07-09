import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center justify-center">
            <motion.div
                className="text-center"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
                <p className="text-xl">I'm a web developer specializing in modern web technologies.</p>
            </motion.div>
        </section>
    );
}

export default Hero;
