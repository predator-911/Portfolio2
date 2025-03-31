import type React from "react"
import { cn } from "@/lib/utils"

/**
 * Skeleton component for loading states
 *
 * Creates a placeholder loading state for content that is still loading.
 * Useful for improving perceived performance and user experience.
 *
 * @param {string} className - Additional CSS classes
 * @param {React.HTMLAttributes<HTMLDivElement>} props - HTML div props
 * @returns {JSX.Element} - Div with skeleton styling
 */
function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />
}

export { Skeleton }

