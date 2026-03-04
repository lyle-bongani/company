import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="not-italic">
              <p>6 Falcon St, Belmont</p>
              <p>Bulawayo, Zimbabwe</p>
              <p className="mt-2">Tel: +263-9-474936</p>
              <p>Mobile: +263-9-782781443/4</p>
              <p className="mt-2">
                <a href="mailto:Sales_byo@zimpharm.co.zw" className="text-[#312783] hover:underline">
                  Sales_byo@zimpharm.co.zw
                </a>
              </p>
            </address>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Opening Hours</h3>
            <p>Monday - Friday</p>
            <p>8:00 AM - 5:00 PM</p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[#312783]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-600 hover:text-[#312783]">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-600 hover:text-[#312783]">
                  News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#312783]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Payment Methods</h3>
            <p>We accept:</p>
            <ul className="mt-2 space-y-1">
              <li>Cash</li>
              <li>Swipe</li>
              <li>Bank Transfers (USD)</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Zimbabwe Pharmaceuticals (PVT) LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
