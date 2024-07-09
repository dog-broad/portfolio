import React from 'react';
import user_info from '../data/user_info';

const About = () => {
    return (
        <section id="about" className="py-20 bg-space-light text-center">
            <h2 className="text-4xl font-bold">About Me</h2>
            <p className="mt-4 text-lg">
                {user_info.about}
            </p>
        </section>
    );
};

export default About;
