"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, ChevronRight, ChevronLeft, CheckCircle, 
  FileText, Download, Eye, Edit, Sparkles, Globe,
  Shield, Users, Database, Building, Mail, Phone,
  MapPin, Globe2, Lock, Clock, RefreshCw, Printer,
  X, Plus, Trash2, Save, FileCheck, FileSpreadsheet
} from 'lucide-react';

// ===== TEMPLATES DATA =====
const templates = [
  {
    id: 'privacy-policy',
    name: 'DPDPA Privacy Policy',
    icon: Shield,
    color: 'from-blue-500 to-purple-600',
    description: 'Comprehensive privacy policy compliant with India\'s Digital Personal Data Protection Act, 2023. Covers all mandatory disclosures including consent, rights, breach notification, and cross-border transfers.',
    sections: '12 sections',
    fields: '19 fields',
    price: 'Free'
  },
  {
    id: 'cookie-notice',
    name: 'Cookie Notice',
    icon: Globe,
    color: 'from-green-500 to-emerald-600',
    description: 'Website cookie notice covering essential, functional, analytics, and marketing cookies with consent management.',
    sections: '6 sections',
    fields: '6 fields',
    price: 'Free'
  },
  {
    id: 'consent-form',
    name: 'Consent Collection Form',
    icon: FileCheck,
    color: 'from-purple-500 to-pink-600',
    description: 'DPDPA-compliant consent collection form template for websites and applications.',
    sections: '5 sections',
    fields: '5 fields',
    price: 'Free'
  }
];

// ===== FORM STEPS DATA =====
const formSteps = [
  {
    id: 'organisation',
    title: 'Organisation Details',
    description: 'Tell us about your organisation',
    fields: [
      { id: 'orgName', label: 'Organisation Name *', type: 'text', placeholder: 'ABC Pvt. Ltd.' },
      { id: 'orgType', label: 'Organisation Type *', type: 'select', options: ['Select...', 'Private Limited', 'Public Limited', 'LLP', 'Partnership', 'Sole Proprietorship', 'Trust', 'NGO', 'Other'] },
      { id: 'registeredAddress', label: 'Registered Address *', type: 'textarea', placeholder: 'Full registered address' },
      { id: 'website', label: 'Website URL', type: 'text', placeholder: 'https://www.example.com' },
      { id: 'industry', label: 'Industry *', type: 'select', options: ['Select...', 'Technology', 'Healthcare', 'Finance', 'E-Commerce', 'Education', 'Manufacturing', 'Consulting', 'Other'] },
    ]
  },
  {
    id: 'data-types',
    title: 'Data Collection Details',
    description: 'What personal data do you collect?',
    fields: [
      { 
        id: 'dataTypes', 
        label: 'Types of Personal Data Collected *', 
        type: 'checkbox-group',
        options: ['Name', 'Email Address', 'Phone Number', 'Physical Address', 'Financial Data (bank details, PAN)', 'Identity Documents (Aadhaar, Passport)', 'Location Data', 'Biometric Data', 'Health Data', 'Employment Data', 'Browsing/Device Data']
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
    id: 'children-data',
    title: 'Children\'s Data',
    description: 'Under DPDPA, anyone under 18 is considered a child.',
    fields: [
      { id: 'processChildrenData', label: 'Do you process children\'s data? *', type: 'radio', options: ['Yes', 'No'] },
      { id: 'childrenDataDetails', label: 'If yes, describe how children\'s data is processed', type: 'textarea', placeholder: 'Describe your practices for collecting and processing children\'s data...', conditional: 'processChildrenData' }
    ]
  },
  {
    id: 'third-party',
    title: 'Third-Party Data Sharing',
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
      { id: 'dpoName', label: 'Data Protection Officer / Contact Person *', type: 'text', placeholder: 'Name of DPO or Privacy Contact' },
      { id: 'dpoEmail', label: 'Privacy Contact Email *', type: 'email', placeholder: 'privacy@example.com' },
      { id: 'grievanceName', label: 'Grievance Officer Name *', type: 'text', placeholder: 'Name of Grievance Officer' },
      { id: 'grievanceEmail', label: 'Grievance Officer Email *', type: 'email', placeholder: 'grievance@example.com' },
    ]
  },
  {
    id: 'security',
    title: 'Security Measures',
    description: 'What security measures do you have in place?',
    fields: [
      { 
        id: 'securityMeasures', 
        label: 'Security Measures in Place *', 
        type: 'checkbox-group',
        options: ['Encryption (at rest & in transit)', 'Access Controls & RBAC', 'Regular Security Audits', 'Employee Training', 'Incident Response Plan', 'Data Backup & Recovery']
      },
      { id: 'retentionPeriod', label: 'Default Data Retention Period *', type: 'select', options: ['Select...', '1 Year', '2 Years', '3 Years', '5 Years', '7 Years', '10 Years', 'As per legal requirement'] },
      { id: 'effectiveDate', label: 'Policy Effective Date *', type: 'date' },
    ]
  },
  {
    id: 'review',
    title: 'Review & Generate',
    description: 'Review your details and generate your document',
    fields: []
  }
];

// ===== TEMPLATE CARD =====
const TemplateCard = ({ template, selected, onSelect }) => {
  const Icon = template.icon;
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(template.id)}
      className={`relative p-6 rounded-2xl border-2 transition-all cursor-pointer ${
        selected === template.id
          ? 'border-purple-500 bg-purple-500/10 shadow-lg shadow-purple-500/20'
          : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'
      }`}
    >
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${template.color} flex items-center justify-center mb-4`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{template.name}</h3>
      <p className="text-sm text-gray-400 mb-3">{template.description}</p>
      <div className="flex items-center gap-3 text-xs text-gray-500">
        <span className="px-2 py-1 rounded bg-white/5 border border-white/10">{template.sections}</span>
        <span className="px-2 py-1 rounded bg-white/5 border border-white/10">{template.fields}</span>
        <span className="px-2 py-1 rounded bg-green-500/20 text-green-400 border border-green-500/30">{template.price}</span>
      </div>
      {selected === template.id && (
        <div className="absolute top-3 right-3">
          <CheckCircle className="w-5 h-5 text-green-400" />
        </div>
      )}
    </motion.div>
  );
};

// ===== FORM FIELD RENDERER =====
const FormField = ({ field, value, onChange }) => {
  const handleChange = (e) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    onChange(field.id, val);
  };

  const handleCheckboxGroup = (option) => {
    const current = value || [];
    const newValue = current.includes(option) 
      ? current.filter(item => item !== option)
      : [...current, option];
    onChange(field.id, newValue);
  };

  switch (field.type) {
    case 'text':
    case 'email':
    case 'date':
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
          rows={4}
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
          {field.options.map(opt => (
            <option key={opt} value={opt} className="bg-black">{opt}</option>
          ))}
        </select>
      );
    case 'radio':
      return (
        <div className="flex flex-wrap gap-4">
          {field.options.map(opt => (
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {field.options.map(opt => (
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

// ===== PREVIEW SECTION =====
const PreviewSection = ({ formData, selectedTemplate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [previewContent, setPreviewContent] = useState('');

  useEffect(() => {
    // Generate preview content based on form data
    const content = `
# ${selectedTemplate === 'privacy-policy' ? 'Privacy Policy' : selectedTemplate === 'cookie-notice' ? 'Cookie Notice' : 'Consent Collection Form'}

**Organisation:** ${formData.orgName || '[Organisation Name]'}
**Effective Date:** ${formData.effectiveDate || '[Date]'}

## 1. Introduction & Scope
${formData.orgName || '[Organisation Name]'} is committed to protecting your personal data in compliance with the Digital Personal Data Protection Act, 2023.

## 2. Personal Data We Collect
${(formData.dataTypes || []).length > 0 ? formData.dataTypes.join(', ') : 'We collect personal data as necessary for our business operations.'}

## 3. How We Collect Data
${(formData.collectionMethods || []).length > 0 ? formData.collectionMethods.join(', ') : 'We collect data through various methods including website forms and direct interactions.'}

## 4. Purpose of Processing
${(formData.purposes || []).length > 0 ? formData.purposes.join(', ') : 'We process data for legitimate business purposes.'}

## 5. Data Sharing
${(formData.thirdParties || []).length > 0 ? formData.thirdParties.join(', ') : 'We share data with trusted third parties as necessary.'}

## 6. Data Transfers
${formData.transferOutsideIndia === 'Yes' ? `Data may be transferred to: ${formData.transferCountries || '[Countries]'}` : 'We do not transfer data outside India.'}

## 7. Children's Data
${formData.processChildrenData === 'Yes' ? 'We process children\'s data with appropriate consent mechanisms.' : 'We do not process children\'s data.'}

## 8. Your Rights
You have the right to access, correct, erase, and port your data. You may also withdraw consent at any time.

## 9. Contact Us
${formData.dpoName || '[DPO Name]'} - ${formData.dpoEmail || '[DPO Email]'}
Grievance Officer: ${formData.grievanceName || '[Grievance Officer Name]'} - ${formData.grievanceEmail || '[Grievance Officer Email]'}

## 10. Security Measures
${(formData.securityMeasures || []).length > 0 ? formData.securityMeasures.join(', ') : 'We implement reasonable security measures to protect your data.'}

## 11. Data Retention
Data is retained for ${formData.retentionPeriod || '[Retention Period]'} or as required by law.

## 12. Updates to This Policy
This policy may be updated from time to time. Please check this page regularly.
    `;
    setPreviewContent(content);
  }, [formData, selectedTemplate]);

  return (
    <div className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <Eye className="w-5 h-5 text-purple-400" />
          Preview
        </h3>
        <div className="flex gap-2">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all text-sm flex items-center gap-1"
          >
            <Edit className="w-4 h-4" />
            {isEditing ? 'Preview' : 'Edit'}
          </button>
          <button className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all text-sm flex items-center gap-1">
            <Download className="w-4 h-4" />
            Download
          </button>
        </div>
      </div>

      {isEditing ? (
        <textarea
          value={previewContent}
          onChange={(e) => setPreviewContent(e.target.value)}
          className="w-full h-[400px] px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white font-mono text-sm focus:outline-none focus:border-purple-400/50 resize-none"
        />
      ) : (
        <div className="prose prose-invert max-w-none">
          <pre className="whitespace-pre-wrap text-gray-300 text-sm leading-relaxed font-sans">
            {previewContent}
          </pre>
        </div>
      )}
    </div>
  );
};

// ===== MAIN PAGE =====
export default function GeneratorPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, any>>({});
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

  const handleFieldChange = (fieldId: string, value: any) => {
    setFormData(prev => ({ ...prev, [fieldId]: value }));
  };

  const handleNext = () => {
    if (currentStep < formSteps.length - 1) {
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

  const currentStepData = formSteps[currentStep];

  return (
    <main className="min-h-screen text-white px-4 relative overflow-hidden pt-28 md:pt-32 pb-16">
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/home1.jpeg')" }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
        {stars}
      </div>

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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-sm font-semibold text-blue-400 mb-4">
            <FileText className="w-4 h-4" />
            Document Generator
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-2xl mb-2">
            DPDPA Privacy Policy & Consent Generator
          </h1>
          <p className="text-gray-200 drop-shadow-lg">Generate DPDPA-compliant privacy documents in minutes.</p>
        </motion.div>

        {/* Template Selection */}
        {!selectedTemplate ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold text-white mb-4">Choose a Template</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {templates.map((template) => (
                <TemplateCard
                  key={template.id}
                  template={template}
                  selected={selectedTemplate}
                  onSelect={setSelectedTemplate}
                />
              ))}
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {currentStepData.title}
                    </h3>
                    <p className="text-sm text-gray-400">{currentStepData.description}</p>
                  </div>
                  <button
                    onClick={() => setSelectedTemplate(null)}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Change Template
                  </button>
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
                  <span className="text-xs text-gray-400 ml-2">{currentStep + 1}/{formSteps.length}</span>
                </div>

                {/* Fields */}
                <div className="space-y-4">
                  {currentStepData.fields.map((field) => {
                    // Check conditional
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
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </button>
                  {currentStep < formSteps.length - 1 ? (
                    <button
                      onClick={handleNext}
                      disabled={!isStepComplete()}
                      className={`px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:scale-105 transition-all flex items-center gap-2 ${
                        !isStepComplete() ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button className="px-6 py-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium hover:scale-105 transition-all flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Generate Document
                    </button>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Preview Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <PreviewSection formData={formData} selectedTemplate={selectedTemplate} />
            </motion.div>
          </div>
        )}
      </div>
    </main>
  );
}