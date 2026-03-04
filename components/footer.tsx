import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t bg-gradient-to-b from-[#1a1550] to-[#0f0d2e] text-white">
      {/* Wave top */}
      <div className="absolute -top-[1px] left-0 right-0">
        <svg viewBox="0 0 1440 40" className="w-full h-[40px]" preserveAspectRatio="none">
          <path
            fill="#1a1550"
            d="M0,20 C360,40 720,0 1080,20 C1260,30 1380,25 1440,20 L1440,40 L0,40 Z"
          />
        </svg>
      </div>

      <div className="container py-12 md:py-16 px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-rcwZO5fonN6JKRHphRsA6wSGTCGrqi.svg"
              alt="ZimPharm Logo"
              width={140}
              height={42}
              className="mb-4 brightness-0 invert"
            />
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Zimbabwe Pharmaceuticals (PVT) LTD. Proudly Zimbabwean since 1992, delivering quality
              pharmaceutical products for a healthier nation.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-[#009640]">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#009640] mt-0.5 shrink-0" />
                <address className="not-italic text-sm text-gray-300">
                  6 Falcon St, Belmont, Bulawayo, Zimbabwe
                </address>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-[#009640] mt-0.5 shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>+263-9-474936</p>
                  <p>+263-9-782781443/4</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-[#009640] mt-0.5 shrink-0" />
                <a
                  href="mailto:Sales_byo@zimpharm.co.zw"
                  className="text-sm text-gray-300 hover:text-[#009640] transition-colors"
                >
                  Sales_byo@zimpharm.co.zw
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-[#009640] mt-0.5 shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Monday - Friday</p>
                  <p>8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-[#009640]">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/company", label: "Company" },
                { href: "/products", label: "Products" },
                { href: "/news", label: "News" },
                { href: "/contact", label: "Contact Us" },
                { href: "/company/quality-assurance", label: "Quality Assurance" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-[#009640] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment & Extra */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-[#009640]">Payment Methods</h3>
            <p className="text-sm text-gray-300 mb-2">We accept:</p>
            <ul className="space-y-1 text-sm text-gray-300 mb-6">
              <li>Cash (USD)</li>
              <li>Swipe</li>
              <li>Bank Transfers (USD)</li>
            </ul>

            <h3 className="mb-3 text-base font-semibold text-[#009640]">Certifications</h3>
            <div className="flex flex-wrap gap-2">
              <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">
                GMP Certified
              </span>
              <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">
                ISO 22000:2005
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Zimbabwe Pharmaceuticals (PVT) LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
