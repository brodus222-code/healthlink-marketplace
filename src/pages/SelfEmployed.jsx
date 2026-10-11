import React from "react";
import InfoPage from "@/components/info/InfoPage";

const sections = [
  { heading: "Coverage Without an Employer", body: "Freelancers, gig workers, contractors, and small business owners need dependable coverage too. We help you find a plan that protects your health while respecting the realities of variable income." },
  { heading: "Why Self-Employed People Choose Us", bullets: ["Plans that move with you, not your job", "Tax credits based on projected net income", "Possible deduction of premiums on your taxes", "Options for you and your family", "Help estimating income for subsidies", "Flexible plan tiers for every budget"] },
  { heading: "Income That Changes?", body: "Marketplace subsidies are based on your estimated annual income. A licensed agent can help you estimate it and explain how to update it during the year if your earnings change." },
];

export default function SelfEmployed() {
  return <InfoPage eyebrow="Self-Employed" title="Health Insurance for the Self-Employed" intro="Reliable coverage for freelancers, contractors, and business owners, built around your independence." sections={sections} disclaimer="Tax information is general in nature. Consult a tax professional about deducting health insurance premiums." />;
}