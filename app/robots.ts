import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: { userAgent: '*', allow: '/' },
        sitemap: 'https://streamer-pro.templates.seojack.website/sitemap.xml',
    };
}