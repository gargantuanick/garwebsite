import type React from "react"
interface SectionProps {
  title?: string
  subtitle?: string
  children: React.ReactNode
  className?: string
  id?: string
}

export default function Section({ title, subtitle, children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="container-custom">
        {(title || subtitle) && (
          <div className="text-center mb-16 max-w-3xl mx-auto">
            {title && <h2 className="heading-2 mb-4">{title}</h2>}
            {subtitle && <p className="subheading">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
