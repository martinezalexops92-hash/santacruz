import Link from "next/link"
import { Instagram, Facebook, MessageCircle } from "lucide-react"

const footerLinks = {
  colecciones: [
    { label: "Chica Clásica", href: "#" },
    { label: "Chica Ejecutiva", href: "#" },
    { label: "Chica Fiesta", href: "#" },
    { label: "Chica Playa", href: "#" },
    { label: "Chica Tendencia", href: "#" },
  ],
  categorias: [
    { label: "Tacones", href: "#tacones" },
    { label: "Sandalias", href: "#sandalias" },
    { label: "Mocasines", href: "#mocasines" },
    { label: "Botines", href: "#botines" },
    { label: "Ofertas", href: "#" },
  ],
  ayuda: [
    { label: "Guía de Tallas", href: "#" },
    { label: "Envíos y Devoluciones", href: "#" },
    { label: "Preguntas Frecuentes", href: "#" },
    { label: "Contacto", href: "#" },
    { label: "Política de Privacidad", href: "#" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: MessageCircle, href: "#", label: "WhatsApp" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-card">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl font-bold mb-4">ZapatosZoe</h2>
            <p className="text-card/70 mb-6 max-w-sm leading-relaxed">
              Tu nuevo par favorito está aquí. Descubre calzado femenino elegante para cada ocasión.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-card/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Colecciones */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Colecciones</h3>
            <ul className="space-y-3">
              {footerLinks.colecciones.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-card/70 hover:text-card transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categorías */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Categorías</h3>
            <ul className="space-y-3">
              {footerLinks.categorias.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-card/70 hover:text-card transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ayuda */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Ayuda</h3>
            <ul className="space-y-3">
              {footerLinks.ayuda.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-card/70 hover:text-card transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-card/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-card/50 text-sm">
            © 2026 ZapatosZoe. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-card/50 hover:text-card text-sm transition-colors">
              Términos y Condiciones
            </Link>
            <Link href="#" className="text-card/50 hover:text-card text-sm transition-colors">
              Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
