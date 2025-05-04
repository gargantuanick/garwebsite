export function scrollToElement(elementId: string): void {
  // Small delay to ensure the DOM is fully loaded
  setTimeout(() => {
    const element = document.getElementById(elementId)
    if (element) {
      // Scroll to the element with smooth behavior
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }, 100)
}
