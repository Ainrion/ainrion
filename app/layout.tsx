import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Ainrion - Future Beyond Horizon",
  description:
    "R&D company developing innovative tech products in AI, Blockchain, IoT, LMS, and corporate management solutions.",
  keywords: ["Ainrion", "R&D", "Technology", "AI", "Blockchain", "IoT", "LMS", "SaaS"],
  authors: [{ name: "Ainrion" }],
  openGraph: {
    title: "Ainrion - Future Beyond Horizon",
    description: "R&D company developing innovative tech products",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased dark`}>
      <body className="font-sans">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
