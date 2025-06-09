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
  const getImagePosition = (memberName: string) => {
    switch (memberName) {
      case "Nick Kim":
        return "object-center object-[center_20%]" // Move image down 20%
      case "Richard Zhang PhD":
        return "object-center object-[center_15%]" // Move image down 15%
      case "David Lindelöf PhD":
        return "object-center object-[center_25%]" // Move image down 25%
      default:
        return "object-center"
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
          className={`w-full h-full ${getImagePosition(name)}`}
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
