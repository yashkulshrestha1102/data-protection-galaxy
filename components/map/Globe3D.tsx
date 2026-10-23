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

// ✅ Reliable TopoJSON URL (High performance & stable)
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
    if (!country) return "#1e1e2f"; // Default dark for non-listed countries
    
    switch (country.level) {
      case 'Comprehensive': return "#4c1d95"; // Deep Purple
      case 'Substantial': return "#7c3aed"; // Purple
      case 'Moderate': return "#a855f7"; // Light Purple
      case 'Limited': return "#d8b4fe"; // Very Light Purple
      case 'None': return "#2d2d3d"; // Dark Gray
      default: return "#2d2d3d";
    }
  };

  const hoveredCountryData = countries.find(c => c.id === hoveredCountry);

  return (
    <div 
      ref={containerRef} 
      // ✅ Fixed Height to fit perfectly in the 600px parent box
      className="relative w-full h-[600px] rounded-2xl overflow-hidden bg-[#050510] border border-white/10 shadow-2xl flex flex-col"
      onMouseMove={handleMouseMove}
    >
      
      {/* ===== MAP AREA ===== */}
      <div className="flex-1 w-full flex items-center justify-center p-2">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 140, // Zoom level adjusted for perfect fit
            center: [0, 30]
          }}
          className="w-full h-full outline-none"
        >
          <ZoomableGroup center={[0, 20]} zoom={1}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  // The jsdelivr topojson uses "name" property for country names
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
  className={`${selectedCountryId === countryId ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
/>
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>

      {/* ===== LEGEND (Color Coding) ===== */}
      <div className="w-full px-6 py-4 border-t border-white/10 bg-black/40 flex flex-wrap items-center justify-center gap-4 md:gap-6 shrink-0">
        {[
          { label: 'Comprehensive', color: '#4c1d95' },
          { label: 'Substantial', color: '#7c3aed' },
          { label: 'Moderate', color: '#a855f7' },
          { label: 'Limited', color: '#d8b4fe' },
          { label: 'None', color: '#2d2d3d' }
        ].map((level) => (
          <div key={level.label} className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: level.color }} />
            <span className="text-[10px] md:text-xs font-medium text-gray-400 uppercase tracking-wider">{level.label}</span>
          </div>
        ))}
      </div>

      {/* ===== TOOLTIP ===== */}
      {hoveredCountryData && (
        <div 
          className="absolute pointer-events-none z-50 px-4 py-2 bg-black/90 backdrop-blur-md border border-pink-500/50 rounded-xl shadow-2xl text-sm text-white font-bold whitespace-nowrap flex items-center gap-2 transform -translate-x-1/2 -translate-y-[150%] transition-all duration-75 ease-out"
          style={{ left: tooltipPos.x, top: tooltipPos.y }}
        >
          <span className="text-xl">{hoveredCountryData.flag}</span>
          <div>
            <div>{hoveredCountryData.name}</div>
            <div className="text-[10px] text-pink-300 font-normal uppercase tracking-wider">{hoveredCountryData.level}</div>
          </div>
        </div>
      )}
      
    </div>
  );
};