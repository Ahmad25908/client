import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['localhost', 'deveonex.com'],
  },
};

export default nextConfig;
