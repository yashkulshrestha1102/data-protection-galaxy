"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, Search, X, Globe as GlobeIcon,
  MapPin
} from 'lucide-react';
import { countries, getRegions, getLevels, getCountryById } from '@/data/countries';

import { Globe3D } from '@/components/map/Globe3D';
import { CountryDetail } from '@/components/map/CountryDetail';

export default function MapPage() {
  const [selectedCountryId, setSelectedCountryId] = useState('india');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const selectedCountry = getCountryById(selectedCountryId);

  const filteredCountries = countries.filter(country => {
    const matchesSearch = country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          country.lawName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = selectedRegion === 'All' || country.region === selectedRegion;
    const matchesLevel = selectedLevel === 'All' || country.level === selectedLevel;
    return matchesSearch && matchesRegion && matchesLevel;
  });

  useEffect(() => {
    if (filteredCountries.length > 0) {
      const stillExists = filteredCountries.some(c => c.id === selectedCountryId);
      if (!stillExists) setSelectedCountryId(filteredCountries[0].id);
    }
  }, [filteredCountries, selectedCountryId]);

  if (!isMounted) return null;

  const regions = ['All', ...getRegions()];
  const levels = ['All', ...getLevels()];

  const levelColors: Record<string, string> = {
    Comprehensive: 'text-green-400', Substantial: 'text-blue-400',
    Moderate: 'text-yellow-400', Limited: 'text-orange-400', None: 'text-red-400',
  };
  const levelEmojis: Record<string, string> = {
    Comprehensive: '🟢', Substantial: '🔵', Moderate: '🟡', Limited: '🟠', None: '🔴',
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedRegion('All');
    setSelectedLevel('All');
  };

  const hasActiveFilters = searchQuery || selectedRegion !== 'All' || selectedLevel !== 'All';

  return (
    <main className="min-h-screen text-white px-4 pb-12 relative overflow-hidden pt-28 md:pt-32">
      <div className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/home1.jpeg')" }}>
        <div className="absolute inset-0 bg-[#0a0a0a]/90 backdrop-blur-sm" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-2 group text-sm font-medium">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold text-white flex items-center gap-3 drop-shadow-2xl tracking-tight">
              <GlobeIcon className="w-8 h-8 md:w-10 md:h-10 text-purple-500" />
              Global Privacy Map
            </h1>
            <p className="text-gray-400 mt-2 max-w-2xl text-sm md:text-base">
              Explore data protection laws across <strong className="text-white">{countries.length} jurisdictions</strong>. Compare GDPR, DPDP Act 2023, CCPA, and other global frameworks.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs md:text-sm text-gray-300 bg-white/5 px-4 py-2.5 rounded-full border border-white/10 w-fit backdrop-blur-md">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            {countries.length} Jurisdictions Indexed
          </div>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-3 mb-8 bg-white/5 p-2 rounded-2xl border border-white/10 backdrop-blur-md">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search countries, laws, or authorities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-11 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all text-sm"
            />
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-3.5 top-3.5 text-gray-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex gap-2">
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500/50 cursor-pointer w-1/2 md:w-auto"
            >
              {regions.map(r => <option key={r} value={r} className="bg-black">{r === 'All' ? 'All Regions' : r}</option>)}
            </select>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500/50 cursor-pointer w-1/2 md:w-auto"
            >
              {levels.map(l => <option key={l} value={l} className="bg-black">{l === 'All' ? 'All Levels' : l}</option>)}
            </select>
            {hasActiveFilters && (
              <button onClick={resetFilters} className="px-4 py-3 rounded-xl bg-purple-500/20 border border-purple-500/30 text-purple-300 hover:bg-purple-500/30 transition-all text-sm font-medium whitespace-nowrap hidden md:block">
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mb-12 items-stretch">
          
          {/* ✅ Map Container */}
          <div className="xl:col-span-7 relative w-full h-[500px] xl:h-[75vh] min-h-[500px] bg-black/40 rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex flex-col">
            <Globe3D 
              onCountryClick={(id) => setSelectedCountryId(id)}
              selectedCountryId={selectedCountryId}
            />
          </div>

          {/* ✅ Country Detail Container */}
          <div className="xl:col-span-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl h-[600px] xl:h-[75vh] shadow-2xl relative flex flex-col overflow-hidden">
            {/* Padding bottom (pb-24) ensures buttons don't hide behind scroll end */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-5 md:p-6 pb-24">
              <CountryDetail country={selectedCountry || null} />
            </div>
          </div>
          
        </div>

        {/* Country Grid */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <MapPin className="w-5 h-5 text-purple-400" />
              Browse Jurisdictions
              <span className="text-xs font-normal text-purple-300 bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20 ml-2">
                {filteredCountries.length} Results
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {filteredCountries.map((country) => (
              <button
                key={country.id}
                onClick={() => setSelectedCountryId(country.id)}
                className={`p-3 rounded-xl text-center transition-all border ${
                  selectedCountryId === country.id
                    ? 'bg-purple-500/20 border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.3)] scale-[1.02]'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <div className="text-2xl mb-1">{country.flag}</div>
                <div className="text-xs font-bold text-white truncate">{country.name}</div>
                <div className="text-[10px] text-gray-400 truncate mb-1">{country.lawName.split('(')[0].trim()}</div>
                <div className={`text-[10px] font-semibold ${levelColors[country.level] || 'text-gray-400'}`}>
                  {levelEmojis[country.level] || '•'} {country.level}
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>


            {/* ✅ HIDDEN SEO CONTENT - For Search Engine Bots */}
        <section className="sr-only" aria-hidden="true">
          <h2>Global Data Protection and Privacy Laws Directory</h2>
          <p>
            The Global Data Protection Laws Map by Legal Galaxy is a comprehensive directory of privacy regulations across {countries.length}+ countries. 
            This interactive map allows compliance professionals, Data Protection Officers (DPOs), and businesses to explore jurisdiction-specific laws, compare 
            data protection authorities, and understand cross-border data transfer requirements.
          </p>
          <p>
            We cover major frameworks including the General Data Protection Regulation (GDPR) in the European Union, the Digital Personal Data Protection Act (DPDP Act 2023) in India, 
            the California Consumer Privacy Act (CCPA) in the United States, the Lei Geral de Proteção de Dados (LGPD) in Brazil, and the Personal Information Protection Law (PIPL) in China.
          </p>
          
          <h3>Complete List of Jurisdictions and Data Protection Authorities</h3>
          <ul>
            {countries.map((c) => (
              <li key={c.id}>
                <Link href={`/country/${c.id}`} title={`${c.name} Data Protection Law`}>
                  {c.name}
                </Link> 
                {' '}- {c.lawName} - Enforced by {c.authority} - Region: {c.region} - Protection Level: {c.level}
              </li>
            ))}
          </ul>
        </section>



    </main>
  );
}