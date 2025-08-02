import Script from "next/script";
import React from "react";

import { SITE_CONFIG } from "../lib/constants";

const StructuredData: React.FC = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: SITE_CONFIG.name,
        jobTitle: "Software Engineer",
        description: SITE_CONFIG.description,
        url: SITE_CONFIG.url,
        email: SITE_CONFIG.email,
        telephone: SITE_CONFIG.phone,
        image: `${SITE_CONFIG.url}${SITE_CONFIG.avatar}`,
        sameAs: [SITE_CONFIG.github, SITE_CONFIG.linkedin],
        address: {
            "@type": "PostalAddress",
            addressLocality: SITE_CONFIG.location,
        },
        knowsAbout: [
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "Golang",
            "Web Development",
            "Frontend Development",
            "Software Engineering",
        ],
        worksFor: {
            "@type": "Organization",
            name: "Rocket.Chat",
            url: "https://rocket.chat",
        },
        alumniOf: {
            "@type": "EducationalOrganization",
            name: "Federal University of Goiás",
        },
    };

    const websiteStructuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: `${SITE_CONFIG.name} - Portfolio`,
        url: SITE_CONFIG.url,
        description: SITE_CONFIG.description,
        author: {
            "@type": "Person",
            name: SITE_CONFIG.name,
        },
    };

    return (
        <>
            <Script
                id="person-structured-data"
                type="application/ld+json"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <Script
                id="website-structured-data"
                type="application/ld+json"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
            />
        </>
    );
};

export default StructuredData;