"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

gsap.registerPlugin(ScrollTrigger)

export default function MissionAndCredo() {
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
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#312783] sm:text-5xl">Our Mission & Credo</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Discover the guiding principles that drive our commitment to healthcare excellence and innovation.
        </p>
      </div>

      <div ref={contentRef} className="space-y-12">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              To provide high-quality, affordable pharmaceutical products that improve the health and well-being of
              people in Zimbabwe and beyond, while fostering innovation and maintaining the highest standards of safety
              and efficacy.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Our Credo</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-4">
              <li>We believe in the power of science to enhance and save lives.</li>
              <li>We are committed to ethical practices in all aspects of our business.</li>
              <li>We strive for excellence in quality, from research to manufacturing to customer service.</li>
              <li>We value innovation and continuous improvement in our products and processes.</li>
              <li>We respect our employees, partners, and the communities we serve.</li>
              <li>We are dedicated to environmental sustainability in our operations.</li>
              <li>We aim to be a trusted partner in healthcare, contributing to the well-being of our nation.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              To be the leading pharmaceutical company in Zimbabwe and a respected player in the African market, known
              for our innovative products, unwavering commitment to quality, and positive impact on public health.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
