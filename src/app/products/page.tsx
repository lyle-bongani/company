"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductShowcase } from "@/components/product-showcase"

gsap.registerPlugin(ScrollTrigger)

const productCategories = [
  {
    id: "cold-cough",
    name: "Cold and Cough Preparations",
    products: [
      "Zimcold Syrup",
      "Zimcold Tablets",
      "Zimcold DM Syrup",
      "Zimcold DM Tablets",
      "Zimflu Syrup",
      "Zimflu Tablets",
      "Zimcof Syrup",
      "Zimcof Tablets",
    ],
  },
  {
    id: "anti-malarials",
    name: "Anti-Malarials & Mosquito Repellents",
    products: [
      "Zimphos Tablets",
      "Zimquine Tablets",
      "Zimquine Syrup",
      "Zimtem Tablets",
      "Zimtem Syrup",
      "Mosquito Repellent Cream",
      "Mosquito Repellent Lotion",
    ],
  },
  {
    id: "analgesics",
    name: "Analgesics and Antipyretics",
    products: [
      "Zimol Tablets",
      "Zimol Syrup",
      "Zimol Suppositories",
      "Zimol Forte Tablets",
      "Zimol Forte Syrup",
      "Zimfen Tablets",
      "Zimfen Syrup",
    ],
  },
  {
    id: "personal-care",
    name: "Personal Care & Hygiene",
    products: [
      "Zimrub Ointment",
      "Zimrub Cream",
      "Zimrub Lotion",
      "Zimrub Gel",
      "Zimcare Petroleum Jelly",
      "Zimcare Glycerine",
    ],
  },
  {
    id: "topical",
    name: "Topical Preparations",
    products: [
      "Zimcal Lotion",
      "Zimcal Cream",
      "Zimcal Ointment",
      "Zimcort Cream",
      "Zimcort Ointment",
      "Zimtopic Cream",
      "Zimtopic Ointment",
    ],
  },
  {
    id: "vitamins",
    name: "Vitamins",
    products: [
      "Zimvite Tablets",
      "Zimvite Syrup",
      "Zimvite B Complex Tablets",
      "Zimvite B Complex Syrup",
      "Zimvite C Tablets",
      "Zimvite C Syrup",
    ],
  },
  {
    id: "food-seasoning",
    name: "Food Seasoning",
    products: ["Zimsalt Iodised Salt"],
  },
  {
    id: "vet-products",
    name: "Toll Manufactured Vet Products",
    products: ["Zimectin 1% Injectable Solution", "Albenzim 2.5% Suspension", "Zimectin Pour On"],
  },
]

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

      <Tabs defaultValue={productCategories[0].id} className="mt-16 space-y-8" ref={tabsRef}>
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          {productCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {productCategories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-inside list-disc space-y-2">
                  {category.products.map((product, index) => (
                    <li key={index}>{product}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Quality Assurance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              At ZimPharm, we are committed to maintaining the highest standards of quality in all our products. Our
              manufacturing processes adhere to strict quality control measures to ensure the safety and efficacy of our
              pharmaceuticals.
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>GMP certified manufacturing</li>
              <li>ISO 9001:2015 certified Quality Management System</li>
              <li>Rigorous testing and quality control procedures</li>
              <li>State-of-the-art production facilities</li>
              <li>Continuous improvement and innovation in our processes</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
