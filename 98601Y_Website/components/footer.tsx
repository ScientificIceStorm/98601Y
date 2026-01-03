import Link from "next/link"
import { ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative py-20 px-6 border-t border-border/50 bg-gradient-to-b from-background to-card/30">
      {/* Wave decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/30">
                <span className="text-accent font-display font-bold text-xl">A</span>
              </div>
              <div>
                <p className="text-foreground font-display font-bold tracking-wide">ATLANTIS</p>
                <p className="text-muted-foreground text-sm">Team 98601Y</p>
              </div>
            </div>
            <p className="text-muted-foreground/80 text-sm leading-relaxed">
              Rising from the depths to reach new heights in VEX Robotics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-display font-semibold text-sm mb-4 tracking-wide">NAVIGATION</h3>
            <div className="space-y-3">
              <Link href="/" className="block text-muted-foreground hover:text-accent transition-colors text-sm">
                Home
              </Link>
              <Link href="/about" className="block text-muted-foreground hover:text-accent transition-colors text-sm">
                About Us
              </Link>
              <Link href="/robots" className="block text-muted-foreground hover:text-accent transition-colors text-sm">
                Our Robots
              </Link>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-foreground font-display font-semibold text-sm mb-4 tracking-wide">RESOURCES</h3>
            <div className="space-y-3">
              <a
                href="https://www.vexrobotics.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-muted-foreground hover:text-accent transition-colors text-sm group"
              >
                About VEX Robotics <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://www.robotevents.com/robot-competitions/vex-robotics-competition"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-muted-foreground hover:text-accent transition-colors text-sm group"
              >
                Global Skills Standings{" "}
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://www.robotevents.com/teams/VRC/98601Y"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-muted-foreground hover:text-accent transition-colors text-sm group"
              >
                98601Y RoboEvents Team Page{" "}
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-foreground font-display font-semibold text-sm mb-4 tracking-wide">CONNECT</h3>
            <div className="space-y-3">
              <a href="#" className="block text-muted-foreground hover:text-accent transition-colors text-sm">
                Instagram
              </a>
              <a href="#" className="block text-muted-foreground hover:text-accent transition-colors text-sm">
                YouTube
              </a>
              <a
                href="mailto:team@98601y.com"
                className="block text-muted-foreground hover:text-accent transition-colors text-sm"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground/60 text-xs font-display tracking-wide">
            2025 Team 98601Y Atlantis - Troy High School
          </p>
          <p className="text-muted-foreground/40 text-xs">Built with precision and passion</p>
        </div>
      </div>
    </footer>
  )
}
