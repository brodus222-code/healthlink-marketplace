import React, { useState } from "react";
import { MapPin, Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ZipForm({ variant = "hero" }) {
  const [zip, setZip] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (zip.length === 5) {
      setSubmitted(true);
      navigate(`/quote?zip=${zip}`);
    }
  };

  const isHero = variant === "hero";

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      {isHero && (
        <p className="text-primary font-semibold text-lg mb-1">Step 1:</p>
      )}
      <p className={`mb-4 ${isHero ? "text-muted-foreground text-base" : "text-primary-foreground/80 text-sm"}`}>
        Provide your ZIP code to explore available plans near you.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <MapPin className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${isHero ? "text-muted-foreground" : "text-primary-foreground/50"}`} />
          <input
            type="tel"
            maxLength={5}
            value={zip}
            onChange={(e) => setZip(e.target.value.replace(/\D/g, ""))}
            placeholder="Enter ZIP code"
            className={`w-full pl-11 pr-4 py-4 rounded-xl text-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary ${
              isHero
                ? "bg-card border-2 border-border text-foreground placeholder:text-muted-foreground/60"
                : "bg-white/15 border-2 border-white/20 text-white placeholder:text-white/50"
            }`}
          />
        </div>
        <Button
          type="submit"
          size="lg"
          className={`px-8 py-4 h-auto rounded-xl text-base font-bold uppercase tracking-wide transition-all duration-300 ${
            isHero
              ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
              : "bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25"
          }`}
        >
          {submitted ? "Searching..." : "Get Started"}
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
      <div className={`flex items-center gap-1.5 mt-3 ${isHero ? "text-muted-foreground" : "text-primary-foreground/60"}`}>
        <Lock className="w-3.5 h-3.5" />
        <span className="text-xs font-medium">256-bit SSL encryption · Your data stays private</span>
      </div>
    </form>
  );
}