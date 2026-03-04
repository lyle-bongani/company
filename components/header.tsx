"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const companyLinks = [
  { href: "/company", label: "Company Overview", desc: "Learn about ZimPharm's history, mission, and values" },
  { href: "/company/history", label: "History", desc: "Explore our journey from 1992 to the present day" },
  { href: "/company/mission-and-credo", label: "Mission & Credo", desc: "Our guiding principles and beliefs" },
  { href: "/company/principles", label: "Principles", desc: "The core values that drive our business" },
  { href: "/company/structure", label: "Company Structure", desc: "Our organizational framework" },
  {
    href: "/company/research-and-development",
    label: "Research & Development",
    desc: "Innovating for a healthier future",
  },
  { href: "/company/quality-assurance", label: "Quality Assurance", desc: "Our commitment to excellence" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 glass">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-rcwZO5fonN6JKRHphRsA6wSGTCGrqi.svg"
            alt="ZimPharm Logo"
            width={140}
            height={42}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-[#1a1a2e] transition-colors hover:text-[#009640] focus:text-[#009640] focus:outline-none">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-[#1a1a2e] hover:text-[#009640]">
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {companyLinks.map((link) => (
                      <li key={link.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={link.href}
                            className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-[#009640]/5 focus:bg-[#009640]/5"
                          >
                            <div className="text-sm font-medium leading-none text-[#312783]">{link.label}</div>
                            <p className="mt-1 line-clamp-2 text-xs leading-snug text-gray-500">{link.desc}</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/products" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-[#1a1a2e] transition-colors hover:text-[#009640] focus:text-[#009640] focus:outline-none">
                    Products
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/news" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-[#1a1a2e] transition-colors hover:text-[#009640] focus:text-[#009640] focus:outline-none">
                    News
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-lg bg-[#009640] px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-[#007a34] hover:shadow-md"
                >
                  Contact Us
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden rounded-lg p-2 text-[#1a1a2e] hover:bg-gray-100 transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md">
          <nav className="container px-4 py-4">
            <ul className="space-y-1">
              <li>
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-[#1a1a2e] hover:bg-[#009640]/5 hover:text-[#009640] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setCompanyOpen(!companyOpen)}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-[#1a1a2e] hover:bg-[#009640]/5 hover:text-[#009640] transition-colors"
                >
                  Company
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${companyOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {companyOpen && (
                  <ul className="ml-4 space-y-1 border-l-2 border-[#009640]/20 pl-3 mt-1">
                    {companyLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-[#009640]/5 hover:text-[#009640] transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <Link
                  href="/products"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-[#1a1a2e] hover:bg-[#009640]/5 hover:text-[#009640] transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-[#1a1a2e] hover:bg-[#009640]/5 hover:text-[#009640] transition-colors"
                >
                  News
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg bg-[#009640] px-4 py-3 text-center text-sm font-semibold text-white hover:bg-[#007a34] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
