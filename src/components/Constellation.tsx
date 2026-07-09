import React, { useState, useEffect } from "react";
import { MilestoneHub } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Compass, MapPin, Layers, Globe, Calendar } from "lucide-react";

interface ConstellationProps {
  hubs: MilestoneHub[];
  selectedHub: MilestoneHub;
  onSelectHub: (hub: MilestoneHub) => void;
  autoPlay: boolean;
  onReadMore?: () => void;
}

export const Constellation: React.FC<ConstellationProps> = ({
  hubs,
  selectedHub,
  onSelectHub,
  autoPlay,
  onReadMore,
}) => {
  const activeIndex = hubs.findIndex((h) => h.id === selectedHub.id);
  const [hoveredMoon, setHoveredMoon] = useState<string | null>(null);

  // Moons dictionary aligned with Amazon's milestone themes
  const MOONS_DATA: Record<string, { name: string; subtitle: string; desc: string; class: string }[]> = {
    earth: [
      { name: "First Book", subtitle: "1995 Milestone", desc: "Sold Hofstadter's textbook, starting the digital retail era.", class: "moon" }
    ],
    mars: [
      { name: "Door Desk", subtitle: "Frugality", desc: "$15 doors transformed into workstations.", class: "phoebos" },
      { name: "Bellevue", subtitle: "Garage origin", desc: "The first three workstations built by hand.", class: "deimos" }
    ],
    jupiter: [
      { name: "Two-Pizza", subtitle: "Agile Teams", desc: "Teams must remain small enough to be fed by two pizzas.", class: "lo" },
      { name: "Decoupled", subtitle: "Microservices", desc: "Broke down monolithic architecture into decoupled APIs.", class: "europa" },
      { name: "PacMed Peak", subtitle: "Scale-Up", desc: "Migrating core databases to handle hypergrowth.", class: "ganymede" }
    ],
    saturn: [
      { name: "Fiona Lab", subtitle: "E-Ink R&D", desc: "The highly secret device research project.", class: "titan" },
      { name: "Kindle Core", subtitle: "E-Readers", desc: "Putting 100,000 titles into a single palm.", class: "dione" },
      { name: "AWS EC2", subtitle: "Cloud Birth", desc: "Constructing S3 and EC2 virtual server blocks.", class: "enceladus" }
    ],
    uranus: [
      { name: "Living Wall", subtitle: "Biophilia", desc: "40,000 tropical forest plants to boost inspiration.", class: "miranda" },
      { name: "Alexa R&D", subtitle: "Far-Field", desc: "Constructing advanced smart speaker array sensors.", class: "ariel" },
      { name: "Day 1 Nest", subtitle: "Core Creed", desc: "Boardrooms suspended inside the glass sphere canopy.", class: "umbriel" }
    ],
    neptune: [
      { name: "Shinkansen", subtitle: "Bullet Sync", desc: "Hyper-fast delivery synchronized with express trains.", class: "triton" },
      { name: "Tatami Zen", subtitle: "Calm Space", desc: "Moss gardens and straw mats inside tech offices.", class: "proteus" },
      { name: "Meguro Hub", subtitle: "APAC Core", desc: "High-frequency localized routing engines.", class: "nereid" }
    ]
  };

  return (
    <div 
      className="relative w-full h-[540px] md:h-[640px] bg-[#020205] rounded-3xl overflow-hidden border border-gray-900/80 shadow-[inset_0_0_80px_rgba(0,0,0,0.95)] flex flex-col justify-between"
      style={{ perspective: "1500px" }}
    >
      {/* Immersive Deep Space Stars & Nebula Overlays */}
      <div className="absolute inset-0 space-bg opacity-45 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/85 pointer-events-none" />

      {/* Atmospheric Top Compass Hud */}
      <div className="p-4 flex justify-between items-center z-30 pointer-events-none">
        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4 text-amber-500/80 animate-spin-slow" />
          <span className="text-[9px] font-mono tracking-[4px] text-gray-400 uppercase">
            3D PERSPECTIVE HORIZON VIEW
          </span>
        </div>
        <div className="p-1 px-2.5 rounded bg-black/60 border border-gray-800 text-[8px] font-mono tracking-widest text-amber-500 uppercase">
          {selectedHub.planetClass.toUpperCase()} ORBITAL RANGE
        </div>
      </div>

      {/* 
         THE 3D SOLAR VIEWPORT
         Replicates Jamie Coulter's legendary CSS perspective environment.
      */}
      <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center">
        <div className="solar">
          {hubs.map((hub, index) => {
            const planetIdx = index;
            const distance = planetIdx - activeIndex;
            const isSelected = distance === 0;

            // Compute exact 3D tunnel translations based on Jamie's math!
            // When chosen, translateZ is 0. Ones behind have negative, ones in front have positive (which zoom past).
            const translateZ = distance * -2300;
            
            // Fades out planets that are too far behind or ahead
            const opacity = isSelected 
              ? 1 
              : distance === 1 
              ? 0.9 
              : distance === -1 
              ? 0.1 
              : 0;

            const pointerEvents = isSelected ? "auto" : "none";

            // Grab appropriate moons for this planet
            const moons = MOONS_DATA[hub.planetClass] || [];

            return (
              <div 
                key={hub.id}
                className="solar_systm"
                style={{
                  transform: `translate3d(0, 0, ${translateZ}px)`,
                  opacity: opacity,
                  pointerEvents: pointerEvents,
                  transition: "transform 2.2s cubic-bezier(0.25, 1, 0.3, 1), opacity 1.8s ease-in-out",
                  zIndex: isSelected ? 10 : 10 - Math.abs(distance)
                }}
              >
                {/* 
                   THE PLANET BODY
                   Combines the custom texture background with multiple overlay glows.
                */}
                <div className={`planet ${hub.planetClass}`}>
                  <div className="overlay" />

                  {/* Render Orbit Trajectories & Moons */}
                  {moons.map((moon, mIdx) => (
                    <React.Fragment key={`moon-${hub.id}-${mIdx}`}>
                      {/* Orbit Line */}
                      <div className={`trajectory ${moon.class === "moon" ? "m" : moon.class === "phoebos" ? "p" : moon.class === "deimos" ? "d" : moon.class === "lo" ? "lop" : moon.class === "europa" ? "eu" : "ga"}`} />

                      {/* Floating Orbiting Moon Element */}
                      <div 
                        className={`moon ${moon.class} group/moon cursor-pointer`}
                        onMouseEnter={() => setHoveredMoon(`${hub.id}-${mIdx}`)}
                        onMouseLeave={() => setHoveredMoon(null)}
                      >
                        <div className="w-5 h-5 rounded-full bg-slate-400/90 shadow-[inset_0_-4px_6px_black] group-hover/moon:scale-125 transition-transform duration-300" />
                        
                        {/* Moon Labels */}
                        <h3>{moon.subtitle}</h3>
                        <h2>{moon.name}</h2>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 
         CENTER NARRATIVE TYPOGRAPHY LAYER
         Floating cleanly above the planetary horizon.
      */}
      <div className="w-full flex flex-col items-center justify-center text-center z-20 px-4 md:px-8 mb-16 pointer-events-none">
        <motion.div
          key={`narrative-${selectedHub.id}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center"
        >
          {/* Chapter / Location Meta */}
          <span className="text-[10px] md:text-xs font-mono tracking-[4px] text-amber-500 uppercase drop-shadow-md">
            AMAZON CORRIDOR // NODE {activeIndex + 1}
          </span>
          
          {/* Realistic Building Title */}
          <h1 className="text-3xl md:text-5xl font-montserrat font-bold tracking-[3px] uppercase text-white mt-2 max-w-2xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            {selectedHub.name}
          </h1>

          {/* Location & Year Subtitle */}
          <div className="mt-2.5 flex items-center gap-2 text-[10px] md:text-xs font-mono text-gray-400 tracking-wider uppercase drop-shadow">
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            <span>{selectedHub.location}, {selectedHub.country}</span>
            <span className="text-gray-600">•</span>
            <Calendar className="w-3.5 h-3.5 text-amber-500" />
            <span>EST. {selectedHub.year}</span>
          </div>

          {/* Brief Abstract */}
          <p className="text-[11px] md:text-xs font-mono tracking-widest text-gray-300 uppercase mt-4 max-w-xl leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            {selectedHub.brief}
          </p>

          {/* Trigger button - Enable pointer events specifically */}
          <button
            id="btn-horizon-read-more"
            onClick={onReadMore}
            className="mt-6 px-7 py-2.5 rounded-full border border-amber-500/40 hover:border-amber-500 bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-black font-montserrat font-bold text-[10px] tracking-[2px] uppercase transition-all duration-300 shadow-lg shadow-amber-500/5 cursor-pointer pointer-events-auto"
          >
            EXPLORE DETAILS & ARCHITECTURE
          </button>
        </motion.div>
      </div>

      {/* Floating HUD Tooltip for hovered Moons */}
      <div className="absolute top-[110px] left-1/2 -translate-x-1/2 z-30 w-[90%] max-w-[380px] pointer-events-none">
        <AnimatePresence mode="wait">
          {hoveredMoon ? (() => {
            const [hubId, mIdxStr] = hoveredMoon.split("-");
            const mIdx = parseInt(mIdxStr, 10);
            const hub = hubs.find((h) => h.id === hubId);
            const moon = MOONS_DATA[hub?.planetClass || ""]?.[mIdx];

            if (!moon) return null;

            return (
              <motion.div
                key={hoveredMoon}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="w-full bg-black/95 border border-amber-500/40 backdrop-blur-md px-4 py-3 rounded-2xl flex items-start gap-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.9)]"
              >
                <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500 flex items-center justify-center text-xs shrink-0 mt-0.5">
                  🛰️
                </div>
                <div>
                  <span className="text-[9px] font-mono text-amber-400 font-bold tracking-widest uppercase block">
                    ORBITING ARTIFACT // {moon.subtitle}
                  </span>
                  <span className="text-xs font-montserrat font-bold text-white block mt-0.5 uppercase tracking-wide">
                    {moon.name}
                  </span>
                  <p className="text-[10.5px] text-gray-400 leading-relaxed mt-1 font-sans">
                    {moon.desc}
                  </p>
                </div>
              </motion.div>
            );
          })() : (
            <motion.div
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              className="text-[9px] font-mono text-gray-400 uppercase tracking-[2px] flex items-center justify-center gap-2 bg-black/55 px-4 py-2 rounded-full border border-gray-900 shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
              <span>HOVER ORBITING MOONS FOR SECRET ARCHITECTURE MARKS</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Working Coordinates & Status */}
      <div className="p-4 flex justify-between items-end z-20 pointer-events-none">
        <div className="flex flex-col text-left">
          <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest">
            SYSTEM COORDINATES
          </span>
          <span className="text-[10px] font-mono text-gray-400 uppercase mt-0.5">
            LAT: {selectedHub.coordinates.lat.toFixed(4)}°N // LNG: {selectedHub.coordinates.lng.toFixed(4)}°E
          </span>
        </div>
        <div className="flex items-center gap-1.5 bg-black/50 px-2.5 py-1 rounded border border-gray-900/60">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[8px] font-mono text-emerald-400/90 font-bold tracking-widest uppercase">
            STATUS: ACTIVE
          </span>
        </div>
      </div>
    </div>
  );
};
