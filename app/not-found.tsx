import Link from "next/link";
import { ArrowLeft, Search, Orbit, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen text-white flex flex-col items-center justify-center px-4 relative overflow-hidden bg-black">
      {/* ===== BACKGROUND IMAGE & GLOWS ===== */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: "url('/images/home1.jpeg')" }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>
        
        {/* Nebula Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* ===== 404 CONTENT ===== */}
      <div className="max-w-2xl mx-auto text-center relative z-10 mt-20">
        
        {/* Animated Icon */}
        <div className="mx-auto w-24 h-24 mb-8 relative">
          <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
          <div className="relative flex items-center justify-center w-full h-full border border-white/10 bg-white/5 rounded-full backdrop-blur-md">
            <Orbit className="w-10 h-10 text-purple-400 animate-[spin_4s_linear_infinite]" />
          </div>
        </div>

        {/* 404 Text */}
        <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4 drop-shadow-2xl">
          404
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Lost in the Galaxy?
        </h2>
        
        <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto">
          The page you are looking for doesn't exist, has been moved, or is temporarily unavailable. Let's get you back on track.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-500/30"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          
          <Link
            href="/insight"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            <Search className="w-5 h-5 text-purple-400" />
            Explore Insights
          </Link>
        </div>
      </div>
    </main>
  );
}