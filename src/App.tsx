import React, { useState, useEffect } from "react";
import { AMAZON_HUBS, MilestoneHub } from "./data";
import { Constellation } from "./components/Constellation";
import { OfficeDetailPanel } from "./components/OfficeDetailPanel";
import { motion, AnimatePresence } from "motion/react";
import { 
  Building, 
  Search, 
  Play, 
  Pause, 
  BookOpen, 
  MapPin, 
  ChevronRight, 
  HelpCircle, 
  X, 
  Globe, 
  TrendingUp, 
  Award,
  Zap,
  Calendar
} from "lucide-react";


const PLANET_PREVIEWS: Record<string, string> = {
  mercury: "https://www.solarsystemscope.com/images/textures/full/2k_makemake_fictional.jpg",
  venus: "https://nasa3d.arc.nasa.gov/shared_assets/images/ven0aaa2/ven0aaa2-copy-428-321.jpg",
  earth: "https://img00.deviantart.net/04ef/i/2009/114/3/e/new_earth_texture_map_by_lightondesigns.jpg",
  mars: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/mars_texture.jpg",
  jupiter: "https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA07782_hires.jpg",
  saturn: "https://www.solarsystemscope.com/images/textures/full/2k_saturn.jpg",
  uranus: "https://img00.deviantart.net/957c/i/2017/165/4/9/uranus_texture_map_by_jcpag2010-db7yjwb.png",
  neptune: "https://www.solarsystemscope.com/images/textures/full/2k_neptune.jpg",
  pluto: "https://pre00.deviantart.net/4677/th/pre/f/2015/314/4/e/pluto_map__2015_nov_10__by_snowfall_the_cat-d918tlb.png"
};

const CHRONOLOGY_STAGES: Record<string, string> = {
  seattle_garage: "Foundational Site",
  pacmed_tower: "Consolidation Era",
  slu_campus: "Urban Hub Phase",
  day1_spheres: "Biophilic Masterpiece",
  hq2_helix: "East Coast Hub",
  london_principal: "UK Tech Center",
  tokyo_meguro: "Japan HQ Peak",
  hyderabad_campus: "APAC Mega Campus",
  blr37_bengaluru: "Global AI Zenith"
};

export default function App() {
  const [selectedHub, setSelectedHub] = useState<MilestoneHub>(AMAZON_HUBS[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [autoPlay, setAutoPlay] = useState(false);
  const [showPrinciplesModal, setShowPrinciplesModal] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  // Filter hubs based on search queries
  const filteredHubs = AMAZON_HUBS.filter((hub) => {
    const q = searchQuery.toLowerCase();
    return (
      hub.name.toLowerCase().includes(q) ||
      hub.location.toLowerCase().includes(q) ||
      hub.country.toLowerCase().includes(q) ||
      hub.codename.toLowerCase().includes(q)
    );
  });

  // Handle automatic storytelling rotation (Warp Tour)
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoPlay) {
      interval = setInterval(() => {
        setSelectedHub((prev) => {
          const currentIndex = AMAZON_HUBS.findIndex((h) => h.id === prev.id);
          const nextIndex = (currentIndex + 1) % AMAZON_HUBS.length;
          return AMAZON_HUBS[nextIndex];
        });
      }, 7000); // 7 seconds per narrative chapter
    }
    return () => clearInterval(interval);
  }, [autoPlay]);

  const handleNextHub = () => {
    const currentIndex = AMAZON_HUBS.findIndex((h) => h.id === selectedHub.id);
    const nextIndex = (currentIndex + 1) % AMAZON_HUBS.length;
    setSelectedHub(AMAZON_HUBS[nextIndex]);
  };

  const handlePrevHub = () => {
    const currentIndex = AMAZON_HUBS.findIndex((h) => h.id === selectedHub.id);
    const prevIndex = (currentIndex - 1 + AMAZON_HUBS.length) % AMAZON_HUBS.length;
    setSelectedHub(AMAZON_HUBS[prevIndex]);
  };

  const activeIndex = AMAZON_HUBS.findIndex((h) => h.id === selectedHub.id);

  return (
    <div
      id="amazon-universe-app"
      className="min-h-screen space-bg text-white font-sans antialiased selection:bg-amber-500 selection:text-black pb-12"
    >
      {/* Top Architectural Header Nav */}
      <header className="border-b border-gray-800/80 bg-black/40 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
              <Building className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <h1 className="font-montserrat font-bold text-sm tracking-[3px] text-white flex items-center gap-2 uppercase">
                AMAZON CAMPUS CHRONICLE
              </h1>
              <p className="text-[9px] text-amber-500 font-mono tracking-wider uppercase">
                Interactive Architectural Portfolio & Global Milestones
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Tour Auto-Play controls */}
            <button
              id="btn-auto-tour"
              onClick={() => setAutoPlay(!autoPlay)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-display font-bold tracking-wider uppercase flex items-center gap-2 transition-all duration-300 cursor-pointer ${
                autoPlay
                  ? "bg-amber-500 text-black shadow-md shadow-amber-500/20"
                  : "bg-gray-900 text-gray-400 border border-gray-800 hover:border-gray-700"
              }`}
            >
              {autoPlay ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-black" />
                  <span>AUTO-PRESENTATION ACTIVE</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-amber-500" />
                  <span>PLAY PRESENTATION</span>
                </>
              )}
            </button>

            {/* Leadership Creed quick guide */}
            <button
              id="btn-open-principles"
              onClick={() => setShowPrinciplesModal(true)}
              className="p-2 rounded-full bg-slate-900 border border-gray-800 hover:border-gray-700 hover:text-amber-400 transition-colors text-gray-300 cursor-pointer"
              title="Amazon Leadership Creed"
            >
              <BookOpen className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Interactive Workspace Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT COLUMN: Site Alignment (4 cols) */}
          <section className="lg:col-span-4 space-y-4">
            
            {/* Search filter for global hubs */}
            <div className="p-4 rounded-2xl bg-black/40 border border-gray-800/80">
              <label className="block text-[10px] text-gray-400 font-mono uppercase tracking-wider mb-2">
                Search Global Campuses & Offices
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
                <input
                  id="search-input"
                  type="text"
                  placeholder="e.g. Seattle, BLR37, Tokyo..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-900 border border-gray-800/80 rounded-xl py-2 pl-9 pr-4 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-amber-500 transition-colors font-mono"
                />
              </div>
            </div>

            {/* List selector mimicking Jamie Coulter's vertical planet list with requested details */}
            <div className="space-y-3 max-h-[560px] lg:max-h-[660px] overflow-y-auto pr-1">
              {filteredHubs.length > 0 ? (
                filteredHubs.map((hub) => {
                  const isSelected = hub.id === selectedHub.id;
                  return (
                    <button
                      key={hub.id}
                      id={`btn-sidebar-${hub.id}`}
                      onClick={() => {
                        setSelectedHub(hub);
                        setIsDrawerOpen(true);
                      }}
                      className={`w-full p-3.5 rounded-xl text-left border flex items-center gap-4 transition-all duration-300 relative group cursor-pointer ${
                        isSelected
                          ? "bg-slate-950/90 border-amber-500 shadow-md shadow-amber-500/10"
                          : "bg-black/40 border-gray-900/40 hover:border-gray-800 hover:bg-black/70"
                      }`}
                    >
                      {/* Circular Planet Preview Node styled like Jamie's original .preview */}
                      <div className="relative shrink-0">
                        <div
                          className="w-10 h-10 rounded-full transition-transform duration-300 relative bg-cover bg-center border border-zinc-800 shadow-[inset_0_-10px_10px_black]"
                          style={{
                            backgroundImage: `url(${PLANET_PREVIEWS[hub.planetClass]})`,
                            transform: isSelected ? "scale(1.1)" : "scale(1.0)",
                          }}
                        />
                      </div>

                      {/* Info Panel mimicking Jamie Coulter's h2, h3 and .pip */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center">
                          {/* Horizontal indicator bar (.pip) that stretches when active! */}
                          <div 
                            className="h-2 rounded transition-all duration-500"
                            style={{
                              width: isSelected ? "24px" : "0px",
                              marginRight: isSelected ? "8px" : "0px",
                              backgroundColor: hub.color,
                            }}
                          />
                          <h2 className={`font-montserrat font-bold text-[11px] uppercase tracking-[2px] transition-colors duration-300 truncate ${
                            isSelected ? "text-white opacity-100" : "text-gray-400 opacity-60 group-hover:opacity-100"
                          }`}>
                            {hub.name}
                          </h2>
                        </div>
                        
                        {/* Realistic Site Stage & Country */}
                        <h3 className="font-montserrat font-light text-[8.5px] tracking-wider uppercase mt-1 flex items-center gap-1.5"
                            style={{ color: isSelected ? hub.color : "#6b7280" }}>
                          <span>{CHRONOLOGY_STAGES[hub.id] || "Global Campus"}</span>
                          <span>•</span>
                          <span className="font-mono text-zinc-500 text-[8px]">{hub.country}</span>
                        </h3>
                      </div>
                    </button>
                  );
                })
              ) : (
                <div className="p-8 text-center bg-black/20 rounded-2xl border border-gray-900">
                  <HelpCircle className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-500 font-mono">No corporate campuses found matching search query.</p>
                </div>
              )}
            </div>
          </section>

          {/* RIGHT COLUMN: Immersion Solar Horizon and Slide-out Story Drawer (8 cols) */}
          <section className="lg:col-span-8 relative rounded-3xl overflow-hidden">
            <Constellation
              hubs={AMAZON_HUBS}
              selectedHub={selectedHub}
              onSelectHub={setSelectedHub}
              autoPlay={autoPlay}
              onReadMore={() => setIsDrawerOpen(true)}
            />

            {/* Global Timeline Progress tracker overlay at the bottom */}
            <div className="p-4 bg-black/60 border border-gray-800/60 rounded-2xl mt-4 backdrop-blur-md">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400">
                  CHRONOLOGICAL PROGRESSION PATH
                </span>
                <span className="text-[10px] font-mono text-amber-500">
                  {activeIndex + 1} OF {AMAZON_HUBS.length} CAMPUSES EXPLORED
                </span>
              </div>
              
              {/* Timeline Horizontal Line representing progression */}
              <div className="relative h-2 bg-gray-900 rounded-full flex items-center justify-between">
                <div 
                  className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-700"
                  style={{ width: `${(activeIndex / (AMAZON_HUBS.length - 1)) * 100}%` }}
                />
                {AMAZON_HUBS.map((hub, idx) => {
                  const isPassed = idx <= activeIndex;
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={`progress-dot-${hub.id}`}
                      id={`btn-timeline-dot-${hub.id}`}
                      onClick={() => setSelectedHub(hub)}
                      className={`w-4 h-4 rounded-full z-10 border transition-all duration-300 relative group cursor-pointer ${
                        isActive
                          ? "bg-amber-400 border-white scale-125 shadow-[0_0_10px_#F59E0B]"
                          : isPassed
                          ? "bg-amber-600 border-amber-500"
                          : "bg-gray-950 border-gray-800 hover:border-gray-600"
                      }`}
                    >
                      {/* Floating hover tag */}
                      <span className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black border border-gray-800 text-[8px] font-mono py-0.5 px-1.5 rounded text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                        {hub.name} ({hub.year})
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sliding detailed storytelling sidebar drawer (Jamie Coulter Style Full-Screen Panel) */}
            <AnimatePresence>
              {isDrawerOpen && (
                <div className="fixed inset-0 z-[60] flex justify-end">
                  {/* Backdrop Overlay matching Jamie's dark purple close screen */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#150f29]/45 backdrop-blur-[4px] cursor-pointer" 
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    {/* Floating Back Label on the left of the drawer */}
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white text-xs font-mono">
                        ←
                      </div>
                      <span className="text-[10px] font-mono font-bold tracking-widest text-white uppercase">
                        BACK TO CHRONICLE
                      </span>
                    </div>
                  </motion.div>

                  {/* The Side Info Panel */}
                  <motion.div 
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", damping: 30, stiffness: 220 }}
                    className="w-full sm:w-[500px] h-full shadow-[0_0_60px_rgba(0,0,0,0.8)] z-10"
                  >
                    <OfficeDetailPanel
                      hub={selectedHub}
                      onNext={handleNextHub}
                      onPrev={handlePrevHub}
                      isFirst={activeIndex === 0}
                      isLast={activeIndex === AMAZON_HUBS.length - 1}
                      onClose={() => setIsDrawerOpen(false)}
                    />
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </section>

        </div>
      </main>

      {/* FOOTER: Global corporate statistics cards */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 border-t border-gray-900/60 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-black/40 border border-gray-900 text-left">
            <div className="flex items-center gap-2 text-gray-500 text-xs uppercase font-mono mb-1.5">
              <Globe className="w-4 h-4 text-amber-500" />
              <span>Global Presence</span>
            </div>
            <p className="text-xl font-display font-black text-white">Seattle to Bengaluru</p>
            <p className="text-[10px] text-gray-400 mt-1 font-mono">Spanning primary financial & tech corridors worldwide.</p>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-gray-900 text-left">
            <div className="flex items-center gap-2 text-gray-500 text-xs uppercase font-mono mb-1.5">
              <TrendingUp className="w-4 h-4 text-sky-400" />
              <span>Compound Innovation</span>
            </div>
            <p className="text-xl font-display font-black text-white">1994 Garage ➔ Sky Peak</p>
            <p className="text-[10px] text-gray-400 mt-1 font-mono">From a single bookstore server to AWS and global robotics.</p>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-gray-900 text-left">
            <div className="flex items-center gap-2 text-gray-500 text-xs uppercase font-mono mb-1.5">
              <Award className="w-4 h-4 text-indigo-400" />
              <span>Frugality Principle</span>
            </div>
            <p className="text-xl font-display font-black text-white">$15 Door Desks</p>
            <p className="text-[10px] text-gray-400 mt-1 font-mono">Resource conservation prioritizing customer investment value.</p>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-gray-900 text-left">
            <div className="flex items-center gap-2 text-gray-500 text-xs uppercase font-mono mb-1.5">
              <Zap className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>Current Epicenter</span>
            </div>
            <p className="text-xl font-display font-black text-emerald-400">BLR37 Skyscraper</p>
            <p className="text-[10px] text-gray-400 mt-1 font-mono">Driving AI models and automation in Bengaluru, India.</p>
          </div>
        </div>

        <div className="text-center text-[10px] text-gray-600 font-mono mt-8 uppercase tracking-widest">
          AMAZON CAMPUS CHRONICLE // AN INTERACTIVE CHRONOLOGICAL JOURNAL
        </div>
      </footer>

      {/* LEADERSHIP PRINCIPLES MODAL DICTIONARY */}
      {showPrinciplesModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay background */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer" 
            onClick={() => setShowPrinciplesModal(false)}
          />
          
          <div className="relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-gray-800 p-6 shadow-2xl text-white max-h-[85vh] overflow-y-auto">
            <button
              id="btn-close-principles"
              onClick={() => setShowPrinciplesModal(false)}
              className="absolute top-4 right-4 p-1 rounded-full bg-slate-800 border border-gray-700 hover:text-amber-400 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2.5 mb-4 border-b border-gray-800 pb-3">
              <BookOpen className="w-5 h-5 text-amber-500 animate-pulse" />
              <h2 className="font-display font-black text-lg uppercase tracking-wider">
                AMAZON LEADERSHIP PRINCIPLES
              </h2>
            </div>

            <p className="text-xs text-gray-400 mb-6 leading-relaxed">
              These principles aren't just inspirational wall plaques. They guide Amazonians in daily decision-making across all corporate planets—from writing six-page narratives to constructing office biomes.
            </p>

            <div className="space-y-4">
              <div className="p-3 bg-black/40 border border-gray-800 rounded-xl">
                <h3 className="text-xs font-bold text-amber-400 uppercase font-display mb-1">
                  1. Customer Obsession
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Leaders start with the customer and work backwards. They work vigorously to earn and keep customer trust. Although leaders pay attention to competitors, they obsess over customers.
                </p>
              </div>

              <div className="p-3 bg-black/40 border border-gray-800 rounded-xl">
                <h3 className="text-xs font-bold text-sky-400 uppercase font-display mb-1">
                  2. Frugality
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Accomplish more with less. Constraints breed resourcefulness, self-sufficiency, and invention. There are no extra points for growing headcount, budget size, or fixed expense.
                </p>
              </div>

              <div className="p-3 bg-black/40 border border-gray-800 rounded-xl">
                <h3 className="text-xs font-bold text-emerald-400 uppercase font-display mb-1">
                  3. Ownership
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Leaders are owners. They think long term and don’t sacrifice long-term value for short-term results. They act on behalf of the entire company, beyond just their own team.
                </p>
              </div>

              <div className="p-3 bg-black/40 border border-gray-800 rounded-xl">
                <h3 className="text-xs font-bold text-purple-400 uppercase font-display mb-1">
                  4. Invent and Simplify
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Leaders expect and require innovation and invention from their teams and always find ways to simplify. They are externally aware, look for new ideas from everywhere, and are not limited by “not invented here”.
                </p>
              </div>

              <div className="p-3 bg-black/40 border border-gray-800 rounded-xl">
                <h3 className="text-xs font-bold text-indigo-400 uppercase font-display mb-1">
                  5. Bias for Action
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Speed matters in business. Many decisions and actions are reversible and do not need extensive study. We value calculated risk taking.
                </p>
              </div>
            </div>

            <button
              id="btn-principles-modal-confirm"
              onClick={() => setShowPrinciplesModal(false)}
              className="w-full mt-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-black font-display font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer"
            >
              Close Principles Dictionary
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
