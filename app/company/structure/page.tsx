"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

gsap.registerPlugin(ScrollTrigger)

export default function CompanyStructure() {
  const headerRef = useRef(null)
  const structureRef = useRef(null)

  useEffect(() => {
    const header = headerRef.current
    const structure = structureRef.current

    gsap.from(header, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    })

    gsap.from(structure.children, {
      scrollTrigger: {
        trigger: structure,
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
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#312783] sm:text-5xl">Company Structure</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Explore the organizational framework that enables ZimPharm to deliver excellence in pharmaceutical
          manufacturing and innovation.
        </p>
      </div>

      <div ref={structureRef} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Board of Directors</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Our Board of Directors provides strategic guidance and oversight, ensuring that ZimPharm adheres to its
              mission, vision, and values while meeting its business objectives.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Executive Leadership</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Chief Executive Officer (CEO)</li>
              <li>Chief Financial Officer (CFO)</li>
              <li>Chief Operating Officer (COO)</li>
              <li>Chief Scientific Officer (CSO)</li>
              <li>Chief Quality Officer (CQO)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Departments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Research & Development</h3>
                <p>Driving innovation and new product development</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Manufacturing</h3>
                <p>Producing high-quality pharmaceutical products</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Quality Assurance</h3>
                <p>Ensuring adherence to GMP and ISO standards</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Sales & Marketing</h3>
                <p>Promoting and distributing our products</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Regulatory Affairs</h3>
                <p>Managing compliance with local and international regulations</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Human Resources</h3>
                <p>Nurturing our most valuable asset - our people</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Operational Units</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Tablet Production</li>
              <li>Liquid Formulations</li>
              <li>Packaging and Logistics</li>
              <li>Quality Control Laboratory</li>
              <li>Warehousing and Distribution</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Support Functions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Information Technology</li>
              <li>Finance and Accounting</li>
              <li>Legal and Compliance</li>
              <li>Facilities Management</li>
              <li>Corporate Communications</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
