import React, { useState } from "react";
import { ArrowRight, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

function Counter({ label, sublabel, emoji, value, onChange, min = 0, max = 10 }) {
  return (
    <div className="flex items-center justify-between p-5 bg-secondary/50 rounded-2xl">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{emoji}</span>
        <div>
          <p className="font-semibold text-foreground">{label}</p>
          <p className="text-xs text-muted-foreground">{sublabel}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          className="w-10 h-10 rounded-xl bg-card border-2 border-border flex items-center justify-center hover:border-primary/50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <Minus className="w-4 h-4" />
        </button>
        <AnimatePresence mode="wait">
          <motion.span
            key={value}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="text-2xl font-bold text-foreground w-8 text-center"
          >
            {value}
          </motion.span>
        </AnimatePresence>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default function Step2_Household({ data, onNext }) {
  const [adults, setAdults] = useState(data.adults ?? 1);
  const [children, setChildren] = useState(data.children ?? 0);

  const handleNext = () => {
    onNext({ adults, children, household_size: adults + children });
  };

  return (
    <div>
      <div className="mb-8">
        <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
          Household Size
        </span>
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-2">
          How many people need coverage?
        </h2>
        <p className="text-muted-foreground">This helps us determine the right plan tiers and potential subsidies for your family.</p>
      </div>

      <div className="space-y-3 mb-8">
        <Counter
          label="Adults"
          sublabel="Ages 18 and older"
          emoji="🧑"
          value={adults}
          onChange={setAdults}
          min={1}
          max={8}
        />
        <Counter
          label="Children"
          sublabel="Ages 17 and under"
          emoji="🧒"
          value={children}
          onChange={setChildren}
          min={0}
          max={10}
        />
      </div>

      <div className="mb-6 p-4 bg-primary/5 border border-primary/20 rounded-2xl flex items-start gap-3">
        <span className="text-2xl">🏠</span>
        <div>
          <p className="text-sm font-bold text-foreground">Your household: {adults + children} {adults + children === 1 ? "person" : "people"}</p>
          <p className="text-xs text-muted-foreground mt-0.5">
            {adults} {adults === 1 ? "adult" : "adults"}{children > 0 ? ` + ${children} ${children === 1 ? "child" : "children"}` : ""}
          </p>
        </div>
      </div>

      <Button
        onClick={handleNext}
        className="w-full py-6 text-base font-bold rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all duration-300"
      >
        Continue
        <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
    </div>
  );
}