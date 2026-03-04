"use client"

import { useRef, useState, type MouseEvent, type ReactNode } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface WaterButtonProps {
  children: ReactNode
  href?: string
  className?: string
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  onClick?: () => void
}

export function WaterButton({
  children,
  href,
  className,
  variant = "primary",
  size = "md",
  onClick,
}: WaterButtonProps) {
  const btnRef = useRef<HTMLDivElement>(null)
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([])

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (!btnRef.current) return
    const rect = btnRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()

    setRipples((prev) => [...prev, { x, y, id }])
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id))
    }, 800)

    onClick?.()
  }

  const baseStyles =
    "relative overflow-hidden inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300"

  const variantStyles = {
    primary: "bg-[#009640] text-white hover:bg-[#007a34] shadow-md hover:shadow-lg",
    secondary: "bg-[#312783] text-white hover:bg-[#28206b] shadow-md hover:shadow-lg",
    outline: "bg-white/90 backdrop-blur-sm text-[#312783] border-2 border-[#312783]/20 hover:border-[#009640]/50 hover:text-[#009640]",
  }

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  const content = (
    <div
      ref={btnRef}
      onClick={handleClick}
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
    >
      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full animate-ripple pointer-events-none"
          style={{
            left: ripple.x - 5,
            top: ripple.y - 5,
            width: 10,
            height: 10,
            background:
              variant === "outline"
                ? "radial-gradient(circle, rgba(0,150,64,0.4) 0%, rgba(49,39,131,0.2) 50%, transparent 70%)"
                : "radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.2) 50%, transparent 70%)",
          }}
        />
      ))}

      {/* Wave animation on hover */}
      <span className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
        <span className="absolute bottom-0 left-0 right-0 h-full translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-white/20 to-transparent" />
      </span>

      <span className="relative z-10">{children}</span>
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="group">
        {content}
      </Link>
    )
  }

  return <div className="group cursor-pointer">{content}</div>
}
