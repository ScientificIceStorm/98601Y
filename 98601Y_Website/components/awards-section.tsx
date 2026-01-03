"use client"

import { Trophy, Medal, Award, Star } from "lucide-react"

type AwardItem = {
  name: string
  type: string
  icon: any
}

const allAwards: AwardItem[] = [
  { name: "Excellence Award", type: "excellence", icon: Medal },
  { name: "Tournament Finalists", type: "performance", icon: Trophy },
  { name: "Tournament Finalists", type: "performance", icon: Trophy },
  { name: "Think Award", type: "judged", icon: Award },
  { name: "Tournament Champions", type: "winning", icon: Trophy },
  { name: "Tournament Champions", type: "winning", icon: Trophy },
  { name: "Robot Skills Champions", type: "participation", icon: Trophy },
  { name: "Robot Skills Champions", type: "participation", icon: Trophy },
  { name: "Robot Skills Champions", type: "participation", icon: Trophy },
  { name: "Robot Skills Champions", type: "participation", icon: Trophy },
]

const awardStyles = {
  excellence: {
    bg: "from-amber-500/20 to-amber-600/10",
    border: "border-amber-500/40",
    text: "text-amber-400",
    shadow: "shadow-amber-500/20",
  },
  performance: {
    bg: "from-blue-500/20 to-blue-600/10",
    border: "border-blue-500/40",
    text: "text-blue-400",
    shadow: "shadow-blue-500/20",
  winning: {
    bg: "from-pink-500/20 to-pink-600/10",
    border: "border-pink-500/40",
    text: "text-pink-400",
    shadow: "shadow-pink-500/20",
  },
  judged: {
    bg: "from-purple-500/20 to-purple-600/10",
    border: "border-purple-500/40",
    text: "text-purple-400",
    shadow: "shadow-purple-500/20",
  },
  participation: {
    bg: "from-green-500/20 to-green-600/10",
    border: "border-green-500/40",
    text: "text-green-400",
    shadow: "shadow-green-500/20",
  },
}

/* 🔹 Group duplicate awards */
const groupedAwards = Object.values(
  allAwards.reduce<Record<string, AwardItem & { count: number }>>((acc, award) => {
    const key = `${award.name}-${award.type}`
    if (!acc[key]) {
      acc[key] = { ...award, count: 1 }
    } else {
      acc[key].count++
    }
    return acc
  }, {})
)

export function AwardsSection() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-5xl md:text-7xl font-bold tracking-wider mb-4 text-foreground font-display">
            OUR ACHIEVEMENTS
          </h2>
          <p className="text-muted-foreground text-lg">
            Recognition for excellence and dedication
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {groupedAwards.map((award, index) => {
            const style = awardStyles[award.type as keyof typeof awardStyles]
            const Icon = award.icon

            return (
              <div
                key={`${award.name}-${index}`}
                className={`group relative p-4 rounded-xl bg-gradient-to-br ${style.bg} border ${style.border} shadow-lg ${style.shadow} transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden`}
              >
                {/* ✨ Shine */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background:
                      "linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.15) 50%, transparent 75%)",
                    animation: "shine 3s ease-in-out infinite",
                  }}
                />

                {/* 🔢 Count badge */}
                {award.count > 1 && (
                  <div className="absolute top-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-background/70 backdrop-blur border border-white/20">
                    ×{award.count}
                  </div>
                )}

                <div className="relative z-10 flex flex-col items-center text-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-background/20 flex items-center justify-center">
                    <Icon className={`w-5 h-5 ${style.text}`} />
                  </div>
                  <p className={`text-xs font-semibold ${style.text} leading-tight`}>
                    {award.name}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
