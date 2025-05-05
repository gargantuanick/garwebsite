import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Map of old URLs to new URLs
const redirects: Record<string, string> = {
  // Add any specific redirects you need here
  // '/old-path': '/new-path',
  // '/old-service': '/services',
  // '/about': '/team',
}

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const { pathname } = url

  // Check if the path is in our redirects map
  if (pathname in redirects) {
    url.pathname = redirects[pathname]
    return NextResponse.redirect(url)
  }

  // Handle common URL patterns that might be causing 404s

  // Redirect /index.html to /
  if (pathname.endsWith("index.html")) {
    url.pathname = pathname.replace("index.html", "")
    return NextResponse.redirect(url)
  }

  // Redirect /index.php to /
  if (pathname.endsWith("index.php")) {
    url.pathname = pathname.replace("index.php", "")
    return NextResponse.redirect(url)
  }

  // Redirect uppercase paths to lowercase
  if (pathname !== pathname.toLowerCase()) {
    url.pathname = pathname.toLowerCase()
    return NextResponse.redirect(url)
  }

  // Remove trailing slashes except for the root
  if (pathname !== "/" && pathname.endsWith("/")) {
    url.pathname = pathname.slice(0, -1)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc)
    "/((?!_next/|_vercel/|api/|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
}
