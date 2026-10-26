import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  Globe,
  Shield,
  Users,
  CheckCircle,
  FileText,
  ArrowRight,
  UserCheck,
  Calendar,
  Clock,
  Scale,
  AlertTriangle,
  XCircle,
  Info,
  Landmark,
  Gavel,
  Ban,
  Plane,
  Lock,
  Database,
  TrendingUp,
  BookOpen,
  Layers,
  MapPin,
} from 'lucide-react';

export default function CrossBorderPage() {
  // ===== KEY CONCEPTS =====
  const concepts = [
    {
      icon: Globe,
      title: 'Section 16: The Core Provision',
      description:
        'Section 16 of the DPDP Act empowers the Central Government to restrict the transfer of personal data to specific countries or territories by notification. By default, transfers are allowed unless restricted.',
    },
    {
      icon: Ban,
      title: 'Blacklist Approach',
      description:
        'Unlike GDPR\'s "adequacy" approach (whitelist), DPDP uses a "blacklist" approach. Transfers are allowed by default, unless the government specifically restricts them.',
    },
    {
      icon: Landmark,
      title: 'Government Discretion',
      description:
        'The government can restrict transfers based on factors like national security, public interest, and risk to Data Principals. The first list of restricted countries has not yet been notified.',
    },
    {
      icon: Shield,
      title: 'Sectoral Localisation',
      description:
        'The DPDP Act does not override sectoral localisation requirements. RBI, IRDAI, SEBI, and other regulators can still mandate data localisation for specific sectors.',
    },
    {
      icon: Users,
      title: 'Consent & Notice',
      description:
        'If processing is based on consent, the notice must mention that data may be transferred outside India. The consent must cover this. If based on legitimate use, consent is not required.',
    },
    {
      icon: Gavel,
      title: 'Penalties for Violation',
      description:
        'Transferring data to a restricted country is a violation of the DPDP Act. It can attract penalties up to ?50 crore for general non-compliance, plus remedial directions.',
    },
  ];

  // ===== SECTION 16 DEEP DIVE =====
  const section16Points = [
    {
      icon: Landmark,
      title: 'Power to Restrict',
      desc: 'The Central Government may, by notification, restrict the transfer of personal data to specific countries or territories.',
    },
    {
      icon: Scale,
      title: 'Conditions on Transfer',
      desc: 'The government may also impose conditions on transfers, such as requiring adequacy assessments or contractual safeguards.',
    },
    {
      icon: Globe,
      title: 'Default Allowance',
      desc: 'By default, transfers are allowed. The restriction is an exception, not the rule. This is a significant departure from GDPR.',
    },
    {
      icon: Info,
      title: 'Factors for Restriction',
      desc: 'The government can consider factors like national security, public interest, risk to Data Principals, and reciprocity.',
    },
    {
      icon: FileText,
      title: 'Notification Process',
      desc: 'Restrictions must be imposed by notification, which is a formal legal instrument published in the Official Gazette.',
    },
    {
      icon: Gavel,
      title: 'No Judicial Review Bar',
      desc: 'Notifications can be challenged in court on grounds of arbitrariness or violation of fundamental rights. Judicial review is not barred.',
    },
  ];

  // ===== COMPARISON WITH GDPR =====
  const comparison = [
    {
      aspect: 'Approach',
      dpdp: 'Blacklist (allowed unless restricted)',
      gdpr: 'Whitelist (restricted unless adequate)',
    },
    {
      aspect: 'Default Position',
      dpdp: 'Transfers allowed by default',
      gdpr: 'Transfers restricted by default',
    },
    {
      aspect: 'Mechanism',
      dpdp: 'Government notification restricting specific countries',
      gdpr: 'Adequacy decision by EU Commission; SCCs; BCRs',
    },
    {
      aspect: 'Localisation',
      dpdp: 'No general localisation mandate, but sectoral laws apply',
      gdpr: 'No general localisation mandate (GDPR prohibits it)',
    },
    {
      aspect: 'Discretion',
      dpdp: 'Broad government discretion',
      gdpr: 'Structured, rule-based framework',
    },
    {
      aspect: 'Certainty',
      dpdp: 'Less certainty until list is notified',
      gdpr: 'High certainty due to adequacy decisions',
    },
  ];

  // ===== SECTORAL LOCALISATION =====
  const sectoralRules = [
    {
      icon: Database,
      title: 'RBI Payment Data',
      desc: 'RBI mandates that payment system data be stored only in India. This applies to all payment system operators, including foreign companies operating in India.',
    },
    {
      icon: Shield,
      title: 'IRDAI Insurance Data',
      desc: 'IRDAI requires insurers to maintain insurance data in India. This covers policyholder data, claims data, and related records.',
    },
    {
      icon: TrendingUp,
      title: 'SEBI Securities Data',
      desc: 'SEBI requires securities market data to be maintained in India. This includes trading data, KYC records, and investor data.',
    },
    {
      icon: Landmark,
      title: 'Telecom Data',
      desc: 'Department of Telecommunications (DoT) regulations require telecom data to be maintained in India, subject to certain exceptions.',
    },
    {
      icon: FileText,
      title: 'Health Data',
      desc: 'The Health Data Management Policy (under ABDM) and other health regulations impose data localisation requirements for health data.',
    },
    {
      icon: Globe,
      title: 'Government Data',
      desc: 'Government departments and public sector entities may have specific data localisation requirements for classified or sensitive data.',
    },
  ];

  // ===== REAL-WORLD SCENARIOS =====
  const scenarios = [
    {
      icon: CheckCircle,
      title: 'Scenario A: SaaS Company Using US Cloud',
      desc: 'An Indian SaaS company stores customer data on AWS US servers. Under DPDP, this is allowed by default (unless the US is on the restricted list). The company must ensure the notice mentions cross-border transfer, and the customer consent covers it.',
      verdict: 'Allowed (likely)',
      color: 'green',
    },
    {
      icon: AlertTriangle,
      title: 'Scenario B: Fintech Using Payment Data',
      desc: 'A fintech company processes payment data and wants to store it in Singapore. Under RBI regulations, payment data must be stored in India. DPDP does not override this — the fintech must comply with RBI rules.',
      verdict: 'Not allowed (RBI)',
      color: 'red',
    },
    {
      icon: XCircle,
      title: 'Scenario C: Transfer to Restricted Country',
      desc: 'An e-commerce company transfers customer data to a country that has been notified as restricted by the government. This is a violation of Section 16 and can attract penalties up to ?50 crore.',
      verdict: 'Not allowed',
      color: 'red',
    },
    {
      icon: CheckCircle,
      title: 'Scenario D: Healthcare Data to EU',
      desc: 'A hospital transfers patient data to a EU-based research partner. This is allowed under DPDP by default, provided consent covers it and the EU is not on the restricted list. GDPR applies to the EU partner.',
      verdict: 'Allowed (likely)',
      color: 'green',
    },
    {
      icon: Users,
      title: 'Scenario E: HR Data to Global Payroll',
      desc: 'A multinational company processes employee data for global payroll on a US-based system. This is a legitimate use under Section 7(f) (employment), and is allowed unless the US is restricted.',
      verdict: 'Allowed (likely)',
      color: 'green',
    },
    {
      icon: AlertTriangle,
      title: 'Scenario F: Marketing Data to Unknown Vendor',
      desc: 'A company transfers marketing data to an offshore vendor without checking the restricted list. If the vendor is in a restricted country, this is a violation. Consent alone does not save it.',
      verdict: 'Risky',
      color: 'yellow',
    },
  ];

  // ===== COMPLIANCE CHECKLIST =====
  const checklist = [
    'Check if the destination country is on the restricted list (once notified)',
    'Update your privacy notice to mention cross-border transfers',
    'Ensure your consent mechanism covers cross-border transfers',
    'Conduct due diligence on international vendors and processors',
    'Sign Data Processing Agreements with international partners',
    'Check sectoral localisation requirements (RBI, IRDAI, SEBI, etc.)',
    'Implement adequate security safeguards for international transfers',
    'Maintain records of all cross-border transfers',
    'Monitor government notifications for changes to the restricted list',
    'Consult legal experts if you are unsure about a specific transfer',
  ];

  // ===== FAQS =====
  const faqs = [
    {
      q: 'What is Section 16 of the DPDP Act 2023?',
      a: 'Section 16 deals with cross-border data transfers. It empowers the Central Government to restrict the transfer of personal data to specific countries or territories by notification. By default, transfers are allowed unless restricted.',
    },
    {
      q: 'Is data localisation mandatory under the DPDP Act?',
      a: 'No, the DPDP Act does not mandate general data localisation. However, the government can restrict transfers to specific countries (a "negative list" or "blacklist" approach). Specific sectoral laws (like RBI regulations) may still require localisation.',
    },
    {
      q: 'How is DPDP different from GDPR on cross-border transfers?',
      a: 'GDPR uses an "adequacy" approach — transfers are allowed only to countries deemed adequate by the EU Commission, or with safeguards like SCCs. DPDP uses a "blacklist" approach — transfers are allowed by default unless the government restricts them. DPDP is simpler but gives the government broad discretion.',
    },
    {
      q: 'Can the government ban transfers to specific countries?',
      a: 'Yes. Section 16 empowers the Central Government to restrict transfers to specific countries or territories by notification. The government can also impose conditions on transfers. The first list of restricted countries has not yet been notified.',
    },
    {
      q: 'What happens if I transfer data to a restricted country?',
      a: 'Transferring data to a restricted country is a violation of the DPDP Act. It can attract penalties under the Schedule — up to ?50 crore for general non-compliance. The Data Protection Board can also issue directions and order remedial measures.',
    },
    {
      q: 'Do I need consent for cross-border transfers?',
      a: 'Yes, if the processing is based on consent, the notice must mention that the data may be transferred outside India. The consent must cover this. If the processing is based on a legitimate use under Section 7, consent is not required, but the transfer still must comply with Section 16.',
    },
    {
      q: 'What about sectoral localisation requirements?',
      a: 'The DPDP Act does not override sectoral localisation requirements. For example, RBI\'s mandate to store payment data in India, IRDAI\'s insurance data rules, and SEBI\'s regulations for securities data continue to apply.',
    },
    {
      q: 'When will the restricted countries list be notified?',
      a: 'The government has not yet notified the list of restricted countries. The Rules under the DPDP Act are still being finalised, and the list is expected to be published once the Rules are notified. The government has indicated that it will adopt a calibrated approach.',
    },
  ];

  // ===== RELATED LINKS =====
  const relatedLinks = [
    {
      title: 'Key Provisions',
      href: '/provisions',
      desc: 'Chapter-wise overview of the Act.',
    },
    {
      title: 'Obligations of Data Fiduciaries',
      href: '/obligations',
      desc: 'What businesses must do to comply.',
    },
    {
      title: 'Penalties & Offences',
      href: '/penalties',
      desc: 'Penalties for unlawful transfers.',
    },
    {
      title: 'Country Explorer',
      href: '/map',
      desc: 'Compare data protection laws globally.',
    },
    {
      title: 'GDPR vs DPDP',
      href: '/insight/gdpr-vs-dpdp',
      desc: 'Detailed comparison of the two laws.',
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-xs font-medium text-cyan-300 mb-4">
            <Globe className="w-3 h-3" />
            International Data Flows · DPDP Act 2023
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Cross-Border Transfer of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Data
            </span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
            Cross-border data transfers under the DPDP Act 2023 are governed by{' '}
            <strong className="text-white">Section 16</strong> — a single,
            powerful provision that gives the Central Government the right to{' '}
            <strong className="text-white">restrict transfers</strong> to specific
            countries by notification. Unlike GDPR's adequacy approach, DPDP uses
            a <strong className="text-white">blacklist approach</strong> — transfers
            are allowed by default unless restricted. This guide explains Section
            16, the government's power, comparison with GDPR, sectoral
            localisation, and real-world scenarios.
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

        {/* ===== IMPORTANT CORRECTION CALLOUT ===== */}
        <div className="mb-12 p-5 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-base font-semibold text-cyan-300 mb-1">
                Important: DPDP Uses a Blacklist, Not a Whitelist
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                The DPDP Act does NOT require "adequate protection" or "standard
                contractual clauses" or "Board approval" for every transfer.
                Instead, transfers are allowed by default, unless the government
                restricts them. This is a significantly simpler approach than
                GDPR.
              </p>
            </div>
          </div>
        </div>

        {/* ===== KEY CONCEPTS GRID ===== */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">
            Key Concepts at a Glance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {concepts.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0 border border-cyan-500/30">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===== SECTION 1: SECTION 16 DEEP DIVE ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            1. Section 16 — The Core Provision
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed mb-8">
            <p>
              Section 16 of the DPDP Act is deceptively short — a single
              sub-section. But it is one of the most consequential provisions in
              the Act. It gives the Central Government the power to{' '}
              <strong className="text-white">restrict transfers</strong> of
              personal data to specific countries or territories by notification.
            </p>
            <p>
              Crucially, the provision is{' '}
              <strong className="text-white">enabling, not prohibitive</strong>.
              By default, transfers are allowed. The government can restrict them
              if it considers it necessary — for national security, public
              interest, or protection of Data Principals. This is a significant
              departure from GDPR's restrictive approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {section16Points.map((point, i) => {
              const Icon = point.icon;
              return (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0 border border-cyan-500/30">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white mb-1">
                        {point.title}
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===== SECTION 2: COMPARISON WITH GDPR ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            2. DPDP vs. GDPR on Cross-Border Transfers
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Understanding the difference between DPDP and GDPR is essential for
            multinational companies operating in both jurisdictions:
          </p>

          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-left">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-4 py-3 text-xs font-semibold text-white uppercase tracking-wider">
                    Aspect
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold text-white uppercase tracking-wider">
                    DPDP
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold text-white uppercase tracking-wider">
                    GDPR
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {comparison.map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 text-sm font-semibold text-white">
                      {row.aspect}
                    </td>
                    <td className="px-4 py-3 text-sm text-cyan-300">
                      {row.dpdp}
                    </td>
                    <td className="px-4 py-3 text-sm text-blue-300">
                      {row.gdpr}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-white/5 border border-white/10 rounded-xl">
            <p className="text-sm text-gray-300 leading-relaxed">
              <strong className="text-white">Bottom line:</strong> DPDP is
              simpler and more permissive than GDPR, but it gives the government
              broad discretion to restrict transfers. For now, most transfers
              are allowed. The situation will evolve once the restricted
              countries list is notified.
            </p>
          </div>
        </section>

        {/* ===== SECTION 3: SECTORAL LOCALISATION ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            3. Sectoral Localisation Requirements
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            The DPDP Act does not override sectoral localisation requirements.
            Specific regulators continue to mandate local storage for specific
            data types:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sectoralRules.map((rule, i) => {
              const Icon = rule.icon;
              return (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0 border border-cyan-500/30">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white mb-1">
                        {rule.title}
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {rule.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===== SECTION 4: REAL-WORLD SCENARIOS ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            4. Real-World Scenarios
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            To make this concrete, here are six scenarios illustrating what is
            and is not allowed:
          </p>

          <div className="space-y-4">
            {scenarios.map((sc, i) => {
              const Icon = sc.icon;
              const colorClasses = {
                green: 'bg-green-500/5 border-green-500/20',
                red: 'bg-red-500/5 border-red-500/20',
                yellow: 'bg-yellow-500/5 border-yellow-500/20',
              };
              const iconClasses = {
                green: 'text-green-400',
                red: 'text-red-400',
                yellow: 'text-yellow-400',
              };
              return (
                <div
                  key={i}
                  className={`rounded-xl p-5 border ${colorClasses[sc.color as keyof typeof colorClasses]}`}
                >
                  <div className="flex items-start gap-3">
                    <Icon
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${iconClasses[sc.color as keyof typeof iconClasses]}`}
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap mb-1">
                        <h3 className="text-base font-semibold text-white">
                          {sc.title}
                        </h3>
                        <span
                          className={`text-xs font-mono px-2 py-0.5 rounded border ${
                            sc.color === 'green'
                              ? 'bg-green-500/10 border-green-500/20 text-green-300'
                              : sc.color === 'red'
                              ? 'bg-red-500/10 border-red-500/20 text-red-300'
                              : 'bg-yellow-500/10 border-yellow-500/20 text-yellow-300'
                          }`}
                        >
                          {sc.verdict}
                        </span>
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {sc.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===== SECTION 5: COMPLIANCE CHECKLIST ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            5. 10-Point Compliance Checklist
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            If your organisation transfers personal data outside India, here is a
            practical checklist:
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {checklist.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                >
                  <div className="w-5 h-5 rounded border-2 border-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-cyan-400" />
                  </div>
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 6: WHAT'S NEXT ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            6. What's Next for Cross-Border Transfers?
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              The DPDP Act's cross-border framework is{' '}
              <strong className="text-white">still evolving</strong>. The
              restricted countries list has not been notified. The Rules under
              the Act are being finalised. Once notified, the framework will
              become more concrete.
            </p>
            <p>
              The government has indicated that it will adopt a{' '}
              <strong className="text-white">calibrated approach</strong> —
              restricting transfers only where necessary for national security,
              public interest, or protection of Data Principals. This suggests
              that most transfers will continue to be allowed, but the government
              retains the right to restrict specific countries.
            </p>
            <p>
              For businesses, this means{' '}
              <strong className="text-white">building flexibility</strong> into
              their data architecture. Do not assume that a specific country will
              always be allowed. Monitor government notifications, conduct
              periodic reviews, and be ready to adapt if restrictions change.
            </p>
            <p>
              For multinational companies, the key is to{' '}
              <strong className="text-white">
                layer DPDP compliance on top of GDPR compliance
              </strong>
              . If you are already GDPR-compliant, you have most of the
              safeguards in place. DPDP adds a layer of government discretion —
              monitor it closely.
            </p>
          </div>
        </section>

        {/* ===== AUTHOR BIO ===== */}
        <section className="mb-16">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-cyan-500/40">
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
              <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-xs font-medium text-cyan-300 mb-2">
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
                  <span className="text-cyan-400 group-open:rotate-45 transition-transform text-xl flex-shrink-0">
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
            <BookOpen className="w-6 h-6 text-cyan-400" />
            Related Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all"
              >
                <h4 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors flex items-center justify-between gap-2">
                  {link.title}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </h4>
                <p className="text-xs text-gray-400 mt-1">{link.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Transferring data outside India?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our compliance experts can help you assess your cross-border transfer
            risks, design a defensible data architecture, and prepare for
            potential government notifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/scorecard"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition-all"
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
          informational purposes only. It is not legal advice. The restricted
          countries list has not yet been notified, and the framework will evolve.
          For advice on your specific situation, consult a qualified legal
          professional.
        </p>
      </div>
    </main>
  );
}
