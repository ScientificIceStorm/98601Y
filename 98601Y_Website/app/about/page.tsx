"use client"

import { useEffect, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ParticleField } from "@/components/particle-field"
import { Users, Code, Wrench, Target } from "lucide-react"

/* ===============================
   Team Data
================================ */

const teamMembers = [
  { name: "Team Member 1", role: "Lead Builder", icon: Wrench },
  { name: "Team Member 2", role: "Lead Programmer", icon: Code },
  { name: "Team Member 3", role: "Strategy Lead", icon: Target },
  { name: "Team Member 4", role: "Team Captain", icon: Users },
]

/* ===============================
   Wave Image Gallery
================================ */

type GalleryImage = {
  src: string
  label: string
  link?: string
}

function WaveImageGallery({ images }: { images: GalleryImage[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="relative">
      {/* Top wave */}
      <div className="absolute -top-4 left-0 right-0 h-8 overflow-hidden">
        <svg viewBox="0 0 1200 40" className="w-full h-full animate-wave" preserveAspectRatio="none">
          <path
            d="M0 20 Q150 0 300 20 T600 20 T900 20 T1200 20 V40 H0 Z"
            fill="rgba(100,150,255,0.08)"
          />
        </svg>
      </div>

      {/* Images */}
      <div className="flex gap-6 items-stretch relative z-10">
        {images.map((img, i) => {
          const Wrapper = img.link ? "a" : "div"
          return (
            <Wrapper
              key={i}
              href={img.link}
              target={img.link ? "_blank" : undefined}
              rel={img.link ? "noopener noreferrer" : undefined}
              className="group relative h-[360px] flex-1 rounded-2xl overflow-hidden bg-card border border-border/40 cursor-pointer transition-all duration-500 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transform: hoveredIndex === i ? "scale(1.02)" : "scale(1)",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-contain bg-top bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${img.src})` }}
              />

              {/* Hover wave */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background:
                    "linear-gradient(45deg, transparent 30%, rgba(100,150,255,0.08) 50%, transparent 70%)",
                  animation: "wave 3s ease-in-out infinite",
                }}
              />

              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-sm font-display tracking-wide">
                  {img.label}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Wrapper>
          )
        })}
      </div>

      {/* Bottom wave */}
      <div className="absolute -bottom-4 left-0 right-0 h-8 overflow-hidden rotate-180">
        <svg
          viewBox="0 0 1200 40"
          className="w-full h-full animate-wave"
          preserveAspectRatio="none"
          style={{ animationDelay: "-2s" }}
        >
          <path
            d="M0 20 Q150 0 300 20 T600 20 T900 20 T1200 20 V40 H0 Z"
            fill="rgba(100,150,255,0.08)"
          />
        </svg>
      </div>
    </div>
  )
}

/* ===============================
   Page
================================ */

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
          {/* Hero */}
          <div className="mb-24">
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4 font-display">
              About Our Team
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 font-display">
              We Are{" "}
              <span className="text-accent relative">
                Atlantis
                <div className="absolute -inset-2 bg-accent/10 blur-2xl rounded-full -z-10" />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
              Team 98601Y Atlantis is a competitive VEX Robotics team from Troy High School dedicated to innovation,
              excellence, and pushing the boundaries of what's possible.
            </p>
          </div>

          {/* Workshop Images */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-foreground mb-8 font-display">
              Our Workshop
            </h2>

            <WaveImageGallery
              images={[
                {
                  src: "https://troyvex.org/oneworld/607617590_4202782159968673_7147195847232773575_n.jpg",
                  label: "Team Photo",
                  link: "#TEAM_IMAGE_LINK",
                },
                {
                  src: "https://media.discordapp.net/attachments/900591595315929098/1447448451255373874/image.png?ex=6959472b&is=6957f5ab&hm=911b5b62ca4da69b2d4a84a3f614db1c68cb80538ae0e4807da38e5dac52ad9e&=&format=webp&quality=lossless",
                  label: "Workshop",
                  link: "#TEAM_IMAGE_LINK",
                },
              ]}
            />
          </div>

          {/* Team */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-foreground mb-12 font-display">
              Meet The Team
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member) => {
                const Icon = member.icon
                return (
                  <div
                    key={member.name}
                    className="p-6 rounded-2xl bg-card/60 border border-border/50 backdrop-blur-sm hover:-translate-y-2 transition-all"
                  >
                    <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-4 mx-auto">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-center">{member.name}</h3>
                    <p className="text-sm text-muted-foreground text-center">{member.role}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Mission */}
          <div
            className="relative p-10 rounded-3xl bg-gradient-to-br from-accent/10 via-card/50 to-transparent border border-accent/20"
            style={{
              transform: `translateY(${Math.max(0, 50 - scrollY * 0.05)}px)`,
              opacity: Math.min(1, scrollY / 400),
            }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 font-display">
              Our Mission
            </h3>
            <p className="text-muted-foreground text-lg max-w-3xl">
              We design and build innovative robots while fostering a collaborative environment where every team
              member can learn, grow, and contribute.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
