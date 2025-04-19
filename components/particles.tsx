"use client"

import { useEffect, useRef } from "react"

interface ParticleProps {
  color?: string
  quantity?: number
  speed?: number
}

export default function Particles({ color = "rgba(0, 178, 255, 0.2)", quantity = 50, speed = 1 }: ParticleProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const containerWidth = container.offsetWidth
    const containerHeight = container.offsetHeight

    // Clear any existing particles
    container.innerHTML = ""

    // Create particles
    for (let i = 0; i < quantity; i++) {
      const size = Math.random() * 5 + 1
      const x = Math.random() * containerWidth
      const y = Math.random() * containerHeight
      const duration = (Math.random() * 20 + 10) / speed
      const delay = Math.random() * 5

      const particle = document.createElement("div")
      particle.classList.add("particle")
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.left = `${x}px`
      particle.style.top = `${y}px`
      particle.style.backgroundColor = color
      particle.style.opacity = (Math.random() * 0.5 + 0.1).toString()
      particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`

      container.appendChild(particle)
    }

    return () => {
      container.innerHTML = ""
    }
  }, [color, quantity, speed])

  return <div ref={containerRef} className="particles" />
}
