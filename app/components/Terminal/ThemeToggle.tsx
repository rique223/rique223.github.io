import { Moon, Sun } from "lucide-react";

import { useTheme } from "../ui/ThemeProvider";

export const ThemeToggle: React.FC = () => {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <button
            onClick={toggleDarkMode}
            className="p-1.5 rounded-md hover:bg-gray-600/50 dark:hover:bg-gray-700/50 transition-colors group"
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            aria-label="Toggle theme"
        >
            {darkMode ? (
                <Sun
                    size={16}
                    className="text-gray-400 group-hover:text-yellow-400 transition-colors"
                />
            ) : (
                <Moon
                    size={16}
                    className="text-gray-600 group-hover:text-gray-800 transition-colors"
                />
            )}
        </button>
    );
};