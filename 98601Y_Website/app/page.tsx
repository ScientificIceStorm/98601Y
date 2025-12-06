import { HeroSection } from "@/components/hero-section"
import { RocketSection } from "@/components/rocket-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { AwardsSection } from "@/components/awards-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { ParticleField } from "@/components/particle-field"
import { LoadingScreen } from "@/components/loading-screen"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <LoadingScreen />
      <ParticleField />
      <Navigation />
      <HeroSection />
      <RocketSection />
      <RoadmapSection />
      <AwardsSection />
      <AboutSection />
      <Footer />
    </main>
  )
}
