import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-200">
            <div className="container mx-auto text-center">
                <motion.h2
                    className="text-4xl font-bold mb-4"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    Contact Me
                </motion.h2>
                <motion.p
                    className="text-xl mb-8"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    Feel free to reach out for collaborations or just a friendly chat.
                </motion.p>
                <motion.form
                    className="max-w-md mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <motion.input
                        type="text"
                        placeholder="Name"
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                        whileFocus={{ scale: 1.05 }}
                    />
                    <motion.input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                        whileFocus={{ scale: 1.05 }}
                    />
                    <motion.textarea
                        placeholder="Message"
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                        whileFocus={{ scale: 1.05 }}
                    />
                    <motion.button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                        whileHover={{ scale: 1.1 }}
                    >
                        Send
                    </motion.button>
                </motion.form>
            </div>
        </section>
    );
}

export default Contact;
