"use client"

import { useEffect, useRef } from "react"
import { Mail, MapPin, Phone, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function ContactPage() {
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
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#312783] sm:text-5xl">Contact Us</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Get in touch with us for any inquiries or support. We're here to help.
        </p>
      </div>
      <div ref={contentRef} className="grid gap-12 md:grid-cols-2">
        <div>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#009640]" />
                  Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>6 Falcon St, Belmont</p>
                <p>Bulawayo, Zimbabwe</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-[#009640]" />
                  Phone Numbers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Tel: +263-9-474936</p>
                <p>Mobile: +263-9-782781443/4</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-[#009640]" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:Sales_byo@zimpharm.co.zw" className="text-[#312783] hover:underline">
                  Sales_byo@zimpharm.co.zw
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-[#009640]" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Monday - Friday</p>
                <p>8:00 AM - 5:00 PM</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8">
            <h2 className="mb-4 text-2xl font-bold text-[#312783]">Directions</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>From the city center, head south on 8th Avenue</li>
              <li>Turn left onto Falcon Street</li>
              <li>Continue for about 500 meters</li>
              <li>ZimPharm will be on your right</li>
            </ol>
          </div>
        </div>
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your full name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email address" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="Your phone number" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px]" />
                </div>
                <div className="mt-4">
                  <Button className="w-full bg-[#009640] hover:bg-[#009640]/90 text-white">Send Message</Button>
                </div>
              </form>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Our Location</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.4944484541677!2d28.572699915114934!3d-20.156549986532788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eb5549e0795d6c3%3A0x2e5c5c8c5a5c5c5c!2s6%20Falcon%20St%2C%20Belmont%2C%20Bulawayo%2C%20Zimbabwe!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
