// src/app/case-studies/[caseStudyID]/page.tsx

import type { Metadata } from 'next';
import CaseStudyHero from '@/components/case-studies/caseStudyID/CaseStudyDetailsHero';
import CaseStudyDetails from '@/components/case-studies/caseStudyID/CaseStudyDetails';
import BottomCTA from '@/components/home/BottomCTA';

export const metadata: Metadata = {
  title: 'Case Study Details - Success Stories | Ainrion',
  description: 'Explore how Ainrion has helped businesses achieve digital transformation success through innovative technology solutions and strategic implementation.',
};

export async function generateStaticParams() {
  const caseStudies = [
    { caseStudyID: '1' },
    { caseStudyID: '2' },
    { caseStudyID: '3' },
    { caseStudyID: '4' },
    { caseStudyID: '5' },
    { caseStudyID: '6' },
  ]; 

  return caseStudies.map(({ caseStudyID }) => ({ caseStudyID }));
}

export default async function CaseStudyDetailsPage({ params }: { params: { caseStudyID: string } }) {
  const { caseStudyID } = await params;

  return (
    <>
      <CaseStudyHero caseStudyID={caseStudyID} />
      <CaseStudyDetails caseStudyID={caseStudyID} />
      <BottomCTA />
    </>
  );
}