"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Video, BookOpen, Users, FileText, 
  Play, Clock, ChevronRight, Sparkles
} from 'lucide-react';

export default function TrainingPage() {
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

  const trainingMaterials = [
    {
      id: 1,
      title: 'DPDP Act 2023 Overview',
      type: 'Video',
      icon: Video,
      duration: '30 min',
      description: 'Comprehensive overview of the Digital Personal Data Protection Act, 2023.',
      category: 'Foundation',
      level: 'Beginner',
      slug: 'dpdp-act-overview',
    },
    {
      id: 2,
      title: 'Data Protection for Employees',
      type: 'Presentation',
      icon: FileText,
      duration: '45 min',
      description: 'Training presentation on data protection principles and practices.',
      category: 'Awareness',
      level: 'Beginner',
      slug: 'data-protection-employees',
    },
    {
      id: 3,
      title: 'Data Breach Response Training',
      type: 'Video',
      icon: Video,
      duration: '20 min',
      description: 'Training on responding to data breaches and notifying the Board.',
      category: 'Incident Response',
      level: 'Intermediate',
      slug: 'breach-response-training',
    },
    {
      id: 4,
      title: 'Data Subject Rights Handling',
      type: 'Guide',
      icon: BookOpen,
      duration: '30 min',
      description: 'Guide on handling data subject rights requests under the DPDP Act.',
      category: 'Data Rights',
      level: 'Intermediate',
      slug: 'data-subject-rights-handling',
    },
    {
      id: 5,
      title: 'Consent Management Workshop',
      type: 'Workshop',
      icon: Users,
      duration: '60 min',
      description: 'Workshop on obtaining and managing consent under the DPDP Act.',
      category: 'Consent',
      level: 'Advanced',
      slug: 'consent-management-workshop',
    },
    {
      id: 6,
      title: 'DPDP Act Compliance Checklist',
      type: 'Guide',
      icon: BookOpen,
      duration: '25 min',
      description: 'A comprehensive checklist for DPDP Act compliance.',
      category: 'Compliance',
      level: 'All Levels',
      slug: 'dpdp-compliance-checklist',
    },
    {
      id: 7,
      title: 'Data Protection for Managers',
      type: 'Video',
      icon: Video,
      duration: '40 min',
      description: 'Training on data protection responsibilities for managers and leaders.',
      category: 'Leadership',
      level: 'Advanced',
      slug: 'data-protection-managers',
    },
    {
      id: 8,
      title: 'Privacy by Design Workshop',
      type: 'Workshop',
      icon: Users,
      duration: '90 min',
      description: 'Workshop on implementing privacy by design principles.',
      category: 'Design',
      level: 'Advanced',
      slug: 'privacy-by-design-workshop',
    },
  ];

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'Video': 'from-red-500 to-red-600',
      'Presentation': 'from-blue-500 to-blue-600',
      'Guide': 'from-green-500 to-green-600',
      'Workshop': 'from-purple-500 to-purple-600',
    };
    return colors[type] || 'from-gray-500 to-gray-600';
  };

  const getTypeBg = (type: string) => {
    const colors: Record<string, string> = {
      'Video': 'bg-red-500/20 text-red-400 border-red-500/30',
      'Presentation': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Guide': 'bg-green-500/20 text-green-400 border-green-500/30',
      'Workshop': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    };
    return colors[type] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  const getLevelColor = (level: string) => {
    const colors: Record<string, string> = {
      'Beginner': 'text-green-400 bg-green-500/20 border-green-500/30',
      'Intermediate': 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30',
      'Advanced': 'text-red-400 bg-red-500/20 border-red-500/30',
      'All Levels': 'text-blue-400 bg-blue-500/20 border-blue-500/30',
    };
    return colors[level] || 'text-gray-400 bg-gray-500/20 border-gray-500/30';
  };

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

      <div className="max-w-6xl mx-auto relative z-10">
        <Link href="/resources" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Resources
        </Link>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-sm font-semibold text-blue-400 mb-4">
            <Sparkles className="w-4 h-4" />
            Training & Awareness
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Training Material</h1>
          <p className="text-gray-300 text-lg max-w-3xl">Training materials and resources for data protection awareness under the DPDP Act 2023.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trainingMaterials.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6 hover:bg-white/20 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${getTypeColor(item.type)} flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${getTypeBg(item.type)}`}>
                      {item.type}
                    </span>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${getLevelColor(item.level)}`}>
                    {item.level}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {item.duration}
                  </span>
                  <span className="text-blue-400 group-hover:text-purple-400 transition-colors text-sm flex items-center gap-1">
                    Access Training
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}