"use client";

import React from "react";

import EducationSection from "../components/sections/EducationSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import SkillsSection from "../components/sections/SkillsSection";

const Portfolio = () => {
    return (
        <div className="min-h-screen">
            <div className="max-w-6xl mx-auto px-6 py-16">
                <HeroSection />
                <ExperienceSection />
                <SkillsSection />
                <ProjectsSection />
                <EducationSection />
                <footer className="text-center text-content-muted text-sm mt-16">
                    <p>
                        &copy; 2025 Henrique Guimarães Ribeiro. Built with Next.js & Tailwind CSS.
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default Portfolio;
