import React, { useState } from "react";
import { ArrowRight, Users, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const FAMILY_IMG = "https://media.base44.com/images/public/6a05454093aae6a7079e6a10/41ac866d8_generated_image.png";
const SINGLE_IMG = "https://media.base44.com/images/public/6a05454093aae6a7079e6a10/682d46c78_generated_image.png";
const COUPLE_IMG = "https://media.base44.com/images/public/6a05454093aae6a7079e6a10/6bd9b39c1_generated_image.png";

const OPTIONS = [
  { id: "just_me", label: "Just Me", sublabel: "Individual coverage for myself only", image: SINGLE_IMG },
  { id: "me_and_spouse", label: "Me & My Partner", sublabel: "Coverage for two adults in our household", image: COUPLE_IMG },
  { id: "family", label: "My Family", sublabel: "Coverage for myself, spouse, and/or children", image: FAMILY_IMG },
  { id: "me_and_children", label: "Me & My Kids", sublabel: "Parent and one or more dependents", emoji: "👨‍👧‍👦" },
];

export default function Step1_Coverage({ data, onNext }) {
  const [selected, setSelected] = useState(data.coverage_type || null);

  const handleSelect = (id) => {
    setSelected(id);
    setTimeout(() => onNext({ coverage_type: id }), 300);
  };

  return (
    <div>
      <div className="mb-8">
        <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
          Coverage Type
        </span>
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-2">
          Who needs coverage?
        </h2>
        <p className="text-muted-foreground">Select the option that best describes your household situation.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        {OPTIONS.map((opt) => (
          <motion.button
            key={opt.id}
            type="button"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleSelect(opt.id)}
            className={`relative w-full text-left rounded-2xl border-2 p-5 transition-all duration-200 cursor-pointer focus:outline-none group ${
              selected === opt.id
                ? "border-primary bg-primary/10 shadow-lg shadow-primary/10"
                : "border-border bg-card hover:border-primary/40 hover:bg-secondary/30"
            }`}
          >
            {selected === opt.id && (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute top-3 right-3 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </motion.div>
            )}
            <div className="flex items-center gap-4">
              {opt.image ? (
                <img src={opt.image} alt={opt.label} className="w-14 h-14 object-contain rounded-xl flex-shrink-0" />
              ) : (
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 ${selected === opt.id ? "bg-primary/15" : "bg-secondary"}`}>
                  {opt.emoji}
                </div>
              )}
              <div>
                <p className={`font-bold text-base ${selected === opt.id ? "text-primary" : "text-foreground"}`}>{opt.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{opt.sublabel}</p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <p className="text-center text-xs text-muted-foreground mt-5">Tap any option to continue automatically</p>
    </div>
  );
}