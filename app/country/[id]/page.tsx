// app/country/[id]/page.tsx
"use client";

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Building, CheckCircle, AlertCircle, Shield, Users, Globe, Database, AlertTriangle, FileText, Scale, XCircle, ExternalLink, Calendar, Clock, MapPin } from 'lucide-react';
import { countries, getCountryById } from '@/data/countries';
import { motion } from 'framer-motion';

const iconMap: Record<string, any> = {
  Building, CheckCircle, AlertCircle, Shield, Users,
  Globe, Database, AlertTriangle, FileText, Scale,
  XCircle
};

export default function CountryPage() {
  const params = useParams();
  const router = useRouter();
  const countryId = params.id as string;
  const country = getCountryById(countryId);

  if (!country) {
    return (
      <main className="min-h-screen text-white flex items-center justify-center px-4 pt-24">
        <div className="text-center">
          <div className="text-6xl mb-4">🌍</div>
          <h1 className="text-3xl font-bold mb-2">Country not found</h1>
          <p className="text-gray-400 mb-6">The country you're looking for doesn't exist.</p>
          <Link href="/map" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Map
          </Link>
        </div>
      </main>
    );
  }

  const totalTopics = country.topics.length;
  const addressedTopics = country.topics.filter(t => t.status === 'Addressed').length;
  const partialTopics = country.topics.filter(t => t.status === 'Partial').length;
  const noneTopics = country.topics.filter(t => t.status === 'None').length;
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
    <main className="min-h-screen text-white px-4 pb-12 relative overflow-hidden pt-28 md:pt-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black/90" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Back Button */}
        <Link 
          href="/map" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Map
        </Link>

        {/* Country Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm p-8 mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="text-7xl">{country.flag}</div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-white">{country.name}</h1>
              <p className="text-xl text-gray-300 mt-1">{country.lawName}</p>
              <div className="flex flex-wrap gap-3 mt-3">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm text-gray-300">
                  {country.region}
                </span>
                <span className={`px-3 py-1 rounded-full border text-sm font-medium ${levelColors[country.level]}`}>
                  {levelEmojis[country.level]} {country.level}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm text-gray-300">
                  {addressedTopics}/{totalTopics} Topics Addressed
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Authority & Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm p-6"
          >
            <h3 className="text-sm font-semibold text-gray-400 mb-2">Authority</h3>
            <div className="flex items-start gap-3">
              <Building className="w-5 h-5 text-purple-400 mt-0.5" />
              <p className="text-white font-medium">{country.authority}</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm p-6"
          >
            <h3 className="text-sm font-semibold text-gray-400 mb-2">Compliance Score</h3>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${compliancePercentage}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </div>
              <span className="text-2xl font-bold text-white">{compliancePercentage}%</span>
            </div>
            <div className="flex gap-4 mt-3 text-sm">
              <span className="text-green-400">✅ {addressedTopics} Addressed</span>
              <span className="text-yellow-400">⚠️ {partialTopics} Partial</span>
              <span className="text-red-400">❌ {noneTopics} None</span>
            </div>
          </motion.div>
        </div>

        {/* Overview */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm p-6 mb-8"
        >
          <h3 className="text-sm font-semibold text-gray-400 mb-3">Overview</h3>
          <p className="text-gray-300 leading-relaxed">{country.overview}</p>
        </motion.div>

        {/* Topics */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm p-6"
        >
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-purple-400" />
            14-Topic Coverage
            <span className="text-sm font-normal text-gray-400">({addressedTopics}/{totalTopics} Addressed)</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {country.topics.map((topic, i) => {
              const Icon = iconMap[topic.icon] || CheckCircle;
              const isAddressed = topic.status === 'Addressed';
              const isPartial = topic.status === 'Partial';
              
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`flex items-center justify-between p-3 rounded-lg transition-all ${
                    isAddressed 
                      ? 'bg-green-500/5 border border-green-500/10 hover:bg-green-500/10' 
                      : isPartial
                      ? 'bg-yellow-500/5 border border-yellow-500/10 hover:bg-yellow-500/10'
                      : 'bg-red-500/5 border border-red-500/10 hover:bg-red-500/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${
                      isAddressed ? 'text-green-400' : isPartial ? 'text-yellow-400' : 'text-red-400'
                    }`} />
                    <span className="text-sm text-gray-300">{topic.title}</span>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
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
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <button 
            onClick={() => window.print()}
            className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:scale-105 transition-all flex items-center justify-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            Print Country Report
          </button>
          <Link 
            href="/map"
            className="flex-1 px-6 py-3 rounded-xl bg-white/10 border border-white/10 text-white font-medium hover:bg-white/20 transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Map
          </Link>
        </motion.div>
      </div>
    </main>
  );
}