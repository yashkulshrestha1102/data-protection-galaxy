import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  BookOpen,
  Users,
  Shield,
  Building,
  AlertTriangle,
  Globe,
  ArrowRight,
  UserCheck,
  Calendar,
  Clock,
  FileText,
  Scale,
  Landmark,
  Gavel,
  CheckCircle,
  Info,
  BookMarked,
  Layers,
  ListOrdered,
  Baby,
  Lock,
  Database,
  TrendingUp,
  Eye,
} from 'lucide-react';

export default function ProvisionsPage() {
  // ===== CHAPTERS OVERVIEW =====
  const chapters = [
    {
      icon: BookOpen,
      title: 'Chapter I: Preliminary',
      sections: 'Sections 1-3',
      description:
        'Short title, extent, commencement, and definitions. This chapter sets the foundation — defining who a Data Principal is, who a Data Fiduciary is, what "personal data" means, and other critical terms.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Users,
      title: 'Chapter II: Obligations & Rights',
      sections: 'Sections 4-14',
      description:
        'The heart of the Act. Covers lawful processing, notice, consent, legitimate uses, general obligations of Data Fiduciaries, children\'s data, SDF obligations, and the rights of Data Principals.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Globe,
      title: 'Chapter III: Cross-Border Transfer',
      sections: 'Section 15',
      description:
        'Provisions for transfer of personal data outside India. Empowers the government to restrict transfers to notified countries and sets conditions for international data flows.',
      color: 'from-cyan-500 to-teal-500',
    },
    {
      icon: Building,
      title: 'Chapter IV: Data Protection Board',
      sections: 'Sections 16-27',
      description:
        'Establishes the Data Protection Board of India — the regulatory authority. Covers composition, appointment, powers, functions, procedure, and the appeal mechanism to TDSAT.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: AlertTriangle,
      title: 'Chapter V: Penalties & Adjudication',
      sections: 'Sections 28-34',
      description:
        'Covers the procedure for imposing penalties, factors to be considered, and the Schedule of penalties (up to ?250 crore). This is where enforcement power is operationalised.',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Scale,
      title: 'Chapter VI: Miscellaneous',
      sections: 'Sections 35-44',
      description:
        'Covers miscellaneous provisions — protections for state functions, exemptions, power to make rules, removal of difficulties, and transitional provisions.',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  // ===== KEY DEFINITIONS =====
  const definitions = [
    {
      term: 'Data Principal',
      definition:
        'The individual to whom the personal data relates. Also includes parents/guardians in case of children, and persons with disabilities in case of persons with disabilities.',
      section: 'Section 2(j)',
      icon: Users,
    },
    {
      term: 'Data Fiduciary',
      definition:
        'Any person who alone or jointly with others determines the purpose and means of processing personal data. This includes most businesses, websites, apps, and service providers.',
      section: 'Section 2(i)',
      icon: Building,
    },
    {
      term: 'Data Processor',
      definition:
        'Any person who processes personal data on behalf of a Data Fiduciary. Examples include cloud providers, payroll processors, and IT service providers.',
      section: 'Section 2(k)',
      icon: Database,
    },
    {
      term: 'Personal Data',
      definition:
        'Any data about an individual who is identifiable by or in relation to such data. This includes names, emails, phone numbers, IP addresses, location data, and more.',
      section: 'Section 2(t)',
      icon: FileText,
    },
    {
      term: 'Processing',
      definition:
        'Any operation or set of operations performed on personal data — including collection, recording, storage, retrieval, use, sharing, and deletion.',
      section: 'Section 2(x)',
      icon: Layers,
    },
    {
      term: 'Consent',
      definition:
        'Any freely given, specific, informed, unconditional, and unambiguous indication of the Data Principal\'s wishes, with a clear affirmative action.',
      section: 'Section 6',
      icon: CheckCircle,
    },
    {
      term: 'Significant Data Fiduciary',
      definition:
        'A Data Fiduciary notified by the Central Government based on factors such as the volume and sensitivity of data processed, risk to Data Principals, and impact on national security.',
      section: 'Section 10',
      icon: Scale,
    },
    {
      term: 'Personal Data Breach',
      definition:
        'Any unauthorised use, sharing, access, disclosure, alteration, destruction, or loss of personal data in the possession of a Data Fiduciary.',
      section: 'Section 2(u)',
      icon: AlertTriangle,
    },
  ];

  // ===== SECTION-WISE MAPPING =====
  const sectionMap = [
    { chapter: 'I', sections: '1-3', title: 'Preliminary', desc: 'Short title, extent, commencement, definitions' },
    { chapter: 'II', sections: '4', title: 'Grounds for Processing', desc: 'Processing only for lawful purpose with consent or legitimate use' },
    { chapter: 'II', sections: '5', title: 'Notice', desc: 'Notice requirements before obtaining consent' },
    { chapter: 'II', sections: '6', title: 'Consent', desc: 'Consent must be free, specific, informed, unconditional, unambiguous' },
    { chapter: 'II', sections: '7', title: 'Legitimate Uses', desc: 'Certain uses that do not require consent' },
    { chapter: 'II', sections: '8', title: 'General Obligations', desc: 'Data Fiduciary obligations (security, breach notification, grievance redressal)' },
    { chapter: 'II', sections: '9', title: 'Children\'s Data', desc: 'Verifiable parental consent; no behavioral tracking' },
    { chapter: 'II', sections: '10', title: 'Significant Data Fiduciary', desc: 'Enhanced obligations for SDFs (DPO, audits, DPIA)' },
    { chapter: 'II', sections: '11-14', title: 'Rights of Data Principals', desc: 'Access, correction, erasure, grievance redressal, portability, nomination' },
    { chapter: 'III', sections: '15', title: 'Cross-Border Transfer', desc: 'Government may restrict transfers to notified countries' },
    { chapter: 'IV', sections: '16-27', title: 'Data Protection Board', desc: 'Composition, powers, functions, procedure, appeals to TDSAT' },
    { chapter: 'V', sections: '28-34', title: 'Penalties & Adjudication', desc: 'Procedure for imposing penalties; Schedule of penalties' },
    { chapter: 'VI', sections: '35-44', title: 'Miscellaneous', desc: 'State functions, exemptions, rule-making, removal of difficulties' },
  ];

  // ===== TIMELINE =====
  const timeline = [
    {
      date: 'August 2023',
      title: 'DPDP Act 2023 Receives Presidential Assent',
      description:
        'The Digital Personal Data Protection Act, 2023 received presidential assent on 11 August 2023. This was the culmination of years of deliberation, including the Justice B.N. Srikrishna Committee report (2018) and multiple draft bills.',
    },
    {
      date: 'January 2025',
      title: 'Draft Rules Released for Public Consultation',
      description:
        'The Ministry of Electronics and Information Technology (MeitY) released draft rules under the DPDP Act for public consultation. Stakeholders submitted feedback on consent managers, breach notification timelines, and SDF criteria.',
    },
    {
      date: '2025-2026',
      title: 'Phased Implementation of Rules',
      description:
        'The Rules will be notified in phases. Some provisions (such as SDF obligations) may be implemented later to give organisations time to prepare. Full compliance is expected within 12-24 months of notification.',
    },
    {
      date: '2026+',
      title: 'Operationalisation of the Data Protection Board',
      description:
        'The Data Protection Board will be fully operationalised, with a Chairperson and members appointed, and the power to investigate complaints and impose penalties.',
    },
  ];

  // ===== FAQS =====
  const faqs = [
    {
      q: 'How many chapters and sections are there in the DPDP Act 2023?',
      a: 'The DPDP Act 2023 has 6 chapters and 44 sections. It also has a Schedule that sets out the penalties for various violations.',
    },
    {
      q: 'What is Chapter I of the DPDP Act?',
      a: 'Chapter I (Sections 1-3) is the Preliminary chapter. It covers the short title, extent, commencement, and definitions — defining key terms like Data Principal, Data Fiduciary, and personal data.',
    },
    {
      q: 'What does Chapter II of the DPDP Act cover?',
      a: 'Chapter II (Sections 4-14) covers the obligations of Data Fiduciaries and the rights of Data Principals. It includes provisions on lawful processing, notice, consent, children\'s data, SDF obligations, and rights.',
    },
    {
      q: 'What is Chapter III of the DPDP Act?',
      a: 'Chapter III (Section 15) covers cross-border transfers. It empowers the government to restrict data transfers to notified countries, though the exact list has not yet been published.',
    },
    {
      q: 'What does Chapter IV of the DPDP Act establish?',
      a: 'Chapter IV (Sections 16-27) establishes the Data Protection Board of India. It covers composition, appointment, powers, functions, procedure, and the appeal mechanism to TDSAT.',
    },
    {
      q: 'What is covered in Chapter V of the DPDP Act?',
      a: 'Chapter V (Sections 28-34) covers penalties and adjudication. It includes the procedure for imposing penalties, factors to be considered, and the Schedule of penalties (up to ?250 crore).',
    },
    {
      q: 'What is the Schedule to the DPDP Act?',
      a: 'The Schedule lists the penalties for various violations. The highest penalty is ?250 crore for failure to take reasonable security safeguards to prevent a personal data breach. The lowest is ?50 crore for general non-compliance.',
    },
    {
      q: 'When did the DPDP Act 2023 come into force?',
      a: 'The Act received presidential assent on 11 August 2023. Different provisions will come into force in phases, as notified by the Central Government. The Rules are still being finalised.',
    },
  ];

  // ===== RELATED LINKS =====
  const relatedLinks = [
    {
      title: 'Rights of Data Principals',
      href: '/rights',
      desc: 'Chapter II rights explained in detail.',
    },
    {
      title: 'Obligations of Data Fiduciaries',
      href: '/obligations',
      desc: 'Chapter II obligations for businesses.',
    },
    {
      title: 'Data Protection Board',
      href: '/board',
      desc: 'Chapter IV — the enforcement authority.',
    },
    {
      title: 'Penalties & Offences',
      href: '/penalties',
      desc: 'Chapter V and the Schedule explained.',
    },
    {
      title: 'Cross-Border Transfer',
      href: '/cross-border',
      desc: 'Chapter III provisions in detail.',
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 border border-pink-500/30 text-xs font-medium text-pink-300 mb-4">
            <BookMarked className="w-3 h-3" />
            Act Overview · DPDP Act 2023
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Key Provisions of the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
              DPDP Act 2023
            </span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
            The Digital Personal Data Protection Act, 2023 is a{' '}
            <strong className="text-white">
              44-section, 6-chapter legislation
            </strong>{' '}
            that fundamentally reshapes how personal data is processed in India.
            This page provides a{' '}
            <strong className="text-white">chapter-wise overview</strong>, key
            definitions, a section-wise mapping, and a brief history of the Act.
            Whether you are a lawyer, compliance professional, or business owner,
            this is your starting point for understanding the statute.
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

        {/* ===== CHAPTERS GRID ===== */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">
            The 6 Chapters at a Glance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {chapters.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      <span className="text-xs font-mono text-gray-400">
                        {item.sections}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
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
            1. The Structure of the Act
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              The DPDP Act 2023 is a{' '}
              <strong className="text-white">compact but powerful</strong>{' '}
              legislation. At 44 sections, it is shorter than the GDPR (99
              articles) but covers similar ground — rights, obligations,
              enforcement, and penalties. The Act is supplemented by a{' '}
              <strong className="text-white">Schedule</strong> (penalties) and
              will be further operationalised by{' '}
              <strong className="text-white">Rules</strong> that will be notified
              by the Central Government.
            </p>
            <p>
              The structure is logical: Chapter I sets the foundation (definitions),
              Chapter II creates the rights and obligations, Chapter III handles
              cross-border transfers, Chapter IV creates the enforcement
              authority, Chapter V sets penalties, and Chapter VI covers
              miscellaneous matters. This structure reflects the Act's
              philosophy — rights and obligations are at the centre, with
              enforcement and penalties as the backstop.
            </p>
            <p>
              For businesses, Chapter II is the most operationally important —
              it defines the day-to-day obligations around notice, consent,
              security, breach notification, and grievance redressal. For Data
              Principals, Chapter II's rights provisions (Sections 11-14) are the
              most relevant. For lawyers and compliance professionals, all
              chapters matter.
            </p>
          </div>
        </section>

        {/* ===== SECTION 2: KEY DEFINITIONS ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            2. Key Definitions (Chapter I)
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            The Act defines several critical terms in Section 2. Understanding
            these is essential because they determine the scope of the entire
            law. Here are the 8 most important definitions:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {definitions.map((def, i) => {
              const Icon = def.icon;
              return (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 border border-pink-500/30">
                      <Icon className="w-5 h-5 text-pink-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="text-base font-semibold text-white">
                          {def.term}
                        </h3>
                        <span className="text-[10px] font-mono text-pink-400 bg-pink-500/10 px-1.5 py-0.5 rounded border border-pink-500/20">
                          {def.section}
                        </span>
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {def.definition}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===== SECTION 3: SECTION-WISE MAP ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            3. Section-Wise Map of the Act
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Here is a section-wise map of the Act — a quick reference to what
            each part of the statute covers:
          </p>

          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-left">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-4 py-3 text-xs font-semibold text-white uppercase tracking-wider">
                    Chapter
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold text-white uppercase tracking-wider">
                    Sections
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold text-white uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold text-white uppercase tracking-wider">
                    What it Covers
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {sectionMap.map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 text-xs font-mono text-purple-400 whitespace-nowrap">
                      {row.chapter}
                    </td>
                    <td className="px-4 py-3 text-xs font-mono text-pink-400 whitespace-nowrap">
                      {row.sections}
                    </td>
                    <td className="px-4 py-3 text-sm text-white font-medium">
                      {row.title}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-300">
                      {row.desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ===== SECTION 4: CHAPTER DEEP DIVES ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            4. Chapter-Wise Deep Dive
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            Here is a closer look at what each chapter contains and why it
            matters:
          </p>

          <div className="space-y-6">
            {/* Chapter II deep dive (most important) */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                Chapter II — The Heart of the Act
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Chapter II (Sections 4-14) is where the Act's substantive
                obligations and rights live. It covers:
              </p>
              <ul className="space-y-2">
                {[
                  'Section 4: Grounds for processing (consent or legitimate use)',
                  'Section 5: Notice requirements before obtaining consent',
                  'Section 6: Consent — free, specific, informed, unconditional, unambiguous',
                  'Section 7: Legitimate uses (state functions, legal obligations, medical emergencies)',
                  'Section 8: General obligations of Data Fiduciaries (security, breach notification, grievance redressal)',
                  'Section 9: Children\'s data — verifiable parental consent, no behavioral tracking',
                  'Section 10: Significant Data Fiduciary obligations (DPO, audits, DPIA)',
                  'Sections 11-14: Rights of Data Principals (access, correction, erasure, grievance redressal, portability, nomination)',
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
            </div>

            {/* Chapter IV deep dive */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Building className="w-5 h-5 text-yellow-400" />
                Chapter IV — The Enforcement Authority
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Chapter IV (Sections 16-27) establishes the Data Protection Board
                of India. It covers:
              </p>
              <ul className="space-y-2">
                {[
                  'Section 18: Establishment of the Board',
                  'Section 19: Composition and appointment of Chairperson and members',
                  'Section 20: Removal of Chairperson and members',
                  'Sections 21-27: Powers, functions, procedure, and appeal mechanism',
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
            </div>

            {/* Chapter V deep dive */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Gavel className="w-5 h-5 text-red-400" />
                Chapter V — The Penalty Framework
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Chapter V (Sections 28-34) sets out the penalty framework. It
                covers:
              </p>
              <ul className="space-y-2">
                {[
                  'Section 28: Penalties for various violations',
                  'Section 33: Factors to be considered when imposing penalties',
                  'Section 34: Appeal to TDSAT',
                  'Schedule: The actual penalty amounts (?50 crore to ?250 crore)',
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
            </div>
          </div>
        </section>

        {/* ===== SECTION 5: TIMELINE ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            5. Legislative Timeline
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            The DPDP Act was years in the making. Here is a brief timeline of
            its evolution:
          </p>

          <div className="space-y-4">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-bold text-pink-400">
                      {item.date}
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
            ))}
          </div>
        </section>

        {/* ===== SECTION 6: WHY THIS MATTERS ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            6. Why Understanding the Provisions Matters
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              For <strong className="text-white">businesses</strong>, knowing the
              provisions is essential because the obligations in Chapter II are
              not vague principles — they are specific, enforceable requirements.
              A failure to provide proper notice, obtain valid consent, or
              implement reasonable security safeguards can attract penalties of
              up to ?250 crore. Compliance requires a thorough understanding of
              the statute.
            </p>
            <p>
              For <strong className="text-white">Data Principals</strong>, knowing
              your rights (Sections 11-14) empowers you to take action. You can
              request access, correction, or erasure; file grievances; and
              escalate complaints to the Data Protection Board if they are not
              resolved.
            </p>
            <p>
              For <strong className="text-white">lawyers and compliance professionals</strong>,
              the section-wise map is a useful starting point for legal research
              and drafting. The Act is new, and many provisions will be clarified
              through Rules, Board decisions, and judicial interpretation. Keeping
              track of these developments is essential for advising clients.
            </p>
          </div>
        </section>

        {/* ===== AUTHOR BIO ===== */}
        <section className="mb-16">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-pink-500/40">
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
              <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-pink-500/20 border border-pink-500/30 text-xs font-medium text-pink-300 mb-2">
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
                  <span className="text-pink-400 group-open:rotate-45 transition-transform text-xl flex-shrink-0">
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
            <BookOpen className="w-6 h-6 text-pink-400" />
            Related Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all"
              >
                <h4 className="text-sm font-medium text-white group-hover:text-pink-400 transition-colors flex items-center justify-between gap-2">
                  {link.title}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </h4>
                <p className="text-xs text-gray-400 mt-1">{link.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Want to understand the Act end-to-end?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Take our free DPDPA assessment to see where your organisation stands,
            or dive into our comprehensive guide to the Act.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/scorecard"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:scale-105 transition-all"
            >
              Take the Free Test ?
            </Link>
            <Link
              href="/resources/guides/dpdpa-2023-complete-guide"
              className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all"
            >
              Read the Complete Guide
            </Link>
          </div>
        </section>

        {/* ===== DISCLAIMER ===== */}
        <p className="text-xs text-gray-500 text-center mt-12 max-w-2xl mx-auto leading-relaxed">
          <strong>Disclaimer:</strong> This page is for educational and
          informational purposes only. It is not legal advice. The summary of
          provisions is not a substitute for the actual text of the Act. For
          advice on your specific situation, consult a qualified legal
          professional.
        </p>
      </div>
    </main>
  );
}
