import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollHandler from "@/components/scroll-handler"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    template: "%s | Gargantua Group",
    default: "Gargantua Group | Transforming Data Into Business Intelligence",
  },
  description:
    "Gargantua Group stands at the forefront of technology, specializing in strategy, data processing, machine learning, and generative AI services.",
  keywords: [
    "data analytics",
    "AI consulting",
    "machine learning",
    "technology consulting",
    "data intelligence",
    "cognitive systems",
  ],
  authors: [{ name: "Gargantua Group" }],
  creator: "Gargantua Group",
  publisher: "Gargantua Group",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL("https://gargantua.llc"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gargantua Group | Transforming Data Into Business Intelligence",
    description:
      "Gargantua Group stands at the forefront of technology, specializing in strategy, data processing, machine learning, and generative AI services.",
    url: "https://gargantua.llc",
    siteName: "Gargantua Group",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gargantua Group | Transforming Data Into Business Intelligence",
    description:
      "Gargantua Group stands at the forefront of technology, specializing in strategy, data processing, machine learning, and generative AI services.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-background text-foreground min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ScrollHandler />
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
