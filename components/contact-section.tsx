"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSuccess(true)
      setFormData({ name: "", email: "", company: "", message: "" })
    } catch (err) {
      setError("Sorry, we were not able to submit the form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/contact-background.jpg" alt="City view" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Text */}
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              LET'S TALK ABOUT TRANSFORMING YOUR BUSINESS
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Our team of experts is ready to help you harness the power of data and AI to drive unprecedented growth.
            </p>
          </div>

          {/* Right side - Form */}
          <div>
            {isSuccess ? (
              <div className="bg-black/30 backdrop-blur-sm border border-gray-700 rounded-md p-8 text-center animate-fade-in">
                <h3 className="text-2xl font-bold mb-4">Thank you for reaching out!</h3>
                <p className="text-gray-300 mb-8">
                  We've received your message and will get back to you as soon as possible.
                </p>
                <button onClick={() => setIsSuccess(false)} className="btn-primary">
                  Send Another Message
                </button>
              </div>
            ) : (
              <div className="bg-black/30 backdrop-blur-sm border border-gray-700 rounded-md p-8">
                {error && (
                  <div className="bg-red-500/20 border border-red-500/30 rounded-md p-4 mb-6 text-foreground">
                    {error}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-gray-600 px-0 py-2 text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-gray-600 px-0 py-2 text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-gray-600 px-0 py-2 text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors"
                      placeholder="Company"
                    />
                  </div>
                  <div>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-gray-600 px-0 py-2 text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-white font-semibold py-4 rounded-md hover:bg-primary/90 transition-all duration-300 shadow-[0_0_15px_rgba(50,50,50,0.5)] hover:shadow-[0_0_25px_rgba(50,50,50,0.7)] relative overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                      <span className="absolute bottom-0 left-0 w-full h-1 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
