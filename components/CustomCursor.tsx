"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const { theme } = useTheme()
  const isDarkMode = theme === "dark"

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const checkPointer = () => {
      const element = document.elementFromPoint(mousePosition.x, mousePosition.y)
      if (element) {
        const computedStyle = window.getComputedStyle(element)
        setIsPointer(computedStyle.cursor === "pointer")
      }
    }

    window.addEventListener("mousemove", mouseMove)
    window.addEventListener("mousemove", checkPointer)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
      window.removeEventListener("mousemove", checkPointer)
    }
  }, [mousePosition.x, mousePosition.y])

  if (typeof window === "undefined") return null

  // Hide on mobile devices
  if (window.innerWidth <= 768) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-primary z-50 pointer-events-none mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ type: "spring", mass: 0.3, stiffness: 100, damping: 10 }}
      />
      <motion.div
        className={`fixed top-0 left-0 w-2 h-2 rounded-full bg-primary z-50 pointer-events-none ${
          isDarkMode ? "mix-blend-difference" : ""
        }`}
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isPointer ? 0 : 1,
        }}
        transition={{ type: "spring", mass: 0.1, stiffness: 150, damping: 8 }}
      />
    </>
  )
}

