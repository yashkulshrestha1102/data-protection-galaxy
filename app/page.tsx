"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Shield, Sparkles, Target, BookOpen, FileText, 
  Map, Globe, Award, Users, Rocket, Brain, 
  Scale, Lock, Zap, ArrowRight, Calendar, Clock, Info, Phone,
  CheckCircle, TrendingUp, Star, Briefcase, AlertTriangle,
  Quote, ChevronRight, Building2, UserCheck,HelpCircle 
} from "lucide-react";
import { useState, useEffect } from "react";

// ✅ DATA IMPORTS
import { insightsData } from "@/data/insights";
import { guidesData } from "@/data/guides";
import { caseStudiesData } from "@/data/case-studies";
import { authors } from "@/data/authors";
import { countries } from "@/data/countries";

// ===== FIELD LABEL COMPONENT (UPDATED FOR A11Y) =====
const LabelWithAsterisk = ({ label, required, htmlFor }: { label: string; required?: boolean; htmlFor?: string }) => (
  <label htmlFor={htmlFor} className="block text-xs text-white/60 mb-1">
    {label}
    {required && <span className="text-red-500 ml-0.5">*</span>}
  </label>
);

export default function Home() {
  const [stars, setStars] = useState<React.ReactNode[]>([]);
  const [showLockMessage, setShowLockMessage] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // ===== DEMO FORM STATE =====
  const [demoForm, setDemoForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    phone: '',
    companySize: '',
    industry: '',
    challenges: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [demoSubmitted, setDemoSubmitted] = useState(false);

  // ✅ Get Author Data
  const author = authors['shilpi-kulshrestha'];

  useEffect(() => {
    const starElements = [];
    for (let i = 0; i < 80; i++) {
      starElements.push(
        <div
          key={i}
          className="absolute bg-white rounded-full animate-twinkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 4 + 2}s`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.6 + 0.1,
            width: `${Math.random() * 2.5 + 1}px`,
            height: `${Math.random() * 2.5 + 1}px`,
          }}
        />
      );
    }
    setStars(starElements);
  }, []);

  // Locked section par click hone par message
  const handleLockedClick = (label: string) => {
    setShowLockMessage(`${label} section is Coming Soon. Under Maintenance!`);
    setTimeout(() => setShowLockMessage(null), 3000);
  };

  // ===== VALIDATION FUNCTION =====
  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!demoForm.firstName.trim()) errors.firstName = 'First name is required';
    if (!demoForm.lastName.trim()) errors.lastName = 'Last name is required';
    if (!demoForm.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(demoForm.email)) {
      errors.email = 'Please enter a valid email';
    }
    if (!demoForm.company.trim()) errors.company = 'Company name is required';
    if (!demoForm.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(demoForm.phone.replace(/\s/g, ''))) {
      errors.phone = 'Please enter a valid phone number';
    }
    if (!demoForm.industry) errors.industry = 'Please select your industry';
    if (!demoForm.consent) errors.consent = 'You must agree to the Privacy Policy';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // ===== DEMO FORM SUBMIT HANDLER =====
  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      const firstError = document.querySelector('.border-red-500');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...demoForm, source: 'demo' }),
      });

      const data = await response.json();
      if (data.success) {
        setDemoSubmitted(true);
        setDemoForm({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          jobTitle: '',
          phone: '',
          companySize: '',
          industry: '',
          challenges: '',
          consent: false
        });
        setFormErrors({});
        setTimeout(() => setDemoSubmitted(false), 5000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit. Please try again.');
    }
    setIsSubmitting(false);
  };

  // ===== DEMO FORM CHANGE HANDLER =====
  const handleDemoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setDemoForm({ ...demoForm, [name]: checked });
      if (formErrors[name]) {
        setFormErrors({ ...formErrors, [name]: '' });
      }
    } else {
      setDemoForm({ ...demoForm, [name]: value });
      if (formErrors[name]) {
        setFormErrors({ ...formErrors, [name]: '' });
      }
    }
  };

  // ✅ Book a Consultant Scroll Handler
  const scrollToBookDemo = () => {
    const el = document.getElementById('book-demo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // ===== LATEST CONTENT (First 3 for homepage) =====
  const latestInsights = insightsData.slice(0, 3);
  const featuredGuides = guidesData.slice(0, 2);
  const featuredCaseStudies = caseStudiesData.slice(0, 2);

  return (
    <main className="min-h-screen text-white flex flex-col items-center px-4 pt-28 md:pt-32 pb-16 relative overflow-hidden">
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/home1.jpeg')" }}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>
      <div className="absolute inset-0 -z-10">{stars}</div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* ===== SECTION 1: HERO ===== */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-xs font-medium text-purple-300 mb-4">
            <Sparkles className="w-4 h-4" />
            Privacy & AI Governance
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 drop-shadow-2xl">
            How ready is your organisation for the new world of<br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Privacy & AI Governance?
            </span>
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto drop-shadow-lg">
            Master India's DPDP Act 2023 with free assessments, expert insights, compliance templates and AI governance tools — built for businesses, DPOs and legal teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/scorecard"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition-all flex items-center gap-2 shadow-lg shadow-purple-500/30 justify-center"
            >
              <Target className="w-5 h-5" />
              TAKE THE FREE TEST →
            </Link>
            <Link
              href="/galaxy"
              className="px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all flex items-center gap-2 backdrop-blur-sm justify-center"
            >
              <Globe className="w-5 h-5" />
              EXPLORE THE GALAXY →
            </Link>
          </div>
        </motion.div>

        {/* ===== NEW SECTION: AUTHOR STRIP (E-E-A-T) ===== */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-4 mb-12 text-sm text-gray-300"
        >
          <Link href={`/authors/${author.id}`} className="flex items-center gap-3 group hover:opacity-80 transition-opacity">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-purple-500/40">
              <Image
                src={author.image}
                alt={author.name}
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <div className="text-left">
              <p className="text-white font-medium group-hover:text-purple-400 transition-colors flex items-center gap-1">
                {author.name}
                <UserCheck className="w-3 h-3 text-purple-400" />
              </p>
              <p className="text-xs text-gray-400">{author.role}</p>
            </div>
          </Link>
          <span className="text-gray-600 hidden sm:inline">|</span>
          <div className="hidden sm:flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-500" />
            <span className="text-xs">Last reviewed: {new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}</span>
          </div>
        </motion.div>

        {/* ===== TRUST STATS ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { number: "20+", label: "Free Modules", icon: BookOpen },
            { number: "250+", label: "Lessons", icon: FileText },
            { number: "70+", label: "Country Guides", icon: Globe },
            { number: "₹250 Cr", label: "Max Penalty", icon: AlertTriangle },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all">
                <Icon className="w-5 h-5 text-purple-400 mx-auto mb-2" />
                <div className="text-xl md:text-2xl font-bold text-white">{stat.number}</div>
                <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>






        {/* ===== QUICK ANSWERS (GEO Optimized) ===== */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.18 }}
  className="mb-16"
>
  <div className="text-center mb-8">
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-xs font-medium text-purple-300 mb-3">
      <HelpCircle className="w-4 h-4" />
      DPDP Act 2023 — Quick Answers
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
      Common DPDPA Questions Answered
    </h2>
    <p className="text-gray-400 text-sm max-w-2xl mx-auto">
      Direct answers to the most frequently asked questions about India's Digital Personal Data Protection Act 2023.
    </p>
  </div>
  <div className="grid gap-3 max-w-4xl mx-auto">
    {[
      {
        q: "What is the maximum penalty under India's DPDP Act 2023?",
        a: "The maximum penalty under the DPDP Act 2023 is ₹250 crore for failure to take reasonable security safeguards to prevent a personal data breach. Other penalties range from ₹50 crore to ₹200 crore depending on the nature of the violation, as set out in the Schedule to the Act.",
      },
      {
        q: "When did the DPDP Act 2023 come into force?",
        a: "The DPDP Act 2023 received presidential assent on 11 August 2023. The DPDP Rules 2025 were notified in November 2025. Implementation is phased — main operational provisions, including consent and data principal rights, are scheduled to commence on 13 May 2027.",
      },
      {
        q: "Is a Data Protection Officer (DPO) mandatory under DPDPA?",
        a: "A DPO is mandatory only for Significant Data Fiduciaries (SDFs) notified by the Central Government under Section 10. Non-SDFs are not required to appoint a DPO under the Act, though they still must comply with other obligations.",
      },
      {
        q: "Does India's DPDP Act require data localisation?",
        a: "No. The DPDP Act does not mandate general data localisation. Cross-border transfers are allowed by default unless the Central Government restricts them under Section 16. However, sectoral laws — such as RBI's payment data rules, IRDAI insurance regulations, and SEBI securities rules — may require localisation for specific data types.",
      },
      {
        q: "Who is a Data Fiduciary under the DPDP Act?",
        a: "A Data Fiduciary is any person or entity that alone or jointly with others determines the purpose and means of processing personal data. This includes most businesses, websites, mobile apps, SaaS platforms, and service providers operating in India.",
      },
      {
        q: "What are the 6 rights of Data Principals under DPDPA?",
        a: "The DPDP Act grants six core rights: (1) Right to access information about personal data, (2) Right to correction and erasure, (3) Right to grievance redressal, (4) Right to data portability, (5) Right to nominate, and (6) Right to withdraw consent.",
      },
      {
        q: "How many countries does Legal Galaxy cover for data protection laws?",
        a: `Legal Galaxy compares data protection laws across ${countries.length}+ jurisdictions, including India's DPDP Act 2023, GDPR, CCPA/CPRA, China's PIPL, Brazil's LGPD, and others. Each country profile covers the law name, enforcement authority, compliance level, and 14-topic coverage analysis.`,
      },
    ].map((item, i) => (
      <details
        key={i}
        className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-purple-500/30 transition-all"
      >
        <summary className="flex items-center justify-between cursor-pointer list-none">
          <span className="text-white font-medium pr-4 text-left">{item.q}</span>
          <span className="text-purple-400 group-open:rotate-45 transition-transform text-xl flex-shrink-0">
            +
          </span>
        </summary>
        <p className="text-gray-300 text-sm leading-relaxed mt-3 pt-3 border-t border-white/10">
          {item.a}
        </p>
      </details>
    ))}
  </div>
</motion.div>

        {/* ===== GENERATOR SECTION ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">AI Document Generator</h3>
                  <p className="text-gray-300 text-sm max-w-md">
                    Generate privacy policies, consent forms, and AI governance documents instantly with our intelligent document builder.
                  </p>
                </div>
              </div>
              <Link 
                href="/generator" 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-500/30 hover:bg-purple-500/40 border border-purple-400/30 text-purple-300 hover:text-white transition-all text-sm font-medium whitespace-nowrap"
              >
                Explore Generator
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
              {['Privacy Policy', 'Consent Form', 'DPDPA Compliance', 'AI Governance'].map((tag) => (
                <span key={tag} className="text-[10px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ===== LATEST INSIGHTS ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-purple-400" />
                Latest Insights
              </h2>
              <p className="text-sm text-gray-400 mt-1">
                In-depth analysis on India's data protection law and global privacy
              </p>
            </div>
            <Link 
              href="/insight" 
              className="text-sm text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1 whitespace-nowrap"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {latestInsights.map((insight) => (
              <Link 
                key={insight.slug} 
                href={`/insight/${insight.slug}`}
                className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-purple-500/30 transition-all"
              >
                <div className="inline-block px-2 py-0.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-xs text-blue-400 mb-3">
                  {insight.category}
                </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-purple-400 transition-colors line-clamp-2 mb-2">
                  {insight.title}
                </h3>
                <p className="text-xs text-gray-400 line-clamp-2 mb-3">
                  {insight.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-white/5">
                  <span>{insight.date}</span>
                  <span>{insight.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* ===== FEATURED GUIDES ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <FileText className="w-6 h-6 text-purple-400" />
                Featured Guides
              </h2>
              <p className="text-sm text-gray-400 mt-1">
                Comprehensive compliance guides — updated regularly
              </p>
            </div>
            <Link 
              href="/resources/guides" 
              className="text-sm text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1 whitespace-nowrap"
            >
              All Guides <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/resources/guides/${guide.slug}`}
                className="group bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/15 hover:border-purple-500/30 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${guide.categoryColor}`}>
                    {guide.category}
                  </span>
                  <span className="text-xs text-gray-400">{guide.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors mb-2">
                  {guide.title}
                </h3>
                <p className="text-sm text-gray-400 line-clamp-3 mb-4">
                  {guide.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-white/5">
                  <span>Updated: {guide.lastUpdated}</span>
                  <span className="flex items-center gap-1 text-purple-400 group-hover:translate-x-1 transition-transform">
                    Read Guide <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* ===== CASE STUDIES ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-purple-400" />
                Real-World Case Studies
              </h2>
              <p className="text-sm text-gray-400 mt-1">
                Learn from actual compliance challenges and solutions
              </p>
            </div>
            <Link 
              href="/resources/case-studies" 
              className="text-sm text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1 whitespace-nowrap"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredCaseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/resources/case-studies/${cs.slug}`}
                className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-xs text-blue-400">
                    {cs.industry}
                  </span>
                  <span className="text-xs text-gray-500">{cs.date}</span>
                </div>
                <h3 className="text-base font-semibold text-white group-hover:text-purple-400 transition-colors mb-2">
                  {cs.title}
                </h3>
                <p className="text-sm text-gray-400 line-clamp-2 mb-3">
                  {cs.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500 pt-3 border-t border-white/5">
                  <TrendingUp className="w-3 h-3 text-green-400" />
                  <span>{cs.impact}</span>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* ===== BOOK A DEMO SECTION ===== */}
        <motion.div 
          id="book-demo"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-16 mb-16 bg-black border border-white/10 rounded-2xl p-8 md:p-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            
            {/* Left - Text */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Free Talk to Our <span className="text-white/80">DPDP Act Experts</span>
              </h2>
              <p className="text-white/60 text-sm">
                Fill in your details and a compliance expert will be in touch within one business day.
              </p>
              <div className="flex flex-col gap-2 text-xs text-white/50">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Responding within 1 business day
                </span>
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Indian compliance experts
                </span>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-black/50 border border-white/10 rounded-xl p-6">
              {demoSubmitted ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Demo Request Submitted!</h3>
                  <p className="text-white/60 text-sm">Our team will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleDemoSubmit} className="space-y-3">
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <LabelWithAsterisk label="First Name" required htmlFor="home-firstName" />
                      <input
                        id="home-firstName"
                        type="text"
                        name="firstName"
                        value={demoForm.firstName}
                        onChange={handleDemoChange}
                        placeholder="First name"
                        className={`w-full px-3 py-2 rounded-lg bg-white/5 border text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/30 transition-all ${
                          formErrors.firstName ? 'border-red-500' : 'border-white/10'
                        }`}
                      />
                      {formErrors.firstName && (
                        <p className="text-red-400 text-xs mt-1">{formErrors.firstName}</p>
                      )}
                    </div>
                    <div>
                      <LabelWithAsterisk label="Last Name" required htmlFor="home-lastName" />
                      <input
                        id="home-lastName"
                        type="text"
                        name="lastName"
                        value={demoForm.lastName}
                        onChange={handleDemoChange}
                        placeholder="Last name"
                        className={`w-full px-3 py-2 rounded-lg bg-white/5 border text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/30 transition-all ${
                          formErrors.lastName ? 'border-red-500' : 'border-white/10'
                        }`}
                      />
                      {formErrors.lastName && (
                        <p className="text-red-400 text-xs mt-1">{formErrors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <LabelWithAsterisk label="Work Email" required htmlFor="home-email" />
                      <input
                        id="home-email"
                        type="email"
                        name="email"
                        value={demoForm.email}
                        onChange={handleDemoChange}
                        placeholder="you@company.com"
                        className={`w-full px-3 py-2 rounded-lg bg-white/5 border text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/30 transition-all ${
                          formErrors.email ? 'border-red-500' : 'border-white/10'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-red-400 text-xs mt-1">{formErrors.email}</p>
                      )}
                    </div>
                    <div>
                      <LabelWithAsterisk label="Phone" required htmlFor="home-phone" />
                      <input
                        id="home-phone"
                        type="tel"
                        name="phone"
                        value={demoForm.phone}
                        onChange={handleDemoChange}
                        placeholder="+91 98765 43210"
                        className={`w-full px-3 py-2 rounded-lg bg-white/5 border text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/30 transition-all ${
                          formErrors.phone ? 'border-red-500' : 'border-white/10'
                        }`}
                      />
                      {formErrors.phone && (
                        <p className="text-red-400 text-xs mt-1">{formErrors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <LabelWithAsterisk label="Company" required htmlFor="home-company" />
                      <input
                        id="home-company"
                        type="text"
                        name="company"
                        value={demoForm.company}
                        onChange={handleDemoChange}
                        placeholder="Your company"
                        className={`w-full px-3 py-2 rounded-lg bg-white/5 border text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/30 transition-all ${
                          formErrors.company ? 'border-red-500' : 'border-white/10'
                        }`}
                      />
                      {formErrors.company && (
                        <p className="text-red-400 text-xs mt-1">{formErrors.company}</p>
                      )}
                    </div>
                    <div>
                      <LabelWithAsterisk label="Job Title" htmlFor="home-jobTitle" />
                      <input
                        id="home-jobTitle"
                        type="text"
                        name="jobTitle"
                        value={demoForm.jobTitle}
                        onChange={handleDemoChange}
                        placeholder="e.g. Privacy Officer"
                        className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <LabelWithAsterisk label="Company Size" htmlFor="home-companySize" />
                      <select
                        id="home-companySize"
                        name="companySize"
                        value={demoForm.companySize}
                        onChange={handleDemoChange}
                        className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-white/30"
                      >
                        <option className="bg-black text-white" value="">Select size</option>
                        <option className="bg-black text-white" value="1-50">1–50 employees</option>
                        <option className="bg-black text-white" value="51-200">51–200 employees</option>
                        <option className="bg-black text-white" value="201-1000">201–1,000 employees</option>
                        <option className="bg-black text-white" value="1001-5000">1,001–5,000 employees</option>
                        <option className="bg-black text-white" value="5000+">5,000+ employees</option>
                      </select>
                    </div>
                    <div>
                      <LabelWithAsterisk label="Industry" required htmlFor="home-industry" />
                      <select
                        id="home-industry"
                        name="industry"
                        value={demoForm.industry}
                        onChange={handleDemoChange}
                        className={`w-full px-3 py-2 rounded-lg bg-white/5 border text-white text-sm focus:outline-none focus:border-white/30 transition-all ${
                          formErrors.industry ? 'border-red-500' : 'border-white/10'
                        }`}
                      >
                        <option className="bg-black text-white" value="">Select industry</option>
                        <option className="bg-black text-white" value="Financial Services">Financial Services</option>
                        <option className="bg-black text-white" value="Healthcare">Healthcare</option>
                        <option className="bg-black text-white" value="Technology">Technology</option>
                        <option className="bg-black text-white" value="Retail">Retail & E-commerce</option>
                        <option className="bg-black text-white" value="Manufacturing">Manufacturing</option>
                        <option className="bg-black text-white" value="Education">Education</option>
                        <option className="bg-black text-white" value="Government">Government</option>
                        <option className="bg-black text-white" value="Media">Media & Entertainment</option>
                        <option className="bg-black text-white" value="Professional Services">Professional Services</option>
                        <option className="bg-black text-white" value="Other">Other</option>
                      </select>
                      {formErrors.industry && (
                        <p className="text-red-400 text-xs mt-1">{formErrors.industry}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <LabelWithAsterisk label="What are your biggest DPDP compliance challenges?" htmlFor="home-challenges" />
                    <textarea
                      id="home-challenges"
                      name="challenges"
                      value={demoForm.challenges}
                      onChange={handleDemoChange}
                      placeholder="e.g. Need to implement consent management..."
                      rows={2}
                      className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/30 resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-2">
                    <input
                      id="home-consent"
                      type="checkbox"
                      name="consent"
                      checked={demoForm.consent}
                      onChange={handleDemoChange}
                      className={`w-4 h-4 mt-0.5 rounded transition-all ${
                        formErrors.consent ? 'border-red-500' : 'accent-white/20'
                      }`}
                    />
                    <label htmlFor="home-consent" className="text-xs text-white/50 cursor-pointer">
                      I agree to Legal Galaxy's Privacy Policy and consent to being contacted.
                    </label>
                  </div>
                  {formErrors.consent && (
                    <p className="text-red-400 text-xs">{formErrors.consent}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:bg-white/80 transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                  <p className="text-center text-[10px] text-white/50">
                    Responding within 1 business day · Indian compliance experts
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>

        {/* ===== CONTACT NUMBER ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center pb-8"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all flex-wrap justify-center">
            <div className="flex items-center gap-2 text-gray-400">
              <Phone className="w-4 h-4 text-purple-400" />
              <span className="text-sm"> For immediate assistance, call us at:</span>
            </div>
            <a 
              href="tel:+918800138008" 
              className="text-white font-semibold hover:text-purple-400 transition-colors text-sm"
            >
              +91 8800138008
            </a>
            <span className="text-xs text-gray-500 hidden sm:inline">|</span>
            <a 
              href="mailto:shilpi.kulshrestha@businezexcellence.com" 
              className="text-white font-semibold hover:text-purple-400 transition-colors text-sm"
            >
              shilpi.kulshrestha@businezexcellence.com
            </a>
          </div>
        </motion.div>

        {/* ===== WHY LEGAL GALAXY ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Why Choose Legal Galaxy?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Built by legal professionals for businesses that need practical, actionable compliance tools
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Shield, title: "Expert-Built Content", desc: "Created by corporate lawyers and privacy specialists with 10+ years of experience" },
              { icon: Zap, title: "Free Tools", desc: "Document generator, compliance scorecard, and 20+ learning modules — all free" },
              { icon: TrendingUp, title: "Updated Regularly", desc: "Content updated to reflect latest DPDPA rules, circulars, and enforcement actions" },
              { icon: Globe, title: "Global Coverage", desc: "Compare privacy laws across 70+ countries including GDPR, CCPA, and PIPL" },
              { icon: Users, title: "Practical Focus", desc: "Real-world case studies and templates you can actually use — not just theory" },
              { icon: CheckCircle, title: "No Signup Required", desc: "Start using every tool and reading every guide — no email required to begin" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-purple-500/30 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-3 border border-purple-500/30">
                    <Icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ===== GALAXY EXPLORER ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 justify-center">
            <Globe className="w-6 h-6 text-purple-400" />
            Explore the Galaxy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center max-w-4xl mx-auto">
            {[
              { icon: Shield, label: "Privacy", href: "/galaxy?category=privacy", color: "from-blue-500 to-blue-600" },
              { icon: Brain, label: "AI Governance", href: "/galaxy?category=ai", color: "from-purple-500 to-purple-600" },
              { icon: Lock, label: "Digital Trust", href: "/galaxy?category=trust", color: "from-emerald-500 to-emerald-600" },
            ].map((item, idx) => (
              <Link key={idx} href={item.href} className="group w-full max-w-xs">
                <div className="bg-white/10 border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-all hover:scale-105">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-medium">{item.label}</h3>
                  <p className="text-xs text-gray-400 mt-1">Explore →</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* ===== RESOURCES ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-purple-400" />
            Resources
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Globe, label: "Galaxy", href: "/galaxy" },
              { icon: FileText, label: "Insights", href: "/insight" },
              { icon: BookOpen, label: "Guides", href: "/resources/guides" },
              { icon: Map, label: "Map", href: "/map" },
            ].map((item, idx) => (
              <Link key={idx} href={item.href} className="bg-white/10 border border-white/20 rounded-xl p-4 text-center hover:bg-white/15 transition-all hover:scale-105">
                <item.icon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <span className="text-sm text-white">{item.label}</span>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* ===== CERTIFICATION (LIVE NOW) ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg font-semibold text-white">Certification</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">Build expertise. Get certified in Privacy & AI Governance.</p>
            <Link 
              href="/certificate-course"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/30 text-amber-300 hover:text-white transition-all text-sm font-medium"
            >
              <Award className="w-4 h-4" />
              Explore Certification →
            </Link>
          </div>
        </motion.div>

        {/* ===== ABOUT ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="bg-white/10 border border-white/20 rounded-2xl p-8 text-center mb-16"
        >
          <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">Built by Legal & Governance Professionals</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Legal Galaxy is a Privacy & AI Governance platform designed to help businesses 
            understand, assess, and implement responsible data and AI practices.
          </p>
          <Link href="/about" className="inline-block mt-4 text-purple-400 hover:text-purple-300 transition-colors text-sm">
            Learn More →
          </Link>
        </motion.div>

        {/* ===== FINAL CTA ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-xs font-medium text-purple-400 mb-4">
            <Rocket className="w-4 h-4" />
            Get Started
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Don't just use AI. <span className="text-purple-400">Govern it.</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-6">
            Join businesses across India building defensible DPDPA compliance programs. 
            Start with a free assessment, then explore our guides, tools, and expert services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/scorecard"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition-all inline-flex items-center justify-center gap-2 shadow-lg shadow-purple-500/30"
            >
              <Target className="w-5 h-5" />
              Take the Free Test →
            </Link>
            <Link
              href="/resources/guides/dpdpa-2023-complete-guide"
              className="px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <BookOpen className="w-5 h-5" />
              Read the Complete Guide
            </Link>
          </div>
        </motion.div>
      </div>

      {/* ===== LOCKED MESSAGE TOAST ===== */}
      {showLockMessage && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 bg-black/90 border border-yellow-500/30 text-white px-6 py-3 rounded-xl shadow-2xl backdrop-blur-xl">
          <Info className="w-5 h-5 text-yellow-400" />
          <span className="text-sm font-medium">{showLockMessage}</span>
        </div>
      )}
    </main>
  );
}