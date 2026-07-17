import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Rocket } from "lucide-react";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/galaxy", label: "Explore" },
  { href: "/provisions", label: "Key Provisions" },
  { href: "/rights", label: "Rights" },
  { href: "/obligations", label: "Obligations" },
  { href: "/penalties", label: "Penalties" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { icon: FaGithub, href: "#" },
  { icon: FaTwitter, href: "#" },
  { icon: FaLinkedin, href: "#" },
  { icon: FaEnvelope, href: "#" },
];

export const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0a1628] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3 flex items-center gap-2">
              <Rocket className="w-5 h-5 text-purple-400" />
              DPA Galaxy
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your interactive guide to understanding the Digital Personal Data Protection Act, 2023.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Connect</h4>
            <div className="flex gap-4 mb-6">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="text-gray-400 hover:text-white transition-all p-3 rounded-full hover:bg-white/10 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-xs text-gray-500 border-t border-white/5 pt-4">
              © 2026 Data Protection Board of India. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};