import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import StructuredData from "./components/StructuredData";
import { SITE_CONFIG } from "./lib/constants";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: "swap",
    preload: true,
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: "swap",
    preload: true,
});

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#10b981" },
        { media: "(prefers-color-scheme: dark)", color: "#1f2937" },
    ],
};

export const metadata: Metadata = {
    metadataBase: new URL(SITE_CONFIG.url),
    title: {
        default: `${SITE_CONFIG.name} - ${SITE_CONFIG.title}`,
        template: `%s | ${SITE_CONFIG.name}`,
    },
    description: SITE_CONFIG.description,
    keywords: [
        "Henrique Guimarães Ribeiro",
        "Software Engineer",
        "Frontend Developer",
        "React Developer",
        "TypeScript",
        "JavaScript",
        "Next.js",
        "Node.js",
        "Golang",
        "Portfolio",
        "Web Development",
        "Full Stack Developer",
    ],
    authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: SITE_CONFIG.url,
        title: `${SITE_CONFIG.name} - ${SITE_CONFIG.title}`,
        description: SITE_CONFIG.description,
        siteName: SITE_CONFIG.name,
        images: [
            {
                url: `${SITE_CONFIG.url}/og-image.png`,
                width: 1200,
                height: 630,
                alt: `${SITE_CONFIG.name} - Portfolio`,
                type: "image/png",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `${SITE_CONFIG.name} - ${SITE_CONFIG.title}`,
        description: SITE_CONFIG.description,
        images: [`${SITE_CONFIG.url}/og-image.png`],
        creator: "@rique223",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "your-google-verification-code",
    },
    alternates: {
        canonical: SITE_CONFIG.url,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <StructuredData />
                <link rel="icon" href="/favicon.ico" sizes="32x32" />
                <link rel="icon" href="/icon.svg" type="image/svg+xml" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-emerald-600 text-white px-4 py-2 rounded-md z-50"
                >
                    Skip to main content
                </a>
                <main id="main-content">{children}</main>
            </body>
        </html>
    );
}
