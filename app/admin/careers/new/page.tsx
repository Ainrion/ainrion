"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Plus, X } from "lucide-react"
import Link from "next/link"
import { generateSlug } from "@/lib/careers-data"
import { useToast } from "@/hooks/use-toast"
import { useAdminAuth } from "@/hooks/use-admin-auth"

export default function NewJobPage() {
  const { isLoading } = useAdminAuth()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    department: "",
    location: "",
    type: "Full-time" as "Full-time" | "Part-time" | "Contract" | "Remote",
    description: "",
    requirements: [""],
    responsibilities: [""],
  })
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const slug = generateSlug(formData.title)

      const response = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug,
          title: formData.title,
          department: formData.department,
          location: formData.location,
          type: formData.type,
          description: formData.description,
          requirements: formData.requirements.filter((r) => r.trim() !== ""),
          responsibilities: formData.responsibilities.filter((r) => r.trim() !== ""),
        }),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Job posted!",
          description: "The job posting has been created successfully.",
        })
        router.push("/admin/careers")
      } else {
        throw new Error(data.error)
      }
    } catch (error) {
      console.error("Error creating job:", error)
      toast({
        title: "Error",
        description: "Failed to create job posting. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isLoading) {
    return null
  }

  const addRequirement = () => {
    setFormData({ ...formData, requirements: [...formData.requirements, ""] })
  }

  const removeRequirement = (index: number) => {
    setFormData({
      ...formData,
      requirements: formData.requirements.filter((_, i) => i !== index),
    })
  }

  const updateRequirement = (index: number, value: string) => {
    const updated = [...formData.requirements]
    updated[index] = value
    setFormData({ ...formData, requirements: updated })
  }

  const addResponsibility = () => {
    setFormData({ ...formData, responsibilities: [...formData.responsibilities, ""] })
  }

  const removeResponsibility = (index: number) => {
    setFormData({
      ...formData,
      responsibilities: formData.responsibilities.filter((_, i) => i !== index),
    })
  }

  const updateResponsibility = (index: number, value: string) => {
    const updated = [...formData.responsibilities]
    updated[index] = value
    setFormData({ ...formData, responsibilities: updated })
  }


  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link href="/admin/careers">
          <Button variant="ghost" className="gap-2 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Career Management
          </Button>
        </Link>

        <h1 className="text-3xl font-bold mb-8">Create New Job Posting</h1>

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

            <div>
              <Label htmlFor="type">Type *</Label>
              <select
                id="type"
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value as Job["type"] })}
                className="w-full px-3 py-2 bg-background border border-input rounded-md"
              >
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Remote">Remote</option>
              </select>
            </div>
          </div>

          <div>
            <Label htmlFor="description">Job Description *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={5}
              required
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-3">
              <Label>Requirements *</Label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addRequirement}
                className="gap-2 bg-transparent"
              >
                <Plus className="w-4 h-4" />
                Add
              </Button>
            </div>
            <div className="space-y-2">
              {formData.requirements.map((req, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={req}
                    onChange={(e) => updateRequirement(index, e.target.value)}
                    placeholder="Enter requirement"
                    required
                  />
                  {formData.requirements.length > 1 && (
                    <Button type="button" variant="ghost" size="icon" onClick={() => removeRequirement(index)}>
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-3">
              <Label>Responsibilities *</Label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addResponsibility}
                className="gap-2 bg-transparent"
              >
                <Plus className="w-4 h-4" />
                Add
              </Button>
            </div>
            <div className="space-y-2">
              {formData.responsibilities.map((resp, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={resp}
                    onChange={(e) => updateResponsibility(index, e.target.value)}
                    placeholder="Enter responsibility"
                    required
                  />
                  {formData.responsibilities.length > 1 && (
                    <Button type="button" variant="ghost" size="icon" onClick={() => removeResponsibility(index)}>
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "Create Job Posting"}
          </Button>
        </form>
      </div>
    </div>
  )
}
