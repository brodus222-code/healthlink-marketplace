import React from "react";
import InfoPage from "@/components/info/InfoPage";

const sections = [
  { heading: "Temporary Coverage for Gaps", body: "Short-term medical plans can provide temporary protection if you're between jobs, waiting for other coverage to begin, or missed Open Enrollment. They are often lower cost and can start quickly." },
  { heading: "When Short-Term Coverage May Fit", bullets: ["Between jobs or employer coverage", "Waiting for a new plan to start", "Missed Open Enrollment", "Fast approval and quick start dates", "Lower monthly premiums", "Choice of deductibles"] },
  { heading: "Know the Limitations", body: "Short-term plans are not ACA-compliant. They may exclude pre-existing conditions, may not cover all essential health benefits, and have limited durations set by federal and state rules. A licensed agent will help you compare them with marketplace options." },
];

export default function ShortTermMedical() {
  return <InfoPage eyebrow="Short-Term Medical" title="Short-Term Health Insurance" intro="Temporary, budget-friendly coverage to bridge a gap until your next plan begins." sections={sections} disclaimer="Short-term medical insurance is not comprehensive coverage and is not a substitute for an ACA-qualified health plan. Availability and maximum duration vary by state." />;
}