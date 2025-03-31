import { Skeleton } from "@/components/ui/skeleton"
import { Shimmer } from "@/components/ui/shimmer"

/**
 * Global loading component for Next.js app
 *
 * This component is displayed during page transitions and initial loading.
 * It provides a visually pleasing loading experience with skeleton UI.
 *
 * @returns {JSX.Element} - Loading UI with skeleton placeholders
 */
export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-20">
      {/* Hero section skeleton */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 min-h-[80vh]">
        <div className="w-full md:w-1/2 space-y-6">
          <Shimmer className="h-8 w-32" />
          <Skeleton className="h-16 w-full max-w-md" />
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-24 w-full max-w-lg" />
          <div className="flex gap-4 pt-4">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Skeleton className="w-64 h-64 md:w-80 md:h-80 rounded-full" />
        </div>
      </div>

      {/* Section header skeleton */}
      <div className="text-center my-20">
        <Skeleton className="h-12 w-64 mx-auto mb-4" />
        <Skeleton className="h-1 w-20 mx-auto mb-6" />
        <Skeleton className="h-16 w-full max-w-2xl mx-auto" />
      </div>

      {/* Grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="flex flex-col space-y-4">
              <Skeleton className="h-48 w-full rounded-t-lg" />
              <div className="p-4 space-y-4">
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-24 w-full" />
                <div className="flex flex-wrap gap-2">
                  {Array(3)
                    .fill(0)
                    .map((_, j) => (
                      <Skeleton key={j} className="h-6 w-16 rounded-full" />
                    ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

