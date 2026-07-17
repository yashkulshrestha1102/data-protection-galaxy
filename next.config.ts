import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ===== VALID OPTIONS =====
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  
  // ===== EXPERIMENTAL (VALID) =====
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    optimisticClientCache: true,
    // ❌ REMOVED: turbo (ab top-level hai)
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
      config.watchOptions = {
        ...config.watchOptions,
        aggregateTimeout: 100,
        poll: 500,
      };
    }
    return config;
  },
};

export default nextConfig;