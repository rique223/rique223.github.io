"use client";

import React from "react";

import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";

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
