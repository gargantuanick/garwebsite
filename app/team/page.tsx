import Section from "@/components/section"
import TeamMemberCard from "@/components/team-member-card"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet our team of industry leaders and innovators at Gargantua Group, experts in data analytics, AI, and technology consulting.",
  alternates: {
    canonical: "/team",
  },
}

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Nick Kim",
      role: "CEO",
      shortBio:
        "Former Google & YouTube leader Nick Kim brings 20 years of experience building transformative platforms to Gargantua, where he helps organizations harness the power of data and AI to drive global impact.",
      slug: "nick-kim",
      imageSrc: "/images/team/nick-kim.jpg",
    },
    {
      name: "Edward Jones",
      role: "CTO",
      shortBio:
        "Edward Jones brings 20 years of software engineering expertise from Google and Lockheed Martin to help organizations navigate technical transformation with integrity and excellence.",
      slug: "edward-jones",
      imageSrc: "/images/team/edward-jones.jpg",
    },
    {
      name: "Joanna Ng",
      role: "Chief AI Officer",
      shortBio:
        "Former IBM Master Inventor and Research Director Joanna Ng, with 50 patents and extensive AI expertise, now leads AI advancement as Chief AI Officer at Gargantua Group.",
      slug: "joanna-ng",
      imageSrc: "/images/team/joanna-ng.jpg",
    },
    {
      name: "Jonathan Rajan",
      role: "AI Software Engineer",
      shortBio:
        "Mathematical prodigy turned Google engineer Jonathan combines deep AI expertise with practical engineering skills to build innovative ML and LLM solutions at Gargantua Group.",
      slug: "jonathan-rajan",
      imageSrc: "/images/team/jonathan-rajan.jpg",
    },
    {
      name: "Richard Zhang PhD",
      role: "AI Research Scientist",
      shortBio:
        "Research scientist at Google DeepMind and OSS Vizier co-creator, bringing expertise in hyperparameter optimization and theoretical machine learning to enterprise applications.",
      slug: "richard-zhang",
      imageSrc: "/images/team/richard-zhang.jpg",
    },
    {
      name: "David Lindelöf PhD",
      role: "Lead Data Scientist",
      shortBio:
        "Lead data scientist at YouTube specializing in recommendation systems and causal inference, having previously led data science at Expedia and served as CTO at Neurobat AG where his algorithmic controllers achieved 28% energy savings.",
      slug: "david-lindelof",
      imageSrc: "/images/team/david-lindelof.jpg",
    },
  ]

  return (
    <>
      <Section
        title="Expert Technologists at Gargantua Group"
        subtitle="Meet our team of industry leaders and innovators"
        className="pt-32"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.name}
              name={member.name}
              role={member.role}
              shortBio={member.shortBio}
              slug={member.slug}
              imageSrc={member.imageSrc}
            />
          ))}
        </div>
      </Section>

      <Section className="bg-muted/10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="heading-2 mb-6">Let's revolutionize your data strategy</h2>
          <p className="text-foreground/70 mb-8">
            Our team of experts is ready to help you transform your business with cutting-edge technology and
            data-driven insights.
          </p>
          <Link href="/contact" className="btn-primary">
            Connect with us
          </Link>
        </div>
      </Section>
    </>
  )
}
