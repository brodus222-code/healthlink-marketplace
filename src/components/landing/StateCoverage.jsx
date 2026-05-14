import React from "react";
import { motion } from "framer-motion";

const STATES = [
  ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia"],
  ["Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky"],
  ["Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana"],
  ["Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio"],
  ["Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah"],
  ["Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"],
];

export default function StateCoverage() {
  return (
    <section className="bg-card py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Plans Available Across Every State
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Health coverage options vary by location — different carriers, plan types, and regulations shape 
            what's offered where you live. Choose your state below, answer a few quick questions, and we'll 
            match you with a licensed professional who understands your local market.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-secondary/50 rounded-2xl p-6 sm:p-8"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-0">
            {STATES.map((column, colIdx) => (
              <ul key={colIdx} className="space-y-0">
                {column.map((state) => (
                  <li key={state}>
                    <button className="w-full text-left py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-0.5 transform">
                      {state}
                    </button>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}