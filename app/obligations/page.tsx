import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  Shield,
  CheckCircle,
  Database,
  Globe,
  AlertTriangle,
  FileText,
  Scale,
  BookOpen,
  ArrowRight,
  UserCheck,
  Calendar,
  Clock,
  XCircle,
  Users,
  Gavel,
  Lock,
  Eye,
  Building,
  Landmark,
  ClipboardCheck,
  TrendingUp,
  Info,
  Baby,
  RefreshCw,
} from 'lucide-react';

export default function ObligationsPage() {
  // ===== 8 CORE OBLIGATIONS =====
  const obligations = [
    {
      icon: FileText,
      title: '1. Providing Clear Notice',
      subtitle: 'Transparency before data collection.',
      section: 'Section 5',
      description:
        'Before requesting consent, a Data Fiduciary must provide a clear, independent, and easily understandable notice. This notice must explicitly describe the personal data being sought, the specific purpose of processing, and the manner in which the Data Principal can exercise their rights and file complaints.',
      details: [
        'Notice must be provided BEFORE consent is sought',
        'Must be in clear, plain language (including regional languages)',
        'Must describe the specific data being collected',
        'Must state the purpose of processing',
        'Must explain how to exercise rights and file complaints',
        'Must include a link to withdraw consent',
      ],
    },
    {
      icon: CheckCircle,
      title: '2. Consent & Legitimate Use',
      subtitle: 'Lawful basis for processing.',
      section: 'Section 6 & 7',
      description:
        'Personal data can only be processed based on the free, specific, informed, unconditional, and unambiguous consent of the Data Principal. Alternatively, data can be processed for certain "legitimate uses" defined by the Act. Crucially, consent must be as easy to withdraw as it is to give.',
      details: [
        'Consent must be free, specific, informed, unconditional, and unambiguous',
        'Consent must be limited to the specified purpose',
        'Consent withdrawal must be as easy as giving consent',
        'Legitimate uses include: state functions, legal obligations, medical emergencies',
        'Consent Managers may be used to manage consent',
      ],
    },
    {
      icon: Database,
      title: '3. Data Minimisation & Accuracy',
      subtitle: 'Collect only what is needed.',
      section: 'Section 8(1) & 8(2)',
      description:
        'Fiduciaries must only collect data that is absolutely necessary for the specified purpose (Data Minimisation). Furthermore, they are obligated to ensure that the personal data processed is accurate, complete, and kept up-to-date, especially when the data is used to make decisions affecting the individual.',
      details: [
        'Collect only data necessary for the specified purpose',
        'Ensure data is accurate, complete, and up-to-date',
        'Implement processes for correction of inaccurate data',
        'Avoid collecting data "just in case" it might be useful',
        'Regularly review and update data quality',
      ],
    },
    {
      icon: Globe,
      title: '4. Storage Limitation',
      subtitle: 'Delete when the purpose is served.',
      section: 'Section 8(7)',
      description:
        'Data cannot be retained indefinitely. The Data Fiduciary must erase personal data once the purpose for which it was collected is fulfilled, or when the Data Principal withdraws consent, unless retention is required by law for legal or regulatory compliance.',
      details: [
        'Erase data when the purpose is fulfilled',
        'Erase data when consent is withdrawn',
        'Retention allowed where required by law (e.g., tax, RBI KYC)',
        'Implement a data retention schedule',
        'Regularly audit and purge obsolete data',
      ],
    },
    {
      icon: Shield,
      title: '5. Security Safeguards',
      subtitle: 'Protect the data at all costs.',
      section: 'Section 8(5)',
      description:
        'Organisations are legally required to implement reasonable technical and organizational security safeguards (like encryption, access controls, and monitoring) to prevent data breaches. The responsibility extends to ensuring that third-party Data Processors also maintain these standards.',
      details: [
        'Implement reasonable technical safeguards (encryption, firewalls, access controls)',
        'Implement organisational safeguards (policies, training, audits)',
        'Ensure Data Processors maintain equivalent standards through contracts',
        'Conduct regular security audits and penetration testing',
        'Failure to protect data can attract up to ?250 crore penalty',
      ],
    },
    {
      icon: AlertTriangle,
      title: '6. Breach Notification',
      subtitle: 'Report incidents immediately.',
      section: 'Section 8(6)',
      description:
        'In the event of a personal data breach, the Data Fiduciary must notify the Data Protection Board of India and the affected Data Principals without any undue delay. The notification must detail the nature of the breach, the potential impact, and the remedial actions taken.',
      details: [
        'Notify the Data Protection Board "without undue delay"',
        'Notify affected Data Principals without undue delay',
        'Notification must describe the nature of the breach',
        'Notification must describe the impact and remedial actions',
        'Failure to notify can attract up to ?200 crore penalty',
      ],
    },
    {
      icon: UserCheck,
      title: '7. Grievance Redressal',
      subtitle: 'A dedicated mechanism for complaints.',
      section: 'Section 13',
      description:
        'Every Data Fiduciary must establish an effective and readily available grievance redressal mechanism. If a Data Principal is not satisfied with the response, they have the right to escalate the complaint to the Data Protection Board of India.',
      details: [
        'Publish the name and contact details of a Grievance Officer',
        'Establish a clear, accessible complaint process',
        'Respond to complaints within the prescribed time',
        'If unresolved, Data Principals can escalate to the Board',
        'Maintain records of all complaints and resolutions',
      ],
    },
    {
      icon: Scale,
      title: '8. Accountability & Appointing DPO',
      subtitle: 'Governance and oversight.',
      section: 'Section 10',
      description:
        'Significant Data Fiduciaries (SDFs) have enhanced obligations, including appointing a Data Protection Officer (DPO) based in India, appointing an independent data auditor, and conducting periodic Data Protection Impact Assessments (DPIAs).',
      details: [
        'Applies only to notified Significant Data Fiduciaries (SDFs)',
        'Appoint a DPO based in India',
        'Appoint an independent data auditor',
        'Conduct periodic Data Protection Impact Assessments (DPIAs)',
        'Undertake other measures as prescribed',
      ],
    },
  ];

  // ===== SDF FACTORS =====
  const sdfFactors = [
    {
      icon: TrendingUp,
      title: 'Volume & Sensitivity of Data',
      desc: 'The volume and sensitivity of personal data processed by the Fiduciary.',
    },
    {
      icon: Users,
      title: 'Risk to Data Principals',
      desc: 'The risk to the rights of Data Principals.',
    },
    {
      icon: Landmark,
      title: 'Impact on Sovereignty',
      desc: 'The potential impact on the sovereignty and integrity of India.',
    },
    {
      icon: Shield,
      title: 'Security of the State',
      desc: 'The risk to the security of the State.',
    },
    {
      icon: Gavel,
      title: 'Electoral Democracy',
      desc: 'The risk to public order or electoral democracy.',
    },
  ];

  // ===== COMPLIANCE CHECKLIST =====
  const checklist = [
    'Publish a clear, plain-language privacy notice on your website and app',
    'Implement a consent management system with easy withdrawal',
    'Conduct a data inventory to map what data you collect and why',
    'Implement data minimisation � stop collecting unnecessary data',
    'Establish a data retention schedule and purge obsolete data',
    'Implement reasonable security safeguards (encryption, access controls)',
    'Conduct regular security audits and penetration testing',
    'Sign Data Processing Agreements with all vendors and processors',
    'Establish a breach notification procedure with clear timelines',
    'Appoint a Grievance Officer and publish contact details',
    'Implement a complaint tracking and resolution system',
    'Appoint a DPO (if you are a Significant Data Fiduciary)',
    'Conduct periodic Data Protection Impact Assessments (DPIAs)',
    'Train employees on DPDPA obligations and data handling',
    'Review and update vendor contracts for DPDPA compliance',
    'Document your compliance programme for audit readiness',
  ];

  // ===== CONSEQUENCES =====
  const consequences = [
    {
      violation: 'Failure to take reasonable security safeguards',
      penalty: 'Up to ?250 Crore',
      icon: Shield,
    },
    {
      violation: 'Failure to notify a personal data breach',
      penalty: 'Up to ?200 Crore',
      icon: AlertTriangle,
    },
    {
      violation: 'Processing children\'s data without consent',
      penalty: 'Up to ?200 Crore',
      icon: Baby,
    },
    {
      violation: 'SDF non-compliance',
      penalty: 'Up to ?150 Crore',
      icon: Scale,
    },
    {
      violation: 'Failure to comply with Board directions',
      penalty: 'Up to ?150 Crore',
      icon: Gavel,
    },
    {
      violation: 'General non-compliance (including grievance redressal failures)',
      penalty: 'Up to ?50 Crore',
      icon: FileText,
    },
  ];

  // ===== FAQS =====
  const faqs = [
    {
      q: 'What is a Data Fiduciary under the DPDP Act 2023?',
      a: 'A Data Fiduciary is any person, company, or entity that alone or jointly with others determines the purpose and means of processing personal data. This includes most businesses, websites, apps, and service providers operating in India.',
    },
    {
      q: 'What are the core obligations of a Data Fiduciary?',
      a: 'The 8 core obligations are: (1) Providing clear notice before collecting data, (2) Obtaining valid consent or establishing legitimate use, (3) Data minimisation and accuracy, (4) Storage limitation, (5) Implementing reasonable security safeguards, (6) Breach notification, (7) Grievance redressal, and (8) Appointing a DPO (for SDFs).',
    },
    {
      q: 'What is a Significant Data Fiduciary (SDF)?',
      a: 'An SDF is a Data Fiduciary notified by the Central Government based on factors such as the volume and sensitivity of data processed, risk to Data Principals, impact on India\'s sovereignty, and risk to electoral democracy. SDFs have enhanced obligations, including appointing a DPO in India and conducting DPIAs.',
    },
    {
      q: 'How quickly must a data breach be reported under the DPDP Act?',
      a: 'The Act requires breach notification "without undue delay." While the exact timeline will be prescribed in the Rules, industry practice suggests notification to the Board within 72 hours and to affected Data Principals without undue delay. Failure to notify can attract a penalty of up to ?200 crore.',
    },
    {
      q: 'What happens if a Data Fiduciary fails to comply with its obligations?',
      a: 'Failure to comply can attract civil penalties ranging from ?50 crore to ?250 crore, depending on the nature of the violation. The Data Protection Board can also issue directions, order remedial measures, and proceed against directors and officers personally.',
    },
    {
      q: 'Does the DPDP Act apply to small businesses?',
      a: 'Yes. The DPDP Act applies to all Data Fiduciaries processing personal data in India, regardless of size. However, the government may exempt certain classes of Data Fiduciaries (such as startups) from certain obligations through notification, subject to safeguards.',
    },
    {
      q: 'What is the role of a Data Protection Officer (DPO)?',
      a: 'A DPO is responsible for ensuring compliance with the DPDP Act, acting as a point of contact for Data Principals and the Data Protection Board, and overseeing data protection impact assessments. For SDFs, the DPO must be based in India and report to the board of directors.',
    },
    {
      q: 'Can a Data Fiduciary outsource its obligations to a Data Processor?',
      a: 'No. While a Data Fiduciary can engage a Data Processor, the ultimate responsibility for compliance remains with the Data Fiduciary. The Fiduciary must ensure the Processor implements adequate security safeguards through a valid contract and remains liable for the Processor\'s acts.',
    },
  ];

  // ===== RELATED LINKS =====
  const relatedLinks = [
    {
      title: 'Penalties for Non-Compliance',
      href: '/penalties',
      desc: 'Learn about the fines up to ?250 crore.',
    },
    {
      title: 'Data Breach Response',
      href: '/insight/data-breach-response-dpdp',
      desc: 'How to report a breach within 72 hours.',
    },
    {
      title: 'Rights of Data Principals',
      href: '/rights',
      desc: 'The rights your obligations are designed to protect.',
    },
    {
      title: 'Data Protection Board',
      href: '/board',
      desc: 'The authority that enforces these obligations.',
    },
    {
      title: 'DPDPA Complete Guide',
      href: '/resources/guides/dpdpa-2023-complete-guide',
      desc: 'The ultimate guide to the new law.',
    },
    {
      title: 'Cross-Border Data Transfer',
      href: '/cross-border',
      desc: 'Obligations for international data transfers.',
    },
  ];

  return (
    <main className="min-h-screen text-white px-4 pt-28 md:pt-32 pb-16 relative overflow-hidden">
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/home1.jpeg')" }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* ===== BREADCRUMB ===== */}
        <Link
          href="/galaxy"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Galaxy
        </Link>

        {/* ===== HERO ===== */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-xs font-medium text-purple-300 mb-4">
            <Shield className="w-3 h-3" />
            Business Compliance � DPDP Act 2023
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Obligations of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Data Fiduciaries
            </span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
            Under the Digital Personal Data Protection Act, 2023, a{' '}
            <strong className="text-white">Data Fiduciary</strong> is any entity
            that determines the purpose and means of processing personal data.
            With the power to process data comes{' '}
            <strong className="text-white">strict legal accountability</strong>.
            The Act shifts the burden of data protection onto businesses � and
            failure to comply can result in penalties of up to{' '}
            <strong className="text-white">?250 crore</strong>. This guide covers
            all 8 core obligations, SDF obligations, a compliance checklist, and
            real-world consequences.
          </p>

          {/* Meta Row */}
          <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <UserCheck className="w-4 h-4" />
              By Shilpi Kulshrestha
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Last updated:{' '}
              {new Date().toLocaleDateString('en-IN', {
                month: 'long',
                year: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              11 min read
            </span>
          </div>
        </div>

        {/* ===== 8 OBLIGATIONS GRID ===== */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">
            The 8 Core Obligations at a Glance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {obligations.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md hover:bg-white/10 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0 border border-purple-500/30">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <span className="text-xs font-mono text-pink-400">
                        {item.section}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-purple-300 font-medium mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-gray-300 leading-7 flex-grow">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===== SECTION 1: DETAILED BREAKDOWN ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Detailed Breakdown of Each Obligation
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            Each obligation is backed by a specific section of the DPDP Act and
            enforced by the Data Protection Board. Here is what each obligation
            means in practice, including the specific steps a Data Fiduciary
            must take:
          </p>

          <div className="space-y-8">
            {obligations.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0 border border-purple-500/30">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl font-bold text-white">
                          {item.title}
                        </h3>
                        <span className="text-xs font-mono text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded border border-pink-500/20">
                          {item.section}
                        </span>
                      </div>
                      <p className="text-sm text-purple-300 mt-1">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      What this means in practice:
                    </h4>
                    <ul className="space-y-1.5">
                      {item.details.map((detail, j) => (
                        <li
                          key={j}
                          className="text-sm text-gray-300 flex items-start gap-2"
                        >
                          <span className="text-purple-400 mt-0.5">?</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===== SECTION 2: SDF ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            What is a Significant Data Fiduciary (SDF)?
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed mb-6">
            <p>
              Not all Data Fiduciaries are equal. The Act creates a special
              category called{' '}
              <strong className="text-white">Significant Data Fiduciary (SDF)</strong>{' '}
              � organisations that process large volumes of sensitive data or
              pose a higher risk to Data Principals. The Central Government
              notifies SDFs based on the following factors:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {sdfFactors.map((factor, i) => {
              const Icon = factor.icon;
              return (
                <div
                  key={i}
                  className="bg-purple-500/5 border border-purple-500/20 rounded-xl p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0 border border-purple-500/30">
                      <Icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white mb-1">
                        {factor.title}
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {factor.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Scale className="w-5 h-5 text-purple-400" />
              Enhanced Obligations for SDFs
            </h3>
            <ul className="space-y-2">
              {[
                'Appoint a Data Protection Officer (DPO) based in India, reporting to the board',
                'Appoint an independent data auditor to evaluate compliance',
                'Conduct periodic Data Protection Impact Assessments (DPIAs)',
                'Undertake such other measures as may be prescribed',
              ].map((item, i) => (
                <li
                  key={i}
                  className="text-sm text-gray-300 flex items-start gap-2"
                >
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-400 mt-4">
              Failure to comply with SDF obligations can attract a penalty of up
              to <strong className="text-white">?150 crore</strong>.
            </p>
          </div>
        </section>

        {/* ===== SECTION 3: COMPLIANCE CHECKLIST ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            16-Point DPDPA Compliance Checklist
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            To operationalise the 8 obligations, here is a practical 16-point
            checklist that Data Fiduciaries can use as a starting point:
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {checklist.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                >
                  <div className="w-5 h-5 rounded border-2 border-purple-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ClipboardCheck className="w-3 h-3 text-purple-400" />
                  </div>
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 4: CONSEQUENCES ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Consequences of Non-Compliance
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Failure to comply with these obligations can trigger significant
            penalties, imposed by the Data Protection Board. Here is a summary:
          </p>

          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-left">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-4 py-3 text-xs font-semibold text-white uppercase tracking-wider">
                    Violation
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold text-white uppercase tracking-wider text-right">
                    Max Penalty
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {consequences.map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 text-sm text-gray-300">
                      {row.violation}
                    </td>
                    <td className="px-4 py-3 text-sm font-bold text-red-400 text-right whitespace-nowrap">
                      {row.penalty}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-400 mt-4">
            For a detailed breakdown, see our{' '}
            <Link
              href="/penalties"
              className="text-purple-400 hover:text-purple-300 underline"
            >
              full penalties guide
            </Link>
            .
          </p>
        </section>

        {/* ===== SECTION 5: PRACTICAL TIPS ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Practical Tips for Compliance
          </h2>
          <div className="space-y-4">
            {[
              {
                title: 'Start with a data inventory',
                desc: 'You cannot protect what you do not know you have. Map all personal data your organisation collects, processes, and shares.',
              },
              {
                title: 'Build consent into your product, not on top of it',
                desc: 'Consent should be a first-class feature, not an afterthought. Make it easy to give, easy to withdraw, and easy to audit.',
              },
              {
                title: 'Treat vendors as extensions of your compliance',
                desc: 'Every vendor that touches personal data must sign a DPA. Audit them. Hold them to the same standards you hold yourself.',
              },
              {
                title: 'Document everything',
                desc: 'The Board will ask: "Did you take reasonable safeguards?" The answer must be documented � policies, audits, training records, incident logs.',
              },
              {
                title: 'Appoint a DPO early',
                desc: 'Even if you are not yet an SDF, appointing a DPO sends a strong signal of commitment and prepares you for SDF notification.',
              },
              {
                title: 'Train your team',
                desc: 'Obligations are operationalised by employees. Train them on data handling, breach reporting, and grievance redressal.',
              },
            ].map((tip, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">
                      {tip.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {tip.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== AUTHOR BIO ===== */}
        <section className="mb-16">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-purple-500/40">
                <Image
                  src="/images/profileoffounder.jpeg"
                  alt="Shilpi Kulshrestha"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-xs font-medium text-purple-300 mb-2">
                <UserCheck className="w-3 h-3" />
                Author
              </div>
              <h3 className="text-lg font-semibold text-white">
                Shilpi Kulshrestha
              </h3>
              <p className="text-sm text-gray-400 mb-2">
                Founder, BusinezExcellence | Corporate Law & Company Secretary
                Expert
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                Shilpi is a corporate lawyer with over a decade of experience in
                data protection, company law, and regulatory compliance. She has
                advised 50+ startups and enterprises on DPDPA readiness, privacy
                governance, and AI compliance.
              </p>
            </div>
          </div>
        </section>

        {/* ===== FAQ SECTION ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-white font-medium pr-4">{faq.q}</span>
                  <span className="text-purple-400 group-open:rotate-45 transition-transform text-xl flex-shrink-0">
                    +
                  </span>
                </summary>
                <p className="text-gray-300 text-sm leading-relaxed mt-3 pt-3 border-t border-white/10">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ===== RELATED READING ===== */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-purple-400" />
            Related Topics for Businesses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all"
              >
                <h4 className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors flex items-center justify-between gap-2">
                  {link.title}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </h4>
                <p className="text-xs text-gray-400 mt-1">{link.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Need to train your team?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Understanding these obligations is the first step. Ensure your legal,
            IT, and HR teams are aware of the new DPDP Act rules. Use our free
            assessment to see where your organisation stands today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/scorecard"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold hover:scale-105 transition-all"
            >
              Check Compliance ?
            </Link>
            <Link
              href="/certificate-course"
              className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all"
            >
              View Course
            </Link>
          </div>
        </section>

        {/* ===== DISCLAIMER ===== */}
        <p className="text-xs text-gray-500 text-center mt-12 max-w-2xl mx-auto leading-relaxed">
          <strong>Disclaimer:</strong> This page is for educational and
          informational purposes only. It is not legal advice. For advice on your
          specific situation, consult a qualified legal professional.
        </p>
      </div>
    </main>
  );
}
