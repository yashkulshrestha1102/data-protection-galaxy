// app/glossary/page.tsx
// A–Z glossary of privacy, DPDP Act and AI governance terms, built from the
// definitions in the DPDPA Master Course. Each term links to the lesson that explains it.
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import { getGlossary } from "@/lib/glossary";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/constants";
import { ORG_ID, DPDP_ACT_SCHEMA } from "@/lib/seo";

const DESCRIPTION =
  "A–Z glossary of DPDP Act 2023, data privacy and AI governance terms: Data Fiduciary, Data Principal, Consent Manager, DPIA and more, in plain English.";

export const metadata: Metadata = {
  title: "DPDP Act & Privacy Glossary: Key Terms Explained",
  description: DESCRIPTION,
  alternates: { canonical: "/glossary" },
  openGraph: {
    type: "website",
    title: "DPDP Act & Privacy Glossary | Legal Galaxy",
    description: DESCRIPTION,
    url: "/glossary",
    siteName: "Legal Galaxy",
    locale: "en_IN",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "DPDP Act & Privacy Glossary" }],
  },
  twitter: { card: "summary_large_image", title: "DPDP Act & Privacy Glossary", description: DESCRIPTION, images: ["/images/og-image.png"] },
};

export default function GlossaryPage() {
  const entries = getGlossary();
  const letters = [...new Set(entries.map((e) => e.letter))];
  const url = `${SITE_URL}/glossary`;

  const termSetSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${url}#terms`,
    name: "DPDP Act & Privacy Glossary",
    description: DESCRIPTION,
    url,
    inLanguage: "en-IN",
    about: DPDP_ACT_SCHEMA,
    publisher: { "@id": ORG_ID },
    hasDefinedTerm: entries.map((e) => ({
      "@type": "DefinedTerm",
      "@id": `${url}#${e.slug}`,
      name: e.term,
      description: e.definition,
      url: `${url}#${e.slug}`,
      inDefinedTermSet: `${url}#terms`,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Resources", item: `${SITE_URL}/resources` },
      { "@type": "ListItem", position: 3, name: "Glossary", item: url },
    ],
  };

  return (
    <main className="min-h-screen text-white px-4 pt-28 md:pt-32 pb-16 relative overflow-hidden">
      <JsonLd data={termSetSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/home1.webp')" }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <Link
          href="/resources"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Resources
        </Link>

        {/* ===== HERO ===== */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-xs font-medium text-cyan-300 mb-4">
            <BookOpen className="w-3 h-3" />
            Glossary — DPDP Act 2023 &amp; Privacy
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            DPDP Act &amp; Privacy <span className="text-cyan-400">Glossary</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
            {entries.length} key terms from India&apos;s Digital Personal Data Protection Act 2023, global privacy law and
            AI governance, explained in plain English. Each definition links to the course lesson that covers it in
            depth.
          </p>
        </div>

        {/* ===== A–Z JUMP NAV ===== */}
        <nav aria-label="Glossary letters" className="mb-10 flex flex-wrap gap-2">
          {letters.map((l) => (
            <a
              key={l}
              href={`#letter-${l === "#" ? "other" : l}`}
              className="w-9 h-9 inline-flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-sm font-semibold text-gray-200 hover:bg-white/10 hover:text-white transition-colors"
            >
              {l}
            </a>
          ))}
        </nav>

        {/* ===== TERMS ===== */}
        {letters.map((l) => (
          <section key={l} id={`letter-${l === "#" ? "other" : l}`} className="mb-12 scroll-mt-32">
            <h2 className="text-3xl font-bold text-white mb-6 border-b border-white/10 pb-2">{l}</h2>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
              {entries
                .filter((e) => e.letter === l)
                .map((e) => (
                  <div
                    key={e.slug}
                    id={e.slug}
                    className="scroll-mt-32 py-4 border-b border-white/10"
                  >
                    <dt className="text-base font-semibold text-white">{e.term}</dt>
                    <dd className="mt-1.5 text-sm text-gray-300 leading-relaxed">{e.definition}</dd>
                    <dd className="mt-2 text-xs">
                      <Link href={e.href} className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2">
                        Learn more: Module {e.moduleId} — {e.lessonTitle}
                      </Link>
                    </dd>
                  </div>
                ))}
            </dl>
          </section>
        ))}
      </div>
    </main>
  );
}
