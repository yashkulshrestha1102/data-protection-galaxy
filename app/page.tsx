"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Shield, Sparkles, Target, BookOpen, FileText, 
  Map, Globe, Award, Users, Rocket, Brain, 
  Scale, Lock, Zap, ArrowRight
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [stars, setStars] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const starElements = [];
    for (let i = 0; i < 80; i++) {
      starElements.push(
        <div
          key={i}
          className="absolute bg-white rounded-full animate-twinkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 4 + 2}s`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.6 + 0.1,
            width: `${Math.random() * 2.5 + 1}px`,
            height: `${Math.random() * 2.5 + 1}px`,
          }}
        />
      );
    }
    setStars(starElements);
  }, []);

  return (
    <main className="min-h-screen text-white flex flex-col items-center px-4 pt-28 md:pt-32 pb-16 relative overflow-hidden">
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/home1.jpeg')" }}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>
      <div className="absolute inset-0 -z-10">{stars}</div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* ===== SECTION 1: HERO ===== */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-xs font-medium text-purple-400 mb-4">
            <Sparkles className="w-4 h-4" />
            Privacy & AI Governance
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
            How ready is your organisation for the new world of<br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Privacy & AI Governance?
            </span>
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto drop-shadow-lg">
          Take our quick assessment and discover your organisation's DPDPA readiness.          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/scorecard"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition-all flex items-center gap-2 shadow-lg shadow-purple-500/30"
            >
              <Target className="w-5 h-5" />
              TAKE THE TEST →
            </Link>
            <Link
              href="/galaxy"
              className="px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all flex items-center gap-2 backdrop-blur-sm"
            >
              <Globe className="w-5 h-5" />
              EXPLORE THE GALAXY →
            </Link>
          </div>
        </motion.div>

        {/* ===== SECTION 2: SCORE PREVIEW ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {[
            { icon: Shield, label: "Privacy Score", value: "—", color: "from-blue-500 to-blue-600" },
            { icon: Brain, label: "AI Governance Score", value: "—", color: "from-purple-500 to-purple-600" },
            { icon: Award, label: "Digital Trust Score", value: "—", color: "from-amber-500 to-amber-600" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center backdrop-blur-sm">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-3`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-sm text-gray-300 mb-1">{item.label}</h3>
              <p className="text-3xl font-bold text-white">{item.value}</p>
              <p className="text-xs text-gray-500 mt-2">Take the test to get your score</p>
            </div>
          ))}
        </motion.div>

        {/* ===== SECTION 3: GALAXY EXPLORER ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Globe className="w-6 h-6 text-purple-400" />
            Explore the Galaxy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { icon: Shield, label: "Privacy", href: "/galaxy?category=privacy", color: "from-blue-500 to-blue-600" },
              { icon: Brain, label: "AI Governance", href: "/galaxy?category=ai", color: "from-purple-500 to-purple-600" },
              { icon: Lock, label: "Digital Trust", href: "/galaxy?category=trust", color: "from-emerald-500 to-emerald-600" },
            ].map((item, idx) => (
              <Link key={idx} href={item.href} className="group">
                <div className="bg-white/10 border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-all hover:scale-105">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-medium">{item.label}</h3>
                  <p className="text-xs text-gray-400 mt-1">Explore →</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* ===== SECTION 4: RESOURCES ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-purple-400" />
            Resources
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Globe, label: "Galaxy", href: "/galaxy" },
              { icon: FileText, label: "Insights", href: "/insight" },
              { icon: BookOpen, label: "Guides", href: "/resources/guides" },
              { icon: Map, label: "Map", href: "/map" },
            ].map((item, idx) => (
              <Link key={idx} href={item.href} className="bg-white/10 border border-white/20 rounded-xl p-4 text-center hover:bg-white/15 transition-all hover:scale-105">
                <item.icon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <span className="text-sm text-white">{item.label}</span>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* ===== SECTION 5: TOOLS + CERTIFICATION ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {/* Generator */}
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-purple-400" />
              <h3 className="text-lg font-semibold text-white">Generator</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">Generate privacy and AI governance documents instantly.</p>
            <Link href="/generator" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium">
              Explore Generator →
            </Link>
          </div>

          {/* Certification */}
          <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg font-semibold text-white">Certification</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">Build expertise. Get certified in Privacy & AI Governance.</p>
            <Link href="/certificate-course" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors text-sm font-medium">
              Explore Certification →
            </Link>
          </div>
        </motion.div>

        {/* ===== SECTION 6: ABOUT ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white/10 border border-white/20 rounded-2xl p-8 text-center mb-16"
        >
          <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">Built by Legal & Governance Professionals</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Legal Galaxy is a Privacy & AI Governance platform designed to help businesses 
            understand, assess, and implement responsible data and AI practices.
          </p>
          <Link href="/about" className="inline-block mt-4 text-purple-400 hover:text-purple-300 transition-colors text-sm">
            Learn More →
          </Link>
        </motion.div>

        {/* ===== SECTION 7: FINAL CTA ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-xs font-medium text-purple-400 mb-4">
            <Rocket className="w-4 h-4" />
            Get Started
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Don't just use AI. <span className="text-purple-400">Govern it.</span>
          </h2>
          <Link
            href="/scorecard"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition-all inline-flex items-center gap-2 shadow-lg shadow-purple-500/30"
          >
            <Target className="w-5 h-5" />
            Take the Privacy & AI Governance Test →
          </Link>
        </motion.div>
      </div>
    </main>
  );
}