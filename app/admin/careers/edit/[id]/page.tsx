"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { generateSlug } from "@/lib/careers-data"
import { useToast } from "@/hooks/use-toast"

export default function EditJobPage({ params }: { params: { id: string } }) {
  const slug = params.id
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    department: "",
    location: "",
    type: "Full-time" as "Full-time" | "Part-time" | "Contract" | "Remote",
    description: "",
    requirements: "",
    responsibilities: "",
  })
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    const auth = localStorage.getItem("ainrion_admin_auth")
    if (auth !== "authenticated") {
      router.push("/admin")
      return
    }
    setIsAuthenticated(true)

    // Load job from API by slug
    fetch(`/api/jobs/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const job = data.job
          setFormData({
            title: job.title,
            department: job.department,
            location: job.location,
            // Convert enum value like FULL_TIME to display "Full-time"
            type: (String(job.type).replace(/_/g, " ").replace(/^([A-Z])/, (m) => m) as any) || "Full-time",
            description: job.description,
            requirements: (job.requirements || []).join("\n"),
            responsibilities: (job.responsibilities || []).join("\n"),
          })
        }
      })
      .catch((e) => console.error("Error loading job:", e))
  }, [slug, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const updated = {
        title: formData.title,
        department: formData.department,
        location: formData.location,
        type: formData.type,
        description: formData.description,
        requirements: formData.requirements
          .split("\n")
          .map((req) => req.trim())
          .filter((req) => req.length > 0),
        responsibilities: formData.responsibilities
          .split("\n")
          .map((resp) => resp.trim())
          .filter((resp) => resp.length > 0),
        newSlug: generateSlug(formData.title),
      }

      const res = await fetch(`/api/jobs/${slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      })

      const data = await res.json()
      if (!data.success) throw new Error(data.error)

      toast({
        title: "Job updated!",
        description: "The job posting has been updated successfully.",
      })

      router.push("/admin/careers")
    } catch (err) {
      console.error("Error updating job:", err)
      toast({ title: "Error", description: "Failed to update job.", variant: "destructive" })
    }
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link href="/admin/careers">
          <Button variant="ghost" className="gap-2 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Careers Management
          </Button>
        </Link>

        <h1 className="text-3xl font-bold mb-8">Edit Job Posting</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="title">Job Title *</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="department">Department *</Label>
              <Input
                id="department"
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="location">Location *</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="type">Employment Type *</Label>
            <select
              id="type"
              value={formData.type}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  type: e.target.value as "Full-time" | "Part-time" | "Contract" | "Remote",
                })
              }
              className="w-full px-3 py-2 bg-background border border-input rounded-md"
              required
            >
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Remote">Remote</option>
            </select>
          </div>

          <div>
            <Label htmlFor="description">Job Description *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={6}
              required
            />
          </div>

          <div>
            <Label htmlFor="requirements">Requirements (one per line) *</Label>
            <Textarea
              id="requirements"
              value={formData.requirements}
              onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
              rows={8}
              required
              placeholder="5+ years of experience&#10;Strong proficiency in React&#10;Experience with TypeScript"
            />
            <p className="text-sm text-muted-foreground mt-1">Enter each requirement on a new line</p>
          </div>

          <div>
            <Label htmlFor="responsibilities">Responsibilities (one per line) *</Label>
            <Textarea
              id="responsibilities"
              value={formData.responsibilities}
              onChange={(e) => setFormData({ ...formData, responsibilities: e.target.value })}
              rows={8}
              required
              placeholder="Design and implement new features&#10;Collaborate with product teams&#10;Write clean, maintainable code"
            />
            <p className="text-sm text-muted-foreground mt-1">Enter each responsibility on a new line</p>
          </div>

          <Button type="submit" className="w-full">
            Update Job Posting
          </Button>
        </form>
      </div>
    </div>
  )
}
