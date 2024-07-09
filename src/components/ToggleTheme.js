import { CgDarkMode } from 'react-icons/cg';

function ToggleTheme({ switchTheme }) {
    return (
        <button onClick={switchTheme} className="text-2xl text-white hover:text-accent transition-all duration-300">
            <CgDarkMode />
        </button>
    );
}

export default ToggleTheme;
