import Link from 'next/link';
import { ArrowLeft, Video, BookOpen, Users, FileText, Play } from 'lucide-react';

export const metadata = {
  title: 'Training Material | DPDP Act Resources',
  description: 'Training materials and resources for data protection awareness under India\'s Digital Personal Data Protection Act 2023.',
};

export default function TrainingPage() {
  const materials = [
    {
      title: 'DPDP Act 2023 Overview',
      type: 'Video',
      duration: '30 min',
      icon: Video,
      description: 'Comprehensive overview of the Digital Personal Data Protection Act, 2023.',
    },
    {
      title: 'Data Protection for Employees',
      type: 'Presentation',
      duration: '45 min',
      icon: FileText,
      description: 'Training presentation on data protection principles and practices.',
    },
    {
      title: 'Data Breach Response Training',
      type: 'Video',
      duration: '20 min',
      icon: Video,
      description: 'Training on responding to data breaches and notifying the Board.',
    },
    {
      title: 'Data Subject Rights Handling',
      type: 'Guide',
      duration: '30 min',
      icon: BookOpen,
      description: 'Guide on handling data subject rights requests.',
    },
    {
      title: 'Consent Management Workshop',
      type: 'Workshop',
      duration: '60 min',
      icon: Users,
      description: 'Workshop on obtaining and managing consent under the DPDP Act.',
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
        <Link href="/resources" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Resources
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Training Material</h1>
        <p className="text-gray-300 text-lg max-w-3xl mb-12">Training materials and resources for data protection awareness under the DPDP Act 2023.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {materials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6 hover:bg-white/20 transition-all hover:scale-105">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-gray-300 border border-white/20">
                      {item.type}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400">{item.duration}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{item.description}</p>
                <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm flex items-center gap-1">
                  <Play className="w-4 h-4" />
                  Access Training
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}