import { motion } from "framer-motion";
import React from "react";

import { fadeInUp } from "../../lib/animations";
import { CERTIFICATIONS, EDUCATION } from "../../lib/constants";
import Card from "../ui/Card";
import Section from "../ui/Section";

interface EducationSectionProps {}

const EducationSection: React.FC<EducationSectionProps> = () => {
    return (
        <Section id="education" title="Education & Certifications">
            <div className="grid md:grid-cols-2 gap-8">
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <Card>
                        <h3 className="text-lg font-semibold mb-2 text-accent">
                            Education
                        </h3>
                        <p className="font-medium text-content-secondary">
                            {EDUCATION.degree}
                        </p>
                        <p className="text-sm text-content-muted">
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
                    <Card>
                        <h3 className="text-lg font-semibold mb-3 text-accent">
                            Certifications
                        </h3>
                        <div className="space-y-2" role="list" aria-label="Professional certifications">
                            {CERTIFICATIONS.map((cert, index) => (
                                <div key={index} role="listitem">
                                    <p className="text-sm font-medium text-content-secondary">
                                        {cert.name}
                                    </p>
                                    <p className="text-xs text-content-muted">
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