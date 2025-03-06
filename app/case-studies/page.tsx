// src/app/case-studies/page.tsx
import type { Metadata } from 'next';
import CaseStudiesHero from '@/components/case-studies/CaseStudiesHero';
import FeaturedCaseStudy from '@/components/case-studies/FeaturedCaseStudy';
import CaseStudiesGrid from '@/components/case-studies/CaseStudiesGrid';
import BottomCTA from '@/components/home/BottomCTA';

export const metadata: Metadata = {
  title: 'Case Studies - Success Stories | Ainrion',
  description: 'Explore how Ainrion has helped businesses achieve digital transformation success through innovative technology solutions and strategic implementation.',
};

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesHero />
      <FeaturedCaseStudy />
      <CaseStudiesGrid />
      <BottomCTA />
    </>
  );
}