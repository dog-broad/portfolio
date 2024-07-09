import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import EducationAndExperience from "../components/EducationAndExperience";

const Homepage = () => {
    return (
        <div className="bg-zinc-100 dark:bg-zinc-900">
            <div
                className="xl:w-[1200px] md:mx-auto h-full border-x border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950">
                <Header/>
                <Hero/>
                <About/>
                <EducationAndExperience/>
                <Projects/>
                <Contact/>
            </div>
        </div>
    );
};

export default Homepage;
