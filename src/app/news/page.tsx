"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

gsap.registerPlugin(ScrollTrigger)

const newsItems = [
  {
    slug: "new-pain-relief-medication",
    title: "ZimPharm Launches New Pain Relief Medication",
    description: "Our latest product aims to provide fast and effective relief for chronic pain sufferers.",
    date: "May 15, 2023",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1460&q=80",
  },
  {
    slug: "expansion-of-research-facilities",
    title: "Expansion of Research Facilities",
    description: "ZimPharm invests in state-of-the-art equipment to boost our R&D capabilities.",
    date: "April 2, 2023",
    image:
      "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    slug: "partnership-with-local-universities",
    title: "Partnership with Local Universities",
    description: "New initiative to support pharmaceutical research and education in Zimbabwe.",
    date: "March 10, 2023",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
]

export default function NewsPage() {
  const headerRef = useRef(null)
  const newsRef = useRef(null)

  useEffect(() => {
    const header = headerRef.current
    const news = newsRef.current

    gsap.from(header, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    })

    gsap.from(news.children, {
      scrollTrigger: {
        trigger: news,
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
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#312783] sm:text-5xl">Latest News</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Stay updated with the latest developments and announcements from ZimPharm.
        </p>
      </div>

      <div ref={newsRef} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={400}
                height={225}
                className="rounded-lg object-cover"
              />
            </CardHeader>
            <CardContent>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
              <span className="text-sm text-gray-500">{item.date}</span>
              <Button asChild variant="outline">
                <Link href={`/news/${item.slug}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
