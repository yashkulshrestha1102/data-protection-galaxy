"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Mail, Phone, MapPin, Send, MessageSquare,
  CheckCircle, Loader2, ExternalLink, Sparkles, Globe,
  Shield, Brain, Scale, FileText, Users, Award, AlertCircle,
  Clock, Building2, Briefcase, ChevronDown, ChevronUp,
  Lock, Star, Zap, Headphones, Calendar
} from 'lucide-react';
import { FaLinkedin, FaWhatsapp, FaTwitter } from 'react-icons/fa';

// ============================================================
// ===== FAQ DATA =====
// ============================================================
const faqs = [
  {
    q: 'How quickly will I hear back after submitting the form?',
    a: 'Our team responds within 1 business day. For urgent requests, use the WhatsApp button for a faster response.'
  },
  {
    q: 'Is the first consultation really free?',
    a: 'Yes. We offer a complimentary 15-minute consultation to understand your requirements and suggest the right approach. No strings attached.'
  },
  {
    q: 'What information should I include in the requirement field?',
    a: 'Share your industry, the compliance framework you need help with (DPDP, GDPR, AI governance), and any specific challenges. The more context, the better we can prepare.'
  },
  {
    q: 'Do you work with startups or only enterprises?',
    a: 'We work with organisations of all sizes — from early-stage startups to large enterprises. Our solutions scale to your needs and budget.'
  },
  {
    q: 'Will my information be kept confidential?',
    a: 'Absolutely. All information shared with us is protected under strict confidentiality. We never share your data with third parties without your explicit consent.'
  }
];

// ============================================================
// ===== INTEREST OPTIONS =====
// ============================================================
const interestOptions = [
  { id: 'dpdp', label: 'DPDP Compliance', icon: Scale },
  { id: 'gdpr', label: 'GDPR Compliance', icon: Globe },
  { id: 'ai-governance', label: 'AI Governance', icon: Brain },
  { id: 'privacy-policy', label: 'Privacy Policy', icon: FileText },
  { id: 'dpia', label: 'DPIA & Audits', icon: Shield },
  { id: 'training', label: 'Training & Awareness', icon: Users },
  { id: 'certification', label: 'Certification Support', icon: Award },
  { id: 'other', label: 'Something Else', icon: MessageSquare },
];

// ============================================================
// ===== MAIN COMPONENT =====
// ============================================================
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    designation: '',
    requirement: '',
    interests: [] as string[],
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [stars, setStars] = useState<React.ReactNode[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // ===== STAR FIELD =====
  useEffect(() => {
    const starElements = [];
    for (let i = 0; i < 60; i++) {
      starElements.push(
        <div
          key={i}
          className="absolute bg-white rounded-full animate-twinkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 4 + 2}s`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.5 + 0.1,
            width: `${Math.random() * 2 + 0.5}px`,
            height: `${Math.random() * 2 + 0.5}px`,
          }}
        />
      );
    }
    setStars(starElements);
  }, []);

  // ===== VALIDATION =====
  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) errors.name = 'Full name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(formData.phone.replace(/\s/g, ''))) {
      errors.phone = 'Please enter a valid phone number';
    }
    if (!formData.requirement.trim()) {
      errors.requirement = 'Please tell us about your requirement';
    } else if (formData.requirement.trim().length < 20) {
      errors.requirement = 'Please provide at least 20 characters';
    }
    if (formData.interests.length === 0) {
      errors.interests = 'Please select at least one area of interest';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // ===== INTEREST TOGGLE =====
  const handleInterestToggle = (id: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(id)
        ? prev.interests.filter(i => i !== id)
        : [...prev.interests, id]
    }));
    if (formErrors.interests) {
      setFormErrors({ ...formErrors, interests: '' });
    }
  };

  // ===== HANDLE CHANGE =====
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
    if (error) setError(null);
  };

  // ===== SUBMIT =====
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      // Scroll to first error
      const firstError = document.querySelector('.border-red-500');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || 'Not Provided',
        orgName: formData.company || 'Not Provided',
        designation: formData.designation || 'Not Provided',
        requirement: formData.requirement,
        interests: formData.interests,
        source: 'contact'
      };

      const response = await fetch('/api/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit');
      }

      setIsSubmitted(true);
      setFormData({
        name: '', email: '', phone: '', company: '',
        designation: '', requirement: '', interests: []
      });
      setFormErrors({});
      setTimeout(() => setIsSubmitted(false), 6000);
    } catch (err) {
      console.error('Error:', err);
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen text-white px-4 relative overflow-hidden pt-28 md:pt-32 pb-16">
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/home1.jpeg')" }}>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        {stars}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ===== BACK BUTTON ===== */}
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* ===== HERO HEADER ===== */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-sm font-medium text-purple-300 mb-4">
            <Headphones className="w-4 h-4" />
            Expert Consultation
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
            Talk to a <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Privacy & AI</span> Expert
          </h1>
          <p className="text-gray-200 text-lg max-w-3xl mx-auto drop-shadow-lg leading-relaxed">
            Get expert guidance on DPDP, GDPR, AI governance, and data protection. 
            Fill in the form below and our team will reach out within <strong className="text-white">1 business day</strong>.
          </p>
        </motion.div>

        {/* ===== MAIN GRID ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          
          {/* ===== LEFT: FORM (3 cols) ===== */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md p-6 md:p-8 shadow-2xl"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-xl bg-green-500/10 border border-green-500/30 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Request Received! 🎉</h3>
                <p className="text-gray-300 mb-4">
                  Thank you for reaching out. Our team will connect with you within <strong>1 business day</strong>.
                </p>
                <p className="text-sm text-gray-400">
                  A confirmation email has been sent to your inbox.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Error */}
                {error && (
                  <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 text-sm flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    {error}
                  </div>
                )}

                {/* ===== STEP 1: INTERESTS ===== */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-purple-500/30 flex items-center justify-center text-xs font-bold text-purple-300">
                      1
                    </div>
                    <label className="text-sm font-semibold text-white">
                      What do you need help with? <span className="text-red-500">*</span>
                    </label>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {interestOptions.map((option) => {
                      const Icon = option.icon;
                      const isSelected = formData.interests.includes(option.id);
                      return (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => handleInterestToggle(option.id)}
                          className={`flex flex-col items-center gap-1.5 px-2 py-3 rounded-xl text-xs font-medium transition-all border ${
                            isSelected
                              ? 'bg-purple-500/30 border-purple-400/60 text-white shadow-lg shadow-purple-500/20 scale-105'
                              : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          <span className="text-center leading-tight">{option.label}</span>
                        </button>
                      );
                    })}
                  </div>
                  {formErrors.interests && (
                    <p className="text-red-400 text-xs mt-2">{formErrors.interests}</p>
                  )}
                </div>

                {/* Divider */}
                <div className="border-t border-white/10" />

                {/* ===== STEP 2: PERSONAL INFO ===== */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-purple-500/30 flex items-center justify-center text-xs font-bold text-purple-300">
                      2
                    </div>
                    <label className="text-sm font-semibold text-white">
                      Your Details
                    </label>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs text-gray-400 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/60 transition-all ${
                          formErrors.name ? 'border-red-500/60' : 'border-white/15'
                        }`}
                      />
                      {formErrors.name && (
                        <p className="text-red-400 text-xs mt-1">{formErrors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs text-gray-400 mb-1.5">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/60 transition-all ${
                          formErrors.email ? 'border-red-500/60' : 'border-white/15'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-red-400 text-xs mt-1">{formErrors.email}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs text-gray-400 mb-1.5">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/60 transition-all ${
                          formErrors.phone ? 'border-red-500/60' : 'border-white/15'
                        }`}
                      />
                      {formErrors.phone && (
                        <p className="text-red-400 text-xs mt-1">{formErrors.phone}</p>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs text-gray-400 mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/60 transition-all"
                      />
                    </div>

                    {/* Designation */}
                    <div className="md:col-span-2">
                      <label className="block text-xs text-gray-400 mb-1.5">
                        Designation
                      </label>
                      <input
                        type="text"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        placeholder="e.g., Privacy Officer, CTO, Legal Head"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/60 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10" />

                {/* ===== STEP 3: REQUIREMENT ===== */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-purple-500/30 flex items-center justify-center text-xs font-bold text-purple-300">
                      3
                    </div>
                    <label className="text-sm font-semibold text-white">
                      Tell us about your requirement <span className="text-red-500">*</span>
                    </label>
                  </div>
                  <textarea
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Share your industry, compliance framework (DPDP, GDPR, AI governance), specific challenges, and timeline. The more context, the better we can prepare for you."
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/60 transition-all resize-none ${
                      formErrors.requirement ? 'border-red-500/60' : 'border-white/15'
                    }`}
                  />
                  {formErrors.requirement && (
                    <p className="text-red-400 text-xs mt-1">{formErrors.requirement}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1.5 text-right">
                    {formData.requirement.length} characters
                  </p>
                </div>

                {/* ===== SUBMIT BUTTON ===== */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-base hover:scale-[1.02] transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-500/30 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending your request...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Request
                    </>
                  )}
                </button>

                {/* Trust signal below button */}
                <div className="flex items-center justify-center gap-4 text-xs text-gray-500 pt-1">
                  <span className="flex items-center gap-1.5">
                    <Lock className="w-3 h-3" />
                    Secure & Confidential
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    1 Business Day Response
                  </span>
                </div>
              </form>
            )}
          </motion.div>

          {/* ===== RIGHT: SIDEBAR (2 cols) ===== */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            
            {/* ===== WHY CHOOSE US ===== */}
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl backdrop-blur-md p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                Why Work With Us
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Expert Guidance</p>
                    <p className="text-gray-400 text-xs mt-0.5">DPDP, GDPR, and AI governance specialists</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Custom Roadmap</p>
                    <p className="text-gray-400 text-xs mt-0.5">Tailored compliance plan for your organisation</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Free Consultation</p>
                    <p className="text-gray-400 text-xs mt-0.5">15-minute complimentary expert session</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Document Review</p>
                    <p className="text-gray-400 text-xs mt-0.5">Get your policies reviewed by experts</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* ===== DIRECT CONTACT ===== */}
            <div className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-purple-400" />
                Direct Contact
              </h3>
              <div className="space-y-4">
                <a 
                  href="mailto:shilpi.kulshrestha@businezexcellence.com"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/30 transition-all">
                    <Mail className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-400">Email</p>
                    <p className="text-sm text-white group-hover:text-purple-400 transition-colors truncate">
                      shilpi.kulshrestha@businezexcellence.com
                    </p>
                  </div>
                </a>

                <a 
                  href="tel:+918800138008"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/30 transition-all">
                    <Phone className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Phone</p>
                    <p className="text-sm text-white group-hover:text-purple-400 transition-colors">
                      +91 8800138008
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Location</p>
                    <p className="text-sm text-white">India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== WHATSAPP CTA ===== */}
            <a
              href="https://wa.me/918800138008"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-5 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-full bg-green-500/30 flex items-center justify-center">
                <FaWhatsapp className="w-6 h-6 text-green-400" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-white">Chat on WhatsApp</p>
                <p className="text-xs text-gray-300">Quick response within minutes</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 ml-auto group-hover:text-white transition-colors" />
            </a>

            {/* ===== SOCIAL PROOF ===== */}
            <div className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md p-6">
              <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                Trusted By
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Startups', 'SaaS', 'FinTech', 'HealthTech', 'E-Commerce', 'Enterprises'].map((tag) => (
                  <span 
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-purple-500/30 transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        </div>

        {/* ===== FAQ SECTION ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-300">
              Quick answers to common questions before you reach out
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white/10 border border-white/20 rounded-xl backdrop-blur-md overflow-hidden transition-all hover:bg-white/15"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-base font-medium text-white pr-4">{faq.q}</span>
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                    openFaq === index ? 'bg-purple-500/30 rotate-180' : 'bg-white/10'
                  }`}>
                    {openFaq === index ? (
                      <ChevronUp className="w-4 h-4 text-purple-300" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-4 border-t border-white/10"
                  >
                    <p className="text-gray-300 text-sm leading-relaxed pt-4">{faq.a}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* ===== BOTTOM CTA ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-6 py-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-purple-400" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-white">Prefer a live conversation?</p>
                <p className="text-xs text-gray-400">Call us directly for immediate assistance</p>
              </div>
            </div>
            <a 
              href="tel:+918800138008"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium hover:scale-105 transition-all shadow-lg shadow-purple-500/30"
            >
              Call +91 8800138008
            </a>
          </div>
        </motion.div>

      </div>
    </main>
  );
}