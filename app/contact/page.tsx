import ContactSection from "@/components/contact-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Gargantua Group to discuss how we can help transform your business with cutting-edge technology and data-driven insights.",
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactSection />
    </div>
  )
}
