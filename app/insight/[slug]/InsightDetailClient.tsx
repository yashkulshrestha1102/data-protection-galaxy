"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Calendar, User, Clock,
  ArrowRight, BookOpen, Globe, Shield, Database,
  Scale, Users, Building,
} from 'lucide-react';

// ===== ICON MAP =====
const iconMap: Record<string, any> = {
  Shield,
  Globe,
  Users,
  Building,
  Database,
  Scale,
  BookOpen,
};

interface ClientProps {
  insight: any;
  relatedInsights: any[];
}

export function InsightDetailClient({ insight, relatedInsights }: ClientProps) {
  const IconComponent = iconMap[insight.categoryIcon] || Shield;

  return (
    <main className="min-h-screen text-white px-4 relative overflow-hidden pt-28 md:pt-32 pb-16">
      {/* ===== BACKGROUND IMAGE ===== */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/home1.jpeg')" }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>

        {/* Nebula Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Link
          href="/insight"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Insights
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm font-semibold text-blue-400 mb-6"
        >
          <IconComponent className="w-4 h-4" />
          {insight.category}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 drop-shadow-2xl"
        >
          {insight.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center gap-6 text-sm text-gray-200 mb-8 pb-8 border-b border-white/10"
        >
          <span className="flex items-center gap-2">
            <User className="w-4 h-4" />
            {insight.author}
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {insight.date}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {insight.readTime}
          </span>
        </motion.div>

        {/* ===== ARTICLE CONTENT WITH PROPER FORMATTING ===== */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="
            text-gray-300
            [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-bold [&_h2]:text-white
            [&_h2]:mt-12 [&_h2]:mb-5 [&_h2]:pb-3
            [&_h2]:border-b [&_h2]:border-white/15
            [&_h2]:tracking-tight

            [&_h3]:text-xl [&_h3]:md:text-2xl [&_h3]:font-semibold [&_h3]:text-blue-300
            [&_h3]:mt-8 [&_h3]:mb-4 [&_h3]:tracking-tight

            [&_p]:text-[15px] [&_p]:md:text-base [&_p]:leading-8 [&_p]:text-gray-300
            [&_p]:my-5

            [&_strong]:text-white [&_strong]:font-semibold

            [&_em]:text-gray-400 [&_em]:italic

            [&_ul]:my-5 [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:list-disc
            [&_ul]:marker:text-purple-400

            [&_ol]:my-5 [&_ol]:pl-6 [&_ol]:space-y-2 [&_ol]:list-decimal
            [&_ol]:marker:text-purple-400 [&_ol]:marker:font-semibold

            [&_li]:text-[15px] [&_li]:md:text-base [&_li]:leading-7 [&_li]:text-gray-300
            [&_li]:pl-1

            [&_blockquote]:border-l-4 [&_blockquote]:border-purple-500/60
            [&_blockquote]:bg-white/5 [&_blockquote]:px-5 [&_blockquote]:py-3
            [&_blockquote]:my-6 [&_blockquote]:rounded-r-lg
            [&_blockquote]:italic [&_blockquote]:text-gray-300

            [&_a]:text-blue-400 [&_a]:underline [&_a]:underline-offset-4
            [&_a]:hover:text-blue-300 [&_a]:transition-colors

            [&_hr]:my-10 [&_hr]:border-white/10

            [&_code]:bg-white/10 [&_code]:px-1.5 [&_code]:py-0.5
            [&_code]:rounded [&_code]:text-sm [&_code]:text-purple-300
            [&_code]:font-mono
          "
          dangerouslySetInnerHTML={{ __html: insight.content }}
        />

        <div className="my-12 border-t border-white/10" />

        {relatedInsights.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-purple-400" />
              Continue Reading — Latest Insights
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedInsights.map((related) => {
                const RelatedIcon = iconMap[related.categoryIcon] || Shield;
                return (
                  <Link
                    key={related.id}
                    href={`/insight/${related.slug}`}
                    className="group p-4 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all hover:scale-105"
                  >
                    <div className="flex items-center gap-2 text-xs text-blue-400 mb-2">
                      <RelatedIcon className="w-3 h-3" />
                      {related.category}
                    </div>
                    <h4 className="text-sm font-medium text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all line-clamp-2">
                      {related.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-gray-300 mt-2">
                      <Calendar className="w-3 h-3" />
                      {related.date}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            Back to Top
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </main>
  );
}