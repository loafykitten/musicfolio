import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    /* config options here */
    sassOptions: {
        includePaths: ['src/assets/styles'],
    },
    redirects: async () => {
        return [
            {
                source: '/bandcamp',
                destination: 'https://loafykitten.bandcamp.com',
                permanent: false,
            },
            {
                source: '/github',
                destination: 'https://github.com/loafykitten',
                permanent: false,
            },
            {
                source: '/facebook',
                destination: 'https://www.facebook.com/loafykitten',
                permanent: false,
            },
            {
                source: '/instagram',
                destination: 'https://instagram.com/loafykitten',
                permanent: false,
            },
            {
                source: '/ko-fi',
                destination: 'https://ko-fi.com/loafykitten',
                permanent: false,
            },
            {
                source: '/soundcloud',
                destination: 'https://soundcloud.com/loafykitten',
                permanent: false,
            },
            {
                source: '/threads',
                destination: 'https://threads.net/@loafykitten',
                permanent: false,
            },
            {
                source: '/tiktok',
                destination: 'https://www.tiktok.com/@loafykitten',
                permanent: false,
            },
            {
                source: '/twitch',
                destination: 'https://twitch.com/loafykitten',
                permanent: false,
            },
            {
                source: '/youtube',
                destination: 'https://youtube.com/@loafykitten',
                permanent: false,
            },
        ]
    },
}

export default nextConfig
