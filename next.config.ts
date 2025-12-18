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
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Allow local uploads to work properly
    unoptimized: process.env.NODE_ENV === 'development',
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
  // Prevent aggressive caching for content updates
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=0, must-revalidate',
        },
      ],
    },
  ],
};

export default nextConfig;
