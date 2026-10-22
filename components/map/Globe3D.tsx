"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Building, CheckCircle, AlertCircle, Shield, Users, 
  Globe, Database, AlertTriangle, FileText, Scale,
  XCircle, ExternalLink, ChevronRight
} from 'lucide-react';
import { Country } from '@/data/countries';

const iconMap: Record<string, any> = {
  Building, CheckCircle, AlertCircle, Shield, Users,
  Globe, Database, AlertTriangle, FileText, Scale, XCircle
};

interface CountryDetailProps {
  country: Country | null;
}

export const CountryDetail = ({ country }: CountryDetailProps) => {
  if (!country) {
    return (
      <div className="h-full flex items-center justify-center text-center p-8 bg-white/5 border border-white/10 rounded-2xl">
        <div className="space-y-4">
          <div className="text-6xl animate-bounce">🌍</div>
          <h3 className="text-2xl font-semibold text-white">Select a Country</h3>
          <p className="text-gray-400 max-w-sm">Click on any country on the 3D globe to explore its data protection laws and privacy framework.</p>
        </div>
      </div>
    );
  }

  const totalTopics = country.topics.length;
  const addressedTopics = country.topics.filter(t => t.status === 'Addressed').length;
  const partialTopics = country.topics.filter(t => t.status === 'Partial').length;
  const compliancePercentage = Math.round((addressedTopics / totalTopics) * 100);

  const levelColors = {
    Comprehensive: 'text-green-400 bg-green-500/10 border-green-500/30',
    Substantial: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
    Moderate: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30',
    Limited: 'text-orange-400 bg-orange-500/10 border-orange-500/30',
    None: 'text-red-400 bg-red-500/10 border-red-500/30',
  };

  const levelEmojis = {
    Comprehensive: '🟢',
    Substantial: '🔵',
    Moderate: '🟡',
    Limited: '🟠',
    None: '🔴',
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="h-full flex flex-col"
    >
      <div className="flex-1 overflow-y-auto pr-2 pb-4 scrollbar-thin scrollbar-thumb-purple-500/20 scrollbar-track-transparent">
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="text-6xl drop-shadow-lg">{country.flag}</div>
          <div className="flex-1 min-w-0">
            <h2 className="text-3xl font-bold text-white leading-tight">{country.name}</h2>
            <p className="text-sm font-medium text-purple-300 mt-1">{country.lawName}</p>
          </div>
        </div>

        {/* Authority */}
        <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 mb-6">
          <Building className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Regulatory Authority</p>
            <p className="text-white font-medium text-sm mt-0.5">{country.authority}</p>
          </div>
        </div>

        {/* Region & Level */}
        <div className="flex flex-wrap gap-2 mb-6">
          <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-gray-300">
            📍 {country.region}
          </div>
          <div className={`px-3 py-1.5 rounded-lg border text-xs font-bold ${levelColors[country.level]}`}>
            {levelEmojis[country.level]} {country.level}
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-xs font-bold text-purple-300">
            {addressedTopics}/{totalTopics} Topics Addressed
          </div>
        </div>

        {/* ✅ SEO FIX: Overview without line-clamp */}
        <div className="mb-8">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Law Overview</h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            {country.overview}
          </p>
        </div>

        {/* Topics Coverage */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">14-Point Coverage</h4>
            <span className="text-xs font-bold text-green-400">{compliancePercentage}% Match</span>
          </div>

          <div className="w-full h-2 bg-black/50 rounded-full mb-4 overflow-hidden border border-white/5">
            <motion.div 
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${compliancePercentage}%` }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </div>

          <div className="grid grid-cols-1 gap-2">
            {country.topics.slice(0, 8).map((topic, i) => {
              const Icon = iconMap[topic.icon] || CheckCircle;
              const isAddressed = topic.status === 'Addressed';
              const isPartial = topic.status === 'Partial';
              
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className={`flex items-center justify-between p-2.5 rounded-lg border ${
                    isAddressed ? 'bg-green-500/5 border-green-500/20' 
                    : isPartial ? 'bg-yellow-500/5 border-yellow-500/20'
                    : 'bg-red-500/5 border-red-500/20'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Icon className={`w-4 h-4 flex-shrink-0 ${
                      isAddressed ? 'text-green-400' : isPartial ? 'text-yellow-400' : 'text-red-400'
                    }`} />
                    <span className="text-xs text-gray-200 truncate">{topic.title}</span>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide flex-shrink-0 ml-2 ${
                    isAddressed ? 'bg-green-500/20 text-green-400' 
                    : isPartial ? 'bg-yellow-500/20 text-yellow-400'
                    : 'bg-red-500/20 text-red-400'
                  }`}>
                    {topic.status}
                  </span>
                </motion.div>
              );
            })}
          </div>
          {country.topics.length > 8 && (
            <div className="text-xs text-gray-500 text-center pt-2 font-medium">
              +{country.topics.length - 8} more compliance topics covered
            </div>
          )}
        </div>
      </div>

      {/* Sticky Buttons */}
      <div className="pt-4 border-t border-white/10 mt-2 flex flex-col sm:flex-row gap-3">
        <Link 
          href={`/country/${country.id}`}
          className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-sm hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-500/30"
        >
          View Full Report
          <ExternalLink className="w-4 h-4" />
        </Link>
        <Link 
          href="/scorecard"
          className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-sm hover:bg-white/20 transition-all flex items-center justify-center gap-2 hover:scale-105"
        >
          Compliance Score
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
};