export const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

export const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8 },
};

export const slideInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
};

export const slideInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
};

export const scaleIn = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: { delay: 0.2, duration: 0.5, type: "spring", stiffness: 200 },
};

export const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const hoverScale = {
    whileHover: {
        scale: 1.05,
        y: -5,
        transition: { duration: 0.2 },
    },
    whileTap: { scale: 0.98 },
};

export const iconHover = {
    whileHover: {
        scale: 1.1,
        transition: { duration: 0.2 },
    },
};