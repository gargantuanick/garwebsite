"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"

export default function ContactPage() {
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
      setError("Sorry, we were not able to submit the form. Please review the errors and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative min-h-screen flex items-center pt-20 pb-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/contact-background.jpg" alt="Contact background" fill className="object-cover opacity-50" />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-2 uppercase">CONTACT US</h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">LET'S TALK ABOUT TRANSFORMING YOUR BUSINESS</h1>
          </div>

          {isSuccess ? (
            <div className="bg-black/80 backdrop-blur-sm rounded-lg p-8 text-center animate-fade-in">
              <h3 className="text-2xl font-bold mb-4">Thank you for reaching out!</h3>
              <p className="text-gray-300 mb-8">
                We've received your message and will get back to you as soon as possible.
              </p>
              <button onClick={() => setIsSuccess(false)} className="btn-primary">
                Send Another Message
              </button>
            </div>
          ) : (
            <div className="bg-black/80 backdrop-blur-sm rounded-lg p-8">
              {error && (
                <div className="bg-red-500/20 border border-red-500/30 rounded-md p-4 mb-6 text-foreground">
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input focus:outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-input focus:outline-none"
                    placeholder="Your company name (optional)"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-input resize-none focus:outline-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <div>
                  <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
                    {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
