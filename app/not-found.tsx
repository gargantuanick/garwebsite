import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for doesn't exist or has been moved.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="container-custom text-center">
        <h1 className="text-6xl font-bold mb-6">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8">The page you are looking for doesn't exist or has been moved.</p>
        <div className="space-y-4">
          <p className="text-gray-400">You might want to check out these pages instead:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary">
              Home
            </Link>
            <Link href="/services" className="btn-secondary">
              Services
            </Link>
            <Link href="/team" className="btn-secondary">
              Team
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
