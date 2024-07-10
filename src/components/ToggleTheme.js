import { FaGithub } from "react-icons/fa";
import './styles.css';


function linkToGithub() {
    window.open("https://github.com/dog-broad", "_blank");
}

function GitHub({ switchTheme }) {
    return (
        <button onClick={linkToGithub} className="text-2xl text-white hover:text-accent transition-all duration-300">
            <FaGithub className={"hover-text-shadow"}/>
        </button>
    );
}

export default GitHub;
