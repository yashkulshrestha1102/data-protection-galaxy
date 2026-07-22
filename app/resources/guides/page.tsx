"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, BookOpen, Clock, ChevronRight, 
  FileText, Sparkles, Download 
} from 'lucide-react';
import { guidesData } from '@/data/guides';

export default function GuidesPage() {
  const [stars, setStars] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const starElements = [];
    for (let i = 0; i < 50; i++) {
      starElements.push(
        <div
          key={i}
          className="absolute w-0.5 h-0.5 bg-white rounded-full animate-twinkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.5 + 0.1,
          }}
        />
      );
    }
    setStars(starElements);
  }, []);

  return (
    <main className="min-h-screen text-white px-4 pt-28 md:pt-32 pb-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/home1.jpeg')" }}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
        {stars}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Back Button */}
        <Link href="/resources" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Resources
        </Link>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-sm font-semibold text-blue-400 mb-4">
            <BookOpen className="w-4 h-4" />
            Privacy Guides
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl mb-4">
            Privacy Guides
          </h1>
          <p className="text-gray-200 text-lg max-w-3xl drop-shadow-lg">
            {guidesData.length} in-depth guides to help you navigate data protection regulations worldwide.
          </p>
          <p className="text-gray-300 text-sm mt-2 max-w-3xl">
            Our comprehensive guides cover the key data protection frameworks that affect Indian and multinational businesses. Each guide is written by our privacy practice team and regularly updated to reflect the latest regulatory developments.
          </p>
        </motion.div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guidesData.map((guide, index) => {
            const Icon = guide.categoryIcon;
            return (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6 hover:bg-white/20 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
                onClick={() => window.location.href = `/resources/guides/${guide.slug}`}
              >
                {/* Category Tag */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${guide.categoryColor} text-white`}>
                    <Icon className="w-3.5 h-3.5" />
                    {guide.category}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {guide.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                  {guide.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-gray-300 leading-relaxed mb-4 line-clamp-3">
                  {guide.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-xs text-gray-400">Last updated: {guide.lastUpdated}</span>
                  <span className="text-blue-400 group-hover:text-purple-400 transition-colors text-sm flex items-center gap-1">
                    Read Guide
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}