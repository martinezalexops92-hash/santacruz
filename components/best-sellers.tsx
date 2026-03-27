import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const bestSellers = [
  {
    id: "14096",
    name: "ZOE-14096",
    price: 1899,
    image: "/images/product-1.jpg",
  },
  {
    id: "14093",
    name: "ZOE-14093",
    price: 1649,
    originalPrice: 1899,
    image: "/images/product-2.jpg",
  },
  {
    id: "14346",
    name: "ZOE-14346",
    price: 1899,
    image: "/images/product-3.jpg",
    soldOut: true,
  },
  {
    id: "14095",
    name: "ZOE-14095",
    price: 1649,
    originalPrice: 1899,
    image: "/images/product-5.jpg",
  },
]

export function BestSellers() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Best Sellers
          </h2>
          <Button variant="ghost" className="group text-muted-foreground hover:text-foreground">
            Ver todo
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
