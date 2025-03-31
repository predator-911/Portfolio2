import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

// Load Inter font with subsets
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Lakshya Kumar | ML Engineer & Full Stack Developer",
  description: "Portfolio showcasing machine learning, data science, and web development projects by Lakshya Kumar",
  keywords: ["machine learning", "data science", "web development", "portfolio", "next.js", "react", "typescript"],
  authors: [{ name: "Lakshya Kumar" }],
  creator: "Lakshya Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lakshya-kumar.vercel.app",
    title: "Lakshya Kumar | ML Engineer & Full Stack Developer",
    description: "Portfolio showcasing machine learning, data science, and web development projects",
    siteName: "Lakshya Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lakshya Kumar | ML Engineer & Full Stack Developer",
    description: "Portfolio showcasing machine learning, data science, and web development projects",
  },
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'