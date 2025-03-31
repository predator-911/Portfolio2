"use client"

import { Suspense, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import dynamic from "next/dynamic"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Experience from "@/components/sections/Experience"
import Projects from "@/components/sections/Projects"
import Skills from "@/components/sections/Skills"
import Certifications from "@/components/sections/Certifications"
import Resume from "@/components/sections/Resume"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/Footer"
import LoadingSpinner from "@/components/ui/LoadingSpinner"
import { useTheme } from "next-themes"
import ScrollToTopButton from "@/components/ScrollToTopButton"

// Dynamically import heavy components
const ParticleBackground = dynamic(() => import("@/components/ParticleBackground"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 -z-10 bg-background" />,
})

export default function Home() {
  const { theme } = useTheme()
  const { scrollYProgress } = useScroll()
  const progressOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1])
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  // Preload critical fonts and assets
  useEffect(() => {
    // Preconnect to external resources
    const links = [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
    ]

    links.forEach((linkProps) => {
      const link = document.createElement("link")
      Object.entries(linkProps).forEach(([key, value]) => {
        if (value !== undefined) {
          link.setAttribute(key, value)
        }
      })
      document.head.appendChild(link)
    })

    // Preload critical images
    const imagesToPreload = [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-07-15%20at%2012.41.51_7704ca50.jpg-9efBFo5pZ0cfGwRuR7JpPqBxu9emzk.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rU0nhSLS3Thg9pGN6Nn1K1Pzu7agO7.png",
    ]
    imagesToPreload.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Particle background */}
      <ParticleBackground />

      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{
          opacity: progressOpacity,
          width: progressWidth,
          transformOrigin: "0%",
        }}
      />

      {/* Hero Section */}
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
      </Suspense>

      {/* About Section */}
      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>

      {/* Experience Section */}
      <Suspense fallback={<LoadingSpinner />}>
        <Experience />
      </Suspense>

      {/* Skills Section */}
      <Suspense fallback={<LoadingSpinner />}>
        <Skills />
      </Suspense>

      {/* Projects Section */}
      <Suspense fallback={<LoadingSpinner />}>
        <Projects />
      </Suspense>

      {/* Certifications Section */}
      <Suspense fallback={<LoadingSpinner />}>
        <Certifications />
      </Suspense>

      {/* Resume Section */}
      <Suspense fallback={<LoadingSpinner />}>
        <Resume />
      </Suspense>

      {/* Contact Section */}
      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>

      {/* Footer */}
      <Footer />

      {/* Scroll to top button */}
      <ScrollToTopButton />
    </main>
  )
}

