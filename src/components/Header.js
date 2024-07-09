import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import ToggleTheme from './ToggleTheme';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="p-5 bg-space-light backdrop-blur-xs flex justify-between items-center">
            <div className="text-xl font-bold">My Portfolio</div>
            <nav>
                <div className="md:hidden" onClick={toggleMenu}>
                    {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                </div>
                <ul className={`md:flex space-x-4 absolute md:static bg-space-light md:bg-transparent w-full md:w-auto left-0 md:mt-0 mt-20 p-5 md:p-0 transition-all duration-300 ${isOpen ? 'top-16' : 'top-[-490px]'}`}>
                    <li><a href="#hero" className="block md:inline-block hover:text-accent">Home</a></li>
                    <li><a href="#about" className="block md:inline-block hover:text-accent">About</a></li>
                    <li><a href="#projects" className="block md:inline-block hover:text-accent">Projects</a></li>
                    <li><a href="#contact" className="block md:inline-block hover:text-accent">Contact</a></li>
                </ul>
            </nav>
            <ToggleTheme />
        </header>
    );
};

export default Header;
