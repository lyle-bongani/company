"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Users, Award, Microscope, Leaf, Handshake, Globe } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function CompanyPrinciples() {
  const headerRef = useRef(null)
  const principlesRef = useRef(null)

  useEffect(() => {
    const header = headerRef.current
    const principles = principlesRef.current

    gsap.from(header, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    })

    gsap.from(principles.children, {
      scrollTrigger: {
        trigger: principles,
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
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#312783] sm:text-5xl">Our Principles</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          The core values that guide our actions, decisions, and relationships in our mission to improve healthcare.
        </p>
      </div>

      <div ref={principlesRef} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <Building2 className="h-10 w-10 text-[#009640]" />
            <CardTitle>Integrity</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We uphold the highest ethical standards in all our operations, ensuring transparency and trustworthiness
              in every aspect of our business.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Users className="h-10 w-10 text-[#312783]" />
            <CardTitle>People-Centric</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We value our employees, customers, and communities, fostering a culture of respect, diversity, and
              inclusion.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Award className="h-10 w-10 text-[#009640]" />
            <CardTitle>Quality Excellence</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We are committed to delivering products of the highest quality, adhering to international standards and
              best practices in pharmaceutical manufacturing.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Microscope className="h-10 w-10 text-[#312783]" />
            <CardTitle>Innovation</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We continuously strive to innovate, investing in research and development to meet evolving healthcare
              needs and improve patient outcomes.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Leaf className="h-10 w-10 text-[#009640]" />
            <CardTitle>Sustainability</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We are committed to environmental stewardship, implementing sustainable practices throughout our
              operations to minimize our ecological footprint.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Handshake className="h-10 w-10 text-[#312783]" />
            <CardTitle>Collaboration</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We believe in the power of partnerships, working closely with healthcare professionals, institutions, and
              communities to achieve better health outcomes.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Globe className="h-10 w-10 text-[#009640]" />
            <CardTitle>Global Perspective</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              While rooted in Zimbabwe, we maintain a global outlook, staying abreast of international developments and
              best practices in the pharmaceutical industry.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
