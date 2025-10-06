import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ProductsSection } from "@/components/products-section"
import { TechnologySection } from "@/components/technology-section"
import { StatsSection } from "@/components/stats-section"
import { TrustedBySection } from "@/components/trusted-by-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BlogPreview } from "@/components/blog-preview"
import { NewsletterSection } from "@/components/newsletter-section"
import { BackToTop } from "@/components/back-to-top"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <TechnologySection />
      <StatsSection />
      <TrustedBySection />
      <TestimonialsSection />
      <BlogPreview />
      <NewsletterSection />
      <BackToTop />
    </>
  )
}
