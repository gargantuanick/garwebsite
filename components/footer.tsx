"use client"

import type React from "react"
import { useState } from "react"
import { ArrowRight } from "lucide-react"

// Helper function to encode (can be reused or defined locally if needed)
// const encode = (data: Record<string, string>) => {
//   return Object.keys(data)
//     .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&");
// }

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")
    setIsSuccess(false);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // You can optionally log formData entries to debug in the browser console
    // for (let [key, value] of formData.entries()) {
    //   console.log(`${key}: ${value}`);
    // }
    // Ensure 'form-name' is present
    if (!formData.get('form-name')) {
        setError("Developer error: form-name hidden field is missing.");
        setIsSubmitting(false);
        console.error("Form submission failed: Missing 'form-name' in FormData.");
        return;
    }


    // Prepare data for Netlify (x-www-form-urlencoded)
    // URLSearchParams constructor directly accepts FormData
    const payload = new URLSearchParams(formData as any).toString();
    // console.log("Submitting payload:", payload); // Log the exact payload being sent

    try {
      // Submit to the static HTML file path, like the working example
      const response = await fetch("/_forms.html", { // <--- Changed from "/"
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload,
      })

      if (!response.ok) {
        // Try to get more info from the response if possible
        let errorDetails = `${response.status} ${response.statusText}`;
        try {
            const text = await response.text(); // Get response body as text
            errorDetails += ` - ${text}`;
        } catch (e) {
            // Ignore if can't read body
        }
        throw new Error(`Submission failed: ${errorDetails}`);
      }

      // If submission is successful
      setIsSuccess(true)
      setEmail("") // Clear the input field
      console.log("Footer form submitted successfully to Netlify!");

    } catch (err: any) {
      console.error("Footer form submission error:", err);
      // Provide a more user-friendly message, but log the details
      setError("Sorry, we encountered an error submitting the form. Please check the console for details or try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-background border-t border-muted/30 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* ... Gargantua Group section ... */}
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
              <form
                name="stay-in-touch" // Matches the name in _forms.html
                onSubmit={handleSubmit}
                method="POST" // Good practice, fetch overrides
                className="space-y-4"
                noValidate // Optional: disable browser validation if relying on 'required' / JS
              >
                {/* Hidden input for Netlify Form Name */}
                <input type="hidden" name="form-name" value="stay-in-touch" />

                 {/* Honeypot Field (MUST match the field name in _forms.html if you use netlify-honeypot) */}
                <p className="hidden" aria-hidden="true">
                  <label>
                    Don’t fill this out if you’re human:{' '}
                    <input
                        name="bot-field" // Ensure this name matches _forms.html if honeypot is enabled there
                        tabIndex={-1}
                        autoComplete="off"
                        onChange={(e) => { /* Can add a handler if needed, but often just needs to exist */ }}
                    />
                  </label>
                </p>

                <div>
                  <div className="flex flex-col sm:flex-row">
                    <input
                      type="email"
                      name="email" // Crucial: Must match the name in _forms.html
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      required
                      className="form-input rounded-t-md sm:rounded-r-none sm:rounded-l-md flex-grow focus:outline-none mb-2 sm:mb-0"
                      aria-label="Email address"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-white rounded-b-md sm:rounded-l-none sm:rounded-r-md px-4 py-3 font-semibold text-black hover:bg-gray-100 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="animate-pulse">Sending...</span>
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

        {/* ... Copyright section ... */}
         <div className="border-t border-muted/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/50 text-sm">
            © {new Date().getFullYear()} Gargantua Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}