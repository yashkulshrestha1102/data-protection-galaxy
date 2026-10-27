// app/grievance-redressal/page.tsx

import Link from "next/link";
import { ArrowLeft, Shield, Mail, Phone, Clock, AlertCircle, CheckCircle,UserCheck  } from "lucide-react";

export const metadata = {
  title: "Grievance Redressal | Legal Galaxy",
  description:
    "File a grievance about your personal data processing under the DPDP Act 2023. Contact our Grievance Officer at Legal Galaxy.",
  alternates: { canonical: "/grievance-redressal" },
};

export default function GrievanceRedressalPage() {
  return (
    <main className="min-h-screen text-white px-4 pt-28 md:pt-32 pb-16 relative overflow-hidden">
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
            <h1 className="text-3xl font-bold text-white">Grievance Redressal</h1>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed mb-8">
            In accordance with the <strong className="text-white">Digital Personal Data Protection Act, 2023</strong> and the{" "}
            <strong className="text-white">DPDP Rules, 2025</strong>, Legal Galaxy has appointed a Grievance Officer to
            address any concerns regarding the processing of your personal data.
          </p>

          <div className="space-y-8 text-gray-300 text-sm leading-relaxed">
            {/* Grievance Officer Details */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                <UserCheck className="w-6 h-6 text-purple-400" />
                Grievance Officer Details
              </h2>
              <div className="bg-white/5 border border-white/20 rounded-xl p-6 space-y-3">
                <p><strong className="text-white">Name:</strong> Shilpi Kulshrestha</p>
                <p><strong className="text-white">Designation:</strong> Grievance Officer & Founder, Businezexcellence StartX LLP</p>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <strong className="text-white">Email:</strong>
                  <a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">
                    grievance@businezexcellence.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <strong className="text-white">Phone:</strong> +91 8800138008
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-purple-400" />
                  <strong className="text-white">Working Hours:</strong> Monday to Friday, 10:00 AM – 6:00 PM IST
                </div>
              </div>
            </section>

            {/* How to file */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">How to File a Grievance</h2>
              <ol className="list-decimal pl-6 space-y-3">
                <li>Send an email to <a href="mailto:grievance@businezexcellence.com" className="text-purple-400 underline">grievance@businezexcellence.com</a> with the subject line "Data Privacy Grievance".</li>
                <li>Include the following details in your email:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Your full name and contact details</li>
                    <li>Description of your grievance</li>
                    <li>Any supporting documents or screenshots</li>
                    <li>Your desired resolution</li>
                  </ul>
                </li>
                <li>You will receive an <strong className="text-white">acknowledgment within 48 hours</strong>.</li>
                <li>We will investigate and respond with a resolution within <strong className="text-white">90 days</strong>.</li>
              </ol>
            </section>

            {/* Timelines */}
                        <section>
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6 text-purple-400" />
                Resolution Timelines (DPDP Rules 2025)
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border border-white/10 rounded-lg">
                  <thead className="bg-white/10">
                    <tr>
                      <th className="px-4 py-3 text-left text-white text-sm font-semibold">Stage</th>
                      <th className="px-4 py-3 text-left text-white text-sm font-semibold">Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="px-4 py-3 text-gray-300">Acknowledgment of grievance</td>
                      <td className="px-4 py-3 text-white font-medium">Within 48 hours</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-300">Final resolution</td>
                      <td className="px-4 py-3 text-white font-medium">Within 7 working days</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-300">Extension (if necessary)</td>
                      <td className="px-4 py-3 text-white font-medium">Communicated with reasons</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-gray-400">
                * As per the DPDP Rules, 2025, we aim to resolve all grievances within 7 working days. If we are unable to do so due to complex circumstances, we will inform you of the delay and the revised timeline.
              </p>
            </section>

            {/* Escalation */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-yellow-400" />
                Escalation to Data Protection Board
              </h2>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5">
                <p>
                  If you are not satisfied with our response, or if we fail to resolve your grievance within 90 days,
                  you have the right to file a complaint with the{" "}
                  <strong className="text-white">Data Protection Board of India (DPB)</strong>.
                </p>
                <p className="mt-3">
                  You may also approach the DPB directly if your grievance involves a personal data breach.
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-400" />
                Your Rights Under DPDP Act
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Right to Access your personal data</li>
                <li>Right to Correction of inaccurate data</li>
                <li>Right to Erasure (Right to be Forgotten)</li>
                <li>Right to Grievance Redressal (this page)</li>
                <li>Right to Nominate a representative</li>
                <li>Right to Withdraw Consent</li>
              </ul>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-3">Still Need Help?</h2>
              <p className="text-gray-300 mb-4">
                For general inquiries (not grievances), you can contact us at:
              </p>
              <p><strong className="text-white">Email:</strong> <a href="mailto:office@businezexcellence.com" className="text-purple-400 underline">office@businezexcellence.com</a></p>
              <p className="mt-2"><strong className="text-white">Phone:</strong> +91 8800138008</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}