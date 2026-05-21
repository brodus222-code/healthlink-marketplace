import React from "react";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FileText className="w-10 h-10 text-primary-foreground mx-auto mb-4" />
          <h1 className="text-3xl font-display font-bold text-primary-foreground">Terms of Use</h1>
          <p className="text-primary-foreground/80 mt-2 text-sm">Last Updated: May 21, 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-8 text-foreground">

          <section>
            <h2 className="text-xl font-bold mb-3">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using the HealthLink Marketplace website located at healthlinkmarketplace.com (the "Site"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, please do not use this Site. These Terms constitute a legally binding agreement between you and HealthLink Marketplace, located at 1 West Old State Capitol Plaza, Springfield, IL 62701.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">2. Nature of Our Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              HealthLink Marketplace is an independent health insurance lead generation and referral platform. <strong>We are not an insurance company, licensed insurer, or government agency.</strong> We do not sell insurance directly. We connect consumers with licensed insurance agents, brokers, and carriers who can offer health insurance products.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              HealthLink Marketplace is not affiliated with, endorsed by, or connected to Healthcare.gov, the federal Health Insurance Marketplace, Medicare, Medicaid, or any state insurance exchange.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">3. Eligibility</h2>
            <p className="text-muted-foreground leading-relaxed">
              You must be at least 18 years of age to use this Site and submit a quote request. By using this Site, you represent and warrant that you are at least 18 years old and legally capable of entering into a binding agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">4. Quote Requests & Lead Submission</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              When you submit a quote request through this Site, you acknowledge and agree that:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>The information you provide is accurate and complete to the best of your knowledge.</li>
              <li>Your submitted information may be shared with one or more licensed insurance agents, brokers, and/or carriers who may contact you.</li>
              <li>You may be contacted by multiple parties, including via phone, email, and/or text message.</li>
              <li>Submitting a quote request does not obligate you to purchase any insurance plan.</li>
              <li>Quote results are estimates only and are not a guarantee of coverage or pricing.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">5. TCPA Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed">
              By submitting your phone number and clicking the submission button, you provide your express written consent under the Telephone Consumer Protection Act (TCPA) for HealthLink Marketplace and its insurance agent and carrier partners to contact you at the number provided using automated telephone dialing systems, prerecorded voice messages, and/or SMS text messages regarding health insurance products and services. <strong>Consent is not required as a condition of purchase.</strong> Standard message and data rates may apply. You may opt out at any time by replying STOP to any text, or by contacting us at privacy@healthlinkmarketplace.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">6. No Insurance Advice</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nothing on this Site constitutes legal, financial, or insurance advice. The information provided is for general informational and educational purposes only. You should consult with a licensed insurance professional in your state before making any insurance decisions. HealthLink Marketplace makes no representations or warranties regarding the suitability of any insurance product for your specific needs.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">7. Accuracy of Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We strive to keep the information on this Site accurate and up to date; however, we make no warranties or representations regarding the accuracy, completeness, or timeliness of any content. Insurance plan availability, pricing, and eligibility requirements vary by state and are subject to change. Always verify current plan details directly with the insurance carrier or a licensed agent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">8. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on this Site, including text, graphics, logos, images, and software, is the property of HealthLink Marketplace or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from any content on this Site without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">9. Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              This Site may contain links to third-party websites. These links are provided for your convenience only. HealthLink Marketplace does not endorse, control, or assume responsibility for the content, privacy practices, or availability of any third-party websites. Your use of third-party sites is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">10. Disclaimer of Warranties</h2>
            <p className="text-muted-foreground leading-relaxed">
              THIS SITE AND ITS CONTENT ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">11. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              TO THE FULLEST EXTENT PERMITTED BY LAW, HEALTHLINK MARKETPLACE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THIS SITE OR ANY INFORMATION OBTAINED FROM IT. OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING FROM YOUR USE OF THIS SITE SHALL NOT EXCEED $100.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">12. Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to indemnify, defend, and hold harmless HealthLink Marketplace and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising from your use of the Site, your violation of these Terms, or your submission of false or misleading information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">13. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the State of Illinois, without regard to its conflict of law principles. Any disputes arising under these Terms shall be resolved exclusively in the state or federal courts located in Sangamon County, Illinois.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">14. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms at any time. We will indicate the date of the most recent update at the top of this page. Your continued use of the Site following any changes constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">15. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about these Terms of Use, please contact us:
            </p>
            <div className="mt-3 text-muted-foreground">
              <p><strong>HealthLink Marketplace</strong></p>
              <p>1 West Old State Capitol Plaza</p>
              <p>Springfield, IL 62701</p>
              <p>Email: <a href="mailto:legal@healthlinkmarketplace.com" className="text-primary hover:underline">legal@healthlinkmarketplace.com</a></p>
            </div>
          </section>

        </div>
      </div>

      <div className="border-t border-border py-6 text-center">
        <Link to="/" className="text-primary hover:underline text-sm">← Back to Home</Link>
      </div>
    </div>
  );
}