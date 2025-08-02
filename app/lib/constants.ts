export const SITE_CONFIG = {
    name: "Henrique Guimarães Ribeiro",
    title: "Software Engineer | Frontend Specialist",
    description: "Passionate software engineer specializing in the Javascript/Typescript ecosystem with 7+ years of experience building scalable web applications. Expert in modern JavaScript, TypeScript, and performance optimization.",
    email: "henrique.jobs1@gmail.com",
    phone: "+55 62 9 9949-9739",
    github: "https://github.com/rique223",
    linkedin: "https://linkedin.com/in/henrique-guimaraes-ribeiro",
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
        description: "Increased marketplace apps exposition by 45x, improved UX for 12M+ users across 150+ countries.",
        technologies: ["React", "TypeScript", "Node.js", "Golang", "Jest"],
        current: true,
    },
    {
        id: "trinus",
        title: "Fullstack Software Engineer",
        company: "Trinus Co.",
        period: "04/2021 - 08/2021",
        location: "Goiânia, Brazil",
        description: "Implemented internal workflow solution for 27+ teams, replacing Jira and optimizing a $5B+ revenue stream.",
        technologies: ["React", "TypeScript", "AdonisJS", "Selenium"],
        current: false,
    },
    {
        id: "redcake",
        title: "Web Developer",
        company: "RedCake Digital Marketing",
        period: "02/2020 - 07/2020",
        location: "Goiânia, Brazil",
        description: "Designed and implemented websites for civil engineering firm and biggest auto insurance firms, serving 100K+ clients per day.",
        technologies: ["WordPress", "HTML", "CSS", "PHP", "JavaScript"],
        current: false,
    },
    {
        id: "toctec",
        title: "Fullstack Software Engineer",
        company: "Toctec",
        period: "03/2018 - 08/2019",
        location: "Goiânia, Brazil",
        description: "Developed Physical Advancement platform for Civil Engineering firm TocTao, becoming backbone of 1.24B BRL revenue.",
        technologies: ["C#", ".NET", "Angular 2+", "SQL Server"],
        current: false,
    },
] as const;

export const PROJECTS = [
    {
        id: "company-finder",
        title: "Company Finder",
        description: "Robust company information search engine using React and Kotlin",
        tech: ["React", "Kotlin"],
        year: "2020",
        link: "https://github.com/rique223/Company-finder",
    },
    {
        id: "mayday",
        title: "Mayday",
        description: "Digitalized contingency process for Civil Defense of Goiás state",
        tech: ["React", "Node.js"],
        year: "2022",
        link: "https://github.com/rique223/mvp-mayday",
    },
    {
        id: "weather-forecast",
        title: "Weather Forecast App",
        description: "Current and 5-day weather forecasts for any city",
        tech: ["React", "API Integration"],
        year: "2020",
        link: "https://github.com/rique223/Weather-Forecast-Angular-APP",
    },
    {
        id: "virus-tracker",
        title: "Virus Tracker",
        description: "COVID-19 pandemic tracking for Brazilian cities",
        tech: ["React", "Data Visualization"],
        year: "2020",
        link: "https://github.com/rique223/virus-tracker-tm",
    },
] as const;

export const SKILLS = {
    frontend: [
        { name: "React", icon: "⚛️" },
        { name: "React Native", icon: "📱" },
        { name: "NextJS", icon: "▲" },
        { name: "TypeScript", icon: "🔷" },
        { name: "JavaScript", icon: "🟨" },
        { name: "Tailwind", icon: "🎨" },
        { name: "HTML/CSS", icon: "🌐" },
    ],
    backend: [
        { name: "Node.js", icon: "🟢" },
        { name: "Golang", icon: "🐹" },
        { name: "C#/.NET", icon: "🔷" },
        { name: "API Development", icon: "🔗" },
    ],
    tools: [
        { name: "Git", icon: "📝" },
        { name: "AWS", icon: "☁️" },
        { name: "Jest", icon: "🧪" },
        { name: "Webpack", icon: "📦" },
        { name: "CI/CD", icon: "🔄" },
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
} as const;

export const CERTIFICATIONS = [
    {
        name: "EF SET English - C2 Proficient",
        year: "2022",
    },
    {
        name: "React - The Complete Guide",
        issuer: "Academind GmbH",
        year: "2023",
    },
] as const;