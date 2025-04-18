import Hero from '@/Component/Hero'
import Features from '@/Component/Features'
import HowItWorks from '@/Component/HowItWorks'
import Testimonials from '@/Component/Testimonials'
import BecomeInterviewer from '@/Component/BecomeInterviewer'
import FAQ from '@/Component/FAQ'
import CTA from '@/Component/CTA'
import Footer from '@/Component/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <BecomeInterviewer />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
} 