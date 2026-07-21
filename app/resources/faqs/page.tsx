"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is the Digital Personal Data Protection Act, 2023?',
      answer: 'The Digital Personal Data Protection Act, 2023 is India\'s comprehensive data protection law that establishes a framework for processing personal data, balancing individual rights with the need for lawful processing.',
    },
    {
      question: 'Who is a Data Principal?',
      answer: 'A Data Principal is an individual whose personal data is being processed. They have rights to access, correct, erase, and port their data under the DPDP Act.',
    },
    {
      question: 'Who is a Data Fiduciary?',
      answer: 'A Data Fiduciary is an entity that determines the purpose and means of processing personal data. They have obligations under the DPDP Act, including notice, consent, and security.',
    },
    {
      question: 'What are the penalties for non-compliance?',
      answer: 'Non-compliance with the DPDP Act can lead to penalties up to ₹250 crore for the data fiduciary and up to ₹50 crore for the data processor.',
    },
    {
      question: 'What is a Significant Data Fiduciary?',
      answer: 'A Significant Data Fiduciary is an entity that processes a high volume of personal data or sensitive data. They have enhanced obligations under the DPDP Act.',
    },
    {
      question: 'What is Data Protection Impact Assessment (DPIA)?',
      answer: 'DPIA is a process to identify and mitigate risks associated with high-risk data processing activities. It is required for Significant Data Fiduciaries.',
    },
    {
      question: 'What are the rights of data principals?',
      answer: 'Data principals have the right to access, correct, erase, port their data, and the right to grievance redressal.',
    },
    {
      question: 'How long should personal data be retained?',
      answer: 'Personal data should be retained only for as long as necessary for the purpose for which it was collected, as per the storage limitation principle.',
    },
  ];

  return (
    <main className="min-h-screen text-white px-4 pt-28 md:pt-32 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/home1.jpeg')" }}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Link href="/resources" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Resources
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-300 text-lg max-w-3xl mb-12">Frequently asked questions about the DPDP Act 2023.</p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 ml-4" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}