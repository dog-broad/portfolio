import React from 'react';
import {CiLink} from 'react-icons/ci';
import {motion} from 'framer-motion';

const Project = ({title, description, technologies, link, github, image}) => {
    return (
        <motion.div
            whileHover={{scale: 1.05}}
            className="hover:bg-space-light transition-all duration-300 p-6 rounded-xl">
            <div className="flex gap-2 overflow-x-scroll py-2">
                {technologies.split(',').map((tech, index) => (
                    <span
                        className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500"
                        key={index}
                    >
                        {tech}
                    </span>
                ))}
            </div>
            <h3 className="font-bold text-lg mt-4" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.5)' }}>{title}</h3>
            <p className="leading-7 font-light text-base mt-4">{description}</p>
            <img src={image} alt={title} className="w-full h-48 object-cover mt-4 rounded-lg shadow-lg"/>
            <div className="flex gap-6 font-medium mt-4">
                <a href={link} className="flex gap-2 hover:text-accent transition-all duration-300">
                    <CiLink className="text-2xl"/>
                    <span className="text-xs">View Project</span>
                </a>
                <a href={github} className="flex gap-2 hover:text-accent transition-all duration-300">
                    <CiLink className="text-2xl"/>
                    <span className="text-xs">View Github</span>
                </a>
            </div>
        </motion.div>
    );
};

export default Project;