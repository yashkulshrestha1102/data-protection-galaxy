import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // ✅ unoptimized: true hata diya — ab Next.js images optimize karega
    qualities: [100, 75, 50],
    // Agar kabhi remote images use kare toh yahan domains add kar
    // remotePatterns: [
    //   { protocol: 'https', hostname: 'images.example.com' },
    // ],
  },
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;