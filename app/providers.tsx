'use client'

import {MantineProvider} from '@mantine/core';
import React, {ReactNode} from 'react';
import {theme} from '@/mantine-theme';
import {Analytics} from '@vercel/analytics/next';

interface ProvidersProps {
    children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
    return (
        <MantineProvider defaultColorScheme="auto" theme={theme}>
            {children}
            <Analytics />
        </MantineProvider>
    );
}
