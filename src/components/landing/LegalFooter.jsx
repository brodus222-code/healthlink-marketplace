import React from "react";
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function LegalFooter() {
  return (
    <footer className="bg-foreground/[0.03] border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Brand */}
        <div className="flex items-center gap-2.5 mb-8">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Shield className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-base font-bold text-foreground">
            Health<span className="text-primary">Link</span>Marketplace
          </span>
        </div>

        {/* Legal disclosures */}
        <div className="space-y-4 text-xs text-muted-foreground leading-relaxed">
          <p>
            HealthLinkMarketplace.com is operated by HealthLink Insurance Agency LLC, an independent licensed insurance agency. 
            This website is not affiliated with, endorsed by, or operated by any federal or state government health insurance 
            marketplace. HealthLink Insurance Agency LLC is an independent entity and its licensed agents facilitate connections 
            between consumers and insurance providers.
          </p>
          <p>
            We do not present every plan available in your area. The information provided on this site is limited to the plans 
            offered by our network of carriers in your region. For a comprehensive view of all Qualified Health Plans available in 
            your state, please visit your state's official marketplace website or the federal marketplace at healthcare.gov. For 
            Medicare-related inquiries, please contact Medicare.gov or call 1-800-MEDICARE (TTY users: 1-877-486-2048), available 
            24 hours a day, 7 days a week.
          </p>
          <p>
            Completing any form on this website does not alter your existing coverage, nor does it enroll you in any health 
            insurance plan, Medicare Advantage plan, Medicare Prescription Drug plan, Medicare Supplement plan, or any other 
            insurance product. HealthLink Insurance Agency LLC operates independently of the Medicare program and is neither 
            associated with nor endorsed by the Centers for Medicare &amp; Medicaid Services (CMS) or any other governmental body.
          </p>
          <p>
            Plans presented through HealthLinkMarketplace.com may include Medicare Advantage HMO, PPO, and PFFS organizations, 
            as well as stand-alone prescription drug plans that hold Medicare contracts. Enrollment in any plan is subject to 
            contract renewal. If you currently pay a Medicare Part B premium, you must continue to do so in order to maintain 
            your coverage.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} HealthLink Insurance Agency LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-use" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms of Use</Link>
            <span className="text-xs text-muted-foreground">Springfield, IL 62701</span>
          </div>
        </div>
      </div>
    </footer>
  );
}