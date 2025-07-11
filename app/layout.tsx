import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: "Wetoo Technical Services - Reliable Lifting Solutions",
  description:
    "Professional lifting solutions, crane installation, maintenance, and spare parts for manufacturing, shipyards, ports, and heavy industries in UAE.",
  keywords: "crane installation, lifting solutions, industrial maintenance, UAE, Dubai, spare parts, emergency repair",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
