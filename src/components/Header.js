import React, { useState } from 'react';
import ToggleTheme from './ToggleTheme';
import './styles.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="sticky top-0 p-5 bg-space-light backdrop-blur-xs flex flex-col md:flex-row md:justify-between items-center">
            <div className="flex justify-between items-center w-full md:w-auto">
                <div className="text-xl font-bold font-mono">My Portfolio</div>
                <button
                    className="md:hidden text-2xl"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    &#9776;
                </button>
            </div>
            <nav className={`w-full md:w-auto ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                    <li><a href="#hero" className="hover:text-accent font-mono hover-text-shadow">Home</a></li>
                    <li><a href="#about" className="hover:text-accent font-mono hover-text-shadow">About</a></li>
                    <li><a href="#projects" className="hover:text-accent font-mono hover-text-shadow">Projects</a></li>
                    <li><a href="#contact" className="hover:text-accent font-mono hover-text-shadow">Contact</a></li>
                </ul>
            </nav>
            <div className="mt-4 md:mt-0">
                <ToggleTheme />
            </div>
        </header>
    );
};

export default Header;
