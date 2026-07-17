"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { 
  ArrowLeft, Users, Shield, Database, Building, 
  AlertTriangle, Globe, BookOpen, FileText, 
  Sparkles, ChevronRight, Calendar, Clock, 
  Search, Filter, X, MapPin, Orbit, Satellite 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ===== PLANET DATA (same) =====
const planets = [
  { 
    id: 'rights', 
    name: 'Rights of Data Principals', 
    icon: Users, 
    path: '/rights',
    color: 'from-blue-400 to-blue-600',
    bgColor: 'bg-blue-500/20',
    borderColor: 'border-blue-500/30',
    description: 'Empowering individuals to control their personal data',
    category: 'Data Rights',
    date: '15 Jul 2026',
    readTime: '5 min read',
    tags: ['Data Rights', 'Privacy'],
    gradient: 'from-blue-500/20 to-blue-600/10',
    author: 'Dr. Ananya Sharma',
    excerpt: 'Understanding the fundamental rights of individuals under the DPDP Act 2023...'
  },
  { 
    id: 'obligations', 
    name: 'Obligations of Data Fiduciaries', 
    icon: Shield, 
    path: '/obligations',
    color: 'from-purple-400 to-purple-600',
    bgColor: 'bg-purple-500/20',
    borderColor: 'border-purple-500/30',
    description: 'Responsible for ensuring compliance with the Act',
    category: 'Compliance',
    date: '14 Jul 2026',
    readTime: '7 min read',
    tags: ['Compliance', 'Fiduciaries'],
    gradient: 'from-purple-500/20 to-purple-600/10',
    author: 'Adv. Rajesh Kumar',
    excerpt: 'Key obligations and responsibilities of data fiduciaries...'
  },
  { 
    id: 'lawful-processing', 
    name: 'Lawful Processing of Data', 
    icon: Database, 
    path: '/lawful-processing',
    color: 'from-green-400 to-green-600',
    bgColor: 'bg-green-500/20',
    borderColor: 'border-green-500/30',
    description: 'Conditions under which data can be processed',
    category: 'Data Processing',
    date: '13 Jul 2026',
    readTime: '6 min read',
    tags: ['Data Processing', 'Consent'],
    gradient: 'from-green-500/20 to-green-600/10',
    author: 'Prof. Meera Patel',
    excerpt: 'Exploring the lawful bases for data processing under the Act...'
  },
  { 
    id: 'board', 
    name: 'Data Protection Board', 
    icon: Building, 
    path: '/board',
    color: 'from-yellow-400 to-yellow-600',
    bgColor: 'bg-yellow-500/20',
    borderColor: 'border-yellow-500/30',
    description: 'The regulatory authority to enforce the Act',
    category: 'Regulatory',
    date: '12 Jul 2026',
    readTime: '4 min read',
    tags: ['Regulatory', 'Board'],
    gradient: 'from-yellow-500/20 to-yellow-600/10',
    author: 'Dr. Vikram Singh',
    excerpt: 'Structure and functions of the Data Protection Board...'
  },
  { 
    id: 'penalties', 
    name: 'Penalties & Offences', 
    icon: AlertTriangle, 
    path: '/penalties',
    color: 'from-red-400 to-red-600',
    bgColor: 'bg-red-500/20',
    borderColor: 'border-red-500/30',
    description: 'Non-compliance can lead to significant penalties',
    category: 'Enforcement',
    date: '11 Jul 2026',
    readTime: '8 min read',
    tags: ['Penalties', 'Offences'],
    gradient: 'from-red-500/20 to-red-600/10',
    author: 'Adv. Priya Mehta',
    excerpt: 'Understanding penalties and offences under the DPDP Act...'
  },
  { 
    id: 'cross-border', 
    name: 'Cross Border Transfer', 
    icon: Globe, 
    path: '/cross-border',
    color: 'from-cyan-400 to-cyan-600',
    bgColor: 'bg-cyan-500/20',
    borderColor: 'border-cyan-500/30',
    description: 'Transfer of personal data under lawful conditions',
    category: 'Global Compliance',
    date: '10 Jul 2026',
    readTime: '6 min read',
    tags: ['Data Transfer', 'Global'],
    gradient: 'from-cyan-500/20 to-cyan-600/10',
    author: 'Dr. Arun Nair',
    excerpt: 'Cross-border data transfer mechanisms and compliance...'
  },
  { 
    id: 'resources', 
    name: 'Resources', 
    icon: BookOpen, 
    path: '/resources',
    color: 'from-indigo-400 to-indigo-600',
    bgColor: 'bg-indigo-500/20',
    borderColor: 'border-indigo-500/30',
    description: 'Guidelines, forms, case studies & more',
    category: 'Resources',
    date: '9 Jul 2026',
    readTime: '3 min read',
    tags: ['Resources', 'Guidelines'],
    gradient: 'from-indigo-500/20 to-indigo-600/10',
    author: 'Team Legal Galaxy',
    excerpt: 'Essential resources for data protection compliance...'
  },
  { 
    id: 'provisions', 
    name: 'Key Provisions Overview', 
    icon: FileText, 
    path: '/provisions',
    color: 'from-pink-400 to-pink-600',
    bgColor: 'bg-pink-500/20',
    borderColor: 'border-pink-500/30',
    description: 'Important sections of the Act at a glance',
    category: 'Overview',
    date: '8 Jul 2026',
    readTime: '10 min read',
    tags: ['Provisions', 'Overview'],
    gradient: 'from-pink-500/20 to-pink-600/10',
    author: 'Adv. Suman Gupta',
    excerpt: 'Complete overview of all key provisions of the Act...'
  },
];

// ===== CATEGORIES =====
const categories = [
  "All",
  "Data Rights",
  "Compliance",
  "Data Processing",
  "Regulatory",
  "Enforcement",
  "Global Compliance",
  "Resources",
  "Overview"
];

export default function Galaxy() {
  const router = useRouter();
  const [hoveredPlanet, setHoveredPlanet] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredPlanets = planets.filter(planet => {
    const matchesSearch = planet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          planet.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          planet.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          planet.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || 
                           planet.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const uniqueCategories = ["All", ...new Set(planets.map(p => p.category))];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen text-white px-4 relative overflow-hidden pt-28 md:pt-32">
      {/* ===== BACKGROUND (same) ===== */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/images/galaxy-map-bg.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />
        
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={`grid-h-${i}`}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
              style={{ top: `${i * 5}%` }}
            />
          ))}
          {[...Array(20)].map((_, i) => (
            <div
              key={`grid-v-${i}`}
              className="absolute h-full w-px bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"
              style={{ left: `${i * 5}%` }}
            />
          ))}
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
        
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {[...Array(30)].map((_, i) => {
            const x1 = Math.random() * 100;
            const y1 = Math.random() * 100;
            const x2 = Math.random() * 100;
            const y2 = Math.random() * 100;
            return (
              <line
                key={`line-${i}`}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="#8B5CF6"
                strokeWidth="0.5"
                opacity="0.3"
              />
            );
          })}
        </svg>
        
        {[...Array(150)].map((_, i) => {
          const size = Math.random() * 3 + 1;
          const duration = Math.random() * 4 + 2;
          return (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              animate={{
                opacity: [0.1, 0.8, 0.1],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: duration,
                delay: Math.random() * 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
              }}
            />
          );
        })}

        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`shooting-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_10px_#fff]"
            animate={{
              x: [0, 400, 800],
              y: [0, 150, 300],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 5 + 2,
              repeat: Infinity,
              repeatDelay: 8,
              ease: "linear",
            }}
            style={{
              top: `${20 + i * 25}%`,
              left: `${-50 + i * 20}%`,
            }}
          />
        ))}
      </div>

      {/* ===== CONTENT ===== */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 flex items-center justify-center gap-4">
              <Orbit className="w-12 h-12 text-purple-400" />
              Explore the Universe
              <Satellite className="w-12 h-12 text-blue-400" />
            </h1>
          </motion.div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Navigate through the galaxy of data protection — each planet holds essential knowledge
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 mb-8"
        >
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search planets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-3 pl-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50 transition-all"
            />
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-3.5 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          
          <div className="hidden md:flex gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/30'
                    : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="md:hidden flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-white"
          >
            <Filter className="w-5 h-5" />
            Filter
            <span className="text-xs text-gray-400">({selectedCategory})</span>
          </button>
        </motion.div>

        {/* Mobile Filter Dropdown */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mb-4 overflow-hidden"
            >
              <div className="flex flex-wrap gap-2 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                {uniqueCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsFilterOpen(false);
                    }}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                        : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Count */}
        <div className="text-sm text-gray-400 mb-6">
          Showing {filteredPlanets.length} of {planets.length} planets
        </div>

        {/* ===== PLANETS GRID — NO FLOATING ===== */}
        <motion.div 
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
        >
          <AnimatePresence mode="popLayout">
            {filteredPlanets.map((planet, index) => {
              const Icon = planet.icon;
              const isHovered = hoveredPlanet === planet.id;
              
              return (
                <motion.div
                  key={planet.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative cursor-pointer"
                  onMouseEnter={() => setHoveredPlanet(planet.id)}
                  onMouseLeave={() => setHoveredPlanet(null)}
                  onClick={() => router.push(planet.path)}
                >
                  {/* ===== DIRECT CARD — NO FLOATING WRAPPER ===== */}
                  <div className={`relative p-6 rounded-2xl bg-white/5 border ${planet.borderColor} backdrop-blur-sm hover:bg-white/10 transition-all duration-500 ${
                    isHovered ? 'shadow-2xl shadow-purple-500/20 scale-105' : ''
                  }`}>
                    {/* Card Glow */}
                    <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${planet.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
                    
                    {/* Category Tag */}
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${planet.bgColor} ${planet.borderColor} border mb-3 relative z-10`}>
                      {planet.category}
                    </div>
                    
                    {/* Planet Icon */}
                    <motion.div 
                      className={`w-14 h-14 rounded-full bg-gradient-to-br ${planet.color} flex items-center justify-center mb-4 shadow-lg shadow-purple-500/20 relative z-10`}
                      animate={{
                        scale: isHovered ? 1.15 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                    
                    {/* Title */}
                    <h3 className={`text-lg font-semibold text-white transition-all duration-300 mb-2 relative z-10 ${
                      isHovered ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent' : ''
                    }`}>
                      {planet.name}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-sm text-gray-400 line-clamp-2 mb-3 relative z-10">
                      {planet.excerpt}
                    </p>
                    
                    {/* Author & Date */}
                    <div className="flex items-center justify-between text-xs text-gray-500 relative z-10">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {planet.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {planet.readTime}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1 relative z-10">
                      By {planet.author}
                    </div>
                    
                    {/* Tags */}
                    <div className="flex gap-2 mt-3 flex-wrap relative z-10">
                      {planet.tags.map((tag) => (
                        <span 
                          key={tag}
                          className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${planet.bgColor} ${planet.borderColor} border`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Explore Badge */}
                    <motion.div 
                      className={`absolute bottom-4 right-4 transition-all duration-500 z-20 ${
                        isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                      }`}
                    >
                      <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-medium flex items-center gap-1">
                        Explore <ChevronRight className="w-3 h-3" />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredPlanets.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="text-6xl mb-4"
            >
              🪐
            </motion.div>
            <h3 className="text-2xl font-semibold text-gray-300">No planets found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search or filter</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-4 px-6 py-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all"
            >
              Reset filters
            </button>
          </motion.div>
        )}

        {/* Back to Home */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors hover:scale-105 transform duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </main>
  );
}