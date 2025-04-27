"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import RevealSection from "@/components/reveal-section"

// Helper function to encode form data for Netlify (remains the same)
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
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    // Special handling for honeypot field if needed, but usually just let it submit
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")
    setIsSuccess(false);

    const form = e.target as HTMLFormElement;
    const formName = form.getAttribute('name'); // Get form name dynamically

    if (!formName) {
      setError("Form name attribute is missing.");
      setIsSubmitting(false);
      return;
    }

    // Prepare payload including the 'form-name'
    // Exclude the bot-field from the state data sent if you prefer,
    // but Netlify handles it based on the data-netlify-honeypot attribute anyway.
    const payload = {
      'form-name': formName,
       ...formData,
    }
     // Get honeypot value directly from the form if you want to check it client-side (optional)
    // const honeypotValue = new FormData(form).get("bot-field");
    // if (honeypotValue) { /* handle bot */ return; }


    try {
      // --- CHANGE THE FETCH URL ---
      const response = await fetch("/_forms.html", { // <<< CHANGE IS HERE
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload),
      })

      if (!response.ok) {
        let errorMessage = `Netlify submission failed: ${response.status} ${response.statusText}`;
         try { const errorBody = await response.json(); errorMessage = errorBody.message || errorMessage; } catch (parseError) { /* ignore */ }
        throw new Error(errorMessage);
      }

      setIsSuccess(true)
      setFormData({ name: "", email: "", company: "", message: "" }) // Clear form

    } catch (err: any) {
      console.error("Form submission error:", err)
      setError(err.message || "Sorry, we were not able to submit the form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative py-20">
      {/* ... (Background Image and other elements remain the same) ... */}
       <div className="absolute inset-0 z-0">
         <Image src="/images/contact-background.jpg" alt="City view" fill className="object-cover" />
         <div className="absolute inset-0 bg-black/50"></div>
       </div>

       <div className="container-custom relative z-10">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
           {/* Left side - Text */}
           <RevealSection className="text-left">
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
               LET'S TALK ABOUT TRANSFORMING YOUR BUSINESS
             </h2>
             <p className="text-lg text-gray-300 mb-8">
               Our team of experts is ready to help you harness the power of data and AI to drive unprecedented growth.
             </p>
           </RevealSection>

           {/* Right side - Form */}
           <RevealSection delay={200}>
             {isSuccess ? (
                {/* ... (Success message remains the same) ... */}
                <div className="bg-black/30 backdrop-blur-sm border border-gray-700 rounded-md p-8 text-center transition-all duration-500 opacity-100 translate-y-0">
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
                    {/* ... (Error message remains the same) ... */}
                    <div className="bg-red-500/20 border border-red-500/30 rounded-md p-4 mb-6 text-foreground">
                     {error}
                   </div>
                 )}
                 {/* --- MODIFIED FORM TAG: Removed data-netlify attributes --- */}
                 <form
                   name="contact" // Keep name
                   method="POST"
                   // data-netlify="true" REMOVED
                   // data-netlify-honeypot="bot-field" REMOVED
                   onSubmit={handleSubmit}
                   className="space-y-5"
                 >
                   {/* --- HONEYPOT FIELD (Hidden but functional) --- */}
                   <p className="hidden">
                     <label>
                       Don’t fill this out if you’re human: <input name="bot-field" onChange={handleChange} />
                     </label>
                   </p>
                   {/* Required hidden input for Netlify JS submissions */}
                   <input type="hidden" name="form-name" value="contact" />

                   {/* --- Your Form Fields (No changes needed here) --- */}
                   <div>
                     <input
                       type="text"
                       id="name"
                       name="name"
                       value={formData.name}
                       onChange={handleChange}
                       required
                       // ... rest of attributes
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
                       // ... rest of attributes
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
                       // ... rest of attributes
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
                       // ... rest of attributes
                       className="w-full bg-transparent border-b border-gray-600 px-0 py-2 text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors resize-none"
                       placeholder="Message"
                     ></textarea>
                   </div>
                   <div className="pt-6">
                      {/* --- Submit Button (No changes needed here) --- */}
                     <button
                       type="submit"
                       disabled={isSubmitting}
                       // ... rest of attributes
                        className="w-full bg-primary text-white font-semibold py-4 rounded-md hover:bg-primary/90 transition-all duration-300 shadow-[0_0_15px_rgba(50,50,50,0.5)] hover:shadow-[0_0_25px_rgba(50,50,50,0.7)] relative overflow-hidden group"
                     >
                        {/* ... (Button content remains the same) ... */}
                        <span className="relative z-10 flex items-center justify-center">
                         {isSubmitting ? ( <span className="flex items-center"><svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>SUBMITTING...</span> ) : ( "CONTACT US" )}
                         </span>
                         <span className="absolute bottom-0 left-0 w-full h-1 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                     </button>
                   </div>
                 </form>
               </div>
             )}
           </RevealSection>
         </div>
       </div>
    </div>
  )
}