import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const token = request.cookies.get("ainrion_auth_token")?.value
  const path = request.nextUrl.pathname

  console.log("[Middleware] Path:", path)
  console.log("[Middleware] Token found:", !!token)

  // If on login page and has token, redirect to dashboard
  if (path === "/admin/login" && token) {
    console.log("[Middleware] Already logged in, redirecting to dashboard")
    return NextResponse.redirect(new URL("/admin", request.url))
  }

  // Allow login page without token
  if (path === "/admin/login") {
    return NextResponse.next()
  }

  // Check if route requires authentication (admin routes)
  if (path.startsWith("/admin")) {
    // Simply check if token exists - verification happens client-side
    if (!token) {
      console.log("[Middleware] No token, redirecting to login")
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }

    console.log("[Middleware] Token exists, allowing access to:", path)
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
