import React from "react";
import { motion } from "framer-motion";

export default function BenefitCard({ image, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card rounded-2xl p-8 border border-border/60 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
    >
      <div className="w-20 h-20 rounded-2xl bg-primary/8 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
        <img src={image} alt={title} className="w-14 h-14 object-contain" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
}