import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  reactCompiler: true,
  reactStrictMode: true,
};

export default nextConfig;
