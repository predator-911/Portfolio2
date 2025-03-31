import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

/**
 * Custom 404 Not Found page
 *
 * Provides a user-friendly experience when users navigate to non-existent pages.
 * Includes navigation options to return to the home page.
 *
 * @returns {JSX.Element} - 404 page UI
 */
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-9xl font-bold text-primary">404</h1>
      <div className="w-16 h-1 bg-primary my-6"></div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="javascript:history.back()">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Link>
        </Button>
      </div>
    </div>
  )
}

