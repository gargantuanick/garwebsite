"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { Suspense } from "react"

// Separate component that uses useSearchParams
function ScrollHandlerInner() {
  const pathname = usePathname()

  useEffect(() => {
    // Function to handle scrolling to the target element
    const scrollToSection = () => {
      // Get the hash from the URL
      const hash = window.location.hash.substring(1) // Remove the # character

      if (!hash) return

      // Try to find the element
      const element = document.getElementById(hash)

      if (element) {
        // Add a slight delay to ensure the page is fully rendered
        setTimeout(() => {
          // Calculate header height (assuming fixed header)
          const headerHeight = 80 // Adjust this value based on your header height

          // Get the element's position relative to the viewport
          const elementPosition = element.getBoundingClientRect().top

          // Get the current scroll position
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight

          // Scroll to the element
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }, 300)
      }
    }

    // Call the function when the component mounts or when the URL changes
    scrollToSection()

    // Also add an event listener for the load event to ensure all resources are loaded
    window.addEventListener("load", scrollToSection)

    return () => {
      window.removeEventListener("load", scrollToSection)
    }
  }, [pathname])

  return null
}

// Main component with Suspense boundary
export default function ScrollHandler() {
  return (
    <Suspense fallback={null}>
      <ScrollHandlerInner />
    </Suspense>
  )
}
