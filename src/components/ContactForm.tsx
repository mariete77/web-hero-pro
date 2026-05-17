import { useState } from 'react'
import { Send, MapPin, Mail, Phone } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    restaurant: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="py-32 px-6 md:px-12 bg-charcoal text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Text */}
          <div>
            <span className="text-sm tracking-widest uppercase text-gold font-medium">
              Hablemos
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold mt-4 mb-8 leading-tight">
              ¿Listo para<br />
              <span className="text-gold">transformar</span> tu restaurante?
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Cuéntanos sobre tu proyecto y te mostraremos cómo podemos 
              ayudarte a aumentar reservas, pedidos y fidelización.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-400">
                <MapPin className="w-5 h-5 text-gold" strokeWidth={1.5} />
                <span>Madrid, España</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <Mail className="w-5 h-5 text-gold" strokeWidth={1.5} />
                <span>hola@restaurant-solutions.es</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <Phone className="w-5 h-5 text-gold" strokeWidth={1.5} />
                <span>+34 600 000 000</span>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            {submitted ? (
              <div className="bg-white/5 rounded-2xl p-12 text-center border border-gold/20">
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">¡Mensaje enviado!</h3>
                <p className="text-gray-400">
                  Te contactaremos en menos de 24 horas para discutir tu proyecto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Tu nombre</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-colors"
                    placeholder="María García"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-colors"
                    placeholder="maria@miradorresort.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Restaurante</label>
                  <input
                    type="text"
                    required
                    value={formData.restaurant}
                    onChange={(e) => setFormData({ ...formData, restaurant: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-colors"
                    placeholder="Restaurante El Mirador"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Tu mensaje</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu restaurante y qué te gustaría conseguir..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-charcoal font-semibold py-4 rounded-xl hover:bg-gold-light transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}