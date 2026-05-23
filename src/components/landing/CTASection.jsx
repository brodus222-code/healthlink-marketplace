import React from "react";
import { motion } from "framer-motion";
import ZipForm from "./ZipForm";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden">
      {/* Deep teal gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
      <div className="absolute inset-0 opacity-30" style={{background: "radial-gradient(circle at top right, hsl(162 63% 55% / 0.3), transparent 60%)"}} />
      <div className="absolute inset-0 opacity-10" style={{background: "radial-gradient(circle at bottom left, hsl(43 96% 56% / 0.1), transparent 50%)"}} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary-foreground mb-4">
            Ready to Discover the Right Coverage?
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed mb-10">
            Don't leave your health to chance. Our network of licensed agents and brokers is 
            standing by to help you find a plan that fits your life — at absolutely no cost.
          </p>

          <div className="flex justify-center">
            <ZipForm variant="cta" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}