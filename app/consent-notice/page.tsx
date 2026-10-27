// app/consent-notice/page.tsx

import Link from "next/link";
import { ArrowLeft, Shield, FileText, Clock, UserCheck, AlertCircle } from "lucide-react";

export const metadata = {
  title: "Consent Notice | Legal Galaxy",
  description:
    "Read our DPDP Act 2023 compliant consent notice. Understand what personal data we collect, why we collect it, and how you can withdraw your consent.",
  alternates: { canonical: "/consent-notice" },
};

export default function ConsentNoticePage() {
  return (
    <main className="min-h-screen text-white px-4 pt-28 md:pt-32 pb-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/home1.jpeg')" }}>
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
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
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-purple-400" />
            <h1 className="text-3xl font-bold text-white">Consent Notice</h1>
          </div>

          <p className="text-gray-400 text-sm mb-8">
            Last Updated: {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
          </p>

          <div className="space-y-8 text-gray-300 text-sm leading-relaxed">
            {/* Intro */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
              <p>
                This Consent Notice is issued by <strong className="text-white">Businezexcellence StartX LLP</strong> ("we", "us", "our"),
                operating the Legal Galaxy platform at <a href="https://dpdpa.businezexcellence.com" className="text-purple-400 underline">dpdpa.businezexcellence.com</a>,
                in compliance with the <strong className="text-white">Digital Personal Data Protection Act, 2023</strong> ("DPDP Act")
                and the <strong className="text-white">DPDP Rules, 2025</strong>.
              </p>
              <p className="mt-3">
                This notice explains what personal data we collect, why we collect it, how we use it, and how you can withdraw your consent.
                By providing your consent (by checking the consent checkbox), you agree to the processing of your personal data as described below.
              </p>
            </section>

            {/* What data */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-400" />
                2. Personal Data We Collect
              </h2>
              <p>When you submit a form on our website (Demo Request, Contact Form, or Document Generator), we may collect:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong className="text-white">Identity Data:</strong> First name, last name</li>
                <li><strong className="text-white">Contact Data:</strong> Work email address, phone number</li>
                <li><strong className="text-white">Professional Data:</strong> Company name, job title, company size, industry</li>
                <li><strong className="text-white">Communication Data:</strong> Your message, challenges, or query description</li>
                <li><strong className="text-white">Technical Data:</strong> IP address, browser type, device information, and cookies (only if you accept analytics cookies)</li>
              </ul>
            </section>

            {/* Purpose */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-400" />
                3. Purpose of Processing
              </h2>
              <p>We process your personal data for the following specific purposes:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong className="text-white">To respond to your inquiries:</strong> Contacting you about your Demo Request or Contact Form submission</li>
                <li><strong className="text-white">To provide requested services:</strong> Sending you generated documents (Privacy Policy, Consent Notice, DPAs, etc.) via email</li>
                <li><strong className="text-white">To improve our services:</strong> Understanding how users interact with our website (only with analytics consent)</li>
                <li><strong className="text-white">To comply with legal obligations:</strong> Maintaining records as required by law</li>
              </ul>
              <p className="mt-3 text-yellow-400 text-xs">
                ⚠️ We will NOT use your personal data for any other purpose without obtaining fresh consent from you.
              </p>
            </section>

            {/* Retention */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Data Retention</h2>
              <p>We retain your personal data only for as long as necessary for the purposes described above:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong className="text-white">Demo/Contact requests:</strong> 2 years from the date of submission</li>
                <li><strong className="text-white">Generated documents:</strong> 1 year from the date of generation</li>
                <li><strong className="text-white">Analytics cookies:</strong> Up to 2 years (or until you withdraw consent)</li>
              </ul>
              <p className="mt-3">
                After the retention period expires, your personal data will be securely deleted or anonymised.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-purple-400" />
                5. Your Rights as a Data Principal
              </h2>
              <p>Under the DPDP Act 2023, you have the following rights:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong className="text-white">Right to Access:</strong> Request a summary of personal data we process about you</li>
                <li><strong className="text-white">Right to Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong className="text-white">Right to Erasure:</strong> Request deletion of your personal data (subject to legal retention requirements)</li>
                <li><strong className="text-white">Right to Withdraw Consent:</strong> Withdraw your consent at any time (see Section 6 below)</li>
                <li><strong className="text-white">Right to Grievance Redressal:</strong> File a complaint with our Grievance Officer (see Section 7 below)</li>
                <li><strong className="text-white">Right to Nominate:</strong> Nominate another individual to exercise your rights in case of death or incapacity</li>
              </ul>
            </section>

            {/* Withdraw Consent */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. How to Withdraw Your Consent</h2>
              <p>You can withdraw your consent at any time by:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Emailing us at <a href="mailto:privacy@businezexcellence.com" className="text-purple-400 underline">privacy@businezexcellence.com</a> with the subject line "Withdraw Consent"</li>
                <li>Writing to our Grievance Officer at <a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a></li>
                <li>Using the "Cookie Settings" button on our website to change your cookie preferences</li>
              </ul>
              <p className="mt-3">
                Withdrawal of consent will not affect the lawfulness of processing based on consent before its withdrawal.
                We will process your request within <strong className="text-white">30 days</strong>.
              </p>
            </section>

            {/* Grievance Officer */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Grievance Officer</h2>
              <p>If you have any concerns about how we process your personal data, you can contact our Grievance Officer:</p>
              <div className="bg-white/5 border border-white/20 rounded-xl p-5 mt-4">
                <p><strong className="text-white">Name:</strong> Shilpi Kulshrestha</p>
                <p className="mt-2"><strong className="text-white">Designation:</strong> Grievance Officer & Founder, Businezexcellence StartX LLP</p>
                <p className="mt-2"><strong className="text-white">Email:</strong> <a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a></p>
                <p className="mt-2"><strong className="text-white">Phone:</strong> +91 8800138008</p>
                <p className="mt-2"><strong className="text-white">Response Time:</strong> Acknowledgment within 48 hours; resolution within 90 days</p>
              </div>
              <p className="mt-4">
                If you are not satisfied with our response, you have the right to file a complaint with the{" "}
                <strong className="text-white">Data Protection Board of India</strong>.
              </p>
            </section>

            {/* Important Notice */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-yellow-400" />
                8. Important Notice
              </h2>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5">
                <ul className="space-y-2 text-yellow-200">
                  <li>• By checking the consent checkbox, you give us <strong>free, specific, informed, unconditional, and unambiguous</strong> consent to process your personal data for the purposes described above.</li>
                  <li>• You can refuse to provide consent, or withdraw it later. However, we may not be able to provide certain services without your consent.</li>
                  <li>• We will not sell, rent, or share your personal data with third parties for marketing purposes.</li>
                  <li>• Your data may be shared with trusted service providers (e.g., Resend for emails, Google Sheets for storage) who are bound by data processing agreements.</li>
                </ul>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">9. Contact Us</h2>
              <p>For any questions about this Consent Notice or our data processing practices:</p>
              <p className="mt-2"><strong className="text-white">Email:</strong> <a href="mailto:privacy@businezexcellence.com" className="text-purple-400 underline">privacy@businezexcellence.com</a></p>
              <p><strong className="text-white">Address:</strong> Businezexcellence StartX LLP, India</p>
            </section>
          </div>

          {/* Back to Home */}
          <div className="mt-10 pt-6 border-t border-white/20">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}