import { useState, useEffect, useRef } from "react";
import { FaCss3Alt, FaGitAlt, FaHtml5, FaJava, FaNodeJs, FaPython, FaReact, FaWordpress } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiGithubAlt } from "react-icons/di";
import { SiDjango, SiBootstrap, SiTailwindcss, SiApachemaven } from "react-icons/si";
import { useMediaQuery } from "@react-hook/media-query";
import './styles.css';

const technologies = [
    { icon: FaPython, name: 'Python' },
    { icon: FaJava, name: 'Java' },
    { icon: SiApachemaven, name: 'Maven' },
    { icon: FaHtml5, name: 'HTML' },
    { icon: FaCss3Alt, name: 'CSS' },
    { icon: IoLogoJavascript, name: 'JavaScript' },
    { icon: FaReact, name: 'React' },
    { icon: SiDjango, name: 'Django' },
    { icon: FaNodeJs, name: 'NodeJS' },
    { icon: SiTailwindcss, name: 'TailwindCSS' },
    { icon: SiBootstrap, name: 'Bootstrap' },
    { icon: FaWordpress, name: 'WordPress' },
    { icon: FaGitAlt, name: 'Git' },
    { icon: DiGithubAlt, name: 'GitHub' }
];

function Skills() {
    const isMobile = useMediaQuery('(max-width: 640px)');
    const [selectedTech, setSelectedTech] = useState(null);
    const skillsRef = useRef(null); // Reference to skills section

    // Effect to handle clicks outside the skills section
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (skillsRef.current && !skillsRef.current.contains(event.target)) {
                setSelectedTech(null);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleTechSelect = (techName) => {
        setSelectedTech(techName === selectedTech ? null : techName);
    };

    return (
        <section id="skills" ref={skillsRef} className="mx-4 lg:mx-20">
            <h4 className="text-4xl font-bold text-center mt-20 dark:text-white" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.5)' }}>
                Technologies I Use
            </h4>

            {isMobile && selectedTech && (
                <span className="block text-center text-lg font-medium mt-8 mb-2 text-red-800 dark:text-red-500 selected-tech" style={{ textShadow: '0 0 20px #ef4444' }}>
                    {selectedTech}
                </span>
            )}

            <div className={`${isMobile ? 'grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5' : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5'} gap-4 mt-8`}>
                {technologies.map((tech, index) => (
                    <span key={index} className={`inline-flex items-center justify-${isMobile ? 'center' : 'between'} gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500 hover-text-shadow`}
                          onClick={() => isMobile && handleTechSelect(tech.name)}>
                        <tech.icon className="text-2xl" />
                        {!isMobile && <span>{tech.name}</span>}
                    </span>
                ))}
            </div>
        </section>
    );
}

export default Skills;
