import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  Building,
  Users,
  Scale,
  AlertTriangle,
  CheckCircle,
  Gavel,
  Shield,
  FileText,
  Clock,
  BookOpen,
  ArrowRight,
  Landmark,
  UserCheck,
  Eye,
  Ban,
  RefreshCw,
  IndianRupee,
  ScrollText,
  Calendar,
  Quote,
} from 'lucide-react';

export default function BoardPage() {
  // ===== QUICK HIGHLIGHTS =====
  const highlights = [
    {
      icon: Building,
      title: 'Composition of the Board',
      description:
        'The Board consists of a Chairperson and other members appointed by the Central Government. The Chairperson must have at least 10 years of experience in data protection, law, or technology policy.',
    },
    {
      icon: Scale,
      title: 'Functions & Powers',
      description:
        'The Board monitors compliance, investigates violations, issues directions, and imposes penalties. It has powers of a civil court for summoning, discovery, and evidence.',
    },
    {
      icon: Users,
      title: 'Investigations',
      description:
        'The Board has the power to investigate complaints and conduct inquiries — either suo motu or on a reference from the Central Government.',
    },
    {
      icon: AlertTriangle,
      title: 'Directions & Penalties',
      description:
        'The Board can issue interim and final directions and impose civil penalties up to ₹250 crore for non-compliance with the DPDP Act 2023.',
    },
    {
      icon: Gavel,
      title: 'Adjudication Process',
      description:
        'The Board follows a quasi-judicial process — notice to the parties, hearing, evidence, and a reasoned order — with strict timelines.',
    },
    {
      icon: UserCheck,
      title: 'Appeals to TDSAT',
      description:
        'Appeals against the Board\'s decisions can be made to the Telecom Disputes Settlement and Appellate Tribunal (TDSAT) within 60 days.',
    },
  ];

  // ===== TIMELINE =====
  const timeline = [
    {
      step: '01',
      title: 'Complaint or Reference Received',
      description:
        'The Board receives a complaint from a Data Principal or a reference from the Central Government regarding a personal data breach or non-compliance.',
      icon: FileText,
    },
    {
      step: '02',
      title: 'Preliminary Screening',
      description:
        'The Board examines the complaint to determine whether a prima facie case exists. Frivolous or vexatious complaints may be dismissed at this stage.',
      icon: Eye,
    },
    {
      step: '03',
      title: 'Notice to the Data Fiduciary',
      description:
        'If a prima facie case is made out, the Board issues a notice to the Data Fiduciary, giving it an opportunity to respond and present its case.',
      icon: ScrollText,
    },
    {
      step: '04',
      title: 'Investigation & Hearing',
      description:
        'The Board may summon witnesses, require the production of documents, and conduct a hearing. Both parties are given a fair opportunity to be heard.',
      icon: Users,
    },
    {
      step: '05',
      title: 'Adjudication & Order',
      description:
        'The Board passes a reasoned order — either dismissing the complaint, issuing directions, or imposing a civil penalty based on the nature and gravity of the breach.',
      icon: Gavel,
    },
    {
      step: '06',
      title: 'Appeal to TDSAT',
      description:
        'Aggrieved parties can appeal to the TDSAT within 60 days. The TDSAT\'s decision is final and binding.',
      icon: Scale,
    },
  ];

  // ===== PENALTY TABLE =====
  const penaltyTable = [
    { violation: 'Failure to take reasonable security safeguards (data breach)', penalty: 'Up to ₹250 Crore' },
    { violation: 'Failure to notify a personal data breach', penalty: 'Up to ₹200 Crore' },
    { violation: 'Processing children\'s data without parental consent', penalty: 'Up to ₹200 Crore' },
    { violation: 'Non-compliance by Significant Data Fiduciary', penalty: 'Up to ₹150 Crore' },
    { violation: 'Failure to comply with Board directions', penalty: 'Up to ₹150 Crore' },
    { violation: 'General non-compliance with the Act', penalty: 'Up to ₹50 Crore' },
  ];

  // ===== FAQS =====
  const faqs = [
    {
      q: 'What is the Data Protection Board of India?',
      a: 'The Data Protection Board of India (DPB) is the regulatory authority established under Section 18 of the DPDP Act, 2023. It enforces the Act, adjudicates complaints and data breaches, and imposes penalties on Data Fiduciaries for non-compliance.',
    },
    {
      q: 'Who appoints the Chairperson and members of the Data Protection Board?',
      a: 'The Chairperson and other members are appointed by the Central Government. The Chairperson must have at least 10 years of experience in data protection, law, or technology policy. Members are appointed based on their expertise in law, data protection, cyber security, or related fields.',
    },
    {
      q: 'What powers does the Data Protection Board have?',
      a: 'The Board has powers to investigate complaints, conduct inquiries, summon witnesses, require production of documents, issue interim and final directions, impose civil penalties up to ₹250 crore, and direct remedial measures. It exercises powers similar to a civil court under the Code of Civil Procedure, 1908.',
    },
    {
      q: 'Can a Data Protection Board decision be appealed?',
      a: 'Yes. Under Section 29 of the DPDP Act, any person aggrieved by an order of the Board may appeal to the Telecom Disputes Settlement and Appellate Tribunal (TDSAT) within 60 days of receiving the order.',
    },
    {
      q: 'How many members does the Data Protection Board have?',
      a: 'The DPDP Act 2023 does not prescribe a fixed number. The Board consists of a Chairperson and such number of other members as the Central Government may determine, based on their expertise in data protection, law, technology, or public administration.',
    },
    {
      q: 'What is the maximum penalty the Data Protection Board can impose?',
      a: 'The maximum penalty is ₹250 crore for failure to take reasonable security safeguards to prevent a personal data breach. Other penalties range from ₹50 crore to ₹200 crore depending on the nature of the violation.',
    },
  ];

  // ===== RELATED LINKS =====
  const relatedLinks = [
    {
      title: 'Penalties & Offences',
      href: '/penalties',
      desc: 'Full breakdown of civil penalties under the DPDP Act 2023.',
    },
    {
      title: 'Rights of Data Principals',
      href: '/rights',
      desc: 'Understand the rights that the Board protects.',
    },
    {
      title: 'Obligations of Data Fiduciaries',
      href: '/obligations',
      desc: 'What compliance the Board enforces.',
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
      title: 'Removal of Difficulties Order',
      href: '/insight/dpdp-removal-of-difficulties-order-2026',
      desc: 'Latest government order on the Board.',
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
            <Landmark className="w-3 h-3" />
            Regulatory Authority · DPDP Act 2023
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Data Protection Board of India
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
            The Data Protection Board (DPB) is the regulatory and adjudicatory
            authority established under the Digital Personal Data Protection Act,
            2023. It is the body that enforces the Act, investigates data breaches,
            adjudicates complaints, and imposes civil penalties of up to{' '}
            <strong className="text-white">₹250 crore</strong> on Data Fiduciaries
            for non-compliance. This page explains the Board's composition, powers,
            investigative procedure, penalty powers, and the appeal mechanism
            available to aggrieved parties.
          </p>

          {/* Meta Row */}
          <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <UserCheck className="w-4 h-4" />
              By Shilpi Kulshrestha
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Last updated: {new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              8 min read
            </span>
          </div>
        </div>

        {/* ===== QUICK HIGHLIGHTS (Original Cards) ===== */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">
            Quick Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6 hover:bg-white/15 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-600 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
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
            1. What is the Data Protection Board?
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              The Data Protection Board of India is a quasi-judicial regulatory
              body established under <strong className="text-white">Section 18</strong>{' '}
              of the Digital Personal Data Protection Act, 2023. It is the
              central enforcement authority for the Act — responsible for
              holding Data Fiduciaries accountable, protecting the rights of
              Data Principals, and ensuring that organisations handling personal
              data in India comply with the law.
            </p>
            <p>
              Unlike traditional regulators, the Board has a dual role. First, it
              is an <strong className="text-white">investigative authority</strong>{' '}
              that can look into complaints, conduct inquiries, and gather
              evidence. Second, it is an{' '}
              <strong className="text-white">adjudicatory authority</strong> that
              hears both sides, passes reasoned orders, and imposes civil
              penalties. This dual role makes the Board one of the most powerful
              privacy regulators in the world, comparable to the GDPR's Data
              Protection Authorities but with a more centralised, tribunal-style
              structure.
            </p>
            <p>
              The Board is not a court, but it exercises powers similar to a civil
              court under the Code of Civil Procedure, 1908. Its orders are
              binding, and non-compliance with its directions can attract
              additional penalties of up to{' '}
              <strong className="text-white">₹150 crore</strong>.
            </p>
          </div>
        </section>

        {/* ===== SECTION 2: COMPOSITION ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            2. Composition & Appointment
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              The Board consists of a <strong className="text-white">Chairperson</strong>{' '}
              and such number of other members as the Central Government may
              determine. The Act does not prescribe a fixed number of members,
              giving the government flexibility to scale the Board based on
              workload and evolving needs.
            </p>
            <p>
              The Chairperson must have at least{' '}
              <strong className="text-white">10 years of experience</strong> in
              data protection, law, technology policy, or a related field.
              Members are appointed based on their expertise in law, data
              protection, cyber security, technology, or public administration.
              The appointment process is designed to ensure independence and
              technical competence — a critical requirement for a regulator
              dealing with complex, fast-moving technology issues.
            </p>
            <p>
              The Chairperson and members hold office for a term prescribed by
              the Central Government and are eligible for reappointment. They
              can be removed only on grounds of misbehaviour or incapacity, after
              an inquiry by a Supreme Court judge — a protection designed to
              shield the Board from political interference.
            </p>
            <p>
              The Board is supported by a secretariat and can hire officers,
              consultants, and experts as needed. It is empowered to establish
              offices at multiple locations across India, though the Act does not
              mandate a specific headquarters.
            </p>
          </div>
        </section>

        {/* ===== SECTION 3: POWERS ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            3. Powers of the Board
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            The DPDP Act 2023 confers wide-ranging powers on the Board. These
            can be grouped into four categories:
          </p>

          <div className="space-y-6">
            {/* Power 1 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-400" />
                (a) Investigative Powers
              </h3>
              <p className="text-gray-300 leading-relaxed">
                The Board can investigate complaints, conduct inquiries, summon
                witnesses, require the production of documents, and receive
                evidence on affidavits. It can also direct any person to furnish
                information relevant to an inquiry. These powers are modelled on
                those of a civil court and are essential for uncovering complex
                data breaches that often involve multiple parties, jurisdictions,
                and technical layers.
              </p>
            </div>

            {/* Power 2 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <Gavel className="w-5 h-5 text-purple-400" />
                (b) Adjudicatory Powers
              </h3>
              <p className="text-gray-300 leading-relaxed">
                The Board adjudicates complaints and references. It hears both
                parties, examines evidence, and passes reasoned orders. It can
                dismiss frivolous complaints, issue directions, impose civil
                penalties, or order remedial measures. Its orders are binding and
                enforceable, and non-compliance can attract additional penalties
                under the Act.
              </p>
            </div>

            {/* Power 3 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <IndianRupee className="w-5 h-5 text-purple-400" />
                (c) Penalty Powers
              </h3>
              <p className="text-gray-300 leading-relaxed">
                The Board can impose civil penalties ranging from{' '}
                <strong className="text-white">₹50 crore to ₹250 crore</strong>,
                depending on the nature and gravity of the violation. The
                penalty schedule is set out in the Schedule to the Act. The Board
                considers factors such as the nature, gravity, and duration of
                the breach; the number of Data Principals affected; the
                repetitiveness of the breach; and whether the Data Fiduciary took
                corrective action.
              </p>
            </div>

            {/* Power 4 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-purple-400" />
                (d) Remedial & Corrective Powers
              </h3>
              <p className="text-gray-300 leading-relaxed">
                The Board can direct Data Fiduciaries to take remedial measures —
                such as strengthening security safeguards, issuing notifications
                to affected Data Principals, or modifying data processing
                practices. It can also issue interim directions to prevent
                ongoing harm while an inquiry is pending.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SECTION 4: TIMELINE ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">
            4. How the Board Adjudicates a Complaint
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            The Board follows a structured, quasi-judicial process. While the
            Act does not prescribe a rigid procedure, the Board is expected to
            follow the principles of natural justice — notice, hearing, and a
            reasoned order. The typical process is:
          </p>

          <div className="space-y-4">
            {timeline.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="flex gap-4 bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-bold text-purple-400">
                        STEP {item.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===== SECTION 5: PENALTIES ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            5. Penalties the Board Can Impose
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            The DPDP Act 2023 prescribes some of the highest data protection
            penalties in the world. The maximum penalty —{' '}
            <strong className="text-white">₹250 crore</strong> — is reserved for
            the most serious violations. The Board has discretion to impose
            penalties below the maximum, based on the facts of each case.
          </p>

          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-left">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-white">
                    Violation
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-white text-right">
                    Maximum Penalty
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {penaltyTable.map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 text-sm text-gray-300">
                      {row.violation}
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold text-red-400 text-right whitespace-nowrap">
                      {row.penalty}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-400 mt-4">
            For a detailed breakdown of each penalty and the factors considered,
            see our{' '}
            <Link href="/penalties" className="text-purple-400 hover:text-purple-300 underline">
              full penalties guide
            </Link>
            .
          </p>
        </section>

        {/* ===== SECTION 6: APPEALS ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            6. Appeals Against Board Orders
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Any person aggrieved by an order of the Board may appeal to the{' '}
              <strong className="text-white">
                Telecom Disputes Settlement and Appellate Tribunal (TDSAT)
              </strong>{' '}
              under Section 29 of the Act. The appeal must be filed within{' '}
              <strong className="text-white">60 days</strong> of receiving the
              Board's order. The TDSAT may condone delay if sufficient cause is
              shown.
            </p>
            <p>
              The TDSAT has the power to hear the appeal, examine the record,
              and pass such orders as it deems fit — including setting aside,
              modifying, or confirming the Board's order. Its decision is final
              and binding, though it can be challenged before the Supreme Court
              under Article 136 of the Constitution.
            </p>
            <p>
              Importantly, filing an appeal does not automatically stay the
              Board's order. The appellant must seek a stay from the TDSAT,
              which may grant it on such terms as it considers appropriate.
            </p>
          </div>
        </section>

        {/* ===== SECTION 7: PRACTICAL IMPLICATIONS ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            7. What This Means for Data Fiduciaries
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              For organisations handling personal data in India, the Data
              Protection Board is not a distant regulator — it is an active
              enforcement authority with significant powers and a clear mandate.
              The practical implications are:
            </p>
            <ul className="space-y-3 pl-2">
              {[
                'Compliance is no longer optional. The Board can investigate suo motu (on its own motion), so even without a complaint, non-compliance can be caught.',
                'Documentation matters. The Board will examine whether the Data Fiduciary took "reasonable security safeguards" — so policies, audits, and incident response plans must be documented.',
                'Breach notification is time-bound. Failure to notify a breach can attract a penalty of up to ₹200 crore — separate from the penalty for the breach itself.',
                'Directors and officers can be held liable. The Act allows the Board to proceed against individuals responsible for the breach, not just the company.',
                'Appeals are possible but not automatic. Organisations should build a strong record at the Board level, because TDSAT appeals are not a guaranteed remedy.',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
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
                Founder, BusinezExcellence | Corporate Law & Company Secretary Expert
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                Shilpi is a corporate lawyer with over a decade of experience in
                data protection, company law, and regulatory compliance. She has
                advised 50+ startups and enterprises on DPDPA readiness,
                privacy governance, and AI compliance. She writes regularly on
                India's evolving data protection landscape.
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
            Related Reading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-purple-500/30 transition-all"
              >
                <h3 className="text-sm font-semibold text-white group-hover:text-purple-400 transition-colors flex items-center justify-between gap-2">
                  {link.title}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </h3>
                <p className="text-xs text-gray-400 mt-2">{link.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Need help understanding your obligations before the Board?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our compliance experts can help you assess your DPDPA readiness,
            build a defensible compliance programme, and prepare for potential
            Board inquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition-all"
            >
              Talk to an Expert →
            </Link>
            <Link
              href="/scorecard"
              className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all"
            >
              Take the Free Test
            </Link>
          </div>
        </section>

        {/* ===== DISCLAIMER ===== */}
        <p className="text-xs text-gray-500 text-center mt-12 max-w-2xl mx-auto leading-relaxed">
          <strong>Disclaimer:</strong> This page is for educational and
          informational purposes only. It is not legal advice. For advice on
          your specific situation, consult a qualified legal professional.
        </p>
      </div>
    </main>
  );
}
