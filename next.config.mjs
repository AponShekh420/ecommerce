/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DATABASE_URL: 'mongodb://localhost:27017/ecommerce',
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'tailwindui.com',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'swiperjs.com',
            },
        ],
    },
};

export default nextConfig;
