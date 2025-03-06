 

import HeroSection from '@/components/home/HeroSection';
import IntroductionSection from '@/components/home/IntroductionSection';
import ServicesSection from '@/components/home/ServicesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import BottomCTA from '@/components/home/BottomCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroductionSection />
      <ServicesSection />
      <TestimonialsSection />
      <BottomCTA />
    </>
  );
}