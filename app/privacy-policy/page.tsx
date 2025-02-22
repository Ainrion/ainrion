import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#dcdcdc] min-h-screen p-6 text-[#1f1f1f]">
      <Head>
        <title>Privacy Policy - Ainrion</title>
      </Head>
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-[#d64206] mb-4">Privacy Policy</h1>
        <p className="mb-4">
          At Ainrion, your trust is our top priority. We are deeply committed to protecting your privacy and ensuring that your personal data is handled securely and transparently. This Privacy Policy explains in detail how we collect, store, and use your information across our website, software, mobile application, SaaS platform, and blog posts. By interacting with our services, you acknowledge and agree to the practices described herein. We continually review and update our policies to maintain compliance with relevant legal standards and to meet the highest expectations of our users, customers, and visitors.
        </p>
        
        <h2 className="text-2xl font-bold text-[#d64206] mb-2">1. Information We Collect</h2>
        <p className="mb-4">
          We collect various types of information, including:
          <ul className="list-disc ml-6">
            <li><strong>Users:</strong> Name, email address, phone number, and inquiries submitted via contact forms.</li>
            <li><strong>Customers:</strong> Billing details, payment information, subscription details, and order history.</li>
            <li><strong>Website Visitors:</strong> IP address, device information, and browsing activity through cookies and analytics tools.</li>
            <li><strong>Software & App Users:</strong> Login credentials, usage data, preferences, and in-app interactions.</li>
            <li><strong>Blog Visitors:</strong> Comments, social media interactions, and engagement metrics.</li>
          </ul>
        </p>
        
        <h2 className="text-2xl font-bold text-[#d64206] mb-2">2. How We Use Your Information</h2>
        <p className="mb-4">
          We use the collected information for the following purposes:
          <ul className="list-disc ml-6">
            <li>To provide, operate, and improve our software, application, and SaaS platform.</li>
            <li>To process transactions, manage subscriptions, and send order confirmations.</li>
            <li>To personalize user experiences based on preferences and usage history.</li>
            <li>To analyze website performance, application usage, and optimize functionality.</li>
            <li>To send updates, security alerts, promotional content, and blog notifications.</li>
          </ul>
        </p>
        
        <h2 className="text-2xl font-bold text-[#d64206] mb-2">3. Data Sharing & Third Parties</h2>
        <p className="mb-4">
          We do not sell or rent your personal data. However, we may share information with:
          <ul className="list-disc ml-6">
            <li>Service providers who help us process transactions, operate our platform, and improve services.</li>
            <li>Legal authorities if required by law or for fraud prevention.</li>
            <li>Analytics and advertising partners to enhance user experience and marketing efforts.</li>
          </ul>
        </p>
        
        <h2 className="text-2xl font-bold text-[#d64206] mb-2">4. Data Security</h2>
        <p className="mb-4">
          We implement robust security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, and access control policies designed to safeguard your personal information at all times.
        </p>
        
        <h2 className="text-2xl font-bold text-[#d64206] mb-2">5. Your Rights & Choices</h2>
        <p className="mb-4">
          You have the following rights regarding your personal data:
          <ul className="list-disc ml-6">
            <li>Access and review your personal information.</li>
            <li>Request correction or deletion of inaccurate data.</li>
            <li>Opt-out of marketing communications and blog notifications at any time.</li>
            <li>Restrict or object to certain data processing activities.</li>
            <li>Manage cookie and tracking preferences via browser or app settings.</li>
          </ul>
          To exercise these rights, please contact us at privacy@ainrion.com.
        </p>
        
        <h2 className="text-2xl font-bold text-[#d64206] mb-2">6. Cookies & Tracking Technologies</h2>
        <p className="mb-4">
          We use cookies and similar tracking technologies to enhance user experience and analyze website and application usage. You can manage cookie preferences through your browser or app settings, ensuring you have control over your data.
        </p>
        
        <h2 className="text-2xl font-bold text-[#d64206] mb-2">7. Changes to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws. We encourage you to review this page regularly to stay informed about how we are protecting your information.
        </p>
        
        <p className="mt-4 text-sm">If you have any questions, please contact us at privacy@ainrion.com.</p>
      </div>
    </div>
  );
}
