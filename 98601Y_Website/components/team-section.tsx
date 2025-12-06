"use client"

import { useEffect, useRef, useState } from "react"

const roles = [
  { role: "Lead Builder", description: "Mechanical design & construction" },
  { role: "Lead Programmer", description: "Autonomous & driver control" },
  { role: "Lead Designer", description: "CAD & prototyping" },
  { role: "Strategy Lead", description: "Competition analysis & tactics" },
]

export function TeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="team" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">The Crew</p>
          <h2 className="text-5xl md:text-7xl font-bold text-foreground">Our Team</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((member, index) => (
            <div
              key={member.role}
              className={`group relative p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm transition-all duration-700 hover:bg-card hover:border-accent/50 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />

              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <span className="text-2xl font-bold text-accent">{member.role[0]}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{member.role}</h3>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
