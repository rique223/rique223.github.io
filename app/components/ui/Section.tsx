import { motion } from "framer-motion";
import React from "react";

interface SectionProps {
    children: React.ReactNode;
    title?: string;
    className?: string;
    id?: string;
}

const Section: React.FC<SectionProps> = ({
    children,
    title,
    className = "",
    id,
}) => {
    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <motion.section
            id={id}
            className={`mb-24 ${className}`}
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            aria-labelledby={title ? `${id}-heading` : undefined}
        >
            {title && (
                <h2
                    id={`${id}-heading`}
                    className="text-4xl font-bold mb-12 text-center text-content-primary"
                >
                    {title}
                </h2>
            )}
            {children}
        </motion.section>
    );
};

export default Section;