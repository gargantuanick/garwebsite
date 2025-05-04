"use client"

import type React from "react"
import { useRouter } from "next/navigation"

interface SectionLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export default function SectionLink({ href, children, className = "" }: SectionLinkProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    // Navigate to the page without scroll behavior
    router.push(href)

    // Extract the hash part
    const hashPart = href.includes("#") ? href.split("#")[1] : null

    if (hashPart) {
      // Wait for navigation to complete
      setTimeout(() => {
        const element = document.getElementById(hashPart)
        if (element) {
          // Calculate header height (assuming fixed header)
          const headerHeight = 80 // Adjust based on your header height

          // Get the element's position
          const elementPosition = element.getBoundingClientRect().top

          // Calculate the final position
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight

          // Scroll to the element
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }, 500) // Longer delay to ensure page is loaded
    }
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
