import { AboutSection } from "@/components/about-section"
import { FAQSection } from "@/components/faq-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { HeroParallax, products } from "@/components/ui/hero-parallax"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <HeroParallax products={products} />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
    </main>
  )
}
