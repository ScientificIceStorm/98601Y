"use client"

import { useEffect, useState, useRef } from "react"
import { Trophy, Calendar, MapPin, Award, Medal } from "lucide-react"
import { Countdown } from "./countdown"

/* ===============================
   Events (with image placeholders)
================================ */

const events = [
  {
    id: 1,
    title: "Season Kickoff",
    date: "2025-09-17T09:00:00",
    location: "Home",
    description: "Our Start of the VEX Season",
    status: "completed" as const,
    image:
      "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?cs=srgb&dl=pexels-eberhardgross-1287145.jpg&fm=jpg",
    awards: [],
  },
  {
    id: 2,
    title: "Supernova Spectacular",
    date: "2025-11-09T08:00:00",
    location: "North Hollywood, CA",
    description: "First Official Competition",
    status: "completed" as const,
    image: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg",
    awards: [{ name: "Think Award", type: "judged", icon: Award }],
  },
  {
    id: 3,
    title: "Beach Brawl Tournament",
    date: "2025-11-15T08:30:00",
    location: "McBride HS, Long Beach",
    description: "Regional Competition",
    status: "completed" as const,
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
    awards: [
      { name: "Tournament Finalists", type: "performance", icon: Trophy },
      { name: "Excellence Award", type: "excellence", icon: Medal },
      { name: "Robot Skills Champion", type: "participation", icon: Medal },
    ],
  },
  {
    id: 4,
    title: "One World Signature",
    date: "2025-11-21T09:00:00",
    location: "UC Berkeley, CA",
    description: "First Signature Event",
    status: "completed" as const,
    image: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg",
    awards: [{ name: "Tournament Finalists", type: "performance", icon: Trophy }],
  },
  {
    id: 5,
    title: "San Diego Match Only",
    date: "2025-12-07T09:00:00",
    location: "San Diego, CA",
    description: "Practice with new robot",
    status: "completed" as const,
    image: "https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg",
    awards: [
      { name: "Tournament Champions", type: "performance", icon: Trophy },
      { name: "Robot Skills Champion", type: "participation", icon: Medal },
    ],
  },
  {
    id: 6,
    title: "Harvard-Westlake",
    date: "2025-12-14T08:30:00",
    location: "Studio City, CA",
    description: "Signature Event Practice",
    status: "completed" as const,
    image: "https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg",
    awards: [{ name: "Robot Skills Champion", type: "participation", icon: Medal }],
  },
  {
    id: 7,
    title: "Diamond in the Desert",
    date: "2025-12-30T09:00:00",
    location: "Mesa, AZ",
    description: "Second Signature Event",
    status: "completed" as const,
    image: "https://images.pexels.com/photos/462146/pexels-photo-462146.jpeg",
    awards: [
      { name: "Tournament Champions", type: "performance", icon: Trophy },
      { name: "Robot Skills Champion", type: "participation", icon: Medal },
    ],
  },
  {
    id: 8,
    title: "Ignite Northwest",
    date: "2026-01-09T09:00:00",
    location: "Monroe, WA",
    description: "First Sig Event of 2026",
    status: "upcoming" as const,
    image: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg",
    awards: [],
  },
]

/* ===============================
   Award styles
================================ */

const awardStyles = {
  excellence: { bg: "bg-amber-500/20", border: "border-amber-500/50", text: "text-amber-400" },
  performance: { bg: "bg-blue-500/20", border: "border-blue-500/50", text: "text-blue-400" },
  judged: { bg: "bg-purple-500/20", border: "border-purple-500/50", text: "text-purple-400" },
  participation: { bg: "bg-emerald-500/20", border: "border-emerald-500/50", text: "text-emerald-400" },
}

/* ===============================
   Roadmap Section
================================ */

export function RoadmapSection() {
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const [sectionTop, setSectionTop] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    setWindowHeight(window.innerHeight)
    const handleScroll = () => {
      setScrollY(window.scrollY)
      if (sectionRef.current) setSectionTop(sectionRef.current.offsetTop)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", () => setWindowHeight(window.innerHeight))
    handleScroll()
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", () => setWindowHeight(window.innerHeight))
    }
  }, [])

  const scrollIntoSection = scrollY - sectionTop + windowHeight * 0.7
  const sectionHeight = events.length * 180
  const progress = Math.min(Math.max(scrollIntoSection / sectionHeight, 0), 1)
  const carPosition = progress * (events.length - 1)

  return (
    <section ref={sectionRef} className="relative py-16 px-6" style={{ minHeight: `${events.length * 180 + 200}px` }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-wider mb-3 text-foreground font-display">
            THE JOURNEY
          </h2>
          <p className="text-muted-foreground">Our path to the World Championship</p>
        </div>

        <div className="relative">
          {/* Track */}
          <div className="absolute left-1/2 top-0 bottom-0 w-2 -translate-x-1/2 bg-muted/30 rounded-full">
            <div
              className="absolute top-0 left-0 right-0 bg-accent rounded-full transition-all duration-150"
              style={{ height: `${progress * 100}%` }}
            />
          </div>

          {/* Rover */}
          <div
            className="absolute left-1/2 -translate-x-1/2 z-30 pointer-events-none transition-all duration-150"
            style={{ top: `${carPosition * 180 + 60}px` }}
          >
            <div className="w-12 h-6 bg-blue-600 rounded-md shadow-lg" />
          </div>

          {/* Events */}
          <div className="relative pt-4">
            {events.map((event, index) => {
              const isLeft = index % 2 === 0
              const isPassed = carPosition >= index - 0.3

              return (
                <div
                  key={event.id}
                  className={`relative flex items-center ${isLeft ? "flex-row" : "flex-row-reverse"}`}
                  style={{ minHeight: "160px", marginBottom: "40px" }}
                >
                  <div className={`w-[calc(50%-40px)] ${isLeft ? "pr-4 text-right" : "pl-4 text-left"}`}>
                    <div
                      className={`p-4 rounded-xl border transition-all duration-500 h-[280px] flex flex-col ${
                        isPassed
                          ? "bg-card/90 border-accent/40 shadow-lg"
                          : "bg-card/20 border-border/20 opacity-40"
                      }`}
                    >
                      {/* Image */}
                      <div
                        className="mb-3 h-28 rounded-lg bg-cover bg-center"
                        style={{ backgroundImage: `url(${event.image})` }}
                      />

                      <h3 className="text-sm font-bold text-foreground mb-1 font-display">{event.title}</h3>

                      <div
                        className={`flex items-center gap-2 text-xs text-muted-foreground mb-1 ${
                          isLeft ? "justify-end" : "justify-start"
                        }`}
                      >
                        <Calendar className="w-3 h-3" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>

                      <p className="text-xs text-muted-foreground/70 mb-2">{event.location}</p>

                      <Countdown targetDate={event.date} status={event.status} />

                      {event.awards.length > 0 && (
                        <div className={`flex flex-wrap gap-1.5 mt-auto ${isLeft ? "justify-end" : "justify-start"}`}>
                          {event.awards.map((award, i) => {
                            const style = awardStyles[award.type as keyof typeof awardStyles]
                            const Icon = award.icon
                            return (
                              <div
                                key={i}
                                className={`flex items-center gap-1 px-2 py-1 ${style.bg} border ${style.border} rounded-md text-[10px] ${style.text}`}
                              >
                                <Icon className="w-2.5 h-2.5" />
                                {award.name}
                              </div>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-20">
                    <div
                      className={`w-4 h-4 rounded-full border-2 ${
                        isPassed ? "bg-accent border-accent" : "bg-background border-muted"
                      }`}
                    />
                  </div>

                  <div className="w-[calc(50%-40px)]" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
