"use client"

import type { ReactNode } from "react"

interface AnimatedItemProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-in-right" | "fade-in-left" | "scale-up" | "blur-in"
  delay: number
  isVisible: boolean
}

export default function AnimatedItem({
  children,
  className = "",
  animation = "fade-up",
  delay,
  isVisible,
}: AnimatedItemProps) {
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
      default:
        return "animate-fade-up"
    }
  }

  return (
    <div className={`${className} ${isVisible ? `${getAnimationClass()} animate-delay-${delay}` : "opacity-0"}`}>
      {children}
    </div>
  )
}
