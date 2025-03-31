"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface PlaceholderImageProps {
  width: number
  height: number
  text?: string
  className?: string
}

/**
 * Custom placeholder image generator using canvas
 * This is a client-side component that generates a placeholder image
 * without requiring server-side API calls
 *
 * @param {number} width - Width of the placeholder
 * @param {number} height - Height of the placeholder
 * @param {string} text - Text to display on the placeholder
 * @param {string} className - Additional CSS classes
 * @returns {JSX.Element} - Canvas element with generated placeholder
 */
export default function PlaceholderImage({ width, height, text = "Image", className = "" }: PlaceholderImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = width
    canvas.height = height

    // Default colors based on theme
    const bgColor = isDark ? "#1e293b" : "#e2e8f0"
    const textColor = isDark ? "#f8fafc" : "#0f172a"
    const accentColor = isDark ? "#60a5fa" : "#3b82f6"

    // Fill background
    ctx.fillStyle = bgColor
    ctx.fillRect(0, 0, width, height)

    // Add gradient overlay
    const gradient = ctx.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, `${accentColor}20`) // 20 is hex for 12% opacity
    gradient.addColorStop(1, `${accentColor}10`) // 10 is hex for 6% opacity
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)

    // Add pattern
    ctx.strokeStyle = isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"
    ctx.lineWidth = 1

    // Draw grid pattern
    const gridSize = 20
    for (let x = 0; x <= width; x += gridSize) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, height)
      ctx.stroke()
    }

    for (let y = 0; y <= height; y += gridSize) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(width, y)
      ctx.stroke()
    }

    // Add text
    ctx.fillStyle = textColor
    ctx.font = `bold ${Math.min(width, height) / 10}px sans-serif`
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"

    // Handle multiline text
    const words = text.split(" ")
    const lineHeight = Math.min(width, height) / 10
    const lines = []
    let currentLine = words[0]

    for (let i = 1; i < words.length; i++) {
      const testLine = currentLine + " " + words[i]
      const metrics = ctx.measureText(testLine)
      if (metrics.width > width * 0.8) {
        lines.push(currentLine)
        currentLine = words[i]
      } else {
        currentLine = testLine
      }
    }
    lines.push(currentLine)

    // Draw each line
    const startY = height / 2 - ((lines.length - 1) * lineHeight) / 2
    lines.forEach((line, i) => {
      ctx.fillText(line, width / 2, startY + i * lineHeight)
    })
  }, [width, height, text, isDark])

  return <canvas ref={canvasRef} width={width} height={height} className={className} />
}

