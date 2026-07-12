import React from "react";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import CarrierSection from "../components/landing/CarrierSection";
import BenefitsSection from "../components/landing/BenefitsSection";
import StateCoverage from "../components/landing/StateCoverage";
import CTASection from "../components/landing/CTASection";
import TrustBar from "../components/landing/TrustBar";
import LegalFooter from "../components/landing/LegalFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CarrierSection />
      <BenefitsSection />
      <StateCoverage />
      <CTASection />
      <TrustBar />
      <LegalFooter />
    </div>
  );
}