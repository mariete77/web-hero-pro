import { UtensilsCrossed } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 md:px-12 bg-charcoal border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <UtensilsCrossed className="w-6 h-6 text-gold" strokeWidth={1.5} />
            <span className="text-white font-semibold text-lg">Restaurant Solutions</span>
          </div>

          <p className="text-gray-500 text-sm">
            © {currentYear} Restaurant Solutions. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}