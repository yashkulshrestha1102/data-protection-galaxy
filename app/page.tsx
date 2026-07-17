import Link from "next/link";
import { Rocket, Shield, Globe, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-80px)] text-white flex flex-col items-center justify-center px-4 relative overflow-hidden pt-20 md:pt-24">
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
      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10 flex-1">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm text-gray-200 hover:bg-white/20 transition-all">
          <Sparkles className="w-4 h-4 text-blue-400" />
          Digital Personal Data Protection Act, 2023
        </div>

        {/* Main Heading - WHITE COLOR */}
        <div className="space-y-2">
          <p className="text-2xl md:text-3xl text-gray-200 font-light tracking-wide drop-shadow-lg">
            Welcome to the
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight drop-shadow-2xl">
            <span className="text-white">
              Data Protection
            </span>
            <br />
            <span className="text-white">
              Galaxy
            </span>
          </h1>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
          Your interactive guide to understanding the Digital Personal Data Protection Act, 2023 in a holistic view.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          {[
            { icon: Shield, title: "Data Protection", desc: "Know your rights and obligations", color: "from-blue-400 to-blue-600" },
            { icon: Globe, title: "Interactive Guide", desc: "Explore the galaxy of provisions", color: "from-purple-400 to-purple-600" },
            { icon: Rocket, title: "Start Exploring", desc: "Navigate through the universe", color: "from-pink-400 to-pink-600" },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/20`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-white text-lg drop-shadow-md">{item.title}</h3>
                <p className="text-sm text-gray-300 mt-1 drop-shadow-md">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="pt-6 h-26">
          <Link
            href="/galaxy"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg hover:scale-105 transition-all hover:shadow-2xl hover:shadow-blue-500/40 shadow-lg shadow-blue-500/20"
          >
            <Rocket className="w-5 h-5" />
            Start Exploring
          </Link>
        </div>
      </div>
    </main>
  );
}