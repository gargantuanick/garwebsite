import Link from "next/link"
import Image from "next/image"
import Particles from "@/components/particles"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <Particles />
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage: "url('/images/cosmic-background.jpg')",
            backgroundBlendMode: "screen",
          }}
        />
        <div className="container-custom relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto animate-fade-in text-center sm:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              INNOVATION BEYOND OUR LINE OF SIGHT!
            </h1>
            <p className="text-lg md:text-xl font-light text-gray-300 max-w-3xl mb-8">
              Where technology accelerates human flourishing
            </p>
            <Link href="/services" className="btn-primary">
              VIEW SERVICES
            </Link>
          </div>
        </div>
      </div>

      {/* Transforming Data Into Intelligence Section */}
      <section className="py-20 bg-black">
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
      </section>

      {/* Harness The Power of Data and AI Section */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="uppercase text-sm font-medium text-gray-400 tracking-wider mb-3">ELEVATE YOUR INSIGHTS</div>
            <h2 className="text-3xl md:text-4xl font-bold">HARNESS THE POWER OF DATA AND AI</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card h-full flex flex-col">
              <div className="relative w-full aspect-video mb-6 overflow-hidden rounded-md">
                <Image
                  src="/images/services/data-mastery.jpg"
                  alt="Data Analytics"
                  width={500}
                  height={300}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase">INTELLIGENT DATA MASTERY</h3>
              <p className="text-gray-400 mb-4">Unlock actionable insights through advanced data analytics.</p>
              <Link
                href="/services#data-mastery"
                className="text-primary hover:underline inline-flex items-center mt-auto"
              >
                Learn more
              </Link>
            </div>

            <div className="card h-full flex flex-col">
              <div className="relative w-full aspect-video mb-6 overflow-hidden rounded-md">
                <Image
                  src="/images/services/cognitive-system.jpg"
                  alt="AI Systems"
                  width={500}
                  height={300}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase">COGNITIVE SYSTEM ENGINEERING</h3>
              <p className="text-gray-400 mb-4">
                Elevate your business with bespoke AI systems and machine learning solutions.
              </p>
              <Link
                href="/services#cognitive-systems"
                className="text-primary hover:underline inline-flex items-center mt-auto"
              >
                Learn more
              </Link>
            </div>

            <div className="card h-full flex flex-col">
              <div className="relative w-full aspect-video mb-6 overflow-hidden rounded-md">
                <Image
                  src="/images/services/ecosystem-architecture.jpg"
                  alt="Digital Ecosystem"
                  width={500}
                  height={300}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase">ECOSYSTEM ARCHITECTURE</h3>
              <p className="text-gray-400 mb-4">
                Build collaborative digital platforms that enhance user engagement and drive monetization programs.
              </p>
              <Link
                href="/services#ecosystem-architecture"
                className="text-primary hover:underline inline-flex items-center mt-auto"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </>
  )
}
