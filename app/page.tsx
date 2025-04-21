"use client"

import Link from "next/link"
import Image from "next/image"
import Particles from "@/components/particles"
import ContactSection from "@/components/contact-section"
import RevealSection from "@/components/reveal-section"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <Particles />
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage: "url('/images/cosmic-background.jpg')",
            backgroundBlendMode: "screen",
          }}
        />
        <div className="container-custom relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center sm:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              INNOVATION BEYOND OUR LINE OF SIGHT
            </h1>
            <p className="text-lg md:text-xl font-light text-gray-300 max-w-3xl mb-8">
              Where technology accelerates human flourishing
            </p>
            <Link
              href="/services"
              className="bg-white text-black font-semibold py-4 px-8 text-lg border border-black rounded-md hover:bg-gray-100 transition-all duration-300"
            >
              VIEW SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* Transforming Data Into Intelligence Section */}
      <RevealSection className="py-20 bg-black">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="uppercase text-sm font-medium text-gray-400 tracking-wider mb-3">
                TECHNOLOGY INNOVATION
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">TRANSFORMING DATA INTO INTELLIGENCE</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Gargantua Group stands at the forefront of technology, specializing in strategy, data processing,
                  machine learning, and generative AI services.
                </p>
                <p>
                  We excel in converting raw, messy data into structured datasets that empower advanced analytics and AI
                  systems. Our offerings include Intelligent Data Mastery, where we unveil actionable insights;
                  Cognitive System Engineering, providing bespoke AI tools; and Ecosystem Architecture, designing
                  platforms that enhance engagement and revenue. Partner with us to revolutionize your business and
                  achieve unprecedented growth.
                </p>
              </div>
              <Link href="/contact" className="btn-secondary mt-8 inline-flex">
                GET IN TOUCH
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/data-intelligence.jpg"
                  alt="Data Intelligence Visualization"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Harness The Power of Data and AI Section */}
      <RevealSection className="py-20 bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="uppercase text-sm font-medium text-gray-400 tracking-wider mb-3">ELEVATE YOUR INSIGHTS</div>
            <h2 className="text-3xl md:text-4xl font-bold">HARNESS THE POWER OF DATA AND AI</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Data Mastery Card */}
            <RevealSection className="group relative" delay={100}>
              <Link
                href="/services#data-mastery"
                className="absolute inset-0 z-10"
                aria-label="Learn more about Intelligent Data Mastery"
              >
                <span className="sr-only">Learn more about Intelligent Data Mastery</span>
              </Link>
              <div className="card h-full flex flex-col group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(0,178,255,0.2)] transition-all duration-300 relative">
                <div className="relative w-full aspect-video mb-6 overflow-hidden rounded-md">
                  <Image
                    src="/images/services/data-mastery.jpg"
                    alt="Data Analytics"
                    width={500}
                    height={300}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase group-hover:text-primary transition-colors">
                  INTELLIGENT DATA MASTERY
                </h3>
                <p className="text-gray-400 mb-4">Unlock actionable insights through advanced data analytics.</p>
                <Link
                  href="/services#data-mastery"
                  className="text-primary hover:underline inline-flex items-center mt-auto relative z-20"
                  onClick={(e) => e.stopPropagation()}
                >
                  Learn more
                </Link>
              </div>
            </RevealSection>

            {/* Cognitive System Card */}
            <RevealSection className="group relative" delay={200}>
              <Link
                href="/services#cognitive-systems"
                className="absolute inset-0 z-10"
                aria-label="Learn more about Cognitive System Engineering"
              >
                <span className="sr-only">Learn more about Cognitive System Engineering</span>
              </Link>
              <div className="card h-full flex flex-col group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(0,178,255,0.2)] transition-all duration-300 relative">
                <div className="relative w-full aspect-video mb-6 overflow-hidden rounded-md">
                  <Image
                    src="/images/services/cognitive-system.jpg"
                    alt="AI Systems"
                    width={500}
                    height={300}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase group-hover:text-primary transition-colors">
                  COGNITIVE SYSTEM ENGINEERING
                </h3>
                <p className="text-gray-400 mb-4">
                  Elevate your business with bespoke AI systems and machine learning solutions.
                </p>
                <Link
                  href="/services#cognitive-systems"
                  className="text-primary hover:underline inline-flex items-center mt-auto relative z-20"
                  onClick={(e) => e.stopPropagation()}
                >
                  Learn more
                </Link>
              </div>
            </RevealSection>

            {/* Ecosystem Architecture Card */}
            <RevealSection className="group relative" delay={300}>
              <Link
                href="/services#ecosystem-architecture"
                className="absolute inset-0 z-10"
                aria-label="Learn more about Ecosystem Architecture"
              >
                <span className="sr-only">Learn more about Ecosystem Architecture</span>
              </Link>
              <div className="card h-full flex flex-col group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(0,178,255,0.2)] transition-all duration-300 relative">
                <div className="relative w-full aspect-video mb-6 overflow-hidden rounded-md">
                  <Image
                    src="/images/services/digital-ecosystem.jpg"
                    alt="Digital Ecosystem"
                    width={500}
                    height={300}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase group-hover:text-primary transition-colors">
                  ECOSYSTEM ARCHITECTURE
                </h3>
                <p className="text-gray-400 mb-4">
                  Build collaborative digital platforms that enhance user engagement and drive monetization programs.
                </p>
                <Link
                  href="/services#ecosystem-architecture"
                  className="text-primary hover:underline inline-flex items-center mt-auto relative z-20"
                  onClick={(e) => e.stopPropagation()}
                >
                  Learn more
                </Link>
              </div>
            </RevealSection>
          </div>
        </div>
      </RevealSection>

      {/* Contact Section */}
      <RevealSection className="py-0">
        <ContactSection />
      </RevealSection>
    </>
  )
}
