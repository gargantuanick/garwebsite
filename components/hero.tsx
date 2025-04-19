import Link from "next/link"
import Particles from "./particles"

interface HeroProps {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
}

export default function Hero({ title, subtitle, ctaText, ctaLink }: HeroProps) {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <Particles />
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('/images/cosmic-background.jpg')",
          backgroundBlendMode: "screen",
        }}
      />
      <div className="container-custom relative z-10 w-full">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="heading-1 mb-6">{title}</h1>
          <p className="subheading mb-8">{subtitle}</p>
          <Link href={ctaLink} className="btn-primary">
            {ctaText}
          </Link>
        </div>
      </div>
    </div>
  )
}
