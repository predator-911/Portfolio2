import { cn } from "@/lib/utils"

interface ShimmerProps {
  className?: string
  width?: string | number
  height?: string | number
}

/**
 * Shimmer loading effect component
 *
 * Creates a shimmer loading effect for content that is still loading.
 * Useful for improving perceived performance during image or content loading.
 *
 * @param {string} className - Additional CSS classes
 * @param {string|number} width - Width of the shimmer
 * @param {string|number} height - Height of the shimmer
 * @returns {JSX.Element} - Div with shimmer animation
 */
export function Shimmer({ className, width, height }: ShimmerProps) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted/60 overflow-hidden relative", className)}
      style={{
        width: width,
        height: height,
      }}
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  )
}

