'use client';

import { createTheme } from '@mantine/core';
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const theme = createTheme({
    fontFamily: geistSans.style.fontFamily,
    fontFamilyMonospace: geistMono.style.fontFamily,
    components: {
        Text: {
            styles: {
                root: {
                    fontFamily: geistMono.style.fontFamily,
                    letterSpacing: "0.025em",
                    color: "#525252"
                },
            },
        },
    },
});
