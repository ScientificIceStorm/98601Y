"use client"

import { useEffect, useRef, useState } from "react"

const features = [
  {
    title: "Engineering Excellence",
    description: "We design and build competition-ready robots with precision engineering and innovative solutions.",
  },
  {
    title: "Team Collaboration",
    description: "Our diverse team brings together unique skills in programming, design, and strategy.",
  },
  {
    title: "Continuous Learning",
    description: "We embrace challenges as opportunities to grow and push the boundaries of what's possible.",
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
              Team 98601Y Atlantis is a competitive VEX Robotics team dedicated to innovation, excellence, and pushing
              the boundaries of what&apos;s possible in robotics competition. Like the legendary city, we rise from the
              depths to achieve greatness.
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
