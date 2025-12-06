"use client"

import { useEffect, useState } from "react"

export function RocketSection() {
  const [scrollY, setScrollY] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    setWindowHeight(window.innerHeight)
    const handleScroll = () => setScrollY(window.scrollY)
    const handleResize = () => setWindowHeight(window.innerHeight)
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize)
    handleScroll()
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const sectionStart = windowHeight * 0.5
  const launchRange = windowHeight * 1.5
  const launchProgress = Math.min(Math.max((scrollY - sectionStart) / launchRange, 0), 1)

  // Smooth easing for natural rocket movement
  const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))
  const easedProgress = easeOutExpo(launchProgress)

  const shuttleY = easedProgress * windowHeight * 1.8
  const flameIntensity = Math.min(launchProgress * 3, 1)
  const shuttleScale = 1 + easedProgress * 0.15

  return (
    <section className="relative h-[80vh]">
      {/* Launch pad glow */}
      <div
        className="fixed bottom-0 left-0 right-0 h-48 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse at center bottom, rgba(255, 140, 60, ${0.25 * flameIntensity}) 0%, transparent 70%)`,
          opacity: flameIntensity > 0.05 ? 1 : 0,
        }}
      />

      {/* Launch Pad Structure */}
      <div
        className="fixed left-1/2 -translate-x-1/2 z-10 pointer-events-none transition-opacity duration-700"
        style={{
          bottom: "20px",
          opacity: Math.max(0, 1 - launchProgress * 2),
        }}
      >
        {/* Launch tower */}
        <div className="absolute -left-24 bottom-0 w-3 h-40 bg-gradient-to-t from-zinc-700 to-zinc-600 rounded-t" />
        <div className="absolute -left-28 bottom-32 w-12 h-2 bg-zinc-600 rounded" />
        <div className="absolute -left-26 bottom-24 w-8 h-1 bg-zinc-500 rounded" />

        {/* Platform */}
        <div className="relative">
          <div className="w-48 h-4 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 rounded-sm" />
          <div className="absolute -left-4 -right-4 top-4 h-8 bg-gradient-to-b from-zinc-900 to-transparent" />
          {/* Support beams */}
          <div className="absolute left-4 top-4 w-2 h-12 bg-zinc-800 transform rotate-12 origin-top" />
          <div className="absolute right-4 top-4 w-2 h-12 bg-zinc-800 transform -rotate-12 origin-top" />
        </div>
      </div>

      {/* Rocket */}
      <div
        className="fixed left-1/2 z-20 pointer-events-none"
        style={{
          bottom: `${40 + shuttleY}px`,
          transform: `translateX(-50%) scale(${shuttleScale})`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <svg width="80" height="180" viewBox="0 0 80 180" fill="none" className="drop-shadow-2xl">
          <defs>
            <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d4d4d4" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#d4d4d4" />
            </linearGradient>
            <linearGradient id="tankGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a35520" />
              <stop offset="50%" stopColor="#d4722a" />
              <stop offset="100%" stopColor="#a35520" />
            </linearGradient>
          </defs>

          {/* External Tank */}
          <ellipse cx="40" cy="15" rx="10" ry="12" fill="url(#tankGrad)" />
          <rect x="30" y="15" width="20" height="100" fill="url(#tankGrad)" />
          <ellipse cx="40" cy="115" rx="10" ry="6" fill="#7a4015" />

          {/* Left SRB */}
          <rect x="10" y="30" width="10" height="85" rx="5" fill="#e8e8e8" />
          <rect x="12" y="112" width="6" height="10" fill="#2a2a2a" />

          {/* Right SRB */}
          <rect x="60" y="30" width="10" height="85" rx="5" fill="#e8e8e8" />
          <rect x="62" y="112" width="6" height="10" fill="#2a2a2a" />

          {/* Orbiter */}
          <path
            d="M40 8 C36 10, 32 20, 31 35 L31 110 C31 118, 33 122, 40 124 C47 122, 49 118, 49 110 L49 35 C48 20, 44 10, 40 8Z"
            fill="url(#bodyGrad)"
          />

          {/* Cockpit */}
          <ellipse cx="40" cy="20" rx="6" ry="8" fill="#1a1a2e" />
          <ellipse cx="40" cy="22" rx="4" ry="5" fill="rgba(100, 150, 255, 0.3)" />

          {/* 98601Y Label */}
          <rect x="32" y="55" width="16" height="10" rx="1" fill="#1a1a2e" />
          <text x="40" y="62" textAnchor="middle" fill="#6496FF" fontSize="6" fontWeight="bold" fontFamily="monospace">
            98601Y
          </text>

          {/* Wings */}
          <path d="M31 80 L8 115 L12 118 L31 90 Z" fill="#2a2a2e" />
          <path d="M49 80 L72 115 L68 118 L49 90 Z" fill="#2a2a2e" />

          {/* Engines */}
          <ellipse cx="36" cy="125" rx="3" ry="2" fill="#1a1a1a" />
          <ellipse cx="40" cy="126" rx="4" ry="2.5" fill="#1a1a1a" />
          <ellipse cx="44" cy="125" rx="3" ry="2" fill="#1a1a1a" />
        </svg>

        {/* Engine Flames */}
        {launchProgress > 0.01 && (
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
            {/* Main engine flames */}
            <div className="relative flex items-start justify-center gap-0.5">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="rounded-full"
                  style={{
                    width: i === 1 ? "12px" : "9px",
                    height: `${30 + flameIntensity * 60}px`,
                    background:
                      "linear-gradient(to bottom, #ffffff 0%, #ffeedd 15%, #ffaa44 40%, #ff6622 70%, transparent 100%)",
                    filter: "blur(1px)",
                    opacity: 0.9,
                    animation: "pulse 0.08s ease-in-out infinite alternate",
                  }}
                />
              ))}
            </div>

            {/* SRB Flames */}
            <div
              className="absolute -left-9 -top-1 rounded-full"
              style={{
                width: "10px",
                height: `${35 + flameIntensity * 70}px`,
                background: "linear-gradient(to bottom, #fff8e0 0%, #ffcc33 20%, #ff8811 50%, transparent 100%)",
                filter: "blur(2px)",
                opacity: flameIntensity * 0.9,
              }}
            />
            <div
              className="absolute -right-9 -top-1 rounded-full"
              style={{
                width: "10px",
                height: `${35 + flameIntensity * 70}px`,
                background: "linear-gradient(to bottom, #fff8e0 0%, #ffcc33 20%, #ff8811 50%, transparent 100%)",
                filter: "blur(2px)",
                opacity: flameIntensity * 0.9,
              }}
            />
          </div>
        )}

        {/* Smoke Trail */}
        {launchProgress > 0.02 && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: `${30 + i * 10}px`,
                  height: `${30 + i * 10}px`,
                  left: `${Math.sin(i * 0.8) * 30}px`,
                  top: `${i * 25}px`,
                  background: `radial-gradient(circle, rgba(200, 200, 210, ${0.4 * flameIntensity * (1 - i * 0.1)}) 0%, transparent 70%)`,
                  filter: "blur(8px)",
                  transform: `translateX(-50%)`,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
