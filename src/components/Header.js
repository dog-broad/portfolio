import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white bg-opacity-30 backdrop-blur-lg fixed w-full top-0 z-10">
            <nav className="container mx-auto flex justify-between items-center p-4">
                <div className="text-2xl font-bold">My Portfolio</div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
                <ul className={`flex space-x-4 md:flex ${isOpen ? 'block' : 'hidden'}`}>
                    <li><a href="#hero" className="hover:text-gray-300">Home</a></li>
                    <li><a href="#about" className="hover:text-gray-300">About</a></li>
                    <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
                    <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
