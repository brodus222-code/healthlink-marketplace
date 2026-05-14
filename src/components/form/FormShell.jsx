import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Lock, Phone } from "lucide-react";
import FormProgressBar from "./FormProgressBar";

const TOTAL_STEPS = 6;

export default function FormShell({ currentStep, children, onBack, showBack }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background flex flex-col">
      {/* Top bar */}
      <header className="bg-card/90 backdrop-blur border-b border-border sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Shield className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-sm text-foreground">
              Health<span className="text-primary">Link</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground">
              <Lock className="w-3.5 h-3.5 text-primary" />
              <span>Secure & Private</span>
            </div>
            <a href="tel:18005551234" className="flex items-center gap-1.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-full px-3 py-1.5 text-xs font-semibold transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Need Help? </span>1-800-555-1234
            </a>
          </div>
        </div>
      </header>

      {/* Main form card */}
      <main className="flex-1 flex flex-col items-center justify-start px-4 py-8 pb-16">
        <div className="w-full max-w-2xl">
          {/* Progress */}
          <div className="mb-8">
            <FormProgressBar currentStep={currentStep} totalSteps={TOTAL_STEPS} />
          </div>

          {/* Card */}
          <div className="bg-card rounded-3xl shadow-2xl shadow-black/8 border border-border/50 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="p-7 sm:p-10"
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Back button */}
          {showBack && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={onBack}
              className="mt-5 mx-auto flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Go back
            </motion.button>
          )}

          {/* Trust signals */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {["No commitment required", "Free service · No hidden fees", "Licensed agents in your state"].map((t) => (
              <div key={t} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}