import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import { scaleIn } from "../../lib/animations";
import { SITE_CONFIG } from "../../lib/constants";
import Button from "../ui/Button";

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
    return (
        <motion.section
            className="text-center mb-24"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            role="banner"
            aria-labelledby="hero-heading"
        >
            <motion.div
                className="flex justify-center mb-8"
                variants={scaleIn}
                initial="initial"
                animate="animate"
            >
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 shadow-xl border-primary-500/60 shadow-primary-500/30 dark:border-primary-400/50 dark:shadow-primary-500/20">
                    <Image
                        src={SITE_CONFIG.avatar}
                        alt={`Portrait of ${SITE_CONFIG.name}, Software Engineer`}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                        priority
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Ss6+8 bLKRHJyQQQgjr8GGZN8nD4jGUYZQoztG1AUAAAAHgAAA="
                    />
                </div>
            </motion.div>

            <h1
                id="hero-heading"
                className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent"
            >
                {SITE_CONFIG.name}
            </h1>
            <h2 className="text-2xl mb-8 text-content-secondary">
                {SITE_CONFIG.title}
            </h2>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-8 text-content-tertiary">
                {SITE_CONFIG.description}
            </p>

            {/* Contact Links */}
            <div className="flex justify-center space-x-6" role="group" aria-label="Contact and social links">
                <Button
                    variant="primary"
                    href={`mailto:${SITE_CONFIG.email}`}
                    aria-label={`Send email to ${SITE_CONFIG.email}`}
                >
                    Contact Me
                </Button>
                <Button
                    variant="outline"
                    href={SITE_CONFIG.github}
                    external
                    aria-label="View GitHub profile (opens in new tab)"
                >
                    GitHub
                </Button>
            </div>
        </motion.section>
    );
};

export default HeroSection;