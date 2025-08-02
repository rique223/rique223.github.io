import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "tech";
    darkMode?: boolean;
    className?: string;
}

const Badge: React.FC<BadgeProps> = ({
    children,
    variant = "primary",
    darkMode = false,
    className = "",
    ...props
}) => {
    const baseClasses = "px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200";
    
    const variantClasses = {
        primary: darkMode
            ? "bg-emerald-500/20 text-emerald-300"
            : "bg-emerald-100 text-emerald-700",
        secondary: darkMode
            ? "bg-gray-700/50 text-gray-300"
            : "bg-gray-100 text-gray-700",
        tech: darkMode
            ? "bg-gray-700/50 text-emerald-300"
            : "bg-emerald-100 text-emerald-700",
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

    return <span className={classes} {...props}>{children}</span>;
};

export default Badge;