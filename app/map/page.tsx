"use client";

import { useState, useEffect, lazy, Suspense } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, Search, Filter, X, Globe as GlobeIcon,
  ChevronDown, MapPin, Loader2
} from 'lucide-react';
import { countries, getRegions, getLevels, getCountryById } from '@/data/countries';

// ===== LAZY LOAD =====
const Globe3D = lazy(() => import('@/components/map/Globe3D').then(mod => ({ default: mod.Globe3D })));
const CountryDetail = lazy(() => import('@/components/map/CountryDetail').then(mod => ({ default: mod.CountryDetail })));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-[600px]">
    <div className="flex flex-col items-center gap-4">
      <Loader2 className="w-12 h-12 text-purple-400 animate-spin" />
      <span className="text-gray-400">Loading galaxy map...</span>
    </div>
  </div>
);

export default function MapPage() {
  // ===== ALL HOOKS AT TOP =====
  const [selectedCountryId, setSelectedCountryId] = useState('india');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [stars, setStars] = useState<React.ReactNode[]>([]);

  // ===== GENERATE STARS =====
  useEffect(() => {
    const starElements = [];
    for (let i = 0; i < 50; i++) {
      starElements.push(
        <div
          key={i}
          className="absolute w-0.5 h-0.5 bg-white rounded-full animate-twinkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.5 + 0.1,
          }}
        />
      );
    }
    setStars(starElements);
  }, []);

  const selectedCountry = getCountryById(selectedCountryId);

  const filteredCountries = countries.filter(country => {
    const matchesSearch = country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          country.lawName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = selectedRegion === 'All' || country.region === selectedRegion;
    const matchesLevel = selectedLevel === 'All' || country.level === selectedLevel;
    return matchesSearch && matchesRegion && matchesLevel;
  });

  // ===== ALL useEffects TOGETHER =====
  useEffect(() => {
    setIsMounted(true);
    import('@/components/map/Globe3D');
  }, []);

  useEffect(() => {
    if (filteredCountries.length > 0) {
      const stillExists = filteredCountries.some(c => c.id === selectedCountryId);
      if (!stillExists) {
        setSelectedCountryId(filteredCountries[0].id);
      }
    }
  }, [filteredCountries, selectedCountryId]);

  // ===== EARLY RETURN AFTER ALL HOOKS =====
  if (!isMounted) return null;

  const regions = ['All', ...getRegions()];
  const levels = ['All', ...getLevels()];

  const levelColors: Record<string, string> = {
    Comprehensive: 'text-green-400',
    Substantial: 'text-blue-400',
    Moderate: 'text-yellow-400',
    Limited: 'text-orange-400',
    None: 'text-red-400',
  };

  const levelEmojis: Record<string, string> = {
    Comprehensive: '🟢',
    Substantial: '🔵',
    Moderate: '🟡',
    Limited: '🟠',
    None: '🔴',
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedRegion('All');
    setSelectedLevel('All');
  };

  const hasActiveFilters = searchQuery || selectedRegion !== 'All' || selectedLevel !== 'All';

  return (
    <main className="min-h-screen text-white px-4 pb-8 relative overflow-hidden mt-24 md:mt-28 lg:mt-32">
      {/* ===== BACKGROUND IMAGE (Home Page Jaisi) ===== */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/home1.jpeg')" }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
        {stars}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-2 group"
              prefetch={true}
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3 drop-shadow-2xl">
              <GlobeIcon className="w-8 h-8 text-white" />
              Data Protection Galaxy Map
            </h1>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            {countries.length} Countries
          </div>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search countries or laws..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-11 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50 transition-all"
            />
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-3.5 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="hidden md:flex gap-2">
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm text-white text-sm focus:outline-none focus:border-blue-400/50 appearance-none cursor-pointer hover:bg-white/20 transition-all"
            >
              {regions.map(r => (
                <option key={r} value={r} className="bg-black">{r === 'All' ? 'All Regions' : r}</option>
              ))}
            </select>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm text-white text-sm focus:outline-none focus:border-blue-400/50 appearance-none cursor-pointer hover:bg-white/20 transition-all"
            >
              {levels.map(l => (
                <option key={l} value={l} className="bg-black">{l === 'All' ? 'All Levels' : l}</option>
              ))}
            </select>
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm text-gray-400 hover:text-white hover:bg-white/20 transition-all text-sm"
              >
                Reset
              </button>
            )}
          </div>

          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="md:hidden flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm text-white"
          >
            <Filter className="w-4 h-4" />
            Filters
            {hasActiveFilters && (
              <span className="w-2 h-2 bg-blue-400 rounded-full" />
            )}
            <ChevronDown className={`w-4 h-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Mobile Filters */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden mb-4"
            >
              <div className="p-4 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm space-y-3">
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm text-white text-sm focus:outline-none focus:border-blue-400/50 appearance-none"
                >
                  {regions.map(r => (
                    <option key={r} value={r} className="bg-black">{r === 'All' ? 'All Regions' : r}</option>
                  ))}
                </select>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm text-white text-sm focus:outline-none focus:border-blue-400/50 appearance-none"
                >
                  {levels.map(l => (
                    <option key={l} value={l} className="bg-black">{l === 'All' ? 'All Levels' : l}</option>
                  ))}
                </select>
                {hasActiveFilters && (
                  <button
                    onClick={resetFilters}
                    className="w-full px-4 py-2 rounded-xl bg-white/20 text-white text-sm hover:bg-white/30 transition-all"
                  >
                    Reset Filters
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Layout: Globe + Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="relative">
            <Suspense fallback={<LoadingSpinner />}>
              <Globe3D 
                onCountryClick={(id) => setSelectedCountryId(id)}
                selectedCountryId={selectedCountryId}
              />
            </Suspense>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6 max-h-[600px] overflow-y-auto">
            <Suspense fallback={<div className="flex items-center justify-center h-full"><Loader2 className="w-8 h-8 text-purple-400 animate-spin" /></div>}>
              <CountryDetail country={selectedCountry || null} />
            </Suspense>
          </div>
        </div>

        {/* Country List */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2 drop-shadow-md">
              <MapPin className="w-5 h-5 text-purple-400" />
              All Countries
              <span className="text-sm font-normal text-gray-400">({filteredCountries.length})</span>
            </h2>
            {filteredCountries.length !== countries.length && (
              <button
                onClick={resetFilters}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Show all
              </button>
            )}
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
            {filteredCountries.map((country) => (
              <button
                key={country.id}
                onClick={() => setSelectedCountryId(country.id)}
                className={`p-3 rounded-xl text-center transition-all ${
                  selectedCountryId === country.id
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-purple-500/30 shadow-lg shadow-purple-500/10'
                    : 'bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 hover:border-white/30'
                }`}
              >
                <div className="text-2xl mb-0.5">{country.flag}</div>
                <div className="text-xs font-medium text-white truncate">{country.name}</div>
                <div className="text-[10px] text-gray-400 truncate">{country.lawName.split('(')[0].trim()}</div>
                <div className={`text-[10px] mt-0.5 ${levelColors[country.level] || 'text-gray-400'}`}>
                  {levelEmojis[country.level] || '•'} {country.level}
                </div>
              </button>
            ))}
          </div>

          {filteredCountries.length === 0 && (
            <div className="text-center py-12">
              <div className="text-4xl mb-3">🔭</div>
              <p className="text-gray-400">No countries found matching your filters</p>
              <button
                onClick={resetFilters}
                className="mt-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm hover:bg-white/20 transition-all"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}