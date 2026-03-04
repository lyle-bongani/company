import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HomeButton } from "@/components/home-button"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ZimPharm - Beyond Today",
  description: "Zimbabwe Pharmaceuticals (PVT) LTD - Quality pharmaceutical products since 1992",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <HomeButton />
      </body>
    </html>
  )
}
