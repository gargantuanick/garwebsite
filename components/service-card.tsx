import type React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  link: string
}

export default function ServiceCard({ title, description, icon, link }: ServiceCardProps) {
  return (
    <div className="card group h-full flex flex-col">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="heading-3 mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-foreground/70 mb-6 flex-grow">{description}</p>
      <Link href={link} className="inline-flex items-center text-primary hover:underline mt-auto">
        Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  )
}
