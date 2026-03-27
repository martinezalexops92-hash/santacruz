import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { BestSellers } from "@/components/best-sellers"
import { Collections } from "@/components/collections"
import { FeaturedProducts } from "@/components/featured-products"
import { Benefits } from "@/components/benefits"
import { CategorySection } from "@/components/category-section"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

const mocasines = [
  { id: "14449", name: "ZOE-14449", price: 16640, image: "/images/product-4.jpg" },
  { id: "14070", name: "ZOE-14070", price: 21630, originalPrice: 24720, image: "/images/product-4.jpg" },
  { id: "14258", name: "ZOE-14258", price: 26240, image: "/images/product-4.jpg" },
  { id: "14546", name: "ZOE-14546", price: 27840, image: "/images/product-4.jpg" },
]

const botines = [
  { id: "14652", name: "GEMA-14652", price: 28640, image: "/images/product-7.jpg" },
  { id: "14650", name: "ZOE-14650", price: 28640, image: "/images/product-7.jpg" },
  { id: "14304", name: "ZOE-14304", price: 27920, image: "/images/product-7.jpg" },
  { id: "14305", name: "ZOE-14305", price: 27920, image: "/images/product-7.jpg" },
]

const tacones = [
  { id: "14500", name: "ZOE-14500", price: 18720, image: "/images/product-2.jpg" },
  { id: "14501", name: "ZOE-14501", price: 19240, image: "/images/product-6.jpg" },
  { id: "14502", name: "ZOE-14502", price: 17630, originalPrice: 19720, image: "/images/product-2.jpg" },
  { id: "14503", name: "ZOE-14503", price: 21840, image: "/images/product-6.jpg" },
]

const sandalias = [
  { id: "14600", name: "ZOE-14600", price: 14720, image: "/images/product-1.jpg" },
  { id: "14601", name: "ZOE-14601", price: 15240, image: "/images/product-3.jpg" },
  { id: "14602", name: "ZOE-14602", price: 13630, originalPrice: 15720, image: "/images/product-5.jpg" },
  { id: "14603", name: "ZOE-14603", price: 16840, image: "/images/product-8.jpg" },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <BestSellers />
      <Collections />
      <FeaturedProducts />
      <Benefits />
      <CategorySection id="mocasines" title="Mocasines" products={mocasines} />
      <CategorySection id="botines" title="Botines" products={botines} />
      <CategorySection id="tacones" title="Tacones" products={tacones} />
      <CategorySection id="sandalias" title="Sandalias" products={sandalias} />
      <Newsletter />
      <Footer />
    </main>
  )
}
