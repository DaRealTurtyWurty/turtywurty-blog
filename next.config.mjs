/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: ""
            }
        ]
    },
    output: 'standalone'
}

export default nextConfig;
