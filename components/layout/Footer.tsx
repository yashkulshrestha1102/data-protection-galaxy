// components/layout/Footer.tsx
// Server component: no client JS needed any more (the "coming soon" toast is gone).

import Link from 'next/link';

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0A66C2" className="w-5 h-5" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF0000" className="w-5 h-5" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
    <defs>
      <linearGradient id="instaGrad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FEAA5C" />
        <stop offset="30%" stopColor="#FF5364" />
        <stop offset="60%" stopColor="#CB2E82" />
        <stop offset="100%" stopColor="#7938B6" />
      </linearGradient>
    </defs>
    <path fill="url(#instaGrad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const SOCIALS = [
  { href: 'https://www.linkedin.com/company/businezexcellence-com/', label: 'Visit Businezexcellence on LinkedIn', Icon: LinkedInIcon },
  { href: 'https://www.youtube.com/@businezexcellence', label: 'Visit Businezexcellence on YouTube', Icon: YouTubeIcon },
  { href: 'https://www.instagram.com/businezexcellence/', label: 'Visit Businezexcellence on Instagram', Icon: InstagramIcon },
];

const linkClass = 'hover:text-cyan-300 transition-colors';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-cyan-400/15 bg-black/40 backdrop-blur-sm text-white/60 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-bold text-gradient-sea mb-2">Legal Galaxy</h3>
            <p className="text-xs text-white/50">Privacy &amp; AI Governance Universe</p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Explore</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/scorecard" className={linkClass}>Scoreboard</Link></li>
              <li><Link href="/galaxy" className={linkClass}>Galaxy</Link></li>
              <li><Link href="/insight" className={linkClass}>Insights</Link></li>
              <li><Link href="/resources/guides" className={linkClass}>Guides</Link></li>
              <li><Link href="/resources/case-studies" className={linkClass}>Case Studies</Link></li>
              <li><Link href="/map" className={linkClass}>Map</Link></li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Tools &amp; Learning</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/generator" className={linkClass}>Generator</Link></li>
              <li><Link href="/certificate-course" className={linkClass}>Certificate Course</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Company</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/about" className={linkClass}>About</Link></li>
              <li><Link href="/contact" className={linkClass}>Contact</Link></li>
              <li><Link href="/privacy-policy" className={linkClass}>Privacy Policy</Link></li>
              <li><Link href="/consent-notice" className={linkClass}>Consent Notice</Link></li>
              <li><Link href="/grievance-redressal" className={linkClass}>Grievance Redressal</Link></li>
              <li><Link href="/data-principal-rights" className={linkClass}>Data Principal Rights</Link></li>
              <li><Link href="/consent-dashboard" className={linkClass}>Consent Dashboard</Link></li>
              <li><Link href="/terms" className={linkClass}>Terms of Use</Link></li>
              <li><Link href="/disclaimer" className={linkClass}>Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div className="text-center md:text-left">
            <p>&copy; {currentYear} Legal Galaxy | Powered by Businezexcellence StartX LLP</p>
            <p className="text-white/50 mt-1 text-[10px]">
              This content is for educational/informational purposes only and does not constitute legal advice.
            </p>
            <p className="text-white/50 mt-1 text-[10px]">
              Data Privacy Contact:{' '}
              <a href="mailto:shilpi.kulshrestha@businezexcellence.com" className="text-cyan-400 hover:text-cyan-300 underline">
                shilpi.kulshrestha@businezexcellence.com
              </a>
            </p>
          </div>

          <div className="flex gap-4">
            {SOCIALS.map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:opacity-80 hover:-translate-y-0.5 transition-all"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
