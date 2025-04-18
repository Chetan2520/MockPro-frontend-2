import React from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import SocialProof from './Component/SocialProof'
import Features from './Component/Features'
import HowItWorks from './Component/HowItWorks'
import TechStack from './Component/TechStack'
import WhyChooseUs from './Component/WhyChooseUs'
import BecomeInterviewer from './Component/BecomeInterviewer'
import FAQ from './Component/FAQ'
import Footer from './Component/Footer'
import Testimonials from './Component/Testimonials'
import Dashboard from './Component/Dashboard'
const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <main>
        <Navbar />
        <Dashboard />
        <Hero />
        <Features />
        <HowItWorks />
        <TechStack />
        <WhyChooseUs />
        <BecomeInterviewer />
        <FAQ />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App
