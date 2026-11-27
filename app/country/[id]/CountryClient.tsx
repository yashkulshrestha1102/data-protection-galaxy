"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft, Building, CheckCircle, AlertCircle, Shield, Users,
  Globe, Database, AlertTriangle, FileText, Scale, XCircle, ExternalLink,
} from "lucide-react";
import { Country } from "@/data/countries";
import { CountryFAQ } from "@/data/country-faqs";

const iconMap: Record<string, any> = {
  Building, CheckCircle, AlertCircle, Shield, Users, Globe,
  Database, AlertTriangle, FileText, Scale, XCircle,
};

interface CountryClientProps {
  country: Country;
  faqs?: CountryFAQ[];
}

export default function CountryClient({ country, faqs = [] }: CountryClientProps) {
  const totalTopics = country.topics.length;
  const addressedTopics = country.topics.filter((t) => t.status === "Addressed").length;
  const partialTopics = country.topics.filter((t) => t.status === "Partial").length;
  const noneTopics = country.topics.filter((t) => t.status === "None").length;
  const compliancePercentage = Math.round((addressedTopics / totalTopics) * 100);

  const levelColors: Record<string, string> = {
    Comprehensive: "text-green-400 bg-green-500/10 border-green-500/30",
    Substantial: "text-blue-400 bg-blue-500/10 border-blue-500/30",
    Moderate: "text-yellow-400 bg-yellow-500/10 border-yellow-500/30",
    Limited: "text-orange-400 bg-orange-500/10 border-orange-500/30",
    None: "text-red-400 bg-red-500/10 border-red-500/30",
  };

  const levelEmojis: Record<string, string> = {
    Comprehensive: "🟢", Substantial: "🔵", Moderate: "🟡", Limited: "🟠", None: "🔴",
  };

  return (
    <main className="min-h-screen text-white px-4 pb-12 relative overflow-hidden pt-24 md:pt-28">
      
      
                 {/* ===== PDF PROFESSIONAL LETTERHEAD (Only visible in Print) ===== */}
      <div className="hidden print:block text-black mb-8 border-b-2 border-gray-300 pb-4">
        <div className="flex items-center justify-between">
          
          {/* Left Side: Logo & Name */}
          <div className="flex items-center gap-4">
            <img src="/images/logo.png" alt="Legal Galaxy Logo" className="w-14 h-14 object-contain rounded-full" />
            <div>
              <h1 className="text-2xl font-bold text-black m-0">Legal Galaxy</h1>
              <p className="text-sm text-gray-600 m-0">Privacy & AI Governance</p>
            </div>
          </div>

          {/* Right Side: Icons & Contact Info */}
          <div className="flex flex-col items-end justify-center gap-2">
            
            {/* Top Row: Social Icons */}
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#E1306C" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </div>

            {/* Bottom Row: Text Info */}
            <div className="flex items-center gap-4 text-xs text-black font-medium">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="#0ea5e9" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                +91 8800138008
              </span>
              <span className="text-gray-400">|</span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="#0ea5e9" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                shilpi.kulshrestha@businezexcellence.com
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* Background Gradients (Print me hide) */}
      <div className="absolute inset-0 -z-10 bg-[#0a0a0a] print:hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Top Navigation (Print me hide) */}
        <div className="flex items-center justify-between mb-6 print:hidden">
          <Link href="/map" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group text-sm">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Map
          </Link>
          <button onClick={() => window.print()} className="text-sm font-medium bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
            <ExternalLink className="w-4 h-4" /> Print Report
          </button>
        </div>

        {/* Country Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-6 backdrop-blur-md relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -z-10 print:hidden" />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="text-6xl md:text-7xl leading-none drop-shadow-lg">{country.flag}</div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">{country.name}</h1>
                <p className="text-lg text-cyan-300 font-medium">{country.lawName}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs text-gray-300">{country.region}</span>
                  <span className={`px-3 py-1 rounded-full border text-xs font-medium ${levelColors[country.level]}`}>
                    {levelEmojis[country.level]} {country.level}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Compliance Score Badge */}
            <div className="flex items-center gap-4 bg-black/40 p-4 rounded-xl border border-white/10 shrink-0">
              <div>
                <div className="text-xs text-gray-400 mb-1">Compliance Score</div>
                <div className="text-3xl font-bold text-white">{compliancePercentage}%</div>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div className="text-xs space-y-1.5">
                <div className="flex items-center gap-2 text-green-400"><CheckCircle className="w-3 h-3"/> {addressedTopics} Addressed</div>
                <div className="flex items-center gap-2 text-yellow-400"><AlertCircle className="w-3 h-3"/> {partialTopics} Partial</div>
                <div className="flex items-center gap-2 text-red-400"><XCircle className="w-3 h-3"/> {noneTopics} None</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Authority & Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="md:col-span-1 bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2"><Building className="w-4 h-4"/> Authority</h3>
            <p className="text-white font-medium leading-relaxed">{country.authority}</p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2"><FileText className="w-4 h-4"/> Overview</h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">{country.overview}</p>
          </motion.div>
        </div>

        {/* Topics Grid */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-2 border-b border-white/10 pb-4">
            <Shield className="w-5 h-5 text-cyan-400" />
            14-Topic Coverage Analysis
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {country.topics.map((topic, i) => {
              const Icon = iconMap[topic.icon] || CheckCircle;
              const isAddressed = topic.status === "Addressed";
              const isPartial = topic.status === "Partial";

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                    isAddressed ? "bg-green-500/5 border-green-500/20 hover:bg-green-500/10"
                    : isPartial ? "bg-yellow-500/5 border-yellow-500/20 hover:bg-yellow-500/10"
                    : "bg-red-500/5 border-red-500/20 hover:bg-red-500/10"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 shrink-0 ${isAddressed ? "text-green-400" : isPartial ? "text-yellow-400" : "text-red-400"}`} />
                    <span className="text-sm text-gray-200">{topic.title}</span>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium shrink-0 ${
                    isAddressed ? "bg-green-500/20 text-green-400" : isPartial ? "bg-yellow-500/20 text-yellow-400" : "bg-red-500/20 text-red-400"
                  }`}>
                    {topic.status}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ===== DETAILED CONTENT (Wikipedia) ===== */}
        {country.detailedContent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-6"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
              <FileText className="w-5 h-5 text-cyan-400" />
              Detailed Guide
            </h3>
            
            <div
              className="
                text-gray-300 text-sm md:text-base leading-relaxed space-y-4
                [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-8 [&>h2]:mb-4 [&>h2]:border-b [&>h2]:border-white/10 [&>h2]:pb-2
                [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-cyan-300 [&>h3]:mt-6 [&>h3]:mb-3
                [&>p]:mb-4
                [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ul]:mb-6
                [&>strong]:text-cyan-400 [&>strong]:font-bold
                [&>table]:w-full [&>table]:border-collapse [&>table]:text-sm [&>table]:mb-6
                [&>table>thead>tr>th]:bg-white/10 [&>table>thead>tr>th]:text-white [&>table>thead>tr>th]:p-3 [&>table>thead>tr>th]:text-left [&>table>thead>tr>th]:border [&>table>thead>tr>th]:border-white/10
                [&>table>tbody>tr>td]:p-3 [&>table>tbody>tr>td]:border [&>table>tbody>tr>td]:border-white/10 [&>table>tbody>tr>td]:align-top
              "
              dangerouslySetInnerHTML={{ __html: country.detailedContent }}
            />
          </motion.div>
        )}

        {/* ===== COUNTRY QUICK FAQs ===== */}
        {faqs.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mt-6 page-break-inside-avoid"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-4 print:text-black print:border-black">
              <span className="text-cyan-400 print:text-black">?</span> Frequently Asked Questions
            </h3>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details 
                  key={i} 
                  open
                  className="group bg-black/30 border border-white/10 rounded-xl overflow-hidden hover:bg-white/5 transition-all print:bg-white print:border-gray-300"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none p-5 print:p-3">
                    <span className="text-white font-medium pr-4 print:text-black">{faq.q}</span>
                  </summary>
                  <div className="px-5 pb-5 pt-2 border-t border-white/10 text-gray-300 text-sm leading-relaxed print:text-gray-800 print:border-gray-200 print:p-3">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </motion.div>
        )}

      </div>
   

               {/* ===== CUSTOM PRINT FOOTER (Only visible in PDF) ===== */}
      <div className="hidden print:block mt-12 pt-6 border-t border-gray-300 w-full text-center">
        
        {/* Text Section (Black color as requested) */}
        <div className="text-black mb-4">
          <p className="m-0 text-[10pt] font-semibold">
            &copy; {new Date().getFullYear()} Legal Galaxy | Powered by BusinezExcellence StartX LLP
          </p>
          <p className="m-0 text-[9pt] text-gray-700 italic mt-1">
            This content is for educational/informational purposes only and does not constitute legal advice.
          </p>
          <p className="m-0 text-[9pt] text-gray-700 mt-1">
            Data Privacy Contact: <a href="mailto:shilpi.kulshrestha@businezexcellence.com" className="text-blue-600 underline">shilpi.kulshrestha@businezexcellence.com</a>
          </p>
        </div>

        
                        {/* Colorful Icons Section (Same as website) */}
        <div className="flex items-center justify-center gap-4 mt-6">
          
          {/* LinkedIn */}
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>

          {/* Twitter */}
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path fill="#1DA1F2" d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>

          {/* YouTube */}
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>

          {/* Instagram */}
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path fill="#E1306C" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>

          {/* Facebook */}
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>

          {/* WhatsApp */}
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </div>
        </div>
    </main>
  );
}