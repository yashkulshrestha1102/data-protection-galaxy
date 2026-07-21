"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Users, Target, Shield, Award, 
  CheckCircle, Briefcase, Database, Globe, 
  Rocket, Sparkles, ExternalLink, Quote
} from 'lucide-react';

export default function AboutPage() {
  const [stars, setStars] = useState<React.ReactNode[]>([]);

  // ===== GENERATE STARS ON CLIENT SIDE ONLY =====
  useEffect(() => {
    const starElements = [];
    for (let i = 0; i < 50; i++) {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const delay = Math.random() * 5;
      const opacity = Math.random() * 0.5 + 0.1;
      starElements.push(
        <div
          key={i}
          className="absolute w-0.5 h-0.5 bg-white rounded-full animate-twinkle"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            animationDelay: `${delay}s`,
            opacity: opacity,
          }}
        />
      );
    }
    setStars(starElements);
  }, []);

  const specialties = [
    { icon: Shield, label: 'Blockchain and Crypto' },
    { icon: Database, label: 'Manufacturing' },
    { icon: Globe, label: 'E-Commerce' },
    { icon: Shield, label: 'Healthtech' },
    { icon: Briefcase, label: 'IT & ITES' },
    { icon: Rocket, label: 'Fintech' },
    { icon: Database, label: 'SaaS' },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trusted Legal Solutions',
      description: 'We provide comprehensive legal services to protect your business interests.'
    },
    {
      icon: Target,
      title: 'Commitment to Excellence',
      description: 'We are dedicated to delivering high-quality, error-free services with expert opinions.'
    },
    {
      icon: Users,
      title: 'Client-Centric Approach',
      description: 'We spend quality time with customers, understand and fulfil their needs.'
    },
    {
      icon: Award,
      title: 'Industry-Specific Advisory',
      description: 'We provide specialized legal advisory tailored to your industry.'
    }
  ];

  const testimonials = [
    {
      quote: "Businezexcellence Team has patience, spend quality time with customers, understand and fulfil their needs for all kinds of registrations.",
      author: "WSP-3.0 MOOC Participant",
      role: "Client"
    },
    {
      quote: "I highly recommend Shilpi's services. She is attentive and patient and thinks outside of the box to resolve issues. As an early-stage company, we have an endless wave of questions. Shilpi has always replied promptly and succinctly.",
      author: "Early-Stage Company Founder",
      role: "Client"
    },
    {
      quote: "Shilpi is a thorough professional in legal & corporate affairs. She guided and worked on our partnership agreement with perfection.",
      author: "own2feet Team",
      role: "Client"
    },
    {
      quote: "Shilpi is a smart and highly professional lawyer in India. Her expertise in redlining contracts and attention to detail were invaluable to the success of my company registration.",
      author: "Company Registration Client",
      role: "Client"
    }
  ];

  return (
    <main className="min-h-screen text-white px-4 relative overflow-hidden pt-28 md:pt-32 pb-16">
      {/* ===== BACKGROUND IMAGE (HOME PAGE Jaisi) ===== */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/home1.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
        
        {stars}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ===== BACK BUTTON ===== */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* ===== HEADER ===== */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-sm font-semibold text-blue-400 mb-4">
            <Sparkles className="w-4 h-4" />
            About Legal Galaxy
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl mb-4">
            About Us
          </h1>
          <p className="text-gray-200 text-lg max-w-3xl mx-auto drop-shadow-lg">
            We provide trusted Business Legal Solutions for startups and growth-stage ventures.
            We make things easier for business that leads to higher productivity.
          </p>
        </motion.div>

        {/* ===== CEO SECTION ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md p-6 md:p-8 mb-12"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* CEO Photo */}
            <div className="flex-shrink-0">
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl shadow-purple-500/20">
                <Image
                  src="/images/profileoffounder.jpeg"
                  alt="Shilpi Kulshrestha - Founder, BusinezExcellence"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, 224px"
                  priority
                />
              </div>
            </div>

            {/* CEO Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-xs font-semibold text-blue-400 mb-3">
                <Shield className="w-3 h-3" />
                Founder & CEO
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Shilpi Kulshrestha
              </h2>
              <p className="text-gray-300 text-sm mb-4">
                BusinezExcellence | Corporate Law & Company Secretary Expert
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs text-gray-300">
                  ⚖️ Corporate Law
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs text-gray-300">
                  📋 Company Secretary
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs text-gray-300">
                  🏢 Business Legal Solutions
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== VISION & MISSION ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <Target className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Our Vision</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              BusinezExcellence provides a comprehensive legal service to its clients in order to help them solve their most critical problems to protect their business interests.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                <Rocket className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Our Mission</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering businesses with precision, quality and affordability for seamless legal operations.
            </p>
          </motion.div>
        </div>

        {/* ===== SPECIALTIES ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md p-6 md:p-8 mb-12"
        >
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-purple-400" />
            We Specialise In
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {specialties.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-105"
                >
                  <Icon className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-gray-300">{item.label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ===== KEY FEATURES ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md p-5 hover:bg-white/20 transition-all hover:scale-105"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-purple-400" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-gray-300 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* ===== WHY CHOOSE US ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md p-6 md:p-8 mb-12"
        >
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-400" />
            Why Choose BusinezExcellence
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-medium text-white">End-to-end Support</h4>
                <p className="text-xs text-gray-400">All legal and compliance requirements covered</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-medium text-white">Quick & Cost-effective</h4>
                <p className="text-xs text-gray-400">Efficient solutions at affordable prices</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-medium text-white">Error-free Services</h4>
                <p className="text-xs text-gray-400">Expert opinions with precision and quality</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-medium text-white">Industry-specific Advisory</h4>
                <p className="text-xs text-gray-400">Tailored legal solutions for your sector</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== TESTIMONIALS ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <Quote className="w-5 h-5 text-purple-400" />
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md p-5 hover:bg-white/20 transition-all"
              >
                <p className="text-sm text-gray-300 italic mb-3">"{testimonial.quote}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <Users className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-white">{testimonial.author}</p>
                    <p className="text-xs text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ===== CTA ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
            <span className="text-gray-200">Want to know more about our services?</span>
            <Link 
              href="/contact"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:scale-105 transition-all shadow-lg shadow-purple-500/30"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}