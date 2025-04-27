"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import RevealSection from "@/components/reveal-section" // Make sure this path is correct

// Helper function to encode form data for Netlify
const encode = (data: { [key: string]: string }) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    // Add the honeypot field to state if you handle it in handleChange, otherwise it's fine
    // 'bot-field': ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // Prevent default form submission
    setIsSubmitting(true)
    setError("")
    setIsSuccess(false) // Reset success state on new submission

    const form = e.target as HTMLFormElement
    const formName = form.getAttribute('name') // Get form name from the form element

    // Basic check for form name (should always be present if set correctly)
    if (!formName) {
      setError("Form name attribute is missing.")
      setIsSubmitting(false)
      return
    }

    // Prepare the payload for Netlify, including the 'form-name'
    // We spread formData, which might include 'bot-field' if handled in handleChange.
    // Netlify's honeypot logic works based on the input field itself,
    // so including it here isn't strictly necessary unless you add specific client checks.
    const payload = {
      'form-name': formName,
       ...formData,
    }

    // Optional: You could explicitly get the honeypot value from the form if needed
    // const honeypotData = new FormData(form);
    // if (honeypotData.get("bot-field")) {
    //   // Handle potential bot submission client-side if desired (e.g., show error, don't submit)
    //   setError("Bot detection triggered.");
    //   setIsSubmitting(false);
    //   return;
    // }

    try {
      // POST the encoded data to the static HTML file path in the public folder
      const response = await fetch("/_forms.html", { // Ensure this matches the file you created (e.g., /_forms.html)
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload), // Use the encode helper function
      })

      // Check if the submission was successful
      if (!response.ok) {
        // Try to get a more specific error message from Netlify if available
        let errorMessage = `Netlify submission failed: ${response.status} ${response.statusText}`
         try {
            // Netlify might return JSON errors for certain issues
            const errorBody = await response.json();
            errorMessage = errorBody.message || errorMessage;
         } catch (parseError) {
            // Ignore if the response body isn't JSON
         }
        throw new Error(errorMessage); // Throw an error to be caught below
      }

      // Submission successful
      setIsSuccess(true) // Show the success message
      setFormData({ name: "", email: "", company: "", message: "" }) // Clear the form fields

    } catch (err: any) {
      // Handle any errors during fetch or from the thrown error above
      console.error("Form submission error:", err)
      setError(err.message || "Sorry, we were not able to submit the form. Please try again.")
    } finally {
      // Always run this, whether try succeeded or failed
      setIsSubmitting(false) // Re-enable the submit button
    }
  } // End of handleSubmit function

  // Start of the component's returned JSX
  return (
    <div className="relative py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/contact-background.jpg" alt="City view" fill className="object-cover" priority /> {/* Consider adding priority if above the fold */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">

          {/* Left side - Text */}
          <RevealSection className="text-left">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
              LET'S TALK ABOUT TRANSFORMING YOUR BUSINESS
            </h2>
            <p className="mb-8 text-lg text-gray-300">
              Our team of experts is ready to help you harness the power of data and AI to drive unprecedented growth.
            </p>
          </RevealSection>

          {/* Right side - Form Container */}
          <RevealSection delay={200}>
            {isSuccess ? (
              // Success State
              <div className="rounded-md border border-gray-700 bg-black/30 p-8 text-center backdrop-blur-sm transition-all duration-500 translate-y-0 opacity-100">
                <h3 className="mb-4 text-2xl font-bold">Thank you for reaching out!</h3>
                <p className="mb-8 text-gray-300">
                  We've received your message and will get back to you as soon as possible.
                </p>
                <button onClick={() => setIsSuccess(false)} className="btn-primary"> {/* Ensure btn-primary styles exist */}
                  Send Another Message
                </button>
              </div>
            ) : (
              // Form State
              <div className="rounded-md border border-gray-700 bg-black/30 p-8 backdrop-blur-sm">
                {error && (
                  // Error Message Display
                  <div className="mb-6 rounded-md border border-red-500/30 bg-red-500/20 p-4 text-foreground"> {/* Ensure text-foreground is defined */}
                    {error}
                  </div>
                )}
                {/* The Actual Form */}
                <form
                  name="contact" // Name for Netlify (matches name in _forms.html)
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  noValidate // Prevent browser default validation if you rely solely on 'required' and JS checks
                >
                  {/* Honeypot Field (Hidden for users, meant for bots) */}
                  <p className="hidden" aria-hidden="true">
                    <label>
                      Don’t fill this out if you’re human:{' '}
                      <input name="bot-field" onChange={handleChange} tabIndex={-1} autoComplete="off"/>
                    </label>
                  </p>
                  {/* Required hidden input for Netlify when submitting via JS */}
                  <input type="hidden" name="form-name" value="contact" />

                  {/* Form Fields */}
                  <div>
                    <label htmlFor="name" className="sr-only">Name</label> {/* Added label for accessibility */}
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border-b border-gray-600 bg-transparent px-0 py-2 text-white placeholder-gray-400 transition-colors focus:border-primary focus:outline-none"
                      placeholder="Name"
                      autoComplete="name"
                    />
                  </div>
                  <div>
                     <label htmlFor="email" className="sr-only">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border-b border-gray-600 bg-transparent px-0 py-2 text-white placeholder-gray-400 transition-colors focus:border-primary focus:outline-none"
                      placeholder="Email"
                       autoComplete="email"
                    />
                  </div>
                  <div>
                     <label htmlFor="company" className="sr-only">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required // Kept required as per your original code
                      className="w-full border-b border-gray-600 bg-transparent px-0 py-2 text-white placeholder-gray-400 transition-colors focus:border-primary focus:outline-none"
                      placeholder="Company"
                      autoComplete="organization"
                    />
                  </div>
                  <div>
                     <label htmlFor="message" className="sr-only">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full resize-none border-b border-gray-600 bg-transparent px-0 py-2 text-white placeholder-gray-400 transition-colors focus:border-primary focus:outline-none"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="pt-6">
                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full overflow-hidden rounded-md bg-primary py-4 font-semibold text-white shadow-[0_0_15px_rgba(50,50,50,0.5)] transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_25px_rgba(50,50,50,0.7)] disabled:cursor-not-allowed disabled:opacity-70" // Added disabled styles
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg
                              className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            SUBMITTING...
                          </span>
                        ) : (
                          "CONTACT US"
                        )}
                      </span>
                      {/* Hover effect */}
                      <span className="absolute bottom-0 left-0 h-1 w-full scale-x-0 transform bg-white/20 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </button>
                  </div>
                </form> {/* End of form */}
              </div> // End of form state container
            )}
          </RevealSection> {/* End of right side */}
        </div> {/* End of grid */}
      </div> {/* End of container */}
    </div> // End of main wrapper div
  ) // End of return statement
} // End of ContactSection component