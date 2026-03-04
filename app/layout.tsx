import type { Metadata, Viewport } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HomeButton } from "@/components/home-button"
import type React from "react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "ZimPharm - Beyond Today",
  description:
    "Zimbabwe Pharmaceuticals (PVT) LTD - Quality pharmaceutical products since 1992",
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#312783",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        <Header />
        <main className="relative">{children}</main>
        <Footer />
        <HomeButton />
      </body>
    </html>
  )
}
