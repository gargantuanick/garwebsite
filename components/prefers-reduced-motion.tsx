"use client"

import { useEffect } from "react"

export default function PrefersReducedMotion() {
  useEffect(() => {
    // Check if the user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReducedMotion) {
      // Add a class to the document to disable animations
      document.documentElement.classList.add("disable-animations")
    }

    // Listen for changes to the prefers-reduced-motion media query
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add("disable-animations")
      } else {
        document.documentElement.classList.remove("disable-animations")
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  return null
}
