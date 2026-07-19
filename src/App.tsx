import { Header } from '@/sections/Header'
import { Hero } from '@/sections/Hero'
import { Marquee } from '@/sections/Marquee'
import { Services } from '@/sections/Services'
import { WhyUs } from '@/sections/WhyUs'
import { CtaSection } from '@/sections/CtaSection'
import { Footer } from '@/sections/Footer'
import { FloatingWhatsApp } from '@/sections/FloatingWhatsApp'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <WhyUs />
        <CtaSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
