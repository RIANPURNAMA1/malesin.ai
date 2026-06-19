import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Services from '../components/Services'
import ChatDemo from '../components/ChatDemo'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import TikTokConnectSection from '../components/TikTokConnectSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <ChatDemo />
      <Features />
      <Testimonials />
      <CTA />
      <TikTokConnectSection />
      <Footer />
    </div>
  )
}
