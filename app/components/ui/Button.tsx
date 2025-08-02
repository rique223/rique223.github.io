import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    darkMode?: boolean;
    children: React.ReactNode;
    href?: string;
    external?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    variant = "primary",
    size = "md",
    darkMode = false,
    children,
    className = "",
    href,
    external = false,
    ...props
}) => {
    const baseClasses = "font-medium rounded-lg transition-all duration-200 inline-flex items-center justify-center";
    
    const variantClasses = {
        primary: darkMode 
            ? "bg-emerald-600 hover:bg-emerald-700 text-white"
            : "bg-emerald-600 hover:bg-emerald-700 text-white",
        secondary: darkMode
            ? "bg-gray-800/50 hover:bg-gray-700/60 border border-gray-600/30 hover:border-gray-500/50 text-gray-300 hover:text-white"
            : "bg-white/80 hover:bg-gray-50 border border-gray-300/60 hover:border-gray-400/80 text-gray-700 hover:text-gray-900 shadow-lg",
        outline: darkMode
            ? "border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white"
            : "border border-gray-400 hover:border-gray-500 text-gray-700 hover:text-gray-900",
    };

    const sizeClasses = {
        sm: "px-3 py-2 text-sm",
        md: "px-6 py-3",
        lg: "px-8 py-4 text-lg",
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    if (href) {
        return (
            <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className={classes}
                aria-label={typeof children === "string" ? children : undefined}
            >
                {children}
            </a>
        );
    }

    return (
        <button className={classes} {...props} aria-label={typeof children === "string" ? children : undefined}>
            {children}
        </button>
    );
};

export default Button;