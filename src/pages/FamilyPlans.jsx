import React from "react";
import InfoPage from "@/components/info/InfoPage";

const sections = [
  { heading: "Protect Everyone You Love", body: "A family plan covers you, your spouse, and your children under one policy, with one deductible structure and one out-of-pocket maximum. We help you find coverage that works for every stage of family life." },
  { heading: "Family Coverage Highlights", bullets: ["Pediatric dental and vision care", "Well-child visits and immunizations", "Maternity and newborn care", "Family out-of-pocket maximum", "Children covered up to age 26", "Possible savings for larger households"] },
  { heading: "Growing Family?", body: "Marriage, birth, or adoption qualifies you for a Special Enrollment Period, so you can add new family members without waiting for Open Enrollment." },
];

export default function FamilyPlans() {
  return <InfoPage eyebrow="Family Coverage" title="Health Insurance for Families" intro="Affordable, comprehensive coverage that keeps your whole household protected." sections={sections} />;
}