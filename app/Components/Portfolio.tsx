"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

interface PortfolioProps {
    darkMode: boolean;
}

const Portfolio: React.FC<PortfolioProps> = ({ darkMode }) => {
    const [showAllExperiences, setShowAllExperiences] = useState(false);

    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const experiences = [
        {
            title: "Frontend Software Engineer",
            company: "Rocket.Chat",
            period: "08/2021 - 03/2025",
            location: "Remote",
            description:
                "Increased marketplace apps exposition by 45x, improved UX for 12M+ users across 150+ countries.",
            technologies: ["React", "TypeScript", "Node.js", "Golang", "Jest"],
        },
        {
            title: "Fullstack Software Engineer",
            company: "Trinus Co.",
            period: "04/2021 - 08/2021",
            location: "Goiânia, Brazil",
            description:
                "Implemented internal workflow solution for 27+ teams, replacing Jira and saving $5B+ in revenue.",
            technologies: ["React", "TypeScript", "AdonisJS", "Selenium"],
        },
        {
            title: "Web Developer",
            company: "RedCake Digital Marketing",
            period: "02/2020 - 07/2020",
            location: "Goiânia, Brazil",
            description:
                "Designed and implemented websites for civil engineering firm and biggest auto insurance firms, serving 100K+ clients per day.",
            technologies: ["WordPress", "HTML", "CSS", "PHP", "JavaScript"],
        },
        {
            title: "Fullstack Software Engineer",
            company: "Toctec",
            period: "03/2018 - 08/2019",
            location: "Goiânia, Brazil",
            description:
                "Developed Physical Advancement platform for Civil Engineering firm TocTao, becoming backbone of 1.24B BRL revenue.",
            technologies: ["C#", ".NET", "Angular 2+", "SQL Server"],
        },
    ];

    const projects = [
        {
            title: "Company Finder",
            description: "Robust company information search engine using React and Kotlin",
            tech: ["React", "Kotlin"],
            year: "2020",
            link: "https://github.com/rique223/Company-finder",
        },
        {
            title: "Mayday",
            description: "Digitalized contingency process for Civil Defense of Goiás state",
            tech: ["React", "Node.js"],
            year: "2022",
            link: "https://github.com/rique223/mvp-mayday",
        },
        {
            title: "Weather Forecast App",
            description: "Current and 5-day weather forecasts for any city",
            tech: ["React", "API Integration"],
            year: "2020",
            link: "https://github.com/rique223/Weather-Forecast-Angular-APP",
        },
        {
            title: "Virus Tracker",
            description: "COVID-19 pandemic tracking for Brazilian cities",
            tech: ["React", "Data Visualization"],
            year: "2020",
            link: "https://github.com/rique223/virus-tracker-tm",
        },
    ];

    const skills = {
        frontend: [
            { name: "React", icon: "⚛️" },
            { name: "React Native", icon: "📱" },
            { name: "NextJS", icon: "▲" },
            { name: "TypeScript", icon: "🔷" },
            { name: "JavaScript", icon: "🟨" },
            { name: "Tailwind", icon: "🎨" },
            { name: "HTML/CSS", icon: "🌐" },
        ],
        backend: [
            { name: "Node.js", icon: "🟢" },
            { name: "Golang", icon: "🐹" },
            { name: "C#/.NET", icon: "🔷" },
            { name: "API Development", icon: "🔗" },
        ],
        tools: [
            { name: "Git", icon: "📝" },
            { name: "AWS", icon: "☁️" },
            { name: "Jest", icon: "🧪" },
            { name: "Webpack", icon: "📦" },
            { name: "CI/CD", icon: "🔄" },
        ],
        languages: [
            { name: "Portuguese (Native)", icon: "🇧🇷" },
            { name: "English (C2)", icon: "🇺🇸" },
            { name: "Spanish (Professional)", icon: "🇪🇸" },
        ],
    };

    return (
        <div
            className={`min-h-screen ${
                darkMode
                    ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
                    : "bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-900"
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-16">
                {/* Hero Section */}
                <motion.section
                    className="text-center mb-24"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="flex justify-center mb-8"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 200 }}
                    >
                        <div
                            className={`relative w-32 h-32 rounded-full overflow-hidden border-4 shadow-xl ${
                                darkMode
                                    ? "border-emerald-400/50 shadow-emerald-500/20"
                                    : "border-emerald-500/60 shadow-emerald-500/30"
                            }`}
                        >
                            <Image
                                src="/avatar.jpg"
                                alt="Henrique Guimarães Ribeiro"
                                width={128}
                                height={128}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                    </motion.div>

                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                        Henrique Guimarães Ribeiro
                    </h1>
                    <h2 className={`text-2xl mb-8 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                        Software Engineer
                    </h2>
                    <p
                        className={`text-lg max-w-3xl mx-auto leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-700"}`}
                    >
                        Passionate software engineer specializing in the Javascript/Typescript
                        ecosystem with 7+ years of experience building scalable web applications.
                        Expert in modern JavaScript, TypeScript, and performance optimization.
                    </p>

                    {/* Contact Links */}
                    <div className="flex justify-center space-x-6 mt-8">
                        <a
                            href="mailto:henrique.jobs1@gmail.com"
                            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors"
                        >
                            Contact Me
                        </a>
                        <a
                            href="https://github.com/rique223"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 border border-gray-600 hover:border-gray-500 rounded-lg transition-colors"
                        >
                            GitHub
                        </a>
                    </div>
                </motion.section>

                {/* Experience Section */}
                <motion.section
                    className="mb-24"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                >
                    <h3 className="text-4xl font-bold mb-12 text-center">Experience</h3>
                    <div className="space-y-8">
                        {experiences.map(
                            (exp, index) =>
                                (index < 3 || showAllExperiences) && (
                                    <div
                                        key={index}
                                        className={`backdrop-blur-sm rounded-xl p-8 border transition-all ${
                                            darkMode
                                                ? "bg-gray-800/50 border-gray-700/30 hover:border-gray-600/50"
                                                : "bg-white/80 border-gray-300/60 hover:border-gray-400/80 shadow-lg"
                                        }`}
                                    >
                                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                            <div>
                                                <h4
                                                    className={`text-xl font-semibold ${darkMode ? "text-emerald-400" : "text-emerald-600"}`}
                                                >
                                                    {exp.title}
                                                </h4>
                                                <p
                                                    className={`text-lg ${darkMode ? "text-blue-300" : "text-blue-600"}`}
                                                >
                                                    {exp.company}
                                                </p>
                                            </div>
                                            <div
                                                className={`text-sm md:text-right ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                                            >
                                                <p>{exp.period}</p>
                                                <p>{exp.location}</p>
                                            </div>
                                        </div>
                                        <p
                                            className={`mb-4 leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                                        >
                                            {exp.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className={`px-3 py-1 rounded-full text-sm ${
                                                        darkMode
                                                            ? "bg-gray-700/50 text-emerald-300"
                                                            : "bg-emerald-100 text-emerald-700"
                                                    }`}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )
                        )}
                    </div>

                    {/* Show/Hide All Experiences Button */}
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={() => setShowAllExperiences(!showAllExperiences)}
                            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                                darkMode
                                    ? "bg-gray-800/50 hover:bg-gray-700/60 border border-gray-600/30 hover:border-gray-500/50 text-gray-300 hover:text-white"
                                    : "bg-white/80 hover:bg-gray-50 border border-gray-300/60 hover:border-gray-400/80 text-gray-700 hover:text-gray-900 shadow-lg"
                            }`}
                        >
                            {showAllExperiences ? "Show Less" : "See All Experiences"}
                            <svg
                                className={`w-4 h-4 ml-2 inline-block transition-transform duration-200 ${
                                    showAllExperiences ? "rotate-180" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                    </div>
                </motion.section>

                {/* Skills Section */}
                <motion.section
                    className="mb-24"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                >
                    <h3 className="text-4xl font-bold mb-12 text-center">Skills</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {Object.entries(skills).map(([category, skillList]) => (
                            <motion.div
                                key={category}
                                variants={fadeInUp}
                                className={`backdrop-blur-sm rounded-xl p-6 border ${
                                    darkMode
                                        ? "bg-gray-800/50 border-gray-700/30"
                                        : "bg-white/80 border-gray-300/60 shadow-lg"
                                }`}
                            >
                                <h4
                                    className={`text-lg font-semibold mb-4 capitalize ${
                                        darkMode ? "text-emerald-400" : "text-emerald-600"
                                    }`}
                                >
                                    {category.replace(/([A-Z])/g, " $1").trim()}
                                </h4>
                                <div className="space-y-3">
                                    {skillList.map((skill, i) => (
                                        <div
                                            key={i}
                                            className={`flex items-center space-x-3 text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                                        >
                                            <span className="text-lg">{skill.icon}</span>
                                            <span>{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Projects Section */}
                <motion.section
                    className="mb-24"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                >
                    <h3 className="text-4xl font-bold mb-12 text-center">Notable Projects</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <motion.a
                                key={index}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={fadeInUp}
                                whileHover={{
                                    scale: 1.05,
                                    y: -5,
                                    transition: { duration: 0.2 },
                                }}
                                whileTap={{ scale: 0.98 }}
                                className={`block backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 cursor-pointer group ${
                                    darkMode
                                        ? "bg-gray-800/50 border-gray-700/30 hover:border-emerald-500/50 hover:bg-gray-800/70 hover:shadow-2xl hover:shadow-emerald-500/20"
                                        : "bg-white/80 border-gray-300/60 hover:border-emerald-500/60 hover:bg-white hover:shadow-2xl hover:shadow-emerald-500/10 shadow-lg"
                                }`}
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex items-center space-x-2">
                                        <h4
                                            className={`text-lg font-semibold transition-colors duration-300 ${
                                                darkMode
                                                    ? "text-emerald-400 group-hover:text-emerald-300"
                                                    : "text-emerald-600 group-hover:text-emerald-700"
                                            }`}
                                        >
                                            {project.title}
                                        </h4>
                                        <svg
                                            className={`w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                                                darkMode
                                                    ? "text-gray-400 group-hover:text-emerald-300"
                                                    : "text-gray-500 group-hover:text-emerald-600"
                                            }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            />
                                        </svg>
                                    </div>
                                    <span
                                        className={`text-sm transition-colors duration-300 ${
                                            darkMode
                                                ? "text-gray-500 group-hover:text-gray-400"
                                                : "text-gray-600 group-hover:text-gray-700"
                                        }`}
                                    >
                                        {project.year}
                                    </span>
                                </div>
                                <p
                                    className={`mb-4 text-sm leading-relaxed transition-colors duration-300 ${
                                        darkMode
                                            ? "text-gray-300 group-hover:text-gray-200"
                                            : "text-gray-700 group-hover:text-gray-800"
                                    }`}
                                >
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className={`px-2 py-1 rounded text-xs transition-all duration-300 ${
                                                darkMode
                                                    ? "bg-gray-700/50 text-blue-300 group-hover:bg-blue-500/20 group-hover:text-blue-200"
                                                    : "bg-blue-100 text-blue-700 group-hover:bg-blue-200 group-hover:text-blue-800"
                                            }`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.section>

                {/* Education & Certifications */}
                <motion.section
                    className="mb-16"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                >
                    <h3 className="text-4xl font-bold mb-12 text-center">
                        Education & Certifications
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            variants={fadeInUp}
                            className={`backdrop-blur-sm rounded-xl p-6 border ${
                                darkMode
                                    ? "bg-gray-800/50 border-gray-700/30"
                                    : "bg-white/80 border-gray-300/60 shadow-lg"
                            }`}
                        >
                            <h4
                                className={`text-lg font-semibold mb-2 ${darkMode ? "text-emerald-400" : "text-emerald-600"}`}
                            >
                                Education
                            </h4>
                            <p
                                className={`font-medium ${darkMode ? "text-gray-300" : "text-gray-800"}`}
                            >
                                Bachelor&apos;s in Information Systems
                            </p>
                            <p
                                className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                            >
                                Federal University of Goiás • 2022
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className={`backdrop-blur-sm rounded-xl p-6 border ${
                                darkMode
                                    ? "bg-gray-800/50 border-gray-700/30"
                                    : "bg-white/80 border-gray-300/60 shadow-lg"
                            }`}
                        >
                            <h4
                                className={`text-lg font-semibold mb-3 ${darkMode ? "text-emerald-400" : "text-emerald-600"}`}
                            >
                                Certifications
                            </h4>
                            <div className="space-y-2">
                                <div>
                                    <p
                                        className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-800"}`}
                                    >
                                        EF SET English - C2 Proficient
                                    </p>
                                    <p
                                        className={`text-xs ${darkMode ? "text-gray-500" : "text-gray-600"}`}
                                    >
                                        2022
                                    </p>
                                </div>
                                <div>
                                    <p
                                        className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-800"}`}
                                    >
                                        React - The Complete Guide
                                    </p>
                                    <p
                                        className={`text-xs ${darkMode ? "text-gray-500" : "text-gray-600"}`}
                                    >
                                        Academind GmbH • 2023
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Footer */}
                <motion.footer
                    className="text-center text-gray-500 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    <p>
                        &copy; 2025 Henrique Guimarães Ribeiro. Built with Next.js & Tailwind CSS.
                    </p>
                </motion.footer>
            </div>
        </div>
    );
};

export default Portfolio;
