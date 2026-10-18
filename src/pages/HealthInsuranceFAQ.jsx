import React from "react";
import InfoPage from "@/components/info/InfoPage";

const sections = [
  { heading: "When can I enroll in health insurance?", body: "Most people enroll during Open Enrollment, which typically runs from November 1 through January 15 in most states. Outside that window, you may qualify for a Special Enrollment Period after a qualifying life event such as losing other coverage, getting married, having a baby, or moving to a new ZIP code. Short-term medical plans can often be purchased year-round where state law allows." },
  { heading: "Can I get help paying for my premium?", body: "Many households qualify for premium tax credits under the Affordable Care Act, based on income and household size. These subsidies lower your monthly premium and can be applied directly when you enroll. Some lower-income households may also qualify for cost-sharing reductions that reduce deductibles and copays on Silver plans." },
  { heading: "Are pre-existing conditions covered?", body: "Yes. All ACA-compliant plans must cover pre-existing conditions and cannot charge you more because of your health history. Short-term medical plans are not ACA-compliant and may exclude or limit coverage for pre-existing conditions, so review plan details carefully." },
  { heading: "Does it cost anything to work with an agent?", body: "No. Licensed agents are paid by insurance carriers, so plan prices are the same whether you enroll alone or with help. An agent can compare plans from multiple carriers, check that your doctors are in network, and confirm your prescriptions are covered." },
  { heading: "What information do I need to get a quote?", bullets: ["Your ZIP code", "Ages of everyone needing coverage", "Estimated household income for the year", "Your current coverage status", "Preferred doctors or medications"] },
];

export default function HealthInsuranceFAQ() {
  return <InfoPage eyebrow="FAQ" title="Health Insurance Frequently Asked Questions" intro="Clear answers to the most common questions about enrolling in health insurance, qualifying for subsidies, and choosing the right plan for you or your family." sections={sections} disclaimer="Information is general and educational. Enrollment dates, subsidy eligibility, and plan availability vary by state and carrier." />;
}