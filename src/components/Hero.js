import React from 'react';
import { motion } from 'framer-motion';
import user_info from '../data/user_info';
import Starfield from "react-starfield";
import Typewriter from 'typewriter-effect'; // Import Typewriter component

const messages = [
    'Welcome to my website! 🌟',
    'Explore my projects below. 📂',
    'Feel free to reach out! 📧',
    'Let\'s create something amazing together! 🚀'
];

const Hero = () => {
    return (
        <section id="hero"
                 className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
            {/* Background starfield */}
            <Starfield
                starCount={1000}
                starColor={[255, 255, 255]}
                speedFactor={0.1}
                backgroundColor="black"
            />

            {/* Content */}
            <div className="relative z-10">
                <motion.img
                    src={user_info.main.photo}
                    alt="Profile"
                    className="rounded-full w-64 h-64"
                    initial={{ opacity: 0, scale: 0.8, boxShadow: '0 0 10px rgba(255, 255, 255, 0)' }}
                    animate={{ opacity: 1, scale: 1, boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)' }}
                    transition={{ duration: 1 }}
                    style={{ margin: 'auto' }} // Center the image horizontally
                />
                <motion.h1
                    initial={{ opacity: 0, y: -50, textShadow: '0 0 10px rgba(255, 255, 255, 0)' }}
                    animate={{ opacity: 1, y: 0, textShadow: '0 0 20px rgba(255, 255, 255, 0.5)' }}
                    transition={{ duration: 1 }}
                    className="text-5xl font-bold mt-4"
                >
                    {user_info.main.name}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-xl mt-4 font-mono"
                >
                    {user_info.main.role}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-lg text-gray-300 font-mono mt-4"
                >
                    <Typewriter
                        options={{
                            cursor: '█',
                        }}
                        onInit={(typewriter) => {
                            typewriter.typeString(messages[0])
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString(messages[1])
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString(messages[2])
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString(messages[3])
                                .start();
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
