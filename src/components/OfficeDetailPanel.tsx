import React, { useState } from "react";
import { MilestoneHub, AMAZON_HUBS } from "../data";
import { DoorDeskMinigame } from "./DoorDeskMinigame";
import { TwoPizzaCalculator } from "./TwoPizzaCalculator";
import { 
  MapPin, 
  Calendar, 
  Users, 
  Award, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  X,
  Globe,
  Camera,
  BookOpen,
  Compass
} from "lucide-react";

interface OfficeDetailPanelProps {
  hub: MilestoneHub;
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
  onClose?: () => void;
}

export const OfficeDetailPanel: React.FC<OfficeDetailPanelProps> = ({
  hub,
  onNext,
  onPrev,
  isFirst,
  isLast,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<"overview" | "achievements" | "tour">("overview");
  const activeIndex = AMAZON_HUBS.findIndex((h) => h.id === hub.id);

  return (
    <div
      id={`panel-${hub.id}`}
      className="bg-slate-950/95 backdrop-blur-md rounded-3xl border border-gray-800/80 p-5 md:p-8 shadow-2xl flex flex-col justify-between h-full text-white"
    >
      {/* Upper header section */}
      <div className="space-y-6">
        
        {/* Hub Header Tag */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: hub.color }}
            />
            <span
              className="text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-black/40 border border-gray-800"
              style={{ color: hub.color }}
            >
              CAMPUS CODE: {hub.codename}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-gray-400">
              CHRONOLOGY // STAGE 0{activeIndex + 1}
            </span>
            {onClose && (
              <button
                id="btn-close-detail-panel"
                onClick={onClose}
                className="p-1 rounded-full bg-slate-900 hover:bg-slate-800 border border-gray-800 text-gray-400 hover:text-white transition-colors cursor-pointer"
                title="Close Drawer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Name and Basic Metadata */}
        <div>
          <div className="flex items-center gap-3">
            <span className="text-3xl md:text-4xl">{hub.emoji}</span>
            <h1 className="text-2xl md:text-3xl font-display font-black tracking-tight text-white leading-tight">
              {hub.name}
            </h1>
          </div>
          <div className="flex flex-wrap gap-4 mt-3 text-xs text-gray-400 font-mono">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-500" />
              <span>ESTABLISHED: {hub.year}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>
                {hub.location}, {hub.country}
              </span>
            </div>
          </div>
        </div>

        {/* Real Building Architectural Spotlight Image (Always Visible!) */}
        <div className="relative rounded-2xl overflow-hidden border border-gray-800/80 shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 pointer-events-none" />
          <img
            src={hub.imageUrl}
            alt={hub.name}
            referrerPolicy="no-referrer"
            className="w-full h-48 object-cover filter brightness-[0.8] group-hover:brightness-95 group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end z-20">
            <div>
              <span className="text-[9px] font-mono text-amber-400 tracking-[3px] uppercase block font-bold drop-shadow">
                ARCHITECTURAL PROFILE
              </span>
              <span className="text-xs font-display font-black text-white tracking-wider uppercase block mt-0.5 drop-shadow">
                {hub.location}, {hub.country}
              </span>
            </div>
            <div className="p-2 rounded-xl bg-black/70 border border-gray-800 text-amber-500 backdrop-blur-sm shadow-lg flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider">
              <Camera className="w-3.5 h-3.5" />
              <span>PHOTOGRAPHIC RECORD</span>
            </div>
          </div>
        </div>

        {/* SEGMENTED TAB SELECTOR (Custom capsule styled bar) */}
        <div className="flex p-1 bg-black/60 rounded-xl border border-gray-800/80 text-xs font-mono">
          <button
            onClick={() => setActiveTab("overview")}
            className={`flex-1 py-2 text-center rounded-lg font-bold transition-all duration-300 cursor-pointer ${
              activeTab === "overview"
                ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                : "text-gray-400 hover:text-white"
            }`}
          >
            PROFILE
          </button>
          <button
            onClick={() => setActiveTab("achievements")}
            className={`flex-1 py-2 text-center rounded-lg font-bold transition-all duration-300 cursor-pointer ${
              activeTab === "achievements"
                ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                : "text-gray-400 hover:text-white"
            }`}
          >
            MILESTONES
          </button>
          <button
            onClick={() => setActiveTab("tour")}
            className={`flex-1 py-2 text-center rounded-lg font-bold transition-all duration-300 cursor-pointer ${
              activeTab === "tour"
                ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                : "text-gray-400 hover:text-white"
            }`}
          >
            VISITOR GUIDE
          </button>
        </div>

        {/* TAB 1: OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div className="space-y-6 animate-fade-in">
            {/* Narrative Description */}
            <div className="p-4 bg-black/40 rounded-2xl border border-gray-900 leading-relaxed text-sm text-gray-300">
              <p>{hub.story}</p>
            </div>

            {/* Dynamic Interactive Mini-Games Embedded inside Relevant Chapters! */}
            {hub.id === "seattle_garage" && (
              <div className="animate-fade-in">
                <DoorDeskMinigame />
              </div>
            )}

            {hub.id === "pacmed_tower" && (
              <div className="animate-fade-in">
                <TwoPizzaCalculator />
              </div>
            )}

            {/* Primary Teams in Action */}
            <div className="space-y-3">
              <h2 className="text-xs font-display font-bold tracking-wider text-gray-400 uppercase flex items-center gap-2">
                <Users className="w-4 h-4 text-indigo-400" />
                CORE ACTIVE TEAMS
              </h2>
              <div className="flex flex-wrap gap-2">
                {hub.teams.map((team, index) => (
                  <span
                    key={`team-badge-${index}`}
                    className="px-2.5 py-1 rounded-full bg-indigo-950/40 border border-indigo-900/60 text-indigo-300 font-mono text-[10px] uppercase tracking-wider"
                  >
                    {team}
                  </span>
                ))}
              </div>
            </div>

            {/* Global Coordinates */}
            <div className="text-[10px] text-gray-500 font-mono flex items-center gap-1.5 uppercase">
              <Globe className="w-3.5 h-3.5 text-gray-600" />
              <span>GEOGRAPHICAL SITE LOCATION: {hub.coordinates.lat > 0 ? `${hub.coordinates.lat.toFixed(4)}° N` : `${Math.abs(hub.coordinates.lat).toFixed(4)}° S`}, {hub.coordinates.lng > 0 ? `${hub.coordinates.lng.toFixed(4)}° E` : `${Math.abs(hub.coordinates.lng).toFixed(4)}° W`}</span>
            </div>
          </div>
        )}

        {/* TAB 2: ACHIEVEMENTS TAB */}
        {activeTab === "achievements" && (
          <div className="space-y-6 animate-fade-in">
            
            {/* List of 3 Historic Breakthroughs / Accomplishments */}
            <div className="space-y-4">
              <h2 className="text-xs font-display font-bold tracking-wider text-gray-400 uppercase flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-500" />
                HISTORIC BREAKTHROUGHS & SCALE
              </h2>
              
              <div className="space-y-3">
                {hub.achievements.map((ach, idx) => (
                  <div
                    key={`achievement-card-${idx}`}
                    className="p-3.5 bg-slate-900/40 rounded-xl border border-gray-900 flex gap-3.5 items-start"
                  >
                    <span className="text-sm shrink-0 mt-0.5" style={{ color: hub.color }}>
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className="text-xs font-display font-black text-white uppercase tracking-wider">
                        {ach.title}
                      </h3>
                      <p className="text-[11px] text-gray-400 leading-relaxed mt-1">
                        {ach.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Characteristics Grid */}
            <div className="space-y-3">
              <h2 className="text-xs font-display font-bold tracking-wider text-gray-400 uppercase flex items-center gap-2">
                <Shield className="w-4 h-4 text-sky-400" />
                CAMPUS & SPACE STATISTICS
              </h2>
              <div className="grid grid-cols-2 gap-2.5">
                {hub.stats.map((stat, idx) => (
                  <div
                    key={`stat-metric-${idx}`}
                    className="bg-black/40 p-3 rounded-lg border border-gray-900 flex flex-col justify-center"
                  >
                    <span className="text-[9px] text-gray-500 font-mono uppercase">
                      {stat.label}
                    </span>
                    <span className="text-xs font-display font-bold text-white mt-0.5">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: EXECUTIVE VISITOR GUIDE */}
        {activeTab === "tour" && (
          <div className="space-y-6 animate-fade-in">
            
            {/* Passport Cover Graphic Header */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 text-center relative overflow-hidden">
              <div className="absolute right-2 bottom-2 opacity-5 pointer-events-none">
                <Compass className="w-24 h-24 text-amber-500" />
              </div>
              
              <span className="text-[9px] font-mono text-amber-500 tracking-[4px] uppercase block">
                EXECUTIVE VISITOR DIRECTIVE
              </span>
              <h2 className="text-lg font-display font-black tracking-widest text-white uppercase mt-1">
                CAMPUS ARCHITECTURE TOUR
              </h2>
              <p className="text-[10px] font-mono text-gray-400 uppercase mt-1.5 max-w-xs mx-auto leading-normal">
                An employee guide to touring the world's most innovative corporate habitats.
              </p>
            </div>

            {/* Immersive Wonders Story */}
            <div className="p-4 bg-black/40 rounded-2xl border border-gray-900 leading-relaxed text-xs text-gray-300 space-y-3">
              <p className="font-bold text-amber-400/90 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                EXECUTIVE VISITOR DIRECTIVE
              </p>
              <p>
                As a global Amazonian with an active corporate credential, some of the world's most spectacular architectural masterpieces, cloud server brain centers, and biophilic gardens are open for you to inspect and experience.
              </p>
              <p>
                From the lush tropical canopy of the Seattle Spheres to the mountain hiking paths of the Arlington Helix, you can tour these core historical campuses without prior custom clearance—simply badge in or reserve workspace using the internal network.
              </p>
            </div>

            {/* Passport Detail Cards */}
            <div className="space-y-4">
              <h2 className="text-xs font-display font-bold tracking-wider text-gray-400 uppercase flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-emerald-400" />
                VISITOR DOCUMENTATION
              </h2>
              
              {/* Classification Info */}
              <div className="p-4 bg-slate-900/60 rounded-xl border border-gray-800/80 space-y-3.5">
                <div>
                  <span className="text-[9px] font-mono text-gray-500 uppercase block">
                    Campus Architectural Class:
                  </span>
                  <span className="text-sm font-display font-bold text-amber-400 tracking-wider uppercase block mt-0.5">
                    {hub.tourGuide.headline}
                  </span>
                </div>

                <div className="border-t border-gray-800/80 pt-3">
                  <span className="text-[9px] font-mono text-gray-500 uppercase block">
                    Required Credentials:
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5 mt-0.5 uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {hub.tourGuide.badgeAccess}
                  </span>
                </div>

                <div className="border-t border-gray-800/80 pt-3">
                  <span className="text-[9px] font-mono text-gray-500 uppercase block">
                    Site Visit Advisory:
                  </span>
                  <p className="text-[11px] text-gray-300 leading-relaxed mt-1.5 font-sans">
                    {hub.tourGuide.visitorTips}
                  </p>
                </div>
              </div>
            </div>

            {/* Chronological Site Milestones */}
            <div className="space-y-3">
              <h2 className="text-xs font-display font-bold tracking-wider text-gray-400 uppercase flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-sky-400" />
                HISTORICAL MILESTONES
              </h2>
              <div className="space-y-2">
                {hub.historyDetails.map((detail, idx) => (
                  <div
                    key={`detail-${idx}`}
                    className="flex gap-3 items-start p-3 bg-black/30 rounded-xl border border-gray-900"
                  >
                    <div className="p-1 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 mt-0.5 shrink-0">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-[11px] text-gray-300 leading-normal">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Story Navigation Controls */}
      <div className="mt-8 pt-4 border-t border-gray-900 flex items-center justify-between gap-4">
        <button
          id="btn-prev-hub"
          disabled={isFirst}
          onClick={onPrev}
          className={`px-4 py-2 rounded-xl text-xs font-display font-bold uppercase cursor-pointer border tracking-wider transition-all duration-200 ${
            isFirst
              ? "text-gray-600 border-gray-900 bg-transparent cursor-not-allowed"
              : "text-gray-300 border-gray-800 hover:border-gray-700 bg-slate-900/50"
          }`}
        >
          PREVIOUS HUB
        </button>

        <div className="flex items-center gap-1 font-mono text-xs text-gray-500">
          <span>CHRONOLOGICAL TIMELINE</span>
        </div>

        <button
          id="btn-next-hub"
          onClick={onNext}
          className={`px-5 py-2 rounded-xl text-xs font-display font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-300 cursor-pointer shadow-lg border ${
            isLast
              ? "bg-emerald-950/40 text-emerald-400 border-emerald-500/30 hover:bg-emerald-950/70"
              : "bg-amber-950/40 text-amber-400 border-amber-500/30 hover:bg-amber-950/70"
          }`}
        >
          {isLast ? (
            <>
              <span>RESTART CHRONICLE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </>
          ) : (
            <>
              <span>NEXT CAMPUS HUB</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

