"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface ResponsiveContextType {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    width: number;
}

const ResponsiveContext = createContext<ResponsiveContextType | undefined>(undefined);

export const useResponsive = (): ResponsiveContextType => {
    const context = useContext(ResponsiveContext);
    if (context === undefined) {
        throw new Error("useResponsive must be used within a ResponsiveProvider");
    }
    return context;
};

interface ResponsiveProviderProps {
    children: React.ReactNode;
}

export const ResponsiveProvider: React.FC<ResponsiveProviderProps> = ({ children }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobile = width > 0 && width < 768;
    const isTablet = width >= 768 && width < 1024;
    const isDesktop = width >= 1024;

    const value: ResponsiveContextType = {
        isMobile,
        isTablet,
        isDesktop,
        width,
    };

    return <ResponsiveContext.Provider value={value}>{children}</ResponsiveContext.Provider>;
};