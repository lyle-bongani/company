"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"

gsap.registerPlugin(ScrollTrigger)

export default function CompanyOverview() {
  const headerRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const header = headerRef.current
    const content = contentRef.current

    gsap.from(header, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    })

    gsap.from(content.children, {
      scrollTrigger: {
        trigger: content,
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
    })
  }, [])

  return (
    <div className="container mx-auto px-4 py-16">
      <div ref={headerRef} className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#312783] sm:text-5xl">Company Overview</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Discover the story, mission, and values that drive ZimPharm's commitment to healthcare excellence.
        </p>
      </div>

      <div ref={contentRef} className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-[#312783]">Who We Are</h2>
          <p className="mb-4 text-gray-600">
            Zimbabwe Pharmaceuticals (PVT) LTD, known as ZimPharm, is a leading pharmaceutical company in Zimbabwe.
            Since our establishment in 1992, we have been dedicated to improving healthcare outcomes through innovative
            and high-quality pharmaceutical products.
          </p>
          <p className="mb-4 text-gray-600">
            Our state-of-the-art facilities, coupled with our commitment to research and development, position us at the
            forefront of the pharmaceutical industry in Zimbabwe and beyond.
          </p>
          <Button asChild className="mt-4">
            <Link href="/company/history">Explore Our History</Link>
          </Button>
        </div>
        <div className="relative h-64 overflow-hidden rounded-lg md:h-auto">
          <Image
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
            alt="ZimPharm Facility"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* ... rest of the component remains the same ... */}
    </div>
  )
}
