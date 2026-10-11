import React from "react";
import InfoPage from "@/components/info/InfoPage";

const sections = [
  { heading: "What Are ACA Marketplace Plans?", body: "Affordable Care Act (ACA) plans are comprehensive health insurance plans that cover essential health benefits and cannot deny you or charge more for pre-existing conditions. Depending on your household income, you may qualify for premium tax credits that lower your monthly cost." },
  { heading: "Essential Health Benefits", bullets: ["Doctor visits and preventive care", "Emergency services and hospitalization", "Prescription drugs", "Maternity and newborn care", "Mental health and substance use services", "Lab work and pediatric care"] },
  { heading: "Metal Tiers Explained", body: "Plans come in Bronze, Silver, Gold, and Platinum tiers. Bronze plans have lower premiums and higher out-of-pocket costs, while Gold and Platinum plans cost more monthly but pay more when you need care. Silver plans may qualify for extra cost-sharing reductions." },
  { heading: "When Can You Enroll?", body: "Open Enrollment typically runs from November 1 through January 15 in most states. Outside that window, you may qualify for a Special Enrollment Period after a life event such as losing coverage, moving, marriage, or having a baby." },
];

export default function MarketplacePlans() {
  return <InfoPage eyebrow="ACA Marketplace" title="ACA Marketplace Health Plans" intro="Comprehensive coverage, protection for pre-existing conditions, and possible savings based on your income." sections={sections} disclaimer="HealthLinkMarketplace.com is not the federal or a state government marketplace. Subsidy eligibility is determined by your household income and the official marketplace. You can also visit healthcare.gov for a full view of available plans." />;
}