import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import TargetAudience from "@/components/target-audience"
import Benefits from "@/components/benefits"
import Speakers from "@/components/speakers"
import Pricing from "@/components/pricing"
import WhyAttend from "@/components/why-attend"
import FAQ from "@/components/faq"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TargetAudience />
      <Speakers />
      <Benefits />
      <Pricing />
      <WhyAttend />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  )
}
