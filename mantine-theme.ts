'use client';

import {createTheme} from '@mantine/core';

export const theme = createTheme({
    colors: {},
    components: {
        Text: {
            defaultProps: {
                c: "#f5f6f8",
                opacity: 0.7,
            }
        },
        Flex: {
            defaultProps: {
                gap: 6,
            },
        },
        Avatar: {
            defaultProps: {
                opacity: 0.7,
            },
        },
    },
});
