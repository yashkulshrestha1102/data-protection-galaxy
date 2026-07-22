"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, BookOpen, Clock, Calendar, Download, 
  CheckCircle, ChevronRight, FileText, Printer,
  Share2, ExternalLink, Sparkles
} from 'lucide-react';
import { guidesData } from '@/data/guides';

export default function GuideDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const guide = guidesData.find(g => g.slug === slug);

  const [stars, setStars] = useState<React.ReactNode[]>([]);
  const [activeSection, setActiveSection] = useState<string>('');

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

  if (!guide) {
    return (
      <main className="min-h-screen text-white flex items-center justify-center px-4 pt-28 pb-16">
        <div className="text-center">
          <div className="text-6xl mb-4">📄</div>
          <h1 className="text-3xl font-bold mb-2">Guide not found</h1>
          <p className="text-gray-400 mb-6">The guide you're looking for doesn't exist.</p>
          <Link href="/resources/guides" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300">
            <ArrowLeft className="w-4 h-4" />
            Back to Guides
          </Link>
        </div>
      </main>
    );
  }

  const Icon = guide.categoryIcon;

  const handleDownloadPDF = () => {
    // Implement PDF download
    alert('PDF download will be implemented with html2canvas + jsPDF');
  };

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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
          <span>/</span>
          <Link href="/resources/guides" className="hover:text-white transition-colors">Guides</Link>
          <span>/</span>
          <span className="text-white truncate">{guide.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${guide.categoryColor} text-white`}>
                  <Icon className="w-3.5 h-3.5" />
                  {guide.category}
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {guide.readTime}
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  Last updated: {guide.lastUpdated}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                {guide.title}
              </h1>

              <div className="flex flex-wrap gap-3 mb-8">
                <button
                  onClick={handleDownloadPDF}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium hover:scale-105 transition-all shadow-lg shadow-purple-500/30"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-all"
                >
                  <Printer className="w-4 h-4" />
                  Print
                </button>
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-all">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </motion.div>

            {/* Key Takeaways */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-6 mb-8"
            >
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                Key Takeaways
              </h3>
              <ul className="space-y-2">
                {guide.keyTakeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: guide.content }}
            />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              {/* Table of Contents */}
              <div className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6">
                <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-purple-400" />
                  Table of Contents
                </h4>
                <ul className="space-y-2">
                  {guide.tableOfContents.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-sm text-gray-400 hover:text-white hover:pl-2 transition-all duration-200 block"
                        onClick={(e) => {
                          e.preventDefault();
                          const el = document.getElementById(item.id);
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Guides */}
              <div className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6">
                <h4 className="text-sm font-semibold text-white mb-4">Featured Guides</h4>
                <ul className="space-y-3">
                  {guidesData.filter(g => g.id !== guide.id).slice(0, 3).map((related) => (
                    <li key={related.id}>
                      <Link
                        href={`/resources/guides/${related.slug}`}
                        className="text-sm text-gray-300 hover:text-white hover:pl-2 transition-all duration-200 block"
                      >
                        {related.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl p-6">
                <h4 className="text-sm font-semibold text-white mb-2">Need Help?</h4>
                <p className="text-xs text-gray-400 mb-4">Talk to our data privacy team for expert guidance.</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm text-white bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-xl hover:scale-105 transition-all shadow-lg shadow-purple-500/30"
                >
                  Contact Us
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}