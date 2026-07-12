import React from "react";
import { motion } from "framer-motion";

const carriers = [
  { name: "Blue Cross Blue Shield", short: "BCBS", color: "#0055A5" },
  { name: "UnitedHealthcare", short: "UHC", color: "#E1261C" },
  { name: "Cigna", short: "Cigna", color: "#00A0DF" },
  { name: "Kaiser Permanente", short: "Kaiser", color: "#006B5C" },
  { name: "Ambetter", short: "Ambetter", color: "#5A2D81" },
  { name: "Oscar", short: "Oscar", color: "#0D9B8C" },
  { name: "Aetna", short: "Aetna", color: "#D81E3F" },
  { name: "Anthem", short: "Anthem", color: "#2C6FB5" },
];

export default function CarrierSection() {
  return (
    <section className="bg-secondary/40 border-y border-border py-12 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm sm:text-base font-semibold uppercase tracking-widest text-muted-foreground mb-8"
        >
          Plans from the carriers you know and trust
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-4 gap-y-6 items-center"
        >
          {carriers.map((carrier, i) => (
            <div
              key={i}
              className="flex items-center justify-center"
              title={carrier.name}
            >
              <span
                className="text-lg sm:text-xl font-bold tracking-tight transition-opacity duration-200 opacity-70 hover:opacity-100 text-center"
                style={{ color: carrier.color }}
              >
                {carrier.short}
              </span>
            </div>
          ))}
        </motion.div>

        <p className="text-center text-xs text-muted-foreground mt-8 max-w-2xl mx-auto leading-relaxed">
          Carrier availability varies by state and region. HealthLink Marketplace is an independent agency and these brand names are trademarks of their respective owners.
        </p>
      </div>
    </section>
  );
}