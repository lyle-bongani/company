"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

gsap.registerPlugin(ScrollTrigger)

export default function CompanyHistory() {
  const headerRef = useRef(null)
  const timelineRef = useRef(null)

  useEffect(() => {
    const header = headerRef.current
    const timeline = timelineRef.current

    gsap.from(header, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    })

    gsap.from(timeline.children, {
      scrollTrigger: {
        trigger: timeline,
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
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#312783] sm:text-5xl">Our History</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Tracing the journey of ZimPharm from its founding to its position as a leader in Zimbabwe's pharmaceutical
          industry.
        </p>
      </div>

      <div ref={timelineRef} className="space-y-12">
        <Card>
          <CardHeader>
            <CardTitle>1992: The Beginning</CardTitle>
          </CardHeader>
          <CardContent>
            <p>ZimPharm is established as Ian Wilson (Pvt.) Ltd, focusing on local pharmaceutical production.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>1995: Expansion and Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <p>The company expands its product range and distribution network across Zimbabwe.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>2000: Rebranding to Wellcome Pharmaceuticals</CardTitle>
          </CardHeader>
          <CardContent>
            <p>A new era begins as the company rebrands, signaling its growing presence in the market.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>2005: State-of-the-Art Facility</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Investment in a new 36-hectare production area with modern equipment, boosting manufacturing capabilities.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>2010: ZimPharm is Born</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              The company rebrands to Zimbabwe Pharmaceuticals (PVT) LTD, known as ZimPharm, solidifying its identity as
              a national leader.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>2015: International Standards Certification</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              ZimPharm achieves GMP and ISO 22000:2005 certifications, marking its commitment to quality and safety.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>2020: Innovation and Research Focus</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Establishment of a dedicated Research and Development department to drive pharmaceutical innovation.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Today: Leading the Way</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              ZimPharm continues to be at the forefront of pharmaceutical manufacturing in Zimbabwe, committed to
              improving healthcare outcomes nationwide.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
