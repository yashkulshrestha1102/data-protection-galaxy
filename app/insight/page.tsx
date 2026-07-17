"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Calendar, User, Tag, ChevronLeft, 
  ChevronRight, BookOpen, Globe, Shield, Database,
  AlertCircle, Scale, FileText, Users, Building
} from 'lucide-react';

// ===== INSIGHTS DATA (DYNAMIC — CHANGE KAR SAKTE HO) =====
const insightsData = [
  {
    id: 1,
    category: 'DPDP Act',
    categoryIcon: Shield,
    title: 'DPDP Act 2023: Director Liability, Board Responsibilities and Data Privacy Compliance for Indian Companies',
    excerpt: 'Can directors be personally liable under India\'s DPDP Act 2023? Explore board responsibilities, CEO accountability, compliance requirements and data breach management for Indian companies.',
    author: 'Dr. Ananya Sharma',
    date: '22 Jul 2026',
    readTime: '8 min read',
    slug: 'dpdp-act-director-liability'
  },
  {
    id: 2,
    category: 'DPDP Act',
    categoryIcon: Shield,
    title: 'Data Breach Response & Notification Counsel under India\'s DPDP Act',
    excerpt: 'The DPDP Rule 7 breach-notification timeline, what to tell affected individuals and the Data Protection Board, the 72-hour detailed report and how organisations should prepare.',
    author: 'Adv. Rajesh Kumar',
    date: '20 Jul 2026',
    readTime: '6 min read',
    slug: 'data-breach-response-dpdp'
  },
  {
    id: 3,
    category: 'GDPR',
    categoryIcon: Globe,
    title: 'GDPR Compliance: A Practical Guide for Indian Businesses Operating in the EU',
    excerpt: 'Understanding GDPR requirements for Indian companies with EU operations. Key obligations, data transfer mechanisms, and compliance strategies for cross-border data flows.',
    author: 'Prof. Meera Patel',
    date: '18 Jul 2026',
    readTime: '10 min read',
    slug: 'gdpr-compliance-guide'
  },
  {
    id: 4,
    category: 'Cross-Border',
    categoryIcon: Globe,
    title: 'Cross-Border Data Transfer: Mechanisms and Compliance under DPDP Act',
    excerpt: 'Exploring cross-border data transfer mechanisms under India\'s DPDP Act. Understanding adequacy decisions, standard contractual clauses, and binding corporate rules.',
    author: 'Dr. Arun Nair',
    date: '16 Jul 2026',
    readTime: '7 min read',
    slug: 'cross-border-data-transfer'
  },
  {
    id: 5,
    category: 'Data Rights',
    categoryIcon: Users,
    title: 'Data Subject Rights: A Comprehensive Guide for Data Fiduciaries',
    excerpt: 'Understanding the rights of data principals under the DPDP Act. Right to access, correction, erasure, data portability, and grievance redressal mechanisms.',
    author: 'Dr. Ananya Sharma',
    date: '14 Jul 2026',
    readTime: '9 min read',
    slug: 'data-subject-rights-guide'
  },
  {
    id: 6,
    category: 'Compliance',
    categoryIcon: Building,
    title: 'DPDP Act Compliance: A Practical Guide for Businesses in India',
    excerpt: 'How businesses can build DPDP Act 2023 compliance — notice, consent, security, breach response and governance — ahead of the DPDP Rules implementation.',
    author: 'Adv. Priya Mehta',
    date: '12 Jul 2026',
    readTime: '12 min read',
    slug: 'dpdp-compliance-guide'
  },
  {
    id: 7,
    category: 'Sector-Specific',
    categoryIcon: Database,
    title: 'Sector-Specific Data Protection Rules: Fintech, Healthtech, and E-Commerce',
    excerpt: 'Understanding sector-specific data protection requirements for fintech, healthtech, and e-commerce companies under India\'s data protection regime.',
    author: 'Team Legal Galaxy',
    date: '10 Jul 2026',
    readTime: '6 min read',
    slug: 'sector-specific-data-protection'
  },
  {
    id: 8,
    category: 'AI & Automation',
    categoryIcon: Scale,
    title: 'AI and Data Protection: Navigating the Legal Landscape',
    excerpt: 'Exploring the intersection of artificial intelligence and data protection. Understanding algorithmic accountability, automated decision-making, and AI governance.',
    author: 'Dr. Vikram Singh',
    date: '8 Jul 2026',
    readTime: '8 min read',
    slug: 'ai-and-data-protection'
  },
  {
    id: 9,
    category: 'DPDP Act',
    categoryIcon: Shield,
    title: 'Significant Data Fiduciary (SDF) Readiness: DPIA and Audit under DPDP Act',
    excerpt: 'What makes an organisation a Significant Data Fiduciary? Enhanced obligations under Section 10 and Rule 13, India-based DPO, independent auditor, and annual compliance requirements.',
    author: 'Adv. Rajesh Kumar',
    date: '6 Jul 2026',
    readTime: '11 min read',
    slug: 'significant-data-fiduciary-readiness'
  },
  {
    id: 10,
    category: 'DPDP Act',
    categoryIcon: Shield,
    title: 'Data Protection Officer (DPO) Services in India under the DPDP Act',
    excerpt: 'When the DPDP Act requires a Data Protection Officer, what the role involves, and how organisations can prepare for DPO appointment and responsibilities.',
    author: 'Prof. Meera Patel',
    date: '4 Jul 2026',
    readTime: '5 min read',
    slug: 'dpo-services-india'
  },
  {
    id: 11,
    category: 'Data Rights',
    categoryIcon: Users,
    title: 'Click-Wrap Agreements and India\'s Data Privacy Law: Aligning Digital Consent',
    excerpt: 'The architecture of modern digital commerce rests on an unassuming yet powerful legal device: the click-wrap agreement. Understanding digital consent under the DPDP framework.',
    author: 'Aniket Ghosh',
    date: '2 Jul 2026',
    readTime: '7 min read',
    slug: 'click-wrap-agreements-consent'
  },
  {
    id: 12,
    category: 'International',
    categoryIcon: Globe,
    title: 'Global Data Protection Laws: A Comparative Analysis',
    excerpt: 'Comparing data protection frameworks across jurisdictions — GDPR, DPDP Act, CCPA/CPRA, LGPD, PIPL, and POPIA. Understanding the global regulatory landscape.',
    author: 'Dr. Arun Nair',
    date: '30 Jun 2026',
    readTime: '15 min read',
    slug: 'global-data-protection-laws'
  },
];

// ===== CATEGORIES (DYNAMIC — CHANGE KAR SAKTE HO) =====
const categories = [
  { id: 'all', label: 'All Insights', icon: BookOpen },
  { id: 'DPDP Act', label: 'DPDP Act', icon: Shield },
  { id: 'GDPR', label: 'GDPR', icon: Globe },
  { id: 'Cross-Border', label: 'Cross-Border', icon: Globe },
  { id: 'Data Rights', label: 'Data Rights', icon: Users },
  { id: 'Compliance', label: 'Compliance', icon: Building },
  { id: 'Sector-Specific', label: 'Sector-Specific', icon: Database },
  { id: 'AI & Automation', label: 'AI & Automation', icon: Scale },
  { id: 'International', label: 'International', icon: Globe },
];

// ===== INSIGHT CARD COMPONENT =====
const InsightCard = ({ insight }) => {
  const Icon = insight.categoryIcon || Shield;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 20px 60px rgba(139, 92, 246, 0.15)",
      }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer"
    >
      {/* Category Tag */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-xs font-semibold text-blue-400 mb-4">
        <Icon className="w-3.5 h-3.5" />
        {insight.category}
      </div>
      
      {/* Title */}
      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
        {insight.title}
      </h3>
      
      {/* Excerpt */}
      <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-3">
        {insight.excerpt}
      </p>
      
      {/* Author & Date */}
      <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-white/5">
        <span className="flex items-center gap-1.5">
          <User className="w-3.5 h-3.5" />
          {insight.author}
        </span>
        <span className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5" />
          {insight.date}
        </span>
      </div>
    </motion.div>
  );
};

// ===== PAGINATION COMPONENT =====
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  const maxVisible = 5;
  
  let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let endPage = Math.min(totalPages, startPage + maxVisible - 1);
  
  if (endPage - startPage + 1 < maxVisible) {
    startPage = Math.max(1, endPage - maxVisible + 1);
  }
  
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }
  
  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={`p-2 rounded-lg transition-all ${
          currentPage === 1 
            ? 'text-gray-600 cursor-not-allowed' 
            : 'text-gray-400 hover:text-white hover:bg-white/10'
        }`}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            currentPage === page
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/30'
              : 'text-gray-400 hover:text-white hover:bg-white/10'
          }`}
        >
          {page}
        </button>
      ))}
      
      {endPage < totalPages && (
        <>
          <span className="text-gray-600">...</span>
          <button
            onClick={() => onPageChange(totalPages)}
            className="px-4 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-all"
          >
            {totalPages}
          </button>
        </>
      )}
      
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-lg transition-all ${
          currentPage === totalPages 
            ? 'text-gray-600 cursor-not-allowed' 
            : 'text-gray-400 hover:text-white hover:bg-white/10'
        }`}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

// ===== MAIN PAGE =====
export default function InsightPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  // Filter insights by category
  const filteredInsights = selectedCategory === 'all'
    ? insightsData
    : insightsData.filter(item => item.category === selectedCategory);
  
  // Pagination
  const totalPages = Math.ceil(filteredInsights.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentInsights = filteredInsights.slice(startIndex, startIndex + itemsPerPage);
  
  // Reset page when category changes
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };
  
  return (
    <main className="min-h-screen text-white px-4 relative overflow-hidden pt-28 md:pt-32 pb-16">
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black/90" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>
      
      {/* ===== CONTENT ===== */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-start gap-4 mb-2">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Insights
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            In-depth analysis and practical guidance on India's Digital Personal Data Protection Act, 
            GDPR, cross-border transfers and global privacy law — from the data-privacy team at Legal Galaxy.
          </p>
        </motion.div>
        
        {/* ===== CATEGORY FILTERS ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = selectedCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/30'
                    : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </button>
            );
          })}
        </motion.div>
        
        {/* ===== RESULTS COUNT ===== */}
        <div className="text-sm text-gray-400 mb-6">
          Showing {currentInsights.length} of {filteredInsights.length} insights
        </div>
        
        {/* ===== INSIGHTS GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentInsights.map((insight) => (
            <InsightCard key={insight.id} insight={insight} />
          ))}
        </div>
        
        {/* ===== NO RESULTS ===== */}
        {currentInsights.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-2xl font-semibold text-gray-300">No insights found</h3>
            <p className="text-gray-500 mt-2">Try selecting a different category</p>
          </div>
        )}
        
        {/* ===== PAGINATION ===== */}
        {totalPages > 1 && (
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
        
        {/* ===== CTA / MESSAGE US ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 backdrop-blur-sm">
            <span className="text-gray-300">Have questions about data protection?</span>
            <Link 
              href="/contact"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:scale-105 transition-all shadow-lg shadow-purple-500/30"
            >
              Message Us
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}