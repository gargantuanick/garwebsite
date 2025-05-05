import type { Metadata } from "next"
import ServicesPageClient from "./ServicesPageClient"

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore our range of services including Intelligent Data Mastery, Cognitive System Engineering, and Ecosystem Architecture.",
  alternates: {
    canonical: "/services",
  },
}

export default function ServicesPage() {
  return <ServicesPageClient />
}
