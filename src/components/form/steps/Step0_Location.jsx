import React, { useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const STATE_MAP = {
  "10001": "NY", "33101": "FL", "90001": "CA", "60601": "IL", "77001": "TX",
  "30301": "GA", "02101": "MA", "19101": "PA", "85001": "AZ", "98101": "WA",
};

function getStateFromZip(zip) {
  const n = parseInt(zip);
  if (n >= 35004 && n <= 36925) return "AL";
  if (n >= 99501 && n <= 99950) return "AK";
  if (n >= 85001 && n <= 86556) return "AZ";
  if (n >= 71601 && n <= 72959) return "AR";
  if (n >= 90001 && n <= 96162) return "CA";
  if (n >= 80001 && n <= 81658) return "CO";
  if (n >= 6001 && n <= 6928) return "CT";
  if (n >= 19701 && n <= 19980) return "DE";
  if (n >= 32004 && n <= 34997) return "FL";
  if (n >= 30001 && n <= 31999) return "GA";
  if (n >= 96701 && n <= 96898) return "HI";
  if (n >= 83201 && n <= 83876) return "ID";
  if (n >= 60001 && n <= 62999) return "IL";
  if (n >= 46001 && n <= 47997) return "IN";
  if (n >= 50001 && n <= 52809) return "IA";
  if (n >= 66002 && n <= 67954) return "KS";
  if (n >= 40003 && n <= 42788) return "KY";
  if (n >= 70001 && n <= 71497) return "LA";
  if (n >= 3901 && n <= 4992) return "ME";
  if (n >= 20601 && n <= 21930) return "MD";
  if (n >= 1001 && n <= 2791) return "MA";
  if (n >= 48001 && n <= 49971) return "MI";
  if (n >= 55001 && n <= 56763) return "MN";
  if (n >= 38601 && n <= 39776) return "MS";
  if (n >= 63001 && n <= 65899) return "MO";
  if (n >= 59001 && n <= 59937) return "MT";
  if (n >= 68001 && n <= 69367) return "NE";
  if (n >= 88901 && n <= 89883) return "NV";
  if (n >= 3031 && n <= 3897) return "NH";
  if (n >= 7001 && n <= 8989) return "NJ";
  if (n >= 87001 && n <= 88441) return "NM";
  if (n >= 10001 && n <= 14975) return "NY";
  if (n >= 27006 && n <= 28909) return "NC";
  if (n >= 58001 && n <= 58856) return "ND";
  if (n >= 43001 && n <= 45999) return "OH";
  if (n >= 73001 && n <= 74966) return "OK";
  if (n >= 97001 && n <= 97920) return "OR";
  if (n >= 15001 && n <= 19640) return "PA";
  if (n >= 2801 && n <= 2940) return "RI";
  if (n >= 29001 && n <= 29948) return "SC";
  if (n >= 57001 && n <= 57799) return "SD";
  if (n >= 37010 && n <= 38589) return "TN";
  if (n >= 75001 && n <= 79999) return "TX";
  if (n >= 84001 && n <= 84784) return "UT";
  if (n >= 5001 && n <= 5907) return "VT";
  if (n >= 20101 && n <= 24658) return "VA";
  if (n >= 98001 && n <= 99403) return "WA";
  if (n >= 24701 && n <= 26886) return "WV";
  if (n >= 53001 && n <= 54990) return "WI";
  if (n >= 82001 && n <= 83128) return "WY";
  return null;
}

const STATE_NAMES = {
  AL:"Alabama",AK:"Alaska",AZ:"Arizona",AR:"Arkansas",CA:"California",CO:"Colorado",
  CT:"Connecticut",DE:"Delaware",FL:"Florida",GA:"Georgia",HI:"Hawaii",ID:"Idaho",
  IL:"Illinois",IN:"Indiana",IA:"Iowa",KS:"Kansas",KY:"Kentucky",LA:"Louisiana",
  ME:"Maine",MD:"Maryland",MA:"Massachusetts",MI:"Michigan",MN:"Minnesota",MS:"Mississippi",
  MO:"Missouri",MT:"Montana",NE:"Nebraska",NV:"Nevada",NH:"New Hampshire",NJ:"New Jersey",
  NM:"New Mexico",NY:"New York",NC:"North Carolina",ND:"North Dakota",OH:"Ohio",
  OK:"Oklahoma",OR:"Oregon",PA:"Pennsylvania",RI:"Rhode Island",SC:"South Carolina",
  SD:"South Dakota",TN:"Tennessee",TX:"Texas",UT:"Utah",VT:"Vermont",VA:"Virginia",
  WA:"Washington",WV:"West Virginia",WI:"Wisconsin",WY:"Wyoming",
};

export default function Step0_Location({ data, onNext }) {
  const [zip, setZip] = useState(data.zip_code || "");
  const [error, setError] = useState("");
  const [detected, setDetected] = useState(data.state ? STATE_NAMES[data.state] : null);

  const handleChange = (val) => {
    const clean = val.replace(/\D/g, "").slice(0, 5);
    setZip(clean);
    setError("");
    if (clean.length === 5) {
      const st = getStateFromZip(clean);
      setDetected(st ? STATE_NAMES[st] : null);
    } else {
      setDetected(null);
    }
  };

  const handleSubmit = () => {
    if (zip.length < 5) { setError("Please enter a valid 5-digit ZIP code."); return; }
    const st = getStateFromZip(zip);
    if (!st) { setError("We couldn't find that ZIP code. Please try again."); return; }
    onNext({ zip_code: zip, state: st });
  };

  return (
    <div>
      <div className="mb-8">
        <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
          Finding Plans Near You
        </span>
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-2">
          Where do you currently live?
        </h2>
        <p className="text-muted-foreground">Coverage options vary by location. Your ZIP helps us find the right plans for your area.</p>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
          <input
            type="tel"
            inputMode="numeric"
            maxLength={5}
            value={zip}
            onChange={(e) => handleChange(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            placeholder="Enter your ZIP code"
            className={`w-full pl-12 pr-4 py-5 text-2xl font-bold tracking-widest rounded-2xl border-2 transition-all duration-200 bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 ${
              error ? "border-destructive" : zip.length === 5 && !error ? "border-primary" : "border-border"
            }`}
          />
          {detected && (
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-full">
              <span className="text-sm font-bold">📍 {detected}</span>
            </motion.div>
          )}
        </div>

        {error && <p className="text-destructive text-sm font-medium flex items-center gap-1.5">⚠ {error}</p>}

        <Button
          onClick={handleSubmit}
          className="w-full py-6 text-base font-bold rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all duration-300"
        >
          View My Plan Options
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>

      <div className="mt-6 p-4 bg-secondary/60 rounded-2xl text-sm text-muted-foreground text-center">
        🔒 Your information is encrypted and never sold to third parties.
      </div>
    </div>
  );
}