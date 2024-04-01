/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            allowedOrigins: ["localhost:3000", "https://bookish-space-guacamole-x6wvwpqw6w6fvrr4-3000.app.github.dev/"]
        }
    }
};

export default nextConfig;
