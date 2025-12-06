"use client"

import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsComplete(true), 700)
          return 100
        }
        return prev + 0.7
      })
    }, 35)

    return () => clearInterval(interval)
  }, [])

  if (isComplete) return null

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center transition-opacity duration-1000 ${
        progress >= 100 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent w-full"
              style={{
                top: `${i * 5}%`,
                animationDelay: `${i * 0.1}s`,
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
          ))}
        </div>
      </div>

      {/* Main logo animation */}
      <div className="relative mb-16">
        {/* Outer rings */}
        <div
          className="absolute inset-[-80px] rounded-full border border-accent/5"
          style={{ animation: "spin 12s linear infinite" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-accent/30 rounded-full" />
        </div>
        <div
          className="absolute inset-[-55px] rounded-full border border-accent/10"
          style={{ animation: "spin 8s linear infinite reverse" }}
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-accent/60 rounded-full" />
        </div>
        <div
          className="absolute inset-[-30px] rounded-full border border-accent/20"
          style={{ animation: "spin 5s linear infinite" }}
        />

        {/* Core hexagon logo */}
        <div className="relative w-44 h-44 flex items-center justify-center">
          <div className="absolute inset-0 bg-accent/5 rounded-full blur-3xl animate-pulse" />

          <svg viewBox="0 0 100 100" className="w-36 h-36 relative z-10">
            {/* Hexagon shape */}
            <polygon
              points="50,5 90,25 90,75 50,95 10,75 10,25"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-accent"
              style={{
                strokeDasharray: 300,
                strokeDashoffset: 300 - (progress / 100) * 300,
                transition: "stroke-dashoffset 0.1s ease-out",
              }}
            />
            {/* Inner hexagon */}
            <polygon
              points="50,20 75,35 75,65 50,80 25,65 25,35"
              fill="url(#hexGradient)"
              style={{
                opacity: progress / 100,
                transform: `scale(${0.8 + (progress / 100) * 0.2})`,
                transformOrigin: "center",
              }}
            />
            {/* A letter */}
            <text
              x="50"
              y="58"
              textAnchor="middle"
              className="fill-accent font-bold"
              style={{
                fontSize: "26px",
                fontFamily: "'Orbitron', sans-serif",
                opacity: progress > 30 ? 1 : 0,
                transition: "opacity 0.5s",
              }}
            >
              A
            </text>
            <defs>
              <linearGradient id="hexGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(100, 150, 255)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="rgb(60, 100, 200)" stopOpacity="0.05" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* ATLANTIS text with letter-by-letter reveal */}
      <div className="relative flex flex-col items-center gap-6">
        <div
          className="text-5xl md:text-7xl tracking-wider text-foreground font-bold"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            opacity: progress > 40 ? Math.min((progress - 40) / 25, 1) : 0,
            transform: `translateY(${progress > 40 ? Math.max(0, 20 - (progress - 40) / 2) : 20}px)`,
            transition: "none",
          }}
        >
          ATLANTIS
        </div>

        {/* 98601Y with glow pulse */}
        <div
          className="relative"
          style={{
            opacity: progress > 55 ? Math.min((progress - 55) / 20, 1) : 0,
            transform: `scale(${progress > 55 ? 0.9 + Math.min((progress - 55) / 200, 0.1) : 0.9})`,
          }}
        >
          <div className="absolute inset-0 bg-accent/25 blur-3xl rounded-full" />
          <span
            className="relative text-accent text-2xl md:text-3xl tracking-[0.4em] font-bold"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              textShadow: "0 0 30px rgba(100, 150, 255, 0.7)",
            }}
          >
            98601Y
          </span>
        </div>

        {/* VEX Robotics reveal */}
        <div
          className="text-muted-foreground/60 text-sm tracking-[0.3em] uppercase"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            opacity: progress > 70 ? Math.min((progress - 70) / 15, 1) : 0,
            transform: `translateY(${progress > 70 ? Math.max(0, 10 - (progress - 70) / 2) : 10}px)`,
          }}
        >
          VEX Robotics Team
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-72">
        <div className="h-px bg-muted/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-accent/40 via-accent to-accent/40 rounded-full"
            style={{ width: `${progress}%`, transition: "width 0.1s ease-out" }}
          />
        </div>
        <div className="flex justify-between mt-4 text-xs tracking-[0.3em] uppercase">
          <span className="text-muted-foreground/50" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            Initializing
          </span>
          <span className="text-accent/80 font-mono">{Math.floor(progress)}%</span>
        </div>
      </div>

      {/* Troy High School */}
      <div
        className="absolute bottom-10 text-muted-foreground/40 text-xs tracking-[0.4em] uppercase"
        style={{
          fontFamily: "'Orbitron', sans-serif",
          opacity: progress > 85 ? 1 : 0,
          transition: "opacity 0.8s ease-out",
        }}
      >
        Troy High School
      </div>
    </div>
  )
}
