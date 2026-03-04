"use client"

import Link from "next/link"
import { Home } from "lucide-react"

export function HomeButton() {
  return (
    <Link
      href="/"
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#312783] to-[#009640] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl animate-pulse-glow"
    >
      <Home className="h-5 w-5" />
      <span className="sr-only">Home</span>
    </Link>
  )
}
