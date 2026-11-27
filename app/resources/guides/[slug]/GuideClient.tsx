"use client";

// Guide detail page — editorial long-form layout in the site's dark theme.
// Article typography comes from ../guide-article.css (scoped to .lg-guide).

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  Award,
  BarChart3,
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Download,
  ExternalLink,
  FileText,
  HelpCircle,
  Link2,
  List,
  Share2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { getGuideIcon } from "@/data/guide-icons";
import type { Guide } from "@/data/guides";
import "../guide-article.css";

interface GuideClientProps {
  guide: Guide;
  relatedGuides: Guide[];
}

const TOOLS = [
  { href: "/scorecard", title: "DPDPA Compliance Scorecard", text: "Check your readiness in 10 minutes.", Icon: BarChart3 },
  { href: "/generator", title: "Document Generator", text: "Draft notices, consent forms and policies.", Icon: FileText },
  { href: "/certificate-course", title: "DPDPA Certificate Course", text: "Learn the Act lesson by lesson.", Icon: Award },
];

export default function GuideClient({ guide, relatedGuides }: GuideClientProps) {
  const [activeSection, setActiveSection] = useState("");
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [shareMessage, setShareMessage] = useState("");

  const Icon = getGuideIcon(guide.categoryIcon);
  const sources = guide.sources ?? [];
  const faqs = guide.faqs ?? [];
  const relatedLinks = guide.relatedLinks ?? [];
  const showFaqBlock = faqs.length > 0 && !guide.faqsInContent;
  const showSourcesBlock = sources.length > 0 && !guide.sourcesInContent;

  // Table of contents = the guide's own sections + the blocks rendered below it.
  const toc = useMemo(() => {
    const items = [...guide.tableOfContents];
    if (showFaqBlock) items.push({ id: "faqs", title: "Frequently asked questions" });
    if (showSourcesBlock) items.push({ id: "sources", title: "Sources & references" });
    return items;
  }, [guide.tableOfContents, showFaqBlock, showSourcesBlock]);

  // Reading progress, back-to-top and active TOC item.
  useEffect(() => {
    const ids = toc.map((t) => t.id);
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(100, Math.max(0, (y / max) * 100)) : 0);
        setShowTop(y > 900);
        let current = "";
        for (const id of ids) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= 140) current = id;
        }
        setActiveSection(current);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, [toc]);

  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: guide.title, text: guide.excerpt, url: window.location.href });
        return;
      }
      await navigator.clipboard?.writeText(window.location.href);
      setShareMessage("Link copied");
      window.setTimeout(() => setShareMessage(""), 2500);
    } catch {
      /* share cancelled */
    }
  };

  const handlePdf = () => {
    if (guide.pdfUrl) {
      window.open(guide.pdfUrl, "_blank", "noopener,noreferrer");
      return;
    }
    window.print();
  };

  const tocList = (onPick?: () => void) => (
    <ol className="space-y-0.5">
      {toc.map((item, i) => {
        const active = activeSection === item.id;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                goTo(item.id);
                onPick?.();
              }}
              aria-current={active ? "location" : undefined}
              className={`group flex items-start gap-3 rounded-lg border-l-2 py-2 pl-3 pr-2 text-[13.5px] leading-5 transition ${
                active
                  ? "border-cyan-400 bg-cyan-400/[0.07] text-white"
                  : "border-transparent text-gray-500 hover:border-white/20 hover:text-gray-200"
              }`}
            >
              <span
                className={`mt-px w-5 shrink-0 text-[11px] font-semibold tabular-nums ${
                  active ? "text-cyan-300" : "text-gray-700 group-hover:text-gray-500"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{item.title}</span>
            </a>
          </li>
        );
      })}
    </ol>
  );

  return (
    <main className="lg-guide relative min-h-screen text-white">

      {/* reading progress */}
      <div className="fixed inset-x-0 top-0 z-50 h-[3px] bg-white/[0.04] lg-no-print" aria-hidden="true">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 pb-24 pt-24 sm:px-6 lg:px-8 lg:pt-28">
        {/* breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 lg-no-print">
          <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-gray-500">
            <li>
              <Link href="/" className="transition hover:text-white">Home</Link>
            </li>
            <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5 text-gray-700" /></li>
            <li>
              <Link href="/resources" className="transition hover:text-white">Resources</Link>
            </li>
            <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5 text-gray-700" /></li>
            <li>
              <Link href="/resources/guides" className="transition hover:text-white">Guides</Link>
            </li>
            <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5 text-gray-700" /></li>
            <li className="max-w-[220px] truncate text-gray-300 sm:max-w-none" aria-current="page">
              {guide.title}
            </li>
          </ol>
        </nav>

        {/* ===== HERO ===== */}
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-[860px]"
        >
          <span
            className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${guide.categoryColor} px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white`}
          >
            <Icon className="h-3.5 w-3.5" />
            {guide.category}
          </span>

          <h1 className="lg-serif mt-6 text-[2.35rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white sm:text-5xl lg:text-[3.4rem]">
            {guide.title}
          </h1>

          <p className="mt-6 text-[17px] leading-8 text-gray-400 sm:text-lg">{guide.excerpt}</p>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 border-y border-white/[0.07] py-4 text-[13px] text-gray-400">
            <span className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-[11px] font-bold text-white">
                LG
              </span>
              <span>
                <span className="block font-medium text-gray-200">Legal Galaxy Privacy Team</span>
                <span className="block text-[12px] text-gray-500">Businezexcellence StartX LLP</span>
              </span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-gray-600" />
              Updated <time>{guide.lastUpdated}</time>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-gray-600" />
              {guide.readTime}
            </span>
            {sources.length > 0 && (
              <span className="flex items-center gap-1.5">
                <Link2 className="h-4 w-4 text-gray-600" />
                {sources.length} official sources
              </span>
            )}
            <span className="ml-auto flex gap-2 lg-no-print">
              <button
                type="button"
                onClick={handlePdf}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-[13px] font-medium text-gray-200 transition hover:border-white/20 hover:bg-white/[0.08]"
              >
                <Download className="h-4 w-4" />
                {guide.pdfUrl ? "PDF" : "Save PDF"}
              </button>
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-[13px] font-medium text-gray-200 transition hover:border-white/20 hover:bg-white/[0.08]"
              >
                <Share2 className="h-4 w-4" />
                {shareMessage || "Share"}
              </button>
            </span>
          </div>
        </motion.header>

        {/* ===== BODY GRID ===== */}
        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_280px] xl:gap-16">
          <article className="min-w-0 max-w-[780px]">
            {/* key takeaways — the quick answer */}
            <section
              aria-labelledby="key-takeaways"
              className="rounded-2xl border border-cyan-400/15 bg-gradient-to-br from-cyan-400/[0.06] via-white/[0.015] to-blue-500/[0.05] p-6 sm:p-7"
            >
              <div className="mb-4 flex items-center gap-2.5">
                <Sparkles className="h-4 w-4 text-cyan-300" />
                <h2 id="key-takeaways" className="text-[12px] font-bold uppercase tracking-[0.16em] text-cyan-300">
                  Key takeaways
                </h2>
              </div>
              <ul className="space-y-3">
                {guide.keyTakeaways.map((t, i) => (
                  <li key={i} className="flex gap-3 text-[15px] leading-7 text-gray-300">
                    <CheckCircle2 className="mt-1 h-[18px] w-[18px] shrink-0 text-emerald-400" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* mobile "on this page" */}
            <details className="group mt-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] lg:hidden lg-no-print">
              <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-sm font-semibold text-white [&::-webkit-details-marker]:hidden">
                <span className="flex items-center gap-2">
                  <List className="h-4 w-4 text-cyan-300" />
                  On this page
                  <span className="text-xs font-normal text-gray-500">({toc.length} sections)</span>
                </span>
                <ChevronDown className="h-4 w-4 text-gray-400 transition group-open:rotate-180" />
              </summary>
              <div className="border-t border-white/[0.06] px-3 py-3">{tocList()}</div>
            </details>

            {/* article body */}
            <div className="lg-article mt-10" dangerouslySetInnerHTML={{ __html: guide.content }} />

            {/* FAQs */}
            {showFaqBlock && (
              <section aria-labelledby="faqs" className="lg-faq mt-16">
                <h2
                  id="faqs"
                  className="lg-serif scroll-mt-28 border-t border-white/[0.08] pt-9 text-[1.65rem] font-semibold leading-tight text-white sm:text-[2rem]"
                >
                  Frequently asked questions
                </h2>
                <div className="mt-6 space-y-3">
                  {faqs.map((f, i) => (
                    <details key={i} open={i === 0}>
                      <summary className="flex items-start justify-between gap-4 px-5 py-4">
                        <h3 className="flex gap-3 text-[16px] font-semibold leading-6 text-gray-100">
                          <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                          {f.q}
                        </h3>
                        <ChevronDown className="lg-faq-chevron mt-0.5 h-5 w-5 shrink-0 text-gray-500 transition" />
                      </summary>
                      <p className="px-5 pb-5 pl-[3.25rem] text-[15.5px] leading-7 text-gray-400">{f.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* Sources */}
            {showSourcesBlock && (
              <section aria-labelledby="sources" className="mt-16">
                <h2
                  id="sources"
                  className="lg-serif scroll-mt-28 border-t border-white/[0.08] pt-9 text-[1.65rem] font-semibold leading-tight text-white sm:text-[2rem]"
                >
                  Sources &amp; references
                </h2>
                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Numbers in the text, like <span className="text-blue-300">[1]</span>, point to these primary sources. We
                  cite official legislation, regulators and government publications wherever possible.
                </p>
                <ol className="mt-6 space-y-2.5">
                  {sources.map((s, i) => (
                    <li
                      key={`${i}-${s.url}`}
                      id={`src-${i + 1}`}
                      className="flex scroll-mt-28 gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 transition target:border-blue-400/50 target:bg-blue-400/[0.06]"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-xs font-bold tabular-nums text-blue-300">
                        {i + 1}
                      </span>
                      <span className="min-w-0">
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-start gap-1.5 text-[15px] font-medium leading-6 text-gray-100 transition hover:text-cyan-300"
                        >
                          {s.title}
                          <ExternalLink className="mt-1 h-3.5 w-3.5 shrink-0 text-gray-500" />
                        </a>
                        <span className="mt-0.5 block text-[13px] text-gray-500">{s.publisher}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {/* disclaimer */}
            <p className="mt-10 rounded-xl border border-white/[0.06] bg-white/[0.015] px-5 py-4 text-[13px] leading-6 text-gray-500">
              <strong className="font-semibold text-gray-400">Editorial note:</strong> This guide is general information,
              reviewed against the official texts on {guide.lastUpdated}. It is not legal advice. Laws, rules and regulator
              guidance change, so check the latest official notifications before acting.
            </p>

            {/* keep reading */}
            {(relatedLinks.length > 0 || relatedGuides.length > 0) && (
              <section aria-labelledby="keep-reading" className="mt-16 lg-no-print">
                <h2 id="keep-reading" className="lg-serif text-2xl font-semibold text-white">
                  Keep reading
                </h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {relatedLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="group rounded-xl border border-white/[0.07] bg-white/[0.02] p-5 transition hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-white/[0.04]"
                    >
                      <span className="flex items-center justify-between gap-3 text-[15px] font-semibold text-gray-100 group-hover:text-white">
                        {l.title}
                        <ArrowRight className="h-4 w-4 shrink-0 text-gray-600 transition group-hover:translate-x-0.5 group-hover:text-cyan-300" />
                      </span>
                      <span className="mt-1.5 block text-[13.5px] leading-6 text-gray-500">{l.description}</span>
                    </Link>
                  ))}
                </div>

                {relatedGuides.length > 0 && (
                  <>
                    <h3 className="mt-10 text-[12px] font-bold uppercase tracking-[0.16em] text-gray-500">
                      More guides
                    </h3>
                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      {relatedGuides.map((g) => {
                        const GIcon = getGuideIcon(g.categoryIcon);
                        return (
                          <Link
                            key={g.slug}
                            href={`/resources/guides/${g.slug}`}
                            className="group flex flex-col rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 transition hover:border-white/[0.15] hover:bg-white/[0.04]"
                          >
                            <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                              <span className={`flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br ${g.categoryColor}`}>
                                <GIcon className="h-3 w-3 text-white" />
                              </span>
                              {g.category}
                            </span>
                            <span className="mt-3 text-[14.5px] font-semibold leading-6 text-gray-200 group-hover:text-white">
                              {g.title}
                            </span>
                            <span className="mt-auto pt-3 text-xs text-gray-600">{g.readTime}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </>
                )}
              </section>
            )}

            {/* CTA */}
            <section className="relative mt-14 overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/[0.14] via-white/[0.02] to-cyan-500/[0.08] p-7 sm:p-9 lg-no-print">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] text-blue-300">
                    <ShieldCheck className="h-4 w-4" /> Privacy compliance
                  </p>
                  <h2 className="lg-serif mt-3 text-2xl font-semibold text-white sm:text-[1.7rem]">
                    Need help putting this into practice?
                  </h2>
                  <p className="mt-2 max-w-md text-[15px] leading-7 text-gray-400">
                    Talk to our privacy team about policies, assessments, controls and compliance workflows.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-gray-100"
                >
                  Contact us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </section>
          </article>

          {/* ===== SIDEBAR ===== */}
          <aside className="hidden lg:block lg-no-print">
            <div className="sticky top-24 space-y-5">
              <nav aria-label="On this page" className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">
                <div className="mb-3 flex items-center justify-between px-1">
                  <p className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] text-gray-400">
                    <List className="h-3.5 w-3.5 text-cyan-300" /> On this page
                  </p>
                  <span className="text-[11px] tabular-nums text-gray-600">{Math.round(progress)}%</span>
                </div>
                <div className="max-h-[52vh] overflow-y-auto pr-1">{tocList()}</div>
              </nav>

              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">
                <p className="mb-3 px-1 text-[12px] font-bold uppercase tracking-[0.16em] text-gray-400">Free tools</p>
                <div className="space-y-1">
                  {TOOLS.map(({ href, title, text, Icon: TIcon }) => (
                    <Link
                      key={href}
                      href={href}
                      className="group flex gap-3 rounded-xl p-2.5 transition hover:bg-white/[0.04]"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-300">
                        <TIcon className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-[13.5px] font-semibold text-gray-200 group-hover:text-white">{title}</span>
                        <span className="block text-[12px] leading-5 text-gray-500">{text}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/resources/guides"
                className="flex items-center gap-2 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-4 py-3.5 text-[13.5px] font-medium text-gray-300 transition hover:bg-white/[0.04] hover:text-white"
              >
                <BookOpen className="h-4 w-4 text-gray-500" /> All privacy guides
                <ChevronRight className="ml-auto h-4 w-4 text-gray-600" />
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/80 text-gray-300 shadow-xl transition hover:border-white/25 hover:text-white lg-no-print"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}
    </main>
  );
}
