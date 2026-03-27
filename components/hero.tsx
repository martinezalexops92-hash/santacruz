import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
      <Image
        src="/images/hero-summer.jpg"
        alt="Colección de verano ZapatosZoe"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <p className="text-card/90 text-sm md:text-base font-medium tracking-widest uppercase mb-4">
          Tu nuevo par favorito está aquí
        </p>
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-card mb-6 text-balance">
          Summer Vibes
        </h2>
        <Button 
          size="lg" 
          className="bg-card text-foreground hover:bg-card/90 font-medium px-8 py-6 text-base"
        >
          Ver colección
        </Button>
      </div>
    </section>
  )
}
