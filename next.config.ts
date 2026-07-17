import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ===== BUILD OPTIMIZATION =====
  typescript: {
    ignoreBuildErrors: true,   // TypeScript errors ko ignore karo
  },
  eslint: {
    ignoreDuringBuilds: true,  // ESLint errors ko ignore karo
  },
  
  // ===== IMAGES =====
  images: {
    unoptimized: true,        // Image optimization off (faster build)
  },
  
  // ===== PACKAGES =====
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  
  // ===== EXPERIMENTAL =====
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  
  // ===== WEBPACK =====
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.cache = {
        type: 'filesystem',
        buildDependencies: {
          config: [__filename],
        },
      };
    }
    return config;
  },
};

export default nextConfig;