"use client"

import { useEffect, useRef, useState } from "react"

const features = [
  {
    title: "Resilience",
    description: "Inspired by the Space Shuttle Atlantis, we rise through failure and perform when the stakes are highest.",
  },
  {
    title: "Purposeful Engineering",
    description: "We design, test, and iterate with discipline to deliver reliable, competitive robotic systems.",
  },
  {
    title: "Unified Excellence",
    description: "Through collaboration, leadership, and shared responsibility, we push beyond limits together.",
  },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const sectionHeight = sectionRef.current.offsetHeight
      const viewportHeight = window.innerHeight

      const scrolledPast = viewportHeight - rect.top
      const progress = Math.max(0, Math.min(1, scrolledPast / (sectionHeight + viewportHeight * 0.5)))

      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none"
        style={{ transform: `translateX(${(1 - scrollProgress) * 200}px)` }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">About Us</p>
            <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              We Are
              <br />
              <span className="text-accent">Atlantis</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Team 98601Y Atlantis is a competitive VEX Robotics team driven by innovation, excellence, and resilience. Our name honors the Space Shuttle Atlantis—a symbol of perseverance in the face of failure, overcoming technical adversity and succeeding when the stakes were highest. Guided by that legacy, we view challenges not as obstacles but as catalysts for growth. Through disciplined engineering, relentless iteration, and unified teamwork, we rise after every setback and push beyond perceived limits to achieve excellence in VEX Robotics competition.
            </p>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm transition-all duration-500 hover:bg-card hover:border-accent/30 hover:translate-x-2"
                style={{
                  opacity: Math.min(1, scrollProgress * 3 - index * 0.3),
                  transform: `translateX(${Math.max(0, 1 - scrollProgress * 3 + index * 0.3) * 50}px)`,
                }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
