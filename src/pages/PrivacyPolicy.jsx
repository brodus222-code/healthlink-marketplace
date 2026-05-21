import React from "react";
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Shield className="w-10 h-10 text-primary-foreground mx-auto mb-4" />
          <h1 className="text-3xl font-display font-bold text-primary-foreground">Privacy Policy</h1>
          <p className="text-primary-foreground/80 mt-2 text-sm">Last Updated: May 21, 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 prose prose-slate">
        <div className="space-y-8 text-foreground">

          <section>
            <h2 className="text-xl font-bold mb-3">1. About Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              HealthLink Marketplace ("Company," "we," "us," or "our") is an independent health insurance marketplace located at 1 West Old State Capitol Plaza, Springfield, IL 62701. We are not affiliated with any government agency, including the federal Health Insurance Marketplace (Healthcare.gov), Medicare, or Medicaid. We operate as a lead generation platform that connects consumers with licensed insurance agents and carriers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">We collect the following categories of personal information when you use our website or submit a quote request:</p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and ZIP code.</li>
              <li><strong>Demographic Information:</strong> Age range, gender, household size, and tobacco use status.</li>
              <li><strong>Insurance Information:</strong> Current coverage status, estimated household income, and desired coverage start date.</li>
              <li><strong>Technical Information:</strong> IP address, browser type, device information, and cookies or similar tracking technologies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Match you with licensed health insurance agents and carriers who may contact you with plan options.</li>
              <li>Facilitate your request for health insurance quotes.</li>
              <li>Communicate with you about your inquiry via phone, email, or text message.</li>
              <li>Improve our website, services, and user experience.</li>
              <li>Comply with legal and regulatory obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">4. Sharing Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              <strong>By submitting your information on this website, you expressly consent to having your personal information shared with one or more licensed insurance agents, insurance carriers, and/or marketing partners</strong> who may contact you regarding health insurance products and services.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Licensed insurance agents and brokers in your state.</li>
              <li>Health insurance carriers and plan providers.</li>
              <li>Third-party marketing and lead distribution partners.</li>
              <li>Service providers who assist in operating our website and business.</li>
              <li>Government authorities when required by law.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              We do not sell your personal information to data brokers for non-insurance-related purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">5. TCPA Consent & Communications</h2>
            <p className="text-muted-foreground leading-relaxed">
              By submitting a quote request, you provide your prior express written consent under the Telephone Consumer Protection Act (TCPA) to be contacted by HealthLink Marketplace and its partners at the phone number provided, including via autodialed calls, prerecorded messages, and/or SMS/text messages. Consent is not a condition of purchase. You may opt out at any time by replying STOP to any text message or by contacting us at <a href="mailto:privacy@healthlinkmarketplace.com" className="text-primary hover:underline">privacy@healthlinkmarketplace.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">6. Cookies & Tracking Technologies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies, web beacons, and similar technologies to enhance your browsing experience, analyze site traffic, and deliver relevant advertising. You may disable cookies through your browser settings; however, some features of our website may not function properly as a result.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">7. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements. Lead data is typically retained for up to 5 years.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">8. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Depending on your state of residence, you may have certain rights regarding your personal information, including:</p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>The right to access and review the personal information we hold about you.</li>
              <li>The right to request correction of inaccurate information.</li>
              <li>The right to request deletion of your personal information, subject to certain exceptions.</li>
              <li>The right to opt out of the sale or sharing of your personal information.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              To exercise these rights, contact us at <a href="mailto:privacy@healthlinkmarketplace.com" className="text-primary hover:underline">privacy@healthlinkmarketplace.com</a> or write to us at 1 West Old State Capitol Plaza, Springfield, IL 62701.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">9. Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement reasonable administrative, technical, and physical safeguards to protect your personal information. However, no method of internet transmission or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">10. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website is not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected such information, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">11. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy periodically. We will notify you of material changes by updating the "Last Updated" date at the top of this page. Your continued use of our website after changes are posted constitutes your acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">12. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions or concerns about this Privacy Policy, please contact us:
            </p>
            <div className="mt-3 text-muted-foreground">
              <p><strong>HealthLink Marketplace</strong></p>
              <p>1 West Old State Capitol Plaza</p>
              <p>Springfield, IL 62701</p>
              <p>Email: <a href="mailto:privacy@healthlinkmarketplace.com" className="text-primary hover:underline">privacy@healthlinkmarketplace.com</a></p>
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