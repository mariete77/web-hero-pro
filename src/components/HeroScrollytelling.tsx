import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Unsplash food images for the scrollytelling sequence
const SCROLLY_IMAGES = [
  'https://images.unsplash.com/photo-1546039907-7fa05f864c02?w=1920&q=85',   // plating
  'https://images.unsplash.com/photo-1544025162-d76694265947?w=1920&q=85',   // steak
  'https://images.unsplash.com/photo-1551218372-a8789b81b253?w=1920&q=85',   // chef
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=85',   // fine dining
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=85', // restaurant ambiance
]

export default function HeroScrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const progressRef = useRef(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const ctx = gsap.context(() => {
      const totalSteps = SCROLLY_IMAGES.length

      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress
          const step = Math.min(
            Math.floor(progress * totalSteps),
            totalSteps - 1
          )
          setCurrentIndex(step)
          progressRef.current = progress
        },
      })
    }, container)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative" style={{ height: `${SCROLLY_IMAGES.length * 100}vh` }}>
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen overflow-hidden flex items-center justify-center"
      >
        {/* Background Image */}
        {SCROLLY_IMAGES.map((src, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700 ease-out"
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: i === currentIndex ? 1 : 0,
              zIndex: i === currentIndex ? 1 : 0,
            }}
          />
        ))}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Content */}
        <div className="relative z-20 text-center text-white px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 leading-tight">
            La experiencia<br />culinaria definitiva
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto">
            Transformamos la relación de tu restaurante con cada cliente
          </p>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/70">
            <span className="text-sm tracking-widest uppercase">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/70 to-transparent" />
          </div>
        </div>

        {/* Progress dots */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
          {SCROLLY_IMAGES.map((_, i) => (
            <div
              key={i}
              className={`w-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'h-8 bg-gold'
                  : 'h-1.5 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}