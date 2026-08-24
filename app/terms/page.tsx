// app/terms/page.tsx

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
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
          <h1 className="text-3xl font-bold text-white mb-6">Terms of Use</h1>
          <p className="text-gray-400 text-sm mb-6">Last Updated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

          <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
              <p>By using Legal Galaxy ("we", "our", "us"), you agree to these Terms of Use. If you do not agree, please do not use our website.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. No Legal Advice</h2>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-4">
                <p className="text-yellow-400 font-medium">⚠️ Important Disclaimer</p>
                <p className="text-gray-300 mt-1">The content on Legal Galaxy is for <strong>educational and informational purposes only</strong>. It does not constitute legal advice. You should consult a qualified legal professional for advice specific to your situation.</p>
              </div>
              <p>No attorney-client relationship is created by using this website or its content.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Intellectual Property</h2>
              <p>All content, including text, graphics, logos, and software, is the property of Legal Galaxy / BusinezExcellence StartX LLP and is protected by copyright and intellectual property laws.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. User Conduct</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You agree to use the website only for lawful purposes</li>
                <li>You will not attempt to gain unauthorized access to any part of the website</li>
                <li>You will not misuse the assessment, generator, or certification features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Disclaimer of Warranties</h2>
              <p>The website and its content are provided "as is" without any warranties of any kind, either express or implied.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Contact Us</h2>
              <p>Questions about these Terms? Contact us at:</p>
              <p className="mt-2"><strong>Email:</strong> info@legalgalaxy.com</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}