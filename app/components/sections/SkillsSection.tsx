import { motion } from "framer-motion";
import React from "react";

import { fadeInUp } from "../../lib/animations";
import { SKILLS } from "../../lib/constants";
import Card from "../ui/Card";
import Section from "../ui/Section";

interface SkillsSectionProps {}

const SkillsSection: React.FC<SkillsSectionProps> = () => {
    return (
        <Section id="skills" title="Skills">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" role="list" aria-label="Skills by category">
                {Object.entries(SKILLS).map(([category, skillList]) => (
                    <motion.div
                        key={category}
                        variants={fadeInUp}
                        initial="initial"
                        animate="animate"
                        role="listitem"
                    >
                        <Card>
                            <h3 className="text-lg font-semibold mb-4 capitalize text-accent">
                                {category.replace(/([A-Z])/g, " $1").trim()}
                            </h3>
                            <div className="space-y-3" role="list" aria-label={`${category} skills`}>
                                {skillList.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center space-x-3 text-sm text-content-secondary"
                                        role="listitem"
                                    >
                                        <span className="text-lg" role="img" aria-hidden="true">
                                            {skill.icon}
                                        </span>
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default SkillsSection;