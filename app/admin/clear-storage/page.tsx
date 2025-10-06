"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

export default function ClearStoragePage() {
  const router = useRouter()
  const { toast } = useToast()

  const handleClear = () => {
    if (confirm("This will clear all localStorage data (blogs, jobs, applications). Database data will remain. Continue?")) {
      localStorage.removeItem("ainrion_blog_posts")
      localStorage.removeItem("ainrion_jobs")
      localStorage.removeItem("ainrion_applications")

      toast({
        title: "Storage cleared",
        description: "All localStorage data has been cleared. Redirecting to dashboard...",
      })

      setTimeout(() => {
        router.push("/admin")
      }, 1500)
    }
  }

  return (
    <div className="pt-16 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full space-y-6 p-6 bg-card border border-border rounded-lg">
        <div>
          <h1 className="text-2xl font-bold mb-2">Clear Local Storage</h1>
          <p className="text-muted-foreground">
            This will remove all data stored in browser localStorage (old blog posts, jobs, and applications).
            Data in the cloud database will remain intact.
          </p>
        </div>

        <Button onClick={handleClear} variant="destructive" className="w-full">
          Clear All Local Storage
        </Button>

        <Button onClick={() => router.push("/admin")} variant="outline" className="w-full">
          Cancel
        </Button>
      </div>
    </div>
  )
}
