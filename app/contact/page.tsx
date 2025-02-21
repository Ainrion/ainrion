// src/app/contact/page.tsx
import type { Metadata } from 'next';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import OfficeLocations from '@/components/contact/OfficeLocations';

export const metadata: Metadata = {
  title: 'Contact Ainrion - Get in Touch With Our Team',
  description: 'Connect with Ainrion for innovative technology solutions. Contact our team for consultations, support, or to discuss how we can help transform your business.',
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <OfficeLocations />
    </>
  );
}