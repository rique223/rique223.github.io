import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";

    children: React.ReactNode;
    href?: string;
    external?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    variant = "primary",
    size = "md",
    children,
    className = "",
    href,
    external = false,
    ...props
}) => {
    const baseClasses = "font-medium rounded-lg transition-all duration-200 inline-flex items-center justify-center";
    
    const variantClasses = {
        primary: "btn-primary",
        secondary: "btn-secondary", 
        outline: "btn-outline",
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