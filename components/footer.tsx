"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsSuccess(true)
      setEmail("")
    } catch (err) {
      setError("Sorry, we were not able to submit the form.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-background border-t border-muted/30 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image src="/images/gargantua-logo.jpg" alt="Gargantua Group Logo" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold">GARGANTUA GROUP</h3>
            </div>
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
            <h3 className="text-xl font-bold mb-6">Let&apos;s stay in touch!</h3>
            {isSuccess ? (
              <div className="bg-primary/20 border border-primary/30 rounded-md p-4 text-foreground animate-fade-in">
                Thanks for signing up!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <div className="flex flex-col sm:flex-row">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      required
                      className="form-input rounded-t-md sm:rounded-r-none sm:rounded-l-md flex-grow focus:outline-none mb-2 sm:mb-0"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-white rounded-b-md sm:rounded-l-none sm:rounded-r-md px-4 py-3 font-semibold text-black hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <span className="animate-pulse">...</span>
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

        <div className="border-t border-muted/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/50 text-sm">
            &copy; {new Date().getFullYear()} Gargantua Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
