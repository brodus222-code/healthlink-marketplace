import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Phone, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const SUCCESS_IMG = "https://media.base44.com/images/public/6a05454093aae6a7079e6a10/148188c76_generated_image.png";

const STEPS_NEXT = [
  { icon: "📋", title: "Review underway", desc: "A licensed agent is reviewing your profile right now." },
  { icon: "📞", title: "Expect a call soon", desc: "You'll hear from us within 1 business day — often within hours." },
  { icon: "💡", title: "Get personalized options", desc: "Your agent will walk you through plans matched to your situation." },
];

export default function StepSuccess({ data }) {
  const [dots, setDots] = useState(1);

  useEffect(() => {
    const t = setInterval(() => setDots((d) => (d % 3) + 1), 500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="text-center">
      {/* Animated check */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
        className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-full mb-6"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.3 }}
        >
          <CheckCircle className="w-14 h-14 text-primary" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-2">
          You're all set, {data.first_name}! 🎉
        </h2>
        <p className="text-muted-foreground mb-8 text-base leading-relaxed max-w-sm mx-auto">
          We've received your information and a licensed agent is already working to find you the best options in <strong>{data.zip_code}</strong>.
        </p>

        {/* Live processing indicator */}
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 mb-8 flex items-center gap-3">
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse flex-shrink-0" />
          <p className="text-sm font-medium text-foreground text-left">
            Matching your profile to available plans{".".repeat(dots)}
          </p>
        </div>

        {/* What happens next */}
        <div className="text-left space-y-3 mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">What happens next</p>
          {STEPS_NEXT.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.15 }}
              className="flex items-start gap-4 p-4 bg-secondary/40 rounded-2xl"
            >
              <span className="text-2xl">{step.icon}</span>
              <div>
                <p className="font-bold text-sm text-foreground">{step.title}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="space-y-3"
        >
          <p className="text-sm font-semibold text-foreground">Prefer to speak with someone right now?</p>
          <a href="tel:18005551234">
            <Button className="w-full py-5 text-base font-bold rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25">
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now: 1-800-555-1234
            </Button>
          </a>
          <p className="text-xs text-muted-foreground">Free · No obligation · Licensed agents available</p>
        </motion.div>

        {/* Trust badges */}
        <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center justify-center gap-4">
          {["Licensed Agents", "No Hidden Fees", "HIPAA Compliant", "Trusted Since 2020"].map((badge) => (
            <div key={badge} className="flex items-center gap-1 text-xs text-muted-foreground">
              <Star className="w-3 h-3 text-accent fill-accent" />
              {badge}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}