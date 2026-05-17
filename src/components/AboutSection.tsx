import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      gsap.from('.about-content', {
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-32 px-6 md:px-12 bg-white"
    >
      <div className="max-w-5xl mx-auto about-content">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-px bg-gold" />
          <span className="text-sm tracking-widest uppercase text-gold font-medium">
            El Concepto
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-semibold text-charcoal mb-8 leading-tight">
          No solo hacemos páginas web.<br />
          <span className="text-gold">Creamos experiencias digitales.</span>
        </h2>

        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mb-8">
          Cada restaurante tiene una historia única. Traducimos esa historia a 
          experiencias digitales que cautivan, retienen y convierten — desde 
          menús interactivos hasta reservas con un solo click.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-100">
          {[
            { number: '50+', label: 'Restaurantes' },
            { number: '2M+', label: 'Visitas mensuales' },
            { number: '98%', label: 'Satisfacción' },
            { number: '3x', label: 'Más reservas' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-semibold text-charcoal mb-2">{stat.number}</div>
              <div className="text-gray-500 text-sm tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}