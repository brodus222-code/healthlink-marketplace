import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import FormShell from "../components/form/FormShell";
import Step0_Location from "../components/form/steps/Step0_Location";
import Step1_Coverage from "../components/form/steps/Step1_Coverage";
import Step2_Household from "../components/form/steps/Step2_Household";
import Step3_AboutYou from "../components/form/steps/Step3_AboutYou";
import Step4_Details from "../components/form/steps/Step4_Details";
import Step5_Contact from "../components/form/steps/Step5_Contact";
import StepSuccess from "../components/form/steps/StepSuccess";

const TOTAL_STEPS = 6;

export default function QuoteForm() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialZip = params.get("zip") || "";

  const [step, setStep] = useState(initialZip ? 1 : 0);
  const [done, setDone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ zip_code: initialZip });

  const advance = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
    setStep((s) => s + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBack = () => {
    setStep((s) => Math.max(0, s - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (contactData) => {
    const finalData = { ...formData, ...contactData, status: "submitted" };
    setFormData(finalData);
    setIsSubmitting(true);
    try {
      await base44.entities.LeadSubmission.create(finalData);
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
      setDone(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (done) {
    return (
      <FormShell currentStep={TOTAL_STEPS - 1} showBack={false}>
        <StepSuccess data={formData} />
      </FormShell>
    );
  }

  return (
    <FormShell currentStep={step} totalSteps={TOTAL_STEPS} onBack={goBack} showBack={step > 0}>
      {step === 0 && <Step0_Location data={formData} onNext={advance} />}
      {step === 1 && <Step1_Coverage data={formData} onNext={advance} />}
      {step === 2 && <Step2_Household data={formData} onNext={advance} />}
      {step === 3 && <Step3_AboutYou data={formData} onNext={advance} />}
      {step === 4 && <Step4_Details data={formData} onNext={advance} />}
      {step === 5 && <Step5_Contact data={formData} onNext={handleSubmit} isSubmitting={isSubmitting} />}
    </FormShell>
  );
}