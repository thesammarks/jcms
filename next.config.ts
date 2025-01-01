import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/card',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
