import { motion } from "framer-motion";
import React from "react";

import { fadeInUp } from "../../lib/animations";
import { CERTIFICATIONS, EDUCATION } from "../../lib/constants";
import Card from "../ui/Card";
import Section from "../ui/Section";

interface EducationSectionProps {
    darkMode: boolean;
}

const EducationSection: React.FC<EducationSectionProps> = ({ darkMode }) => {
    return (
        <Section id="education" title="Education & Certifications" darkMode={darkMode}>
            <div className="grid md:grid-cols-2 gap-8">
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <Card darkMode={darkMode}>
                        <h3
                            className={`text-lg font-semibold mb-2 ${
                                darkMode ? "text-emerald-400" : "text-emerald-600"
                            }`}
                        >
                            Education
                        </h3>
                        <p className={`font-medium ${darkMode ? "text-gray-300" : "text-gray-800"}`}>
                            {EDUCATION.degree}
                        </p>
                        <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                            {EDUCATION.institution} • {EDUCATION.year}
                        </p>
                    </Card>
                </motion.div>

                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.1 }}
                >
                    <Card darkMode={darkMode}>
                        <h3
                            className={`text-lg font-semibold mb-3 ${
                                darkMode ? "text-emerald-400" : "text-emerald-600"
                            }`}
                        >
                            Certifications
                        </h3>
                        <div className="space-y-2" role="list" aria-label="Professional certifications">
                            {CERTIFICATIONS.map((cert, index) => (
                                <div key={index} role="listitem">
                                    <p
                                        className={`text-sm font-medium ${
                                            darkMode ? "text-gray-300" : "text-gray-800"
                                        }`}
                                    >
                                        {cert.name}
                                    </p>
                                    <p
                                        className={`text-xs ${
                                            darkMode ? "text-gray-500" : "text-gray-600"
                                        }`}
                                    >
                                        {"issuer" in cert ? `${cert.issuer} • ` : ""}{cert.year}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Card>
                </motion.div>
            </div>
        </Section>
    );
};

export default EducationSection;