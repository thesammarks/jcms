export const externalRedirects: Record<string, string> = {
    'linkedin': process.env.NEXT_PUBLIC_URL_LINKEDIN || 'https://www.facebook.com/',
    'instagram': process.env.NEXT_PUBLIC_URL_INSTAGRAM || 'https://www.instagram.com/',
    'github': process.env.NEXT_PUBLIC_URL_GITHUB || 'https://github.com/',
    'email': `mailto:${process.env.NEXT_PUBLIC_URL_EMAIL}` || 'mailto:sam@capysoft.app',
};
