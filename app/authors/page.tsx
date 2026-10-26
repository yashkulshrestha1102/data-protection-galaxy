// app/authors/page.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Users, ArrowRight } from "lucide-react";
import { authors } from "@/data/authors";

export const metadata = {
  title: "Authors | Legal Galaxy",
  description:
    "Meet the legal and privacy experts behind Legal Galaxy's DPDP Act 2023 content and resources.",
};

export default function AuthorsPage() {
  const authorList = Object.values(authors);

  return (
    <main className="min-h-screen text-white px-4 pt-28 md:pt-32 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/home1.jpeg')" }}>
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 flex items-center gap-3">
            <Users className="w-8 h-8 text-purple-400" />
            Our Authors
          </h1>
          <p className="text-gray-300 text-lg">
            Meet the legal and privacy experts behind Legal Galaxy's content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {authorList.map((author) => (
            <Link
              key={author.id}
              href={`/authors/${author.id}`}
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-purple-500/40 flex-shrink-0">
                  <Image
                    src={author.image}
                    alt={author.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                    {author.name}
                  </h2>
                  <p className="text-sm text-gray-400 mt-1">{author.role}</p>
                  <div className="flex items-center gap-1 text-purple-400 text-sm mt-2 font-medium">
                    View profile
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
