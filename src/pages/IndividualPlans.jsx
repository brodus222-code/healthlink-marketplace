import React from "react";
import InfoPage from "@/components/info/InfoPage";

const sections = [
  { heading: "Coverage Built Around You", body: "Whether you're between jobs, aging off a parent's plan, or simply want better coverage, an individual plan protects your health and your finances. We help you weigh premiums, deductibles, and networks so you choose with confidence." },
  { heading: "What to Consider", bullets: ["Keeping your preferred doctors in-network", "Monthly premium versus deductible", "Prescription drug coverage", "Possible tax credits based on income", "Out-of-pocket maximum protection", "Telehealth and preventive care benefits"] },
  { heading: "Turning 26?", body: "Losing coverage on a parent's plan qualifies you for a Special Enrollment Period, so you can get your own plan right away instead of waiting for Open Enrollment." },
];

export default function IndividualPlans() {
  return <InfoPage eyebrow="Individual Coverage" title="Health Insurance for Individuals" intro="Find a plan that fits your health needs and budget, with guidance from a licensed agent at no cost." sections={sections} />;
}