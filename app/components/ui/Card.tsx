import React from "react";

interface CardProps {
    children: React.ReactNode;
    darkMode?: boolean;
    className?: string;
    hover?: boolean;
    as?: React.ElementType;
}

const Card: React.FC<CardProps> = ({
    children,
    darkMode = false,
    className = "",
    hover = false,
    as: Component = "div",
}) => {
    const baseClasses = "backdrop-blur-sm rounded-xl p-6 border transition-all duration-300";
    
    const themeClasses = darkMode
        ? "bg-gray-800/50 border-gray-700/30"
        : "bg-white/80 border-gray-300/60 shadow-lg";
    
    const hoverClasses = hover
        ? darkMode
            ? "hover:border-gray-600/50 hover:bg-gray-800/70"
            : "hover:border-gray-400/80 hover:bg-white"
        : "";

    const classes = `${baseClasses} ${themeClasses} ${hoverClasses} ${className}`;

    return (
        <Component className={classes}>
            {children}
        </Component>
    );
};

export default Card;