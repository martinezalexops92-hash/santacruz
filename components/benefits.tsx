import { RefreshCw, Shield, CreditCard } from "lucide-react"

const benefits = [
  {
    icon: RefreshCw,
    title: "¿Tus zapatos no te quedaron bien?",
    description: "¡No te preocupes! Te ofrecemos cambio de talla gratis dentro de los 30 días posteriores a tu compra.",
  },
  {
    icon: Shield,
    title: "30 Días de Garantía",
    description: "Todos nuestros productos cuentan con una garantía de 30 días contra cualquier defecto de fábrica.",
  },
  {
    icon: CreditCard,
    title: "Pagos 100% Seguros",
    description: "No almacenamos ningún dato de tu tarjeta. Todas las compras son procesadas de forma segura y encriptada.",
  },
]

export function Benefits() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Cuando Compras Zapatos Con ZOE...
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
