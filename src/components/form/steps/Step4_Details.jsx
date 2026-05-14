import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const INSURANCE_STATUS = [
  { id: "no_coverage", label: "No Coverage", sublabel: "Currently uninsured", emoji: "❌" },
  { id: "marketplace", label: "Marketplace Plan", sublabel: "ACA / Healthcare.gov", emoji: "🏛️" },
  { id: "employer", label: "Employer Plan", sublabel: "Through my job", emoji: "🏢" },
  { id: "medicaid", label: "Medicaid / CHIP", sublabel: "Government assistance", emoji: "🏥" },
  { id: "cobra", label: "COBRA / Short-term", sublabel: "Temporary coverage", emoji: "⏳" },
  { id: "other", label: "Other", sublabel: "Something else", emoji: "❓" },
];

const INCOME_RANGES = [
  { id: "under_25k", label: "Under $25,000", note: "May qualify for Medicaid" },
  { id: "25k_50k", label: "$25,000 – $50,000", note: "May qualify for subsidies" },
  { id: "50k_75k", label: "$50,000 – $75,000", note: "May qualify for subsidies" },
  { id: "75k_100k", label: "$75,000 – $100,000", note: "Partial subsidy possible" },
  { id: "100k_150k", label: "$100,000 – $150,000", note: "Some subsidies may apply" },
  { id: "over_150k", label: "Over $150,000", note: "Standard market rates" },
];

const START_OPTIONS = [
  { id: "asap", label: "As soon as possible", emoji: "🚀" },
  { id: "next_month", label: "Next month", emoji: "📅" },
  { id: "open_enrollment", label: "Open enrollment", emoji: "🗓️" },
  { id: "just_browsing", label: "Just exploring options", emoji: "🔍" },
];

export default function Step4_Details({ data, onNext }) {
  const [insured, setInsured] = useState(data.currently_insured || null);
  const [income, setIncome] = useState(data.income_range || null);
  const [start, setStart] = useState(data.coverage_start || null);
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!insured || !income || !start) { setError("Please answer all questions to continue."); return; }
    setError("");
    onNext({ currently_insured: insured, income_range: income, coverage_start: start });
  };

  return (
    <div>
      <div className="mb-8">
        <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
          Your Situation
        </span>
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-2">
          A few more details
        </h2>
        <p className="text-muted-foreground">Almost there! These last questions help us find your best matches.</p>
      </div>

      {/* Current insurance */}
      <div className="mb-7">
        <p className="text-sm font-bold text-foreground uppercase tracking-wide mb-3">Do you currently have health insurance?</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {INSURANCE_STATUS.map((opt) => (
            <motion.button
              key={opt.id}
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setInsured(opt.id)}
              className={`flex flex-col items-start gap-1 p-4 rounded-2xl border-2 transition-all duration-200 focus:outline-none text-left ${
                insured === opt.id ? "border-primary bg-primary/10 shadow-md shadow-primary/10" : "border-border bg-card hover:border-primary/40"
              }`}
            >
              <span className="text-xl">{opt.emoji}</span>
              <span className={`text-sm font-bold leading-tight ${insured === opt.id ? "text-primary" : "text-foreground"}`}>{opt.label}</span>
              <span className="text-xs text-muted-foreground">{opt.sublabel}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Income range */}
      <div className="mb-7">
        <p className="text-sm font-bold text-foreground uppercase tracking-wide mb-1">Annual household income</p>
        <p className="text-xs text-muted-foreground mb-3">Used only to estimate subsidy eligibility — not shared with insurers.</p>
        <div className="space-y-2">
          {INCOME_RANGES.map((opt) => (
            <motion.button
              key={opt.id}
              type="button"
              whileHover={{ x: 3 }}
              onClick={() => setIncome(opt.id)}
              className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-200 focus:outline-none text-left ${
                income === opt.id ? "border-primary bg-primary/8" : "border-border bg-card hover:border-primary/30"
              }`}
            >
              <span className={`font-semibold text-sm ${income === opt.id ? "text-primary" : "text-foreground"}`}>{opt.label}</span>
              <span className="text-xs text-muted-foreground">{opt.note}</span>
              {income === opt.id && <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center ml-3 flex-shrink-0"><svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></div>}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Start date */}
      <div className="mb-7">
        <p className="text-sm font-bold text-foreground uppercase tracking-wide mb-3">When do you need coverage?</p>
        <div className="grid grid-cols-2 gap-2.5">
          {START_OPTIONS.map((opt) => (
            <motion.button
              key={opt.id}
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setStart(opt.id)}
              className={`flex items-center gap-3 p-4 rounded-2xl border-2 transition-all duration-200 focus:outline-none text-left ${
                start === opt.id ? "border-primary bg-primary/10 shadow-md shadow-primary/10" : "border-border bg-card hover:border-primary/40"
              }`}
            >
              <span className="text-xl">{opt.emoji}</span>
              <span className={`text-sm font-semibold ${start === opt.id ? "text-primary" : "text-foreground"}`}>{opt.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {error && <p className="text-destructive text-sm font-medium mb-4">⚠ {error}</p>}

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