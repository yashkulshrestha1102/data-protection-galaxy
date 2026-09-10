"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Send, Loader2, CheckCircle, Users, Clock
} from 'lucide-react';

// ===== FIELD LABEL COMPONENT =====
const LabelWithAsterisk = ({ label, required }: { label: string; required?: boolean }) => (
  <label className="block text-xs text-white/60 mb-1">
    {label}
    {required && <span className="text-red-500 ml-0.5">*</span>}
  </label>
);

// ===== PROPS =====
interface ConsultantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// ===== MAIN COMPONENT =====
export const ConsultantModal = ({ isOpen, onClose }: ConsultantModalProps) => {
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
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [demoSubmitted, setDemoSubmitted] = useState(false);

  // ===== LOCK BODY SCROLL WHEN MODAL OPEN =====
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // ===== ESCAPE KEY TO CLOSE =====
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  // ===== VALIDATION =====
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

  // ===== FORM CHANGE =====
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setDemoForm({ ...demoForm, [name]: checked });
    } else {
      setDemoForm({ ...demoForm, [name]: value });
    }
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  // ===== FORM SUBMIT =====
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

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
          firstName: '', lastName: '', email: '', company: '',
          jobTitle: '', phone: '', companySize: '', industry: '',
          challenges: '', consent: false
        });
        setFormErrors({});
        // 4 seconds baad modal auto-close
        setTimeout(() => {
          setDemoSubmitted(false);
          onClose();
        }, 4000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit. Please try again.');
    }
    setIsSubmitting(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* MODAL BOX */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/20 rounded-2xl shadow-2xl"
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              
              {/* ===== LEFT SIDE - INFO ===== */}
              <div className="p-8 md:p-10 space-y-4 border-b lg:border-b-0 lg:border-r border-white/10">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Free Talk to Our <span className="text-white/80">DPDP Act Experts</span>
                </h2>
                <p className="text-white/60 text-sm">
                  Fill in your details and a compliance expert will be in touch within one business day.
                </p>
                <div className="flex flex-col gap-3 text-xs text-white/40 pt-2">
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

              {/* ===== RIGHT SIDE - FORM ===== */}
              <div className="p-6 md:p-8">
                {demoSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Request Submitted!</h3>
                    <p className="text-white/60 text-sm">Our team will contact you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    
                    {/* ROW 1: First + Last Name */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <LabelWithAsterisk label="First Name" required />
                        <input
                          type="text"
                          name="firstName"
                          value={demoForm.firstName}
                          onChange={handleChange}
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
                        <LabelWithAsterisk label="Last Name" required />
                        <input
                          type="text"
                          name="lastName"
                          value={demoForm.lastName}
                          onChange={handleChange}
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

                    {/* ROW 2: Email + Phone */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <LabelWithAsterisk label="Work Email" required />
                        <input
                          type="email"
                          name="email"
                          value={demoForm.email}
                          onChange={handleChange}
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
                        <LabelWithAsterisk label="Phone" required />
                        <input
                          type="tel"
                          name="phone"
                          value={demoForm.phone}
                          onChange={handleChange}
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

                    {/* ROW 3: Company + Job Title */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <LabelWithAsterisk label="Company" required />
                        <input
                          type="text"
                          name="company"
                          value={demoForm.company}
                          onChange={handleChange}
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
                        <LabelWithAsterisk label="Job Title" />
                        <input
                          type="text"
                          name="jobTitle"
                          value={demoForm.jobTitle}
                          onChange={handleChange}
                          placeholder="e.g. Privacy Officer"
                          className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/30"
                        />
                      </div>
                    </div>

                    {/* ROW 4: Company Size + Industry */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <LabelWithAsterisk label="Company Size" />
                        <select
                          name="companySize"
                          value={demoForm.companySize}
                          onChange={handleChange}
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
                        <LabelWithAsterisk label="Industry" required />
                        <select
                          name="industry"
                          value={demoForm.industry}
                          onChange={handleChange}
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

                    {/* ROW 5: Challenges */}
                    <div>
                      <LabelWithAsterisk label="What are your biggest DPDP compliance challenges?" />
                      <textarea
                        name="challenges"
                        value={demoForm.challenges}
                        onChange={handleChange}
                        placeholder="e.g. Need to implement consent management..."
                        rows={3}
                        className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/30 resize-none"
                      />
                    </div>

                    {/* ROW 6: Consent */}
                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={demoForm.consent}
                        onChange={handleChange}
                        className={`w-4 h-4 mt-0.5 rounded transition-all ${
                          formErrors.consent ? 'border-red-500' : 'accent-white/20'
                        }`}
                      />
                      <label className="text-xs text-white/40">
                        I agree to Legal Galaxy's Privacy Policy and consent to being contacted.
                      </label>
                    </div>
                    {formErrors.consent && (
                      <p className="text-red-400 text-xs">{formErrors.consent}</p>
                    )}

                    {/* ROW 7: Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:bg-white/80 transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Submit Request
                        </>
                      )}
                    </button>
                    <p className="text-center text-[10px] text-white/20">
                      Responding within 1 business day · Indian compliance experts
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};