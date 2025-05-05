import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Transforming Data Into Business Intelligence",
  description:
    "Gargantua Group stands at the forefront of technology, specializing in strategy, data processing, machine learning, and generative AI services.",
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return <ClientPage />
}
