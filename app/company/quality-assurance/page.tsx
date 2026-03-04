"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Droplet, Thermometer, FlaskRoundIcon as Flask, FileCheck, Users, BarChart } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function QualityAssurance() {
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
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#312783] sm:text-5xl">Quality Assurance</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Our unwavering commitment to excellence in every aspect of pharmaceutical manufacturing.
        </p>
      </div>

      <div ref={contentRef} className="space-y-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-[#312783]">Our Quality Promise</h2>
            <p className="mb-4 text-gray-600">
              At ZimPharm, quality is not just a department; it's a core value that permeates every aspect of our
              operations. We are committed to maintaining the highest standards of quality and safety in all our
              pharmaceutical products.
            </p>
            <p className="text-gray-600">
              Our quality assurance processes are designed to meet and exceed both local and international standards,
              ensuring that every product that leaves our facility is safe, effective, and of the highest quality.
            </p>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg md:h-auto">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="ZimPharm Quality Control Laboratory"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-[#009640]" />
              <CardTitle>GMP Certified</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our manufacturing facilities are certified for Good Manufacturing Practices (GMP), ensuring consistent
                high-quality production.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Droplet className="h-10 w-10 text-[#312783]" />
              <CardTitle>Stringent Testing</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Every batch of our products undergoes rigorous testing to ensure purity, potency, and safety before
                release.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Thermometer className="h-10 w-10 text-[#009640]" />
              <CardTitle>Environmental Monitoring</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We maintain strict control over environmental conditions in our facilities to prevent contamination and
                ensure product integrity.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Flask className="h-10 w-10 text-[#312783]" />
              <CardTitle>Raw Material Control</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We source only the highest quality raw materials and subject them to thorough testing before use in
                production.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <FileCheck className="h-10 w-10 text-[#009640]" />
              <CardTitle>Documentation</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Comprehensive documentation and record-keeping ensure traceability and compliance with regulatory
                requirements.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Users className="h-10 w-10 text-[#312783]" />
              <CardTitle>Trained Personnel</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our quality assurance team consists of highly trained professionals dedicated to maintaining our high
                standards.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Our Quality Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Good Manufacturing Practice (GMP) Certification</li>
              <li>ISO 9001:2015 Quality Management System</li>
              <li>ISO 22000:2005 Food Safety Management System</li>
              <li>Medicines Control Authority of Zimbabwe (MCAZ) Compliance</li>
            </ul>
          </CardContent>
        </Card>

        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold text-[#312783]">Continuous Improvement</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Our commitment to quality is an ongoing journey. We continuously review and improve our processes, invest in
            the latest quality control technologies, and stay updated with the evolving global pharmaceutical standards.
          </p>
        </div>

        <Card>
          <CardHeader>
            <BarChart className="h-10 w-10 text-[#009640]" />
            <CardTitle>Quality by the Numbers</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Over 20,000 quality tests performed annually</li>
              <li>100% batch testing before release</li>
              <li>Less than 0.1% product recall rate</li>
              <li>98% customer satisfaction rate</li>
              <li>24/7 quality monitoring in all production areas</li>
            </ul>
          </CardContent>
        </Card>

        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold text-[#312783]">Our Quality Assurance Promise</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            At ZimPharm, quality is not just a standard we meet; it's a promise we keep. Every product that bears our
            name is a testament to our unwavering commitment to excellence, safety, and the well-being of those who rely
            on our medications.
          </p>
        </div>
      </div>
    </div>
  )
}
