"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { MapPin, Briefcase, Calendar, ArrowLeft, CheckCircle2, Upload } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"
import { useUploadThing } from "@/lib/uploadthing"

export default function JobDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const [job, setJob] = useState<any>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resumeUrl: "",
    coverLetter: "",
  })
  const { toast } = useToast()
  const { startUpload, isUploading } = useUploadThing("resumeUploader")

  // Fetch job on mount
  useEffect(() => {
    fetch(`/api/jobs/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setJob(data.job)
        }
      })
      .catch((error) => console.error("Error fetching job:", error))
  }, [slug])

  if (!job) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      if (!formData.resumeUrl) {
        toast({
          title: "Error",
          description: "Please provide a resume link",
          variant: "destructive",
        })
        setIsSubmitting(false)
        return
      }
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jobId: job.id,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          resumeUrl: formData.resumeUrl,
          coverLetter: formData.coverLetter,
        }),
      })
      const data = await response.json()
      if (data.success) {
        toast({
          title: "Application submitted!",
          description: "We've received your application and will be in touch soon.",
        })
        setIsOpen(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          resumeUrl: "",
          coverLetter: "",
        })
      } else {
        throw new Error(data.error)
      }
    } catch (error) {
      console.error("Error submitting application:", error)
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <Link href="/careers">
            <Button variant="ghost" className="gap-2 mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Careers
            </Button>
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{job.title}</h1>

                <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
                  <span className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    {job.department}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Posted {new Date(job.postedDate).toLocaleDateString()}
                  </span>
                </div>

                <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full">
                  {job.type}
                </span>
              </div>

              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="flex-shrink-0">
                    Apply Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Apply for {job.title}</DialogTitle>
                  </DialogHeader>

                  <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="resumeUrl">Resume Link (Google Drive, Dropbox, etc.) *</Label>
                      <Input
                        id="resumeUrl"
                        type="url"
                        value={formData.resumeUrl}
                        onChange={e => setFormData({ ...formData, resumeUrl: e.target.value })}
                        required
                        placeholder="https://..."
                      />
                    </div>

                    <div>
                      <Label htmlFor="coverLetter">Cover Letter *</Label>
                      <Textarea
                        id="coverLetter"
                        value={formData.coverLetter}
                        onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting || isUploading}>
                      {isSubmitting || isUploading ? "Submitting..." : "Submit Application"}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold mb-4">About the Role</h2>
              <p className="text-muted-foreground leading-relaxed">{job.description}</p>
            </div>

            {/* Requirements */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Requirements</h2>
              <ul className="space-y-3">
                {job.requirements.map((req: any, index: any) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Responsibilities */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Responsibilities</h2>
              <ul className="space-y-3">
                {job.responsibilities.map((resp: any, index: any) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Apply CTA */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Join Us?</h3>
              <p className="text-muted-foreground mb-6">
                Take the next step in your career and become part of our innovative team
              </p>
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <Button size="lg">Apply for this Position</Button>
                </DialogTrigger>
              </Dialog>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
