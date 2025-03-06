// src/app/services/page.tsx

import type { Metadata } from 'next';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceDetails from '@/components/services/ServiceDetails';
import ProcessSection from '@/components/services/ProcessSection';
import BottomCTA from '@/components/home/BottomCTA';

export const metadata: Metadata = {
  title: 'Services - Ainrion | Digital Transformation & Innovation Solutions',
  description: 'Explore our comprehensive range of digital services including Digital Transformation, Data Analytics, Cloud Solutions, and AI & Automation.',
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceDetails />
      <ProcessSection />
      <BottomCTA />
    </>
  );
}