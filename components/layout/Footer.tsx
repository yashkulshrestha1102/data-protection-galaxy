// components/layout/Footer.tsx

'use client';

import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-black via-[#1a1a1a] to-[#0a1428] border-t border-white/10 text-white/60 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-bold text-white mb-2">Legal Galaxy</h3>
            <p className="text-xs text-white/40">Privacy & AI Governance Universe</p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Explore</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/scorecard" className="hover:text-white transition-colors">Scoreboard</Link></li>
              <li><Link href="/galaxy" className="hover:text-white transition-colors">Galaxy</Link></li>
              <li><Link href="/insight" className="hover:text-white transition-colors">Insights</Link></li>
              <li><Link href="/resources/guides" className="hover:text-white transition-colors">Guides</Link></li>
              <li><Link href="/map" className="hover:text-white transition-colors">Map</Link></li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Tools</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/generator" className="hover:text-white transition-colors">Generator</Link></li>
              <li><Link href="/certificate-course" className="hover:text-white transition-colors">Certification</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Company</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
              <li><Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div className="text-center md:text-left">
            <p>© {currentYear} Legal Galaxy | Powered by BusinezExcellence StartX LLP</p>
            <p className="text-white/30 mt-1 text-[10px]">
              This content is for educational/informational purposes only and does not constitute legal advice.
            </p>
          </div>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-blue-400 transition-colors"><FaLinkedin className="w-4 h-4" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-sky-400 transition-colors"><FaTwitter className="w-4 h-4" /></a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-red-500 transition-colors"><FaYoutube className="w-4 h-4" /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-pink-500 transition-colors"><FaInstagram className="w-4 h-4" /></a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-green-400 transition-colors"><FaWhatsapp className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}