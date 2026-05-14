import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const AGE_RANGES = [
  { id: "18-25", label: "18 – 25", emoji: "🌱" },
  { id: "26-34", label: "26 – 34", emoji: "💼" },
  { id: "35-44", label: "35 – 44", emoji: "🏡" },
  { id: "45-54", label: "45 – 54", emoji: "⭐" },
  { id: "55-64", label: "55 – 64", emoji: "🌟" },
  { id: "65+", label: "65 & over", emoji: "🎯" },
];

const GENDER_OPTIONS = [
  { id: "male", label: "Male", emoji: "👨" },
  { id: "female", label: "Female", emoji: "👩" },
  { id: "prefer_not", label: "Prefer not to say", emoji: "🤝" },
];

function SelectGrid({ label, options, selected, onSelect, cols = 3 }) {
  return (
    <div className="mb-6">
      <p className="text-sm font-bold text-foreground uppercase tracking-wide mb-3">{label}</p>
      <div className={`grid gap-2.5 ${cols === 2 ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-3"}`}>
        {options.map((opt) => (
          <motion.button
            key={opt.id}
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onSelect(opt.id)}
            className={`relative flex flex-col items-center gap-1.5 py-4 px-2 rounded-2xl border-2 transition-all duration-200 focus:outline-none ${
              selected === opt.id
                ? "border-primary bg-primary/10 shadow-md shadow-primary/10"
                : "border-border bg-card hover:border-primary/40"
            }`}
          >
            {selected === opt.id && (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute top-2 right-2 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </motion.div>
            )}
            <span className="text-2xl">{opt.emoji}</span>
            <span className={`text-xs font-bold text-center leading-tight ${selected === opt.id ? "text-primary" : "text-foreground"}`}>{opt.label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

function TobaccoToggle({ value, onChange }) {
  return (
    <div className="mb-6">
      <p className="text-sm font-bold text-foreground uppercase tracking-wide mb-3">Do you use tobacco?</p>
      <p className="text-xs text-muted-foreground mb-3">This includes cigarettes, cigars, chewing tobacco, or e-cigarettes within the last 12 months.</p>
      <div className="grid grid-cols-2 gap-3">
        {[{id: false, label: "No, I don't", emoji: "✅"}, {id: true, label: "Yes, I do", emoji: "🚬"}].map((opt) => (
          <motion.button
            key={String(opt.id)}
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onChange(opt.id)}
            className={`flex items-center gap-3 p-4 rounded-2xl border-2 transition-all duration-200 focus:outline-none ${
              value === opt.id
                ? "border-primary bg-primary/10 shadow-md shadow-primary/10"
                : "border-border bg-card hover:border-primary/40"
            }`}
          >
            <span className="text-xl">{opt.emoji}</span>
            <span className={`font-semibold ${value === opt.id ? "text-primary" : "text-foreground"}`}>{opt.label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default function Step3_AboutYou({ data, onNext }) {
  const [ageRange, setAgeRange] = useState(data.age_range || null);
  const [gender, setGender] = useState(data.gender || null);
  const [tobacco, setTobacco] = useState(data.tobacco_user ?? null);
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!ageRange || gender === null || tobacco === null) {
      setError("Please answer all questions above.");
      return;
    }
    setError("");
    onNext({ age_range: ageRange, gender, tobacco_user: tobacco });
  };

  return (
    <div>
      <div className="mb-8">
        <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
          About You
        </span>
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-2">
          Tell us a bit about yourself
        </h2>
        <p className="text-muted-foreground">These details help determine your eligibility and potential plan costs.</p>
      </div>

      <SelectGrid label="Your Age Range" options={AGE_RANGES} selected={ageRange} onSelect={setAgeRange} />
      <SelectGrid label="Gender" options={GENDER_OPTIONS} selected={gender} onSelect={setGender} cols={2} />
      <TobaccoToggle value={tobacco} onChange={setTobacco} />

      {error && <p className="text-destructive text-sm font-medium mb-4 flex items-center gap-1.5">⚠ {error}</p>}

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