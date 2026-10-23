"use client";

import { useRef, useState } from 'react';
import Image from 'next/image';
import { countries } from '@/data/countries';

interface Globe3DProps {
  onCountryClick: (countryId: string) => void;
  selectedCountryId: string;
}

export const Globe3D = ({ onCountryClick, selectedCountryId }: Globe3DProps) => {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Convert lat/lng to percentage for the map background
  const latLngToXY = (lat: number, lng: number) => {
    const x = ((lng + 180) / 360) * 100;
    const y = ((90 - lat) / 180) * 100;
    return { x, y };
  };

  const handleMouseEnter = (id: string, event: React.MouseEvent) => {
    setHoveredCountry(id);
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPos({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
  };

  const handleMouseMove = (id: string, event: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPos({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
  };

  const handleMouseLeave = () => {
    setHoveredCountry(null);
  };

  const hoveredCountryData = countries.find(c => c.id === hoveredCountry);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[600px] rounded-2xl overflow-hidden bg-[#020205] border border-purple-500/20 shadow-[0_0_50px_rgba(139,92,246,0.1)] flex items-center justify-center"
    >
      {/* 1. REAL WORLD MAP BACKGROUND */}
      <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
        <Image 
          src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
          alt="World Map"
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      {/* 2. GRID & DOTS OVERLAY */}
      <div className="relative w-full max-w-[900px] aspect-[2/1]">
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)', 
               backgroundSize: '10% 10%' 
             }} 
        />

        {/* Country Hotspots */}
        {countries.map((country) => {
          const pos = latLngToXY(country.coordinates.lat, country.coordinates.lng);
          const isHovered = hoveredCountry === country.id;
          const isSelected = selectedCountryId === country.id;

          return (
            <div
              key={country.id}
              className="absolute cursor-pointer group"
              style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: 'translate(-50%, -50%)' }}
              onMouseEnter={(e) => handleMouseEnter(country.id, e)}
              onMouseMove={(e) => handleMouseMove(country.id, e)}
              onMouseLeave={handleMouseLeave}
              onClick={() => onCountryClick(country.id)}
            >
              {/* Glowing Halo */}
              <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                isHovered || isSelected 
                  ? 'scale-[3] bg-purple-500/40 blur-md animate-pulse' 
                  : 'scale-100 bg-transparent'
              }`} />

              {/* Core Dot */}
              <div className={`relative z-10 w-3 h-3 rounded-full border-2 border-white shadow-lg transition-all duration-300 flex items-center justify-center ${
                isSelected 
                  ? 'bg-pink-500 shadow-pink-500/50' 
                  : isHovered
                    ? 'bg-purple-400 shadow-purple-500/50 scale-125'
                    : 'bg-purple-600 hover:bg-purple-400'
              }`} />

              {/* Ping Ring for Selected */}
              {isSelected && (
                <div className="absolute inset-0 rounded-full border-2 border-pink-500 animate-ping opacity-75" />
              )}
            </div>
          );
        })}
      </div>

      {/* 3. TOOLTIP */}
      {hoveredCountryData && (
        <div 
          className="absolute pointer-events-none z-50 px-4 py-2 bg-black/90 backdrop-blur-md border border-purple-500/50 rounded-xl shadow-2xl text-sm text-white font-bold whitespace-nowrap flex items-center gap-2 transform -translate-x-1/2 -translate-y-[150%] transition-all duration-75 ease-out"
          style={{ left: tooltipPos.x, top: tooltipPos.y }}
        >
          <span className="text-xl">{hoveredCountryData.flag}</span>
          {hoveredCountryData.name}
        </div>
      )}

      {/* 4. CONTROLS NOTE */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 pointer-events-none z-10">
        <span className="text-[11px] font-medium text-gray-400 flex items-center gap-2 uppercase tracking-wider">
          <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
          Hover over a dot to explore
        </span>
      </div>
    </div>
  );
};