/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    // serverActions: true,
  },
  images: {
    domains: ["cdn.sanity.io"]
  }
}

export default nextConfig
