import React, { useState } from "react";
import { Pizza, Users, AlertTriangle, CheckCircle, Info, Lightbulb } from "lucide-react";

export const TwoPizzaCalculator: React.FC = () => {
  const [teamSize, setTeamSize] = useState<number>(6);
  const [projectComplexity, setProjectComplexity] = useState<"low" | "medium" | "high">("medium");

  // Traditional large pizza has 8 slices. Assume an average developer eats 3 slices.
  const totalSlicesNeeded = teamSize * 3;
  const pizzasRequired = Math.ceil(totalSlicesNeeded / 8);
  const isTooLarge = pizzasRequired > 2;

  // Formula for communications channels: N * (N - 1) / 2
  const communicationChannels = Math.floor((teamSize * (teamSize - 1)) / 2);

  // Leadership Principle advice based on sizes
  const getFrugalAdvice = () => {
    if (teamSize <= 4) {
      return {
        title: "Micro-Squad (Hyper-Velocity)",
        principle: "Bias for Action",
        desc: "Small enough to align in seconds. Ideal for early product discovery, prototyping, and rapid deployments."
      };
    } else if (teamSize <= 8) {
      return {
        title: "Standard Two-Pizza Team",
        principle: "Ownership",
        desc: "The gold standard of Amazon engineering. Every member owns their complete microservice, maintaining high autonomy."
      };
    } else if (teamSize <= 12) {
      return {
        title: "Slightly Oversized",
        principle: "Invent and Simplify",
        desc: "You are pushing the boundary. Consider spinning off sub-teams to own separate backend API structures."
      };
    } else {
      return {
        title: "Communication Gridlock Risk",
        principle: "Are Right, A Lot",
        desc: "Warning: Meetings will become debates rather than action items. We strongly advise fracturing into independent 2-Pizza teams."
      };
    }
  };

  const advice = getFrugalAdvice();

  return (
    <div
      id="two-pizza-calculator-widget"
      className="p-5 md:p-6 bg-gradient-to-br from-slate-900 via-slate-950 to-black border border-blue-500/10 rounded-2xl relative"
    >
      {/* Background glow */}
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full" />

      {/* Header */}
      <div className="flex items-center justify-between mb-4 border-b border-gray-800 pb-3">
        <div>
          <h3 className="font-display font-bold text-sm tracking-wider text-sky-400 uppercase flex items-center gap-2">
            <Pizza className="w-4 h-4 text-orange-400 animate-spin-slow" />
            TWO-PIZZA TEAM ESTIMATOR
          </h3>
          <p className="text-[11px] text-gray-400">
            Keep meeting groups small enough to feed with just two large pizzas.
          </p>
        </div>
      </div>

      {/* Core controls */}
      <div className="space-y-4 mb-5">
        <div>
          <div className="flex justify-between items-center mb-1.5 font-mono text-xs">
            <label className="text-gray-400 flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-sky-500" />
              TEAM SIZE:
            </label>
            <span className="text-white font-bold bg-sky-950/50 border border-sky-800/40 px-2 py-0.5 rounded text-xs">
              {teamSize} People
            </span>
          </div>
          <input
            id="range-team-size"
            type="range"
            min={2}
            max={25}
            value={teamSize}
            onChange={(e) => setTeamSize(Number(e.target.value))}
            className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
          />
        </div>

        <div>
          <label className="block text-[10px] text-gray-400 font-mono uppercase mb-1">
            Core Scope Complexity
          </label>
          <div className="grid grid-cols-3 gap-2">
            {(["low", "medium", "high"] as const).map((level) => (
              <button
                key={level}
                id={`btn-complex-${level}`}
                onClick={() => setProjectComplexity(level)}
                className={`py-1.5 rounded text-[10px] font-mono uppercase tracking-wider font-bold transition border cursor-pointer ${
                  projectComplexity === level
                    ? "bg-sky-500/20 text-sky-300 border-sky-500"
                    : "bg-black/30 text-gray-400 border-gray-800/60 hover:bg-black/50"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Calculator Result Box */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Pizza Count */}
        <div className={`p-4 rounded-xl border flex flex-col justify-center text-center ${
          isTooLarge
            ? "bg-rose-950/20 border-rose-500/30 text-rose-300"
            : "bg-emerald-950/15 border-emerald-500/30 text-emerald-300"
        }`}>
          <p className="text-[9px] text-gray-400 uppercase font-mono mb-1">Large Pizzas Needed</p>
          <div className="flex items-center justify-center gap-2 mb-1.5">
            <Pizza className={`w-6 h-6 ${isTooLarge ? "text-rose-400" : "text-amber-400 animate-pulse"}`} />
            <span className="text-2xl font-display font-black leading-none">{pizzasRequired}</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 text-[10px] font-mono uppercase">
            {isTooLarge ? (
              <>
                <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Over Limit ({pizzasRequired} &gt; 2)</span>
              </>
            ) : (
              <>
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>2-Pizza Compliant!</span>
              </>
            )}
          </div>
        </div>

        {/* Communication channels */}
        <div className="p-4 rounded-xl bg-black/40 border border-gray-800/80 text-center flex flex-col justify-center">
          <p className="text-[9px] text-gray-400 uppercase font-mono mb-1">Communication Paths</p>
          <span className="text-2xl font-display font-black text-white leading-none mb-1.5">
            {communicationChannels}
          </span>
          <p className="text-[9px] text-gray-500 leading-normal max-w-[150px] mx-auto">
            Each person added introduces exponential links where context gets lost.
          </p>
        </div>
      </div>

      {/* Leadership principle card */}
      <div className="p-3.5 rounded-xl bg-slate-950 border border-gray-800/80">
        <div className="flex items-center gap-2 text-amber-400 font-display font-bold text-xs mb-1">
          <Lightbulb className="w-4 h-4 shrink-0 text-amber-500" />
          <span>{advice.title}</span>
        </div>
        <p className="text-[11px] text-gray-300 mb-1.5 leading-relaxed">{advice.desc}</p>
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-gray-900 border border-gray-800 text-[9px] text-gray-400 font-mono uppercase">
          <Info className="w-3 h-3 text-sky-400" />
          <span>Principle: <strong className="text-sky-300">{advice.principle}</strong></span>
        </div>
      </div>
    </div>
  );
};
