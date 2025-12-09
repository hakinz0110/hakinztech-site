import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Fix for Genkit/Handlebars webpack issue
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push({
        'handlebars': 'commonjs handlebars',
      });
    }
    return config;
  },
  // Suppress the require.extensions warning
  serverExternalPackages: ['genkit', '@genkit-ai/googleai', 'handlebars', 'dotprompt'],
};

export default nextConfig;
