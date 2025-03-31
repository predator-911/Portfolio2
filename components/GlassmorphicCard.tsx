"use client"

import type { ReactNode } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

interface GlassmorphicCardProps {
  children: ReactNode
  className?: string
}

export default function GlassmorphicCard({ children, className = "" }: GlassmorphicCardProps) {
  const { theme } = useTheme()
  const isDarkMode = theme === "dark"

  return (
    <motion.div
      className={`rounded-xl backdrop-blur-sm p-6 ${
        isDarkMode
          ? "bg-card/30 border border-white/10 shadow-lg shadow-primary/5"
          : "bg-white/70 border border-white/20 shadow-xl shadow-black/5"
      } ${className}`}
      whileHover={{
        translateY: -5,
        boxShadow: isDarkMode ? "0 25px 50px -12px rgba(59, 130, 246, 0.15)" : "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

