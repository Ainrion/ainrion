"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { isAuthenticated } from "@/lib/auth"

export function useAdminAuth() {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check authentication on mount
    const checkAuth = () => {
      if (!isAuthenticated()) {
        router.push("/admin/login")
      } else {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [router])

  return { isLoading }
}
