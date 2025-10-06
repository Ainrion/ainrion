import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import { prisma } from "@/lib/prisma"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-in-production"

export enum Role {
  ADMIN = "ADMIN",
  CONTENT_WRITER = "CONTENT_WRITER",
  HR = "HR",
}

export interface JWTPayload {
  userId: string
  email: string
  role: Role
}

// Hash password
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10)
}

// Verify password
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

// Generate JWT token
export function generateAuthToken(payload: JWTPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" })
}

// Verify JWT token
export function verifyAuthToken(token: string): JWTPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as JWTPayload
  } catch (error) {
    console.error("Token verification error:", error)
    return null
  }
}

// Get token from cookie
function getTokenFromCookie(): string | null {
  if (typeof document === "undefined") return null
  const cookies = document.cookie.split(";")
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split("=")
    if (name === "ainrion_auth_token") {
      return value
    }
  }
  return null
}

// Client-side auth check (simplified - just check token exists)
export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false
  // Check both cookie and localStorage
  const token = getTokenFromCookie() || localStorage.getItem("ainrion_auth_token")
  // Just check if token exists (verification happens server-side)
  return !!token
}

// Client-side get user from token (decode without verification for display purposes)
export function getUserFromToken(): JWTPayload | null {
  if (typeof window === "undefined") return null
  const token = getTokenFromCookie() || localStorage.getItem("ainrion_auth_token")
  if (!token) return null

  try {
    // Simple decode without verification (for client-side display only)
    const base64Url = token.split('.')[1]
    if (!base64Url) return null
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    )
    return JSON.parse(jsonPayload) as JWTPayload
  } catch (error) {
    console.error("Token decode error:", error)
    return null
  }
}

// Client-side login
export function setAuthToken(token: string): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("ainrion_auth_token", token)
  }
}

// Client-side logout
export function clearAuthToken(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem("ainrion_auth_token")
    // Also clear the cookie
    document.cookie = "ainrion_auth_token=; path=/; max-age=0"
  }
}

// Check if user has required role
export function hasRole(userRole: Role, requiredRoles: Role[]): boolean {
  return requiredRoles.includes(userRole)
}

// Check if user is admin
export function isAdmin(role: Role): boolean {
  return role === Role.ADMIN
}

// Permission matrix for different operations
export const permissions = {
  blog: {
    create: [Role.ADMIN, Role.CONTENT_WRITER],
    edit: [Role.ADMIN, Role.CONTENT_WRITER],
    delete: [Role.ADMIN],
    view: [Role.ADMIN, Role.CONTENT_WRITER, Role.HR],
  },
  careers: {
    create: [Role.ADMIN, Role.HR],
    edit: [Role.ADMIN, Role.HR],
    delete: [Role.ADMIN],
    view: [Role.ADMIN, Role.HR],
  },
  applications: {
    view: [Role.ADMIN, Role.HR],
    manage: [Role.ADMIN, Role.HR],
  },
  users: {
    create: [Role.ADMIN],
    edit: [Role.ADMIN],
    delete: [Role.ADMIN],
    view: [Role.ADMIN],
  },
}
