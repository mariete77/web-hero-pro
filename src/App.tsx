import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeroScrollytelling from './components/HeroScrollytelling'
import AboutSection from './components/AboutSection'
import FeaturesSection from './components/FeaturesSection'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <HeroScrollytelling />
      <AboutSection />
      <FeaturesSection />
      <ContactForm />
      <Footer />
    </div>
  )
}