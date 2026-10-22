import Link from 'next/link';
import { ArrowLeft, Shield, CheckCircle, Database, Globe, AlertTriangle, FileText, Scale, BookOpen, ArrowRight, UserCheck } from 'lucide-react';

export const metadata = {
  title: 'Obligations of Data Fiduciaries | DPDP Act 2023 | Legal Galaxy',
  description: 'Learn about the strict legal obligations of Data Fiduciaries under India\'s DPDP Act 2023. Understand the requirements for notice, consent, data minimisation, security safeguards, and breach reporting.',
};

export default function ObligationsPage() {
  const obligations = [
    { 
      icon: FileText, 
      title: '1. Providing Clear Notice', 
      subtitle: 'Transparency before data collection.',
      description: 'Before requesting consent, a Data Fiduciary must provide a clear, independent, and easily understandable notice. This notice must explicitly describe the personal data being sought, the specific purpose of processing, and the manner in which the Data Principal can exercise their rights and file complaints.' 
    },
    { 
      icon: CheckCircle, 
      title: '2. Consent & Legitimate Use', 
      subtitle: 'Lawful basis for processing.',
      description: 'Personal data can only be processed based on the free, specific, informed, unconditional, and unambiguous consent of the Data Principal. Alternatively, data can be processed for certain "legitimate uses" defined by the Act. Crucially, consent must be as easy to withdraw as it is to give.' 
    },
    { 
      icon: Database, 
      title: '3. Data Minimisation & Accuracy', 
      subtitle: 'Collect only what is needed.',
      description: 'Fiduciaries must only collect data that is absolutely necessary for the specified purpose (Data Minimisation). Furthermore, they are obligated to ensure that the personal data processed is accurate, complete, and kept up-to-date, especially when the data is used to make decisions affecting the individual.' 
    },
    { 
      icon: Globe, 
      title: '4. Storage Limitation', 
      subtitle: 'Delete when the purpose is served.',
      description: 'Data cannot be retained indefinitely. The Data Fiduciary must erase personal data once the purpose for which it was collected is fulfilled, or when the Data Principal withdraws consent, unless retention is required by law for legal or regulatory compliance.' 
    },
    { 
      icon: Shield, 
      title: '5. Security Safeguards', 
      subtitle: 'Protect the data at all costs.',
      description: 'Organisations are legally required to implement reasonable technical and organizational security safeguards (like encryption, access controls, and monitoring) to prevent data breaches. The responsibility extends to ensuring that third-party Data Processors also maintain these standards.' 
    },
    { 
      icon: AlertTriangle, 
      title: '6. Breach Notification', 
      subtitle: 'Report incidents immediately.',
      description: 'In the event of a personal data breach, the Data Fiduciary must notify the Data Protection Board of India and the affected Data Principals without any undue delay. The notification must detail the nature of the breach, the potential impact, and the remedial actions taken.' 
    },
    { 
      icon: UserCheck, 
      title: '7. Grievance Redressal', 
      subtitle: 'A dedicated mechanism for complaints.',
      description: 'Every Data Fiduciary must establish an effective and readily available grievance redressal mechanism. If a Data Principal is not satisfied with the response, they have the right to escalate the complaint to the Data Protection Board of India.' 
    },
    { 
      icon: Scale, 
      title: '8. Accountability & Appointing DPO', 
      subtitle: 'Governance and oversight.',
      description: 'Significant Data Fiduciaries (SDFs) have enhanced obligations, including appointing a Data Protection Officer (DPO) based in India, appointing an independent data auditor, and conducting periodic Data Protection Impact Assessments (DPIAs).' 
    },
  ];

  return (
    <main className="min-h-screen text-white px-4 pt-28 md:pt-32 pb-16 relative overflow-hidden">
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/home1.jpeg')" }}>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <Link href="/galaxy" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Galaxy
        </Link>

        {/* ===== HEADER ===== */}
        <div className="max-w-4xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Obligations of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Data Fiduciaries</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Under the Digital Personal Data Protection (DPDP) Act, 2023, a <strong>Data Fiduciary</strong> is any entity that determines the purpose and means of processing personal data. With the power to process data comes strict legal accountability. 
          </p>
          <p className="text-gray-400 mt-4">
            The Act shifts the burden of data protection onto businesses. Failure to comply with these 8 core obligations can result in severe financial penalties. Here is a breakdown of what the law expects from organisations.
          </p>
        </div>

        {/* ===== OBLIGATIONS GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {obligations.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md hover:bg-white/10 transition-all duration-300 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0 border border-purple-500/30">
                    <Icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                </div>
                
                <p className="text-sm text-purple-300 font-medium mb-3">{item.subtitle}</p>
                <p className="text-sm text-gray-300 leading-7 flex-grow">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* ===== INTERNAL LINKING / CTA SECTION ===== */}
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-3">Need to train your team?</h2>
              <p className="text-gray-300 leading-relaxed text-sm">
                Understanding these obligations is the first step. Ensure your legal, IT, and HR teams are aware of the new DPDP Act rules. Use our free assessment to see where your organisation stands today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
              <Link
                href="/scorecard"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold hover:scale-105 transition-all text-center text-sm"
              >
                Check Compliance
              </Link>
              <Link
                href="/certificate-course"
                className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all text-center text-sm flex items-center justify-center gap-2"
              >
                View Course <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* ===== READ MORE SECTION ===== */}
        <div className="border-t border-white/10 pt-8">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-400" />
            Related Topics for Businesses
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/penalties" className="bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-xl transition-all group">
              <h4 className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors">Penalties for Non-Compliance</h4>
              <p className="text-xs text-gray-400 mt-1">Learn about the fines up to ₹250 crore.</p>
            </Link>
            <Link href="/insight/data-breach-response-dpdp" className="bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-xl transition-all group">
              <h4 className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors">Data Breach Response</h4>
              <p className="text-xs text-gray-400 mt-1">How to report a breach within 72 hours.</p>
            </Link>
            <Link href="/resources/guides/dpdpa-2023-complete-guide" className="bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-xl transition-all group">
              <h4 className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors">DPDPA Complete Guide</h4>
              <p className="text-xs text-gray-400 mt-1">The ultimate guide to the new law.</p>
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}