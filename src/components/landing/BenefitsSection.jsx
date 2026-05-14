import React from "react";
import { motion } from "framer-motion";
import BenefitCard from "./BenefitCard";

const SAVE_TIME_IMG = "https://media.base44.com/images/public/6a05454093aae6a7079e6a10/1cf4a46e5_generated_f1116b2d.png";
const PERSONAL_IMG = "https://media.base44.com/images/public/6a05454093aae6a7079e6a10/b886ba6a4_generated_05f15471.png";
const EXPERT_IMG = "https://media.base44.com/images/public/6a05454093aae6a7079e6a10/217e3bd3a_generated_8cafb324.png";
const FREE_IMG = "https://media.base44.com/images/public/6a05454093aae6a7079e6a10/3cd2ece7d_generated_6d938a85.png";

const benefits = [
  {
    image: SAVE_TIME_IMG,
    title: "Reclaim Your Time",
    description:
      "No more hours of browsing or waiting on hold. We simplify the journey by matching you with the right coverage options in minutes, not days.",
  },
  {
    image: PERSONAL_IMG,
    title: "Tailored Guidance",
    description:
      "Every household has different needs. Receive individualized attention from a dedicated specialist who listens to your situation and recommends accordingly.",
  },
  {
    image: EXPERT_IMG,
    title: "Seasoned Professionals",
    description:
      "Navigating health coverage can feel overwhelming. Our network includes licensed agents and brokers with deep industry knowledge who make it clear and manageable.",
  },
  {
    image: FREE_IMG,
    title: "Explore at Zero Cost",
    description:
      "There's absolutely no fee to get started. Share a few details, and we'll connect you with a specialist who can walk through your options — all at no charge to you.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Why Thousands Trust HealthLink Marketplace
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            We're committed to making your health insurance search as smooth and transparent as possible. 
            Here's what sets the experience apart.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <BenefitCard key={i} {...benefit} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}