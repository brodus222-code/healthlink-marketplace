import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function ImageToggleCard({ id, label, sublabel, icon: Icon, emoji, image, selected, onClick }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`relative w-full text-left rounded-2xl border-2 p-5 transition-all duration-200 cursor-pointer focus:outline-none ${
        selected
          ? "border-primary bg-primary/8 shadow-lg shadow-primary/15"
          : "border-border bg-card hover:border-primary/40 hover:shadow-md"
      }`}
    >
      {/* Check badge */}
      {selected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-3 right-3"
        >
          <CheckCircle className="w-5 h-5 text-primary" />
        </motion.div>
      )}

      <div className="flex items-center gap-4">
        {image ? (
          <img src={image} alt={label} width="64" height="64" decoding="async" className="w-16 h-16 object-contain rounded-xl flex-shrink-0" />
        ) : emoji ? (
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 ${selected ? "bg-primary/10" : "bg-secondary"}`}>
            {emoji}
          </div>
        ) : null}

        <div>
          <p className={`font-bold text-base leading-tight ${selected ? "text-primary" : "text-foreground"}`}>{label}</p>
          {sublabel && <p className="text-sm text-muted-foreground mt-0.5 leading-snug">{sublabel}</p>}
        </div>
      </div>
    </motion.button>
  );
}