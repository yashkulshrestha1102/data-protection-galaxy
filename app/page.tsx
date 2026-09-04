"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Shield, Sparkles, Target, BookOpen, FileText, 
  Map, Globe, Award, Users, Rocket, Brain, 
  Scale, Lock, Zap, ArrowRight, Calendar, Clock, Info
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [stars, setStars] = useState<React.ReactNode[]>([]);
  const [showLockMessage, setShowLockMessage] = useState<string | null>(null);

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

  // ===== DEMO FORM SUBMIT HANDLER =====
  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
    } else {
      setDemoForm({ ...demoForm, [name]: value });
    }
  };

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
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-xs font-medium text-white-400 mb-4">
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
            Take our quick assessment and discover your organisation's DPDPA readiness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/scorecard"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition-all flex items-center gap-2 shadow-lg shadow-purple-500/30"
            >
              <Target className="w-5 h-5" />
              TAKE THE TEST →
            </Link>
            <Link
              href="/galaxy"
              className="px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all flex items-center gap-2 backdrop-blur-sm"
            >
              <Globe className="w-5 h-5" />
              EXPLORE THE GALAXY →
            </Link>
          </div>
        </motion.div>

        {/* ===== SECTION 3: GALAXY EXPLORER ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
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

        {/* ===== SECTION 4: RESOURCES ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
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

        {/* ===== SECTION 5: TOOLS + CERTIFICATION ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {/* Generator */}
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-purple-400" />
              <h3 className="text-lg font-semibold text-white">Generator</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">Generate privacy and AI governance documents instantly.</p>
            <Link href="/generator" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium">
              Explore Generator →
            </Link>
          </div>

          {/* Certification (LOCKED) */}
          <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="relative">
                <Award className="w-5 h-5 text-amber-400" />
                <Lock className="w-3 h-3 text-yellow-500 absolute -top-1 -right-1" />
              </div>
              <h3 className="text-lg font-semibold text-white">Certification</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">Build expertise. Get certified in Privacy & AI Governance.</p>
            <button 
              onClick={() => handleLockedClick("Certification")}
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors text-sm font-medium cursor-not-allowed"
            >
              <Lock className="w-4 h-4" />
              Explore Certification (Coming Soon) →
            </button>
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-white/70">
                <Calendar className="w-4 h-4" />
                Book a Demo
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Talk to Our <span className="text-white/80">DPDP Act Experts</span>
              </h2>
              <p className="text-white/60 text-sm">
                Fill in your details and a compliance expert will be in touch within one business day.
              </p>
              <div className="flex flex-col gap-2 text-xs text-white/40">
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

            {/* Right - Form with White Text */}
            <div className="bg-black/50 border border-white/10 rounded-xl p-6">
              {demoSubmitted ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Demo Request Submitted!</h3>
                  <p className="text-white/60 text-sm">Our team will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleDemoSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-white/60 mb-1">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={demoForm.firstName}
                        onChange={handleDemoChange}
                        placeholder="Your first name"
                        className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/30"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/60 mb-1">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={demoForm.lastName}
                        onChange={handleDemoChange}
                        placeholder="Your last name"
                        className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/30"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-white/60 mb-1">Work Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={demoForm.email}
                      onChange={handleDemoChange}
                      placeholder="you@company.com"
                      className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/30"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-white/60 mb-1">Company *</label>
                      <input
                        type="text"
                        name="company"
                        value={demoForm.company}
                        onChange={handleDemoChange}
                        placeholder="Your company name"
                        className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/30"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/60 mb-1">Job Title</label>
                      <input
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
                      <label className="block text-xs text-white/60 mb-1">Phone (India) *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={demoForm.phone}
                        onChange={handleDemoChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/30"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/60 mb-1">Company Size *</label>
                      <select
                        name="companySize"
                        value={demoForm.companySize}
                        onChange={handleDemoChange}
                        className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-white/30"
                        required
                      >
                        <option className="bg-black text-white" value="">Select company size</option>
                        <option className="bg-black text-white" value="1-50">1–50 employees</option>
                        <option className="bg-black text-white" value="51-200">51–200 employees</option>
                        <option className="bg-black text-white" value="201-1000">201–1,000 employees</option>
                        <option className="bg-black text-white" value="1001-5000">1,001–5,000 employees</option>
                        <option className="bg-black text-white" value="5000+">5,000+ employees</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-white/60 mb-1">Industry *</label>
                    <select
                      name="industry"
                      value={demoForm.industry}
                      onChange={handleDemoChange}
                      className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-white/30"
                      required
                    >
                      <option className="bg-black text-white" value="">Select your industry</option>
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
                  </div>
                  <div>
                    <label className="block text-xs text-white/60 mb-1">What are your biggest DPDP compliance challenges?</label>
                    <textarea
                      name="challenges"
                      value={demoForm.challenges}
                      onChange={handleDemoChange}
                      placeholder="e.g. Need to implement consent management for multiple languages..."
                      rows={2}
                      className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/30 resize-none"
                    />
                  </div>
                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={demoForm.consent}
                      onChange={handleDemoChange}
                      className="w-4 h-4 mt-0.5 accent-white/20 rounded"
                      required
                    />
                    <label className="text-xs text-white/40">
                      I agree to Legal Galaxy's Privacy Policy and consent to being contacted about my enquiry.
                    </label>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:bg-white/80 transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                  <p className="text-center text-[10px] text-white/20">
                    Responding within 1 business day · Indian compliance experts
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>

        {/* ===== SECTION 6: ABOUT ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
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

        {/* ===== SECTION 7: FINAL CTA ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-xs font-medium text-purple-400 mb-4">
            <Rocket className="w-4 h-4" />
            Get Started
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Don't just use AI. <span className="text-purple-400">Govern it.</span>
          </h2>
          <Link
            href="/scorecard"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition-all inline-flex items-center gap-2 shadow-lg shadow-purple-500/30"
          >
            <Target className="w-5 h-5" />
            Take the Privacy & AI Governance Test →
          </Link>
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