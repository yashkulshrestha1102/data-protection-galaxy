// app/resources/guides/page.tsx — Privacy Guides library (server component).

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, CheckCircle2, ChevronRight, Clock, Link2 } from "lucide-react";
import { guidesData } from "@/data/guides";
import { getGuideIcon } from "@/data/guide-icons";
import { SITE_URL } from "@/lib/constants";
import { ORG_REF, WEBSITE_ID } from "@/lib/seo";
import "./guide-article.css";

const DESCRIPTION =
  "Free in-depth guides to India's DPDP Act 2023, the GDPR, CCPA/CPRA, cross-border transfers, DPIAs and the DPO role — with official sources.";

export const metadata: Metadata = {
  title: "Privacy Guides — DPDP Act, GDPR, CCPA & Global Data Protection",
  description: DESCRIPTION,
  alternates: { canonical: "/resources/guides" },
  openGraph: {
    type: "website",
    title: "Privacy Guides — DPDP Act, GDPR, CCPA & Global Data Protection",
    description: DESCRIPTION,
    url: "/resources/guides",
    siteName: "Legal Galaxy",
  },
};

const PATHS = [
  {
    title: "New to India's DPDP Act",
    text: "Start with the complete guide, then see how it compares with the GDPR.",
    slugs: ["dpdpa-2023-complete-guide", "gdpr-vs-dpdpa"],
  },
  {
    title: "Serving EU or US customers",
    text: "Understand when foreign laws reach Indian companies and how data moves.",
    slugs: ["gdpr-essentials-indian-companies", "ccpa-cpra-overview", "cross-border-data-transfer"],
  },
  {
    title: "Building the programme",
    text: "Run impact assessments and set up the Data Protection Officer role.",
    slugs: ["dpia-guide", "dpo-handbook"],
  },
];

export default function GuidesPage() {
  const [featured, ...rest] = guidesData;
  const FeaturedIcon = getGuideIcon(featured.categoryIcon);
  const bySlug = new Map(guidesData.map((g) => [g.slug, g]));
  const totalSources = guidesData.reduce((n, g) => n + (g.sources?.length ?? 0), 0);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/resources/guides#page`,
    name: "Privacy Guides",
    description: DESCRIPTION,
    url: `${SITE_URL}/resources/guides`,
    inLanguage: "en-IN",
    isPartOf: { "@id": WEBSITE_ID },
    publisher: ORG_REF,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: guidesData.length,
      itemListElement: guidesData.map((g, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE_URL}/resources/guides/${g.slug}`,
        name: g.title,
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Resources", item: `${SITE_URL}/resources` },
      { "@type": "ListItem", position: 3, name: "Guides", item: `${SITE_URL}/resources/guides` },
    ],
  };

  return (
    <main className="lg-guide relative min-h-screen overflow-hidden bg-black text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[620px]"
        style={{
          background:
            "radial-gradient(55% 70% at 15% 0%, rgba(14,145,135,0.18), transparent 70%), radial-gradient(45% 60% at 95% 5%, rgba(70,208,155,0.1), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 pb-24 pt-24 sm:px-6 lg:px-8 lg:pt-28">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-gray-500">
            <li><Link href="/" className="transition hover:text-white">Home</Link></li>
            <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5 text-gray-700" /></li>
            <li><Link href="/resources" className="transition hover:text-white">Resources</Link></li>
            <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5 text-gray-700" /></li>
            <li className="text-gray-300" aria-current="page">Guides</li>
          </ol>
        </nav>

        {/* ===== HEADER ===== */}
        <header className="max-w-[820px]">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300">
            <BookOpen className="h-3.5 w-3.5" /> Privacy guides
          </p>
          <h1 className="lg-serif mt-6 text-[2.5rem] font-semibold leading-[1.08] tracking-[-0.02em] sm:text-[3.4rem]">
            Practical guides to data protection law
          </h1>
          <p className="mt-6 text-[17px] leading-8 text-gray-400 sm:text-lg">
            Clear, source-backed explanations of India&apos;s Digital Personal Data Protection Act 2023 and DPDP Rules 2025,
            the EU GDPR, California&apos;s CCPA/CPRA, cross-border transfers, impact assessments and the DPO role — written
            for founders, compliance teams and legal professionals.
          </p>
          <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-4 border-y border-white/[0.07] py-5">
            {[
              { k: "In-depth guides", v: guidesData.length, Icon: BookOpen },
              { k: "Official sources cited", v: totalSources, Icon: Link2 },
              { k: "Checklists & templates", v: "Included", Icon: CheckCircle2 },
            ].map(({ k, v, Icon }) => (
              <div key={k} className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-300">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <dt className="text-[12px] text-gray-500">{k}</dt>
                  <dd className="text-[15px] font-semibold text-white">{v}</dd>
                </div>
              </div>
            ))}
          </dl>
        </header>

        {/* ===== FEATURED ===== */}
        <section aria-labelledby="featured-guide" className="mt-14">
          <h2 id="featured-guide" className="text-[12px] font-bold uppercase tracking-[0.16em] text-gray-500">
            Start here
          </h2>
          <Link
            href={`/resources/guides/${featured.slug}`}
            className="group mt-4 grid gap-8 overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-blue-600/[0.12] via-white/[0.02] to-cyan-500/[0.06] p-7 transition hover:border-cyan-400/30 sm:p-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]"
          >
            <div>
              <span className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${featured.categoryColor} px-3 py-1 text-xs font-semibold text-white`}>
                <FeaturedIcon className="h-3.5 w-3.5" /> {featured.category}
              </span>
              <h3 className="lg-serif mt-5 text-3xl font-semibold leading-tight text-white sm:text-[2.4rem]">
                {featured.title}
              </h3>
              <p className="mt-4 line-clamp-4 text-[15.5px] leading-7 text-gray-400">{featured.excerpt}</p>
              <div className="mt-6 flex flex-wrap items-center gap-5 text-[13px] text-gray-500">
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {featured.readTime}</span>
                <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> Updated {featured.lastUpdated}</span>
              </div>
              <span className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition group-hover:-translate-y-0.5">
                Read the complete guide <ArrowRight className="h-4 w-4" />
              </span>
            </div>
            <div className="rounded-2xl border border-white/[0.07] bg-black/30 p-6">
              <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-cyan-300">What you will learn</p>
              <ul className="mt-4 space-y-3">
                {featured.keyTakeaways.slice(0, 5).map((t) => (
                  <li key={t} className="flex gap-3 text-[14px] leading-6 text-gray-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        </section>

        {/* ===== ALL GUIDES ===== */}
        <section aria-labelledby="all-guides" className="mt-16">
          <div className="flex items-end justify-between gap-4">
            <h2 id="all-guides" className="lg-serif text-[1.9rem] font-semibold text-white">All guides</h2>
            <p className="text-[13px] text-gray-500">{guidesData.length} guides · updated regularly</p>
          </div>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((g) => {
              const GIcon = getGuideIcon(g.categoryIcon);
              return (
                <li key={g.slug}>
                  <Link
                    href={`/resources/guides/${g.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.045] hover:shadow-2xl hover:shadow-cyan-500/[0.07]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                        <span className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${g.categoryColor}`}>
                          <GIcon className="h-4 w-4 text-white" />
                        </span>
                        {g.category}
                      </span>
                      <span className="flex items-center gap-1 text-[12px] text-gray-500">
                        <Clock className="h-3.5 w-3.5" /> {g.readTime}
                      </span>
                    </div>
                    <h3 className="lg-serif mt-5 text-[1.4rem] font-semibold leading-snug text-white">{g.title}</h3>
                    <p className="mt-3 line-clamp-4 text-[14.5px] leading-6 text-gray-400">{g.excerpt}</p>
                    <div className="mt-auto flex items-center justify-between border-t border-white/[0.07] pt-4 text-[12.5px]">
                      <span className="text-gray-500">
                        {g.sources?.length ? `${g.sources.length} sources · ` : ""}Updated {g.lastUpdated}
                      </span>
                      <span className="flex items-center gap-1 font-semibold text-blue-300 transition group-hover:text-cyan-300">
                        Read <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        {/* ===== READING PATHS ===== */}
        <section aria-labelledby="reading-paths" className="mt-20">
          <h2 id="reading-paths" className="lg-serif text-[1.9rem] font-semibold text-white">Where to start</h2>
          <p className="mt-2 max-w-2xl text-[15px] leading-7 text-gray-400">
            Pick the path that matches your situation. Each guide links to the official law and to our tools.
          </p>
          <div className="mt-7 grid gap-5 lg:grid-cols-3">
            {PATHS.map((p) => (
              <div key={p.title} className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6">
                <h3 className="text-[16px] font-semibold text-white">{p.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-6 text-gray-500">{p.text}</p>
                <ol className="mt-5 space-y-2">
                  {p.slugs.map((s, i) => {
                    const g = bySlug.get(s);
                    if (!g) return null;
                    return (
                      <li key={s}>
                        <Link
                          href={`/resources/guides/${s}`}
                          className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-black/20 px-3.5 py-3 text-[14px] text-gray-300 transition hover:border-white/[0.14] hover:text-white"
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-[11px] font-bold text-blue-300">
                            {i + 1}
                          </span>
                          <span className="flex-1">{g.title}</span>
                          <ArrowRight className="h-4 w-4 text-gray-600 transition group-hover:translate-x-0.5 group-hover:text-cyan-300" />
                        </Link>
                      </li>
                    );
                  })}
                </ol>
              </div>
            ))}
          </div>
        </section>

        {/* ===== MORE RESOURCES ===== */}
        <section aria-labelledby="more-resources" className="mt-20 grid gap-6 rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 id="more-resources" className="lg-serif text-2xl font-semibold text-white sm:text-[1.8rem]">
              Go further with free tools
            </h2>
            <p className="mt-2 max-w-xl text-[15px] leading-7 text-gray-400">
              Check your readiness, look up terms in the glossary, or compare laws side by side.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/scorecard", label: "Compliance scorecard" },
              { href: "/glossary", label: "Glossary" },
              { href: "/compare", label: "Compare laws" },
              { href: "/resources/faqs", label: "FAQs" },
            ].map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                className={
                  i === 0
                    ? "inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5"
                    : "inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-gray-200 transition hover:border-white/20 hover:bg-white/[0.08]"
                }
              >
                {l.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
