import type React from "react"
import type { Metadata } from "next"
import { Red_Hat_Display, JetBrains_Mono, Orbitron } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-redhat",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jbm" })
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
})

export const metadata: Metadata = {
  title: "98601Y Atlantis | VEX Robotics",
  description: "Rising from the depths to reach new heights. VEX Robotics Team 98601Y Atlantis from Troy High School.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${redHatDisplay.variable} ${orbitron.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
