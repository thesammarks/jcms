import type {Metadata} from "next";
import Providers from "@/app/providers";
import '@mantine/core/styles.layer.css';
import '@mantine/dates/styles.layer.css';
import {ColorSchemeScript, mantineHtmlProps} from '@mantine/core';
import "./globals.css";
import config from "@/config";

export const metadata: Metadata = {
    title: config.APPLICATION_NAME,
    applicationName: config.APPLICATION_NAME,
    description: config.APPLICATION_DESCRIPTION,
    metadataBase: new URL(config.BASE_URL),
    robots: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
        googleBot: "index, follow"
    },
    appleWebApp: {
        title: config.APPLICATION_NAME,
        statusBarStyle: "default",
        capable: true
    },
    openGraph: {
        siteName: config.APPLICATION_NAME,
        type: "website",
        locale: "en_US",
        url: config.BASE_URL,
        title: config.APPLICATION_NAME,
        description: config.APPLICATION_DESCRIPTION,
    },
    twitter: {
        card: "summary",
        site: config.BASE_URL,
        title: config.APPLICATION_NAME,
        description: config.APPLICATION_DESCRIPTION,
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
                <title>{config.APPLICATION_NAME}</title>
                <meta name="description" content={config.APPLICATION_DESCRIPTION}/>
                <meta name="keywords" content={config.APPLICATION_KEYWORDS}/>
                <meta name="author" content={config.AUTHOR_NAME}/>
                <meta name="robots" content="index, follow"/>
                <meta name="googlebot" content="index, follow"/>
                <link rel="canonical" href={config.BASE_URL}/>

                {/* Open Graph / Facebook */}
                <meta property="og:title" content={config.APPLICATION_NAME}/>
                <meta property="og:description" content={config.APPLICATION_DESCRIPTION}/>
                <meta property="og:url" content={config.BASE_URL}/>
                <meta property="og:type" content="website"/>

                {/* Twitter */}
                <meta name="twitter:card" content={config.APPLICATION_NAME}/>
                <meta name="twitter:title" content={config.APPLICATION_NAME}/>
                <meta name="twitter:description" content={config.APPLICATION_DESCRIPTION}/>

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
