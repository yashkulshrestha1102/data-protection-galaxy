"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Lock, Info, Phone, Mail } from "lucide-react";

// ===== SOCIAL ICONS (SVG) =====
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0A66C2" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4">
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

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#25D366" className="w-4 h-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// ===== RESOURCES DROPDOWN ITEMS =====
const resourcesDropdown = [
  { href: "/galaxy", label: "Galaxy" },
  { href: "/insight", label: "Insights" },
  { href: "/map", label: "Map" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [showLockMessage, setShowLockMessage] = useState<string | null>(null);
  const pathname = usePathname();
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = (dropdown: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleDropdownMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const handleLockedClick = (label: string) => {
    setShowLockMessage(`${label} section is Coming Soon. Under Maintenance!`);
    setTimeout(() => setShowLockMessage(null), 3000);
  };

  // ✅ Book a Consultant Scroll Handler
  const handleBookConsultant = () => {
    const el = document.getElementById('book-demo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* ===== CONTACT BAR - TOP PE ===== */}
      <div className="relative z-10 bg-purple-900/20 backdrop-blur-md border-b border-white/5 py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-end gap-3 md:gap-6">
          
          {/* ===== SOCIAL ICONS + PHONE + EMAIL ===== */}
          <div className="flex items-center gap-3">
            {/* Social Icons */}
            <a 
              href="https://wa.me/918800138008" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors hover:scale-110 transform"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
            </a>
            <a 
              href="https://www.linkedin.com/company/businezexcellence-com/?viewAsMember=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors hover:scale-110 transform"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a 
              href="https://www.instagram.com/businezexcellence/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors hover:scale-110 transform"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>

            {/* Separator */}
            <span className="text-white/20 text-xs">|</span>

            {/* Phone */}
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-purple-400" />
              <a 
                href="tel:+918800138008" 
                className="text-xs text-white/80 hover:text-white transition-colors font-medium"
              >
                +91 8800138008
              </a>
            </div>

            {/* Separator */}
            <span className="text-white/20 text-xs hidden sm:inline">|</span>

            {/* Email */}
            <div className="flex items-center gap-2 hidden sm:flex">
              <Mail className="w-3.5 h-3.5 text-purple-400" />
              <a 
                href="mailto:shilpi.kulshrestha@businezexcellence.com" 
                className="text-xs text-white/70 hover:text-white transition-colors"
              >
                shilpi.kulshrestha@businezexcellence.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== NAVBAR ===== */}
      <div className="relative z-20 bg-white/5 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            
            {/* ===== LOGO ===== */}
            <Link href="/" className="flex flex-col group cursor-pointer" prefetch={true}>
              <div className="relative flex flex-col items-start">
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 flex items-center justify-center">
                  <div className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.3)] animate-logo-3d overflow-hidden">
                    <img 
                      src="/favicon.ico"
                      alt="Legal Galaxy Logo"
                      className="w-full h-full object-cover rounded-full"
                    />
                    <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white/30 to-transparent pointer-events-none" />
                  </div>
                </div>
                <span className="text-base md:text-lg font-black uppercase tracking-normal text-white leading-none pl-9">
                  Legal Galaxy
                </span>
                <span className="text-[10px] md:text-xs text-white/90 tracking-wide mt-0.5 font-medium pl-9">
                  Privacy & AI Governance
                </span>
              </div>
            </Link>

            {/* ===== DESKTOP NAVIGATION ===== */}
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/scorecard"
                prefetch={true}
                className={`text-base font-medium transition-all duration-200 ${ 
                  pathname === "/scorecard" 
                    ? 'text-white font-bold border-b-2 border-purple-400 pb-1' 
                    : 'text-white/80 hover:text-white hover:border-b-2 hover:border-purple-400/80 hover:font-bold hover:pb-1'
                }`}
              >
                Scoreboard
              </Link>

              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('resources')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`text-base font-medium transition-all duration-200 flex items-center gap-1 ${ 
                    openDropdown === 'resources' || resourcesDropdown.some(item => pathname === item.href)
                      ? 'text-white font-bold border-b-2 border-purple-400 pb-1'
                      : 'text-white/80 hover:text-white hover:border-b-2 hover:border-purple-400/80 hover:font-bold hover:pb-1'
                  }`}
                >
                  Resources
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'resources' ? 'rotate-180' : ''}`} />
                </button>
                
                {openDropdown === 'resources' && (
                  <div 
                    className="absolute top-full left-0 mt-0 w-48 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl py-2"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    {resourcesDropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        prefetch={true}
                        className={`block px-4 py-2.5 text-base transition-colors ${ 
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

              <Link
                href="/generator"
                prefetch={true}
                className={`text-base font-medium transition-all duration-200 ${ 
                  pathname === "/generator" 
                    ? 'text-white font-bold border-b-2 border-purple-400 pb-1' 
                    : 'text-white/80 hover:text-white hover:border-b-2 hover:border-purple-400/80 hover:font-bold hover:pb-1'
                }`}
              >
                Generator
              </Link>

              <Link
                href="/about"
                prefetch={true}
                className={`text-base font-medium transition-all duration-200 ${ 
                  pathname === "/about" 
                    ? 'text-white font-bold border-b-2 border-purple-400 pb-1' 
                    : 'text-white/80 hover:text-white hover:border-b-2 hover:border-purple-400/80 hover:font-bold hover:pb-1'
                }`}
              >
                About
              </Link>

              <Link
                href="/contact"
                prefetch={true}
                className={`text-base font-medium transition-all duration-200 ${ 
                  pathname === "/contact" 
                    ? 'text-white font-bold border-b-2 border-purple-400 pb-1' 
                    : 'text-white/80 hover:text-white hover:border-b-2 hover:border-purple-400/80 hover:font-bold hover:pb-1'
                }`}
              >
                Contact
              </Link>

              {/* ✅ Book a Consultant - Scroll to Form */}
              <button
                onClick={handleBookConsultant}
                className="px-4 py-2 rounded-lg bg-white text-black font-medium text-sm hover:bg-white/80 transition-all cursor-pointer"
              >
                Book a Consultant
              </button>
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

          {/* ===== MOBILE NAVIGATION ===== */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-white/10 bg-white/5 backdrop-blur-xl">
              <nav className="flex flex-col gap-1">
                <Link href="/scorecard" prefetch={true} onClick={() => setIsOpen(false)} className={`px-4 py-2.5 rounded-lg transition-all ${pathname === "/scorecard" ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white font-semibold border border-purple-400/30' : 'text-gray-300/80 hover:text-white hover:bg-white/10'}`}>
                  Scoreboard
                </Link>

                <div className="px-4 py-1">
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Resources</p>
                  {resourcesDropdown.map((item) => (
                    <Link key={item.href} href={item.href} prefetch={true} onClick={() => setIsOpen(false)} className={`block px-4 py-2 rounded-lg transition-all text-sm ${pathname === item.href ? 'text-white bg-purple-500/20 font-semibold' : 'text-gray-300/80 hover:text-white hover:bg-white/10'}`}>
                      {item.label}
                    </Link>
                  ))}
                </div>

                <Link href="/generator" prefetch={true} onClick={() => setIsOpen(false)} className={`px-4 py-2.5 rounded-lg transition-all ${pathname === "/generator" ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white font-semibold border border-purple-400/30' : 'text-gray-300/80 hover:text-white hover:bg-white/10'}`}>
                  Generator
                </Link>

                <Link href="/about" prefetch={true} onClick={() => setIsOpen(false)} className={`px-4 py-2.5 rounded-lg transition-all ${pathname === "/about" ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white font-semibold border border-purple-400/30' : 'text-gray-300/80 hover:text-white hover:bg-white/10'}`}>
                  About
                </Link>

                <Link href="/contact" prefetch={true} onClick={() => setIsOpen(false)} className={`px-4 py-2.5 rounded-lg transition-all ${pathname === "/contact" ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white font-semibold border border-purple-400/30' : 'text-gray-300/80 hover:text-white hover:bg-white/10'}`}>
                  Contact
                </Link>

                {/* ✅ Book a Consultant - Scroll to Form */}
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setTimeout(() => {
                      const el = document.getElementById('book-demo');
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }, 100);
                  }}
                  className="mx-4 mt-2 px-4 py-2.5 rounded-lg bg-white text-black font-medium text-center hover:bg-white/80 transition-all cursor-pointer"
                >
                  Book a Consultant
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>

      {/* ===== LOCKED MESSAGE TOAST ===== */}
      {showLockMessage && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 bg-black/90 border border-yellow-500/30 text-white px-6 py-3 rounded-xl shadow-2xl backdrop-blur-xl">
          <Info className="w-5 h-5 text-yellow-400" />
          <span className="text-sm font-medium">{showLockMessage}</span>
        </div>
      )}
    </header>
  );
};