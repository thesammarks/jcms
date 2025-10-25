import type {Metadata} from "next";
import Providers from "@/app/providers";
import '@mantine/core/styles.layer.css';
import '@mantine/dates/styles.layer.css';
import {ColorSchemeScript, mantineHtmlProps} from '@mantine/core';
import "./globals.css";

export const metadata: Metadata = {
    title: process.env.NEXT_PUBLIC_APPLICATION_NAME,
    applicationName: process.env.NEXT_PUBLIC_APPLICATION_NAME,
    description: process.env.NEXT_PUBLIC_APPLICATION_DESCRIPTION,
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://sam.capysoft.app"),
    robots: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
        googleBot: "index, follow"
    },
    appleWebApp: {
        title: process.env.NEXT_PUBLIC_APPLICATION_NAME,
        statusBarStyle: "default",
        capable: true
    },
    openGraph: {
        siteName: process.env.NEXT_PUBLIC_APPLICATION_NAME,
        type: "website",
        locale: "en_US",
        url: process.env.NEXT_PUBLIC_BASE_URL,
        title: process.env.NEXT_PUBLIC_APPLICATION_NAME,
        description: process.env.NEXT_PUBLIC_APPLICATION_DESCRIPTION,
    },
    twitter: {
        card: "summary",
        site: process.env.NEXT_PUBLIC_BASE_URL,
        title: process.env.NEXT_PUBLIC_APPLICATION_NAME,
        description: process.env.NEXT_PUBLIC_APPLICATION_DESCRIPTION,
    },
    icons: {
        icon: [
            {
                url: "/favicon.ico",
                type: "image/x-icon"
            },
        ],
        shortcut: [
            {
                url: "/favicon.ico",
                type: "image/x-icon"
            }
        ],
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" {...mantineHtmlProps}>
            <head>
                <ColorSchemeScript />

                {/* Primary Meta Tags */}
                <title>{process.env.NEXT_PUBLIC_APPLICATION_NAME}</title>
                <meta name="description" content={process.env.NEXT_PUBLIC_APPLICATION_DESCRIPTION}/>
                <meta name="keywords" content={process.env.NEXT_PUBLIC_APPLICATION_KEYWORDS}/>
                <meta name="author" content={process.env.NEXT_PUBLIC_AUTHOR_NAME}/>
                <meta name="robots" content="index, follow"/>
                <meta name="googlebot" content="index, follow"/>
                <link rel="canonical" href={process.env.NEXT_PUBLIC_BASE_URL}/>

                {/* Open Graph / Facebook */}
                <meta property="og:title" content={process.env.NEXT_PUBLIC_APPLICATION_NAME}/>
                <meta property="og:description" content={process.env.NEXT_PUBLIC_APPLICATION_DESCRIPTION}/>
                <meta property="og:url" content={process.env.NEXT_PUBLIC_BASE_URL}/>
                <meta property="og:type" content="website"/>

                {/* Twitter */}
                <meta name="twitter:card" content={process.env.NEXT_PUBLIC_APPLICATION_NAME}/>
                <meta name="twitter:title" content={process.env.NEXT_PUBLIC_APPLICATION_NAME}/>
                <meta name="twitter:description" content={process.env.NEXT_PUBLIC_APPLICATION_DESCRIPTION}/>

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico"/>
            </head>
            <body>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
