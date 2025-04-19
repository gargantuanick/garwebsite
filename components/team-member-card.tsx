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
  return (
    <div className="card h-full flex flex-col">
      <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-md">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          width={400}
          height={400}
          className="object-cover w-full h-full"
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
