import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  CheckCircle,
  Shield,
  Users,
  Globe,
  Database,
  FileText,
  Scale,
  BookOpen,
  ArrowRight,
  UserCheck,
  Calendar,
  Clock,
  Gavel,
  XCircle,
  AlertTriangle,
  Info,
  TrendingUp,
  Baby,
  Ban,
  RefreshCw,
  MessageSquare,
  UserPlus,
  Lock,
  Eye,
  FileCheck,
  Landmark,
} from 'lucide-react';

export default function RightsPage() {
  // ===== CORE RIGHTS =====
  const rights = [
    {
      icon: Users,
      title: 'Right to Access Information',
      subtitle: 'Know exactly what data is being collected about you.',
      section: 'Section 11',
      description:
        'Under Section 11 of the DPDP Act, every individual has the right to request a summary of their personal data being processed by a Data Fiduciary. You can ask for the specific purposes of processing, the categories of data involved, and the identities of any other entities with whom your data has been shared. This ensures complete transparency.',
      details: [
        'You can request a summary of personal data being processed',
        'You can ask for the purposes of processing',
        'You can ask for the categories of data shared with third parties',
        'You can ask for the identities of all Data Fiduciaries with whom data has been shared',
        'The Data Fiduciary must respond within a reasonable time',
      ],
    },
    {
      icon: CheckCircle,
      title: 'Right to Correction and Erasure',
      subtitle: 'Correct inaccuracies or request deletion.',
      section: 'Section 12',
      description:
        'You have the legal right to request the correction of inaccurate, misleading, or incomplete personal data. Furthermore, you can demand the erasure of your data (Right to be Forgotten) once the purpose of collection is fulfilled, or if you withdraw your consent, unless retention is mandated by law.',
      details: [
        'You can request correction of inaccurate or misleading data',
        'You can request completion of incomplete data',
        'You can request erasure when the purpose is no longer served',
        'You can request erasure when you withdraw consent',
        'Erasure can be refused if retention is required by law',
      ],
    },
    {
      icon: MessageSquare,
      title: 'Right to Grievance Redressal',
      subtitle: 'A readily available mechanism to file complaints.',
      section: 'Section 13',
      description:
        'Section 13 mandates that every Data Fiduciary must provide an easily accessible grievance redressal mechanism. If an organisation fails to resolve your complaint within a reasonable timeframe, you have the right to escalate the matter directly to the Data Protection Board of India (DPBI).',
      details: [
        'Every Data Fiduciary must publish grievance officer details',
        'You can file a complaint directly with the Data Fiduciary',
        'The grievance must be resolved within the prescribed time',
        'If unresolved, you can escalate to the Data Protection Board',
        'The Board can investigate and impose penalties',
      ],
    },
    {
      icon: Globe,
      title: 'Right to Data Portability',
      subtitle: 'Transfer your data seamlessly.',
      section: 'Section 13(2)',
      description:
        'As a Data Principal, you have the right to receive your personal data in a structured, commonly used, and machine-readable format. This allows you to seamlessly transfer your data from one Data Fiduciary to another without any technological hindrances.',
      details: [
        'Receive your data in a structured, machine-readable format',
        'Transfer your data to another Data Fiduciary',
        'The Data Fiduciary must facilitate the transfer',
        'Applies to data provided by you or generated through your use',
        'Not applicable where it would harm the rights of others',
      ],
    },
    {
      icon: UserPlus,
      title: 'Right to Nominate',
      subtitle: 'Appoint a representative for your digital rights.',
      section: 'Section 14',
      description:
        'In the unfortunate event of death or incapacity, you have the right to nominate another individual to exercise your rights on your behalf. This ensures that your digital legacy and privacy preferences are legally respected even in your absence.',
      details: [
        'Nominate an individual to exercise your rights on your behalf',
        'Applies in the event of death or incapacity',
        'The nominee can exercise all your rights',
        'The nomination must be made in the prescribed manner',
        'The Data Fiduciary must honour the nomination',
      ],
    },
    {
      icon: Ban,
      title: 'Right to Withdraw Consent',
      subtitle: 'You are in control of your consent.',
      section: 'Section 6(4)',
      description:
        'If your data is being processed based on your consent, you retain the absolute right to withdraw it at any time. Once withdrawn, the Data Fiduciary must cease processing your data immediately. The process to withdraw consent must be as easy as it was to give it.',
      details: [
        'You can withdraw consent at any time',
        'The withdrawal process must be as easy as giving consent',
        'The Data Fiduciary must cease processing immediately',
        'Withdrawal does not affect prior lawful processing',
        'You can request erasure after withdrawal',
      ],
    },
  ];

  // ===== HOW TO EXERCISE RIGHTS =====
  const exerciseSteps = [
    {
      step: '01',
      title: 'Identify the Data Fiduciary',
      desc: 'Find out which organisation is processing your data. Check their privacy policy, notices, and the grievance officer details published on their website.',
      icon: Eye,
    },
    {
      step: '02',
      title: 'Submit a Written Request',
      desc: 'Write to the Grievance Officer (email or physical post) clearly stating which right you want to exercise. Attach proof of identity, if required.',
      icon: FileCheck,
    },
    {
      step: '03',
      title: 'Wait for the Response',
      desc: 'The Data Fiduciary must respond within the time prescribed under its policy (usually 30 days). Keep records of all communications.',
      icon: Clock,
    },
    {
      step: '04',
      title: 'Escalate to the Board',
      desc: 'If the Data Fiduciary fails to respond or rejects your request unfairly, file a complaint with the Data Protection Board of India.',
      icon: Gavel,
    },
    {
      step: '05',
      title: 'Seek Judicial Remedy',
      desc: 'For serious violations, you can also approach consumer forums or constitutional courts. Legal remedies supplement the DPDP framework.',
      icon: Scale,
    },
  ];

  // ===== LIMITATIONS =====
  const limitations = [
    {
      title: 'Legal Retention Obligations',
      desc: 'The right to erasure does not apply where retention is required by other laws � e.g., Income Tax records, RBI KYC data, or court orders.',
    },
    {
      title: 'State Functions',
      desc: 'Some rights may be limited where data processing is for state functions, national security, or public interest.',
    },
    {
      title: 'Research and Statistics',
      desc: 'Data processing for research, archiving, or statistical purposes may be exempt from certain rights where safeguards exist.',
    },
    {
      title: 'Legal Claims',
      desc: 'Data may be retained where necessary for the establishment, exercise, or defence of legal claims.',
    },
    {
      title: 'Rights of Others',
      desc: 'Your rights cannot be exercised in a way that harms the rights of other individuals or the public interest.',
    },
  ];

  // ===== FAQS =====
  const faqs = [
    {
      q: 'What are the rights of a Data Principal under the DPDP Act 2023?',
      a: 'The DPDP Act 2023 grants six core rights: (1) Right to Access information, (2) Right to Correction and Erasure, (3) Right to Grievance Redressal, (4) Right to Data Portability, (5) Right to Nominate, and (6) Right to Withdraw Consent.',
    },
    {
      q: 'How do I exercise my right to access under the DPDP Act?',
      a: 'Submit a written request to the Data Fiduciary (the organisation processing your data) asking for a summary of your personal data, the purposes of processing, and the categories of data shared with third parties. You can escalate to the Data Protection Board if unsatisfied.',
    },
    {
      q: 'What is the right to erasure under the DPDP Act?',
      a: 'The right to erasure (also known as the right to be forgotten) allows you to request deletion of your personal data once the purpose of processing is complete, or if you withdraw consent. However, erasure can be refused if retention is required by law or for legal proceedings.',
    },
    {
      q: 'Can I withdraw my consent after giving it?',
      a: 'Yes. Under Section 6(4), you can withdraw your consent at any time. Once withdrawn, the Data Fiduciary must cease processing your data (unless another legal basis applies). The process to withdraw consent must be as easy as the process to give it.',
    },
    {
      q: 'What is the right to nominate under the DPDP Act?',
      a: 'The right to nominate allows you to appoint another individual to exercise your data rights on your behalf in the event of your death or incapacity. This ensures your digital legacy is protected.',
    },
    {
      q: 'How do I file a complaint under the DPDP Act?',
      a: 'First, file a grievance with the Data Fiduciary\'s Grievance Officer. If it is not resolved within the prescribed time, escalate to the Data Protection Board of India (DPB). The Board can investigate and impose penalties up to ?250 crore.',
    },
    {
      q: 'Are these rights available to everyone in India?',
      a: 'Yes. The DPDP Act 2023 applies to all Data Principals � any individual whose personal data is processed digitally or in non-digital form subsequently digitised. However, some rights may be limited by other laws.',
    },
    {
      q: 'What if a company ignores my data rights request?',
      a: 'If a Data Fiduciary ignores or delays your request, you can file a complaint with the Data Protection Board. The Board can impose penalties up to ?50 crore for general non-compliance. You can also approach consumer forums or courts.',
    },
  ];

  // ===== RELATED LINKS =====
  const relatedLinks = [
    {
      title: 'Obligations of Fiduciaries',
      href: '/obligations',
      desc: 'Learn what the law expects from businesses.',
    },
    {
      title: 'Data Protection Board',
      href: '/board',
      desc: 'Where you can escalate unresolved complaints.',
    },
    {
      title: 'Penalties & Offences',
      href: '/penalties',
      desc: 'What happens when rights are violated.',
    },
    {
      title: 'Data Rights Insights',
      href: '/insight/data-subject-rights-guide',
      desc: 'Deep dive into how to enforce your rights.',
    },
    {
      title: 'DPDPA Complete Guide',
      href: '/resources/guides/dpdpa-2023-complete-guide',
      desc: 'End-to-end guide to the Act.',
    },
    {
      title: 'Lawful Processing',
      href: '/lawful-processing',
      desc: 'When data can be processed in the first place.',
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-xs font-medium text-blue-300 mb-4">
            <Users className="w-3 h-3" />
            Data Principal Rights � DPDP Act 2023
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Rights of Data Principals under the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              DPDP Act 2023
            </span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
            The Digital Personal Data Protection Act, 2023 has fundamentally
            changed how Indian citizens interact with their digital data. As a{' '}
            <strong className="text-white">Data Principal</strong>, you are no
            longer just a passive user; you are the{' '}
            <strong className="text-white">legal owner of your data</strong>. The
            Act grants you six powerful, enforceable rights against any
            organisation (Data Fiduciary) processing your information. This guide
            explains each right, how to exercise it, and what to do if your
            rights are violated.
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
              10 min read
            </span>
          </div>
        </div>

        {/* ===== 6 RIGHTS GRID ===== */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">
            The 6 Data Rights at a Glance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rights.map((right, index) => {
              const Icon = right.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md hover:bg-white/10 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 border border-blue-500/30">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {right.title}
                      </h3>
                      <span className="text-xs text-purple-400 font-mono">
                        {right.section}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-blue-300 font-medium mb-3">
                    {right.subtitle}
                  </p>
                  <p className="text-sm text-gray-300 leading-7 flex-grow">
                    {right.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===== SECTION 1: DETAILED BREAKDOWN ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Detailed Breakdown of Each Right
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            The six rights are not just abstract principles � they are enforceable
            legal rights backed by the Data Protection Board. Here is what each
            right means in practice, including the specific actions you can take.
          </p>

          <div className="space-y-8">
            {rights.map((right, i) => {
              const Icon = right.icon;
              return (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 border border-blue-500/30">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl font-bold text-white">
                          {right.title}
                        </h3>
                        <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                          {right.section}
                        </span>
                      </div>
                      <p className="text-sm text-blue-300 mt-1">
                        {right.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {right.description}
                  </p>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      What this means in practice:
                    </h4>
                    <ul className="space-y-1.5">
                      {right.details.map((detail, j) => (
                        <li
                          key={j}
                          className="text-sm text-gray-300 flex items-start gap-2"
                        >
                          <span className="text-blue-400 mt-0.5">?</span>
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

        {/* ===== SECTION 2: HOW TO EXERCISE ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            How to Exercise Your Rights
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            Knowing your rights is one thing; exercising them is another. Here is
            the step-by-step process to enforce your rights against a Data
            Fiduciary:
          </p>

          <div className="space-y-4">
            {exerciseSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="flex gap-4 bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-bold text-blue-400">
                        STEP {step.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===== SECTION 3: LIMITATIONS ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Limitations on These Rights
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            The rights are powerful, but they are not absolute. The Act recognises
            several situations where a Data Fiduciary can legitimately refuse or
            limit a request. Understanding these limitations helps you set
            realistic expectations:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {limitations.map((lim, i) => (
              <div
                key={i}
                className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-5"
              >
                <h3 className="text-base font-semibold text-yellow-300 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  {lim.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {lim.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== SECTION 4: FOR BUSINESSES ===== */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-blue-400" />
                  Are you a business owner?
                </h2>
                <p className="text-gray-300 leading-relaxed text-sm mb-4">
                  As a Data Fiduciary, the law requires you to build systems that
                  respect these rights. Failure to provide these rights to your
                  users can lead to penalties of up to{' '}
                  <strong className="text-white">?50 crore</strong> for general
                  non-compliance, and up to{' '}
                  <strong className="text-white">?250 crore</strong> for data
                  breaches. Ensure your organisation is fully compliant.
                </p>
                <ul className="space-y-1.5 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>
                      Implement a proper grievance redressal mechanism with a
                      named officer
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>
                      Enable easy data access, correction, and erasure workflows
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>
                      Build data portability features into your products
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>
                      Make consent withdrawal as easy as giving consent
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
                <Link
                  href="/scorecard"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-105 transition-all text-center text-sm"
                >
                  Test Your Compliance
                </Link>
                <Link
                  href="/resources/guides/dpdpa-2023-complete-guide"
                  className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all text-center text-sm flex items-center justify-center gap-2"
                >
                  Read the Guide <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 5: COMMON SCENARIOS ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Common Scenarios: How Rights Apply
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Here are some common situations where Data Principals exercise their
            rights:
          </p>

          <div className="space-y-4">
            {[
              {
                title: 'You want to know what a social media platform knows about you',
                right: 'Right to Access',
                action: 'Submit a data access request to the platform\'s grievance officer. You can ask for a summary of your data, purposes of processing, and third parties with whom it is shared.',
              },
              {
                title: 'You find inaccurate information in your bank records',
                right: 'Right to Correction',
                action: 'Notify the bank in writing, provide proof of the correct information, and request correction. If not corrected within a reasonable time, escalate to the RBI Ombudsman and the Data Protection Board.',
              },
              {
                title: 'You want an e-commerce app to delete your account and data',
                right: 'Right to Erasure',
                action: 'Request account deletion and data erasure. The company must delete your data unless retention is required by law (e.g., tax records).',
              },
              {
                title: 'You want to stop marketing calls from a company',
                right: 'Right to Withdraw Consent',
                action: 'Withdraw your consent using the same channel you used to give it (e.g., unsubscribe link, account settings). The company must stop processing immediately.',
              },
              {
                title: 'You are unhappy with how a company handled your complaint',
                right: 'Right to Grievance Redressal',
                action: 'Escalate to the Data Protection Board. The Board can investigate and impose penalties on the company.',
              },
            ].map((scenario, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-5"
              >
                <div className="flex items-start gap-3 mb-2">
                  <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {scenario.title}
                    </h3>
                    <span className="text-xs text-purple-400 font-mono">
                      Applies: {scenario.right}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed ml-8">
                  {scenario.action}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== AUTHOR BIO ===== */}
        <section className="mb-16">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-blue-500/40">
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
              <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-xs font-medium text-blue-300 mb-2">
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
                  <span className="text-blue-400 group-open:rotate-45 transition-transform text-xl flex-shrink-0">
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
            Related Topics on Data Protection
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
        <section className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Know your rights. Protect your data.
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Understand your rights, exercise them confidently, and escalate when
            organisations fail to comply. The Data Protection Board is there to
            help.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/scorecard"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-105 transition-all"
            >
              Take the Free Test ?
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all"
            >
              Talk to an Expert
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
