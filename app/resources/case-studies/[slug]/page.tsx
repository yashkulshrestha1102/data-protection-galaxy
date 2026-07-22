"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Calendar, Users, Briefcase, CheckCircle, 
  Tag, Share2, Printer, ChevronRight
} from 'lucide-react';
import { caseStudiesData, getRelatedCaseStudies } from '@/data/case-studies';

export default function CaseStudyDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const caseStudy = caseStudiesData.find(c => c.slug === slug);
  const relatedCaseStudies = getRelatedCaseStudies(slug);

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

  if (!caseStudy) {
    return (
      <main className="min-h-screen text-white flex items-center justify-center px-4 pt-28 pb-16">
        <div className="text-center">
          <div className="text-6xl mb-4">📄</div>
          <h1 className="text-3xl font-bold mb-2">Case Study not found</h1>
          <p className="text-gray-400 mb-6">The case study you're looking for doesn't exist.</p>
          <Link href="/resources/case-studies" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300">
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen text-white px-4 pt-28 md:pt-32 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/home1.jpeg')" }}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
        {stars}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Link href="/resources/case-studies" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Case Studies
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
            <Briefcase className="w-3 h-3" />
            {caseStudy.industry}
          </span>
          <span className="text-xs text-gray-400 flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {caseStudy.date}
          </span>
          <span className="text-xs text-gray-400 flex items-center gap-1">
            <Users className="w-3 h-3" />
            {caseStudy.impact}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          {caseStudy.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {caseStudy.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/20 text-gray-300">
              <Tag className="w-3 h-3 inline mr-1" />
              {tag}
            </span>
          ))}
        </div>

        <div className="prose prose-invert prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: caseStudy.content }} />

        {/* Lessons Learned */}
        <div className="mt-12 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-purple-400" />
            Lessons Learned
          </h3>
          <ul className="space-y-2">
            {caseStudy.lessons.map((lesson, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                {lesson}
              </li>
            ))}
          </ul>
        </div>

        {/* Related Case Studies */}
        {relatedCaseStudies.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-white mb-4">Related Case Studies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedCaseStudies.map((related) => (
                <Link
                  key={related.id}
                  href={`/resources/case-studies/${related.slug}`}
                  className="group p-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all hover:scale-105"
                >
                  <span className="text-xs text-blue-400">{related.industry}</span>
                  <h4 className="text-sm font-medium text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                    {related.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mt-2">
                    <Calendar className="w-3 h-3" />
                    {related.date}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}