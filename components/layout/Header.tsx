"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown, Lock, Info, Phone, Mail } from "lucide-react";

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
];

// ===== LEARN DROPDOWN ITEMS (SIRF Certification Locked) =====
const learnDropdown = [
  { href: "/certificate-course", label: "Certification", locked: true },
  { href: "/resources/guides", label: "Guides", locked: false },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [showLockMessage, setShowLockMessage] = useState<string | null>(null);
  const pathname = usePathname();

  const handleMouseEnter = (dropdown: string) => setOpenDropdown(dropdown);
  const handleMouseLeave = () => setOpenDropdown(null);

  // Locked link par click hone par message dikhane ka function
  const handleLockedClick = (label: string) => {
    setShowLockMessage(`${label} section is Coming Soon. Under Maintenance!`);
    // 3 second baad message gayab
    setTimeout(() => setShowLockMessage(null), 3000);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* ============================================================ */}
      {/* ===== NAVBAR ===== */}
      {/* ============================================================ */}
      <div className="bg-white/5 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            
            {/* ===== LOGO ===== */}
            <Link href="/" className="flex flex-col group cursor-pointer" prefetch={true}>
              <div className="relative flex flex-col items-start">
                {/* 3D ROTATING FAVICON LOGO START */}
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
                {/* 3D ROTATING FAVICON LOGO END */}

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

              {/* Resources Dropdown */}
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
                  <div className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl py-2">
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

              {/* Tools Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('tools')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`text-base font-medium transition-all duration-200 flex items-center gap-1 ${ 
                    openDropdown === 'tools' || toolsDropdown.some(item => pathname === item.href)
                      ? 'text-white font-bold border-b-2 border-purple-400 pb-1'
                      : 'text-white/80 hover:text-white hover:border-b-2 hover:border-purple-400/80 hover:font-bold hover:pb-1'
                  }`}
                >
                  Tools
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'tools' ? 'rotate-180' : ''}`} />
                </button>
                
                {openDropdown === 'tools' && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl py-2">
                    {toolsDropdown.map((item) => (
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

              {/* Learn Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('learn')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`text-base font-medium transition-all duration-200 flex items-center gap-1 ${ 
                    openDropdown === 'learn' || learnDropdown.some(item => pathname === item.href)
                      ? 'text-white font-bold border-b-2 border-purple-400 pb-1'
                      : 'text-white/80 hover:text-white hover:border-b-2 hover:border-purple-400/80 hover:font-bold hover:pb-1'
                  }`}
                >
                  Learn
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'learn' ? 'rotate-180' : ''}`} />
                </button>
                
                {openDropdown === 'learn' && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl py-2">
                    {learnDropdown.map((item) => (
                      item.locked ? (
                        <div
                          key={item.href}
                          onClick={() => handleLockedClick(item.label)}
                          className="flex items-center justify-between px-4 py-2.5 text-base text-gray-400 cursor-not-allowed hover:bg-white/5"
                        >
                          <span>{item.label}</span>
                          <Lock className="w-4 h-4 text-yellow-500" />
                        </div>
                      ) : (
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
                      )
                    ))}
                  </div>
                )}
              </div>

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

              <Link
                href="#book-demo"
                className="px-4 py-2 rounded-lg bg-white text-black font-medium text-sm hover:bg-white/80 transition-all"
              >
                Book a Demo
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

                <div className="px-4 py-1">
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Tools</p>
                  {toolsDropdown.map((item) => (
                    <Link key={item.href} href={item.href} prefetch={true} onClick={() => setIsOpen(false)} className={`block px-4 py-2 rounded-lg transition-all text-sm ${pathname === item.href ? 'text-white bg-purple-500/20 font-semibold' : 'text-gray-300/80 hover:text-white hover:bg-white/10'}`}>
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div className="px-4 py-1">
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Learn</p>
                  {learnDropdown.map((item) => (
                    item.locked ? (
                      <div
                        key={item.href}
                        onClick={() => handleLockedClick(item.label)}
                        className="flex items-center justify-between px-4 py-2 rounded-lg text-sm text-gray-400 cursor-not-allowed"
                      >
                        <span>{item.label}</span>
                        <Lock className="w-3 h-3 text-yellow-500" />
                      </div>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        prefetch={true}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-2 rounded-lg transition-all text-sm ${pathname === item.href ? 'text-white bg-purple-500/20 font-semibold' : 'text-gray-300/80 hover:text-white hover:bg-white/10'}`}
                      >
                        {item.label}
                      </Link>
                    )
                  ))}
                </div>

                <Link href="/about" prefetch={true} onClick={() => setIsOpen(false)} className={`px-4 py-2.5 rounded-lg transition-all ${pathname === "/about" ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white font-semibold border border-purple-400/30' : 'text-gray-300/80 hover:text-white hover:bg-white/10'}`}>
                  About
                </Link>

                <Link href="/contact" prefetch={true} onClick={() => setIsOpen(false)} className={`px-4 py-2.5 rounded-lg transition-all ${pathname === "/contact" ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white font-semibold border border-purple-400/30' : 'text-gray-300/80 hover:text-white hover:bg-white/10'}`}>
                  Contact
                </Link>

                <Link href="#book-demo" onClick={() => setIsOpen(false)} className="mx-4 mt-2 px-4 py-2.5 rounded-lg bg-white text-black font-medium text-center hover:bg-white/80 transition-all">
                  Book a Demo
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>

      {/* ============================================================ */}
      {/* ===== CONTACT BAR - NAVBAR KE NEEECHE (ALWAYS VISIBLE) ===== */}
      {/* ============================================================ */}
      <div className="bg-purple-900/20 backdrop-blur-md border-b border-white/5 py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center md:justify-end gap-3 md:gap-6">
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-purple-400" />
            <a 
              href="tel:+919999999999" 
              className="text-xs text-white/80 hover:text-white transition-colors font-medium"
            >
              +91 99999 99999
            </a>
          </div>
          <span className="text-white/10 hidden sm:inline">|</span>
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-purple-400" />
            <a 
              href="mailto:contact@legalgalaxy.com" 
              className="text-xs text-white/70 hover:text-white transition-colors"
            >
              contact@legalgalaxy.com
            </a>
          </div>
          <span className="text-white/10 hidden sm:inline">|</span>
          <span className="text-[10px] text-white/40 hidden sm:inline">
            Mon-Fri, 9AM - 6PM IST
          </span>
        </div>
      </div>

      {/* ===== LOCKED MESSAGE TOAST (Popup) ===== */}
      {showLockMessage && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 bg-black/90 border border-yellow-500/30 text-white px-6 py-3 rounded-xl shadow-2xl backdrop-blur-xl">
          <Info className="w-5 h-5 text-yellow-400" />
          <span className="text-sm font-medium">{showLockMessage}</span>
        </div>
      )}
    </header>
  );
};