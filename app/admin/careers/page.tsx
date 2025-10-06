"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Plus, Edit, Trash2, Eye } from "lucide-react"
import Link from "next/link"
import type { Job } from "@/lib/careers-data"
import { useToast } from "@/hooks/use-toast"
import { useAdminAuth } from "@/hooks/use-admin-auth"

export default function AdminCareersPage() {
  const [jobs, setJobs] = useState<any[]>([])
  const { isLoading } = useAdminAuth()
  const { toast } = useToast()

  useEffect(() => {
    if (!isLoading) {
      // Fetch jobs from API
      fetch("/api/jobs")
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setJobs(data.jobs)
          }
        })
        .catch((err) => console.error("Error loading jobs:", err))
    }
  }, [isLoading])

  const handleDelete = async (slug: string) => {
    if (confirm("Are you sure you want to delete this job posting?")) {
      try {
        const res = await fetch(`/api/jobs/${slug}`, { method: "DELETE" })
        const data = await res.json()
        if (data.success) {
          const updatedJobs = jobs.filter((job) => job.slug !== slug)
          setJobs(updatedJobs)
          toast({
            title: "Job deleted",
            description: "The job posting has been deleted successfully.",
          })
        } else {
          throw new Error(data.error)
        }
      } catch (e) {
        console.error(e)
        toast({ title: "Error", description: "Failed to delete job.", variant: "destructive" })
      }
    }
  }

  if (isLoading) {
    return null
  }

  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Manage Job Postings</h1>
            <p className="text-muted-foreground">Create, edit, and manage career opportunities</p>
          </div>
          <Link href="/admin/careers/new">
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              New Job
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-3xl font-bold mb-2">{jobs.length}</div>
            <div className="text-muted-foreground">Active Jobs</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-3xl font-bold mb-2">{jobs.reduce((acc, j) => acc + (j._count?.applications || 0), 0)}</div>
            <div className="text-muted-foreground">Total Applications</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <Link href="/admin/careers/applications">
              <Button variant="outline" className="w-full bg-transparent">
                View Applications
              </Button>
            </Link>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="text-left p-4 font-semibold">Title</th>
                  <th className="text-left p-4 font-semibold">Department</th>
                  <th className="text-left p-4 font-semibold">Location</th>
                  <th className="text-left p-4 font-semibold">Type</th>
                  <th className="text-left p-4 font-semibold">Posted</th>
                  <th className="text-left p-4 font-semibold">Applications</th>
                  <th className="text-right p-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job: any) => (
                  <tr key={job.id} className="border-b border-border last:border-0 hover:bg-muted/30">
                    <td className="p-4 font-medium">{job.title}</td>
                    <td className="p-4">
                      <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {job.department}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">{job.location}</td>
                    <td className="p-4 text-sm text-muted-foreground">{job.type?.replace(/_/g, " ")}</td>
                    <td className="p-4 text-sm text-muted-foreground">
                      {new Date(job.postedDate).toLocaleDateString()}
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">{job._count?.applications || 0}</td>
                    <td className="p-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link href={`/careers/${job.slug}`} target="_blank">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </Link>
                        <Link href={`/admin/careers/edit/${job.slug}`}>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </Link>
                        <Button variant="ghost" size="sm" onClick={() => handleDelete(job.slug)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

