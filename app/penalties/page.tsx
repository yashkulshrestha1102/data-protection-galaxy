import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Shield, AlertCircle, FileText, Scale, BookOpen, ArrowRight, IndianRupee ,CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Penalties & Offences under DPDP Act 2023 | Legal Galaxy',
  description: 'Understand the financial penalties for non-compliance under India\'s DPDP Act 2023. Learn about fines up to ₹250 Crore for data breaches, failure to protect children\'s data, and breach notification failures.',
};

export default function PenaltiesPage() {
  const penalties = [
    { 
      icon: Shield, 
      title: 'Failure to Protect Data', 
      amount: 'Up to ₹250 Crore',
      description: 'The highest penalty is reserved for Data Fiduciaries who fail to take reasonable security safeguards to prevent a personal data breach. This applies to serious breaches affecting large numbers of individuals.' 
    },
    { 
      icon: AlertCircle, 
      title: 'Failure to Notify Breach', 
      amount: 'Up to ₹200 Crore',
      description: 'If a data breach occurs, the Data Fiduciary must notify the Data Protection Board and affected individuals. Failure to report a breach in a timely manner attracts a heavy fine.' 
    },
    { 
      icon: AlertTriangle, 
      title: 'Children\'s Data Violations', 
      amount: 'Up to ₹200 Crore',
      description: 'Processing the personal data of children (under 18) without verifiable parental consent, or engaging in behavioral tracking/targeted advertising directed at children, carries massive penalties.' 
    },
    { 
      icon: Scale, 
      title: 'Significant Data Fiduciary (SDF) Non-Compliance', 
      amount: 'Up to ₹150 Crore',
      description: 'Significant Data Fiduciaries have extra obligations (appointing a DPO, independent audits). Failure to fulfill these enhanced duties as notified by the government results in this penalty.' 
    },
    { 
      icon: AlertTriangle, 
      title: 'Failure to Report Board Directions', 
      amount: 'Up to ₹150 Crore',
      description: 'The Data Protection Board has the power to issue interim or final directions to an organisation. If the organisation fails to comply with these official directions, a penalty can be imposed.' 
    },
    { 
      icon: FileText, 
      title: 'General Non-Compliance', 
      amount: 'Up to ₹50 Crore',
      description: 'Breach of any other terms or conditions of the DPDP Act (like failing to maintain accurate records or not providing proper notice) falls under this category.' 
    },
  ];

  return (
    <main className="min-h-screen text-white px-4 pt-28 md:pt-32 pb-16 relative overflow-hidden">
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/home1.jpeg')" }}>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
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
            Penalties & Offences under the <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">DPDP Act 2023</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            The Indian government has introduced the DPDP Act to ensure strict compliance. Unlike previous laws, the financial penalties are severe, designed to make businesses take data privacy seriously. 
          </p>
          <p className="text-gray-400 mt-4">
            The Schedule of the Act categorizes offences and assigns specific maximum penalties. Here is the breakdown of how much an organisation can be fined.
          </p>
        </div>

        {/* ===== PENALTIES GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {penalties.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md hover:bg-white/10 transition-all duration-300 flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center flex-shrink-0 border border-red-500/30 mt-1">
                    <Icon className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                    <div className="inline-flex items-center gap-1 text-sm font-bold text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                      <IndianRupee className="w-3.5 h-3.5" />
                      {item.amount.replace('Up to ₹', '')} Fine
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-gray-300 leading-7 flex-grow mt-2">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* ===== HOW ENFORCEMENT WORKS ===== */}
        <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-2xl p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                <Scale className="w-6 h-6 text-red-400" />
                How are Penalties Enforced?
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm mb-4">
                Penalties are not imposed automatically. The Data Protection Board of India follows a due process. They will consider factors like the nature of the breach, the impact on data principals, and whether the company took corrective action.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                  <span>Investigations are initiated based on complaints or government references.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                  <span>Organisations are given a chance to present their case.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                  <span>Appeals can be made to the Telecom Disputes Settlement and Appellate Tribunal (TDSAT).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ===== READ MORE SECTION ===== */}
        <div className="border-t border-white/10 pt-8">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-400" />
            Related Topics on Compliance
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/obligations" className="bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-xl transition-all group">
              <h4 className="text-sm font-medium text-white group-hover:text-red-400 transition-colors">Obligations of Data Fiduciary</h4>
              <p className="text-xs text-gray-400 mt-1">Learn how to avoid these penalties.</p>
            </Link>
            <Link href="/board" className="bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-xl transition-all group">
              <h4 className="text-sm font-medium text-white group-hover:text-red-400 transition-colors">Data Protection Board</h4>
              <p className="text-xs text-gray-400 mt-1">The authority that enforces the law.</p>
            </Link>
            <Link href="/insight/dpdp-act-director-liability" className="bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-xl transition-all group">
              <h4 className="text-sm font-medium text-white group-hover:text-red-400 transition-colors">Director Liability</h4>
              <p className="text-xs text-gray-400 mt-1">Can directors be personally penalized?</p>
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}