import Link from "next/link";
import { Rocket, Shield, Globe, Sparkles } from "lucide-react";

export default function Home() {
  return (
    // ===== FIX: min-h-screen and pt-28 for header spacing =====
    <main className="min-h-screen text-white flex flex-col items-center justify-center px-4 relative overflow-hidden pt-28 md:pt-32 lg:pt-36">
      {/* ===== BACKGROUND IMAGE ===== */}
      <div 
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/home1.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      {/* ===== ANIMATED STARS OVERLAY ===== */}
      <div className="absolute inset-0 -z-10">
        {[...Array(80)].map((_, i) => {
          const size = Math.random() * 2.5 + 1;
          const duration = Math.random() * 4 + 2;
          return (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${duration}s`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.6 + 0.1,
                width: `${size}px`,
                height: `${size}px`,
              }}
            />
          );
        })}
      </div>

      {/* ===== CONTENT ===== */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs md:text-sm text-gray-200 hover:bg-white/20 transition-all mb-6 md:mb-8">
          <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-400" />
          Digital Personal Data Protection Act, 2023
        </div>

        {/* Main Heading */}
        <div className="mb-4 md:mb-6">
          <p className="text-lg md:text-2xl lg:text-3xl text-gray-200 font-light tracking-wide drop-shadow-lg">
            Welcome to the
          </p>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold leading-tight drop-shadow-2xl">
            <span className="text-white">Data Protection</span>
            <br />
            <span className="text-white">Galaxy</span>
          </h1>
        </div>

        {/* Description */}
        <p className="text-sm md:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-lg px-2 mb-8 md:mb-12">
          Your interactive guide to understanding the Digital Personal Data Protection Act, 2023 in a holistic view.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {[
            { icon: Shield, title: "Data Protection", desc: "Know your rights and obligations", color: "from-blue-400 to-blue-600" },
            { icon: Globe, title: "Interactive Guide", desc: "Explore the galaxy of provisions", color: "from-purple-400 to-purple-600" },
            { icon: Rocket, title: "Start Exploring", desc: "Navigate through the universe", color: "from-pink-400 to-pink-600" },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group p-5 md:p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/20`}>
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="font-semibold text-white text-base md:text-lg drop-shadow-md">{item.title}</h3>
                <p className="text-xs md:text-sm text-gray-300 mt-1 drop-shadow-md">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div>
          <Link
            href="/galaxy"
            className="inline-flex items-center gap-2 md:gap-3 px-8 md:px-10 py-3 md:py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-sm md:text-lg hover:scale-105 transition-all hover:shadow-2xl hover:shadow-blue-500/40 shadow-lg shadow-blue-500/20"
          >
            <Rocket className="w-4 h-4 md:w-5 md:h-5" />
            Start Exploring
          </Link>
        </div>
      </div>
    </main>
  );
}