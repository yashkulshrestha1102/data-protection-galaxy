"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowUp,
  BookOpen,
  Calendar,
  CheckCircle,
  ChevronRight,
  Clock,
  Download,
  ExternalLink,
  FileText,
  List,
  Printer,
  Share2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { guidesData } from "@/data/guides";

export default function GuideDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const guide = guidesData.find((item) => item.slug === slug);

  const [stars, setStars] = useState<ReactNode[]>([]);
  const [activeSection, setActiveSection] = useState("");
  const [showTop, setShowTop] = useState(false);
  const [shareMessage, setShareMessage] = useState("");
  const [readingProgress, setReadingProgress] = useState(0);

  // =========================================================
  // BACKGROUND STARS
  // =========================================================

  useEffect(() => {
    const generatedStars: ReactNode[] = [];

    for (let i = 0; i < 50; i++) {
      generatedStars.push(
        <div
          key={i}
          className="absolute h-0.5 w-0.5 rounded-full bg-white"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.1,
          }}
        />,
      );
    }

    setStars(generatedStars);
  }, []);

  // =========================================================
  // SCROLL / ACTIVE TOC / READING PROGRESS
  // =========================================================

  useEffect(() => {
    if (!guide) return;

    const sectionIds = guide.tableOfContents.map((item) => item.id);

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        documentHeight > 0
          ? Math.min(
              100,
              Math.max(0, (scrollTop / documentHeight) * 100),
            )
          : 0;

      setReadingProgress(progress);
      setShowTop(scrollTop > 700);

      let currentSection = "";

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);

        if (!element) return;

        const rect = element.getBoundingClientRect();

        if (rect.top <= 180) {
          currentSection = id;
        }
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [guide]);

  // =========================================================
  // GUIDE NOT FOUND
  // =========================================================

  if (!guide) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-4 text-white">
        <div className="max-w-md text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.04]">
            <FileText className="h-9 w-9 text-gray-400" />
          </div>

          <h1 className="text-3xl font-bold">Guide not found</h1>

          <p className="mt-3 text-gray-400">
            The guide you&apos;re looking for doesn&apos;t exist or may have
            been moved.
          </p>

          <Link
            href="/resources/guides"
            className="mt-7 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-medium text-white transition hover:bg-white/[0.1]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Guides
          </Link>
        </div>
      </main>
    );
  }

  const Icon = guide.categoryIcon;

  // =========================================================
  // DOWNLOAD PDF
  // =========================================================

  const handleDownloadPDF = () => {
    if (guide.pdfUrl) {
      window.open(guide.pdfUrl, "_blank", "noopener,noreferrer");
      return;
    }

    window.print();
  };

  // =========================================================
  // SHARE
  // =========================================================

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: guide.title,
          text: guide.excerpt,
          url: window.location.href,
        });

        return;
      }

      if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);

        setShareMessage("Link copied!");

        window.setTimeout(() => {
          setShareMessage("");
        }, 2500);
      }
    } catch {
      // Native share cancelled by user.
    }
  };

  // =========================================================
  // SCROLL TO SECTION
  // =========================================================

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", `#${id}`);
  };

  // =========================================================
  // BACK TO TOP
  // =========================================================

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
          style={{
            backgroundImage: "url('/images/home1.jpeg')",
          }}
        />

        <div className="absolute inset-0 bg-black/90" />

        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[140px]" />

        <div className="absolute right-[-150px] top-[35%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="absolute bottom-[-200px] left-[30%] h-[500px] w-[500px] rounded-full bg-pink-600/5 blur-[150px]" />

        <div className="absolute inset-0 overflow-hidden">
          {stars}
        </div>
      </div>

      {/* =====================================================
          READING PROGRESS
      ====================================================== */}

      <div className="fixed left-0 right-0 top-0 z-50 h-[2px] bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-[width] duration-150"
          style={{
            width: `${readingProgress}%`,
          }}
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-24 sm:px-6 lg:px-8 lg:pt-28">
        {/* ===================================================
            BREADCRUMB
        ==================================================== */}

        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm">
          <Link
            href="/resources"
            className="text-gray-500 transition hover:text-white"
          >
            Resources
          </Link>

          <ChevronRight className="h-4 w-4 text-gray-700" />

          <Link
            href="/resources/guides"
            className="text-gray-500 transition hover:text-white"
          >
            Guides
          </Link>

          <ChevronRight className="h-4 w-4 text-gray-700" />

          <span className="max-w-[250px] truncate text-gray-300">
            {guide.title}
          </span>
        </div>

        {/* ===================================================
            PAGE GRID
        ==================================================== */}

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          {/* =================================================
              MAIN ARTICLE
          ================================================== */}

          <article className="min-w-0">
            {/* ===============================================
                HERO
            ================================================ */}

            <motion.header
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="mb-10"
            >
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span
                  className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${guide.categoryColor} px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {guide.category}
                </span>

                <span className="flex items-center gap-1.5 text-xs text-gray-500">
                  <Clock className="h-3.5 w-3.5" />
                  {guide.readTime}
                </span>

                <span className="hidden h-1 w-1 rounded-full bg-gray-700 sm:block" />

                <span className="flex items-center gap-1.5 text-xs text-gray-500">
                  <Calendar className="h-3.5 w-3.5" />
                  Updated {guide.lastUpdated}
                </span>
              </div>

              <h1 className="max-w-5xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                {guide.title}
              </h1>

              <p className="mt-6 max-w-4xl text-base leading-8 text-gray-400 sm:text-lg">
                {guide.excerpt}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleDownloadPDF}
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-gray-100"
                >
                  <Download className="h-4 w-4 transition group-hover:translate-y-0.5" />
                  {guide.pdfUrl ? "Download PDF" : "Save / Print PDF"}
                </button>

                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-gray-200 transition hover:border-white/20 hover:bg-white/[0.08]"
                >
                  <Printer className="h-4 w-4" />
                  Print
                </button>

                <button
                  type="button"
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-gray-200 transition hover:border-white/20 hover:bg-white/[0.08]"
                >
                  <Share2 className="h-4 w-4" />
                  {shareMessage || "Share"}
                </button>
              </div>
            </motion.header>

            {/* ===============================================
                KEY TAKEAWAYS
            ================================================ */}

            <motion.section
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className="relative mb-10 overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/[0.09] via-white/[0.02] to-purple-500/[0.05] p-6 sm:p-8"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10">
                    <Sparkles className="h-5 w-5 text-blue-400" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                      Quick Overview
                    </p>

                    <h2 className="mt-1 text-xl font-bold text-white">
                      Key Takeaways
                    </h2>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {guide.keyTakeaways.map((takeaway, index) => (
                    <div
                      key={`${guide.id}-takeaway-${index}`}
                      className="flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-black/20 p-4"
                    >
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-400" />

                      <span className="text-sm leading-6 text-gray-300">
                        {takeaway}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* ===============================================
                ARTICLE CONTENT
            ================================================ */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.15,
              }}
              className="guide-content rounded-3xl border border-white/[0.07] bg-white/[0.025] px-5 py-8 shadow-2xl shadow-black/20 sm:px-8 sm:py-10 lg:px-12 lg:py-12"
            >
              <div
                className="
                  prose
                  prose-invert
                  prose-lg
                  max-w-none
                  prose-headings:scroll-mt-28
                  prose-headings:font-bold
                  prose-headings:tracking-tight
                  prose-headings:text-white
                  prose-h2:mb-5
                  prose-h2:mt-14
                  prose-h2:border-b
                  prose-h2:border-white/[0.08]
                  prose-h2:pb-4
                  prose-h2:text-2xl
                  sm:prose-h2:text-3xl
                  prose-h3:mb-3
                  prose-h3:mt-9
                  prose-h3:text-xl
                  prose-h3:text-gray-100
                  prose-p:my-5
                  prose-p:text-[15px]
                  prose-p:leading-8
                  prose-p:text-gray-400
                  sm:prose-p:text-base
                  prose-li:text-gray-400
                  prose-li:leading-8
                  prose-strong:text-gray-100
                  prose-a:text-blue-400
                  prose-a:no-underline
                  prose-a:hover:text-blue-300
                  prose-blockquote:border-blue-500/40
                  prose-blockquote:text-gray-400
                  prose-code:rounded
                  prose-code:bg-white/[0.06]
                  prose-code:px-1.5
                  prose-code:py-0.5
                  prose-code:text-blue-300
                "
                dangerouslySetInnerHTML={{
                  __html: guide.content,
                }}
              />
            </motion.div>

            {/* ===============================================
                BOTTOM CTA
            ================================================ */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.015] p-7 sm:p-9"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="mb-3 flex items-center gap-2 text-blue-400">
                    <ShieldCheck className="h-5 w-5" />

                    <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                      Privacy Compliance
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-white">
                    Need help implementing this?
                  </h2>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-gray-400">
                    Talk to our data privacy team for practical guidance on
                    policies, assessments, controls and compliance workflows.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-gray-100"
                >
                  Contact Us
                  <ArrowLeft className="h-4 w-4 rotate-180" />
                </Link>
              </div>
            </motion.div>
          </article>

          {/* =================================================
              SIDEBAR
          ================================================== */}

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              {/* =============================================
                  TABLE OF CONTENTS
              ============================================== */}

              <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025]">
                <div className="border-b border-white/[0.07] px-5 py-4">
                  <div className="flex items-center gap-2">
                    <List className="h-4 w-4 text-blue-400" />

                    <h3 className="text-sm font-semibold text-white">
                      Table of Contents
                    </h3>
                  </div>
                </div>

                <div className="max-h-[55vh] overflow-y-auto p-3">
                  {guide.tableOfContents.map((item, index) => {
                    const isActive = activeSection === item.id;

                    return (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`group flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition ${
                          isActive
                            ? "bg-blue-500/10 text-blue-300"
                            : "text-gray-500 hover:bg-white/[0.04] hover:text-gray-200"
                        }`}
                      >
                        <span
                          className={`mt-0.5 min-w-[20px] text-[10px] font-bold ${
                            isActive
                              ? "text-blue-400"
                              : "text-gray-700 group-hover:text-gray-500"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="leading-5">{item.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* =============================================
                  GUIDE META
              ============================================== */}

              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06]">
                    <BookOpen className="h-5 w-5 text-gray-300" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-600">Reading time</p>

                    <p className="text-sm font-semibold text-white">
                      {guide.readTime}
                    </p>
                  </div>
                </div>

                <div className="h-px bg-white/[0.07]" />

                <div className="mt-4">
                  <p className="text-xs text-gray-600">Last updated</p>

                  <p className="mt-1 text-sm font-medium text-gray-300">
                    {guide.lastUpdated}
                  </p>
                </div>
              </div>

              {/* =============================================
                  RELATED GUIDES
              ============================================== */}

              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-white">
                    Related Guides
                  </h3>

                  <Link
                    href="/resources/guides"
                    className="text-xs text-blue-400 transition hover:text-blue-300"
                  >
                    View all
                  </Link>
                </div>

                <div className="space-y-3">
                  {guidesData
                    .filter((item) => item.id !== guide.id)
                    .slice(0, 3)
                    .map((relatedGuide) => {
                      const RelatedIcon = relatedGuide.categoryIcon;

                      return (
                        <Link
                          key={relatedGuide.id}
                          href={`/resources/guides/${relatedGuide.slug}`}
                          className="group block rounded-xl border border-white/[0.06] bg-black/20 p-3.5 transition hover:border-white/[0.12] hover:bg-white/[0.04]"
                        >
                          <div className="mb-2 flex items-center gap-2">
                            <span
                              className={`flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br ${relatedGuide.categoryColor}`}
                            >
                              <RelatedIcon className="h-3.5 w-3.5 text-white" />
                            </span>

                            <span className="text-[10px] font-medium uppercase tracking-wider text-gray-600">
                              {relatedGuide.category}
                            </span>
                          </div>

                          <h4 className="line-clamp-2 text-sm font-medium leading-5 text-gray-300 transition group-hover:text-white">
                            {relatedGuide.title}
                          </h4>

                          <div className="mt-2 flex items-center gap-1 text-xs text-gray-600 transition group-hover:text-blue-400">
                            Read guide
                            <ChevronRight className="h-3 w-3" />
                          </div>
                        </Link>
                      );
                    })}
                </div>
              </div>

              {/* =============================================
                  CONTACT CTA
              ============================================== */}

              <div className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-purple-500/5 p-5">
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl" />

                <div className="relative">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10">
                    <ShieldCheck className="h-4 w-4 text-blue-400" />
                  </div>

                  <h3 className="text-sm font-semibold text-white">
                    Need Help?
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-gray-500">
                    Talk to our data privacy team for expert guidance.
                  </p>

                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 transition hover:text-blue-300"
                  >
                    Contact our team
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* =====================================================
          MOBILE TABLE OF CONTENTS
      ====================================================== */}

      <div className="fixed bottom-5 left-4 right-4 z-40 lg:hidden">
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between rounded-2xl border border-white/10 bg-black/90 px-4 py-3 text-sm font-medium text-white shadow-2xl backdrop-blur-xl">
            <span className="flex items-center gap-2">
              <List className="h-4 w-4 text-blue-400" />
              Table of Contents
            </span>

            <ChevronRight className="h-4 w-4 rotate-90 transition group-open:-rotate-90" />
          </summary>

          <div className="absolute bottom-full mb-2 max-h-[65vh] w-full overflow-y-auto rounded-2xl border border-white/10 bg-[#0b0b0b]/95 p-3 shadow-2xl backdrop-blur-xl">
            {guide.tableOfContents.map((item, index) => (
              <button
                type="button"
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left text-sm ${
                  activeSection === item.id
                    ? "bg-blue-500/10 text-blue-300"
                    : "text-gray-500 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                <span className="min-w-[20px] text-[10px] text-gray-700">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="leading-5">{item.title}</span>
              </button>
            ))}
          </div>
        </details>
      </div>

      {/* =====================================================
          BACK TO TOP
      ====================================================== */}

      {showTop && (
        <motion.button
          type="button"
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          onClick={handleBackToTop}
          className="fixed bottom-6 right-6 z-40 hidden h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/80 text-gray-300 shadow-xl backdrop-blur-xl transition hover:border-white/20 hover:bg-white/10 hover:text-white sm:flex"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4" />
        </motion.button>
      )}

      {/* =====================================================
          PRINT / CONTENT STYLES
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none fixed -left-[99999px] -top-[99999px]"
      >
        <style>{`
          .guide-content table {
            width: 100%;
            border-collapse: collapse;
          }

          .guide-content th,
          .guide-content td {
            border: 1px solid rgba(255, 255, 255, 0.08);
            padding: 14px 16px;
          }

          .guide-content th {
            background: rgba(255, 255, 255, 0.04);
            color: white;
            font-weight: 600;
          }

          .guide-content td {
            color: #9ca3af;
          }

          .guide-content ol,
          .guide-content ul {
            padding-left: 1.5rem;
          }

          .guide-content li::marker {
            color: #60a5fa;
          }

          ::selection {
            background: rgba(59, 130, 246, 0.35);
            color: white;
          }

          @media print {
            body {
              background: white !important;
              color: black !important;
            }

            .guide-content {
              border: none !important;
              background: white !important;
              box-shadow: none !important;
            }

            .guide-content * {
              color: #111 !important;
            }

            aside,
            button,
            nav {
              display: none !important;
            }

            main {
              background: white !important;
              color: black !important;
            }
          }
        `}</style>
      </div>
    </main>
  );
}