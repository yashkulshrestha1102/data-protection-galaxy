"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Users,
  Briefcase,
  CheckCircle,
  Tag,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import { CaseStudy } from "@/data/case-studies";

interface CaseStudyClientProps {
  caseStudy: CaseStudy;
  relatedCaseStudies: CaseStudy[];
}

export default function CaseStudyClient({
  caseStudy,
  relatedCaseStudies,
}: CaseStudyClientProps) {
  return (
    <main className="min-h-screen text-white px-4 pt-28 md:pt-32 pb-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/home1.jpeg')" }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Link
          href="/resources/case-studies"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Case Studies
        </Link>

        {/* Meta Tags */}
        <div className="flex items-center gap-3 mb-4 flex-wrap">
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

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          {caseStudy.title}
        </h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {caseStudy.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/20 text-gray-300"
            >
              <Tag className="w-3 h-3 inline mr-1" />
              {tag}
            </span>
          ))}
        </div>

        {/* Content with proper formatting */}
        <article
          className="
            text-gray-300
            [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-bold [&_h2]:text-white
            [&_h2]:mt-12 [&_h2]:mb-5 [&_h2]:pb-3 [&_h2]:border-b [&_h2]:border-white/15
            [&_h2]:tracking-tight
            [&_h3]:text-xl [&_h3]:md:text-2xl [&_h3]:font-semibold [&_h3]:text-blue-300
            [&_h3]:mt-8 [&_h3]:mb-4
            [&_p]:text-[15px] [&_p]:md:text-base [&_p]:leading-8 [&_p]:my-5
            [&_strong]:text-white [&_strong]:font-semibold
            [&_ul]:my-5 [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:marker:text-purple-400
            [&_li]:text-[15px] [&_li]:leading-7
            [&_a]:text-blue-400 [&_a]:underline [&_a]:hover:text-blue-300
          "
          dangerouslySetInnerHTML={{ __html: caseStudy.content }}
        />

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
            <h3 className="text-xl font-semibold text-white mb-4">
              Related Case Studies
            </h3>
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

        {/* Back to Top */}
        <div className="text-center mt-12">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            Back to Top
            <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </main>
  );
}