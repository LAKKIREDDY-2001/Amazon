import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Hammer, Coins, Check, AlertCircle, ShoppingBag, Award } from "lucide-react";

export const DoorDeskMinigame: React.FC = () => {
  const [stage, setStage] = useState<"idle" | "buy_door" | "buy_legs" | "screws" | "assemble" | "completed">("idle");
  const [desksBuilt, setDesksBuilt] = useState(0);
  const [capitalSpent, setCapitalSpent] = useState(0);
  const [savingsSecured, setSavingsSecured] = useState(0);
  const [feedbackMsg, setFeedbackMsg] = useState("");

  const resetBuilder = () => {
    setStage("buy_door");
    setFeedbackMsg("Acquire a basic wooden hollow door from the Home Depot supply...");
  };

  const handleAction = (currentStage: typeof stage) => {
    switch (currentStage) {
      case "idle":
        resetBuilder();
        break;

      case "buy_door":
        setCapitalSpent((prev) => prev + 15);
        setStage("buy_legs");
        setFeedbackMsg("Nice! Now acquire 4x4 pine posts to cut into sturdy legs.");
        break;

      case "buy_legs":
        setCapitalSpent((prev) => prev + 8);
        setStage("screws");
        setFeedbackMsg("Got the legs. Now grab some premium metal bracket screws.");
        break;

      case "screws":
        setCapitalSpent((prev) => prev + 2);
        setStage("assemble");
        setFeedbackMsg("Time to mount! Secure those legs onto the underside of the door.");
        break;

      case "assemble":
        setStage("completed");
        setDesksBuilt((prev) => prev + 1);
        // Saving comparison: Traditional corporate office desk is $450. Door desk cost $25. Savings = $425!
        setSavingsSecured((prev) => prev + 425);
        setFeedbackMsg("Boom! You built a legendary Amazon Door Desk! Frugality level maximized.");
        break;

      case "completed":
        // Reset capital spent for the next single desk run
        setCapitalSpent(0);
        setStage("buy_door");
        setFeedbackMsg("Let's build another to supply the Bellevue engineering staff!");
        break;
    }
  };

  return (
    <div
      id="door-desk-builder-game"
      className="p-5 md:p-6 bg-gradient-to-br from-amber-950/20 via-slate-900/40 to-slate-950 border border-amber-500/20 rounded-2xl relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/5 blur-3xl rounded-full" />

      {/* Header */}
      <div className="flex items-center justify-between mb-4 border-b border-gray-800 pb-3">
        <div>
          <h3 className="font-display font-bold text-sm tracking-wider text-amber-400 uppercase flex items-center gap-2">
            <Hammer className="w-4 h-4 text-amber-500 animate-bounce" />
            BELLEVUE GARAGE: DOOR DESK WORKSHOP
          </h3>
          <p className="text-[11px] text-gray-400">
            Bezos' famous strategy: Invest in what matters to customers (not expensive office desks!)
          </p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-xs">
          <Coins className="w-3.5 h-3.5" />
          <span>Frugal Mindset</span>
        </div>
      </div>

      {/* Stats Counter Row */}
      <div className="grid grid-cols-3 gap-3 mb-5 font-mono text-center">
        <div className="bg-black/30 p-2.5 rounded border border-gray-800/80">
          <p className="text-[10px] text-gray-500 uppercase">Desks Built</p>
          <p className="text-base font-bold text-white">{desksBuilt}</p>
        </div>
        <div className="bg-black/30 p-2.5 rounded border border-gray-800/80">
          <p className="text-[10px] text-gray-500 uppercase">Unit Cost</p>
          <p className="text-base font-bold text-amber-400">
            ${stage === "buy_door" ? 0 : stage === "buy_legs" ? 15 : stage === "screws" ? 23 : stage === "assemble" || stage === "completed" ? 25 : 0}
          </p>
        </div>
        <div className="bg-black/30 p-2.5 rounded border border-amber-500/10">
          <p className="text-[10px] text-gray-500 uppercase">Capital Saved</p>
          <p className="text-base font-bold text-emerald-400 font-mono">
            ${savingsSecured}
          </p>
        </div>
      </div>

      {/* Interactive Desk Visualizer */}
      <div className="bg-black/60 aspect-[16/7] w-full rounded-xl flex items-center justify-center relative border border-gray-800/80 p-4 mb-4">
        <AnimatePresence mode="wait">
          {stage === "idle" && (
            <motion.div
              key="stage-idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center"
            >
              <Hammer className="w-10 h-10 text-amber-500/40 mx-auto mb-2 animate-pulse" />
              <p className="text-xs text-gray-400 max-w-xs mx-auto">
                Amazon's early employees worked on desks crafted from wood doors. Try building one yourself!
              </p>
            </motion.div>
          )}

          {stage === "buy_door" && (
            <motion.div
              key="stage-buy_door"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="w-full flex flex-col items-center"
            >
              <div className="w-48 h-8 rounded bg-amber-800/20 border-2 border-dashed border-amber-600 flex items-center justify-center relative shadow-lg">
                <span className="text-[9px] text-amber-500 font-mono uppercase tracking-widest font-bold">Unfinished Wood Door</span>
              </div>
              <p className="text-[10px] text-gray-400 mt-4">Step 1: Purchase Hollow Core Door ($15)</p>
            </motion.div>
          )}

          {stage === "buy_legs" && (
            <motion.div
              key="stage-buy_legs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full flex flex-col items-center"
            >
              <div className="relative flex flex-col items-center">
                <div className="w-48 h-4 rounded bg-amber-800/40 border border-amber-600 shadow" />
                <div className="flex justify-between w-44 mt-1">
                  <div className="w-3 h-12 bg-amber-900/60 rounded border border-amber-700/60" />
                  <div className="w-3 h-12 bg-amber-900/60 rounded border border-amber-700/60" />
                </div>
              </div>
              <p className="text-[10px] text-gray-400 mt-4">Step 2: Procure Pine 4x4 Lumber Legs ($8)</p>
            </motion.div>
          )}

          {stage === "screws" && (
            <motion.div
              key="stage-screws"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full flex flex-col items-center"
            >
              <div className="relative flex flex-col items-center">
                <div className="w-48 h-4 rounded bg-amber-800/50 border border-amber-600" />
                <div className="flex justify-between w-44 mt-1">
                  <div className="w-3 h-12 bg-amber-900/80 rounded border border-amber-700 relative">
                    <div className="absolute top-1 left-0.5 w-1.5 h-1.5 rounded-full bg-slate-400" />
                  </div>
                  <div className="w-3 h-12 bg-amber-900/80 rounded border border-amber-700 relative">
                    <div className="absolute top-1 left-0.5 w-1.5 h-1.5 rounded-full bg-slate-400" />
                  </div>
                </div>
              </div>
              <p className="text-[10px] text-gray-400 mt-4">Step 3: Secure Metal Bracket Screws ($2)</p>
            </motion.div>
          )}

          {stage === "assemble" && (
            <motion.div
              key="stage-assemble"
              initial={{ rotate: -5, scale: 0.95 }}
              animate={{ rotate: 0, scale: 1 }}
              className="w-full flex flex-col items-center"
            >
              <div className="flex flex-col items-center animate-pulse">
                <div className="w-48 h-4 rounded bg-amber-800 border border-amber-600 shadow-md relative flex items-center justify-center">
                  <span className="text-[8px] text-amber-200 font-mono">ASSEMBLING...</span>
                </div>
                <div className="flex justify-between w-44 mt-1">
                  <div className="w-3.5 h-12 bg-amber-900 rounded border border-amber-700" />
                  <div className="w-3.5 h-12 bg-amber-900 rounded border border-amber-700" />
                </div>
              </div>
              <p className="text-[10px] text-yellow-400 font-bold mt-4">Ready! Press the button to secure the brackets.</p>
            </motion.div>
          )}

          {stage === "completed" && (
            <motion.div
              key="stage-completed"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-full flex flex-col items-center"
            >
              <div className="flex flex-col items-center">
                <div className="w-52 h-4 rounded-md bg-amber-900 border border-amber-500 shadow-xl flex items-center justify-center">
                  <div className="absolute top-0 w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <div className="flex justify-between w-[180px] mt-0.5">
                  <div className="w-4 h-14 bg-amber-950 rounded border border-amber-800" />
                  <div className="w-4 h-14 bg-amber-950 rounded border border-amber-800" />
                </div>
              </div>
              <div className="flex items-center gap-1.5 mt-3 text-emerald-400 font-bold text-xs bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/20">
                <Award className="w-4 h-4 text-emerald-400 animate-spin-slow" />
                <span>SAVED $425 VS RETAIL DESKS!</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Narrative Progress Bar */}
      {feedbackMsg && (
        <div className="px-3.5 py-2 rounded-lg bg-black/40 border border-gray-800/80 mb-4 flex items-start gap-2.5 text-xs text-gray-300">
          <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p className="leading-relaxed italic">{feedbackMsg}</p>
        </div>
      )}

      {/* Button Action */}
      <button
        id="btn-desk-game-action"
        onClick={() => handleAction(stage)}
        className={`w-full py-2.5 rounded-xl font-display font-bold text-xs tracking-wider text-center uppercase cursor-pointer flex items-center justify-center gap-2 transition-all duration-300 border ${
          stage === "completed"
            ? "bg-emerald-950/40 text-emerald-400 border-emerald-500/30 hover:bg-emerald-950/60"
            : stage === "idle"
            ? "bg-amber-950/40 text-amber-400 border-amber-500/30 hover:bg-amber-950/60"
            : "bg-blue-950/40 text-blue-400 border-blue-500/30 hover:bg-blue-950/60"
        }`}
      >
        {stage === "idle" && (
          <>
            <Hammer className="w-4 h-4" />
            <span>Launch Workshop</span>
          </>
        )}
        {stage === "buy_door" && (
          <>
            <ShoppingBag className="w-4 h-4" />
            <span>Purchase Unfinished Door (-$15)</span>
          </>
        )}
        {stage === "buy_legs" && (
          <>
            <ShoppingBag className="w-4 h-4" />
            <span>Buy 4x4 Lumber Legs (-$8)</span>
          </>
        )}
        {stage === "screws" && (
          <>
            <ShoppingBag className="w-4 h-4" />
            <span>Procure Fastening Hardware (-$2)</span>
          </>
        )}
        {stage === "assemble" && (
          <>
            <Hammer className="w-4 h-4 animate-spin" />
            <span>Drive Screws & Complete Desk!</span>
          </>
        )}
        {stage === "completed" && (
          <>
            <Check className="w-4 h-4" />
            <span>Manufacture Another Desk</span>
          </>
        )}
      </button>
    </div>
  );
};
