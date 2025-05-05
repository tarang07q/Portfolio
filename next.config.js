/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['*'],
  },
  transpilePackages: ['@tabler/icons-react'],
}

module.exports = nextConfig
