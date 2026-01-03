"use client"

import { useEffect, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ParticleField } from "@/components/particle-field"
import { Users, Code, Wrench, Target } from "lucide-react"

const teamMembers = [
  { name: "Team Member 1", role: "Lead Builder", icon: Wrench },
  { name: "Team Member 2", role: "Lead Programmer", icon: Code },
  { name: "Team Member 3", role: "Strategy Lead", icon: Target },
  { name: "Team Member 4", role: "Team Captain", icon: Users },
]

function WaveImageGallery({ images }: { images: { label: string }[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="relative">
      {/* Top wave decoration */}
      <div className="absolute -top-4 left-0 right-0 h-8 overflow-hidden">
        <svg viewBox="0 0 1200 40" className="w-full h-full animate-wave" preserveAspectRatio="none">
          <path d="M0 20 Q150 0 300 20 T600 20 T900 20 T1200 20 V40 H0 Z" fill="rgba(100, 150, 255, 0.08)" />
        </svg>
      </div>

      <div className="grid md:grid-cols-2 gap-6 relative z-10">
        {images.map((img, i) => (
          <div
            key={i}
            className="group relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-card/80 to-card/40 border border-border/40 cursor-pointer transition-all duration-500 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              transform: hoveredIndex === i ? "scale(1.02)" : "scale(1)",
              transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* Inner wave animation on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background: "linear-gradient(45deg, transparent 30%, rgba(100, 150, 255, 0.05) 50%, transparent 70%)",
                animation: "wave 3s ease-in-out infinite",
              }}
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-muted-foreground/60 text-sm font-display tracking-wide group-hover:text-muted-foreground transition-colors">
                {img.label}
              </p>
            </div>

            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute -bottom-4 left-0 right-0 h-8 overflow-hidden rotate-180">
        <svg
          viewBox="0 0 1200 40"
          className="w-full h-full animate-wave"
          preserveAspectRatio="none"
          style={{ animationDelay: "-2s" }}
        >
          <path d="M0 20 Q150 0 300 20 T600 20 T900 20 T1200 20 V40 H0 Z" fill="rgba(100, 150, 255, 0.08)" />
        </svg>
      </div>
    </div>
  )
}

export default function AboutPage() {
  const [loaded, setLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setLoaded(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <ParticleField />
      <Navigation />

      <div className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero section with staggered animation */}
          <div className="mb-24">
            <p
              className="text-accent text-sm tracking-[0.3em] uppercase mb-4 font-display"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease-out 0.2s",
              }}
            >
              About Our Team
            </p>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 font-display leading-tight"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.8s ease-out 0.3s",
              }}
            >
              We Are{" "}
              <span className="text-accent relative">
                Atlantis
                <div className="absolute -inset-2 bg-accent/10 blur-2xl rounded-full -z-10" />
              </span>
            </h1>
            <p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease-out 0.5s",
              }}
            >
              Team 98601Y Atlantis is a competitive VEX Robotics team from Troy High School dedicated to innovation,
              excellence, and pushing the boundaries of what's possible. Like the legendary city, we rise from the
              depths to achieve greatness in every competition.
            </p>
          </div>

          {/* Image gallery with wave effect */}
          <div className="mb-24">
            <h2
              className="text-3xl font-bold text-foreground mb-8 font-display"
              style={{
                opacity: loaded ? 1 : 0,
                transition: "opacity 0.6s ease-out 0.7s",
              }}
            >
              Our Workshop
            </h2>
            <WaveImageGallery
  images={[
    {
      src: "https://troyvex.org/oneworld/607617590_4202782159968673_7147195847232773575_n.jpg",
      label: "Team Photo",
      link: "#TEAM_IMAGE_LINK",
    },
  ]}
/>

          </div>

          {/* Team members */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-foreground mb-12 font-display">Meet The Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => {
                const Icon = member.icon
                const delay = 0.1 * index
                return (
                  <div
                    key={member.name}
                    className="group relative p-6 rounded-2xl bg-card/60 border border-border/50 backdrop-blur-sm transition-all duration-500 hover:bg-card hover:border-accent/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/5"
                    style={{
                      opacity: loaded ? 1 : 0,
                      transform: loaded ? "translateY(0)" : "translateY(40px)",
                      transition: `all 0.6s ease-out ${0.8 + delay}s`,
                    }}
                  >
                    {/* Placeholder for member photo */}
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-500 border border-accent/20">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground text-center mb-1 font-display">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground text-center">{member.role}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Mission statement */}
          <div
            className="relative p-10 rounded-3xl bg-gradient-to-br from-accent/10 via-card/50 to-transparent border border-accent/20 overflow-hidden"
            style={{
              transform: `translateY(${Math.max(0, 50 - scrollY * 0.05)}px)`,
              opacity: Math.min(1, scrollY / 400),
            }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 font-display">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl">
              We strive to design and build innovative robots that compete at the highest level while fostering a
              collaborative environment where every team member can learn, grow, and contribute their unique skills to
              our shared success. Together, we push the boundaries of engineering excellence.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
