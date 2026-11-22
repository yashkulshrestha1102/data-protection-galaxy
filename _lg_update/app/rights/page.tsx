import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  CheckCircle,
  Shield,
  Users,
  ArrowRight,
  UserCheck,
  Calendar,
  Clock,
  Gavel,
  AlertTriangle,
  Info,
  Ban,
  MessageSquare,
  UserPlus,
  Eye,
  FileCheck,
  Scale,
  BookOpen,
} from 'lucide-react';
import { RIGHTS_FAQS } from '@/data/page-faqs';

// Update this only when the page content is genuinely reviewed
const LAST_UPDATED = 'November 2026';

export default function RightsPage() {
  // ===== CORE RIGHTS =====
  const rights = [
    {
      icon: Users,
      title: 'Right to Access Information',
      subtitle: 'Know what is being done with your data.',
      section: 'Section 11',
      description:
        'Under Section 11 of the DPDP Act, a Data Principal whose data is processed on the basis of consent (or was voluntarily provided) can ask a Data Fiduciary for a summary of the personal data being processed and the processing activities, along with the identities of all other Data Fiduciaries and Data Processors with whom the data has been shared and a description of the data shared. This gives you transparency over what is happening to your data.',
      details: [
        'You can request a summary of the personal data being processed and the processing activities',
        'You can ask for the identities of all Data Fiduciaries and Data Processors with whom your data has been shared',
        'You can ask for a description of the personal data that has been shared',
        'You can request any other information the Rules prescribe',
        'The Data Fiduciary must respond within the period prescribed in the Rules',
      ],
    },
    {
      icon: CheckCircle,
      title: 'Right to Correction and Erasure',
      subtitle: 'Correct inaccuracies or request deletion.',
      section: 'Section 12',
      description:
        'You have the right to request correction of inaccurate or misleading personal data, completion of incomplete data, and updating of your data. You can also request erasure of your data (sometimes called the right to be forgotten) unless retention is necessary for the specified purpose or for compliance with a law.',
      details: [
        'You can request correction of inaccurate or misleading data',
        'You can request completion and updating of your data',
        'You can request erasure of your personal data',
        'Erasure also follows when you withdraw consent and the purpose is no longer served',
        'Erasure can be refused if retention is required by law',
      ],
    },
    {
      icon: MessageSquare,
      title: 'Right to Grievance Redressal',
      subtitle: 'Readily available means to raise a complaint.',
      section: 'Section 13',
      description:
        'Section 13 gives you the right to readily available means of grievance redressal from a Data Fiduciary or Consent Manager for any act or omission in performing its obligations or in respect of your rights. The Data Fiduciary must respond within the prescribed period, and you must exhaust this route before approaching the Data Protection Board of India.',
      details: [
        'Every Data Fiduciary must publish contact details of its Data Protection Officer or another person who can answer your questions',
        'You can file a grievance directly with the Data Fiduciary or Consent Manager',
        'The grievance must be answered within the period prescribed in the Rules',
        'You must exhaust this route before approaching the Data Protection Board',
        'If unresolved, you can complain to the Board, which can inquire and impose penalties',
      ],
    },
    {
      icon: UserPlus,
      title: 'Right to Nominate',
      subtitle: 'Appoint someone to exercise your rights.',
      section: 'Section 14',
      description:
        'In the event of your death or incapacity, you have the right to nominate another individual to exercise your rights on your behalf. This ensures your privacy choices continue to be respected when you are unable to act yourself.',
      details: [
        'You can nominate any individual to exercise your rights on your behalf',
        'Applies in the event of your death or incapacity',
        'The nominee exercises your rights as provided in the Act and Rules',
        'The nomination must be made in the manner prescribed',
        'The Data Fiduciary must honour a valid nomination',
      ],
    },
    {
      icon: Ban,
      title: 'Right to Withdraw Consent',
      subtitle: 'You stay in control of your consent.',
      section: 'Section 6(4)',
      description:
        'Where processing is based on your consent, you can withdraw it at any time. The ease of withdrawing must be comparable to the ease with which consent was given. Once consent is withdrawn, the Data Fiduciary must stop processing, and cause its Data Processors to stop, within a reasonable time, unless the law permits processing without consent.',
      details: [
        'You can withdraw consent at any time',
        'Withdrawal must be as easy as giving consent',
        'The Data Fiduciary must stop processing, and cause its Data Processors to stop, within a reasonable time',
        'Withdrawal does not affect processing done lawfully before it',
        'You bear the consequences of withdrawal, for example a service may no longer be available',
      ],
    },
  ];

  // ===== HOW TO EXERCISE RIGHTS =====
  const exerciseSteps = [
    {
      step: '01',
      title: 'Identify the Data Fiduciary',
      desc: 'Find out which organisation is processing your data. Check its privacy policy, notices, and the contact details of its Data Protection Officer or grievance contact published on its website or app.',
      icon: Eye,
    },
    {
      step: '02',
      title: 'Submit a Written Request',
      desc: 'Write to the published grievance contact (email or post) stating clearly which right you want to exercise. Attach proof of identity if required, and keep a copy of everything you send.',
      icon: FileCheck,
    },
    {
      step: '03',
      title: 'Wait for the Response',
      desc: 'The Data Fiduciary must respond within the period prescribed in the DPDP Rules, 2025. Keep records of all communications and the date of each.',
      icon: Clock,
    },
    {
      step: '04',
      title: 'Escalate to the Board',
      desc: 'Once you have used the Data Fiduciary\'s grievance mechanism and the matter is not resolved, you can file a complaint with the Data Protection Board of India.',
      icon: Gavel,
    },
    {
      step: '05',
      title: 'Appeal if Needed',
      desc: 'If you are aggrieved by an order of the Board, you can appeal to the Telecom Disputes Settlement and Appellate Tribunal (TDSAT) within 60 days of receiving the order.',
      icon: Scale,
    },
  ];

  // ===== LIMITATIONS =====
  const limitations = [
    {
      title: 'Legal Retention Obligations',
      desc: 'The right to erasure does not apply where retention is required by another law, for example tax records, RBI KYC data or court orders.',
    },
    {
      title: 'Exemptions under Section 17',
      desc: 'The Act exempts certain processing, for example by specified State instrumentalities, for prevention or investigation of offences, or for enforcing legal rights and claims.',
    },
    {
      title: 'Research and Statistics',
      desc: 'Processing for research, archiving or statistical purposes can be exempt from certain provisions where it is not used to take decisions specific to a Data Principal and prescribed standards are followed.',
    },
    {
      title: 'Legal Claims',
      desc: 'Data may be retained and processed where necessary to establish, exercise or defend a legal right or claim.',
    },
    {
      title: 'Duties of Data Principals (Section 15)',
      desc: 'Rights come with duties: comply with applicable laws, do not impersonate another person, do not suppress material information, do not file false or frivolous grievances, and furnish only verifiably authentic information. Breach of these duties can attract a penalty of up to ₹10,000.',
    },
  ];

  // ===== RELATED LINKS =====
  const relatedLinks = [
    { title: 'Obligations of Fiduciaries', href: '/obligations', desc: 'Learn what the law expects from businesses.' },
    { title: 'Data Protection Board', href: '/board', desc: 'Where you can escalate unresolved complaints.' },
    { title: 'Penalties', href: '/penalties', desc: 'What happens when obligations are violated.' },
    { title: 'Data Rights Insights', href: '/insight/data-subject-rights-guide', desc: 'Deep dive into how rights work in practice.' },
    { title: 'DPDPA Complete Guide', href: '/resources/guides/dpdpa-2023-complete-guide', desc: 'End-to-end guide to the Act.' },
    { title: 'Lawful Processing', href: '/lawful-processing', desc: 'When data can be processed in the first place.' },
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
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
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
            Data Principal Rights — DPDP Act 2023
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Rights of Data Principals under the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
              DPDP Act 2023
            </span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
            The Digital Personal Data Protection Act, 2023 gives individuals
            real control over their digital personal data. As a{' '}
            <strong className="text-white">Data Principal</strong>, you are not
            just a passive user; you have enforceable rights against any
            organisation (Data Fiduciary) processing your information. This
            guide explains each right, how to exercise it, its limits, and what
            to do if your rights are not respected.
          </p>

          {/* Meta Row */}
          <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <UserCheck className="w-4 h-4" />
              By Shilpi Kulshrestha
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Last updated: {LAST_UPDATED}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              9 min read
            </span>
          </div>
        </div>

        {/* ===== RIGHTS GRID ===== */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">
            Your Rights at a Glance
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
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0 border border-blue-500/30">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {right.title}
                      </h3>
                      <span className="text-xs text-cyan-400 font-mono">
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
          <p className="text-sm text-gray-400 mt-4">
            Chapter III of the Act provides four rights (Sections 11 to 14).
            The right to withdraw consent comes from Section 6(4). The Act does
            not include a right to data portability.
          </p>
        </section>

        {/* ===== SECTION 1: DETAILED BREAKDOWN ===== */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Detailed Breakdown of Each Right
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            These rights are enforceable through the Data Protection Board.
            Here is what each right means in practice, including the specific
            actions you can take.
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
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0 border border-blue-500/30">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl font-bold text-white">
                          {right.title}
                        </h3>
                        <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
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
                          <span className="text-blue-400 mt-0.5">•</span>
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
            Knowing your rights is one thing; exercising them is another. Here
            is the step-by-step process to enforce your rights against a Data
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
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
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
            The rights are powerful, but they are not absolute. The Act
            recognises several situations where a Data Fiduciary can
            legitimately refuse or limit a request. Understanding these
            limitations helps you set realistic expectations:
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
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-blue-400" />
                  Are you a business owner?
                </h2>
                <p className="text-gray-300 leading-relaxed text-sm mb-4">
                  As a Data Fiduciary, you need systems that respect these
                  rights. Failing to honour them can attract a penalty of up
                  to <strong className="text-white">₹50 crore</strong> under
                  the Schedule to the Act, and failing to take reasonable
                  security safeguards can attract up to{' '}
                  <strong className="text-white">₹250 crore</strong>.
                </p>
                <ul className="space-y-1.5 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>
                      Set up a grievance redressal mechanism and publish the
                      contact of a named person
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>
                      Build workflows for access, correction and erasure
                      requests
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>
                      Honour nominations and keep records of every request and
                      response
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
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold hover:scale-105 transition-all text-center text-sm"
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
            Here are some common situations where Data Principals exercise
            their rights:
          </p>

          <div className="space-y-4">
            {[
              {
                title: 'You want to know what a social media platform knows about you',
                right: 'Right to Access Information',
                action:
                  "Submit an access request to the platform's grievance contact. You can ask for a summary of your data, the processing activities, and the Data Fiduciaries and Data Processors with whom it is shared.",
              },
              {
                title: 'You find inaccurate information in your bank records',
                right: 'Right to Correction',
                action:
                  'Notify the bank in writing, provide proof of the correct information, and request correction. If it is not corrected, use the bank\'s grievance process and then escalate to the Data Protection Board.',
              },
              {
                title: 'You want an e-commerce app to delete your account and data',
                right: 'Right to Erasure',
                action:
                  'Request account deletion and data erasure. The company must erase your data unless retention is necessary for the specified purpose or required by law (for example, tax records).',
              },
              {
                title: 'You want to stop marketing calls from a company',
                right: 'Right to Withdraw Consent',
                action:
                  'Withdraw your consent using the same kind of channel you used to give it (unsubscribe link, account settings). The company must stop the processing within a reasonable time.',
              },
              {
                title: 'You are unhappy with how a company handled your complaint',
                right: 'Right to Grievance Redressal',
                action:
                  'Once you have used the company\'s grievance mechanism, escalate to the Data Protection Board, which can inquire into the matter and impose penalties.',
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
                    <span className="text-xs text-cyan-400 font-mono">
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
                Founder, Businezexcellence | Corporate Law & Company Secretary
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
            {RIGHTS_FAQS.map((faq, i) => (
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
            <BookOpen className="w-6 h-6 text-cyan-400" />
            Related Topics on Data Protection
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
        <section className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-2xl p-8 text-center">
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
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold hover:scale-105 transition-all"
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
          informational purposes only. It is not legal advice. For advice on
          your specific situation, consult a qualified legal professional.
        </p>
      </div>
    </main>
  );
}
