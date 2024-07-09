import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
                <p className="text-xl">I'm a web developer specializing in modern web technologies.</p>
            </div>
        </section>
    );
}

export default Hero;
