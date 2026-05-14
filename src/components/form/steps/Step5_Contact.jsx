import React, { useState } from "react";
import { ArrowRight, User, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

function Field({ label, icon: Icon, ...props }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-foreground mb-1.5">{label}</label>
      <div className="relative">
        {Icon && <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />}
        <input
          {...props}
          className={`w-full ${Icon ? "pl-11" : "pl-4"} pr-4 py-4 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-base`}
        />
      </div>
    </div>
  );
}

function formatPhone(val) {
  const digits = val.replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export default function Step5_Contact({ data, onNext, isSubmitting }) {
  const [firstName, setFirstName] = useState(data.first_name || "");
  const [lastName, setLastName] = useState(data.last_name || "");
  const [email, setEmail] = useState(data.email || "");
  const [phone, setPhone] = useState(data.phone || "");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");

  const validate = () => {
    if (!firstName.trim()) return "Please enter your first name.";
    if (!lastName.trim()) return "Please enter your last name.";
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return "Please enter a valid email address.";
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) return "Please enter a valid 10-digit phone number.";
    if (!agreed) return "Please agree to be contacted to continue.";
    return null;
  };

  const handleSubmit = () => {
    const err = validate();
    if (err) { setError(err); return; }
    setError("");
    onNext({ first_name: firstName, last_name: lastName, email, phone });
  };

  return (
    <div>
      <div className="mb-8">
        <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
          Final Step
        </span>
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-2">
          Where should we send your results?
        </h2>
        <p className="text-muted-foreground">A licensed agent will reach out with personalized plan options — at no cost to you.</p>
      </div>

      {/* Summary card */}
      <div className="mb-6 p-4 bg-primary/5 border border-primary/10 rounded-2xl">
        <p className="text-xs font-bold uppercase tracking-wide text-primary mb-2">Your Profile Summary</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {[
            data.zip_code && `📍 ZIP ${data.zip_code}`,
            data.coverage_type && `👥 ${data.coverage_type.replace(/_/g, " ")}`,
            data.household_size && `🏠 ${data.household_size} person household`,
            data.age_range && `🎂 Age ${data.age_range}`,
          ].filter(Boolean).map((item) => (
            <span key={item} className="text-xs text-muted-foreground">{item}</span>
          ))}
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="grid grid-cols-2 gap-4">
          <Field label="First Name" icon={User} type="text" placeholder="Jane" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <Field label="Last Name" type="text" placeholder="Doe" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <Field label="Email Address" icon={Mail} type="email" placeholder="jane@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Field label="Phone Number" icon={Phone} type="tel" placeholder="(555) 000-0000" value={phone} onChange={(e) => setPhone(formatPhone(e.target.value))} />
      </div>

      {/* TCPA consent */}
      <div className="mb-6 p-4 bg-secondary/50 rounded-2xl">
        <label className="flex gap-3 cursor-pointer">
          <div
            onClick={() => setAgreed(!agreed)}
            className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${agreed ? "bg-primary border-primary" : "border-border bg-card"}`}
          >
            {agreed && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            By submitting, I agree to be contacted by HealthLink Insurance Agency LLC and its licensed agents via phone, email, or text message regarding health insurance plans. Standard message rates may apply. I understand this is not required to purchase insurance.
          </p>
        </label>
      </div>

      {error && <p className="text-destructive text-sm font-medium mb-4 flex items-center gap-1.5">⚠ {error}</p>}

      <Button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="w-full py-6 text-base font-bold rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all duration-300 disabled:opacity-70"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Finding Your Plans...
          </span>
        ) : (
          <>
            View My Plan Options — Free
            <ArrowRight className="w-5 h-5 ml-2" />
          </>
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground mt-4">
        🔒 256-bit SSL · Your info is never sold · No spam, ever
      </p>
    </div>
  );
}