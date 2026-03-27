"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingBag, Menu, X, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navLinks = [
  { href: "#colecciones", label: "Colecciones" },
  { href: "#tacones", label: "Tacones" },
  { href: "#sandalias", label: "Sandalias" },
  { href: "#mocasines", label: "Mocasines" },
  { href: "#botines", label: "Botines" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [cartCount] = useState(0)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] bg-background">
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.slice(0, 3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Logo */}
        <Link href="/" className="flex items-center justify-center">
          <h1 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            ZapatosZoe
          </h1>
        </Link>

        {/* Desktop Nav Right */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.slice(3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:inline-flex">
            <Search className="h-5 w-5" />
            <span className="sr-only">Buscar</span>
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:inline-flex">
            <User className="h-5 w-5" />
            <span className="sr-only">Mi cuenta</span>
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-bold text-primary-foreground flex items-center justify-center">
                {cartCount}
              </span>
            )}
            <span className="sr-only">Carrito</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
