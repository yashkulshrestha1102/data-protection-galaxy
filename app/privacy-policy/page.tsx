// app/privacy-policy/page.tsx

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen text-white px-4 pt-28 md:pt-32 pb-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/home1.jpeg')" }}>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md p-8 md:p-10 shadow-2xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400 text-sm mb-8 pb-6 border-b border-white/10">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          <div className="space-y-8 text-gray-300 text-sm leading-relaxed">
            
            {/* 1. Introduction */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
              <p>Legal Galaxy ("we", "our", "us", or "Company") is committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (https://dpdpa.businezexcellence.com) and use our services. This policy is designed to comply with the Digital Personal Data Protection Act, 2023 (DPDP Act) and the Digital Personal Data Protection Rules, 2025.</p>
            </section>

            {/* 2. Data We Collect & Purpose (Rule 3) */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Personal Data We Collect and Why</h2>
              <p className="mb-3">We collect personal data only for specific, clear, and lawful purposes. The types of data we collect and their purposes are outlined below:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Identity & Contact Data:</strong> Name, email address, phone number, and company name. <em>Purpose:</em> To provide our services, respond to inquiries, and communicate with you.</li>
                <li><strong>Usage & Technical Data:</strong> IP address, browser type, device information, and pages visited. <em>Purpose:</em> To analyze website performance, enhance user experience, and ensure security.</li>
                <li><strong>Professional Data:</strong> Job title, industry, and company size. <em>Purpose:</em> To tailor our compliance and governance solutions to your specific business needs.</li>
                <li><strong>Communications Data:</strong> Records of your correspondence with us. <em>Purpose:</em> To resolve grievances and maintain a history of interactions for quality assurance.</li>
              </ul>
            </section>

            {/* 3. Consent and Withdrawal (Rule 5/6) */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Consent and How to Withdraw It</h2>
              <p className="mb-3">We process your personal data based on your explicit consent, which you provide when you fill out forms, use our assessment tools, or interact with our website. Consent must be free, specific, informed, unconditional, and unambiguous.</p>
              <p className="mb-3"><strong>How to Withdraw Consent:</strong> You have the right to withdraw your consent at any time. You can do so by:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Clicking the "Reject Non-Essential" or "Manage Preferences" button on our cookie banner.</li>
                <li>Sending an email to our Data Protection Officer at <a href="mailto:privacy@businezexcellence.com" className="text-purple-400 underline">privacy@businezexcellence.com</a> with the subject "Consent Withdrawal".</li>
              </ul>
              <p className="mt-3">Withdrawal of consent will not affect the lawfulness of processing based on consent before its withdrawal.</p>
            </section>

            {/* 4. Legitimate Uses (Act 97) */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Legitimate Uses of Your Data</h2>
              <p>Under the DPDP Act, we may process your personal data without explicit consent for certain legitimate uses. These include:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Compliance with a legal obligation to which we are subject.</li>
                <li>Responding to a medical emergency or providing medical treatment.</li>
                <li>Taking measures to provide benefits or services to you during a disaster or public health emergency.</li>
                <li>Employment-related purposes, if you are our employee or contractor.</li>
              </ul>
            </section>

            {/* 5. Children's Data (Rules 10-12) */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Children's Personal Data</h2>
              <p>Our services are not directed at children under the age of 18. We do not knowingly collect personal data from children. If we become aware that we have inadvertently collected personal data from a child, we will take reasonable steps to delete it.</p>
              <p className="mt-2">For any processing of children's data (if required by service), we mandate verifiable consent from a parent or lawful guardian as per Rule 10 of the DPDP Rules 2025. We do not engage in tracking, behavioural monitoring, or targeted advertising directed at children.</p>
            </section>

            {/* 6. Data Retention (Rule 8) */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Data Retention</h2>
              <p>We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by law.</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Marketing Data:</strong> Retained for 2 years from the date of last interaction or until you withdraw consent.</li>
                <li><strong>Customer Account Data:</strong> Retained for the duration of the business relationship and 7 years thereafter for legal and tax compliance.</li>
                <li><strong>Website Analytics Data:</strong> Retained for up to 26 months.</li>
              </ul>
              <p className="mt-3">Once the retention period expires, your data will be securely deleted or anonymized in accordance with our data deletion processes.</p>
            </section>

            {/* 7. Cross-Border Transfers (Rule 15) */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Cross-Border Data Transfers</h2>
              <p>We primarily store and process your data within India. However, to provide our services effectively, we may use third-party service providers (such as cloud hosting and analytics platforms) that may store or process data outside India.</p>
              <p className="mt-2">Any cross-border transfer of personal data will be conducted in compliance with the DPDP Act. We will ensure that such transfers are subject to appropriate safeguards, and we will not transfer data to any country or territory that the Central Government has restricted by notification.</p>
            </section>

            {/* 8. Third-Party Sharing */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Third-Party Sharing</h2>
              <p>We do not sell your personal data. We may share your data with trusted third-party service providers (Data Processors) who assist us in operating our website and delivering services, such as:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Cloud Service Providers:</strong> For secure data hosting and storage.</li>
                <li><strong>Analytics Providers:</strong> To understand website usage (only after obtaining your consent).</li>
                <li><strong>Communication Platforms:</strong> For sending emails and service updates.</li>
              </ul>
              <p className="mt-3">All Data Processors are bound by contractual agreements that require them to implement appropriate security measures and process data only on our instructions.</p>
            </section>

            {/* 9. Security Measures */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">9. How We Protect Your Data</h2>
              <p>We implement robust technical and organizational security safeguards to protect your personal data from unauthorized access, alteration, disclosure, or destruction. These include:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Encryption of data in transit (using HTTPS/SSL) and at rest.</li>
                <li>Strict access controls and role-based permissions for our employees.</li>
                <li>Regular security audits and vulnerability assessments.</li>
                <li>Employee training on data protection and privacy best practices.</li>
              </ul>
            </section>

            {/* 10. Grievance Redressal (Rule 14) */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">10. Grievance Redressal</h2>
              <p>If you have any questions, concerns, or grievances regarding the processing of your personal data, you can contact our Grievance Officer.</p>
              <div className="mt-4 p-5 bg-white/5 border border-white/10 rounded-xl space-y-2">
                <p><strong>Grievance Officer:</strong> Shilpi Kulshrestha</p>
                <p><strong>Email:</strong> <a href="mailto:privacy@businezexcellence.com" className="text-purple-400 underline">privacy@businezexcellence.com</a> (or shilpi.kulshrestha@businezexcellence.com)</p>
                <p><strong>Phone:</strong> +91-8800138008</p>
                <p className="text-xs text-gray-400 mt-2">We will acknowledge your grievance within 48 hours and aim to resolve it within 30 days of receipt.</p>
              </div>
              <p className="mt-4">If your grievance is not resolved satisfactorily, you have the right to lodge a complaint with the Data Protection Board of India.</p>
            </section>

            {/* 11. Your Rights */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">11. Your Rights as a Data Principal</h2>
              <p>Under the DPDP Act, you have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Right to Access:</strong> Request a summary of the personal data we process about you.</li>
                <li><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your data, subject to legal retention requirements.</li>
                <li><strong>Right to Nominate:</strong> Nominate another individual to exercise your rights in case of death or incapacity.</li>
              </ul>
            </section>

            {/* 12. Updates to this Policy */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">12. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.</p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}