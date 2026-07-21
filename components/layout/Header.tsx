"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Shield } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/galaxy", label: "Galaxy" },
  { href: "/map", label: "Map" },
  { href: "/insight", label: "Insight" },
  { href: "/resources", label: "Resources" },
  { href: "/scorecard", label: "Scorecard" },
  { href: "/generator", label: "Generator" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link href="/" className="flex flex-col group cursor-pointer" prefetch={true}>
            <div className="flex items-center gap-2.5">
              <div className="relative">
                {/* Glow */}
                <div className="absolute inset-0 bg-purple-400/20 blur-xl rounded-full group-hover:bg-purple-400/30 transition-all" />
                {/* Icon */}
                <Shield className="w-8 h-8 text-purple-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative z-10" />
              </div>
              {/* Text — Galaxy Theme Gradient */}
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent tracking-wide">
                Legal Galaxy
              </span>
            </div>
            <span className="text-[10px] md:text-xs text-gray-300/70 tracking-wider ml-11 -mt-0.5 font-light">
              Powered by Business Excellence
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={true}
                  className={`text-sm transition-all duration-200 ${
                    isActive 
                      ? 'text-white font-semibold border-b-2 border-purple-400 pb-1' 
                      : 'text-gray-300/80 hover:text-white hover:border-b-2 hover:border-purple-400/50 pb-1'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10 bg-white/5 backdrop-blur-xl">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    prefetch={true}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-2.5 rounded-lg transition-all ${
                      isActive 
                        ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white font-semibold border border-purple-400/30' 
                        : 'text-gray-300/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};