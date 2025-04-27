import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

// Team member data
const teamMembers = [
  {
    slug: "nick-kim",
    name: "Nick Kim",
    role: "CEO",
    bio: "Nick Kim is a veteran technologist and digital transformation leader with 20 years of experience driving the monetization and scale of industry-defining platforms. Having spearheaded large-scale engineering initiatives at tech giants like Google & YouTube, Nick has delivered innovations that redefine industries.\n\nHis track record includes orchestrating the global expansion of YouTube's Music and Premium business to over 30 countries, pioneering YouTube TV's third-party integration platform to forge strategic partnerships with mobile data carriers worldwide, and launching YouTube Shopping – unlocking new revenue streams.\n\nIn 2023, Nick founded Gargantua, a cutting-edge technology firm that empowers organizations that drive global human flourishing. Drawing on his background in software engineering, strategy consulting, and machine learning, Nick launched Gargantua to tackle a common challenge: making sense of complex data. The business specializes in transforming raw, messy information into structured, clean datasets that power analytics and AI systems.\n\nNick's technology journey began with a bachelor's degree in mechanical engineering from UC Berkeley which ignited his passion for innovation. He then established his first consulting and investment firm, specializing in financial technologies for institutional money managers. Nick has developed a deep expertise in machine learning and recognized its profound impact on the technological landscape and society at large.",
    imageSrc: "/images/team/nick-kim.jpg",
  },
  {
    slug: "edward-jones",
    name: "Edward Jones",
    role: "CTO",
    bio: "With over 20 years of experience in the tech industry, Edward Jones is a seasoned expert in software engineering and technology solutions. Edward has led significant projects at Google for +10 years, including the development of automated capabilities for Google Apps Script and the Google Apps Script Execution API. His deep technical knowledge, combined with a practical, results-driven approach, has delivered innovative solutions that drive transformation.\n\nBefore his tenure at Google, Edward held a leadership position at Lockheed Martin Advanced Technology Laboratories. There, he spearheaded research initiatives in domain-specific modeling, working collaboratively with universities and industry experts. His contributions have led to groundbreaking advancements, published research papers, and patented technologies.\n\nEdward is also passionate about mentorship and bridging the gap between faith and technology. He has a long history of mentoring interns and professionals, as well as initiating a Christian mentoring program among Google engineers. This unique blend of technical expertise, leadership, and commitment to ethical values allows Edward to offer clients comprehensive consulting services that not only address their technical needs but also align with their core values.Edward's mission is to empower organizations to leverage cutting-edge technology to achieve their goals while maintaining integrity and excellence. He is dedicated to helping clients navigate the complexities of the tech landscape, ensuring they are well-prepared to succeed in an ever-evolving industry.",
    imageSrc: "/images/team/edward-jones.jpg",
  },
  {
    slug: "joanna-ng",
    name: "Joanna Ng",
    role: "Chief AI Officer",
    bio: "Joanna Ng is an inventor and a technologist whose work has been informed by and integrated with her faith. A former IBMer, she has 50 patents granted to her name, attained the accreditation of an IBM Master Inventor, was on two IBM patent review boards, providing patent education and mentored aspiring inventors. In addition, she has published +20 peer-reviewed academic papers, held a seven-year tenure as the Head of Research, Director of Centre for Advanced Studies, IBM Canada. Joanna started Devarim Design for the advancement of AI, focused on applying AI in augmented intelligence and partners closely with Gargantua Group as their Chief AI Officer.",
    imageSrc: "/images/team/joanna-ng.jpg",
  },
  {
    slug: "jonathan-rajan",
    name: "Jonathan Rajan",
    role: "AI Software Engineer",
    bio: "Jonathan is a highly skilled AI software engineer with a proven track record of developing innovative solutions. As one of the youngest engineers to join Google in London, he contributed significantly to large-scale internal production service management tools, incorporating machine learning for incident triaging and leveraging Large Language Models to improve productivity for tool usage. His exceptional mathematical background, evidenced by high rankings in national competitions, underpins his analytical approach to AI development.\n\nAt Gargantua Group, Jonathan demonstrated his ability to build complex AI systems from the ground up, developing an ML-enabled content ingestion pipeline and creating a sophisticated LLM-powered Christian chatbot. Driven by a passion for translating cutting-edge AI research into practical applications, Jonathan pushes the boundaries of what's possible in artificial intelligence. His blend of technical expertise, innovative thinking, and hands-on experience makes him a valuable asset for organizations seeking to harness the power of AI in transformative ways.",
    imageSrc: "/images/team/jonathan-rajan.jpg",
  },
  {
    slug: "richard-zhang",
    name: "Richard Zhang PhD",
    role: "AI Research Scientist",
    bio: "Dr Richard Zhang is a distinguished research scientist at Google DeepMind and a principal technical consultant for Gargantua Group, where he leads the development of cutting edge machine learning optimization frameworks.\n\nAt Gargantua Group, he consults on enterprise-scale AI systems with a focus on hyperparameter tuning and neural architecture search, bringing theoretical advances to production environments.\n\nIn his role at DeepMind, he serves on the Vizier team as a co-creator of OSS Vizier, specializing in Bayesian calibration and theoretical machine learning.\n\nRichard earned his Ph.D. in Applied Mathematics and Computer Science from UC Berkeley, after completing his undergraduate studies at Princeton University. His research has been featured at prestigious venues including NeurIPS, ICML, and ICLR, with particular recognition for his work in hyperparameter optimization and AI fairness. His collaborative efforts with Gargantua Group have been instrumental in bridging the gap between theoretical machine learning advances and practical enterprise applications.\n\n",
    imageSrc: "/images/team/richard-zhang.jpg",
  },
  {
    slug: "david-lindelof",
    name: "David Lindelöf PhD",
    role: "Lead Data Scientist",
    bio: "Dr David Lindelöf is a lead data scientist at YouTube and principal technical consultant to Gargantua Group, where he architected their state-of-the-art recommendation engine. His expertise spans machine learning, causal inference, and large-scale recommendation systems deployment.\n\nAt YouTube, he leads data science initiatives for the creator facing systems, focusing on metrics definition and experiment design and analysis. Previously, as a director of data science at Expedia, he innovated hotel recommendation systems and established robust machine learning pipelines using PySpark and AWS. His work in distributed causal inference resulted in five successful promotion recommender systems.\n\nAs a former CTO at Neurobat AG, he led a research team in developing algorithmically driven smart controllers for space heating, achieving documented energy savings of 28%. A passionate advocate for best practices in machine learning, he combines technical expertise with strong leadership skills, having mentored numerous data scientists and engineered processes that significantly reduce time-to-market for ML applications.",
    imageSrc: "/images/team/david-lindelof.jpg",
  },
]

export default function TeamMemberPage({ params }: { params: { slug: string } }) {
  const teamMember = teamMembers.find((member) => member.slug === params.slug)

  if (!teamMember) {
    notFound()
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        <Link href="/team" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft size={16} className="mr-2" /> Back to Team
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <div className="relative aspect-square rounded-lg overflow-hidden mb-6">
              <Image
                src={teamMember.imageSrc || "/placeholder.svg"}
                alt={teamMember.name}
                width={600}
                height={600}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <h1 className="heading-2 mb-2">{teamMember.name}</h1>
            <p className="text-primary font-medium mb-4">{teamMember.role}</p>
          </div>

          <div className="md:col-span-2">
            <div className="prose prose-invert max-w-none">
              {teamMember.bio.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-6 text-foreground/80 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
