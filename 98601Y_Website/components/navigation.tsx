"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
        scrolled ? "bg-background/60 backdrop-blur-2xl" : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-8 h-8 border border-foreground/20 group-hover:border-accent/50 transition-colors duration-300 flex items-center justify-center">
              <span className="text-xs font-bold tracking-tight text-foreground/80 group-hover:text-accent transition-colors">
                Y
              </span>
            </div>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-xs font-medium tracking-[0.2em] text-foreground/90">TEAM 98601Y</span>
            <span className="text-[10px] tracking-[0.15em] text-muted-foreground">ATLANTIS</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Robots", href: "/robots" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 py-2 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-foreground/70 hover:text-foreground transition-colors"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden transition-all duration-300",
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Robots", href: "/robots" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
