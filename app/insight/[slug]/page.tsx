"use client";

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Calendar, User, Clock, 
  ArrowRight, BookOpen, Globe, Shield, Database,
  Scale, Users, Building
} from 'lucide-react';
import { getInsightBySlug, getRelatedInsights } from '@/data/insights';

// ===== ICON MAP =====
const iconMap: Record<string, any> = {
  Shield: Shield,
  Globe: Globe,
  Users: Users,
  Building: Building,
  Database: Database,
  Scale: Scale,
  BookOpen: BookOpen,
};

export default function InsightDetailPage() {
  const params = useParams();
  const slug = params?.slug as string || '';
  
  const insight = getInsightBySlug(slug);
  const relatedInsights = getRelatedInsights(slug);
  
  if (!insight) {
    return (
      <main className="min-h-screen text-white flex items-center justify-center px-4 pt-28 pb-16">
        <div className="text-center max-w-2xl">
          <div className="text-6xl mb-4">📄</div>
          <h1 className="text-3xl font-bold mb-2">Insight not found</h1>
          <p className="text-gray-400 mb-4">The insight you're looking for doesn't exist.</p>
          <Link href="/insight" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300">
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>
        </div>
      </main>
    );
  }

  const IconComponent = iconMap[insight.categoryIcon] || Shield;

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
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>
        
        {/* Nebula Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <Link href="/insight" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group">
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
          <span className="flex items-center gap-2"><User className="w-4 h-4" />{insight.author}</span>
          <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{insight.date}</span>
          <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{insight.readTime}</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-invert prose-lg max-w-none"
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