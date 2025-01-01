import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/app/providers";
import '@mantine/core/styles.layer.css';
import '@mantine/dates/styles.layer.css';
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';

export const metadata: Metadata = {
    title: "@/sam/card",
    description: "A landing page for me, Sam.",
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
            </head>
            <body>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
