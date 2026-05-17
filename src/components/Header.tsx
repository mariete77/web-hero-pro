import { useEffect, useState } from 'react'

const NAV = [
  { label: 'Carta', href: '#' },
  { label: 'Experiencia', href: '#' },
  { label: 'Contacto', href: '#' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-black' : 'bg-transparent'
      }`}
    >
      {/* Navigation Container: padding 20px 24px, flex space-between */}
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5">
        <a
          href="#"
          className="text-base font-medium tracking-tight text-white transition-opacity hover:opacity-70"
        >
          Lumière
        </a>

        <nav className="hidden items-center md:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 text-sm font-medium text-white transition-opacity hover:opacity-70"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Button Secondary (ghost): 0px radius, sin sombra, hover por opacidad */}
        <a
          href="#"
          className="bg-[rgba(239,239,239,0.3)] px-4 py-2 text-sm font-normal text-white transition-opacity hover:opacity-70"
        >
          Reservar
        </a>
      </div>
    </header>
  )
}
