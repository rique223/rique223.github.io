import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "tech";
    className?: string;
}

const Badge: React.FC<BadgeProps> = ({
    children,
    variant = "primary",
    className = "",
    ...props
}) => {
    const variantClasses = {
        primary: "badge-primary",
        secondary: "badge-secondary",
        tech: "badge-tech",
    };

    const classes = `${variantClasses[variant]} ${className}`;

    return <span className={classes} {...props}>{children}</span>;
};

export default Badge;