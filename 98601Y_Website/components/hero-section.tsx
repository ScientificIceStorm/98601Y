"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Delay for loading screen
    setTimeout(() => setLoaded(true), 4800)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollProgress = Math.min(scrollY / 600, 1)
  const titleOpacity = Math.max(1 - scrollProgress * 1.5, 0)

  return (
    <section className="relative h-[200vh]">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-accent/3 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center" style={{ opacity: titleOpacity }}>
          {/* Main ATLANTIS title */}
          <div className="flex items-center justify-center mb-6">
            {"ATLANTIS".split("").map((letter, i) => (
              <span
                key={i}
                className="text-[14vw] md:text-[12vw] lg:text-[10vw] font-bold tracking-wider leading-[0.85] text-foreground select-none"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? "translateY(0)" : "translateY(40px)",
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.08}s`,
                  textShadow: "0 0 80px rgba(100, 150, 255, 0.15)",
                }}
              >
                {letter}
              </span>
            ))}
          </div>

          {/* 98601Y with accent glow */}
          <div
            className="relative mb-4"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0) scale(1)" : "translateY(20px) scale(0.9)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.7s",
            }}
          >
            {/* Glow behind */}
            <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full scale-150" />
            <span
              className="relative text-accent text-3xl md:text-5xl lg:text-6xl tracking-[0.4em] font-bold"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                textShadow: "0 0 40px rgba(100, 150, 255, 0.8), 0 0 80px rgba(100, 150, 255, 0.4)",
              }}
            >
              98601Y
            </span>
          </div>

          {/* Troy High School */}
          <p
            className="text-muted-foreground/70 text-sm md:text-base tracking-[0.5em] uppercase mb-6"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(15px)",
              transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.9s",
            }}
          >
            Troy High School
          </p>

          {/* VEX Robotics badge */}
          <div
            className="flex items-center gap-3 px-6 py-3 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-sm"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(15px)",
              transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 1.1s",
            }}
          >
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span
              className="text-muted-foreground text-xs md:text-sm tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              VEX Robotics Competition Team
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          style={{
            opacity: loaded ? Math.max(1 - scrollProgress * 4, 0) : 0,
            transition: loaded ? "none" : "opacity 0.6s 1.3s",
          }}
        >
          <span
            className="text-muted-foreground/40 text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Scroll to Launch
          </span>
          <div className="flex flex-col items-center gap-1">
            <ChevronDown className="w-4 h-4 text-accent/60 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
