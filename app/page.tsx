"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Building2,
  FlaskRoundIcon as Flask,
  Award,
  Phone,
  Microscope,
  Truck,
  Users,
  Globe,
  Heart,
  ShieldCheck,
  Leaf,
  Pill,
  Clock,
  MapPin,
} from "lucide-react"
import { Carousel } from "@/components/carousel"
import { WaterBackground } from "@/components/water-background"
import { RippleCard } from "@/components/ripple-card"
import { WaterButton } from "@/components/water-button"

gsap.registerPlugin(ScrollTrigger)

const carouselImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/people.jpg-SMYaTeQ4idY1s6diXoa1eYUBjv0JUA.jpeg",
    alt: "Laboratory professional examining medical vials",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/clients.jpg-3g0SVRBrTwx0ELWgLn2TanLCkioGpu.jpeg",
    alt: "Healthcare consultation with clients",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pride.jpg-i71V5rucSBDkFcZwgPZvqjzSGAkh9V.jpeg",
    alt: "Quality control in laboratory",
  },
]

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const missionRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const productsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      })

      const sections = [
        { ref: statsRef, children: true },
        { ref: aboutRef, children: false },
        { ref: servicesRef, children: true },
        { ref: missionRef, children: false },
        { ref: teamRef, children: true },
        { ref: ctaRef, children: false },
        { ref: productsRef, children: true },
      ]

      sections.forEach(({ ref, children }) => {
        if (!ref.current) return
        const target = children ? ref.current.children : ref.current
        gsap.from(target, {
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
          },
          opacity: 0,
          y: 40,
          stagger: children ? 0.15 : 0,
          duration: 0.8,
          ease: "power3.out",
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <WaterBackground />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[700px] w-full overflow-hidden">
        <Carousel images={carouselImages} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#312783]/70 via-[#312783]/50 to-[#009640]/40">
          <div className="container relative flex h-full flex-col items-center justify-center text-center px-4">
            <span className="mb-4 inline-block rounded-full bg-white/20 px-6 py-2 text-sm font-medium text-white backdrop-blur-sm">
              Proudly Zimbabwean Since 1992
            </span>
            <h1 className="mb-6 text-4xl font-bold tracking-tighter text-white sm:text-5xl lg:text-6xl xl:text-7xl text-balance">
              Beyond Today
            </h1>
            <p className="max-w-[700px] text-lg text-white/90 md:text-xl leading-relaxed">
              We take great pride in the professional quality of our work. Delivering trusted pharmaceutical
              products for a healthier Zimbabwe.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <WaterButton href="/products" variant="primary" size="lg">
                Our Products
              </WaterButton>
              <WaterButton href="/company" variant="outline" size="lg">
                About Us
              </WaterButton>
              <WaterButton href="/contact" variant="secondary" size="lg">
                Contact Us
              </WaterButton>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs text-white/70">Scroll to explore</span>
                <div className="h-8 w-5 rounded-full border-2 border-white/40 p-1">
                  <div className="h-2 w-1.5 rounded-full bg-white/80 mx-auto animate-bounce" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <div className="relative -mt-1">
        <svg viewBox="0 0 1440 60" className="w-full h-[60px]" preserveAspectRatio="none">
          <path
            fill="#f8fafc"
            d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,40 1440,30 L1440,60 L0,60 Z"
          />
        </svg>
      </div>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 bg-[#f8fafc]">
        <div className="container px-4">
          <div ref={statsRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Building2,
                title: "Established 1992",
                desc: "Wholly Zimbabwean-owned pharmaceutical company",
                color: "#312783",
              },
              {
                icon: Flask,
                title: "Modern Facilities",
                desc: "36-hectare production area with state-of-the-art equipment",
                color: "#009640",
              },
              {
                icon: Award,
                title: "Quality Assured",
                desc: "GMP and ISO 22000:2005 certified manufacturing",
                color: "#312783",
              },
              {
                icon: Phone,
                title: "Get in Touch",
                desc: "Professional support and service available",
                color: "#009640",
              },
            ].map((item) => (
              <RippleCard key={item.title}>
                <div className="p-6">
                  <item.icon className="h-10 w-10 mb-4" style={{ color: item.color }} />
                  <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </RippleCard>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 animate-shimmer opacity-50" />
        <div className="container px-4 relative">
          <div ref={aboutRef} className="mx-auto max-w-4xl">
            <div className="glass rounded-2xl p-8 md:p-12 text-center">
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#009640]">
                Who We Are
              </h2>
              <h3 className="mb-6 text-3xl font-bold tracking-tight text-[#312783] sm:text-4xl text-balance">
                About ZimPharm
              </h3>
              <p className="mb-6 text-lg text-gray-600 leading-relaxed">
                Zimbabwe Pharmaceuticals (PVT) LTD, formerly known as Ian Wilson (Pvt.) Ltd and Wellcome
                Pharmaceuticals, has been a trusted name in the pharmaceutical industry since 1992. Our
                commitment to quality and innovation has made us a leader in the Zimbabwean healthcare sector.
              </p>
              <p className="mb-8 text-lg text-gray-600 leading-relaxed">
                Operating from our 36-hectare production facility in Bulawayo, we manufacture a comprehensive
                range of pharmaceutical products including tablets, syrups, antitussives, expectorants,
                antihistamines, and powders for both internal and external use.
              </p>
              <WaterButton href="/company" variant="secondary" size="md">
                Learn More About Us
              </WaterButton>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-[#f0fdf4]/50 to-[#f8fafc]">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#009640]">
              What We Offer
            </h2>
            <h3 className="text-3xl font-bold tracking-tight text-[#312783] sm:text-4xl text-balance">
              Our Product Range
            </h3>
          </div>
          <div ref={productsRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Pill, name: "Cold & Cough", desc: "Preparations for cold and cough relief" },
              { icon: ShieldCheck, name: "Anti-Malarials", desc: "Anti-malarials and mosquito repellents" },
              { icon: Heart, name: "Analgesics", desc: "Pain relief and antipyretic products" },
              { icon: Leaf, name: "Personal Care", desc: "Personal care and hygiene products" },
              { icon: Flask, name: "Topical Preparations", desc: "Creams, ointments, and topical solutions" },
              { icon: Award, name: "Vitamins", desc: "Essential vitamin supplements" },
              { icon: Globe, name: "Food Seasoning", desc: "Quality food seasoning products" },
              { icon: Microscope, name: "Vet Products", desc: "Toll manufactured veterinary products" },
            ].map((product) => (
              <RippleCard key={product.name}>
                <div className="p-6 text-center">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#312783]/10 to-[#009640]/10">
                    <product.icon className="h-7 w-7 text-[#312783]" />
                  </div>
                  <h4 className="text-base font-semibold text-[#1a1a2e] mb-1">{product.name}</h4>
                  <p className="text-sm text-gray-600">{product.desc}</p>
                </div>
              </RippleCard>
            ))}
          </div>
          <div className="mt-10 text-center">
            <WaterButton href="/products" variant="primary" size="lg">
              View All Products
            </WaterButton>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#009640]">
              What We Do
            </h2>
            <h3 className="text-3xl font-bold tracking-tight text-[#312783] sm:text-4xl text-balance">
              Our Services
            </h3>
          </div>
          <div ref={servicesRef} className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Microscope,
                title: "Research & Development",
                desc: "Our dedicated R&D team works tirelessly to develop new formulations and improve existing products, ensuring we stay at the forefront of pharmaceutical advancements.",
                color: "#009640",
              },
              {
                icon: Flask,
                title: "Manufacturing",
                desc: "With our modern 36-hectare production area, we manufacture a wide range of high-quality pharmaceutical products, from tablets and syrups to specialized formulations.",
                color: "#312783",
              },
              {
                icon: Truck,
                title: "Distribution",
                desc: "Our efficient distribution network ensures that our products reach pharmacies, hospitals, and healthcare providers across Zimbabwe and beyond.",
                color: "#009640",
              },
            ].map((service) => (
              <RippleCard key={service.title}>
                <div className="p-8">
                  <service.icon className="h-12 w-12 mb-4" style={{ color: service.color }} />
                  <h4 className="text-xl font-semibold text-[#1a1a2e] mb-2">{service.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              </RippleCard>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-20 relative overflow-hidden bg-gradient-to-br from-[#312783] to-[#1a1550]">
        {/* Animated wave overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute bottom-0 w-[200%] animate-wave" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path fill="white" d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,60 1440,50 L1440,100 L0,100 Z" />
          </svg>
          <svg
            className="absolute bottom-0 w-[200%] animate-wave-slow"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path fill="white" d="M0,60 C400,20 800,80 1200,40 C1320,30 1400,50 1440,60 L1440,100 L0,100 Z" />
          </svg>
        </div>
        <div className="container px-4 relative">
          <div ref={missionRef} className="mx-auto max-w-3xl text-center">
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#009640]">
              Our Purpose
            </h2>
            <h3 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
              Our Mission
            </h3>
            <p className="mb-8 text-lg text-white/85 leading-relaxed">
              At ZimPharm, our mission is to improve the health and well-being of people in Zimbabwe and
              beyond by providing high-quality, affordable pharmaceutical products. We are committed to
              innovation, excellence, and ethical practices in all aspects of our operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <WaterButton href="/company/mission-and-credo" variant="primary" size="md">
                Read Our Full Mission
              </WaterButton>
              <WaterButton href="/company/principles" variant="outline" size="md">
                Our Principles
              </WaterButton>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20 bg-[#f8fafc]">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#009640]">
              Our Advantage
            </h2>
            <h3 className="text-3xl font-bold tracking-tight text-[#312783] sm:text-4xl text-balance">
              Why Choose ZimPharm
            </h3>
          </div>
          <div ref={teamRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Users,
                title: "Expert Team",
                desc: "Highly skilled professionals dedicated to pharmaceutical excellence",
                color: "#009640",
              },
              {
                icon: Globe,
                title: "Local & Global",
                desc: "Zimbabwean roots with international quality standards",
                color: "#312783",
              },
              {
                icon: Heart,
                title: "Patient-Centric",
                desc: "Focused on improving lives through accessible healthcare",
                color: "#009640",
              },
              {
                icon: Award,
                title: "GMP Certified",
                desc: "Rigorous manufacturing standards in every product we make",
                color: "#312783",
              },
            ].map((item) => (
              <RippleCard key={item.title}>
                <div className="p-6 text-center">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#312783]/10 to-[#009640]/10 animate-pulse-glow">
                    <item.icon className="h-7 w-7" style={{ color: item.color }} />
                  </div>
                  <h4 className="text-lg font-semibold text-[#1a1a2e] mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </RippleCard>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 lg:py-20">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <RippleCard>
              <div className="p-8 text-center">
                <MapPin className="h-10 w-10 text-[#009640] mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-[#1a1a2e] mb-2">Our Location</h4>
                <p className="text-gray-600">6 Falcon St, Belmont, Bulawayo, Zimbabwe</p>
              </div>
            </RippleCard>
            <RippleCard>
              <div className="p-8 text-center">
                <Clock className="h-10 w-10 text-[#312783] mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-[#1a1a2e] mb-2">Operating Hours</h4>
                <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
              </div>
            </RippleCard>
            <RippleCard>
              <div className="p-8 text-center">
                <Phone className="h-10 w-10 text-[#009640] mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-[#1a1a2e] mb-2">Contact Us</h4>
                <p className="text-gray-600">+263-9-474936 / +263-9-782781443</p>
              </div>
            </RippleCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 relative overflow-hidden bg-gradient-to-br from-[#009640] to-[#006b2d]">
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute bottom-0 w-[200%] animate-wave" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path fill="white" d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,60 1440,50 L1440,100 L0,100 Z" />
          </svg>
        </div>
        <div className="container px-4 relative">
          <div ref={ctaRef} className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
              Partner With Zimbabwe's Trusted Pharmaceutical Manufacturer
            </h2>
            <p className="mb-8 text-lg text-white/85 leading-relaxed">
              Whether you are a healthcare provider, distributor, or retailer, we would love to hear from
              you. Let us work together to bring quality healthcare products to the people of Zimbabwe.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <WaterButton href="/contact" variant="outline" size="lg">
                Get In Touch
              </WaterButton>
              <WaterButton href="/products" variant="secondary" size="lg">
                Explore Products
              </WaterButton>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
