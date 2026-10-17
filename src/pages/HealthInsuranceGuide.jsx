import React from "react";
import InfoPage from "@/components/info/InfoPage";

const sections = [
  { heading: "Key Terms to Know", body: "Before comparing plans, it helps to understand the words insurers use. Your premium is the monthly amount you pay to keep coverage active. The deductible is what you pay out of pocket for covered care before your plan starts sharing costs. A copay is a fixed fee for a visit or prescription, while coinsurance is a percentage of the bill you pay after meeting your deductible. The out-of-pocket maximum caps what you spend on covered services in a plan year, after which the plan pays 100%." },
  { heading: "HMO vs. PPO vs. EPO", body: "An HMO usually has lower premiums and requires you to choose a primary care doctor and get referrals to see specialists within the network. A PPO offers more flexibility to see out-of-network providers without referrals, typically at a higher monthly cost. An EPO sits in between, covering only in-network care but often without referral requirements. The right choice depends on whether you value lower costs or broader provider access." },
  { heading: "How to Choose the Right Plan", bullets: ["Check that your preferred doctors and hospitals are in network", "Confirm your prescriptions are on the plan's drug list", "Compare total yearly cost, not just the premium", "See if you qualify for income-based premium tax credits", "Consider how often you expect to need medical care", "Review the out-of-pocket maximum for worst-case protection"] },
  { heading: "Getting Help at No Cost", body: "Licensed agents can explain your options, check subsidy eligibility, and help you enroll, without charging you a fee. Agents are compensated by insurance carriers, so the price of a plan is the same whether you enroll on your own or with help. Start by entering your ZIP code to see which plans are available in your area." },
];

export default function HealthInsuranceGuide() {
  return <InfoPage eyebrow="Guide" title="A Beginner's Guide to Health Insurance" intro="Health insurance can feel confusing. This guide explains the most common terms, plan types, and tips for choosing coverage that fits your health needs and budget." sections={sections} disclaimer="This guide is for general educational purposes only and is not legal, tax, or medical advice. Plan availability and benefits vary by state and carrier." />;
}