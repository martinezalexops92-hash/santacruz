import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const featuredProducts = [
  {
    id: "14345",
    name: "ZOE-14345",
    price: 1899,
    image: "/images/product-1.jpg",
  },
  {
    id: "14351",
    name: "ZOE-14351",
    price: 1899,
    image: "/images/product-2.jpg",
  },
  {
    id: "14414",
    name: "ZOE-14414",
    price: 1399,
    image: "/images/product-3.jpg",
  },
  {
    id: "14023",
    name: "ZOE-14023",
    price: 1099,
    originalPrice: 1199,
    image: "/images/product-4.jpg",
  },
  {
    id: "14492",
    name: "ZOE-14492",
    price: 1549,
    image: "/images/product-5.jpg",
  },
  {
    id: "14373",
    name: "ZOE-14373",
    price: 2399,
    image: "/images/product-6.jpg",
  },
  {
    id: "14372",
    name: "BOLTIO-14372",
    price: 2399,
    image: "/images/product-7.jpg",
  },
  {
    id: "14371",
    name: "ZOE-14371",
    price: 2399,
    image: "/images/product-8.jpg",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            El verano llegó y tus mejores momentos empiezan con un nuevo par
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button variant="outline" size="lg" className="group">
            Ver todo
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
