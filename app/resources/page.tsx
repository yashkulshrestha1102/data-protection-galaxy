import Link from 'next/link';
import { ArrowLeft, BookOpen, FileText, Users, HelpCircle, Video, Link2, ChevronRight } from 'lucide-react';

export const metadata = {
  title: 'Data Protection Resources | DPDP Act 2023',
  description: 'Essential resources for data protection compliance under India\'s Digital Personal Data Protection Act 2023.',
};

export default function ResourcesPage() {
  const resources = [
    { 
      icon: FileText, 
      title: 'Guidelines & Circulars', 
      description: 'Official guidelines and circulars issued by the Data Protection Board.',
      slug: 'guidelines'
    },
    { 
      icon: BookOpen, 
      title: 'Forms & Templates', 
      description: 'Standard forms and templates for data protection compliance.',
      slug: 'forms'
    },
    { 
      icon: Users, 
      title: 'Case Studies', 
      description: 'Real-world case studies on data protection and compliance.',
      slug: 'case-studies'
    },
    { 
      icon: HelpCircle, 
      title: 'FAQs', 
      description: 'Frequently asked questions about the DPDP Act 2023.',
      slug: 'faqs'
    },
    { 
      icon: Video, 
      title: 'Training Material', 
      description: 'Training materials and resources for data protection awareness.',
      slug: 'training'
    },
    { 
      icon: Link2, 
      title: 'External Links', 
      description: 'Links to relevant laws, regulations, and official websites.',
      slug: 'links'
    },
  ];

  return (
    <main className="min-h-screen text-white px-4 pt-28 md:pt-32 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/home1.jpeg')" }}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <Link href="/galaxy" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Galaxy
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Resources</h1>
        <p className="text-gray-300 text-lg max-w-3xl mb-12">Essential resources for data protection compliance under the DPDP Act 2023.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                href={`/resources/${item.slug}`}
                className="group bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6 hover:bg-white/20 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                    {item.title}
                  </h3>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all flex-shrink-0 ml-2 mt-1" />
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mt-2">{item.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}