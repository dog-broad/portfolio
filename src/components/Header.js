import React from 'react';

const Header = () => {
    return (
        <header className="bg-white bg-opacity-80 backdrop-blur-sm fixed w-full top-0 z-10">
            <nav className="container mx-auto flex justify-between items-center p-4">
                <div className="text-2xl font-bold">My Portfolio</div>
                <ul className="flex space-x-4">
                    <li><a href="#hero" className="hover:text-gray-700">Home</a></li>
                    <li><a href="#about" className="hover:text-gray-700">About</a></li>
                    <li><a href="#projects" className="hover:text-gray-700">Projects</a></li>
                    <li><a href="#contact" className="hover:text-gray-700">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
