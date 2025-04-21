"use client"

import { useReveal } from "@/hooks/use-reveal"
import type { ReactNode } from "react"

interface RevealSectionProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function RevealSection({ children, className = "", delay = 0 }: RevealSectionProps) {
  const { ref, isRevealed } = useReveal()

  const getDelayStyle = () => {
    return {
      transitionDelay: delay ? `${delay}ms` : "0ms",
    }
  }

  return (
    <section
      ref={ref as any}
      className={`${className} transition-all duration-1000 ease-out ${
        isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
      style={getDelayStyle()}
    >
      {children}
    </section>
  )
}
