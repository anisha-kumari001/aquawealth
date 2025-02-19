import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        // Optionally, you can include a path pattern here if needed:
        // pathname: '/path/to/images/*',
      },
    ],
  },
  reactStrictMode: true,
  webpack(config, { isServer }) {
    // Optionally modify webpack configuration if needed
    if (!isServer) {
      config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    }
    return config;
  },
};

export default nextConfig;
