// app/privacy-policy/page.tsx

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen text-white px-4 pt-28 md:pt-32 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/home1.jpeg')" }}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md p-8">
          <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>
          <p className="text-gray-400 text-sm mb-6">Last Updated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

          <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
              <p>Legal Galaxy ("we", "our", "us") respects your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number when you fill forms or take assessments.</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent, and interactions with our content.</li>
                <li><strong>Device Information:</strong> Browser type, IP address, and device details.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and improve our services</li>
                <li>To send you assessment reports and certificates</li>
                <li>To communicate with you about our offerings</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Your Rights</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Right to access your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure ("right to be forgotten")</li>
                <li>Right to withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p className="mt-2"><strong>Email:</strong> info@legalgalaxy.com</p>
              <p><strong>Phone:</strong> +91 98765 43210</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
