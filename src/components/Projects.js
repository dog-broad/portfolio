import React from 'react';
import Project from './Project';
import user_info from '../data/user_info';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-space-dark text-center">
            <h2 className="text-4xl font-bold" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.5)' }}>My Projects</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {user_info.projects.map((project, index) => (
                    <Project
                        key={index}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        link={project.link}
                        image={project.image}
                        github={project.github}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;
