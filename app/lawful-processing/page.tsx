import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  CheckCircle,
  FileText,
  Shield,
  Users,
  Globe,
  Scale,
  ArrowRight,
  UserCheck,
  Calendar,
  Clock,
  XCircle,
  AlertTriangle,
  Info,
  Landmark,
  Gavel,
  Baby,
  Briefcase,
  Heart,
  RefreshCw,
  Lock,
  Eye,
  TrendingUp,
  BookOpen,
} from 'lucide-react';

export default function LawfulProcessingPage() {
  // ===== TWO LAWFUL BASES =====
  const bases = [
    {
      icon: CheckCircle,
      title: 'Consent',
      section: 'Section 6',
      description:
        'The Data Principal has given consent for the processing of their personal data. Consent must be free, specific, informed, unconditional, and unambiguous, with a clear affirmative action. It must be limited to the specified purpose and must be as easy to withdraw as to give.',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: FileText,
      title: 'Certain Legitimate Uses',
      section: 'Section 7',
      description:
        'The Act lists specific situations where personal data can be processed without consent. Unlike GDPR, there is no general "legitimate interests" basis — the legitimate uses are a closed list. These include state functions, legal obligations, medical emergencies, employment, and public interest.',
      color: 'from-blue-500 to-cyan-600',
    },
  ];

  // ===== SECTION 7 LEGITIMATE USES =====
  const legitimateUses = [
    {
      icon: UserCheck,
      title: 'Voluntary Provision of Data',
      section: 'Section 7(a)',
      description:
        'The Data Principal has voluntarily provided their personal data to the Data Fiduciary for a specified purpose, and has not indicated that they do not consent to such processing.',
    },
  ];

  // ===== CONSENT REQUIREMENTS =====
  const consentRequirements = [
    {
      icon: CheckCircle,
      title: 'Free',
      desc: 'The Data Principal must have a genuine choice. Consent obtained through coercion, deception, or undue influence is not valid.',
    },
    {
      icon: Eye,
      title: 'Specific',
      desc: 'Consent must be for a specific purpose, not a blanket consent for all processing. Each purpose requires separate consent.',
    },
    {
      icon: Info,
      title: 'Informed',
      desc: 'The Data Principal must be given clear, plain-language information about what data is being collected and why.',
    },
    {
      icon: Lock,
      title: 'Unconditional',
      desc: 'Consent cannot be conditioned on the provision of a service unless the processing is necessary for that service.',
    },
    {
      icon: Gavel,
      title: 'Unambiguous',
      desc: 'There must be a clear affirmative action (e.g., ticking a box). Silence, pre-ticked boxes, or inactivity is not consent.',
    },
    {
      icon: RefreshCw,
      title: 'Withdrawable',
      desc: 'The Data Principal must be able to withdraw consent as easily as they gave it. Withdrawal must be respected immediately.',
    },
  ];

  // ===== SECTION 7 LEGITIMATE USES (FULL LIST) =====
  const section7Uses = [
    {
      icon: UserCheck,
      title: 'Voluntary Provision of Data',
      section: 'Section 7(a)',
      desc: 'The Data Principal has voluntarily provided their personal data to the Data Fiduciary for a specified purpose, and has not indicated that they do not consent to such processing.',
    },
    {
      icon: Landmark,
      title: 'State Functions',
      section: 'Section 7(b)',
      desc: 'Processing is necessary for the performance of any function by the State under law, including the provision of subsidies, benefits, services, certificates, licences, or permits.',
    },
    {
      icon: Gavel,
      title: 'Legal Obligations',
      section: 'Section 7(c)',
      desc: 'Processing is necessary for compliance with any judgment or order of a court or tribunal, or for the performance of a legal obligation.',
    },
    {
      icon: Heart,
      title: 'Medical Emergencies',
      section: 'Section 7(d)',
      desc: 'Processing is necessary for a medical emergency involving a threat to the life or health of the Data Principal or any other individual.',
    },
    {
      icon: AlertTriangle,
      title: 'Disasters & Public Health',
      section: 'Section 7(e)',
      desc: 'Processing is necessary for taking measures during a disaster or public health emergency, or for the safety of the public.',
    },
    {
      icon: Briefcase,
      title: 'Employment Purposes',
      section: 'Section 7(f)',
      desc: 'Processing is necessary for the purposes of employment, including recruitment, verification, and providing benefits to employees.',
    },
    {
      icon: TrendingUp,
      title: 'Public Interest',
      section: 'Section 7(g)',
      desc: 'Processing is necessary for research, archiving, or statistical purposes, where the data is not used to make decisions about specific individuals.',
    },
  ];

  // ===== CONSENT VS LEGITIMATE USE =====
  const comparison = [
    {
      aspect: 'Nature',
      consent: 'Active, affirmative choice by the Data Principal',
      legitimate: 'Specific situation listed in Section 7',
    },
    {
      aspect: 'Withdrawal',
      consent: 'Can be withdrawn at any time',
      legitimate: 'Cannot be withdrawn',
    },
    {
      aspect: 'Scope',
      consent: 'Limited to the specific purpose',
      legitimate: 'Narrow, closed list',
    },
    {
      aspect: 'Notice',
      consent: 'Notice must be given before seeking consent',
      legitimate: 'Notice requirements may be relaxed',
    },
    {
      aspect: 'Flexibility',
      consent: 'Broad — can cover most processing',
      legitimate: 'Narrow — only the listed uses',
    },
    {
      aspect: 'Examples',
      consent: 'Marketing, analytics, personalization',
      legitimate: 'Legal obligations, medical emergencies, employment',
    },
  ];

  // ===== REAL-WORLD EXAMPLES =====
  const examples = [
    {
      icon: CheckCircle,
      title: 'Consent: Marketing Emails',
      desc: 'A retail company wants to send marketing emails to its customers. It must obtain specific consent for this purpose, with a clear opt-out mechanism. The customer can withdraw consent anytime.',
      color: 'green',
    },
    {
      icon: Landmark,
      title: 'Legitimate Use: State Subsidies',
      desc: 'A government department processes personal data to verify eligibility for a subsidy scheme. This is a legitimate use under Section 7(b) — state functions — and does not require consent.',
      color: 'blue',
    },
    {
      icon: Heart,
      title: 'Legitimate Use: Medical Emergency',
      desc: 'A hospital processes a patient\'s data in an emergency without consent. This is a legitimate use under Section 7(d) — medical emergency — and is permitted.',
      color: 'red',
    },
    {
      icon: Briefcase,
      title: 'Legitimate Use: Employment Records',
      desc: 'An employer processes employee data for payroll, benefits, and verification. This is a legitimate use under Section 7(f) — employment purposes — and does not require fresh consent.',
      color: 'purple',
    },
    {
      icon: XCircle,
      title: 'NOT Legitimate Use: Marketing',
      desc: 'A company wants to use customer data for marketing. There is NO legitimate use for marketing under Section 7. Consent is required.',
      color: 'gray',
    },
    {
      icon: XCircle,
      title: 'NOT Legitimate Use: Analytics',
      desc: 'A website wants to use user data for analytics. There is NO legitimate use for analytics under Section 7. Consent is required.',
      color: 'gray',
    },
  ];

  // ===== FAQS =====
  const faqs = [
    {
      q: 'What are the lawful bases for processing under the DPDP Act 2023?',
      a: 'The DPDP Act 2023 has only two lawful bases: (1) Consent of the Data Principal (Section 6), and (2) Certain Legitimate Uses listed in Section 7. Unlike GDPR, there is no general "legitimate interests" basis.',
    },
    {
      q: 'What is valid consent under the DPDP Act?',
      a: 'Consent must be free, specific, informed, unconditional, and unambiguous, with a clear affirmative action. It must be limited to the specified purpose, and the Data Principal must be able to withdraw it as easily as they gave it.',
    },
    {
      q: 'What are the legitimate uses under Section 7 of the DPDP Act?',
      a: 'Section 7 lists legitimate uses: (a) voluntary provision of data for a specified purpose, (b) state functions, (c) legal obligations, (d) medical emergencies, (e) disasters or public health emergencies, (f) employment purposes, and (g) public interest (research, archiving, statistical purposes).',
    },
    {
      q: 'What is a Consent Manager under the DPDP Act?',
      a: 'A Consent Manager is an entity registered with the Data Protection Board that acts as a single point of contact for Data Principals to give, manage, review, and withdraw consent across multiple Data Fiduciaries.',
    },
    {
      q: 'Can consent be withdrawn after giving it?',
      a: 'Yes. Under Section 6(4), a Data Principal can withdraw consent at any time. The process to withdraw must be as easy as the process to give. Withdrawal does not affect the legality of processing done before withdrawal, but the Data Fiduciary must cease processing after withdrawal.',
    },
    {
      q: 'What is the difference between consent and legitimate use?',
      a: 'Consent is an active, affirmative choice by the Data Principal. Legitimate use is a specific situation listed in Section 7 where processing can occur without consent. Legitimate uses are narrower than GDPR\'s legitimate interests — they are a closed list, not an open balancing test.',
    },
    {
      q: 'What notice must a Data Fiduciary provide before seeking consent?',
      a: 'The notice must be clear, independent, and in plain language. It must describe the personal data being collected, the specific purpose of processing, how the Data Principal can exercise their rights, and how to file a complaint with the Data Protection Board.',
    },
    {
      q: 'Does the DPDP Act apply to processing for employment purposes?',
      a: 'Yes. Section 7(f) allows processing for employment purposes, including recruitment, verification, and providing benefits to employees. However, the employer must still comply with the Act\'s other obligations — such as security safeguards and grievance redressal.',
    },
  ];

  // ===== RELATED LINKS =====
  const relatedLinks = [
    {
      title: 'Rights of Data Principals',
      href: '/rights',
      desc: 'How Data Principals can control their data.',
    },
    {
      title: 'Obligations of Data Fiduciaries',
      href: '/obligations',
      desc: 'What businesses must do to comply.',
    },
    {
      title: 'Penalties & Offences',
      href: '/penalties',
      desc: 'Penalties for unlawful processing.',
    },
    {
      title: 'Key Provisions',
      href: '/provisions',
      desc: 'Chapter-wise overview of the Act.',
    },
    {
      title: 'Data Protection Board',
      href: '/board',
      desc: 'The authority that enforces the Act.',
    },
    {
      title: 'DPDPA Complete Guide',
      href: '/resources/guides/dpdpa-2023-complete-guide',
      desc: 'End-to-end guide to the Act.',
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-xs font-medium text-green-300 mb-4">
            <CheckCircle className="w-3 h-3" />
            Lawful Processing · DPDP Act 2023
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Lawful Processing of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
              Data
            </span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
            Under the DPDP Act 2023, personal data can only be processed on{' '}
            <strong className="text-white">two lawful bases</strong>: (1) the{' '}
            <strong className="text-white">consent</strong> of the Data Principal
            (Section 6), or (2) certain{' '}
            <strong className="text-white">legitimate uses</strong> listed in
            Section 7. Unlike GDPR, there is no general "legitimate interests"
            basis — the legitimate uses are a closed list. This guide explains
            both bases, the requirements for valid consent, the Consent Manager
            framework, and real-world examples.
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
              9 min read
            </span>
          </div>
        </div>

        {/* ===== IMPORTANT CORRECTION CALLOUT ===== */}
        <div className="mb-12 p-5 bg-yellow-500/10 border border-yellow-500/30 rounded-2xl">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-base font-semibold text-yellow-300 mb-1">
                Important: Only Two Lawful Bases
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                The DPDP Act 2023 has only{' '}
                <strong className="text-white">two</strong> lawful bases for
                processing — consent and legitimate uses. Unlike GDPR, there is no
                "contract performance", "vital interests", "public function", or
                "legitimate interests" basis. Those concepts are folded into
                specific legitimate uses under Section 7.
              </p>
            </div>
          </div>
        </div>

        {/* ===== 2 LAWFUL BASES GRID ===== */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">
            The Two Lawful Bases at a Glance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bases.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <span className="text-xs font-mono text-gray-400">
                        {item.section}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 leading-7">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===== SECTION 1: CONSENT ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            1. Consent (Section 6)
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed mb-8">
            <p>
              Consent is the primary lawful basis under the DPDP Act. It is the
              Data Principal's{' '}
              <strong className="text-white">active, affirmative choice</strong>{' '}
              to allow processing of their personal data for a specific purpose.
              Consent is not a one-time event — it is an ongoing relationship
              that the Data Principal can withdraw at any time.
            </p>
            <p>
              The Act sets out{' '}
              <strong className="text-white">six requirements</strong> for valid
              consent. If any of these is missing, the consent is invalid — and
              any processing based on it is unlawful.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-white mb-4">
            The 6 Requirements for Valid Consent
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {consentRequirements.map((req, i) => {
              const Icon = req.icon;
              return (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center flex-shrink-0 border border-green-500/30">
                      <Icon className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white mb-1">
                        {req.title}
                      </h4>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {req.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-green-400" />
              Consent Withdrawal
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-3">
              Under Section 6(4), the Data Principal can{' '}
              <strong className="text-white">withdraw consent at any time</strong>.
              The process to withdraw must be as easy as the process to give
              consent. Once withdrawn, the Data Fiduciary must cease processing
              (unless another lawful basis applies).
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              <strong className="text-white">Important:</strong> Withdrawal does
              not affect the legality of processing done before withdrawal. But it
              does mean the Data Fiduciary must stop processing and may need to
              erase the data.
            </p>
          </div>
        </section>

        {/* ===== SECTION 2: LEGITIMATE USES ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            2. Certain Legitimate Uses (Section 7)
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed mb-6">
            <p>
              Section 7 lists{' '}
              <strong className="text-white">seven specific situations</strong>{' '}
              where personal data can be processed{' '}
              <strong className="text-white">without consent</strong>. These are
              called "legitimate uses." They are a{' '}
              <strong className="text-white">closed list</strong> — if a situation
              is not listed, consent is required.
            </p>
            <p>
              This is a critical difference from GDPR, which has an open-ended
              "legitimate interests" basis. Under the DPDP Act, there is no such
              open-ended basis. This makes compliance simpler in some ways (the
              list is clear) but harder in others (marketing, analytics, and
              personalization all require consent).
            </p>
          </div>

          <div className="space-y-4">
            {section7Uses.map((use, i) => {
              const Icon = use.icon;
              return (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0 border border-blue-500/30">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap mb-1">
                        <h3 className="text-lg font-semibold text-white">
                          {use.title}
                        </h3>
                        <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                          {use.section}
                        </span>
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {use.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===== SECTION 3: COMPARISON TABLE ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            3. Consent vs. Legitimate Use
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Understanding the difference between these two bases is essential for
            compliance. Here is a side-by-side comparison:
          </p>

          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-left">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-4 py-3 text-xs font-semibold text-white uppercase tracking-wider">
                    Aspect
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold text-white uppercase tracking-wider">
                    Consent
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold text-white uppercase tracking-wider">
                    Legitimate Use
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {comparison.map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 text-sm font-semibold text-white">
                      {row.aspect}
                    </td>
                    <td className="px-4 py-3 text-sm text-green-300">
                      {row.consent}
                    </td>
                    <td className="px-4 py-3 text-sm text-blue-300">
                      {row.legitimate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ===== SECTION 4: CONSENT MANAGER ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            4. Consent Manager (Section 6(7))
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              The Act introduces a novel concept called a{' '}
              <strong className="text-white">Consent Manager</strong>. A Consent
              Manager is an entity registered with the Data Protection Board that
              acts as a{' '}
              <strong className="text-white">
                single point of contact for Data Principals
              </strong>{' '}
              to give, manage, review, and withdraw consent across multiple Data
              Fiduciaries.
            </p>
            <p>
              Think of it as a "consent dashboard" — instead of managing consent
              separately with every website and app, a Data Principal can use a
              Consent Manager to manage all their consents in one place. This is
              especially useful for consumers who deal with dozens of online
              services.
            </p>
            <p>
              Consent Managers must be{' '}
              <strong className="text-white">accountable to Data Principals</strong>{' '}
              and must not misrepresent information. They must be registered with
              the Board and comply with technical and operational standards
              prescribed by the government.
            </p>
            <p>
              The Consent Manager framework is still being operationalised. Once
              fully live, it could significantly simplify consent management for
              both consumers and businesses.
            </p>
          </div>
        </section>

        {/* ===== SECTION 5: REAL-WORLD EXAMPLES ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            5. Real-World Examples
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            To make this concrete, here are examples of what is and is not a
            lawful basis:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {examples.map((ex, i) => {
              const Icon = ex.icon;
              const isLegitimate = ex.color !== 'gray';
              return (
                <div
                  key={i}
                  className={`rounded-xl p-5 border ${
                    ex.color === 'gray'
                      ? 'bg-red-500/5 border-red-500/20'
                      : ex.color === 'green'
                      ? 'bg-green-500/5 border-green-500/20'
                      : ex.color === 'red'
                      ? 'bg-red-500/5 border-red-500/20'
                      : ex.color === 'purple'
                      ? 'bg-purple-500/5 border-purple-500/20'
                      : 'bg-blue-500/5 border-blue-500/20'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <Icon
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        ex.color === 'gray'
                          ? 'text-red-400'
                          : ex.color === 'green'
                          ? 'text-green-400'
                          : ex.color === 'red'
                          ? 'text-red-400'
                          : ex.color === 'purple'
                          ? 'text-purple-400'
                          : 'text-blue-400'
                      }`}
                    />
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-1">
                        {ex.title}
                      </h3>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        {ex.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===== SECTION 6: PRACTICAL GUIDANCE ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            6. Practical Guidance for Businesses
          </h2>
          <div className="space-y-3">
            {[
              {
                title: 'Map your processing activities',
                desc: 'For each processing activity, identify whether it is based on consent or a legitimate use. If it is neither, you need to reconsider.',
              },
              {
                title: 'Default to consent where possible',
                desc: 'Consent is the broadest and most flexible basis. Where a legitimate use does not clearly apply, obtain consent.',
              },
              {
                title: 'Build consent withdrawal into your product',
                desc: 'Consent withdrawal must be as easy as giving consent. Build this into your UX from day one.',
              },
              {
                title: 'Do not rely on "legitimate interests"',
                desc: 'There is no general legitimate interests basis under DPDP. Marketing, analytics, and personalization all require consent.',
              },
              {
                title: 'Document your legitimate use justification',
                desc: 'If you rely on a Section 7 legitimate use, document why. The Board may ask for justification during an inquiry.',
              },
              {
                title: 'Prepare for Consent Managers',
                desc: 'As Consent Managers become operational, ensure your systems can integrate with them for consent management.',
              },
            ].map((tip, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
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
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-green-500/40">
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
              <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-xs font-medium text-green-300 mb-2">
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
                  <span className="text-green-400 group-open:rotate-45 transition-transform text-xl flex-shrink-0">
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
            <BookOpen className="w-6 h-6 text-green-400" />
            Related Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all"
              >
                <h4 className="text-sm font-medium text-white group-hover:text-green-400 transition-colors flex items-center justify-between gap-2">
                  {link.title}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </h4>
                <p className="text-xs text-gray-400 mt-1">{link.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Is your consent mechanism DPDPA-ready?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Take our free assessment to see if your consent collection and
            withdrawal mechanisms meet the requirements of the DPDP Act 2023.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/scorecard"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold hover:scale-105 transition-all"
            >
              Take the Free Test →
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