"use client";

import { useState, useRef } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from 'react-simple-maps';
import { countries } from '@/data/countries';

interface Globe3DProps {
  onCountryClick: (countryId: string) => void;
  selectedCountryId: string;
}

// ✅ Reliable TopoJSON URL
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export const Globe3D = ({ onCountryClick, selectedCountryId }: Globe3DProps) => {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (geoName: string, event: React.MouseEvent) => {
    const countryData = countries.find(c => c.name === geoName || geoName.includes(c.name) || c.name.includes(geoName));
    if (countryData) {
      setHoveredCountry(countryData.id);
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setTooltipPos({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
    }
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (containerRef.current && hoveredCountry) {
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

  const handleClick = (geoName: string) => {
    const countryData = countries.find(c => c.name === geoName || geoName.includes(c.name) || c.name.includes(geoName));
    if (countryData) {
      onCountryClick(countryData.id);
    }
  };

  const getFillColor = (countryId: string) => {
    const country = countries.find(c => c.id === countryId);
    if (!country) return "#1e1e2f"; 
    
    switch (country.level) {
      case 'Comprehensive': return "#4c1d95"; 
      case 'Substantial': return "#7c3aed"; 
      case 'Moderate': return "#a855f7"; 
      case 'Limited': return "#d8b4fe"; 
      case 'None': return "#2d2d3d"; 
      default: return "#2d2d3d";
    }
  };

  const hoveredCountryData = countries.find(c => c.id === hoveredCountry);

  return (
    <div 
      ref={containerRef} 
      // ✅ FIX: Using h-full to fill the parent container perfectly
      className="relative w-full h-full rounded-2xl overflow-hidden bg-[#050510] border border-white/10 shadow-2xl flex flex-col"
      onMouseMove={handleMouseMove}
    >
      
      {/* ===== MAP AREA ===== */}
      <div className="flex-1 w-full flex items-center justify-center">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 100, // ✅ ZOOM OUT: Reduced from 110 to 100
            center: [0, 25] 
          }}
          className="w-full h-full outline-none"
        >
          <ZoomableGroup center={[0, 25]} zoom={1}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const geoName = geo.properties.name || "";
                  const countryData = countries.find(c => c.name === geoName || geoName.includes(c.name) || c.name.includes(geoName));
                  
                  const countryId = countryData?.id;

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={(e) => handleMouseEnter(geoName, e)}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleClick(geoName)}
                      fill={countryId ? getFillColor(countryId) : "#1a1a2e"}
                      stroke="#050510"
                      strokeWidth={0.5}
                      className={`outline-none transition-opacity duration-200 ${selectedCountryId === countryId ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>

      {/* ===== LEGEND ===== */}
      {/* ✅ FIX: Absolute positioned at bottom so it NEVER gets cut off */}
      <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-black/70 backdrop-blur-md border-t border-white/10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 z-10">
        {[
          { label: 'Comprehensive', color: '#4c1d95' },
          { label: 'Substantial', color: '#7c3aed' },
          { label: 'Moderate', color: '#a855f7' },
          { label: 'Limited', color: '#d8b4fe' },
          { label: 'None', color: '#2d2d3d' }
        ].map((level) => (
          <div key={level.label} className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: level.color }} />
            <span className="text-[10px] md:text-xs font-medium text-gray-300 uppercase tracking-wider">{level.label}</span>
          </div>
        ))}
      </div>

      {/* ===== TOOLTIP ===== */}
      {hoveredCountryData && (
        <div 
          className="absolute pointer-events-none z-50 px-3 py-1.5 bg-black/90 backdrop-blur-md border border-pink-500/50 rounded-lg shadow-2xl text-xs text-white font-bold whitespace-nowrap flex items-center gap-2 transform -translate-x-1/2 -translate-y-[150%] transition-all duration-75 ease-out"
          style={{ left: tooltipPos.x, top: tooltipPos.y }}
        >
          <span className="text-lg">{hoveredCountryData.flag}</span>
          <div>
            <div>{hoveredCountryData.name}</div>
            <div className="text-[9px] text-pink-300 font-normal uppercase tracking-wider">{hoveredCountryData.level}</div>
          </div>
        </div>
      )}
      
    </div>
  );
};
