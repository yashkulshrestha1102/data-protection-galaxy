"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Shield, Brain, FileText, CheckCircle, 
  Download, Sparkles, ChevronRight, Lock, Users,
  AlertCircle, Clipboard, Database, Globe, Scale,
  Mail, Send, Loader2
} from 'lucide-react';

export default function GeneratorPage() {
  const [activeTab, setActiveTab] = useState<'privacy' | 'ai'>('privacy');
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  // ===== PRIVACY GENERATOR OPTIONS =====
  const privacyTools = [
    { id: 'privacy-notice', label: 'Privacy Notice/Policy', icon: FileText, desc: 'Generate a comprehensive privacy policy for your website/app' },
    { id: 'consent-notice', label: 'Consent Notice', icon: CheckCircle, desc: 'Create a consent notice for data collection' },
    { id: 'cookies-notice', label: 'Cookies Notice', icon: AlertCircle, desc: 'Generate a cookie policy and banner notice' },
    { id: 'dpa', label: 'Data Processing Agreement', icon: Clipboard, desc: 'Create a DPA for vendors and processors' },
    { id: 'retention-policy', label: 'Data Retention Policy', icon: Database, desc: 'Generate a data retention and deletion policy' },
    { id: 'breach-response', label: 'Data Breach Response Template', icon: Shield, desc: 'Create an incident response plan' },
    { id: 'dsr-procedure', label: 'Data Subject Rights Procedure', icon: Users, desc: 'Generate a procedure for handling DSARs' },
    { id: 'vendor-checklist', label: 'Vendor Data Processing Checklist', icon: Clipboard, desc: 'Create a vendor assessment checklist' },
  ];

  // ===== AI GOVERNANCE GENERATOR OPTIONS =====
  const aiTools = [
    { id: 'ai-usage-policy', label: 'AI Usage Policy', icon: Brain, desc: 'Generate an internal AI usage policy' },
    { id: 'responsible-ai-policy', label: 'Responsible AI Policy', icon: Shield, desc: 'Create a responsible AI framework policy' },
    { id: 'ai-governance-framework', label: 'AI Governance Framework', icon: Scale, desc: 'Build a complete AI governance structure' },
    { id: 'ai-risk-assessment', label: 'AI Risk Assessment', icon: AlertCircle, desc: 'Generate an AI risk assessment template' },
    { id: 'ai-vendor-questionnaire', label: 'AI Vendor Questionnaire', icon: FileText, desc: 'Create a vendor assessment for AI providers' },
    { id: 'ai-acceptable-use', label: 'AI Acceptable Use Policy', icon: Lock, desc: 'Generate an acceptable use policy for AI tools' },
    { id: 'ai-impact-assessment', label: 'AI Impact Assessment', icon: Globe, desc: 'Create a comprehensive AI impact assessment' },
  ];

  const activeTools = activeTab === 'privacy' ? privacyTools : aiTools;

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    try {
      await fetch('/api/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email, 
          tool: selectedTool,
          type: activeTab,
          source: 'generator' 
        }),
      });
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error:', error);
    }
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen text-white px-4 relative overflow-hidden pt-28 md:pt-32 pb-16">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/home1.jpeg')" }}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>
      <div className="absolute inset-0 -z-10">{stars}</div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-sm font-medium text-purple-400 mb-4">
            <Sparkles className="w-4 h-4" />
            Document Generator
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-2xl mb-2">
            Generate Privacy & AI Documents
          </h1>
          <p className="text-gray-200 max-w-2xl">
            Create professional privacy and AI governance documents instantly. 
            Select a template and generate your document in minutes.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-6 py-3 rounded-xl flex items-center gap-2 font-semibold transition-all ${
              activeTab === 'privacy'
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/30'
                : 'bg-white/10 border border-white/20 text-gray-400 hover:text-white hover:bg-white/20'
            }`}
          >
            <Shield className="w-5 h-5" />
            Privacy Generator
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`px-6 py-3 rounded-xl flex items-center gap-2 font-semibold transition-all ${
              activeTab === 'ai'
                ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/30'
                : 'bg-white/10 border border-white/20 text-gray-400 hover:text-white hover:bg-white/20'
            }`}
          >
            <Brain className="w-5 h-5" />
            AI Governance Generator
          </button>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activeTools.map((tool, idx) => {
            const Icon = tool.icon;
            const isSelected = selectedTool === tool.id;
            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className={`bg-white/10 border rounded-xl p-5 transition-all group cursor-pointer ${
                  isSelected 
                    ? 'border-purple-500 bg-purple-500/20' 
                    : 'border-white/20 hover:bg-white/15'
                }`}
                onClick={() => setSelectedTool(tool.id)}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {tool.label}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">{tool.desc}</p>
                    {isSelected && (
                      <span className="inline-block mt-2 text-xs text-green-400">✓ Selected</span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Email Capture for Download */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-6 text-center"
        >
          <Lock className="w-8 h-8 text-purple-400 mx-auto mb-2" />
          <h3 className="text-lg font-semibold text-white mb-1">
            {selectedTool ? 'Get Your Document' : 'Select a Tool to Generate'}
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            {selectedTool 
              ? 'Enter your email to receive the generated document instantly.' 
              : 'Choose a template above and enter your email to download.'}
          </p>
          
          {isSubmitted ? (
            <div className="max-w-lg mx-auto p-4 rounded-xl bg-green-500/20 border border-green-500/30">
              <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <p className="text-white font-medium">Document Sent! ✅</p>
              <p className="text-gray-300 text-sm">Check your email for the document.</p>
            </div>
          ) : (
            <form onSubmit={handleGenerate} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50"
                required
                disabled={!selectedTool}
              />
              <button
                type="submit"
                disabled={isSubmitting || !selectedTool}
                className={`px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition-all flex items-center gap-2 justify-center ${
                  (!selectedTool || isSubmitting) ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    Generate & Download
                  </>
                )}
              </button>
            </form>
          )}
          <p className="text-xs text-gray-500 mt-3">We'll send the document to your email. No spam.</p>
        </motion.div>
      </div>
    </main>
  );
}