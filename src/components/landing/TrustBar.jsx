import React from "react";
import { Users, ShieldCheck } from "lucide-react";

export default function TrustBar() {
  return (
    <div className="bg-card border-t border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          <div className="flex items-center gap-2.5 text-muted-foreground">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Millions of Americans have explored coverage through our platform.</span>
          </div>
          <div className="flex items-center gap-2.5 text-muted-foreground">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">No-cost quotes · Secure forms · No unwanted contact</span>
          </div>
        </div>
      </div>
    </div>
  );
}