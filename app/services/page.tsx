"use client"

import Link from "next/link"
import Image from "next/image"
import RevealSection from "@/components/reveal-section"
import { useEffect } from "react"

export default function ServicesPage() {
  // Use window.location directly instead of useSearchParams
  useEffect(() => {
    console.log("Services page loaded")
    console.log("Current hash:", window.location.hash)

    // Handle hash navigation
    const hash = window.location.hash.replace("#", "")
    if (hash) {
      const element = document.getElementById(hash)
      if (element) {
        setTimeout(() => {
          const headerHeight = 80
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }, 300)
      }
    }

    // Log all section IDs to verify they exist
    const sections = ["data-mastery", "cognitive-system", "ecosystem-architecture"]
    sections.forEach((id) => {
      const element = document.getElementById(id)
      console.log(`Section ${id} exists:`, !!element)
    })
  }, [])

  return (
    <>
      {/* Intelligent Data Mastery */}
      <div id="data-mastery" className="scroll-mt-20">
        <RevealSection className="min-h-screen flex items-center pt-20 pb-12 bg-black">
          <div className="container-custom">
            <div className="mb-8">
              <Link href="/" className="text-sm text-gray-400 hover:text-primary">
                Services
              </Link>
              <span className="text-gray-600 mx-2">{">"}</span>
              <span className="text-sm text-gray-400">Intelligent Data Mastery</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <Image
                  src="/images/services/data-mastery.jpg"
                  alt="Data Mastery Dashboard"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full"
                />
              </div>
              <div className="space-y-6">
                <h1 className="text-2xl font-bold text-primary uppercase">INTELLIGENT DATA MASTERY</h1>
                <p className="text-gray-300">
                  We transform messy, diverse datasets into raw data intelligence that drives business growth.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Data Refinement</h3>
                    <p className="text-gray-400">
                      Transform unstructured raw data into coherent, organized datasets for more optimized AI models,
                      preparing for deep analytical processes.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-1">Smart Categorization</h3>
                    <p className="text-gray-400">
                      Implement intelligent classification for swift, accessible data retrieval through categorization,
                      benchmarking, and relation.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-1">Adaptive Modeling</h3>
                    <p className="text-gray-400">
                      Develop sophisticated, domain-specific models to seamlessly integrate and productize real-time
                      inference.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>

      {/* Cognitive System Engineering */}
      <div id="cognitive-system" className="scroll-mt-20">
        <RevealSection className="min-h-screen flex items-center py-12 bg-black">
          <div className="container-custom">
            <div className="mb-8">
              <Link href="/" className="text-sm text-gray-400 hover:text-primary">
                Services
              </Link>
              <span className="text-gray-600 mx-2">{">"}</span>
              <span className="text-sm text-gray-400">Cognitive System Engineering</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <Image
                  src="/images/services/cognitive-system.jpg"
                  alt="Cognitive System Engineering"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full"
                />
              </div>
              <div className="space-y-6">
                <h1 className="text-2xl font-bold text-primary uppercase">COGNITIVE SYSTEM ENGINEERING</h1>
                <p className="text-gray-300">
                  We design and build AI systems with Cognitive System Engineering, a human-centered practice focusing
                  on understanding and implementing intelligent systems and interfaces.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Customized AI Systems</h3>
                    <p className="text-gray-400">
                      We develop systems tailored to your unique business needs, transforming raw data into insightful
                      knowledge. Our custom AI solutions are designed with your users in mind, ensuring an optimized and
                      intuitive experience.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-1">Intelligent Interfaces</h3>
                    <p className="text-gray-400">
                      Our team specializes in creating seamless, user-friendly interfaces that leverage cutting-edge
                      technology to drive efficient and effective innovation within your organization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>

      {/* Ecosystem Architecture */}
      <div id="ecosystem-architecture" className="scroll-mt-20">
        <RevealSection className="min-h-screen flex items-center py-12 bg-black">
          <div className="container-custom">
            <div className="mb-8">
              <Link href="/" className="text-sm text-gray-400 hover:text-primary">
                Services
              </Link>
              <span className="text-gray-600 mx-2">{">"}</span>
              <span className="text-sm text-gray-400">Ecosystem Architecture</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <Image
                  src="/images/services/digital-ecosystem.jpg"
                  alt="Ecosystem Architecture"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full"
                />
              </div>
              <div className="space-y-6">
                <h1 className="text-2xl font-bold text-primary uppercase">ECOSYSTEM ARCHITECTURE</h1>
                <p className="text-gray-300">
                  Create the next level of digital ecosystem with Ecosystem Architecture, a holistic approach to
                  building robust, scalable platforms that connect users, data, and foster collaboration among peers.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Platform Development</h3>
                    <p className="text-gray-400">
                      Our approach leverages leading-edge platform architecture to create seamless digital experiences
                      that enhance your product growth. By creating a seamless experience for your end users, we ensure
                      that your platform not only meets but exceeds expectations, driving engagement and positioning
                      your business to thrive in a competitive landscape.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </>
  )
}
