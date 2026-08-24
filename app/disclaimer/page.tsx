// app/disclaimer/page.tsx

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function DisclaimerPage() {
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
          <h1 className="text-3xl font-bold text-white mb-6">Disclaimer</h1>

          <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mb-6">
              <h2 className="text-xl font-semibold text-yellow-400 mb-3">⚠️ No Legal Advice</h2>
              <p className="mb-4">The information provided on Legal Galaxy is for <strong>educational and informational purposes only</strong>. It is not intended to be, and should not be construed as, legal advice.</p>
              <p>You should consult with a qualified legal professional for advice regarding your specific situation.</p>
            </div>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. No Attorney-Client Relationship</h2>
              <p>Your use of this website does not create an attorney-client relationship between you and Legal Galaxy or BusinezExcellence StartX LLP.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Accuracy of Information</h2>
              <p>We strive to provide accurate and up-to-date information, but we make no warranties or representations about the accuracy, completeness, or reliability of any content on this website.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites. We do not endorse or assume responsibility for the content or practices of any linked sites.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Generated Documents</h2>
              <p>Documents generated through our tools are templates for informational purposes. They should be reviewed and customized by a qualified legal professional before use.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Contact Us</h2>
              <p><strong>Email:</strong> info@legalgalaxy.com</p>
              <p><strong>Phone:</strong> +91 98765 43210</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}