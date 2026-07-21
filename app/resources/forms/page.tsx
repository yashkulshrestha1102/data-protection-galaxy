import Link from 'next/link';
import { ArrowLeft, FileText, Download, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Forms & Templates | DPDP Act Resources',
  description: 'Standard forms and templates for data protection compliance under India\'s Digital Personal Data Protection Act 2023.',
};

export default function FormsPage() {
  const forms = [
    {
      title: 'Privacy Notice Template',
      description: 'Standard privacy notice template for data collection under the DPDP Act.',
      format: 'DOCX',
      fields: '15 fields',
    },
    {
      title: 'Consent Form Template',
      description: 'Consent form template for obtaining data principal consent.',
      format: 'DOCX',
      fields: '8 fields',
    },
    {
      title: 'Data Access Request Form',
      description: 'Form for individuals to request access to their personal data.',
      format: 'PDF',
      fields: '6 fields',
    },
    {
      title: 'Data Correction Request Form',
      description: 'Form for individuals to request correction of their personal data.',
      format: 'PDF',
      fields: '5 fields',
    },
    {
      title: 'Data Erasure Request Form',
      description: 'Form for individuals to request deletion of their personal data.',
      format: 'PDF',
      fields: '5 fields',
    },
    {
      title: 'Data Breach Notification Form',
      description: 'Form for notifying data breaches to the Data Protection Board.',
      format: 'DOCX',
      fields: '12 fields',
    },
    {
      title: 'Data Protection Impact Assessment (DPIA) Template',
      description: 'Template for conducting Data Protection Impact Assessments.',
      format: 'DOCX',
      fields: '20 fields',
    },
    {
      title: 'DPO Appointment Letter Template',
      description: 'Template for appointing a Data Protection Officer.',
      format: 'DOCX',
      fields: '7 fields',
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

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Forms & Templates</h1>
        <p className="text-gray-300 text-lg max-w-3xl mb-12">Standard forms and templates for data protection compliance under the DPDP Act 2023.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {forms.map((item, index) => (
            <div key={index} className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6 hover:bg-white/20 transition-all hover:scale-105">
              <div className="flex items-start justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                  {item.format}
                </span>
                <span className="text-xs text-gray-400">{item.fields}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">{item.description}</p>
              <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm flex items-center gap-1">
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}