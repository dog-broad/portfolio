import React from 'react';
import user_info from '../data/user_info';

const About = () => {
    return (
        <section id="about" className="py-20 bg-space-light text-center">
            <h2 className="text-4xl font-bold" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.25)' }}>
                About Me
            </h2>
            <p className="mt-4 font-mono text-lg text-gray-300">
                {user_info.about}
            </p>
        </section>
    );
};

export default About;
