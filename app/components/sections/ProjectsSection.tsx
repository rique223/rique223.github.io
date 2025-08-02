import { motion } from "framer-motion";
import React from "react";

import { fadeInUp, hoverScale } from "../../lib/animations";
import { PROJECTS } from "../../lib/constants";
import Badge from "../ui/Badge";
import Card from "../ui/Card";
import Section from "../ui/Section";

const ProjectsSection = () => {
    return (
        <Section id="projects" title="Notable Projects">
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
                        className="block group focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900 dark:focus:ring-offset-gray-800 rounded-xl"
                        aria-label={`View ${project.title} project on GitHub (opens in new tab)`}
                        role="listitem"
                    >
                        <Card
                            hover
                            className="h-full transition-all duration-300 cursor-pointer hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/20 dark:hover:border-primary-500/50 dark:hover:shadow-primary-500/20"
                        >
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex items-center space-x-2">
                                    <h3 className="text-lg font-semibold transition-colors duration-300 text-accent group-hover:text-primary-600 dark:group-hover:text-primary-400">
                                        {project.title}
                                    </h3>
                                    <svg
                                        className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-content-muted group-hover:text-primary-600 dark:group-hover:text-primary-400"
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
                                <span className="text-sm transition-colors duration-300 text-content-muted group-hover:text-content-secondary">
                                    {project.year}
                                </span>
                            </div>
                            <p className="mb-4 text-sm leading-relaxed transition-colors duration-300 text-content-secondary group-hover:text-content-primary">
                                {project.detailedDescription}
                            </p>
                            <div className="flex flex-wrap gap-2" role="list" aria-label="Project technologies">
                                {project.tech.map((tech) => (
                                    <Badge
                                        key={tech}
                                        variant="secondary"
                                        className="transition-all duration-300 group-hover:bg-accent-100 group-hover:text-accent-700 dark:group-hover:bg-accent-900/40 dark:group-hover:text-accent-300"
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