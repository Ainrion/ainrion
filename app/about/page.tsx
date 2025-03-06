// src/app/about/page.tsx

import type { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import StoryMission from '@/components/about/StoryMission';
import TeamSection from '@/components/about/TeamSection';
import MilestonesSection from '@/components/about/MilestonesSection';
import BottomCTA from '@/components/home/BottomCTA';

export const metadata: Metadata = {
  title: 'About Ainrion - Our Story, Mission & Team',
  description: 'Learn about Ainrion\'s journey, our mission to transform businesses through technology, and meet the team behind our innovation.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <section id="story-mission">
        <StoryMission />
      </section>
      <MilestonesSection />
      <section id="team-section">
        <TeamSection />
      </section>
      <BottomCTA />
    </>
  );
}