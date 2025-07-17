/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "github.com",
            },
        ],
    },
    transpilePackages: ["next-mdx-remote"],
};

module.exports = nextConfig;
