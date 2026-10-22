import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  AlertTriangle,
  Shield,
  AlertCircle,
  FileText,
  Scale,
  BookOpen,
  ArrowRight,
  IndianRupee,
  CheckCircle,
  Gavel,
  Clock,
  UserCheck,
  Calendar,
  XCircle,
  RefreshCw,
  Users,
  Baby,
  Landmark,
  TrendingUp,
  Info,
} from 'lucide-react';

export default function PenaltiesPage() {
  // ===== PENALTIES GRID DATA =====
  const penalties = [
    {
      icon: Shield,
      title: 'Failure to Protect Data',
      amount: 'Up to ₹250 Crore',
      description:
        'The highest penalty is reserved for Data Fiduciaries who fail to take reasonable security safeguards to prevent a personal data breach. This applies to serious breaches affecting large numbers of individuals.',
    },
    {
      icon: AlertCircle,
      title: 'Failure to Notify Breach',
      amount: 'Up to ₹200 Crore',
      description:
        'If a data breach occurs, the Data Fiduciary must notify the Data Protection Board and affected individuals. Failure to report a breach in a timely manner attracts a heavy fine.',
    },
    {
      icon: Baby,
      title: "Children's Data Violations",
      amount: 'Up to ₹200 Crore',
      description:
        'Processing the personal data of children (under 18) without verifiable parental consent, or engaging in behavioral tracking/targeted advertising directed at children, carries massive penalties.',
    },
    {
      icon: Scale,
      title: 'Significant Data Fiduciary (SDF) Non-Compliance',
      amount: 'Up to ₹150 Crore',
      description:
        'Significant Data Fiduciaries have extra obligations (appointing a DPO, independent audits). Failure to fulfill these enhanced duties as notified by the government results in this penalty.',
    },
    {
      icon: AlertTriangle,
      title: 'Failure to Comply with Board Directions',
      amount: 'Up to ₹150 Crore',
      description:
        'The Data Protection Board has the power to issue interim or final directions to an organisation. If the organisation fails to comply with these official directions, a penalty can be imposed.',
    },
    {
      icon: FileText,
      title: 'General Non-Compliance',
      amount: 'Up to ₹50 Crore',
      description:
        'Breach of any other terms or conditions of the DPDP Act (like failing to maintain accurate records or not providing proper notice) falls under this category.',
    },
  ];

  // ===== PENALTY TABLE DATA =====
  const penaltyTable = [
    {
      section: 'Section 8(5)',
      violation: 'Failure to take reasonable security safeguards to prevent a personal data breach',
      penalty: '₹250 Crore',
    },
    {
      section: 'Section 8(6)',
      violation: 'Failure to notify a personal data breach to the Board or affected Data Principals',
      penalty: '₹200 Crore',
    },
    {
      section: 'Section 9(1) & 9(3)',
      violation: "Processing children's personal data without verifiable parental consent, or behavioral tracking/targeted advertising at children",
      penalty: '₹200 Crore',
    },
    {
      section: 'Section 10',
      violation: 'Non-compliance by a Significant Data Fiduciary with its additional obligations',
      penalty: '₹150 Crore',
    },
    {
      section: 'Section 27',
      violation: 'Failure to comply with directions issued by the Data Protection Board',
      penalty: '₹150 Crore',
    },
    {
      section: 'General',
      violation: 'Breach of any other provision of the Act not covered above',
      penalty: '₹50 Crore',
    },
  ];

  // ===== FACTORS CONSIDERED =====
  const factors = [
    {
      icon: TrendingUp,
      title: 'Nature, Gravity & Duration',
      desc: 'How serious was the breach? How long did it continue? Was it a one-time lapse or a systemic failure?',
    },
    {
      icon: Users,
      title: 'Number of Data Principals Affected',
      desc: 'A breach affecting 10,000 individuals is treated differently from one affecting 10 million.',
    },
    {
      icon: RefreshCw,
      title: 'Repetitiveness of the Breach',
      desc: 'Is this a first-time lapse, or has the Data Fiduciary been penalized before for similar conduct?',
    },
    {
      icon: CheckCircle,
      title: 'Corrective Action Taken',
      desc: 'Did the organisation act promptly to contain the breach, notify affected parties, and prevent recurrence?',
    },
    {
      icon: Info,
      title: 'Whether the Breach was Foreseeable',
      desc: 'Was the risk known or reasonably foreseeable? Did the organisation ignore warning signs?',
    },
    {
      icon: IndianRupee,
      title: 'Gain or Avoidance of Loss',
      desc: 'Did the organisation gain unfairly from the breach, or avoid a loss it should have incurred?',
    },
  ];

  // ===== ENFORCEMENT STEPS =====
  const enforcementSteps = [
    {
      step: '01',
      title: 'Complaint or Reference',
      desc: 'The Board receives a complaint from a Data Principal, or a reference from the Central Government, or acts on its own motion (suo motu).',
    },
    {
      step: '02',
      title: 'Preliminary Inquiry',
      desc: 'The Board examines whether a prima facie case exists. Frivolous or vexatious complaints are dismissed at this stage.',
    },
    {
      step: '03',
      title: 'Notice to the Data Fiduciary',
      desc: 'A formal notice is issued, giving the organisation an opportunity to respond and present its side of the story.',
    },
    {
      step: '04',
      title: 'Investigation & Hearing',
      desc: 'The Board may summon witnesses, require documents, and conduct a hearing. Both parties are heard.',
    },
    {
      step: '05',
      title: 'Reasoned Order',
      desc: 'The Board passes a reasoned order — dismissing the complaint, issuing directions, or imposing a penalty.',
    },
    {
      step: '06',
      title: 'Appeal to TDSAT',
      desc: 'Aggrieved parties can appeal to the TDSAT within 60 days. The TDSAT decision is final and binding.',
    },
  ];

  // ===== FAQS =====
  const faqs = [
    {
      q: 'What is the maximum penalty under the DPDP Act 2023?',
      a: 'The maximum penalty is ₹250 crore, imposed on Data Fiduciaries who fail to take reasonable security safeguards to prevent a personal data breach. This is one of the highest data protection penalties in the world.',
    },
    {
      q: 'Who imposes penalties under the DPDP Act?',
      a: 'Penalties are imposed by the Data Protection Board of India (DPB), the regulatory authority established under Section 18 of the DPDP Act 2023. The Board follows a quasi-judicial process — issuing notice, hearing the parties, and passing a reasoned order.',
    },
    {
      q: 'Can penalties under the DPDP Act be appealed?',
      a: 'Yes. Under Section 29 of the DPDP Act, any person aggrieved by an order of the Board may appeal to the Telecom Disputes Settlement and Appellate Tribunal (TDSAT) within 60 days of receiving the order.',
    },
    {
      q: 'Are DPDP Act penalties imposed automatically after a breach?',
      a: 'No. Penalties are not automatic. The Board conducts an inquiry, considers factors such as the nature and gravity of the breach, the number of Data Principals affected, the repetitiveness of the breach, and whether the Data Fiduciary took corrective action, before imposing a penalty.',
    },
    {
      q: 'Can directors be personally penalized under the DPDP Act?',
      a: 'Yes. Section 37 of the DPDP Act allows the Board to proceed against directors, managers, and other officers of a company if the offence was committed with their consent, connivance, or due to their neglect. Personal liability can attach even if the company is penalized.',
    },
    {
      q: 'What is the penalty for failing to notify a data breach?',
      a: 'Failure to notify a personal data breach to the Board and affected Data Principals can attract a penalty of up to ₹200 crore. This is separate from the penalty for the breach itself, which can be up to ₹250 crore.',
    },
    {
      q: 'Does the DPDP Act have criminal penalties?',
      a: 'No. The DPDP Act 2023 is a civil law — it imposes civil penalties, not criminal penalties. However, non-compliance with Board directions can attract additional civil penalties, and individuals (directors, officers) can be held personally liable.',
    },
    {
      q: 'How does the DPDP Act penalty compare with GDPR?',
      a: 'GDPR fines go up to €20 million or 4% of global annual turnover, whichever is higher. DPDP Act fines go up to ₹250 crore (approximately €28 million). For large enterprises, GDPR fines can be much higher; for smaller Indian businesses, DPDP fines can be equally severe relative to their size.',
    },
  ];

  // ===== RELATED LINKS =====
  const relatedLinks = [
    {
      title: 'Data Protection Board',
      href: '/board',
      desc: 'The authority that enforces the Act and imposes penalties.',
    },
    {
      title: 'Obligations of Data Fiduciary',
      href: '/obligations',
      desc: 'Learn what you must do to avoid these penalties.',
    },
    {
      title: 'Rights of Data Principals',
      href: '/rights',
      desc: 'The rights that trigger penalty exposure.',
    },
    {
      title: 'Director Liability',
      href: '/insight/dpdp-act-director-liability',
      desc: 'Can directors be personally penalized?',
    },
    {
      title: 'DPDPA Complete Guide',
      href: '/resources/guides/dpdpa-2023-complete-guide',
      desc: 'End-to-end guide to the Act.',
    },
    {
      title: 'Cross-Border Data Transfer',
      href: '/cross-border',
      desc: 'Penalties for unlawful cross-border transfers.',
    },
  ];

  // ===== REAL WORLD EXAMPLES =====
  const examples = [
    {
      scenario: 'Scenario A: Large-Scale Data Breach',
      description:
        'A fintech company with 5 million users suffers a breach exposing names, PAN numbers, and bank details. The company had no encryption at rest and no access controls. The Board found that reasonable security safeguards were absent.',
      penalty: 'Up to ₹250 Crore',
      icon: Shield,
    },
    {
      scenario: 'Scenario B: Delayed Breach Notification',
      description:
        'A healthcare provider discovers a breach but delays notifying the Board and affected patients for 30 days. The breach itself was minor, but the delay prevented timely remedial action.',
      penalty: 'Up to ₹200 Crore',
      icon: AlertCircle,
    },
    {
      scenario: 'Scenario C: Children\'s Data Violation',
      description:
        'An ed-tech platform collects data from children under 18 without verifiable parental consent, and uses behavioral tracking to serve targeted ads.',
      penalty: 'Up to ₹200 Crore',
      icon: Baby,
    },
    {
      scenario: 'Scenario D: SDF Non-Compliance',
      description:
        'A social media platform designated as a Significant Data Fiduciary fails to appoint a Data Protection Officer, conduct independent audits, or submit a DPIA report.',
      penalty: 'Up to ₹150 Crore',
      icon: Scale,
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-xs font-medium text-red-300 mb-4">
            <Gavel className="w-3 h-3" />
            Enforcement · DPDP Act 2023
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Penalties & Offences under the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
              DPDP Act 2023
            </span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
            The DPDP Act 2023 introduces some of the{' '}
            <strong className="text-white">highest data protection penalties in the world</strong>{' '}
            — up to <strong className="text-white">₹250 crore</strong> for a single
            violation. Unlike previous Indian privacy laws, the penalties are
            severe and designed to make organisations take data privacy seriously.
            This page breaks down every penalty, the enforcement process, the
            factors the Board considers, and how appeals work.
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

        {/* ===== QUICK PENALTY CARDS (Original Grid) ===== */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">
            The 6 Penalty Categories at a Glance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {penalties.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md hover:bg-white/10 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center flex-shrink-0 border border-red-500/30 mt-1">
                      <Icon className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {item.title}
                      </h3>
                      <div className="inline-flex items-center gap-1 text-sm font-bold text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                        <IndianRupee className="w-3.5 h-3.5" />
                        {item.amount.replace('Up to ₹', '')} Fine
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 leading-7 flex-grow mt-2">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===== SECTION 1: INTRODUCTION ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            1. Why the DPDP Act Penalties Are So Severe
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              India's previous data protection framework — the Information
              Technology Act, 2000 and its rules — imposed penalties that were,
              in practice, too small to deter large organisations. Fines of a
              few lakh rupees were often seen as the cost of doing business, and
              enforcement was fragmented across multiple regulators.
            </p>
            <p>
              The DPDP Act 2023 changes this completely. It introduces a{' '}
              <strong className="text-white">single, centralised enforcement authority</strong>{' '}
              (the Data Protection Board) and a{' '}
              <strong className="text-white">penalty schedule with teeth</strong>{' '}
              — up to ₹250 crore for the most serious violations. The message is
              clear: data protection is no longer a compliance checkbox; it is a
              boardroom-level priority.
            </p>
            <p>
              The penalties are structured to reflect the{' '}
              <strong className="text-white">gravity of the harm</strong>. The
              highest penalty is reserved for failures that cause or enable a
              personal data breach. The next tier covers failures to notify
              breaches and violations involving children. The lowest tier covers
              general non-compliance. This tiered structure ensures that the
              punishment is proportionate to the wrongdoing.
            </p>
          </div>
        </section>

        {/* ===== SECTION 2: DETAILED PENALTY TABLE ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            2. Full Penalty Schedule (Section-Wise)
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            The Schedule to the DPDP Act 2023 sets out the penalties. Here is the
            complete breakdown, mapped to the relevant section of the Act:
          </p>

          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-left">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-4 py-3 text-xs font-semibold text-white uppercase tracking-wider">
                    Section
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold text-white uppercase tracking-wider">
                    Violation
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold text-white uppercase tracking-wider text-right">
                    Max Penalty
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {penaltyTable.map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 text-xs font-mono text-purple-400 whitespace-nowrap">
                      {row.section}
                    </td>
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

          <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
            <p className="text-sm text-yellow-200 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Important:</strong> These are{' '}
                <em>maximum</em> penalties, not fixed penalties. The Board has
                discretion to impose a lower amount based on the facts of each
                case. The actual penalty depends on the factors listed in Section
                33 of the Act.
              </span>
            </p>
          </div>
        </section>

        {/* ===== SECTION 3: FACTORS CONSIDERED ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            3. How the Board Decides the Penalty Amount
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            The Board does not impose the maximum penalty in every case. Section
            33 of the Act requires it to consider several factors before
            determining the penalty amount. These factors are designed to ensure
            that the penalty is proportionate, fair, and deterrent:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {factors.map((factor, i) => {
              const Icon = factor.icon;
              return (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center flex-shrink-0 border border-red-500/30">
                      <Icon className="w-5 h-5 text-red-400" />
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
        </section>

        {/* ===== SECTION 4: ENFORCEMENT PROCESS ===== */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-3 flex items-center gap-2">
              <Scale className="w-7 h-7 text-red-400" />
              4. How Penalties Are Enforced
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Penalties are not imposed automatically. The Data Protection Board
              follows a due process — giving the organisation a fair opportunity
              to be heard before any penalty is imposed. The process typically
              works as follows:
            </p>

            <div className="space-y-4">
              {enforcementSteps.map((step) => (
                <div
                  key={step.step}
                  className="flex gap-4 bg-white/5 border border-white/10 rounded-xl p-5"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-white/5 border border-white/10 rounded-xl">
              <p className="text-sm text-gray-300">
                <strong className="text-white">Key point:</strong> The Board is
                not bound by the Code of Civil Procedure, but it is expected to
                follow the principles of natural justice — notice, hearing, and a
                reasoned order. Appeals against the Board's orders lie to the
                TDSAT.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SECTION 5: REAL WORLD EXAMPLES ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            5. Real-World Scenarios
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            To make the penalties concrete, here are four hypothetical scenarios
            illustrating how different violations could attract different
            penalties:
          </p>

          <div className="space-y-4">
            {examples.map((ex, i) => {
              const Icon = ex.icon;
              return (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center flex-shrink-0 border border-red-500/30">
                      <Icon className="w-6 h-6 text-red-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-white">
                          {ex.scenario}
                        </h3>
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                          <IndianRupee className="w-3 h-3" />
                          {ex.penalty}
                        </span>
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {ex.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-xs text-gray-500 mt-4">
            Note: These are illustrative scenarios only. Actual penalties depend
            on the facts of each case and the Board's discretion.
          </p>
        </section>

        {/* ===== SECTION 6: DIRECTOR LIABILITY ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            6. Can Directors Be Personally Penalized?
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Yes. Under <strong className="text-white">Section 37</strong> of the
              DPDP Act 2023, if a company commits an offence, the Board can
              proceed against the directors, managers, and other officers who
              were in charge of the company's affairs at the time of the
              contravention. This is a significant shift — it means that data
              protection is not just a corporate liability but a personal one for
              senior management.
            </p>
            <p>
              The Act provides a defence: an officer can escape liability if they
              can prove that the contravention took place without their
              knowledge, or that they exercised due diligence to prevent it. But
              this defence is not easy to establish — it requires documented
              evidence of active oversight, not just a claim of ignorance.
            </p>
            <p>
              This is why we recommend that boards and senior management take a
              hands-on approach to DPDPA compliance — not just delegate it to the
              IT team. For a deeper dive, see our{' '}
              <Link
                href="/insight/dpdp-act-director-liability"
                className="text-purple-400 hover:text-purple-300 underline"
              >
                Director Liability insight
              </Link>
              .
            </p>
          </div>
        </section>

        {/* ===== SECTION 7: PENALTIES VS GDPR ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            7. How Do DPDP Penalties Compare with GDPR?
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              GDPR fines go up to <strong className="text-white">€20 million</strong>{' '}
              or <strong className="text-white">4% of global annual turnover</strong>,
              whichever is higher. For a global enterprise with €10 billion in
              revenue, the GDPR cap is €400 million — much higher than DPDP's
              ₹250 crore (approximately €28 million).
            </p>
            <p>
              However, for Indian SMEs and mid-market companies, the DPDP
              penalties are equally severe relative to their size. A ₹50 crore
              penalty for an Indian company with ₹200 crore revenue is a
              business-ending event. The DPDP Act also has a{' '}
              <strong className="text-white">broader scope</strong> in some
              respects — for example, its rules on children's data are stricter
              than GDPR's.
            </p>
            <p>
              The key takeaway: whether you are a global enterprise or an Indian
              startup, DPDPA compliance should be a board-level priority.
            </p>
          </div>
        </section>

        {/* ===== AUTHOR BIO ===== */}
        <section className="mb-16">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-red-500/40">
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
              <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-xs font-medium text-red-300 mb-2">
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
                  <span className="text-red-400 group-open:rotate-45 transition-transform text-xl flex-shrink-0">
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
            Related Topics on Compliance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all"
              >
                <h4 className="text-sm font-medium text-white group-hover:text-red-400 transition-colors flex items-center justify-between gap-2">
                  {link.title}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </h4>
                <p className="text-xs text-gray-400 mt-1">{link.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Don't wait for a penalty notice.
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our compliance experts can help you assess your penalty exposure,
            build a defensible compliance programme, and prepare for potential
            Board inquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/scorecard"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold hover:scale-105 transition-all"
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
          informational purposes only. It is not legal advice. The penalty
          amounts shown are maximums under the Act — actual penalties depend on
          the facts of each case. For advice on your specific situation, consult
          a qualified legal professional.
        </p>
      </div>
    </main>
  );
}