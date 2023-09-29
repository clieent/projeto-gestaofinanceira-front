/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {remotePatterns: [
    {
      protocol: 'http',
      hostname: 'localhost',
      port: '3001',
      pathname: '/**',
    },
  ],}
}

module.exports = nextConfig
