import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#ecfdf5",
                    100: "#d1fae5", 
                    200: "#a7f3d0",
                    300: "#6ee7b7",
                    400: "#34d399",
                    500: "#10b981",
                    600: "#059669",
                    700: "#047857",
                    800: "#065f46",
                    900: "#064e3b",
                },
                accent: {
                    50: "#eff6ff",
                    100: "#dbeafe",
                    200: "#bfdbfe", 
                    300: "#93c5fd",
                    400: "#60a5fa",
                    500: "#3b82f6",
                    600: "#2563eb",
                    700: "#1d4ed8",
                    800: "#1e40af",
                    900: "#1e3a8a",
                },
                danger: {
                    400: "#f87171",
                    600: "#dc2626",
                },
                surface: {
                    DEFAULT: "var(--surface)",
                    secondary: "var(--surface-secondary)",
                    tertiary: "var(--surface-tertiary)",
                },
                content: {
                    primary: "var(--text-primary)",
                    secondary: "var(--text-secondary)", 
                    tertiary: "var(--text-tertiary)",
                    muted: "var(--text-muted)",
                },
                border: {
                    primary: "var(--border-primary)",
                    secondary: "var(--border-secondary)",
                },
            },
            animation: {
                "fade-in": "fadeIn 0.5s ease-in-out",
                "slide-up": "slideUp 0.6s ease-out",
                "scale-in": "scaleIn 0.5s ease-out",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { opacity: "0", transform: "translateY(60px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                scaleIn: {
                    "0%": { opacity: "0", transform: "scale(0.9)" },
                    "100%": { opacity: "1", transform: "scale(1)" },
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
