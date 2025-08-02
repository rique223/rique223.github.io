# 📊 Data Management Guide

## Overview

This portfolio uses a **centralized data management system** where all personal information, experience, projects, and skills are defined once in `app/lib/constants.ts` and automatically propagate to both the **website UI** and **terminal interface**.

## 🏗️ Architecture

```
constants.ts (Single Source of Truth)
    ↓
    ├── Website UI Components (React)
    └── Terminal File System (Dynamic Generation)
```

## 📁 File Structure

- **`app/lib/constants.ts`** - Central data repository
- **`app/Utils/fs.ts`** - Dynamic terminal content generator  
- **Website Components** - Consume data directly from constants

## 🔧 How to Add/Update Data

### 1. Personal Information (`SITE_CONFIG`)

```typescript
export const SITE_CONFIG = {
    name: "Your Full Name",
    title: "Your Professional Title", 
    description: "Your professional summary...",
    email: "your.email@example.com",
    phone: "+1 234 567 8900",
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username", 
    location: "Your Location",
    avatar: "/avatar.jpg",
    url: "https://your-portfolio.com",
} as const;
```

**Effects:**
- ✅ **Website**: Updates hero section, contact info, metadata
- ✅ **Terminal**: Updates `about` command output, contact info

### 2. Work Experience (`EXPERIENCES`)

```typescript
export const EXPERIENCES = [
    {
        id: "unique-id",                    // Terminal command identifier
        title: "Job Title",
        company: "Company Name", 
        period: "MM/YYYY - MM/YYYY",
        location: "City, Country",
        description: "Brief description for website",
        detailedDescription: [              // Bullet points for terminal
            "Detailed achievement 1",
            "Detailed achievement 2", 
            "Detailed achievement 3"
        ],
        technologies: ["React", "Node.js"], // Website badges
        detailedTechnologies: "Full tech stack for terminal",
        current: true,                      // Boolean for "Current" badge
    },
] as const;
```

**Effects:**
- ✅ **Website**: New card in Experience section with all details
- ✅ **Terminal**: New entry in `experience` directory accessible via `cat experience/{id}`

### 3. Projects (`PROJECTS`)

```typescript
export const PROJECTS = [
    {
        id: "project-id",
        title: "Project Name",
        description: "Brief description for website",
        detailedDescription: "Detailed description for terminal",
        tech: ["React", "TypeScript"],           // Website tech badges
        year: "2024",                           // Website display year
        terminalYear: "MM/YYYY",               // Terminal display format
        link: "https://github.com/username/repo",
        terminalLink: "github.com/username/repo", // Shorter terminal format
        terminalTitle: "Optional different title for terminal",
    },
] as const;
```

**Effects:**
- ✅ **Website**: New project card with hover effects and tech badges
- ✅ **Terminal**: New entry in `projects` directory via `cat projects/{id}`

### 4. Skills (`SKILLS`)

```typescript
export const SKILLS = {
    frontend: [
        { 
            name: "React", 
            icon: "⚛️",
            terminalOnly: false    // Shows in both website and terminal
        },
        { 
            name: "Advanced Skill", 
            icon: "🔧",
            terminalOnly: true     // Only shows in terminal
        },
    ],
    // ... other categories
} as const;
```

**Categories Available:**
- `frontend` - Frontend technologies
- `backend` - Backend & tools  
- `tools` - Development tools
- `languages` - Programming & spoken languages

**Effects:**
- ✅ **Website**: Skills grid with icons and categories
- ✅ **Terminal**: Comprehensive skill lists via `cat skills/{category}`

### 5. Education (`EDUCATION`)

```typescript
export const EDUCATION = {
    degree: "Bachelor's in Computer Science",
    institution: "University Name", 
    year: "2024",                          // Website display
    graduationDate: "MM/YYYY",            // Terminal format
    location: "City, State, Country",
    focus: "Detailed focus description",
    fullDegree: "Full degree title",
} as const;
```

**Effects:**
- ✅ **Website**: Education section with basic info
- ✅ **Terminal**: Detailed education info via `cat education/info`

### 6. Certifications (`CERTIFICATIONS`)

```typescript
export const CERTIFICATIONS = [
    {
        id: "cert-id",                    // Terminal identifier
        name: "Certification Name",
        issuer: "Issuing Organization",   // Optional
        year: "2024",                    // Website year
        month: "MM/YYYY",               // Terminal format  
        description: "Detailed description for terminal",
        certificateUrl: "certificate.com/verify",
    },
] as const;
```

**Effects:**
- ✅ **Website**: Certification cards in Education section
- ✅ **Terminal**: Detailed cert info via `cat certifications/{id}`

### 7. Volunteering (`VOLUNTEERING`)

```typescript
export const VOLUNTEERING = {
    organization: "Organization Name",
    role: "Your Role",
    description: "Detailed description of your volunteer work",
} as const;
```

**Effects:**
- ✅ **Terminal**: Volunteer info via `cat volunteering/info`
- ❌ **Website**: Currently terminal-only

## 🎯 Best Practices

### ✅ Do's
- **Use clear, unique IDs** for experiences, projects, certifications
- **Keep website descriptions concise** (1-2 lines)
- **Make terminal descriptions detailed** with bullet points
- **Include all relevant technologies** in both formats
- **Use consistent date formats** (`MM/YYYY` for terminal)
- **Test both website and terminal** after changes

### ❌ Don'ts  
- **Don't duplicate data** - everything should be in constants.ts
- **Don't edit fs.ts directly** - it's auto-generated
- **Don't forget the `as const`** assertion for proper typing
- **Don't use special characters** in IDs (use kebab-case)

## 🔄 Update Workflow

1. **Edit `constants.ts`** with new/updated data
2. **Save file** - changes auto-propagate everywhere
3. **Test website** - Check UI components render correctly  
4. **Test terminal** - Verify commands work: `ls`, `cat`, etc.
5. **Build project** - `yarn build` to ensure no TypeScript errors

## 🧪 Testing Your Changes

### Website Testing
- Check all sections render properly
- Verify new experience/project cards appear
- Test responsive design on mobile
- Confirm tech badges display correctly

### Terminal Testing  
```bash
# Basic navigation
ls                           # See all directories
cd experience               # Navigate to experience
ls                          # See all experience entries  
cat rocketchat              # View specific experience
cd ../projects              # Navigate to projects
cat your-new-project        # View your new project
```

## 🚀 Advanced Features

### Conditional Display
Use `terminalOnly: true` in skills to show advanced skills only in terminal:
```typescript
{ name: "Advanced Framework", icon: "🔧", terminalOnly: true }
```

### Multiple Data Formats
Projects can have different titles/years for website vs terminal:
```typescript
{
    title: "Short Website Title",
    terminalTitle: "Detailed Terminal Title",
    year: "2024", 
    terminalYear: "03/2024"
}
```

## 🎉 Benefits

- **🔄 DRY Principle** - Define once, use everywhere
- **⚡ Instant Updates** - Change propagates automatically  
- **🛡️ Type Safety** - Full TypeScript validation
- **🎯 Consistency** - No data sync issues
- **📈 Scalability** - Easy to add new sections/data types

---

**Need Help?** The data flows from `constants.ts` → website components & terminal generator. Always start your updates in the constants file! 🎯