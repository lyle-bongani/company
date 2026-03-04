"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
          <Image src="/placeholder.svg?height=400&width=600" alt="ZimPharm Facility" layout="fill" objectFit="cover" />
        </div>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              To provide high-quality, affordable pharmaceutical products that improve the health and well-being of
              people in Zimbabwe and beyond.
            </p>
            <Button asChild variant="link" className="mt-4">
              <Link href="/company/mission-and-credo">Learn More</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Our Principles</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Guided by integrity, innovation, and a commitment to excellence in all aspects of our operations.</p>
            <Button asChild variant="link" className="mt-4">
              <Link href="/company/principles">Discover Our Principles</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quality Assurance</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Adhering to the highest standards of quality and safety in pharmaceutical manufacturing.</p>
            <Button asChild variant="link" className="mt-4">
              <Link href="/company/quality-assurance">Our Quality Commitment</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
