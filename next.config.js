/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Always use export for GitHub Pages
  output: 'export',
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  transpilePackages: ['@tabler/icons-react', '@react-three/fiber', '@react-three/drei', 'three'],
}

module.exports = nextConfig
