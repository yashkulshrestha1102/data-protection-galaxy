"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

// ===== RESOURCES DROPDOWN ITEMS =====
const resourcesDropdown = [
  { href: "/galaxy", label: "Galaxy" },
  { href: "/insight", label: "Insights" },
  { href: "/map", label: "Map" },
];

// ===== TOOLS DROPDOWN ITEMS =====
const toolsDropdown = [
  { href: "/generator", label: "Generator" },
  { href: "/scorecard", label: "Scoreboard" },
  { href: "/templates", label: "Templates" },
];

// ===== LEARN DROPDOWN ITEMS =====
const learnDropdown = [
  { href: "/certificate-course", label: "Certification" },
  { href: "/resources/guides", label: "Guides" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const handleMouseEnter = (dropdown: string) => setOpenDropdown(dropdown);
  const handleMouseLeave = () => setOpenDropdown(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Yahan h-20 hataya aur py-3 lagaya hai taaki content fit rahe */}
        <div className="flex items-center justify-between py-3">
          
          {/* ===== FIXED LOGO (Single Line + Tagline) ===== */}
          <Link href="/" className="flex flex-col group cursor-pointer" prefetch={true}>
            <div className="relative flex flex-col items-start">
              <span 
                className="text-base md:text-lg font-black uppercase tracking-[0.15em] text-transparent leading-none"
                style={{
                  WebkitTextStroke: '1px rgba(255,255,255,0.9)',
                  textShadow: '0 0 8px rgba(255,255,255,0.2)'
                }}
              >
                Legal Galaxy
              </span>
              <span className="text-[8px] md:text-[9px] text-gray-300/70 tracking-wider mt-0.5 font-light">
                 Privacy & AI Governance
              </span>
            </div>
          </Link>

          {/* ===== DESKTOP NAVIGATION ===== */}
          <nav className="hidden md:flex items-center gap-5">
            {/* Scoreboard (Direct Link) */}
            <Link
              href="/scorecard"
              prefetch={true}
              className={`text-sm transition-all duration-200 ${
                pathname === "/scorecard" 
                  ? 'text-white font-semibold border-b-2 border-purple-400 pb-1' 
                  : 'text-gray-300/80 hover:text-white hover:border-b-2 hover:border-purple-400/50 pb-1'
              }`}
            >
              Scoreboard
            </Link>

            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`text-sm transition-all duration-200 flex items-center gap-1 ${
                  openDropdown === 'resources' || resourcesDropdown.some(item => pathname === item.href)
                    ? 'text-white font-semibold border-b-2 border-purple-400 pb-1'
                    : 'text-gray-300/80 hover:text-white hover:border-b-2 hover:border-purple-400/50 pb-1'
                }`}
              >
                Resources
                <ChevronDown className={`w-3 h-3 transition-transform ${openDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl py-2">
                  {resourcesDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      prefetch={true}
                      className={`block px-4 py-2.5 text-sm transition-colors ${
                        pathname === item.href
                          ? 'text-white bg-purple-500/20'
                          : 'text-gray-300/80 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Tools Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('tools')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`text-sm transition-all duration-200 flex items-center gap-1 ${
                  openDropdown === 'tools' || toolsDropdown.some(item => pathname === item.href)
                    ? 'text-white font-semibold border-b-2 border-purple-400 pb-1'
                    : 'text-gray-300/80 hover:text-white hover:border-b-2 hover:border-purple-400/50 pb-1'
                }`}
              >
                Tools
                <ChevronDown className={`w-3 h-3 transition-transform ${openDropdown === 'tools' ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdown === 'tools' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl py-2">
                  {toolsDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      prefetch={true}
                      className={`block px-4 py-2.5 text-sm transition-colors ${
                        pathname === item.href
                          ? 'text-white bg-purple-500/20'
                          : 'text-gray-300/80 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Learn Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('learn')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`text-sm transition-all duration-200 flex items-center gap-1 ${
                  openDropdown === 'learn' || learnDropdown.some(item => pathname === item.href)
                    ? 'text-white font-semibold border-b-2 border-purple-400 pb-1'
                    : 'text-gray-300/80 hover:text-white hover:border-b-2 hover:border-purple-400/50 pb-1'
                }`}
              >
                Learn
                <ChevronDown className={`w-3 h-3 transition-transform ${openDropdown === 'learn' ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdown === 'learn' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl py-2">
                  {learnDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      prefetch={true}
                      className={`block px-4 py-2.5 text-sm transition-colors ${
                        pathname === item.href
                          ? 'text-white bg-purple-500/20'
                          : 'text-gray-300/80 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About */}
            <Link
              href="/about"
              prefetch={true}
              className={`text-sm transition-all duration-200 ${
                pathname === "/about" 
                  ? 'text-white font-semibold border-b-2 border-purple-400 pb-1' 
                  : 'text-gray-300/80 hover:text-white hover:border-b-2 hover:border-purple-400/50 pb-1'
              }`}
            >
              About
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              prefetch={true}
              className={`text-sm transition-all duration-200 ${
                pathname === "/contact" 
                  ? 'text-white font-semibold border-b-2 border-purple-400 pb-1' 
                  : 'text-gray-300/80 hover:text-white hover:border-b-2 hover:border-purple-400/50 pb-1'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* ===== MOBILE MENU BUTTON ===== */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* ===== MOBILE NAVIGATION (Complete) ===== */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10 bg-white/5 backdrop-blur-xl">
            <nav className="flex flex-col gap-1">
              
              {/* Scoreboard */}
              <Link href="/scorecard" prefetch={true} onClick={() => setIsOpen(false)} className={`px-4 py-2.5 rounded-lg transition-all ${pathname === "/scorecard" ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white font-semibold border border-purple-400/30' : 'text-gray-300/80 hover:text-white hover:bg-white/10'}`}>
                Scoreboard
              </Link>

              {/* Resources - Mobile */}
              <div className="px-4 py-1">
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Resources</p>
                {resourcesDropdown.map((item) => (
                  <Link key={item.href} href={item.href} prefetch={true} onClick={() => setIsOpen(false)} className={`block px-4 py-2 rounded-lg transition-all text-sm ${pathname === item.href ? 'text-white bg-purple-500/20 font-semibold' : 'text-gray-300/80 hover:text-white hover:bg-white/10'}`}>
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Tools - Mobile */}
              <div className="px-4 py-1">
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Tools</p>
                {toolsDropdown.map((item) => (
                  <Link key={item.href} href={item.href} prefetch={true} onClick={() => setIsOpen(false)} className={`block px-4 py-2 rounded-lg transition-all text-sm ${pathname === item.href ? 'text-white bg-purple-500/20 font-semibold' : 'text-gray-300/80 hover:text-white hover:bg-white/10'}`}>
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Learn - Mobile */}
              <div className="px-4 py-1">
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Learn</p>
                {learnDropdown.map((item) => (
                  <Link key={item.href} href={item.href} prefetch={true} onClick={() => setIsOpen(false)} className={`block px-4 py-2 rounded-lg transition-all text-sm ${pathname === item.href ? 'text-white bg-purple-500/20 font-semibold' : 'text-gray-300/80 hover:text-white hover:bg-white/10'}`}>
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* About */}
              <Link href="/about" prefetch={true} onClick={() => setIsOpen(false)} className={`px-4 py-2.5 rounded-lg transition-all ${pathname === "/about" ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white font-semibold border border-purple-400/30' : 'text-gray-300/80 hover:text-white hover:bg-white/10'}`}>
                About
              </Link>

              {/* Contact */}
              <Link href="/contact" prefetch={true} onClick={() => setIsOpen(false)} className={`px-4 py-2.5 rounded-lg transition-all ${pathname === "/contact" ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white font-semibold border border-purple-400/30' : 'text-gray-300/80 hover:text-white hover:bg-white/10'}`}>
                Contact
              </Link>

            </nav>
          </div>
        )}
      </div>
    </header>
  );
};