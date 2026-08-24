"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

// ===== NEW NAVIGATION STRUCTURE =====
// Home removed, Resources dropdown added
const navLinks = [
  { href: "/scorecard", label: "Scoreboard" },
  { href: "/generator", label: "Generator" },
  { href: "/certificate-course", label: "Certification Course" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// ===== RESOURCES DROPDOWN ITEMS =====
const resourcesDropdown = [
  { href: "/galaxy", label: "Galaxy" },
  { href: "/insight", label: "Insights" },
  { href: "/resources/guides", label: "Guides" },
  { href: "/map", label: "Map" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* ===== LOGO ===== */}
          <Link href="/" className="flex flex-col group cursor-pointer" prefetch={true}>
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-400/20 blur-2xl rounded-full group-hover:bg-purple-400/30 transition-all scale-150" />
                <img 
                  src="/images/logo.png"
                  alt="Legal Galaxy Logo"
                  className="w-10 h-10 object-contain relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                />
              </div>
              <span className="text-2xl md:text-3xl font-bold text-white tracking-wide drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                Legal Galaxy
              </span>
            </div>
            <span className="text-[10px] md:text-xs text-gray-300/70 tracking-wider ml-14 -mt-0.5 font-light">
              Privacy & AI Governance
            </span>
          </Link>

          {/* ===== DESKTOP NAVIGATION ===== */}
          <nav className="hidden md:flex items-center gap-6">
            {/* Scoreboard */}
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
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              <button
                className={`text-sm transition-all duration-200 flex items-center gap-1 ${
                  resourcesDropdown.some(item => pathname === item.href)
                    ? 'text-white font-semibold border-b-2 border-purple-400 pb-1'
                    : 'text-gray-300/80 hover:text-white hover:border-b-2 hover:border-purple-400/50 pb-1'
                }`}
              >
                Resources
                <ChevronDown className={`w-3 h-3 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isResourcesOpen && (
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

            {/* Generator */}
            <Link
              href="/generator"
              prefetch={true}
              className={`text-sm transition-all duration-200 ${
                pathname === "/generator" 
                  ? 'text-white font-semibold border-b-2 border-purple-400 pb-1' 
                  : 'text-gray-300/80 hover:text-white hover:border-b-2 hover:border-purple-400/50 pb-1'
              }`}
            >
              Generator
            </Link>

            {/* Certification Course */}
            <Link
              href="/certificate-course"
              prefetch={true}
              className={`text-sm transition-all duration-200 ${
                pathname === "/certificate-course" 
                  ? 'text-white font-semibold border-b-2 border-purple-400 pb-1' 
                  : 'text-gray-300/80 hover:text-white hover:border-b-2 hover:border-purple-400/50 pb-1'
              }`}
            >
              Certification
            </Link>

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

        {/* ===== MOBILE NAVIGATION ===== */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10 bg-white/5 backdrop-blur-xl">
            <nav className="flex flex-col gap-1">
              {/* Scoreboard */}
              <Link
                href="/scorecard"
                prefetch={true}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2.5 rounded-lg transition-all ${
                  pathname === "/scorecard" 
                    ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white font-semibold border border-purple-400/30' 
                    : 'text-gray-300/80 hover:text-white hover:bg-white/10'
                }`}
              >
                Scoreboard
              </Link>

              {/* Resources - Mobile Dropdown */}
              <div className="px-4 py-1">
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Resources</p>
                {resourcesDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    prefetch={true}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 rounded-lg transition-all text-sm ${
                      pathname === item.href 
                        ? 'text-white bg-purple-500/20 font-semibold' 
                        : 'text-gray-300/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Generator */}
              <Link
                href="/generator"
                prefetch={true}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2.5 rounded-lg transition-all ${
                  pathname === "/generator" 
                    ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white font-semibold border border-purple-400/30' 
                    : 'text-gray-300/80 hover:text-white hover:bg-white/10'
                }`}
              >
                Generator
              </Link>

              {/* Certification */}
              <Link
                href="/certificate-course"
                prefetch={true}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2.5 rounded-lg transition-all ${
                  pathname === "/certificate-course" 
                    ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white font-semibold border border-purple-400/30' 
                    : 'text-gray-300/80 hover:text-white hover:bg-white/10'
                }`}
              >
                Certification
              </Link>

              {/* About */}
              <Link
                href="/about"
                prefetch={true}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2.5 rounded-lg transition-all ${
                  pathname === "/about" 
                    ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white font-semibold border border-purple-400/30' 
                    : 'text-gray-300/80 hover:text-white hover:bg-white/10'
                }`}
              >
                About
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                prefetch={true}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2.5 rounded-lg transition-all ${
                  pathname === "/contact" 
                    ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white font-semibold border border-purple-400/30' 
                    : 'text-gray-300/80 hover:text-white hover:bg-white/10'
                }`}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};