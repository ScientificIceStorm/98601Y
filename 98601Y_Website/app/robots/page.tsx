"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ParticleField } from "@/components/particle-field"
import { Trophy, Medal, Award, Star, Cpu } from "lucide-react"

const robots = [
  {
    name: "Exposition",
    type: "Ruiguan-Style Bot",
    description:
      "Our first competition robot designed as a Ruiguan-style Bot. Exposition competed in multiple tournaments and earned several prestigious awards through its reliable performance and innovative design.",
    status: "Retired",
    awards: [
      { name: "Excellence Award", type: "excellence", icon: Medal },
      { name: "Tournament Champions", type: "winning", icon: Trophy },
      { name: "Tournament Finalists", type: "performance", icon: Trophy },
      { name: "Tournament Finalists", type: "performance", icon: Trophy },
      { name: "Robot Skills Champion", type: "participation", icon: Trophy },
      { name: "Think Award", type: "judged", icon: Award },
    ],
    images: 0,
  },
  {
    name: "Atlantis",
    type: "S Bot",
    description:
      "Our second robot currently in development. This S bot design focuses on speed and efficiency with advanced autonomous capabilities. Stay tuned for updates as we prepare for upcoming competitions.",
    status: "Active",
    awards: [
      { name: "Tournament Champions", type: "winning", icon: Trophy },
      { name: "Robot Skills Champion", type: "participation", icon: Trophy },
      { name: "Robot Skills Champion", type: "participation", icon: Trophy },
      { name: "Robot Skills Champion", type: "participation", icon: Trophy },
    ],
    images: 0,
  },
]

const awardStyles = {
  excellence: {
    bg: "from-amber-500/25 to-amber-600/10",
    border: "border-amber-500/50",
    text: "text-amber-400",
    glow: "shadow-amber-500/20",
  },
  winning: {
    bg: "from-pink-500/25 to-pink-600/10",
    border: "border-pink-500/50",
    text: "text-pink-400",
    glow: "shadow-pink-500/20",
  },
  performance: {
    bg: "from-blue-500/25 to-blue-600/10",
    border: "border-blue-500/50",
    text: "text-blue-400",
    glow: "shadow-blue-500/20",
  },
  judged: {
    bg: "from-purple-500/25 to-purple-600/10",
    border: "border-purple-500/50",
    text: "text-purple-400",
    glow: "shadow-purple-500/20",
  },
  participation: {
    bg: "from-emerald-500/25 to-emerald-600/10",
    border: "border-emerald-500/50",
    text: "text-emerald-400",
    glow: "shadow-emerald-500/20",
  },
}

function WaveGallery({ count, robotName }: { count: number; robotName: string }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="relative py-6">
      {/* Top wave */}
      <div className="absolute -top-2 left-0 right-0 h-6 overflow-hidden pointer-events-none">
        <svg viewBox="0 0 1200 30" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0 15 Q150 5 300 15 T600 15 T900 15 T1200 15 V30 H0 Z"
            fill="rgba(100, 150, 255, 0.06)"
            className="animate-wave"
          />
        </svg>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(count)].map((_, i) => (
          <div
            key={i}
            className="group relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-muted/30 to-muted/10 border border-border/40 cursor-pointer"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              transform: hoveredIndex === i ? "scale(1.05) translateY(-4px)" : "scale(1)",
              boxShadow: hoveredIndex === i ? "0 20px 40px -10px rgba(100, 150, 255, 0.15)" : "none",
              transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* Shimmer effect on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.1) 50%, transparent 75%)",
                animation: "shine 2s ease-in-out infinite",
              }}
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Cpu className="w-8 h-8 text-muted-foreground/30 mx-auto mb-2 group-hover:text-accent/50 transition-colors" />
                <p className="text-muted-foreground/50 text-xs group-hover:text-muted-foreground transition-colors">
                  {robotName} #{i + 1}
                </p>
              </div>
            </div>

            {/* Border glow on hover */}
            <div className="absolute inset-0 rounded-xl border-2 border-accent/0 group-hover:border-accent/30 transition-all duration-500" />
          </div>
        ))}
      </div>

      {/* Bottom wave */}
      <div className="absolute -bottom-2 left-0 right-0 h-6 overflow-hidden rotate-180 pointer-events-none">
        <svg viewBox="0 0 1200 30" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0 15 Q150 5 300 15 T600 15 T900 15 T1200 15 V30 H0 Z"
            fill="rgba(100, 150, 255, 0.06)"
            className="animate-wave"
            style={{ animationDelay: "-1.5s" }}
          />
        </svg>
      </div>
    </div>
  )
}

export default function RobotsPage() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <ParticleField />
      <Navigation />

      <div className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-20">
            <p
              className="text-accent text-sm tracking-[0.3em] uppercase mb-4 font-display"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease-out 0.2s",
              }}
            >
              Our Machines
            </p>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 font-display"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.8s ease-out 0.3s",
              }}
            >
              Our <span className="text-accent">Robots</span>
            </h1>
            <p
              className="text-lg md:text-xl text-muted-foreground max-w-3xl"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease-out 0.5s",
              }}
            >
              Meet the machines that represent Team 98601Y Atlantis in competition. Each robot embodies our commitment
              to innovation and engineering excellence.
            </p>
          </div>

          {/* Robots */}
          <div className="space-y-20">
            {robots.map((robot, idx) => (
              <div
                key={robot.name}
                className="relative p-8 md:p-10 rounded-3xl bg-card/50 border border-border/50 backdrop-blur-sm overflow-hidden"
                style={{
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? "translateY(0)" : "translateY(50px)",
                  transition: `all 0.8s ease-out ${0.6 + idx * 0.2}s`,
                }}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                  <div>
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display">{robot.name}</h2>
                      <span
                        className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide ${
                          robot.status === "Active"
                            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                            : "bg-blue-500/20 text-blue-400 border border-blue-500/40"
                        }`}
                      >
                        {robot.status}
                      </span>
                    </div>
                    <p className="text-accent font-display font-medium mb-4 tracking-wide">{robot.type}</p>
                    <p className="text-muted-foreground leading-relaxed max-w-2xl">{robot.description}</p>
                  </div>
                </div>

                {/* Gallery */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4 font-display">Gallery</h3>
                  <WaveGallery count={robot.images} robotName={robot.name} />
                </div>

                {/* Awards */}
                {robot.awards.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 font-display">Awards</h3>
                    <div className="flex flex-wrap gap-3">
                      {robot.awards.map((award, i) => {
                        const style = awardStyles[award.type as keyof typeof awardStyles]
                        const Icon = award.icon
                        return (
                          <div
                            key={i}
                            className={`group relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gradient-to-br ${style.bg} border ${style.border} ${style.text} font-medium shadow-lg ${style.glow} transition-all duration-300 hover:scale-105 overflow-hidden`}
                          >
                            {/* Shine effect */}
                            <div
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                              style={{
                                background:
                                  "linear-gradient(110deg, transparent 20%, rgba(255,255,255,0.15) 50%, transparent 80%)",
                                animation: "shine 2.5s ease-in-out infinite",
                              }}
                            />
                            <Icon className="w-4 h-4 relative z-10" />
                            <span className="relative z-10">{award.name}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
