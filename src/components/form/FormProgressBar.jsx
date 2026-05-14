import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const STEPS = [
  { label: "Location" },
  { label: "Coverage" },
  { label: "Household" },
  { label: "About You" },
  { label: "Details" },
  { label: "Contact" },
];

export default function FormProgressBar({ currentStep, totalSteps }) {
  const pct = Math.round((currentStep / (totalSteps - 1)) * 100);

  return (
    <div className="w-full">
      {/* Step label */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-primary">
          Step {currentStep + 1} of {totalSteps}
        </span>
        <span className="text-sm font-bold text-primary">{pct}% Complete</span>
      </div>

      {/* Bar */}
      <div className="w-full h-2.5 bg-border rounded-full overflow-hidden mb-5">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-emerald-400"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      {/* Step dots — desktop only */}
      <div className="hidden sm:flex items-center justify-between relative">
        <div className="absolute top-[18px] left-0 right-0 h-0.5 bg-border -z-0" />
        <motion.div
          className="absolute top-[18px] left-0 h-0.5 bg-primary -z-0"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        {STEPS.map((step, i) => {
          const done = i < currentStep;
          const active = i === currentStep;
          return (
            <div key={i} className="flex flex-col items-center gap-1.5 z-10">
              <motion.div
                animate={{
                  scale: active ? 1.2 : 1,
                  backgroundColor: done ? "hsl(162 63% 41%)" : active ? "hsl(162 63% 41%)" : "hsl(160 15% 90%)",
                  borderColor: done || active ? "hsl(162 63% 41%)" : "hsl(160 15% 75%)",
                }}
                transition={{ duration: 0.3 }}
                className="w-9 h-9 rounded-full border-2 flex items-center justify-center"
              >
                {done ? (
                  <CheckCircle className="w-5 h-5 text-white" />
                ) : (
                  <span className={`text-xs font-bold ${active ? "text-white" : "text-muted-foreground"}`}>{i + 1}</span>
                )}
              </motion.div>
              <span className={`text-[11px] font-medium ${active ? "text-primary" : done ? "text-primary/70" : "text-muted-foreground"}`}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}