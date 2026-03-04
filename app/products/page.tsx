"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductShowcase } from "@/components/product-showcase"

gsap.registerPlugin(ScrollTrigger)

export default function ProductsPage() {
  const headerRef = useRef(null)
  const tabsRef = useRef(null)

  useEffect(() => {
    const header = headerRef.current
    const tabs = tabsRef.current

    gsap.from(header, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    })

    gsap.from(tabs.children, {
      scrollTrigger: {
        trigger: tabs,
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
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#312783] sm:text-5xl">Our Products</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Discover our range of high-quality pharmaceutical products, manufactured to the highest standards.
        </p>
      </div>

      <ProductShowcase />

      <Tabs defaultValue="tablets" className="mt-16 space-y-8" ref={tabsRef}>
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          <TabsTrigger value="tablets">Tablets</TabsTrigger>
          <TabsTrigger value="syrups">Syrups</TabsTrigger>
          <TabsTrigger value="antitussives">Antitussives</TabsTrigger>
          <TabsTrigger value="powders">Powders</TabsTrigger>
        </TabsList>
        <TabsContent value="tablets" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Coated Tablets</CardTitle>
                <CardDescription>Professional pharmaceutical grade tablets</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-inside list-disc space-y-2">
                  <li>Pain relief tablets</li>
                  <li>Anti-inflammatory medication</li>
                  <li>Antibiotics</li>
                  <li>Vitamin supplements</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Uncoated Tablets</CardTitle>
                <CardDescription>Fast-dissolving medication</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-inside list-disc space-y-2">
                  <li>Generic medications</li>
                  <li>Basic supplements</li>
                  <li>Common treatments</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="syrups" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Liquid Medications</CardTitle>
                <CardDescription>Easy to administer formulations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-inside list-disc space-y-2">
                  <li>Cough syrups</li>
                  <li>Children's medications</li>
                  <li>Liquid supplements</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="antitussives" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Cough Medications</CardTitle>
                <CardDescription>Effective cough relief solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-inside list-disc space-y-2">
                  <li>Expectorants</li>
                  <li>Cough suppressants</li>
                  <li>Combination formulas</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="powders" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Medical Powders</CardTitle>
                <CardDescription>For internal and external use</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-inside list-disc space-y-2">
                  <li>Topical applications</li>
                  <li>Oral solutions</li>
                  <li>Specialized treatments</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Quality Assurance</CardTitle>
            <CardDescription>All our products are manufactured under strict quality control measures</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-inside list-disc space-y-2">
              <li>GMP certified manufacturing</li>
              <li>ISO 22000:2005 standards</li>
              <li>Modern and durable packaging</li>
              <li>Accredited laboratory testing</li>
              <li>Over 20,000 quality tests annually</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
