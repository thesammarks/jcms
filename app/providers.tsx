'use client'

import { MantineProvider } from '@mantine/core';
import React, { ReactNode } from 'react';
import { theme } from '@/mantine-theme';

interface ProvidersProps {
    children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
    return (
        <MantineProvider defaultColorScheme="auto" theme={theme}>
            {children}
        </MantineProvider>
    );
};

export default Providers;
