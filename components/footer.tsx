"use client"

import type React from "react"
import { useState } from "react"
import { ArrowRight } from "lucide-react"

// Helper function to encode form data
const encode = (data: Record<string, string>) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}


export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => { // <-- Ensure type is correct
    e.preventDefault()
    setIsSubmitting(true)
    setError("")
    setIsSuccess(false); // Reset success state on new submission

    // Get form data directly (including the hidden field)
    // Using FormData is simpler than managing individual state for encoding
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const formName = formData.get("form-name")?.toString() || ""; // Get form name

    if (!formName) {
        setError("Form name is missing. Cannot submit.");
        setIsSubmitting(false);
        return;
    }

    // Prepare data for Netlify (x-www-form-urlencoded)
    const payload = new URLSearchParams(formData as any).toString();


    try {
      // Submit to Netlify
      // Note: The fetch path is typically just "/", Netlify intercepts based on the form-name
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload,
      })

      if (!response.ok) {
        // If the server response is not OK, throw an error
        throw new Error(`Submission failed: ${response.status} ${response.statusText}`);
      }

      // If submission is successful
      setIsSuccess(true)
      setEmail("") // Clear the input field
      console.log("Form submitted successfully to Netlify!");

    } catch (err: any) {
      console.error("Form submission error:", err);
      setError("Sorry, we encountered an error submitting the form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-background border-t border-muted/30 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* ... (Gargantua Group section remains the same) ... */}
           <div>
            <h3 className="text-xl font-bold mb-6">GARGANTUA GROUP</h3>
            <p className="text-foreground/70 max-w-md">
              Drawing from elite technology talent across worldwide innovation hubs, we help transform businesses
              through cutting-edge data and AI solutions. Gargantua turns technological potential into measurable
              business growth.
            </p>
            <div className="mt-6">
              <p className="text-foreground/70">
                <a href="mailto:info@gargantua.llc" className="hover:text-primary transition-colors">
                  info@gargantua.llc
                </a>
              </p>
            </div>
          </div>


          <div>
            <h3 className="text-xl font-bold mb-6">Let's stay in touch!</h3>
            {isSuccess ? (
              <div className="bg-primary/20 border border-primary/30 rounded-md p-4 text-foreground animate-fade-in">
                Thanks for signing up! We'll be in touch.
              </div>
            ) : (
              // IMPORTANT: Add name attribute and the hidden input
              <form
                name="stay-in-touch" // Matches the name in _forms.html
                onSubmit={handleSubmit}
                method="POST" // Good practice, though fetch overrides it
                // NO data-netlify="true" here - it's handled by _forms.html and fetch
                className="space-y-4"
              >
                {/* Hidden input for Netlify */}
                <input type="hidden" name="form-name" value="stay-in-touch" />

                 {/* Optional: Honeypot field for spam protection (must match _forms.html) */}
                 {/* Make sure this field is visually hidden but present in the DOM */}
                <p className="hidden" aria-hidden="true">
                  <label>
                    Don’t fill this out if you’re human: <input name="bot-field" />
                  </label>
                </p>

                <div>
                  <div className="flex flex-col sm:flex-row">
                    <input
                      type="email"
                      name="email" // Crucial: Add the name attribute
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      required
                      className="form-input rounded-t-md sm:rounded-r-none sm:rounded-l-md flex-grow focus:outline-none mb-2 sm:mb-0"
                      aria-label="Email address" // Accessibility improvement
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-white rounded-b-md sm:rounded-l-none sm:rounded-r-md px-4 py-3 font-semibold text-black hover:bg-gray-100 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="animate-pulse">Sending...</span> // More informative text
                      ) : (
                        <ArrowRight size={20} className="text-black" />
                      )}
                    </button>
                  </div>
                  {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
                </div>
              </form>
            )}
          </div>
        </div>

        {/* ... (Copyright section remains the same) ... */}
        <div className="border-t border-muted/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/50 text-sm">
            © {new Date().getFullYear()} Gargantua Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}