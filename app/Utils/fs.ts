import { 
    SITE_CONFIG, 
    EXPERIENCES, 
    PROJECTS, 
    SKILLS, 
    EDUCATION, 
    CERTIFICATIONS,
    VOLUNTEERING
} from '../lib/constants';

// Generate terminal content from centralized constants
const generateAboutInfo = () => `${SITE_CONFIG.name}
${SITE_CONFIG.title}

📍 Location: ${SITE_CONFIG.location}
📧 ${SITE_CONFIG.email}  
📱 ${SITE_CONFIG.phone}
🔗 GitHub: ${SITE_CONFIG.github}

${SITE_CONFIG.description}`;

const generateExperienceEntry = (exp: (typeof EXPERIENCES)[number]) => `${exp.title} | ${exp.company} | ${exp.location} | ${exp.period}

${exp.detailedDescription.map(item => `• ${item}`).join('\n')}

Technologies: ${exp.technologies.join(', ')}`;

const generateProjectEntry = (project: (typeof PROJECTS)[number]) => {
    const title = 'terminalTitle' in project && project.terminalTitle ? project.terminalTitle : project.title;
    const year = project.terminalYear;
    const link = project.terminalLink;
    
    return `${title} (${year})
${project.detailedDescription}
🔗 ${link}`;
};

const generateSkillsSection = (categoryName: string, skills: readonly { readonly name: string; readonly icon: string }[]) => {
    const allSkills = skills.map(skill => skill.name);
    return `${categoryName}:\n• ${allSkills.join(' | ')}`;
};

const generateEducationInfo = () => `${EDUCATION.degree} | ${EDUCATION.institution}
${EDUCATION.location} | Graduated: ${EDUCATION.graduationDate}

${EDUCATION.fullDegree}
${EDUCATION.focus}`;

const generateCertificationEntry = (cert: (typeof CERTIFICATIONS)[number]) => 
    `${cert.name} (${cert.month})
${cert.description}
🔗 Certificate: ${cert.certificateUrl}`;

const generateContactInfo = () => `Contact Information:

📧 Email: ${SITE_CONFIG.email}
📱 Phone: ${SITE_CONFIG.phone}
🔗 GitHub: ${SITE_CONFIG.github}
🌐 Portfolio: ${SITE_CONFIG.url}

Feel free to reach out for collaboration opportunities!`;

export const fileSystem: Record<string, Record<string, string>> = {
    "/": {
        about: "directory",
        experience: "directory",
        education: "directory",
        projects: "directory",
        skills: "directory",
        contact: "directory",
        certifications: "directory",
        volunteering: "directory",
    },
    about: {
        info: generateAboutInfo(),
    },
    experience: Object.fromEntries(
        EXPERIENCES.map(exp => [
            exp.id, 
            generateExperienceEntry(exp)
        ])
    ),
    education: {
        info: generateEducationInfo(),
    },
    projects: Object.fromEntries(
        PROJECTS.map(project => [
            project.id,
            generateProjectEntry(project)
        ])
    ),
    skills: {
        frontend: generateSkillsSection('Frontend Technologies', SKILLS.frontend),
        backend: generateSkillsSection('Backend & Tools', SKILLS.backend),
        tools: generateSkillsSection('Development Tools', SKILLS.tools),
        languages: generateSkillsSection('Languages', SKILLS.languages),
    },
    contact: {
        info: generateContactInfo(),
    },
    certifications: Object.fromEntries(
        CERTIFICATIONS.map(cert => [
            cert.id,
            generateCertificationEntry(cert)
        ])
    ),
    volunteering: {
        info: `${VOLUNTEERING.organization}
${VOLUNTEERING.role}

${VOLUNTEERING.description}`,
    },
};
