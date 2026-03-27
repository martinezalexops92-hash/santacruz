import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface CategorySectionProps {
  id: string
  title: string
  products: {
    id: string
    name: string
    price: number
    originalPrice?: number
    image: string
    soldOut?: boolean
  }[]
}

export function CategorySection({ id, title, products }: CategorySectionProps) {
  return (
    <section id={id} className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            {title}
          </h2>
          <Button variant="ghost" className="group text-muted-foreground hover:text-foreground">
            Ver todo
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
