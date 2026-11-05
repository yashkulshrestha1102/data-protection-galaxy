"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
  Building2,
  Globe2,
  Sparkles
} from "lucide-react";
import { ConsentCheckbox } from "@/components/ui/ConsentCheckbox";

const INTERESTS = [
  "DPDP Compliance",
  "GDPR Compliance",
  "AI Governance",
  "Privacy Policy",
  "DPIA & Audits",
  "Training & Awareness",
  "Certification Support",
];

const faqs = [
  {
    q: "What can Legal Galaxy help us with?",
    a: "We help organizations operationalize privacy and AI governance through DPDP and GDPR compliance, privacy policies, DPIAs, audits, training, governance frameworks, and certification support.",
  },
  {
    q: "Is this suitable for startups as well as enterprises?",
    a: "Yes. The engagement can be structured around your organization's current maturity, data footprint, team size, regulatory exposure, and immediate compliance priorities.",
  },
  {
    q: "Can you help with AI governance?",
    a: "Yes. AI governance can cover AI inventories, risk assessment, governance controls, responsible AI practices, documentation, accountability structures, and operational workflows.",
  },
  {
    q: "How quickly can we start?",
    a: "Once we understand your requirement, we can recommend the appropriate next step and scope. For urgent requirements, mention the timeline in the message field.",
  },
];

function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[480px]">
      <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-[#00B4D8]/20 to-[#0077B6]/20 opacity-30 blur-2xl" />
      
      <div className="relative flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-[#0a1a2f]/70 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#00B4D8] to-[#0077B6] shadow-lg">
              <ShieldCheck className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Privacy Operations</p>
              <p className="text-xs text-[#48CAE4]">System Online</p>
            </div>
          </div>
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        </div>

        <div className="h-px w-full bg-white/10 my-2" />

        <div className="space-y-3">
          <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-3 transition hover:bg-white/10">
            <MapPin className="h-4 w-4 text-[#00B4D8]" />
            <span className="text-sm text-gray-300">Data Localization Check: Passed</span>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-3 transition hover:bg-white/10">
            <Globe2 className="h-4 w-4 text-[#00B4D8]" />
            <span className="text-sm text-gray-300">Cross-Border Transfer Ready</span>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-3 transition hover:bg-white/10">
            <Building2 className="h-4 w-4 text-[#00B4D8]" />
            <span className="text-sm text-gray-300">SDF Obligations Mapped</span>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-[#00B4D8]/30 bg-[#030814]/80 p-4">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#00B4D8]/20">
              <MessageSquare className="h-4 w-4 text-[#00B4D8]" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">Need a DPIA for our new AI model.</p>
              <p className="mt-1 text-xs text-gray-400">Shilpi is reviewing your request...</p>
            </div>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between rounded-xl bg-[#00B4D8]/10 p-3">
          <span className="text-xs font-medium text-[#48CAE4]">Reply within 1 business day</span>
          <Clock className="h-4 w-4 text-[#00B4D8]" />
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, placeholder, type = "text", required = false }: { label: string; value: string; onChange: (value: string) => void; placeholder: string; type?: string; required?: boolean; }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-gray-300">
        {label} {required && <span className="text-[#00B4D8]">*</span>}
      </span>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-[#030814]/60 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-500 transition duration-200 focus:border-[#00B4D8] focus:ring-1 focus:ring-[#00B4D8]/50"
      />
    </label>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", designation: "", requirement: "" });
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [consent, setConsent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const updateField = (key: keyof typeof form, value: string) => setForm((prev) => ({ ...prev, [key]: value }));
  const toggleInterest = (interest: string) => setSelectedInterests((prev) => prev.includes(interest) ? prev.filter((item) => item !== interest) : [...prev, interest]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(""); setError("");

    if (!form.name.trim()) return setError("Please enter your name.");
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return setError("Please enter a valid email address.");
    if (!form.phone.trim() || !/^\+?[0-9]{10,15}$/.test(form.phone.replace(/[\s-]/g, ""))) return setError("Please enter a valid phone number.");
    if (!form.requirement.trim()) return setError("Please tell us briefly about your requirement.");
    if (selectedInterests.length === 0) return setError("Please select at least one area you need help with.");
    if (!consent) return setError("Please agree to the Consent Notice and Privacy Policy to proceed.");

    try {
      setLoading(true);
      const response = await fetch("/api/lead-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name, email: form.email, phone: form.phone, company: form.company,
          orgName: form.company, designation: form.designation, requirement: form.requirement,
          interests: selectedInterests, source: "contact", consent: consent, consentTimestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) throw new Error("Unable to submit the form.");
      setSuccess("Thank you. Your requirement has been received. Our team will get in touch shortly.");
      setForm({ name: "", email: "", phone: "", company: "", designation: "", requirement: "" });
      setSelectedInterests([]); setConsent(false);
    } catch {
      setError("Something went wrong while submitting. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen overflow-hidden text-white selection:bg-[#00B4D8]/30 relative">
      
      {/* ===== HOMEPAGE BACKGROUND IMAGE ===== */}
      <div className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/home1.jpeg')" }}>
        {/* Dark overlay taaki image dikhe par text clear padhe */}
        <div className="absolute inset-0 bg-black/75 backdrop-blur-[3px]" />
      </div>

      {/* Background Ambience (Glows) */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-[10%] top-0 h-[500px] w-[500px] rounded-full bg-[#00B4D8]/10 blur-[150px]" />
        <div className="absolute right-0 top-[20%] h-[400px] w-[400px] rounded-full bg-[#0077B6]/10 blur-[120px]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative mx-auto max-w-7xl px-5 pb-16 pt-[140px] sm:px-8 lg:px-10 lg:pb-24 lg:pt-[160px]">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00B4D8]/30 bg-[#00B4D8]/10 px-4 py-1.5 text-sm font-medium text-[#00B4D8] backdrop-blur-md">
              <Sparkles size={16} />
              Let's talk about your compliance goals
            </div>
            
            <h1 className="text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-[4.5rem]">
              Let's make <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[#00B4D8] to-[#48CAE4] bg-clip-text text-transparent">privacy operational.</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-300">
              Tell us where your organization is today. We'll help you identify the right compliance, privacy, and AI governance path without turning it into another complicated project.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 max-w-xl">
              <a href="mailto:shilpi.kulshrestha@businezexcellence.com" className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0a1a2f]/60 p-4 backdrop-blur-md transition hover:border-[#00B4D8]/40 hover:bg-[#0a1a2f]/90">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#030814] border border-white/10 group-hover:border-[#00B4D8]/50">
                  <Mail className="h-5 w-5 text-[#00B4D8]" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Email</p>
                  <p className="text-sm font-medium text-white mt-0.5">Drop us a line</p>
                </div>
              </a>

              <a href="tel:+918800138008" className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0a1a2f]/60 p-4 backdrop-blur-md transition hover:border-[#00B4D8]/40 hover:bg-[#0a1a2f]/90">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#030814] border border-white/10 group-hover:border-[#00B4D8]/50">
                  <Phone className="h-5 w-5 text-[#00B4D8]" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Call Us</p>
                  <p className="text-sm font-medium text-white mt-0.5">+91 8800138008</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative z-10 lg:ml-auto">
            <DashboardMockup />
          </motion.div>
        </div>
      </section>

      {/* MAIN FORM SECTION */}
      <section id="contact-form" className="relative border-t border-white/10 bg-black/40 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
            
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Tell us what needs solving.
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-gray-300">
                Whether you're preparing for DPDP, strengthening your privacy program, or building an AI governance framework, give us enough context to understand the problem.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00B4D8]/20">
                    <ShieldCheck className="h-6 w-6 text-[#00B4D8]" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white">Privacy-conscious approach</p>
                    <p className="mt-1 text-sm leading-relaxed text-gray-300">Share only what is necessary to explain your requirement. Your data stays secure.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00B4D8]/20">
                    <Clock className="h-6 w-6 text-[#00B4D8]" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white">Fast turnaround</p>
                    <p className="mt-1 text-sm leading-relaxed text-gray-300">We usually respond to all business enquiries within 1 business day.</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.form 
              onSubmit={handleSubmit} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5 }} 
              className="rounded-3xl border border-white/10 bg-[#0a1a2f]/80 p-6 shadow-2xl backdrop-blur-xl sm:p-10"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Full name" value={form.name} onChange={(v) => updateField("name", v)} placeholder="John Doe" required />
                <Field label="Work email" value={form.email} onChange={(v) => updateField("email", v)} placeholder="john@company.com" type="email" required />
                <Field label="Phone number" value={form.phone} onChange={(v) => updateField("phone", v)} placeholder="+91 98765 43210" type="tel" required />
                <Field label="Company name" value={form.company} onChange={(v) => updateField("company", v)} placeholder="Acme Corp" />
              </div>

              <div className="mt-6">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-gray-300">
                    How can we help? <span className="text-[#00B4D8]">*</span>
                  </span>
                  <textarea
                    value={form.requirement}
                    required
                    onChange={(e) => updateField("requirement", e.target.value)}
                    rows={4}
                    placeholder="Tell us about your current requirement or challenge..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#030814]/60 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-500 transition duration-200 focus:border-[#00B4D8] focus:ring-1 focus:ring-[#00B4D8]/50"
                  />
                </label>
              </div>

              <div className="mt-8">
                <p className="mb-3 text-sm font-medium text-gray-300">Areas of interest <span className="text-[#00B4D8]">*</span></p>
                <div className="flex flex-wrap gap-2">
                  {INTERESTS.map((interest) => {
                    const active = selectedInterests.includes(interest);
                    return (
                      <button
                        type="button"
                        key={interest}
                        onClick={() => toggleInterest(interest)}
                        className={`rounded-full border px-4 py-2 text-xs font-medium transition-all duration-200 ${
                          active
                            ? "border-[#00B4D8] bg-[#00B4D8]/20 text-[#00B4D8]"
                            : "border-white/10 bg-[#030814]/60 text-gray-400 hover:border-white/30 hover:text-white"
                        }`}
                      >
                        {interest}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <ConsentCheckbox id="contact-consent" checked={consent} onChange={setConsent} error={error && !consent ? "Please agree to proceed." : undefined} />
              </div>

              {error && <div className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">{error}</div>}
              {success && (
                <div className="mt-4 flex gap-3 rounded-xl border border-[#00B4D8]/30 bg-[#00B4D8]/10 px-4 py-3 text-sm text-[#48CAE4]">
                  <Check className="mt-0.5 h-5 w-5 shrink-0" />
                  <span>{success}</span>
                </div>
              )}

              <button type="submit" disabled={loading} className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#00B4D8] px-6 py-4 text-sm font-semibold text-[#030814] transition duration-200 hover:bg-[#48CAE4] disabled:opacity-70">
                {loading ? "Sending..." : "Submit Request"}
                {!loading && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="border-t border-white/10 bg-black/50 backdrop-blur-md">
        <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Frequently asked questions</h2>
            <p className="mt-4 text-base text-gray-300">Everything you need to know before we start working together.</p>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.q} className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a1a2f]/60 backdrop-blur-md">
                  <button type="button" onClick={() => setOpenFaq(isOpen ? null : index)} className="flex w-full items-center justify-between px-6 py-5 text-left">
                    <span className="text-base font-medium text-white">{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#00B4D8]" : ""}`} />
                  </button>
                  <motion.div initial={false} animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-gray-300">{faq.a}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}