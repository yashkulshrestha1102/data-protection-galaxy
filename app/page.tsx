"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { 
  Shield, Sparkles, Target, BookOpen, FileText, 
  Map, Globe, Award, Users, Rocket, Brain, 
  Scale, Lock, Zap, Star, Compass, Eye
} from "lucide-react";

// ===== SHIMMER TEXT COMPONENT =====
const ShimmerText = ({ children }: { children: string }) => (
  <span className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent">
    {children}
  </span>
);

// ===== GLOWING CARD =====
const GlowCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative group ${className}`}>
    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse" />
    <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-500 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
      {children}
    </div>
  </div>
);

// ===== FLOATING ORB =====
const FloatingOrb = ({ className = "" }: { className?: string }) => (
  <div className={`absolute rounded-full blur-3xl animate-float ${className}`} />
);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouseX(x);
      setMouseY(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Stars generation
  const stars = Array.from({ length: 200 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 5 + 3,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.8 + 0.2,
  }));

  // Nebula clouds
  const nebulaColors = [
    "from-purple-500/20 via-fuchsia-500/10 to-transparent",
    "from-blue-500/20 via-cyan-500/10 to-transparent",
    "from-pink-500/20 via-rose-500/10 to-transparent",
    "from-emerald-500/20 via-teal-500/10 to-transparent",
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-x-hidden bg-[#0a0a0f]">
      
      {/* ===== 3D NEBULA BACKGROUND ===== */}
      <div className="fixed inset-0 -z-10">
        {/* Deep space gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d1a] to-[#0a0a0f]" />
        
        {/* Nebula clouds */}
        {nebulaColors.map((color, i) => (
          <div
            key={i}
            className={`absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r ${color} blur-3xl opacity-50 animate-float`}
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
              animationDelay: `${i * 2}s`,
              transform: `translate(${mouseX * 20 * (i + 1)}px, ${mouseY * 20 * (i + 1)}px)`,
              transition: "transform 2s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          />
        ))}

        {/* Stars */}
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              top: `${star.y}%`,
              left: `${star.x}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
              transform: `translate(${mouseX * star.size}px, ${mouseY * star.size}px)`,
              transition: "transform 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
              boxShadow: `0 0 ${star.size * 2}px rgba(255,255,255,${star.opacity * 0.3})`,
            }}
          />
        ))}

        {/* Aurora effect */}
        <div 
          className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-purple-500/5 via-transparent to-transparent"
          style={{
            transform: `translateY(${-scrollY * 0.1}px)`,
            opacity: 0.5,
          }}
        />
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        
        {/* ===== SECTION 1: HERO ===== */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="min-h-screen flex flex-col items-center justify-center text-center pt-20"
          style={{ opacity, scale }}
        >
          {/* Floating badge */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-sm text-purple-300 mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 animate-pulse" />
            Privacy & AI Governance
          </motion.div>

          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1, type: "spring" }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
          >
            Are you ready for the <br />
            <ShimmerText>Age of AI?</ShimmerText>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto mt-6"
          >
            Assess your organisation's privacy and AI governance readiness.
            Get your score and actionable insights.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            <Link
              href="/scorecard"
              className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-[length:200%_auto] animate-shimmer text-white font-semibold text-lg hover:scale-105 transition-all flex items-center gap-2 shadow-xl shadow-purple-500/30 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Target className="w-5 h-5" />
                TAKE THE TEST
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_auto] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <Link
              href="/galaxy"
              className="px-8 py-4 rounded-2xl bg-white/5 border border-white/20 text-white font-semibold text-lg hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-sm group"
            >
              <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              EXPLORE THE GALAXY
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-xs text-white/40 tracking-widest uppercase">Scroll to explore</span>
            <div className="w-0.5 h-10 bg-gradient-to-b from-purple-500/50 to-transparent animate-bounce" />
          </motion.div>
        </motion.section>

        {/* ===== SECTION 2: SCORE PREVIEW ===== */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 my-20"
        >
          {[
            { 
              icon: Shield, 
              label: "Privacy Score", 
              value: "—", 
              color: "from-blue-500 to-cyan-500",
              glow: "shadow-blue-500/30",
              delay: 0
            },
            { 
              icon: Brain, 
              label: "AI Governance Score", 
              value: "—", 
              color: "from-purple-500 to-pink-500",
              glow: "shadow-purple-500/30",
              delay: 0.2
            },
            { 
              icon: Award, 
              label: "Digital Trust Score", 
              value: "—", 
              color: "from-amber-500 to-orange-500",
              glow: "shadow-amber-500/30",
              delay: 0.4
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0.8, opacity: 0, rotateX: 20 }}
              whileInView={{ scale: 1, opacity: 1, rotateX: 0 }}
              transition={{ delay: item.delay, duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
              className="group"
              style={{
                transform: `perspective(800px) rotateY(${mouseX * 5}deg) rotateX(${-mouseY * 5}deg)`,
                transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              <GlowCard>
                <div className="relative z-10 text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4 shadow-xl ${item.glow}`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-sm text-gray-400 mb-1">{item.label}</h3>
                  <p className="text-4xl font-bold text-white tracking-tight">{item.value}</p>
                  <p className="text-xs text-white/30 mt-3">Take the test to get your score</p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.section>

        {/* ===== SECTION 3: GALAXY EXPLORER ===== */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Globe className="w-8 h-8 text-purple-400" />
            Explore the Galaxy
            <span className="text-sm text-white/30 font-normal">— Four Dimensions</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              { icon: Shield, label: "Privacy", href: "/galaxy", color: "from-blue-500 to-cyan-500", desc: "Data rights & protection" },
              { icon: Brain, label: "AI Governance", href: "/galaxy", color: "from-purple-500 to-pink-500", desc: "Responsible AI" },
              { icon: Scale, label: "Regulation", href: "/galaxy", color: "from-amber-500 to-orange-500", desc: "Global compliance" },
              { icon: Lock, label: "Digital Trust", href: "/galaxy", color: "from-emerald-500 to-teal-500", desc: "Risk & security" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ y: 30, opacity: 0, rotateX: 10 }}
                  whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.6, type: "spring" }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  style={{
                    transform: `perspective(800px) rotateY(${mouseX * 8}deg)`,
                    transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                >
                  <Link href={item.href} className="block h-full">
                    <GlowCard>
                      <div className="relative z-10 text-center">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-white">{item.label}</h3>
                        <p className="text-xs text-white/40 mt-1">{item.desc}</p>
                        <div className="mt-3 text-purple-400 text-sm font-medium flex items-center justify-center gap-1">
                          Explore <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </GlowCard>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ===== SECTION 4: RESOURCES ===== */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-purple-400" />
            Resources
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Globe, label: "Galaxy", href: "/galaxy", color: "from-purple-500 to-pink-500" },
              { icon: FileText, label: "Insights", href: "/insight", color: "from-blue-500 to-cyan-500" },
              { icon: BookOpen, label: "Guides", href: "/resources/guides", color: "from-emerald-500 to-teal-500" },
              { icon: Map, label: "Map", href: "/map", color: "from-amber-500 to-orange-500" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link href={item.href} className="block h-full">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:bg-white/10 transition-all h-full">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-2`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm text-white font-medium">{item.label}</span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ===== SECTION 5: TOOLS & CERTIFICATION ===== */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 my-20"
        >
          {[
            { 
              icon: Zap, 
              title: "Generator", 
              desc: "Generate privacy and AI governance documents instantly.", 
              href: "/generator",
              color: "from-purple-500 to-pink-500",
              glow: "shadow-purple-500/30",
              cta: "Explore Generator"
            },
            { 
              icon: Award, 
              title: "Certification", 
              desc: "Build expertise. Get certified in Privacy & AI Governance.", 
              href: "/certificate-course",
              color: "from-amber-500 to-orange-500",
              glow: "shadow-amber-500/30",
              cta: "Explore Certification"
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ x: idx === 0 ? -30 : 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                style={{
                  transform: `perspective(800px) rotateY(${mouseX * 5 * (idx === 0 ? -1 : 1)}deg)`,
                  transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                <GlowCard>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg ${item.glow}`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">{item.desc}</p>
                    <Link href={item.href} className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium group">
                      {item.cta}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </motion.section>

        {/* ===== SECTION 6: ABOUT ===== */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="my-20"
        >
          <GlowCard>
            <div className="relative z-10 text-center py-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4 shadow-xl shadow-purple-500/30">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Built by Legal & Governance Professionals</h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-sm">
                Legal Galaxy is a Privacy & AI Governance platform designed to help businesses 
                understand, assess, and implement responsible data and AI practices.
              </p>
              <Link href="/about" className="inline-block mt-4 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium group">
                Learn More <ArrowRight className="inline w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </GlowCard>
        </motion.section>

        {/* ===== SECTION 7: FINAL CTA ===== */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center my-20 py-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-xs font-medium text-purple-400 mb-6">
            <Rocket className="w-4 h-4 animate-pulse" />
            Get Started
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don't just use AI. <span className="text-purple-400">Govern it.</span>
          </h2>
          <Link
            href="/scorecard"
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-[length:200%_auto] animate-shimmer text-white font-semibold text-lg hover:scale-105 transition-all shadow-2xl shadow-purple-500/40 relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Target className="w-5 h-5" />
              Take the Privacy & AI Governance Test
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </span>
          </Link>
        </motion.section>

      </div>

      {/* ===== CUSTOM ANIMATIONS ===== */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle var(--duration, 3s) ease-in-out infinite;
        }
        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); opacity: 0.3; }
          50% { transform: translateY(10px); opacity: 1; }
        }
        /* Smooth scroll behavior */
        .snap-y {
          scroll-snap-type: y mandatory;
        }
        .snap-start {
          scroll-snap-align: start;
        }
      `}</style>
    </div>
  );
}