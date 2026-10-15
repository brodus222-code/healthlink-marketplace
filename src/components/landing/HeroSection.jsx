import React from "react";
import { motion } from "framer-motion";
import ZipForm from "./ZipForm";

const HERO_IMAGE = "https://media.base44.com/images/public/6a05454093aae6a7079e6a10/7128f9036_generated_b4bbfaae.png";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Subtle gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] leading-tight font-display">
              Your Path to
              <br />
              Health Insurance,
              <br />
              <span className="font-bold text-primary">Made&nbsp;Effortless</span>
            </h1>

            <div className="w-16 h-1 bg-primary/30 rounded-full my-8" />

            <ZipForm variant="hero" />
          </motion.div>

          {/* Right illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:flex justify-center"
          >
            <img
              src={HERO_IMAGE}
              alt="Healthcare professional reviewing coverage options with a clipboard and medical symbols"
              width="512"
              height="512"
              fetchpriority="high"
              decoding="async"
              className="w-full max-w-lg h-auto drop-shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}