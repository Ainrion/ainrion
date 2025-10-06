export default function PrivacyPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: March 30, 2025</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-invert">
            <div className="space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
                <p className="leading-relaxed mb-4">
                  We collect several types of information from and about users of our services:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-foreground">Personal Information:</strong> Name, email address, phone
                    number, and other contact details you provide
                  </li>
                  <li>
                    <strong className="text-foreground">Usage Data:</strong> Information about how you use our website
                    and services
                  </li>
                  <li>
                    <strong className="text-foreground">Technical Data:</strong> IP address, browser type, device
                    information, and operating system
                  </li>
                  <li>
                    <strong className="text-foreground">Communication Data:</strong> Records of your communications with
                    us
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
                <p className="leading-relaxed mb-4">We use the information we collect for various purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide, maintain, and improve our services</li>
                  <li>To communicate with you about our products and services</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To send you technical notices, updates, and security alerts</li>
                  <li>To monitor and analyze trends, usage, and activities</li>
                  <li>To detect, prevent, and address technical issues and security threats</li>
                  <li>To comply with legal obligations and protect our rights</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Data Protection</h2>
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and audits</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Employee training on data protection practices</li>
                  <li>Incident response procedures</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Cookies and Tracking Technologies</h2>
                <p className="leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our services and hold certain
                  information. Cookies are files with a small amount of data that may include an anonymous unique
                  identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                  sent. However, if you do not accept cookies, you may not be able to use some portions of our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Third-Party Services</h2>
                <p className="leading-relaxed">
                  We may employ third-party companies and individuals to facilitate our services, provide services on
                  our behalf, perform service-related tasks, or assist us in analyzing how our services are used. These
                  third parties have access to your personal information only to perform these tasks on our behalf and
                  are obligated not to disclose or use it for any other purpose.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Data Rights</h2>
                <p className="leading-relaxed mb-4">
                  Under GDPR and other applicable data protection laws, you have the following rights:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-foreground">Right to Access:</strong> Request copies of your personal data
                  </li>
                  <li>
                    <strong className="text-foreground">Right to Rectification:</strong> Request correction of
                    inaccurate data
                  </li>
                  <li>
                    <strong className="text-foreground">Right to Erasure:</strong> Request deletion of your personal
                    data
                  </li>
                  <li>
                    <strong className="text-foreground">Right to Restrict Processing:</strong> Request limitation of
                    data processing
                  </li>
                  <li>
                    <strong className="text-foreground">Right to Data Portability:</strong> Request transfer of your
                    data
                  </li>
                  <li>
                    <strong className="text-foreground">Right to Object:</strong> Object to processing of your data
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Data Retention</h2>
                <p className="leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the purposes for which we
                  collected it, including for the purposes of satisfying any legal, accounting, or reporting
                  requirements. When we no longer need your personal information, we will securely delete or anonymize
                  it.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Children's Privacy</h2>
                <p className="leading-relaxed">
                  Our services are not intended for children under the age of 13. We do not knowingly collect personal
                  information from children under 13. If you are a parent or guardian and believe your child has
                  provided us with personal information, please contact us so we can delete such information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Changes to This Privacy Policy</h2>
                <p className="leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this
                  Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they
                  are posted on this page.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Us</h2>
                <p className="leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="mt-4 space-y-1">
                  <p>Email: info@ainrion.com</p>
                  <p>Phone: +91 7355848551</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
