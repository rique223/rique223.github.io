export const SITE_CONFIG = {
    name: "Henrique Guimarães Ribeiro",
    title: "Software Engineer | Frontend Specialist",
    description: "Passionate software engineer specializing in the Javascript/Typescript ecosystem with 7+ years of experience building scalable web applications. Expert in modern JavaScript, TypeScript, and Node.js.",
    email: "henrique.jobs1@gmail.com",
    phone: "+55 62 9 9949-9739",
    github: "https://github.com/rique223",
    location: "Remote",
    avatar: "/avatar.jpg",
    url: "https://rique223.github.io",
} as const; 

export const EXPERIENCES = [
    {
        id: "rocketchat",
        title: "Frontend Software Engineer",
        company: "Rocket.Chat",
        period: "08/2021 - 03/2025",
        location: "Remote",
        detailedDescription: [
            "Increased marketplace apps exposition by 45x through optimized request system",
            "Improved User Experience for 12M+ users across 150+ countries",
            "Enhanced app marketplace functionality lifting store out of admin user base",
            "Modernized and enhanced refactor putting 60+ standalone apps into new light",
            "Improved empty state messages across the app through design system contributions",
            "Contributed with high management on PMS and design decisions",
            "Implemented CI/CD Pipeline Integration, pull requests, code reviews, load/stress testing"
        ],
        technologies: ["React", "TypeScript", "Javascript", "Node.js", "Golang", "Playwright", "Jest", "React Query", "Meteor", "Storybook", "React Testing Library"],
        current: true,
    },
    {
        id: "trinus",
        title: "Fullstack Software Engineer",
        company: "Trinus Co.",
        period: "04/2021 - 08/2021",
        location: "Goiânia, Brazil",
        detailedDescription: [
            "Implemented internal workflow handling solution for 27+ teams",
            "Successfully replaced Jira with custom solution optimizing a $5B+ revenue stream",
            "Delivered lectures on technologies used by the team"
        ],
        technologies: ["React", "TypeScript",  "React Query", "AdonisJS", "Selenium"],
        current: false,
    },
    {
        id: "redcake",
        title: "Web Developer",
        company: "RedCake Digital Marketing",
        period: "02/2020 - 07/2020",
        location: "Goiânia, Brazil",
        detailedDescription: [
            "Designed and implemented websites for civil engineering firm modernizing their brand",
            "Created website for biggest auto insurance firms in Goiânia facing 100K+ clients per day",
            "Collaborated with design and copywriting teams"
        ],
        technologies: ["WordPress", "HTML", "CSS", "PHP", "JavaScript"],
        current: false,
    },
    {
        id: "toctec",
        title: "Fullstack Software Engineer",
        company: "Toctec",
        period: "03/2018 - 08/2019",
        location: "Goiânia, Brazil",
        detailedDescription: [
            "Developed Physical Advancement platform for Civil Engineering firm TocTao",
            "Platform became backbone of 1.24B BRL total revenue for construction sites across Brazilian midwest"
        ],
        technologies: ["C#", ".NET", "Angular 2+", "SQL Server"],
        current: false,
    },
] as const;

export const PROJECTS = [
    {
        id: "company-finder",
        title: "Company Finder",
        detailedDescription: "Robust company information search engine using React and Kotlin",
        tech: ["React", "Kotlin"],
        year: "2020",
        terminalYear: "07/2020",
        link: "https://github.com/rique223/Company-finder",
        terminalLink: "github.com/rique223/company-finder",
    },
    {
        id: "mayday",
        title: "Mayday",
        detailedDescription: "Digitalized contingency process for Civil Defense of Goiás state",
        tech: ["React", "Node.js"],
        year: "2022",
        terminalYear: "04/2022",
        link: "https://github.com/rique223/mvp-mayday",
        terminalLink: "github.com/rique223/mayday",
    },
    {
        id: "weather-forecast",
        title: "Weather Forecast App",
        detailedDescription: "Straightforward app showing current and 5-day weather forecasts for any city",
        tech: ["React", "API Integration"],
        year: "2020",
        terminalYear: "12/2020",
        link: "https://github.com/rique223/Weather-Forecast-Angular-APP",
        terminalLink: "github.com/rique223/weather-forecast",
    },
    {
        id: "virus-tracker",
        title: "Virus Tracker",
        detailedDescription: "COVID-19 pandemic tracking application for different Brazilian cities",
        tech: ["React", "Data Visualization"],
        year: "2020",
        terminalYear: "12/2020",
        link: "https://github.com/rique223/virus-tracker-tm",
        terminalLink: "github.com/rique223/virus-tracker",
        terminalTitle: "The Virus Tracker",
    },
] as const;

export const SKILLS = {
    frontend: [
        { name: "React", icon: "⚛️" },
        { name: "React Native", icon: "📱" },
        { name: "NextJS", icon: "▲" },
        { name: "TypeScript", icon: "🔷" },
        { name: "JavaScript", icon: "🟨" },
        { name: "Tanstack/React Query", icon: "🔄" },
        { name: "Tailwind", icon: "🎨" },
        { name: "HTML/CSS", icon: "🌐" },
        { name: "Gatsby", icon: "🟣" },
        { name: "Responsive Design", icon: "📱" },
        { name: "WAI-ARIA", icon: "♿" },
        { name: "UI/UX", icon: "🎨" },
        { name: "Figma", icon: "🎨" },
        { name: "Turborepo", icon: "⚡" },
    ],
    backend: [
        { name: "Node.js", icon: "🟢" },
        { name: "Golang", icon: "🐹" },
        { name: "C#/.NET", icon: "🔷" },
        { name: "Restful APIs", icon: "🔗" },
        { name: "API Integration", icon: "🔗" },
        { name: "BDD", icon: "🧪" },
        { name: "TDD", icon: "🧪" },
        { name: "Swagger", icon: "📋" },
        { name: "AWS", icon: "☁️" },
    ],
    tools: [
        { name: "Cursor AI", icon: "📝" },
        { name: "Git", icon: "📝" },
        { name: "AWS", icon: "☁️" },
        { name: "Jest", icon: "🧪" },
        { name: "React Testing Library", icon: "🧪" },
        { name: "Playwright", icon: "🧪" },
        { name: "CI/CD", icon: "🔄" },
        { name: "Selenium", icon: "🔍" },
        { name: "I18n", icon: "🌐" },
        { name: "Pnpm", icon: "📦" },
        { name: "Yarn", icon: "📦" },
        { name: "Webpack", icon: "📦" },
        { name: "Vercel", icon: "▲" },
    ],
    languages: [
        { name: "Portuguese (Native)", icon: "🇧🇷" },
        { name: "English (C2)", icon: "🇺🇸" },
        { name: "Spanish (Professional)", icon: "🇪🇸" },
    ],
} as const;

export const EDUCATION = {
    degree: "Bachelor's in Information Systems",
    institution: "Federal University of Goiás",
    year: "2022",
    graduationDate: "11/2022",
    location: "Goiânia, Goiás, Brazil",
    focus: "Focus on software development, database management, and system architecture.",
    fullDegree: "Bachelor's degree in Information Systems Administration",
} as const;

export const CERTIFICATIONS = [
    {
        id: "ef-set",
        name: "EF SET English - C2 Proficient",
        year: "2022",
        month: "01/2022",
        description: "The highest-level certificate of English proficiency",
        certificateUrl: "efset.org/cert/",
    },
    {
        id: "react-guide", 
        name: "React - The Complete Guide",
        issuer: "Academind GmbH",
        year: "2023",
        month: "09/2023",
        description: "Robust React.js certification by Academind GmbH",
        certificateUrl: "udemy.com/certificate/",
    },
] as const;

export const VOLUNTEERING = {
    organization: "Community Education Center for Boys and Girls",
    role: "Volunteer Informatics 101 Teacher",
    description: "Worked as a volunteer teaching computer skills to impoverished children, helping bridge the digital divide and providing foundational technology education.",
} as const;