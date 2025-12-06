"use client"

import { useEffect, useState } from "react"

interface CountdownProps {
  targetDate: string
  status: "completed" | "upcoming"
}

export function Countdown({ targetDate, status }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime()
      const absDiff = Math.abs(difference)

      if (absDiff > 0) {
        setTimeLeft({
          days: Math.floor(absDiff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((absDiff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((absDiff / 1000 / 60) % 60),
          seconds: Math.floor((absDiff / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  if (!isClient) {
    return <div className="h-16" /> // Placeholder during SSR
  }

  const isUpcoming = status === "upcoming"
  const label = isUpcoming ? "Countdown" : "Time Since"

  return (
    <div className="mt-3">
      <p className="text-[10px] text-muted-foreground/70 uppercase tracking-wider mb-1.5">{label}</p>
      <div className="flex gap-1.5 font-mono">
        {[
          { value: timeLeft.days, label: "D" },
          { value: timeLeft.hours, label: "H" },
          { value: timeLeft.minutes, label: "M" },
          { value: timeLeft.seconds, label: "S" },
        ].map((unit, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="relative bg-muted/40 rounded px-1.5 py-1 min-w-[28px] border border-border/40">
              <span className="text-sm font-bold text-foreground tabular-nums">
                {String(unit.value).padStart(2, "0")}
              </span>
              {/* Flip animation effect */}
              <div className="absolute inset-x-0 top-1/2 h-px bg-border/50" />
            </div>
            <span className="text-[9px] text-muted-foreground/60 mt-0.5">{unit.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
