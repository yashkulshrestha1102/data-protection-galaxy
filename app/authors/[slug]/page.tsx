// app/authors/[slug]/page.tsx
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  UserCheck,
  BookOpen,
  FileText,
  Briefcase,
  ExternalLink,
  Shield,
  ArrowRight,
} from "lucide-react";
import { authors, getAuthorById } from "@/data/authors";
import { insightsData } from "@/data/insights";
import { guidesData } from "@/data/guides";
import { caseStudiesData } from "@/data/case-studies";

export function generateStaticParams() {
  return Object.keys(authors).map((slug) => ({ slug }));
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const author = getAuthorById(slug);

  if (!author) notFound();

  // ===== Filter content by author =====
  // Insights: author field is "Team Businezexcellence StartX LLP" or "Dr. ..." etc.
  // We'll show all insights for now (since most are team-authored)
  const authorInsights = insightsData;

  // Guides: all team-authored
  const authorGuides = guidesData;

  // Case studies: all team-authored
  const authorCaseStudies = caseStudiesData;

  const stats = [
    { label: "Insights Published", value: authorInsights.length, icon: FileText },
    { label: "Guides Written", value: authorGuides.length, icon: BookOpen },
    { label: "Case Studies", value: authorCaseStudies.length, icon: Briefcase },
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
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* ===== BREADCRUMB ===== */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* ===== AUTHOR HERO ===== */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-purple-500/40 shadow-2xl shadow-purple-500/20">
                <Image
                  src={author.image}
                  alt={author.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 96px, 128px"
                  priority
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-xs font-medium text-purple-300 mb-3">
                <UserCheck className="w-3 h-3" />
                Author Profile
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {author.name}
              </h1>
              <p className="text-lg text-gray-300 mb-3">{author.role}</p>

              {/* Credentials */}
              <div className="flex flex-wrap gap-2 mb-4">
                {author.credentials.map((cred, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                  >
                    {cred}
                  </span>
                ))}
              </div>

              
            </div>
          </div>
        </div>

        {/* ===== BIO ===== */}
        <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">About</h2>
          <p className="text-gray-300 leading-relaxed text-base">
            {author.bio}
          </p>
        </section>

        {/* ===== STATS ===== */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-5 text-center"
              >
                <Icon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </section>

        {/* ===== INSIGHTS ===== */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-purple-400" />
            Insights by {author.name}
            <span className="text-sm font-normal text-gray-400">
              ({authorInsights.length})
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {authorInsights.slice(0, 6).map((insight) => (
              <Link
                key={insight.slug}
                href={`/insight/${insight.slug}`}
                className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-purple-500/30 transition-all"
              >
                <div className="inline-block px-2 py-0.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-xs text-blue-400 mb-3">
                  {insight.category}
                </div>
                <h3 className="text-base font-semibold text-white group-hover:text-purple-400 transition-colors line-clamp-2 mb-2">
                  {insight.title}
                </h3>
                <p className="text-sm text-gray-400 line-clamp-2 mb-3">
                  {insight.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-white/5">
                  <span>{insight.date}</span>
                  <span>{insight.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
          {authorInsights.length > 6 && (
            <div className="text-center mt-6">
              <Link
                href="/insight"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
              >
                View all insights <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </section>

        {/* ===== GUIDES ===== */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-purple-400" />
            Guides by {author.name}
            <span className="text-sm font-normal text-gray-400">
              ({authorGuides.length})
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {authorGuides.slice(0, 4).map((guide) => (
              <Link
                key={guide.slug}
                href={`/resources/guides/${guide.slug}`}
                className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-purple-500/30 transition-all"
              >
                <span
                  className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${guide.categoryColor} mb-3`}
                >
                  {guide.category}
                </span>
                <h3 className="text-base font-semibold text-white group-hover:text-purple-400 transition-colors line-clamp-2 mb-2">
                  {guide.title}
                </h3>
                <p className="text-sm text-gray-400 line-clamp-2 mb-3">
                  {guide.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-white/5">
                  <span>Updated {guide.lastUpdated}</span>
                  <span>{guide.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ===== CASE STUDIES ===== */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-purple-400" />
            Case Studies
            <span className="text-sm font-normal text-gray-400">
              ({authorCaseStudies.length})
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {authorCaseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/resources/case-studies/${cs.slug}`}
                className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-purple-500/30 transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-xs text-blue-400">
                    {cs.industry}
                  </span>
                  <span className="text-xs text-gray-500">{cs.date}</span>
                </div>
                <h3 className="text-base font-semibold text-white group-hover:text-purple-400 transition-colors line-clamp-2 mb-2">
                  {cs.title}
                </h3>
                <p className="text-sm text-gray-400 line-clamp-2">
                  {cs.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-8 text-center">
          <Shield className="w-10 h-10 text-purple-400 mx-auto mb-3" />
          <h2 className="text-2xl font-bold text-white mb-3">
            Need help with DPDPA compliance?
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
      </div>
    </main>
  );
}