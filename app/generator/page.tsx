"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Shield, Brain, FileText, CheckCircle, 
  Download, Sparkles, ArrowRight, Lock, Users,
  AlertCircle, Clipboard, Database, Globe, Scale,
  Mail, Send, Loader2, Eye, Edit, Printer, Save,
  Languages, FileDown, FileJson
} from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// ===== ALL 15 TOOLS DATA =====
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

const aiTools = [
  { id: 'ai-usage-policy', label: 'AI Usage Policy', icon: Brain, desc: 'Generate an internal AI usage policy' },
  { id: 'responsible-ai-policy', label: 'Responsible AI Policy', icon: Shield, desc: 'Create a responsible AI framework policy' },
  { id: 'ai-governance-framework', label: 'AI Governance Framework', icon: Scale, desc: 'Build a complete AI governance structure' },
  { id: 'ai-risk-assessment', label: 'AI Risk Assessment', icon: AlertCircle, desc: 'Generate an AI risk assessment template' },
  { id: 'ai-vendor-questionnaire', label: 'AI Vendor Questionnaire', icon: FileText, desc: 'Create a vendor assessment for AI providers' },
  { id: 'ai-acceptable-use', label: 'AI Acceptable Use Policy', icon: Lock, desc: 'Generate an acceptable use policy for AI tools' },
  { id: 'ai-impact-assessment', label: 'AI Impact Assessment', icon: Globe, desc: 'Create a comprehensive AI impact assessment' },
];

// ===== ALL TEMPLATES =====
const generateTemplate = (toolId: string, formData: any) => {
  const templates: Record<string, string> = {
    'privacy-notice': `
# Privacy Policy

**Effective Date:** ${new Date().toLocaleDateString()}

## 1. Introduction
${formData.orgName || '[Organisation Name]'} ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal data.

## 2. Data Controller
${formData.orgName || '[Organisation Name]'}
${formData.address || '[Address]'}
Email: ${formData.email || 'privacy@company.com'}

## 3. Personal Data We Collect
${(formData.dataTypes || ['Name', 'Email', 'Phone']).join(', ')}

## 4. How We Collect Data
${(formData.collectionMethods || ['Website Forms', 'Direct Interactions']).join(', ')}

## 5. Purpose of Processing
${(formData.purposes || ['Service Delivery', 'Communication']).join(', ')}

## 6. Legal Basis
We process your data based on consent, contract, or legal obligation.

## 7. Data Sharing
${(formData.thirdParties || ['Service Providers']).join(', ')}

## 8. Data Transfers
${formData.transferOutsideIndia === 'Yes' ? `Data may be transferred to: ${formData.transferCountries || '[Countries]'}` : 'We do not transfer data outside India.'}

## 9. Your Rights
You have the right to access, correct, erase, and port your data. You may also withdraw consent at any time.

## 10. Data Retention
Data is retained for ${formData.retentionPeriod || '[Retention Period]'} or as required by law.

## 11. Security Measures
${(formData.securityMeasures || ['Encryption', 'Access Controls']).join(', ')}

## 12. Contact Us
Data Protection Officer: ${formData.dpoName || '[DPO Name]'} - ${formData.dpoEmail || '[DPO Email]'}
Grievance Officer: ${formData.grievanceName || '[Grievance Officer Name]'} - ${formData.grievanceEmail || '[Grievance Officer Email]'}
    `,
    'consent-notice': `
# Consent Notice

**Effective Date:** ${new Date().toLocaleDateString()}

## 1. Introduction
${formData.orgName || '[Organisation Name]'} collects and processes your personal data with your explicit consent.

## 2. What Data We Collect
${(formData.dataTypes || ['Name', 'Email', 'Phone']).join(', ')}

## 3. Purpose of Collection
${(formData.purposes || ['Service Delivery', 'Communication']).join(', ')}

## 4. Consent Withdrawal
You may withdraw your consent at any time by contacting us.

## 5. Contact
For any queries, contact us at ${formData.email || 'privacy@company.com'}
    `,
    'cookies-notice': `
# Cookies Notice

**Effective Date:** ${new Date().toLocaleDateString()}

## 1. What Are Cookies
Cookies are small text files stored on your device.

## 2. Types of Cookies We Use
- Essential Cookies
- Functional Cookies
- Analytics Cookies
- Marketing Cookies

## 3. Managing Cookies
You can manage cookies through your browser settings.

## 4. Contact
For any queries, contact us at ${formData.email || 'privacy@company.com'}
    `,
    'dpa': `
# Data Processing Agreement

**Effective Date:** ${new Date().toLocaleDateString()}

## 1. Parties
This DPA is between ${formData.orgName || '[Organisation Name]'} ("Data Controller") and [Processor Name].

## 2. Scope
This agreement covers all processing of personal data.

## 3. Data Subjects
Data subjects include customers, employees, and other individuals.

## 4. Processing Activities
Processing includes collection, storage, use, and deletion.

## 5. Security Measures
${(formData.securityMeasures || ['Encryption', 'Access Controls']).join(', ')}

## 6. Sub-processing
Processor may engage sub-processors with prior written consent.

## 7. Data Breach Notification
Processor shall notify Controller within 48 hours of any breach.

## 8. Duration
This agreement remains in effect for the duration of the processing.
    `,
    'retention-policy': `
# Data Retention Policy

**Effective Date:** ${new Date().toLocaleDateString()}

## 1. Purpose
This policy outlines how ${formData.orgName || '[Organisation Name]'} manages data retention and deletion.

## 2. Retention Periods
${formData.retentionPeriod || 'Data is retained for 5 years or as per legal requirements.'}

## 3. Data Categories
- Customer Data: ${formData.retentionPeriod || '5 years'}
- Employee Data: ${formData.retentionPeriod || '7 years'}
- Financial Data: ${formData.retentionPeriod || '10 years'}

## 4. Deletion Process
Data is securely deleted after the retention period expires.

## 5. Responsibilities
The Data Protection Officer is responsible for compliance.
    `,
    'breach-response': `
# Data Breach Response Template

**Effective Date:** ${new Date().toLocaleDateString()}

## 1. Purpose
This template outlines the response procedure for data breaches.

## 2. Immediate Actions
1. Identify the breach
2. Contain the breach
3. Assess the risk

## 3. Notification
- Internal: Inform DPO within 24 hours
- External: Inform affected individuals within 72 hours

## 4. Investigation
Conduct a thorough investigation and document findings.

## 5. Remediation
Implement corrective measures to prevent future breaches.

## 6. Documentation
Maintain a detailed record of the breach and response.
    `,
    'dsr-procedure': `
# Data Subject Rights Procedure

**Effective Date:** ${new Date().toLocaleDateString()}

## 1. Purpose
This procedure outlines how ${formData.orgName || '[Organisation Name]'} handles data subject rights requests.

## 2. Rights Covered
- Right to Access
- Right to Correction
- Right to Erasure
- Right to Portability
- Right to Object

## 3. Request Process
1. Submit request via email or portal
2. Verify identity
3. Acknowledge within 48 hours
4. Respond within 30 days

## 4. Contact
Submit requests to: ${formData.dpoEmail || 'dpo@company.com'}
    `,
    'vendor-checklist': `
# Vendor Data Processing Checklist

**Effective Date:** ${new Date().toLocaleDateString()}

## 1. Purpose
This checklist ensures vendors comply with data protection requirements.

## 2. Assessment Criteria
- [ ] Data processing purpose
- [ ] Data categories processed
- [ ] Security measures in place
- [ ] Data transfer mechanisms
- [ ] Breach notification process

## 3. Compliance Requirements
- [ ] GDPR/DPDP compliance
- [ ] Data Protection Officer appointment
- [ ] Data processing agreement signed

## 4. Review Frequency
Vendor assessments are conducted annually.
    `,
    'ai-usage-policy': `
# AI Usage Policy

**Effective Date:** ${new Date().toLocaleDateString()}

## 1. Purpose
This policy outlines acceptable use of AI tools within ${formData.orgName || '[Organisation Name]'}.

## 2. Scope
Applies to all employees, contractors, and third parties.

## 3. Permitted Use
- Approved business purposes
- Compliance with laws
- Human review of AI outputs

## 4. Prohibited Use
- Discriminatory purposes
- Automated decisions without human oversight
- Processing sensitive data without consent

## 5. AI Risk Assessment
All AI systems must undergo risk assessment.

## 6. Human Oversight
All AI decisions require human review and override capability.

## 7. Transparency
AI use must be disclosed to stakeholders.

## 8. Reporting
AI-related incidents must be reported immediately.
    `,
    'responsible-ai-policy': `
# Responsible AI Policy

**Effective Date:** ${new Date().toLocaleDateString()}

## 1. Principles
- Fairness
- Transparency
- Accountability
- Privacy
- Security

## 2. Governance
AI systems are governed by the AI Governance Committee.

## 3. Risk Management
Regular risk assessments are conducted for all AI systems.

## 4. Compliance
All AI systems comply with applicable laws and regulations.
    `,
    'ai-governance-framework': `
# AI Governance Framework

**Effective Date:** ${new Date().toLocaleDateString()}

## 1. Purpose
This framework establishes governance for AI systems.

## 2. Governance Structure
- AI Governance Committee
- AI Risk Assessment Team
- AI Compliance Team

## 3. Policies
- AI Usage Policy
- Responsible AI Policy
- AI Risk Management Policy

## 4. Procedures
- AI lifecycle management
- AI risk assessment
- AI incident response

## 5. Compliance
Regular audits and compliance reviews.
    `,
    'ai-risk-assessment': `
# AI Risk Assessment

**Effective Date:** ${new Date().toLocaleDateString()}

## 1. Purpose
This template assesses risks associated with AI systems.

## 2. Assessment Areas
- Data privacy
- Bias and fairness
- Security
- Compliance
- Transparency

## 3. Risk Matrix
| Risk Level | Impact | Likelihood |
|------------|--------|------------|
| High | Severe | Likely |
| Medium | Moderate | Possible |
| Low | Minor | Unlikely |

## 4. Mitigation
Implement measures to reduce identified risks.
    `,
    'ai-vendor-questionnaire': `
# AI Vendor Questionnaire

**Effective Date:** ${new Date().toLocaleDateString()}

## 1. Purpose
This questionnaire assesses AI vendors' compliance.

## 2. Vendor Information
- Vendor Name:
- Contact Person:
- AI Services Provided:

## 3. Compliance Checklist
- [ ] Data protection policy
- [ ] AI governance framework
- [ ] Risk assessment process
- [ ] Incident response plan
- [ ] Transparency reporting

## 4. Security Assessment
- [ ] Encryption in place
- [ ] Access controls
- [ ] Regular audits

## 5. Review
Vendor assessments are conducted annually.
    `,
    'ai-acceptable-use': `
# AI Acceptable Use Policy

**Effective Date:** ${new Date().toLocaleDateString()}

## 1. Purpose
This policy defines acceptable use of AI tools.

## 2. Permitted Uses
- Business operations
- Research and development
- Customer support
- Data analysis

## 3. Prohibited Uses
- Unauthorized data processing
- Bias or discrimination
- Automated decision-making without oversight

## 4. Responsibilities
Users are responsible for ensuring AI use complies with this policy.

## 5. Reporting
Violations must be reported immediately.
    `,
    'ai-impact-assessment': `
# AI Impact Assessment

**Effective Date:** ${new Date().toLocaleDateString()}

## 1. Purpose
This assessment evaluates the impact of AI systems.

## 2. Impact Areas
- Data privacy
- Human rights
- Bias and fairness
- Security
- Compliance

## 3. Assessment Process
1. Identify AI system
2. Assess risks
3. Identify mitigation measures
4. Implement measures
5. Monitor and review

## 4. Documentation
Maintain detailed records of assessments.
    `,
  };

  return templates[toolId] || templates['privacy-notice'];
};

// ===== FORM STEPS =====
const formSteps = [
  {
    id: 'organisation',
    title: 'Organisation Details',
    description: 'Tell us about your organisation',
    fields: [
      { id: 'orgName', label: 'Organisation Name *', type: 'text', placeholder: 'ABC Pvt. Ltd.' },
      { id: 'email', label: 'Contact Email *', type: 'email', placeholder: 'privacy@company.com' },
      { id: 'address', label: 'Registered Address', type: 'textarea', placeholder: 'Full registered address' },
      { id: 'industry', label: 'Industry', type: 'select', options: ['Select...', 'Technology', 'Healthcare', 'Finance', 'E-Commerce', 'Education', 'Manufacturing', 'Consulting', 'Other'] },
    ]
  },
  {
    id: 'data-types',
    title: 'Data Collection',
    description: 'What personal data do you collect?',
    fields: [
      { 
        id: 'dataTypes', 
        label: 'Types of Personal Data Collected *', 
        type: 'checkbox-group',
        options: ['Name', 'Email Address', 'Phone Number', 'Physical Address', 'Financial Data', 'Identity Documents', 'Location Data', 'Biometric Data', 'Health Data', 'Employment Data', 'Browsing Data']
      },
      { 
        id: 'collectionMethods', 
        label: 'Data Collection Methods *', 
        type: 'checkbox-group',
        options: ['Website Forms', 'Mobile Application', 'Offline / In-Person', 'Third-Party Sources', 'Cookies & Tracking', 'API / Integration']
      },
      { 
        id: 'purposes', 
        label: 'Purpose of Data Processing *', 
        type: 'checkbox-group',
        options: ['Service Delivery', 'Account Management', 'Payment Processing', 'Communication & Support', 'Marketing & Promotions', 'Analytics & Improvement', 'Legal Compliance', 'Employment / HR']
      },
    ]
  },
  {
    id: 'sharing',
    title: 'Data Sharing & Transfers',
    description: 'Who do you share data with?',
    fields: [
      { 
        id: 'thirdParties', 
        label: 'Third Parties Data is Shared With', 
        type: 'checkbox-group',
        options: ['Cloud Service Providers', 'Payment Processors', 'Analytics Providers', 'Marketing Platforms', 'Legal / Regulatory Bodies', 'Group Companies']
      },
      { id: 'transferOutsideIndia', label: 'Do you transfer data outside India? *', type: 'radio', options: ['Yes', 'No'] },
      { id: 'transferCountries', label: 'Countries Data is Transferred To', type: 'text', placeholder: 'e.g., USA, EU, Singapore', conditional: 'transferOutsideIndia' }
    ]
  },
  {
    id: 'dpo',
    title: 'Data Protection Officer',
    description: 'Contact details for data protection queries',
    fields: [
      { id: 'dpoName', label: 'Data Protection Officer / Contact Person *', type: 'text', placeholder: 'Name of DPO' },
      { id: 'dpoEmail', label: 'Privacy Contact Email *', type: 'email', placeholder: 'privacy@example.com' },
      { id: 'grievanceName', label: 'Grievance Officer Name *', type: 'text', placeholder: 'Name of Grievance Officer' },
      { id: 'grievanceEmail', label: 'Grievance Officer Email *', type: 'email', placeholder: 'grievance@example.com' },
    ]
  },
  {
    id: 'security',
    title: 'Security & Retention',
    description: 'What security measures do you have?',
    fields: [
      { 
        id: 'securityMeasures', 
        label: 'Security Measures in Place *', 
        type: 'checkbox-group',
        options: ['Encryption (at rest & in transit)', 'Access Controls & RBAC', 'Regular Security Audits', 'Employee Training', 'Incident Response Plan', 'Data Backup & Recovery']
      },
      { id: 'retentionPeriod', label: 'Default Data Retention Period *', type: 'select', options: ['Select...', '1 Year', '2 Years', '3 Years', '5 Years', '7 Years', '10 Years', 'As per legal requirement'] },
    ]
  },
  {
    id: 'review',
    title: 'Review & Generate',
    description: 'Review your details and generate your document',
    fields: []
  }
];

// ===== FORM FIELD COMPONENT =====
const FormField = ({ field, value, onChange }: any) => {
  const handleChange = (e: any) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    onChange(field.id, val);
  };

  const handleCheckboxGroup = (option: string) => {
    const current = value || [];
    const newValue = current.includes(option) 
      ? current.filter((item: string) => item !== option)
      : [...current, option];
    onChange(field.id, newValue);
  };

  switch (field.type) {
    case 'text':
    case 'email':
      return (
        <input
          type={field.type}
          value={value || ''}
          onChange={handleChange}
          placeholder={field.placeholder}
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 transition-all"
        />
      );
    case 'textarea':
      return (
        <textarea
          value={value || ''}
          onChange={handleChange}
          placeholder={field.placeholder}
          rows={3}
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 transition-all resize-none"
        />
      );
    case 'select':
      return (
        <select
          value={value || ''}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-purple-400/50 transition-all appearance-none"
        >
          {field.options.map((opt: string) => (
            <option key={opt} value={opt} className="bg-black">{opt}</option>
          ))}
        </select>
      );
    case 'radio':
      return (
        <div className="flex flex-wrap gap-4">
          {field.options.map((opt: string) => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name={field.id}
                value={opt}
                checked={value === opt}
                onChange={handleChange}
                className="w-4 h-4 text-purple-500 focus:ring-purple-500"
              />
              <span className="text-gray-300">{opt}</span>
            </label>
          ))}
        </div>
      );
    case 'checkbox-group':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {field.options.map((opt: string) => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-white/5 transition-all">
              <input
                type="checkbox"
                checked={(value || []).includes(opt)}
                onChange={() => handleCheckboxGroup(opt)}
                className="w-4 h-4 text-purple-500 focus:ring-purple-500 rounded"
              />
              <span className="text-sm text-gray-300">{opt}</span>
            </label>
          ))}
        </div>
      );
    default:
      return null;
  }
};

const handleExportPDF = async () => {
  const content = document.getElementById('preview-content');
  if (!content) return;
  
  const canvas = await html2canvas(content);
  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF('p', 'mm', 'a4');
  pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);
  pdf.save('document.pdf');
};





// ===== MAIN PAGE =====
export default function GeneratorPage() {
  const [activeTab, setActiveTab] = useState<'privacy' | 'ai'>('privacy');
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [stars, setStars] = useState<React.ReactNode[]>([]);
  const [loading, setLoading] = useState(false);
  const [savedDrafts, setSavedDrafts] = useState<any[]>([]);

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

  useEffect(() => {
    // Load saved drafts from localStorage
    const drafts = localStorage.getItem('generator_drafts');
    if (drafts) {
      try {
        setSavedDrafts(JSON.parse(drafts));
      } catch {}
    }
  }, []);

  const activeTools = activeTab === 'privacy' ? privacyTools : aiTools;
  const selectedToolData = activeTools.find(t => t.id === selectedTool);
  const currentStepData = formSteps[currentStep];
  const totalSteps = formSteps.length;

  const handleFieldChange = (fieldId: string, value: any) => {
    setFormData(prev => ({ ...prev, [fieldId]: value }));
    // Auto-save draft
    saveDraft({ ...formData, [fieldId]: value });
  };

  const saveDraft = (data: any) => {
    localStorage.setItem('generator_draft', JSON.stringify(data));
  };

  const handleNext = () => {
    setError(null);
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const isStepComplete = () => {
    const step = formSteps[currentStep];
    if (!step.fields.length) return true;
    return step.fields.every(field => {
      if (field.conditional) {
        const condValue = formData[field.conditional];
        if (condValue === 'No') return true;
      }
      return formData[field.id] !== undefined && formData[field.id] !== '';
    });
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setError(null);
    try {
      const content = generateTemplate(selectedTool || 'privacy-notice', formData);
      setGeneratedContent(content);
      setShowPreview(true);
    } catch (err) {
      setError('Failed to generate document. Please try again.');
    }
    setIsGenerating(false);
  };

  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address.');
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    try {
      const response = await fetch('/api/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email, 
          tool: selectedTool,
          type: activeTab,
          source: 'generator',
          document: generatedContent,
          formData
        }),
      });
      const data = await response.json();
      if (data.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setEmail('');
        }, 5000);
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to send document. Please try again.');
    }
    setIsSubmitting(false);
  };

  const handleExportPDF = () => {
    alert('PDF export coming soon! 📄');
  };

  const handleExportWord = () => {
    alert('Word export coming soon! 📝');
  };

  const handleSaveDraft = () => {
    localStorage.setItem('generator_draft', JSON.stringify({ tool: selectedTool, formData, timestamp: new Date().toISOString() }));
    alert('✅ Draft saved!');
  };

  // ===== TOOL SELECTION =====
  if (!selectedTool) {
    return (
      <main className="min-h-screen text-white px-4 relative overflow-hidden pt-28 md:pt-32 pb-16">
        <div className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/home1.jpeg')" }}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>
        <div className="absolute inset-0 -z-10">{stars}</div>

        <div className="max-w-6xl mx-auto relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

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
              return (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white/10 border border-white/20 rounded-xl p-5 hover:bg-white/15 transition-all group cursor-pointer"
                  onClick={() => setSelectedTool(tool.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-white group-hover:text-purple-400 transition-colors">
                        {tool.label}
                      </h3>
                      <p className="text-xs text-gray-400 mt-1">{tool.desc}</p>
                      <button className="mt-3 text-xs text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1">
                        Generate <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>
    );
  }

  // ===== FORM & PREVIEW =====
  return (
    <main className="min-h-screen text-white px-4 relative overflow-hidden pt-28 md:pt-32 pb-16">
      <div className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/home1.jpeg')" }}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>
      <div className="absolute inset-0 -z-10">{stars}</div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center justify-between mb-6">
          <Link href="/generator" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Templates
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">
              {selectedToolData?.label}
            </span>
            <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
              {activeTab === 'privacy' ? 'Privacy' : 'AI Governance'}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Form Section */}
          <div className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {currentStepData.title}
                </h3>
                <p className="text-sm text-gray-400">{currentStepData.description}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedTool(null)}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Change Template
                </button>
                <button
                  onClick={handleSaveDraft}
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <Save className="w-4 h-4" />
                  Save Draft
                </button>
              </div>
            </div>

            {/* Progress */}
            <div className="flex items-center gap-2 mb-6">
              {formSteps.map((_, idx) => (
                <div
                  key={idx}
                  className={`flex-1 h-1 rounded-full transition-all ${
                    idx <= currentStep ? 'bg-gradient-to-r from-blue-400 to-purple-400' : 'bg-white/10'
                  }`}
                />
              ))}
              <span className="text-xs text-gray-400 ml-2">{currentStep + 1}/{totalSteps}</span>
            </div>

            {/* Error */}
            {error && (
              <div className="mb-4 p-3 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 text-sm">
                {error}
              </div>
            )}

            {/* Fields */}
            <div className="space-y-4">
              {currentStepData.fields.map((field) => {
                if (field.conditional) {
                  const condValue = formData[field.conditional];
                  if (condValue === 'No') return null;
                }
                return (
                  <div key={field.id}>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">
                      {field.label}
                    </label>
                    <FormField
                      field={field}
                      value={formData[field.id]}
                      onChange={handleFieldChange}
                    />
                  </div>
                );
              })}
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-6">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all ${
                  currentStep === 0
                    ? 'text-gray-600 cursor-not-allowed'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </button>
              {currentStep < totalSteps - 1 ? (
                <button
                  onClick={handleNext}
                  disabled={!isStepComplete()}
                  className={`px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:scale-105 transition-all flex items-center gap-2 ${
                    !isStepComplete() ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="px-6 py-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium hover:scale-105 transition-all flex items-center gap-2"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      Generate Document
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Preview Section */}
          <div className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Eye className="w-5 h-5 text-purple-400" />
                Preview
              </h3>
              {generatedContent && (
                <div className="flex gap-2">
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(generatedContent);
                      alert('✅ Copied to clipboard!');
                    }}
                    className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all text-sm flex items-center gap-1"
                  >
                    <Edit className="w-4 h-4" />
                    Copy
                  </button>
                  <button 
                    onClick={handleExportPDF}
                    className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all text-sm flex items-center gap-1"
                  >
                    <FileDown className="w-4 h-4" />
                    PDF
                  </button>
                  <button 
                    onClick={handleExportWord}
                    className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all text-sm flex items-center gap-1"
                  >
                    <FileJson className="w-4 h-4" />
                    Word
                  </button>
                  <button className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all text-sm flex items-center gap-1">
                    <Printer className="w-4 h-4" />
                    Print
                  </button>
                </div>
              )}
            </div>

            {generatedContent ? (
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 max-h-[500px] overflow-y-auto">
                <pre className="whitespace-pre-wrap text-gray-300 text-sm leading-relaxed font-sans">
                  {generatedContent}
                </pre>
              </div>
            ) : (
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center text-gray-400">
                <FileText className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>Fill in the form and click "Generate Document"</p>
                <p className="text-xs mt-2">Your document will appear here</p>
              </div>
            )}
          </div>
        </div>

        {/* Email Capture */}
        {generatedContent && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-6 text-center max-w-2xl mx-auto"
          >
            <Lock className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <h3 className="text-lg font-semibold text-white mb-1">Get Your Document</h3>
            <p className="text-gray-300 text-sm mb-4">
              Enter your email to receive the generated document instantly.
            </p>
            
            {error && (
              <div className="mb-4 p-3 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 text-sm">
                {error}
              </div>
            )}
            
            {isSubmitted ? (
              <div className="p-4 rounded-xl bg-green-500/20 border border-green-500/30">
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-white font-medium">Document Sent! ✅</p>
                <p className="text-gray-300 text-sm">Check your email for the document.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitEmail} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition-all flex items-center gap-2 justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Download Document
                    </>
                  )}
                </button>
              </form>
            )}
            <p className="text-xs text-gray-500 mt-3">We'll send the document to your email. No spam.</p>
          </motion.div>
        )}
      </div>
    </main>
  );
}