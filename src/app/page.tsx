"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, FlaskRoundIcon as Flask, Award, Phone, Microscope, Truck, Users, Globe, Heart } from "lucide-react"
import { Carousel } from "@/components/carousel"
import { ThreeBackground } from "@/components/three-background"
import { RealTimeUpdates } from "@/components/real-time-updates"

gsap.registerPlugin(ScrollTrigger)

const carouselImages = [
  {
    src: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Pharmaceutical laboratory with scientists working",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Modern pharmaceutical production line",
  },
  {
    src: "https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Pharmacist examining medication",
  },
]

export default function Home() {
  const heroRef = useRef(null)
  const statsRef = useRef(null)
  const aboutRef = useRef(null)
  const servicesRef = useRef(null)
  const missionRef = useRef(null)
  const teamRef = useRef(null)
  const updatesRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    const stats = statsRef.current
    const about = aboutRef.current
    const services = servicesRef.current
    const mission = missionRef.current
    const team = teamRef.current
    const updates = updatesRef.current

    gsap.from(hero, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    })

    gsap.from(stats.children, {
      scrollTrigger: {
        trigger: stats,
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
    })

    gsap.from(about, {
      scrollTrigger: {
        trigger: about,
        start: "top 70%",
      },
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
    })

    gsap.from(services.children, {
      scrollTrigger: {
        trigger: services,
        start: "top 70%",
      },
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
    })

    gsap.from(mission, {
      scrollTrigger: {
        trigger: mission,
        start: "top 70%",
      },
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
    })

    gsap.from(team.children, {
      scrollTrigger: {
        trigger: team,
        start: "top 70%",
      },
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
    })

    gsap.from(updates, {
      scrollTrigger: {
        trigger: updates,
        start: "top 70%",
      },
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
    })
  }, [])

  return (
    <>
      <ThreeBackground />
      <section ref={heroRef} className="relative h-[600px] w-full overflow-hidden">
        <Carousel images={carouselImages} />
        <div className="absolute inset-0 bg-[#312783]/60">
          <div className="container relative flex h-full flex-col items-center justify-center text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
              Beyond Today
            </h1>
            <p className="max-w-[600px] text-lg text-white md:text-xl">
              We take great pride in the professional quality of our work
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-[#009640] hover:bg-[#009640]/90 text-white">
                <Link href="/products">Our Products</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white text-[#312783] hover:bg-gray-100">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section ref={statsRef} className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <Building2 className="h-10 w-10 text-[#312783]" />
                <CardTitle>Established 1992</CardTitle>
                <CardDescription>Wholly Zimbabwean-owned pharmaceutical company</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Flask className="h-10 w-10 text-[#009640]" />
                <CardTitle>Modern Facilities</CardTitle>
                <CardDescription>36-hectare production area with state-of-the-art equipment</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Award className="h-10 w-10 text-[#312783]" />
                <CardTitle>Quality Assured</CardTitle>
                <CardDescription>GMP and ISO 22000:2005 certified manufacturing</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Phone className="h-10 w-10 text-[#009640]" />
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>Professional support and service</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section ref={aboutRef} className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#312783] sm:text-4xl">About ZimPharm</h2>
            <p className="mb-8 text-lg text-gray-600">
              Zimbabwe Pharmaceuticals (PVT) LTD, formerly known as Ian Wilson (Pvt.) Ltd and Wellcome Pharmaceuticals,
              has been a trusted name in the pharmaceutical industry since 1992. Our commitment to quality and
              innovation has made us a leader in the Zimbabwean healthcare sector.
            </p>
            <Button asChild size="lg" className="bg-[#312783] hover:bg-[#312783]/90 text-white">
              <Link href="/company">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <section ref={servicesRef} className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-[#312783] sm:text-4xl">
            Our Services
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <Microscope className="h-10 w-10 text-[#009640]" />
                <CardTitle>Research & Development</CardTitle>
                <CardDescription>Innovating for better healthcare solutions</CardDescription>
              </CardHeader>
              <CardContent>
                Our dedicated R&D team works tirelessly to develop new formulations and improve existing products,
                ensuring we stay at the forefront of pharmaceutical advancements.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Flask className="h-10 w-10 text-[#312783]" />
                <CardTitle>Manufacturing</CardTitle>
                <CardDescription>State-of-the-art production facilities</CardDescription>
              </CardHeader>
              <CardContent>
                With our modern 36-hectare production area, we manufacture a wide range of high-quality pharmaceutical
                products, from tablets and syrups to specialized formulations.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Truck className="h-10 w-10 text-[#009640]" />
                <CardTitle>Distribution</CardTitle>
                <CardDescription>Reliable supply chain management</CardDescription>
              </CardHeader>
              <CardContent>
                Our efficient distribution network ensures that our products reach pharmacies, hospitals, and healthcare
                providers across Zimbabwe and beyond, maintaining the highest standards of quality and safety.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section ref={missionRef} className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#312783] sm:text-4xl">Our Mission</h2>
            <p className="mb-8 text-lg text-gray-600">
              At ZimPharm, our mission is to improve the health and well-being of people in Zimbabwe and beyond by
              providing high-quality, affordable pharmaceutical products. We are committed to innovation, excellence,
              and ethical practices in all aspects of our operations.
            </p>
            <Button asChild size="lg" className="bg-[#009640] hover:bg-[#009640]/90 text-white">
              <Link href="/company/mission-and-credo">Read Our Full Mission</Link>
            </Button>
          </div>
        </div>
      </section>

      <section ref={teamRef} className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-[#312783] sm:text-4xl">
            Why Choose ZimPharm
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-[#009640]" />
                <CardTitle>Expert Team</CardTitle>
                <CardDescription>Highly skilled professionals dedicated to excellence</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Globe className="h-10 w-10 text-[#312783]" />
                <CardTitle>Local & Global</CardTitle>
                <CardDescription>Zimbabwean roots with international standards</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Heart className="h-10 w-10 text-[#009640]" />
                <CardTitle>Patient-Centric</CardTitle>
                <CardDescription>Focused on improving lives through healthcare</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Award className="h-10 w-10 text-[#312783]" />
                <CardTitle>Quality Assured</CardTitle>
                <CardDescription>Rigorous standards in every product we make</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section ref={updatesRef} className="py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-[#312783] sm:text-4xl">
            Real-Time Updates
          </h2>
          <RealTimeUpdates />
        </div>
      </section>
    </>
  )
}
