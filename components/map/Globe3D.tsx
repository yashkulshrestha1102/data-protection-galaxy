"use client";

import { useEffect, useRef, useState } from 'react';
import { countries } from '@/data/countries';

interface Globe3DProps {
  onCountryClick: (countryId: string) => void;
  selectedCountryId: string;
}

export const Globe3D = ({ onCountryClick, selectedCountryId }: Globe3DProps) => {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Convert lat/lng to X/Y for the SVG map
  const latLngToXY = (lat: number, lng: number) => {
    // Standard Equirectangular projection
    const x = ((lng + 180) / 360) * 1000;
    const y = ((90 - lat) / 180) * 500;
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
      className="relative w-full h-full min-h-[500px] rounded-2xl overflow-hidden bg-[#020205] border border-purple-500/20 shadow-[0_0_50px_rgba(139,92,246,0.1)] flex items-center justify-center"
    >
      
      {/* 2D World Map SVG */}
      <div className="relative w-full max-w-[900px] aspect-[2/1]">
        <svg viewBox="0 0 1000 500" className="w-full h-full drop-shadow-xl">
          {/* Grid Lines */}
          <g stroke="rgba(139, 92, 246, 0.15)" strokeWidth="1">
            {[0, 100, 200, 300, 400, 500].map(y => (
              <line key={`h-${y}`} x1="0" y1={y} x2="1000" y2={y} />
            ))}
            {[0, 125, 250, 375, 500, 625, 750, 875, 1000].map(x => (
              <line key={`v-${x}`} x1={x} y1="0" x2={x} y2="500" />
            ))}
          </g>

          {/* Invisible clickable zones for countries */}
          {countries.map((country) => {
            const pos = latLngToXY(country.coordinates.lat, country.coordinates.lng);
            const isHovered = hoveredCountry === country.id;
            const isSelected = selectedCountryId === country.id;

            return (
              <g 
                key={country.id} 
                className="cursor-pointer"
                onMouseEnter={(e) => handleMouseEnter(country.id, e)}
                onMouseMove={(e) => handleMouseMove(country.id, e)}
                onMouseLeave={handleMouseLeave}
                onClick={() => onCountryClick(country.id)}
              >
                {/* Glowing Halo on Hover/Select */}
                {(isHovered || isSelected) && (
                  <>
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r="20"
                      fill="url(#glowGradient)"
                      className="animate-pulse"
                      opacity="0.6"
                    />
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r="40"
                      fill="url(#glowGradient)"
                      opacity="0.3"
                    />
                  </>
                )}
                
                {/* Core Dot */}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={isHovered || isSelected ? 6 : 4}
                  fill={isHovered || isSelected ? "#EC4899" : "#8B5CF6"}
                  stroke="#fff"
                  strokeWidth="1.5"
                  className="transition-all duration-300"
                />
                
                {/* Ping ring for selected */}
                {isSelected && (
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r="12"
                    fill="none"
                    stroke="#EC4899"
                    strokeWidth="2"
                    className="animate-ping"
                    style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
                  />
                )}
              </g>
            );
          })}

          {/* Gradients */}
          <defs>
            <radialGradient id="glowGradient">
              <stop offset="0%" stopColor="#EC4899" stopOpacity="1" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Tooltip */}
      {hoveredCountryData && (
        <div 
          className="absolute pointer-events-none z-20 px-4 py-2 bg-black/90 backdrop-blur-md border border-purple-500/50 rounded-xl shadow-2xl text-sm text-white font-bold whitespace-nowrap flex items-center gap-2 transform -translate-x-1/2 -translate-y-[150%] transition-all duration-100"
          style={{ left: tooltipPos.x, top: tooltipPos.y }}
        >
          <span className="text-xl">{hoveredCountryData.flag}</span>
          {hoveredCountryData.name}
        </div>
      )}

      {/* Controls Note */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 pointer-events-none">
        <span className="text-[11px] font-medium text-gray-400 flex items-center gap-2 uppercase tracking-wider">
          <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
          Hover over a dot to explore
        </span>
      </div>
    </div>
  );
};