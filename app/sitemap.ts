import config from "@/config";

export const dynamic = "force-static"

export default function sitemap() {
    return [
        {
            url: `${config.BASE_URL}`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${config.BASE_URL}/card`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'daily',
            priority: 1,
        },
    ];
}
