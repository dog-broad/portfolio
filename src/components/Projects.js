import React from 'react';

const projects = [
    {
        title: "Project One",
        description: "This is a brief description of my project.",
        image: "path-to-image-1"
    },
    {
        title: "Project Two",
        description: "This is a brief description of my project.",
        image: "path-to-image-2"
    },
    // Add more projects here
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg"/>
                            <h3 className="text-2xl font-bold mt-4">{project.title}</h3>
                            <p className="text-gray-700 mt-2">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
