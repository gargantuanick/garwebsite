import Link from "next/link"
import Image from "next/image"

interface TeamMemberCardProps {
  name: string
  role: string
  shortBio: string
  slug: string
  imageSrc: string
}

export default function TeamMemberCard({ name, role, shortBio, slug, imageSrc }: TeamMemberCardProps) {
  // Define custom positioning for specific team members
  const getImageStyle = (memberName: string) => {
    switch (memberName) {
      case "Nick Kim":
        return { objectPosition: "center 40%" } // Increased from 35% to 40%
      case "Richard Zhang PhD":
        return { objectPosition: "center 75%" } // Increased from 60% to 75%
      case "David Lindelöf PhD":
        return { objectPosition: "center 35%" } // Added positioning for David
      default:
        return { objectPosition: "center center" }
    }
  }

  return (
    <div className="card h-full flex flex-col">
      <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-md">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          width={400}
          height={400}
          className="object-cover w-full h-full"
          style={getImageStyle(name)}
          priority
        />
      </div>
      <h3 className="heading-3 mb-1">{name}</h3>
      <p className="text-primary font-medium mb-4">{role}</p>
      <p className="text-foreground/70 mb-4">{shortBio}</p>
      <Link href={`/team/${slug}`} className="inline-flex items-center text-primary hover:underline mt-auto">
        Read More
      </Link>
    </div>
  )
}
