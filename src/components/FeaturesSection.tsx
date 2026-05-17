import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  UtensilsCrossed,
  CalendarCheck,
  ShoppingBag,
  Star,
  BarChart3,
  Smartphone,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const FEATURES = [
  {
    icon: UtensilsCrossed,
    title: 'Menú Digital Interactivo',
    description:
      'Platos que se ven irresistiblemente. Categorización inteligente, filtros por alérgenos y actualizaciones en tiempo real.',
  },
  {
    icon: CalendarCheck,
    title: 'Reservas Online',
    description:
      'Integración directa con tu sistema. Los clientes reservan en 10 segundos, sin llamadas, sin esperas.',
  },
  {
    icon: ShoppingBag,
    title: 'Pedidos Online',
    description:
      'Delivery y recogida integrados. Pagos digitales, seguimiento en tiempo real y gestión de pedidos centralizada.',
  },
  {
    icon: Star,
    title: 'Reseñas & Reputación',
    description:
      'Acumula reseñas positivas automáticamente. Respuestas inteligentes y gestión de reputación online.',
  },
  {
    icon: BarChart3,
    title: 'Analytics Avanzado',
    description:
      'Sabes qué/platán/cuándo pide cada cliente. Insights actionable para aumentar ticket promedio y repetición.',
  },
  {
    icon: Smartphone,
    title: 'App Propia',
    description:
      'Tu marca en el bolsillo del cliente. Notificaciones push, fidelización y conexión directa sin intermediarios.',
  },
]

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 px-6 md:px-12 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm tracking-widest uppercase text-gold font-medium">
            Funcionalidades
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-charcoal mt-4 mb-6">
            Todo lo que necesitas,<br />en un solo lugar
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Una plataforma completa que crece contigo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="feature-card bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}