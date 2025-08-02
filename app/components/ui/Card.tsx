import React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    as?: React.ElementType;
}

const Card: React.FC<CardProps> = ({
    children,
    className = "",
    hover = false,
    as: Component = "div",
}) => {
    const classes = `card ${hover ? "card-hover" : ""} ${className}`;

    return (
        <Component className={classes}>
            {children}
        </Component>
    );
};

export default Card;