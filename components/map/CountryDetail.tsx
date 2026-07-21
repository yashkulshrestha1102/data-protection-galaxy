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
  Globe, Database, AlertTriangle, FileText, Scale,
  XCircle
};

interface CountryDetailProps {
  country: Country | null;
}

export const CountryDetail = ({ country }: CountryDetailProps) => {
  if (!country) {
    return (
      <div className="h-full flex items-center justify-center text-center p-8">
        <div className="space-y-4">
          <div className="text-6xl">🌍</div>
          <h3 className="text-2xl font-semibold text-gray-300">Select a country</h3>
          <p className="text-gray-500 max-w-sm">Click on any country on the map to view its data protection law</p>
        </div>
      </div>
    );
  }

  const totalTopics = country.topics.length;
  const addressedTopics = country.topics.filter(t => t.status === 'Addressed').length;
  const partialTopics = country.topics.filter(t => t.status === 'Partial').length;
  const compliancePercentage = Math.round((addressedTopics / totalTopics) * 100);

  const levelColors = {
    Comprehensive: 'text-green-400 bg-green-500/20 border-green-500/30',
    Substantial: 'text-blue-400 bg-blue-500/20 border-blue-500/30',
    Moderate: 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30',
    Limited: 'text-orange-400 bg-orange-500/20 border-orange-500/30',
    None: 'text-red-400 bg-red-500/20 border-red-500/30',
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
      transition={{ duration: 0.5 }}
      className="h-full max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-purple-500/20 scrollbar-track-transparent"
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <div className="text-5xl">{country.flag}</div>
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold text-white leading-tight">{country.name}</h2>
          <p className="text-sm text-gray-400 mt-1 line-clamp-2">{country.lawName}</p>
        </div>
      </div>

      {/* Authority */}
      <div className="flex items-start gap-3 p-4 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
        <Building className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-xs text-gray-400">Authority</p>
          <p className="text-white font-medium text-sm">{country.authority}</p>
        </div>
      </div>

      {/* Region & Level */}
      <div className="flex flex-wrap gap-3 mb-6">
        <div className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-sm text-gray-300">
          {country.region}
        </div>
        <div className={`px-3 py-1.5 rounded-full border text-sm font-medium ${levelColors[country.level]}`}>
          {levelEmojis[country.level]} {country.level}
        </div>
        <div className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-sm text-gray-300">
          {addressedTopics}/{totalTopics} Addressed
        </div>
      </div>

      {/* Overview */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-300 mb-2">Overview</h4>
        <p className="text-sm text-gray-400 leading-relaxed line-clamp-4">{country.overview}</p>
      </div>

      {/* Topics - Quick Preview */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-sm font-semibold text-gray-300">14-Topic Coverage</h4>
          <span className="text-xs text-purple-400">{addressedTopics}/{totalTopics} Addressed</span>
        </div>

        <div className="w-full h-1.5 bg-white/10 rounded-full mb-4 overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${compliancePercentage}%` }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>

        <div className="space-y-1.5 max-h-[200px] overflow-y-auto">
          {country.topics.slice(0, 6).map((topic, i) => {
            const Icon = iconMap[topic.icon] || CheckCircle;
            const isAddressed = topic.status === 'Addressed';
            const isPartial = topic.status === 'Partial';
            
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                className={`flex items-center justify-between p-2.5 rounded-lg transition-all ${
                  isAddressed 
                    ? 'bg-green-500/5 border border-green-500/10' 
                    : isPartial
                    ? 'bg-yellow-500/5 border border-yellow-500/10'
                    : 'bg-red-500/5 border border-red-500/10'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${
                    isAddressed ? 'text-green-400' : isPartial ? 'text-yellow-400' : 'text-red-400'
                  }`} />
                  <span className="text-xs text-gray-300 truncate">{topic.title}</span>
                </div>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full flex-shrink-0 ml-2 ${
                  isAddressed 
                    ? 'bg-green-500/20 text-green-400' 
                    : isPartial
                    ? 'bg-yellow-500/20 text-yellow-400'
                    : 'bg-red-500/20 text-red-400'
                }`}>
                  {topic.status}
                </span>
              </motion.div>
            );
          })}
          {country.topics.length > 6 && (
            <div className="text-xs text-gray-500 text-center pt-1">
              +{country.topics.length - 6} more topics
            </div>
          )}
        </div>
      </div>

      {/* ===== FIXED BUTTONS — Galaxy Theme (Purple-Pink) ===== */}
<div className="flex flex-col sm:flex-row gap-3 sticky bottom-0 pt-4 -mx-2 px-2">
        <Link 
          href={`/country/${country.id}`}
          className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium text-sm hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
        >
          View Full Country Page
          <ExternalLink className="w-4 h-4" />
        </Link>
        <button className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm text-white font-medium text-sm hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105">
          Check Compliance Score
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};