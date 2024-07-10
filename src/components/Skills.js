import { FaCss3Alt, FaGitAlt, FaHtml5, FaJava, FaNodeJs, FaPython, FaReact, FaWordpress } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiGithubAlt } from "react-icons/di";
import { SiDjango, SiBootstrap, SiTailwindcss } from "react-icons/si";
import './styles.css';

function Skills() {
    return (
        <section id="skills" className="mx-4 lg:mx-20">
            {/* =========== SKILLS TITLE =========== */}
            <h4 className="text-4xl font-bold text-center mt-20 dark:text-white" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.5)' }}>
                Technologies I Use.
            </h4>
            {/* =========== LIST OF SKILLS =========== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-8">
        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500 hover-text-shadow">
          <FaPython className="text-2xl" /> Python
        </span>
                <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500 hover-text-shadow">
          <FaJava className="text-2xl" /> Java
        </span>
                <span
                className="inline-flex items-center justify-between gap-x-2 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500 hover-text-shadow">
          <FaHtml5 className="text-2xl"/> HTML
        </span>
                <span
                    className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500 hover-text-shadow">
          <FaCss3Alt className="text-2xl"/> CSS
        </span>
                <span
                    className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500 hover-text-shadow">
          <IoLogoJavascript className="text-2xl" /> JavaScript
        </span>
                <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500 hover-text-shadow">
          <FaReact className="text-2xl" /> React
        </span>
                <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500 hover-text-shadow">
          <SiDjango className="text-2xl" /> Django
        </span>
                <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500 hover-text-shadow">
          <FaNodeJs className="text-2xl" /> NodeJS
        </span>
                <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500 hover-text-shadow">
          <SiTailwindcss className="text-2xl" /> TailwindCSS
        </span>
                <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500 hover-text-shadow">
          <SiBootstrap className="text-2xl" /> Bootstrap
        </span>
                <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500 hover-text-shadow">
          <FaWordpress className="text-2xl" /> WordPress
        </span>
                <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500 hover-text-shadow">
          <FaGitAlt className="text-2xl" /> Git
        </span>
                <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500 hover-text-shadow">
          <DiGithubAlt className="text-2xl" /> GitHub
        </span>
            </div>
        </section>
    );
}

export default Skills;
