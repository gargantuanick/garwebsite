"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-in-right" | "fade-in-left" | "scale-up" | "blur-in"
  threshold?: number
  rootMargin?: string
  delay?: number
  id?: string
}

// Update the rootMargin to trigger animations slightly earlier
export default function AnimatedSection({
  children,
  className = "",
  animation = "fade-up",
  threshold = 0.05,
  rootMargin = "-20px",
  delay = 0,
  id,
}: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
  })

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-up":
        return "animate-fade-up"
      case "fade-in-right":
        return "animate-fade-in-right"
      case "fade-in-left":
        return "animate-fade-in-left"
      case "scale-up":
        return "animate-scale-up"
      case "blur-in":
        return "animate-blur-in"
      case "reveal":
        return "animate-reveal"
      default:
        return "animate-fade-up"
    }
  }

  const getDelayClass = () => {
    if (delay === 0) return ""
    return `animate-delay-${delay}`
  }

  return (
    <section
      ref={ref as any}
      className={`${className} ${isIntersecting ? `${getAnimationClass()} ${getDelayClass()}` : "section-hidden"}`}
      id={id}
    >
      {children}
    </section>
  )
}
