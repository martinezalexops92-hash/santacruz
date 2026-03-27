"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  soldOut?: boolean
}

export function ProductCard({ id, name, price, originalPrice, image, soldOut }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary">
        <Image
          src={image}
          alt={name}
          fill
          className={cn(
            "object-cover transition-transform duration-500",
            isHovered && "scale-105"
          )}
        />
        {soldOut && (
          <div className="absolute top-3 left-3 bg-foreground/80 text-card text-xs font-medium px-3 py-1 rounded-full">
            Agotado
          </div>
        )}
        {originalPrice && !soldOut && (
          <div className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full">
            Oferta
          </div>
        )}
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="text-sm font-medium text-foreground">{name}</h3>
        <div className="flex items-center gap-2">
          <p className={cn(
            "text-sm font-semibold",
            originalPrice ? "text-primary" : "text-foreground"
          )}>
            {formatPrice(price)}
          </p>
          {originalPrice && (
            <p className="text-sm text-muted-foreground line-through">
              {formatPrice(originalPrice)}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
