"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

const collections = [
  {
    id: "clasica",
    name: "Chica Clásica",
    description: "Inspirado en la mujer que proyecta elegancia atemporal en cada paso.",
    image: "/images/collection-clasica.jpg",
  },
  {
    id: "ejecutiva",
    name: "Chica Ejecutiva",
    description: "Inspirada en la mujer profesional, segura de sí misma y elegante.",
    image: "/images/collection-ejecutiva.jpg",
  },
  {
    id: "fiesta",
    name: "Chica Fiesta",
    description: "Inspirada en la mujer que brilla con confianza y elegancia en cada evento.",
    image: "/images/collection-fiesta.jpg",
  },
  {
    id: "playa",
    name: "Chica Playa",
    description: "Inspirado en la energía fresca, libre y sofisticada de la mujer veraniega.",
    image: "/images/collection-playa.jpg",
  },
]

export function Collections() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section id="colecciones" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Colecciones
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              onMouseEnter={() => setHoveredId(collection.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="aspect-[3/4] relative">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className={cn(
                    "object-cover transition-transform duration-700",
                    hoveredId === collection.id && "scale-110"
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-card mb-2">
                  {collection.name}
                </h3>
                <p className={cn(
                  "text-sm text-card/80 transition-all duration-300",
                  hoveredId === collection.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                )}>
                  {collection.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
