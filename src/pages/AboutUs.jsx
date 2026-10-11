import React from "react";
import InfoPage from "@/components/info/InfoPage";

const sections = [
  { heading: "Our Mission", body: "HealthLink Insurance Agency LLC exists to make health coverage understandable and accessible. We believe everyone deserves clear answers, honest guidance, and a plan that fits their life and budget, without the confusion that usually comes with shopping for insurance." },
  { heading: "Simple Health Insurance Solutions", body: "We replace jargon and endless phone trees with a short, guided process. Share a few details, and a licensed agent walks you through options that match your needs.", bullets: ["Plain-language explanations of every plan", "Licensed agents who listen first", "No cost to compare your options", "Support before, during, and after enrollment"] },
  { heading: "Based in Springfield, Illinois", body: "Our base of operations is in Springfield, IL 62701. From here, our team and network of licensed agents help individuals, families, and self-employed professionals across the states we serve find coverage with confidence." },
];

export default function AboutUs() {
  return <InfoPage eyebrow="About Us" title="Health Insurance, Made Simple" intro="We're an independent, licensed insurance agency helping people find the right coverage with clarity and care." sections={sections} />;
}