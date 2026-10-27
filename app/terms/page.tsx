// app/terms/page.tsx

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Terms of Use | Legal Galaxy',
  description:
    'Terms of Use for Legal Galaxy — the Privacy & AI Governance platform by Businezexcellence StartX LLP. Read our terms, data ownership, and liability clauses.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen text-white px-4 pt-28 md:pt-32 pb-16 relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/home1.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md p-8">
          <h1 className="text-3xl font-bold text-white mb-2">Terms of Use</h1>
          <p className="text-gray-400 text-sm mb-8">
            <strong>Last Updated:</strong> 27 October 2026
          </p>

          <div className="space-y-8 text-gray-300 text-sm leading-relaxed">
            {/* ===== 1. ACCEPTANCE ===== */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
              <p>
                These Terms of Use ("Terms") govern your access to and use of the
                Legal Galaxy platform at{' '}
                <a
                  href="https://dpdpa.businezexcellence.com"
                  className="text-purple-400 underline"
                >
                  dpdpa.businezexcellence.com
                </a>{' '}
                ("Website"), operated by{' '}
                <strong className="text-white">Businezexcellence StartX LLP</strong>{' '}
                ("we", "our", "us", or "Legal Galaxy").
              </p>
              <p className="mt-3">
                By accessing or using the Website, you agree to be bound by these
                Terms and our{' '}
                <Link href="/privacy-policy" className="text-purple-400 underline">
                  Privacy Policy
                </Link>
                ,{' '}
                <Link href="/consent-notice" className="text-purple-400 underline">
                  Consent Notice
                </Link>
                , and{' '}
                <Link href="/disclaimer" className="text-purple-400 underline">
                  Disclaimer
                </Link>
                . If you do not agree, please do not use the Website.
              </p>
            </section>

            {/* ===== 2. NO LEGAL ADVICE ===== */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. No Legal Advice</h2>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-4">
                <p className="text-yellow-400 font-medium">⚠️ Important Disclaimer</p>
                <p className="text-gray-300 mt-1">
                  The content on Legal Galaxy — including articles, guides, templates,
                  generated documents, and assessment results — is for{' '}
                  <strong>educational and informational purposes only</strong>. It
                  does not constitute legal advice and should not be relied upon as
                  such.
                </p>
              </div>
              <p>
                No attorney-client relationship is created by using this Website or
                its content. For advice on your specific situation, please consult a
                qualified legal professional.
              </p>
            </section>

            {/* ===== 3. DATA OWNERSHIP & PROCESSING ===== */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                3. Your Data & Data Ownership
              </h2>
              <p>
                <strong className="text-white">You own your personal data.</strong>{' '}
                Nothing in these Terms transfers ownership of your personal data to
                us. We process your personal data only as described in our{' '}
                <Link href="/privacy-policy" className="text-purple-400 underline">
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link href="/consent-notice" className="text-purple-400 underline">
                  Consent Notice
                </Link>
                .
              </p>
              <p className="mt-3">
                <strong className="text-white">As a Data Principal</strong> under the
                Digital Personal Data Protection Act, 2023 ("DPDP Act"), you have
                specific rights (access, correction, erasure, grievance redressal,
                nomination, withdrawal of consent) which are explained in our
                Privacy Policy. These Terms do not limit those statutory rights.
              </p>
              <p className="mt-3">
                <strong className="text-white">As a user of our tools:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  Documents generated through our Document Generator are for your
                  use. We do not claim ownership over the content you input or the
                  documents generated.
                </li>
                <li>
                  Assessment results (Scorecard) are personalized to you. We may
                  retain anonymized/aggregated data for analytics and service
                  improvement.
                </li>
                <li>
                  You are responsible for the accuracy of the information you enter
                  into our tools.
                </li>
              </ul>
            </section>

            {/* ===== 4. YOUR OBLIGATIONS ===== */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                4. Your Obligations as a User
              </h2>
              <p>By using the Website, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  Provide <strong>accurate, current, and complete</strong>{' '}
                  information in all forms and tools.
                </li>
                <li>
                  Not use the Website for any <strong>unlawful purpose</strong> or in
                  violation of any applicable law, including the DPDP Act.
                </li>
                <li>
                  Not attempt to gain <strong>unauthorized access</strong> to any
                  part of the Website, its servers, or its databases.
                </li>
                <li>
                  Not submit <strong>sensitive personal data</strong> (health,
                  biometric, financial account numbers, etc.) through our forms
                  unless specifically required and clearly explained.
                </li>
                <li>
                  Not use our tools to generate documents for{' '}
                  <strong>fraudulent, misleading, or unlawful purposes</strong>.
                </li>
                <li>
                  Not <strong>scrape, crawl, or copy</strong> Website content for
                  commercial purposes without written permission.
                </li>
                <li>
                  Not <strong>impersonate</strong> any person or entity, or
                  misrepresent your affiliation.
                </li>
                <li>
                  Not use the Website in any way that could{' '}
                  <strong>damage, disable, overburden, or impair</strong> it.
                </li>
              </ul>
            </section>

            {/* ===== 5. GENERATED DOCUMENTS - LIABILITY ===== */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                5. Generated Documents — Your Responsibility
              </h2>
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
                <p>
                  The Privacy Policy, Consent Notice, DPA, Retention Policy, Breach
                  Response Plan, AI Governance documents, and other templates
                  generated through our Document Generator are{' '}
                  <strong className="text-white">
                    starting points and informational templates only
                  </strong>
                  . They are NOT legal advice.
                </p>
                <p className="mt-3">
                  Before using any generated document in your business, you must:
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Have it reviewed by a qualified legal professional</li>
                  <li>Customize it to your organization's specific operations</li>
                  <li>Ensure it complies with all applicable laws in your jurisdiction</li>
                </ul>
                <p className="mt-3">
                  <strong className="text-white">
                    We accept no liability for any loss, penalty, or damage arising
                    from the use of generated documents without proper legal review.
                  </strong>
                </p>
              </div>
            </section>

            {/* ===== 6. INTELLECTUAL PROPERTY ===== */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                6. Intellectual Property
              </h2>
              <p>
                All content on the Website — including text, graphics, logos, design,
                code, and the DPDPA Master Course materials — is the property of
                Businezexcellence StartX LLP and is protected by copyright,
                trademark, and other intellectual property laws.
              </p>
              <p className="mt-3">You may NOT:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Reproduce, distribute, or publicly display our content without permission</li>
                <li>Create derivative works based on our content</li>
                <li>Use our trademarks, logos, or brand names without written consent</li>
                <li>Sell, license, or commercially exploit our content</li>
              </ul>
              <p className="mt-3">
                <strong className="text-white">Exception:</strong> You may share
                links to our Website and quote short excerpts (with attribution) for
                non-commercial educational purposes.
              </p>
            </section>

            {/* ===== 7. CERTIFICATIONS ===== */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                7. Certifications & Course Completion
              </h2>
              <p>
                The DPDPA Master Course is provided free of charge for educational
                purposes. Certificates issued upon successful completion are proof of
                course completion by Legal Galaxy (Businezexcellence StartX LLP).
              </p>
              <p className="mt-3">
                <strong className="text-white">Certificates do NOT:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Constitute a government-recognized professional qualification</li>
                <li>Guarantee employment or business outcomes</li>
                <li>Create any certification or accreditation relationship with the Data Protection Board of India</li>
                <li>Replace formal legal education or professional licensing</li>
              </ul>
              <p className="mt-3">
                We reserve the right to revoke certificates if fraud or misconduct is
                detected.
              </p>
            </section>

            {/* ===== 8. THIRD-PARTY LINKS ===== */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                8. Third-Party Links & Services
              </h2>
              <p>
                The Website may contain links to third-party websites, tools, or
                services. We do not control and are not responsible for the content,
                privacy practices, or accuracy of any third-party site. Your use of
                third-party services is at your own risk.
              </p>
            </section>

            {/* ===== 9. DISCLAIMER OF WARRANTIES ===== */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                9. Disclaimer of Warranties
              </h2>
              <p>
                The Website and its content are provided{' '}
                <strong className="text-white">"as is"</strong> and{' '}
                <strong className="text-white">"as available"</strong> without any
                warranties of any kind, either express or implied, including but not
                limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Warranties of merchantability or fitness for a particular purpose</li>
                <li>Warranties of accuracy, completeness, or reliability of content</li>
                <li>Warranties of uninterrupted or error-free operation</li>
                <li>Warranties that defects will be corrected</li>
              </ul>
              <p className="mt-3">
                We do not warrant that the Website will be free of viruses, malware, or
                other harmful components.
              </p>
            </section>

            {/* ===== 10. LIMITATION OF LIABILITY ===== */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                10. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, Businezexcellence
                StartX LLP, its partners, employees, and agents shall NOT be liable
                for any:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Indirect, incidental, special, consequential, or punitive damages</li>
                <li>Loss of profits, revenue, data, or business opportunity</li>
                <li>Damages arising from use of or inability to use the Website</li>
                <li>Damages arising from reliance on content or generated documents</li>
                <li>Damages arising from unauthorized access to your data (beyond our reasonable control)</li>
              </ul>
              <p className="mt-3">
                This limitation applies regardless of the legal theory (contract,
                tort, negligence, or otherwise) on which the claim is based.
              </p>
            </section>

            {/* ===== 11. INDEMNITY ===== */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">11. Indemnity</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Businezexcellence
                StartX LLP and its officers, directors, employees, and agents from any
                claims, damages, losses, liabilities, and expenses (including legal
                fees) arising from:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Your use of the Website or its content</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any applicable law</li>
                <li>Your misuse of generated documents or tools</li>
              </ul>
            </section>

            {/* ===== 12. DPDP SPECIFIC - GRIEVANCE ===== */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                12. Data Privacy & Grievance Redressal
              </h2>
              <p>
                For any concerns regarding the processing of your personal data under
                the DPDP Act, please contact our Grievance Officer. Detailed
                information is available on our{' '}
                <Link
                  href="/grievance-redressal"
                  className="text-purple-400 underline"
                >
                  Grievance Redressal page
                </Link>
                .
              </p>
              <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-xl">
                <p>
                  <strong className="text-white">Grievance Officer:</strong> Shilpi
                  Kulshrestha
                </p>
                <p className="mt-1">
                  <strong className="text-white">Email:</strong>{' '}
                  <a
                    href="mailto:grievance@businezexcellence.com"
                    className="text-purple-400 underline"
                  >
                    grievance@businezexcellence.com
                  </a>
                </p>
                <p className="mt-1">
                  <strong className="text-white">Phone:</strong> +91-8800138008
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  Acknowledgment within 48 hours; resolution within 90 days.
                </p>
              </div>
            </section>

            {/* ===== 13. CHANGES TO TERMS ===== */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                13. Changes to These Terms
              </h2>
              <p>
                We reserve the right to update or modify these Terms at any time. The
                updated version will be published on this page with a revised "Last
                Updated" date. Your continued use of the Website after changes are
                posted constitutes acceptance of the updated Terms.
              </p>
              <p className="mt-3">
                Where required by applicable law, we will provide notice of material
                changes and, if necessary, seek fresh consent.
              </p>
            </section>

            {/* ===== 14. TERMINATION ===== */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">14. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your access to the
                Website at our sole discretion, without notice, if we believe you have
                violated these Terms or engaged in conduct that could harm us, other
                users, or third parties.
              </p>
            </section>

            {/* ===== 15. GOVERNING LAW ===== */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                15. Governing Law & Jurisdiction
              </h2>
              <p>
                These Terms are governed by and construed in accordance with the laws
                of <strong className="text-white">India</strong>. Any dispute arising
                out of or in connection with these Terms shall be subject to the
                exclusive jurisdiction of the courts at{' '}
                <strong className="text-white">Noida, Uttar Pradesh, India</strong>.
              </p>
              <p className="mt-3">
                This does not affect your statutory rights under the DPDP Act, 2023,
                including your right to approach the Data Protection Board of India.
              </p>
            </section>

            {/* ===== 16. SEVERABILITY ===== */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">16. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable or
                invalid, that provision shall be limited or eliminated to the minimum
                extent necessary, and the remaining provisions shall remain in full
                force and effect.
              </p>
            </section>

            {/* ===== 17. CONTACT ===== */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">17. Contact Us</h2>
              <p>
                For questions about these Terms or our services, contact us at:
              </p>
              <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-xl space-y-1">
                <p>
                  <strong className="text-white">Email:</strong>{' '}
                  <a
                    href="mailto:office@businezexcellence.com"
                    className="text-purple-400 underline"
                  >
                    office@businezexcellence.com
                  </a>
                </p>
                <p>
                  <strong className="text-white">Grievance:</strong>{' '}
                  <a
                    href="mailto:grievance@businezexcellence.com"
                    className="text-purple-400 underline"
                  >
                    grievance@businezexcellence.com
                  </a>
                </p>
                <p>
                  <strong className="text-white">Phone:</strong> +91-8800138008
                </p>
                <p>
                  <strong className="text-white">Address:</strong> Businezexcellence
                  StartX LLP, Anthurium Office Space, Sector 73, Noida, Uttar Pradesh
                  201307, India
                </p>
              </div>
            </section>
          </div>

          {/* Footer Note */}
          <div className="mt-10 pt-6 border-t border-white/20">
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong className="text-gray-400">Disclaimer:</strong> These Terms are
              for educational and informational purposes and do not constitute legal
              advice. For advice on your specific situation, please consult a
              qualified legal professional. Your use of this Website is subject to
              our Privacy Policy, Consent Notice, and Disclaimer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}