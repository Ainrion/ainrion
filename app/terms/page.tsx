export default function TermsPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Terms & Conditions</h1>
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
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                <p className="leading-relaxed">
                  Welcome to Ainrion. These Terms and Conditions govern your use of our website and services. By
                  accessing or using our services, you agree to be bound by these terms. If you disagree with any part
                  of these terms, you may not access our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Use of Service</h2>
                <p className="leading-relaxed mb-4">
                  You agree to use our services only for lawful purposes and in accordance with these Terms. You agree
                  not to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use our services in any way that violates any applicable law or regulation</li>
                  <li>Engage in any conduct that restricts or inhibits anyone's use of the services</li>
                  <li>Attempt to gain unauthorized access to any portion of our services</li>
                  <li>Use our services to transmit any harmful or malicious code</li>
                  <li>Interfere with or disrupt the integrity or performance of our services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Intellectual Property</h2>
                <p className="leading-relaxed">
                  The services and their original content, features, and functionality are owned by Ainrion and are
                  protected by international copyright, trademark, patent, trade secret, and other intellectual property
                  laws. Our trademarks and trade dress may not be used in connection with any product or service without
                  our prior written consent.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. User Responsibilities</h2>
                <p className="leading-relaxed mb-4">As a user of our services, you are responsible for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Ensuring that your use of the services complies with these Terms</li>
                  <li>Notifying us immediately of any unauthorized use of your account</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Limitation of Liability</h2>
                <p className="leading-relaxed">
                  To the maximum extent permitted by law, Ainrion shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred
                  directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from
                  your access to or use of or inability to access or use the services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Service Availability</h2>
                <p className="leading-relaxed">
                  We strive to provide uninterrupted access to our services, but we do not guarantee that our services
                  will always be available or error-free. We reserve the right to modify, suspend, or discontinue any
                  part of our services at any time without notice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Changes to Terms</h2>
                <p className="leading-relaxed">
                  We reserve the right to modify or replace these Terms at any time at our sole discretion. If a
                  revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
                  What constitutes a material change will be determined at our sole discretion. By continuing to access
                  or use our services after those revisions become effective, you agree to be bound by the revised
                  terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Governing Law</h2>
                <p className="leading-relaxed">
                  These Terms shall be governed and construed in accordance with the laws of India, without regard to
                  its conflict of law provisions. Any disputes arising from these Terms or your use of our services
                  shall be subject to the exclusive jurisdiction of the courts located in India.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Information</h2>
                <p className="leading-relaxed">If you have any questions about these Terms, please contact us at:</p>
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
