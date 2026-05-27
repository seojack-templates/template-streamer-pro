import type { Metadata, Viewport } from 'next';
import './globals.css';

const BASE_URL = 'https://streamer-pro.templates.seojack.website';

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: 'Streamer Pro',
    description: 'Dynamic gaming site for Twitch and YouTube streamers: video carousel, live-stream widget, schedule, and merch store.',
    alternates: { canonical: '/' },
    openGraph: {
        title: 'Streamer Pro',
        description: 'Dynamic gaming site for Twitch and YouTube streamers: video carousel, live-stream widget, schedule, and merch store.',
        url: BASE_URL,
        siteName: 'Streamer Pro',
        type: 'website',
        locale: 'en_GB',
        images: [{ url: 'https://cdn.seojack.website/templates/tpl_streamer_pro.avif', width: 1600, height: 1000 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Streamer Pro',
        description: 'Dynamic gaming site for Twitch and YouTube streamers: video carousel, live-stream widget, schedule, and merch store.',
        images: ['https://cdn.seojack.website/templates/tpl_streamer_pro.avif'],
    },
    robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: '#102a30' };

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Streamer Pro',
    description: 'Dynamic gaming site for Twitch and YouTube streamers: video carousel, live-stream widget, schedule, and merch store.',
    url: BASE_URL,
    image: 'https://cdn.seojack.website/templates/tpl_streamer_pro.avif',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en-GB">
            <body>
                {children}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </body>
        </html>
    );
}