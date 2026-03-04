"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Microscope, FlaskRoundIcon as Flask, Lightbulb, Users, Globe, Award } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function ResearchAndDevelopment() {
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
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#312783] sm:text-5xl">Research & Development</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Driving innovation and advancing healthcare through cutting-edge pharmaceutical research and development.
        </p>
      </div>

      <div ref={contentRef} className="space-y-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-[#312783]">Our Commitment to Innovation</h2>
            <p className="mb-4 text-gray-600">
              At ZimPharm, our Research and Development department is the cornerstone of our commitment to innovation
              and excellence in healthcare. We invest significantly in R&D to develop new formulations, improve existing
              products, and address unmet medical needs in Zimbabwe and beyond.
            </p>
            <p className="text-gray-600">
              Our team of skilled scientists and researchers work tirelessly to push the boundaries of pharmaceutical
              science, ensuring that we remain at the forefront of medical advancements and continue to provide
              high-quality, effective medications to our patients.
            </p>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg md:h-auto">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="ZimPharm R&D Laboratory"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <Microscope className="h-10 w-10 text-[#009640]" />
              <CardTitle>State-of-the-Art Facilities</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our modern laboratories are equipped with cutting-edge technology, enabling our researchers to conduct
                advanced studies and experiments.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Flask className="h-10 w-10 text-[#312783]" />
              <CardTitle>Product Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We focus on developing new formulations and improving existing products to meet the evolving needs of
                patients and healthcare providers.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Lightbulb className="h-10 w-10 text-[#009640]" />
              <CardTitle>Innovation Pipeline</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our robust pipeline of innovative projects ensures a steady stream of new and improved pharmaceutical
                solutions for the future.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Users className="h-10 w-10 text-[#312783]" />
              <CardTitle>Collaborative Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We collaborate with universities, research institutions, and healthcare professionals to leverage
                diverse expertise and accelerate innovation.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Globe className="h-10 w-10 text-[#009640]" />
              <CardTitle>Global Standards</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our R&D processes adhere to international standards, ensuring that our innovations meet global quality
                and safety benchmarks.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Award className="h-10 w-10 text-[#312783]" />
              <CardTitle>Research Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our team's dedication to scientific excellence has resulted in numerous patents and publications,
                contributing to the broader field of pharmaceutical research.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Our Research Focus Areas</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Novel drug delivery systems</li>
              <li>Improved formulations for enhanced bioavailability</li>
              <li>Development of generic alternatives to essential medicines</li>
              <li>Exploration of traditional African medicines for modern pharmaceutical applications</li>
              <li>Targeted therapies for prevalent local health conditions</li>
              <li>Sustainable and environmentally friendly manufacturing processes</li>
            </ul>
          </CardContent>
        </Card>

        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold text-[#312783]">Innovating for a Healthier Tomorrow</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Our commitment to research and development goes beyond creating new products. It's about improving lives,
            advancing healthcare, and contributing to a healthier future for Zimbabwe and beyond. At ZimPharm, we
            believe that every scientific breakthrough brings us one step closer to a world where quality healthcare is
            accessible to all.
          </p>
        </div>
      </div>
    </div>
  )
}
