import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { useResponsive } from "../contexts/ResponsiveContext";

export const useScrollAnimation = () => {
    const { isMobile } = useResponsive();
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const terminalOpacity = useTransform(
        scrollYProgress, 
        isMobile ? [0, 0.3] : [0, 0.5], 
        [1, 0]
    );
    
    const terminalScale = useTransform(
        scrollYProgress,
        isMobile ? [0, 0.3] : [0, 0.3],
        isMobile ? [1, 0.2] : [1, 0.8]
    );

    return {
        containerRef,
        terminalOpacity,
        terminalScale,
    };
};