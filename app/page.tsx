import { AboutSection } from "@/components/about-section"
import { FAQSection } from "@/components/faq-section"
import { FooterSection } from "@/components/footer-section"
import { HeaderSection } from "@/components/header-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { HeroParallax, products } from "@/components/ui/hero-parallax"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <HeaderSection />
      <HeroParallax products={products} />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <FooterSection />
    </main>
  )
}
