"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    setEmail("")
  }

  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Únete a nuestra comunidad
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Suscríbete para recibir ofertas exclusivas, nuevos lanzamientos y un 10% de descuento en tu primera compra.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-primary-foreground text-foreground placeholder:text-muted-foreground border-0 h-12"
              required
            />
            <Button 
              type="submit" 
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 h-12 px-6"
            >
              <Send className="w-4 h-4 mr-2" />
              Suscribirse
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
