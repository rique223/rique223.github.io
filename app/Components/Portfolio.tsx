"use client";

import React from "react";

import EducationSection from "../components/sections/EducationSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import SkillsSection from "../components/sections/SkillsSection";

interface PortfolioProps {
    darkMode: boolean;
}

const Portfolio: React.FC<PortfolioProps> = ({ darkMode }) => {
    return (
        <div
            className={`min-h-screen ${
                darkMode
                    ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
                    : "bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-900"
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-16">
                <HeroSection darkMode={darkMode} />
                <ExperienceSection darkMode={darkMode} />
                <SkillsSection darkMode={darkMode} />
                <ProjectsSection darkMode={darkMode} />
                <EducationSection darkMode={darkMode} />

                {/* Footer */}
                <footer className="text-center text-gray-500 text-sm mt-16">
                    <p>&copy; 2025 Henrique Guimarães Ribeiro. Built with Next.js & Tailwind CSS.</p>
                </footer>
            </div>
        </div>
    );
};

export default Portfolio;
