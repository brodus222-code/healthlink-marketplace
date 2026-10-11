import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import CTASection from "@/components/landing/CTASection";
import LegalFooter from "@/components/landing/LegalFooter";

export default function InfoPage({ eyebrow, title, intro, sections, disclaimer }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="bg-secondary/40 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
          <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">{eyebrow}</span>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-5">{title}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">{intro}</p>
          <Link to="/quote" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-xl shadow-lg shadow-primary/25 transition-all">
            Compare Plans Free <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-12">
        {sections.map((s) => (
          <section key={s.heading}>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">{s.heading}</h2>
            {s.body && <p className="text-muted-foreground leading-relaxed mb-4">{s.body}</p>}
            {s.bullets && (
              <ul className="grid sm:grid-cols-2 gap-3">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-3 p-4 bg-card border border-border rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
        {disclaimer && <p className="text-xs text-muted-foreground leading-relaxed border-t border-border pt-6">{disclaimer}</p>}
      </main>

      <CTASection />
      <LegalFooter />
    </div>
  );
}