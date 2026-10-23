"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft, Building, CheckCircle, AlertCircle, Shield, Users,
  Globe, Database, AlertTriangle, FileText, Scale, XCircle, ExternalLink,
} from "lucide-react";
import { Country } from "@/data/countries";

const iconMap: Record<string, any> = {
  Building, CheckCircle, AlertCircle, Shield, Users, Globe,
  Database, AlertTriangle, FileText, Scale, XCircle,
};

interface CountryClientProps {
  country: Country;
}

export default function CountryClient({ country }: CountryClientProps) {
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
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 bg-[#0a0a0a]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top Navigation */}
        <div className="flex items-center justify-between mb-6">
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
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="text-6xl md:text-7xl leading-none drop-shadow-lg">{country.flag}</div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">{country.name}</h1>
                <p className="text-lg text-purple-300 font-medium">{country.lawName}</p>
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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-2 border-b border-white/10 pb-4">
            <Shield className="w-5 h-5 text-purple-400" />
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

      </div>
    </main>
  );
}