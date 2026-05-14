import React from "react";
import { motion } from "framer-motion";
import ZipForm from "./ZipForm";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden">
      {/* Deep teal gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsl(162_63%_55%_/_0.3),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_hsl(43_96%_56%_/_0.1),_transparent_50%)]" />

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