/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Ensure Next.js outputs standalone build for Elastic Beanstalk
    output: 'standalone'
};

module.exports = nextConfig;