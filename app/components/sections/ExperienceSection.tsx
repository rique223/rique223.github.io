import { motion } from "framer-motion";
import React, { useState } from "react";

import { fadeInUp } from "../../lib/animations";
import { EXPERIENCES } from "../../lib/constants";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Section from "../ui/Section";

interface ExperienceSectionProps {
    darkMode: boolean;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ darkMode }) => {
    const [showAllExperiences, setShowAllExperiences] = useState(false);

    return (
        <Section id="experience" title="Experience" darkMode={darkMode}>
            <div className="space-y-8" role="list" aria-label="Work experience list">
                {EXPERIENCES.map(
                    (exp, index) =>
                        (index < 3 || showAllExperiences) && (
                            <motion.div
                                key={exp.id}
                                variants={fadeInUp}
                                initial="initial"
                                animate="animate"
                                transition={{ delay: index * 0.1 }}
                                role="listitem"
                            >
                                <Card darkMode={darkMode} hover>
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                        <div>
                                            <h3
                                                className={`text-xl font-semibold ${
                                                    darkMode ? "text-emerald-400" : "text-emerald-600"
                                                }`}
                                            >
                                                {exp.title}
                                                {exp.current && (
                                                    <Badge variant="primary" darkMode={darkMode} className="ml-2">
                                                        Current
                                                    </Badge>
                                                )}
                                            </h3>
                                            <p
                                                className={`text-lg ${
                                                    darkMode ? "text-blue-300" : "text-blue-600"
                                                }`}
                                            >
                                                {exp.company}
                                            </p>
                                        </div>
                                        <div
                                            className={`text-sm md:text-right ${
                                                darkMode ? "text-gray-400" : "text-gray-600"
                                            }`}
                                        >
                                            <time dateTime={exp.period}>{exp.period}</time>
                                            <p>{exp.location}</p>
                                        </div>
                                    </div>
                                    <p
                                        className={`mb-4 leading-relaxed ${
                                            darkMode ? "text-gray-300" : "text-gray-700"
                                        }`}
                                    >
                                        {exp.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
                                        {exp.technologies.map((tech) => (
                                            <Badge key={tech} variant="tech" darkMode={darkMode} role="listitem">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </Card>
                            </motion.div>
                        )
                )}
            </div>

            {/* Show/Hide All Experiences Button */}
            <div className="flex justify-center mt-8">
                <Button
                    variant="secondary"
                    darkMode={darkMode}
                    onClick={() => setShowAllExperiences(!showAllExperiences)}
                    aria-expanded={showAllExperiences}
                    aria-controls="experience-list"
                >
                    {showAllExperiences ? "Show Less" : "See All Experiences"}
                    <svg
                        className={`w-4 h-4 ml-2 inline-block transition-transform duration-200 ${
                            showAllExperiences ? "rotate-180" : ""
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
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </Button>
            </div>
        </Section>
    );
};

export default ExperienceSection;