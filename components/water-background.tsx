"use client"

import { useEffect, useRef, useCallback } from "react"

export function WaterBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const prevRef = useRef<Float32Array | null>(null)
  const currRef = useRef<Float32Array | null>(null)
  const animRef = useRef<number>(0)

  const COLS = 160
  const ROWS = 90
  const DAMPING = 0.97
  const SPREAD = 0.25

  const initBuffers = useCallback(() => {
    const size = COLS * ROWS
    prevRef.current = new Float32Array(size)
    currRef.current = new Float32Array(size)
  }, [])

  const ripple = useCallback((cx: number, cy: number, strength: number) => {
    const curr = currRef.current
    if (!curr) return
    const r = 3
    for (let dy = -r; dy <= r; dy++) {
      for (let dx = -r; dx <= r; dx++) {
        const nx = cx + dx
        const ny = cy + dy
        if (nx >= 0 && nx < COLS && ny >= 0 && ny < ROWS) {
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist <= r) {
            curr[ny * COLS + nx] += strength * (1 - dist / r)
          }
        }
      }
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    initBuffers()

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = Math.floor(((e.clientX - rect.left) / rect.width) * COLS)
      const y = Math.floor(((e.clientY - rect.top) / rect.height) * ROWS)
      mouseRef.current = { x, y }
      ripple(x, y, 80)
    }

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0]
      const rect = canvas.getBoundingClientRect()
      const x = Math.floor(((touch.clientX - rect.left) / rect.width) * COLS)
      const y = Math.floor(((touch.clientY - rect.top) / rect.height) * ROWS)
      mouseRef.current = { x, y }
      ripple(x, y, 80)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("touchmove", handleTouchMove, { passive: true })

    let frameCount = 0

    const animate = () => {
      const prev = prevRef.current
      const curr = currRef.current
      if (!prev || !curr || !ctx) return

      frameCount++

      // Ambient ripples every 120 frames
      if (frameCount % 120 === 0) {
        const rx = Math.floor(Math.random() * COLS)
        const ry = Math.floor(Math.random() * ROWS)
        ripple(rx, ry, 30)
      }

      // Water simulation step
      const next = new Float32Array(COLS * ROWS)
      for (let y = 1; y < ROWS - 1; y++) {
        for (let x = 1; x < COLS - 1; x++) {
          const i = y * COLS + x
          next[i] =
            (curr[(y - 1) * COLS + x] +
              curr[(y + 1) * COLS + x] +
              curr[y * COLS + (x - 1)] +
              curr[y * COLS + (x + 1)]) *
              SPREAD -
            prev[i]
          next[i] *= DAMPING
        }
      }
      prevRef.current = curr
      currRef.current = next

      // Render
      const w = canvas.width
      const h = canvas.height
      const cellW = w / COLS
      const cellH = h / ROWS

      const imageData = ctx.createImageData(w, h)
      const data = imageData.data

      for (let py = 0; py < h; py++) {
        for (let px = 0; px < w; px++) {
          const gx = (px / w) * COLS
          const gy = (py / h) * ROWS
          const ix = Math.min(Math.floor(gx), COLS - 1)
          const iy = Math.min(Math.floor(gy), ROWS - 1)

          const val = next[iy * COLS + ix]

          // ZimPharm blue (#312783) to green (#009640) gradient with water feel
          const normalizedVal = Math.tanh(val * 0.02)

          // Base colors - deep blue water
          let r = 20 + normalizedVal * 15
          let g = 22 + Math.abs(normalizedVal) * 40
          let b = 60 + normalizedVal * 30

          // Add depth variation based on position
          const depthFactor = 1 - (py / h) * 0.3
          r *= depthFactor
          g *= depthFactor
          b *= depthFactor

          // Highlights on wave peaks
          if (normalizedVal > 0.1) {
            const highlight = normalizedVal * 40
            r += highlight * 0.5
            g += highlight * 1.2
            b += highlight * 0.8
          }

          // Caustic light patterns
          const caustic =
            Math.sin(gx * 0.3 + frameCount * 0.02) *
            Math.cos(gy * 0.4 + frameCount * 0.015) *
            8
          r += caustic * 0.3
          g += caustic * 0.6
          b += caustic * 0.4

          const idx = (py * w + px) * 4
          data[idx] = Math.max(0, Math.min(255, r))
          data[idx + 1] = Math.max(0, Math.min(255, g))
          data[idx + 2] = Math.max(0, Math.min(255, b))
          data[idx + 3] = 35 // Low alpha for subtlety
        }
      }

      ctx.putImageData(imageData, 0, 0)
      animRef.current = requestAnimationFrame(animate)
    }

    animRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
    }
  }, [initBuffers, ripple])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: "linear-gradient(180deg, #f8fafc 0%, #e8f5e9 50%, #e8eaf6 100%)" }}
    />
  )
}
