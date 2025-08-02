import { motion } from "framer-motion";
import React from "react";

import { fadeInUp, hoverScale } from "../../lib/animations";
import { PROJECTS } from "../../lib/constants";
import Badge from "../ui/Badge";
import Card from "../ui/Card";
import Section from "../ui/Section";

interface ProjectsSectionProps {
    darkMode: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ darkMode }) => {
    return (
        <Section id="projects" title="Notable Projects" darkMode={darkMode}>
            <div className="grid md:grid-cols-2 gap-8" role="list" aria-label="Project portfolio">
                {PROJECTS.map((project, index) => (
                    <motion.a
                        key={project.id}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={fadeInUp}
                        {...hoverScale}
                        initial="initial"
                        animate="animate"
                        transition={{ delay: index * 0.1 }}
                        className="block group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-xl"
                        aria-label={`View ${project.title} project on GitHub (opens in new tab)`}
                        role="listitem"
                    >
                        <Card
                            darkMode={darkMode}
                            hover
                            className={`h-full transition-all duration-300 cursor-pointer ${
                                darkMode
                                    ? "hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/20"
                                    : "hover:border-emerald-500/60 hover:shadow-2xl hover:shadow-emerald-500/10"
                            }`}
                        >
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex items-center space-x-2">
                                    <h3
                                        className={`text-lg font-semibold transition-colors duration-300 ${
                                            darkMode
                                                ? "text-emerald-400 group-hover:text-emerald-300"
                                                : "text-emerald-600 group-hover:text-emerald-700"
                                        }`}
                                    >
                                        {project.title}
                                    </h3>
                                    <svg
                                        className={`w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                                            darkMode
                                                ? "text-gray-400 group-hover:text-emerald-300"
                                                : "text-gray-500 group-hover:text-emerald-600"
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
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
                            <div className="flex flex-wrap gap-2" role="list" aria-label="Project technologies">
                                {project.tech.map((tech) => (
                                    <Badge
                                        key={tech}
                                        variant="secondary"
                                        darkMode={darkMode}
                                        className={`transition-all duration-300 ${
                                            darkMode
                                                ? "group-hover:bg-blue-500/20 group-hover:text-blue-200"
                                                : "group-hover:bg-blue-200 group-hover:text-blue-800"
                                        }`}
                                        role="listitem"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </Card>
                    </motion.a>
                ))}
            </div>
        </Section>
    );
};

export default ProjectsSection;