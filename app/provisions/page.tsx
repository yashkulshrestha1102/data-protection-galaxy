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

import { PROVISIONS_FAQS } from '@/data/page-faqs';

const LAST_UPDATED = 'November 2026';

export default function ProvisionsPage() {
  // ===== CHAPTERS OVERVIEW =====
  const chapters = [
    {
      icon: BookOpen,
      title: 'Chapter I: Preliminary',
      sections: 'Sections 1-3',
      description:
        'Short title, extent, commencement, definitions and the application of the Act, including its extra-territorial reach.',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Users,
      title: 'Chapter II: Obligations of Data Fiduciary',
      sections: 'Sections 4-10',
      description:
        'Grounds for processing, notice, consent, legitimate uses, general obligations, children\'s data and the extra duties of Significant Data Fiduciaries.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Eye,
      title: 'Chapter III: Rights & Duties of Data Principal',
      sections: 'Sections 11-15',
      description:
        'The rights to information, correction and erasure, grievance redressal and nomination, plus the duties of Data Principals.',
      color: 'from-cyan-500 to-teal-500',
    },
    {
      icon: Globe,
      title: 'Chapter IV: Special Provisions',
      sections: 'Sections 16-17',
      description:
        'Transfer of personal data outside India (Section 16) and the exemptions from the Act (Section 17).',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      icon: Building,
      title: 'Chapter V: Data Protection Board of India',
      sections: 'Sections 18-26',
      description:
        'Establishes the Board and covers its composition, qualifications, terms of service, removal of members and staff.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Scale,
      title: 'Chapter VI: Powers, Functions & Procedure of the Board',
      sections: 'Sections 27-28',
      description:
        'The Board\'s powers and functions and the procedure it follows when inquiring into complaints and breaches.',
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: Gavel,
      title: 'Chapter VII: Appeal & Alternate Dispute Resolution',
      sections: 'Sections 29-32',
      description:
        'Appeals to the TDSAT, orders and appeals to the Supreme Court, mediation, and voluntary undertakings.',
      color: 'from-blue-500 to-teal-500',
    },
    {
      icon: AlertTriangle,
      title: 'Chapter VIII: Penalties & Adjudication',
      sections: 'Sections 33-34',
      description:
        'Monetary penalties after an inquiry, the factors the Board considers, and the Schedule of amounts (from ₹10,000 up to ₹250 crore).',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: FileText,
      title: 'Chapter IX: Miscellaneous',
      sections: 'Sections 35-44',
      description:
        'Protection of action taken in good faith, power to call for information, rule-making, removal of difficulties and amendments to other laws.',
      color: 'from-blue-500 to-rose-500',
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
    { chapter: 'I', sections: '1-3', title: 'Preliminary', desc: 'Short title, extent, commencement, definitions, application' },
    { chapter: 'II', sections: '4', title: 'Grounds for Processing', desc: 'Processing only for a lawful purpose, with consent or for a legitimate use' },
    { chapter: 'II', sections: '5', title: 'Notice', desc: 'Notice requirements that accompany a request for consent' },
    { chapter: 'II', sections: '6', title: 'Consent', desc: 'Free, specific, informed, unconditional, unambiguous; withdrawal; Consent Managers' },
    { chapter: 'II', sections: '7', title: 'Certain Legitimate Uses', desc: 'Closed list of situations where processing needs no consent' },
    { chapter: 'II', sections: '8', title: 'General Obligations', desc: 'Accuracy, security safeguards, breach intimation, erasure, grievance redressal' },
    { chapter: 'II', sections: '9', title: "Children's Data", desc: 'Verifiable parental consent; no tracking, behavioural monitoring or targeted advertising' },
    { chapter: 'II', sections: '10', title: 'Significant Data Fiduciary', desc: 'India-based DPO, independent data auditor, periodic DPIA and audit' },
    { chapter: 'III', sections: '11-14', title: 'Rights of Data Principals', desc: 'Information, correction and erasure, grievance redressal, nomination' },
    { chapter: 'III', sections: '15', title: 'Duties of Data Principals', desc: 'No false complaints or false information; penalty up to ₹10,000' },
    { chapter: 'IV', sections: '16', title: 'Cross-Border Transfer', desc: 'Allowed by default unless the Government restricts a country by notification' },
    { chapter: 'IV', sections: '17', title: 'Exemptions', desc: 'State instrumentalities, research and statistics, startups, legal rights, and more' },
    { chapter: 'V', sections: '18-26', title: 'Data Protection Board', desc: 'Establishment, composition, qualifications, terms, removal, staff' },
    { chapter: 'VI', sections: '27-28', title: 'Powers & Procedure of the Board', desc: 'Inquiry, directions, hearing, digital office' },
    { chapter: 'VII', sections: '29-32', title: 'Appeal & ADR', desc: 'Appeal to TDSAT within 60 days, mediation, voluntary undertaking' },
    { chapter: 'VIII', sections: '33-34', title: 'Penalties & Adjudication', desc: 'Monetary penalty after inquiry; Schedule of penalties' },
    { chapter: 'IX', sections: '35-44', title: 'Miscellaneous', desc: 'Good-faith protection, rule-making, removal of difficulties, amendments to other laws' },
  ];

  // ===== TIMELINE =====
  const timeline = [
    {
      date: 'August 2023',
      title: 'DPDP Act 2023 Receives Presidential Assent',
      description:
        'The Digital Personal Data Protection Act, 2023 received presidential assent on 11 August 2023, after the Justice B.N. Srikrishna Committee report (2018) and several earlier draft bills.',
    },
    {
      date: 'January 2025',
      title: 'Draft Rules Released for Public Consultation',
      description:
        'The Ministry of Electronics and Information Technology (MeitY) published draft DPDP Rules for public consultation and received feedback on consent managers, breach notification and Significant Data Fiduciary criteria.',
    },
    {
      date: 'November 2025',
      title: 'DPDP Rules, 2025 Notified',
      description:
        'The DPDP Rules, 2025 were notified and the Act began commencing in phases. The provisions setting up the Data Protection Board came into force first.',
    },
    {
      date: 'November 2026',
      title: 'Consent Manager Provisions Commence',
      description:
        'The provisions on registration and obligations of Consent Managers commence one year after the Rules were notified.',
    },
    {
      date: 'May 2027',
      title: 'Main Operational Obligations Commence',
      description:
        'The remaining provisions, including notice, consent, security safeguards, breach intimation and the rights of Data Principals, apply eighteen months after the Rules were notified. Check MeitY for the exact dates.',
    },
  ];

  // ===== FAQS =====
  const faqs = PROVISIONS_FAQS;

  // ===== RELATED LINKS =====
  const relatedLinks = [
    {
      title: 'Rights of Data Principals',
      href: '/rights',
      desc: 'Chapter III rights explained in detail.',
    },
    {
      title: 'Obligations of Data Fiduciaries',
      href: '/obligations',
      desc: 'Chapter II obligations for businesses.',
    },
    {
      title: 'Data Protection Board',
      href: '/board',
      desc: 'Chapter V — the enforcement authority.',
    },
    {
      title: 'Penalties & Offences',
      href: '/penalties',
      desc: 'Chapter VIII and the Schedule explained.',
    },
    {
      title: 'Cross-Border Transfer',
      href: '/cross-border',
      desc: 'Chapter IV, Section 16 in detail.',
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
            <BookMarked className="w-3 h-3" />
            Act Overview — DPDP Act 2023
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Key Provisions of the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
              DPDP Act 2023
            </span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
            The Digital Personal Data Protection Act, 2023 is a{' '}
            <strong className="text-white">
              44-section, 9-chapter legislation
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
              {LAST_UPDATED}
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
            The 9 Chapters at a Glance
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
              The structure is logical: Chapter I sets the foundation (definitions), Chapter II sets the obligations of Data Fiduciaries, Chapter III the rights and duties of Data Principals, Chapter IV cross-border transfers and exemptions, Chapters V and VI the Data Protection Board, Chapter VII appeals and mediation, Chapter VIII penalties, and Chapter IX miscellaneous matters. This structure reflects the Act's
              philosophy — rights and obligations are at the centre, with
              enforcement and penalties as the backstop.
            </p>
            <p>
              For businesses, Chapter II (Sections 4-10) is the most operationally important — it defines the day-to-day obligations around notice, consent,
              security, breach notification, and grievance redressal. For Data
              Principals, Chapter III's rights provisions (Sections 11-14) are the
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
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0 border border-blue-500/30">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="text-base font-semibold text-white">
                          {def.term}
                        </h3>
                        <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded border border-blue-500/20">
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
                    <td className="px-4 py-3 text-xs font-mono text-cyan-400 whitespace-nowrap">
                      {row.chapter}
                    </td>
                    <td className="px-4 py-3 text-xs font-mono text-blue-400 whitespace-nowrap">
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
                Chapters II and III — Obligations and Rights
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Chapter II (Sections 4-10) sets the obligations of Data Fiduciaries and Chapter III (Sections 11-15) the rights and duties of Data Principals. Together they cover:
              </p>
              <ul className="space-y-2">
                {[
                  'Section 4: Grounds for processing (consent or legitimate use)',
                  'Section 5: Notice that accompanies a request for consent',
                  'Section 6: Consent — free, specific, informed, unconditional, unambiguous; withdrawal; Consent Managers',
                  'Section 7: Certain legitimate uses (a closed list, such as State benefits, legal obligations, medical emergencies, employment)',
                  'Section 8: General obligations of Data Fiduciaries (accuracy, security, breach intimation, erasure, grievance redressal)',
                  'Section 9: Children\'s data — verifiable parental consent, no tracking or targeted advertising',
                  'Section 10: Significant Data Fiduciary obligations (DPO, independent auditor, DPIA)',
                  'Sections 11-14: Rights of Data Principals (information, correction and erasure, grievance redressal, nomination)',
                  'Section 15: Duties of Data Principals',
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
                Chapters V and VI — The Enforcement Authority
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Chapter V (Sections 18-26) establishes the Data Protection Board of India and Chapter VI (Sections 27-28) sets its powers and procedure. They cover:
              </p>
              <ul className="space-y-2">
                {[
                  'Section 18: Establishment of the Board',
                  'Sections 19-26: Composition, qualifications, terms of service, removal of members, and staff of the Board',
                  'Section 27: Powers and functions of the Board (inquiries, directions, penalties)',
                  'Section 28: Procedure the Board follows (digital office, hearing, reasoned orders)',
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
                Chapters VII and VIII — Appeals and Penalties
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Chapter VII (Sections 29-32) deals with appeals and mediation and Chapter VIII (Sections 33-34) with penalties. They cover:
              </p>
              <ul className="space-y-2">
                {[
                  'Section 29: Appeal to the TDSAT within 60 days of the Board\'s order',
                  'Section 31: Mediation (alternate dispute resolution)',
                  'Section 32: Voluntary undertaking accepted by the Board',
                  'Section 33: Monetary penalty after an inquiry, and the factors considered',
                  'Section 34: Penalties are credited to the Consolidated Fund of India',
                  'Schedule: The penalty amounts (₹10,000 up to ₹250 crore)',
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-bold text-blue-400">
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
              up to ₹250 crore. Compliance requires a thorough understanding of
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
            <BookOpen className="w-6 h-6 text-blue-400" />
            Related Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all"
              >
                <h4 className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors flex items-center justify-between gap-2">
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
            Want to understand the Act end-to-end?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Take our free DPDPA assessment to see where your organisation stands,
            or dive into our comprehensive guide to the Act.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/scorecard"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold hover:scale-105 transition-all"
            >
              Take the Free Test →
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
