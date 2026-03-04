import Link from "next/link"
import { Home } from "lucide-react"

export function HomeButton() {
  return (
    <Link
      href="/"
      className="fixed bottom-4 right-4 z-50 bg-[#312783] text-white p-3 rounded-full shadow-lg hover:bg-[#312783]/90 transition-colors"
    >
      <Home className="h-6 w-6" />
      <span className="sr-only">Home</span>
    </Link>
  )
}
