"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Send, Loader2, CheckCircle, Users, Clock
} from 'lucide-react';
import { ConsentCheckbox } from "@/components/ui/ConsentCheckbox"; // ✅ Imported Standard Checkbox

// ===== FIELD LABEL COMPONENT =====
const LabelWithAsterisk = ({ label, required, htmlFor }: { label: string; required?: boolean; htmlFor?: string }) => (
  <label htmlFor={htmlFor} className="block text-xs text-gray-400 mb-1 font-medium">
    {label}
    {required && <span className="text-cyan-400 ml-0.5">*</span>}
  </label>
);

interface ConsultantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultantModal = ({ isOpen, onClose }: ConsultantModalProps) => {
  const [demoForm, setDemoForm] = useState({
    firstName: '', lastName: '', email: '', company: '',
    jobTitle: '', phone: '', companySize: '', industry: '', challenges: ''
  });
  
  const [consent, setConsent] = useState(false); // ✅ Separate State for Consent
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [demoSubmitted, setDemoSubmitted] = useState(false);

  // ===== LOCK BODY SCROLL =====
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // ===== ESCAPE KEY TO CLOSE =====
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
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
    
    // ✅ Consent validation
    if (!consent) errors.consent = 'Please agree to the Consent Notice to proceed.';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDemoForm({ ...demoForm, [name]: value });
    if (formErrors[name]) setFormErrors({ ...formErrors, [name]: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          ...demoForm, 
          source: 'demo', 
          consent: consent, 
          consentTimestamp: new Date().toISOString() 
        }),
      });

      const data = await response.json();
      if (data.success) {
        setDemoSubmitted(true);
        setDemoForm({ firstName: '', lastName: '', email: '', company: '', jobTitle: '', phone: '', companySize: '', industry: '', challenges: '' });
        setConsent(false);
        setFormErrors({});
        setTimeout(() => { setDemoSubmitted(false); onClose(); }, 4000);
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
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-black/60 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-2xl flex flex-col md:flex-row"
          >
            {/* CLOSE BUTTON */}
            <button onClick={onClose} className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all">
              <X className="w-4 h-4" />
            </button>

            {/* LEFT SIDE - INFO */}
            <div className="w-full md:w-[40%] p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-center bg-black/60">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Free Talk to Our <br/><span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">DPDP Act Experts</span>
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Fill in your details and a compliance expert will be in touch within one business day.
              </p>
              <div className="flex flex-col gap-3 text-xs text-gray-300">
                <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-cyan-400" /> Responding within 1 business day</span>
                <span className="flex items-center gap-2"><Users className="w-4 h-4 text-cyan-400" /> Indian compliance experts</span>
              </div>
            </div>

            {/* RIGHT SIDE - FORM */}
            <div className="w-full md:w-[60%] p-6 md:p-8">
              {demoSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Request Submitted!</h3>
                  <p className="text-gray-400 text-sm">Our team will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  
                  {/* ROW 1 */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <LabelWithAsterisk label="First Name" required htmlFor="modal-firstName" />
                      <input id="modal-firstName" type="text" name="firstName" value={demoForm.firstName} onChange={handleChange} placeholder="First name" className={`w-full px-3 py-2.5 rounded-lg bg-black/30 border text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400/50 transition-all ${formErrors.firstName ? 'border-red-500' : 'border-white/10'}`} />
                      {formErrors.firstName && <p className="text-red-400 text-[10px] mt-1">{formErrors.firstName}</p>}
                    </div>
                    <div>
                      <LabelWithAsterisk label="Last Name" required htmlFor="modal-lastName" />
                      <input id="modal-lastName" type="text" name="lastName" value={demoForm.lastName} onChange={handleChange} placeholder="Last name" className={`w-full px-3 py-2.5 rounded-lg bg-black/30 border text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400/50 transition-all ${formErrors.lastName ? 'border-red-500' : 'border-white/10'}`} />
                      {formErrors.lastName && <p className="text-red-400 text-[10px] mt-1">{formErrors.lastName}</p>}
                    </div>
                  </div>

                  {/* ROW 2 */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <LabelWithAsterisk label="Work Email" required htmlFor="modal-email" />
                      <input id="modal-email" type="email" name="email" value={demoForm.email} onChange={handleChange} placeholder="you@company.com" className={`w-full px-3 py-2.5 rounded-lg bg-black/30 border text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400/50 transition-all ${formErrors.email ? 'border-red-500' : 'border-white/10'}`} />
                      {formErrors.email && <p className="text-red-400 text-[10px] mt-1">{formErrors.email}</p>}
                    </div>
                    <div>
                      <LabelWithAsterisk label="Phone" required htmlFor="modal-phone" />
                      <input id="modal-phone" type="tel" name="phone" value={demoForm.phone} onChange={handleChange} placeholder="+91 98765 43210" className={`w-full px-3 py-2.5 rounded-lg bg-black/30 border text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400/50 transition-all ${formErrors.phone ? 'border-red-500' : 'border-white/10'}`} />
                      {formErrors.phone && <p className="text-red-400 text-[10px] mt-1">{formErrors.phone}</p>}
                    </div>
                  </div>

                  {/* ROW 3 */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <LabelWithAsterisk label="Company" required htmlFor="modal-company" />
                      <input id="modal-company" type="text" name="company" value={demoForm.company} onChange={handleChange} placeholder="Your company" className={`w-full px-3 py-2.5 rounded-lg bg-black/30 border text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400/50 transition-all ${formErrors.company ? 'border-red-500' : 'border-white/10'}`} />
                      {formErrors.company && <p className="text-red-400 text-[10px] mt-1">{formErrors.company}</p>}
                    </div>
                    <div>
                      <LabelWithAsterisk label="Job Title" htmlFor="modal-jobTitle" />
                      <input id="modal-jobTitle" type="text" name="jobTitle" value={demoForm.jobTitle} onChange={handleChange} placeholder="e.g. Privacy Officer" className="w-full px-3 py-2.5 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400/50" />
                    </div>
                  </div>

                  {/* ROW 4 */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <LabelWithAsterisk label="Company Size" htmlFor="modal-companySize" />
                      <select id="modal-companySize" name="companySize" value={demoForm.companySize} onChange={handleChange} className="w-full px-3 py-2.5 rounded-lg bg-black/30 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400/50 appearance-none">
                        <option className="bg-black text-white" value="">Select size</option>
                        <option className="bg-black text-white" value="1-50">1–50 employees</option>
                        <option className="bg-black text-white" value="51-200">51–200 employees</option>
                        <option className="bg-black text-white" value="201-1000">201–1,000 employees</option>
                        <option className="bg-black text-white" value="1001-5000">1,001–5,000 employees</option>
                        <option className="bg-black text-white" value="5000+">5,000+ employees</option>
                      </select>
                    </div>
                    <div>
                      <LabelWithAsterisk label="Industry" required htmlFor="modal-industry" />
                      <select id="modal-industry" name="industry" value={demoForm.industry} onChange={handleChange} className={`w-full px-3 py-2.5 rounded-lg bg-black/30 border text-white text-sm focus:outline-none focus:border-cyan-400/50 transition-all appearance-none ${formErrors.industry ? 'border-red-500' : 'border-white/10'}`}>
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
                      {formErrors.industry && <p className="text-red-400 text-[10px] mt-1">{formErrors.industry}</p>}
                    </div>
                  </div>

                  {/* ROW 5 */}
                  <div>
                    <LabelWithAsterisk label="What are your biggest DPDP compliance challenges?" htmlFor="modal-challenges" />
                    <textarea id="modal-challenges" name="challenges" value={demoForm.challenges} onChange={handleChange} placeholder="e.g. Need to implement consent management..." rows={2} className="w-full px-3 py-2.5 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400/50 resize-none" />
                  </div>

                  {/* ROW 6: ✅ STANDARD CONSENT CHECKBOX */}
                  <div className="pt-1">
                    <ConsentCheckbox
                      id="modal-consent"
                      checked={consent}
                      onChange={(val) => {
                        setConsent(val);
                        if (formErrors.consent) setFormErrors({ ...formErrors, consent: '' });
                      }}
                      error={formErrors.consent}
                    />
                  </div>

                  {/* ROW 7: Submit */}
                  <button type="submit" disabled={isSubmitting} className="w-full mt-2 py-3 rounded-xl bg-cyan-400 text-white font-bold hover:bg-cyan-300 transition-all text-sm disabled:opacity-50 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                    {isSubmitting ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
                    ) : (
                      <><Send className="w-4 h-4" /> Submit Request</>
                    )}
                  </button>
                  <p className="text-center text-[10px] text-gray-500 mt-2">
                    Responding within 1 business day · Indian compliance experts
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};