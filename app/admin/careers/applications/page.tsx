"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Mail, Phone, FileText, Eye, Edit } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"
import { useAdminAuth } from "@/hooks/use-admin-auth"

export default function ApplicationsPage() {
  const { isLoading } = useAdminAuth()
  const [applications, setApplications] = useState<any[]>([])
  const [selectedApplication, setSelectedApplication] = useState<any | null>(null)
  const [editMode, setEditMode] = useState(false)
  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    phone: "",
    status: "",
  })
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    if (!isLoading) {
      fetch("/api/applications")
        .then((res) => res.json())
        .then((data) => {
          if (data.success) setApplications(data.applications)
        })
        .catch((e) => console.error("Error loading applications:", e))
    }
  }, [isLoading])

  const handleEdit = (application: any) => {
    setEditMode(true)
    setSelectedApplication(application)
    setEditForm({
      name: application.name,
      email: application.email,
      phone: application.phone,
      status: application.status || "PENDING",
    })
  }

  const handleUpdate = async () => {
    try {
      const res = await fetch(`/api/applications/${selectedApplication.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editForm),
      })

      const data = await res.json()
      if (data.success) {
        const updatedApplications = applications.map((app) =>
          app.id === selectedApplication.id ? { ...app, ...editForm } : app
        )
        setApplications(updatedApplications)
        setEditMode(false)
        setSelectedApplication(null)
        toast({
          title: "Success",
          description: "Application updated successfully",
        })
      } else {
        throw new Error(data.error)
      }
    } catch (error) {
      console.error("Error updating application:", error)
      toast({
        title: "Error",
        description: "Failed to update application",
        variant: "destructive",
      })
    }
  }

  if (isLoading) {
    return null
  }

  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 py-12">
        <Link href="/admin/careers">
          <Button variant="ghost" className="gap-2 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Job Management
          </Button>
        </Link>

        <h1 className="text-3xl font-bold mb-8">Job Applications</h1>

        {applications.length === 0 ? (
          <div className="bg-card border border-border rounded-lg p-12 text-center">
            <p className="text-muted-foreground">No applications received yet.</p>
          </div>
        ) : (
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50 border-b border-border">
                  <tr>
                    <th className="text-left p-4 font-semibold">Applicant</th>
                    <th className="text-left p-4 font-semibold">Job</th>
                    <th className="text-left p-4 font-semibold">Status</th>
                    <th className="text-left p-4 font-semibold">Date</th>
                    <th className="text-right p-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((application) => (
                    <tr key={application.id} className="border-b border-border last:border-0 hover:bg-muted/30">
                      <td className="p-4">
                        <div className="font-medium">{application.name}</div>
                        <div className="text-sm text-muted-foreground">{application.email}</div>
                      </td>
                      <td className="p-4">{application.job?.title || "N/A"}</td>
                      <td className="p-4">
                        <span
                          className={`inline-block px-2 py-1 text-xs rounded-full ${
                            application.status === "ACCEPTED"
                              ? "bg-green-500/10 text-green-500"
                              : application.status === "REJECTED"
                              ? "bg-red-500/10 text-red-500"
                              : "bg-yellow-500/10 text-yellow-500"
                          }`}
                        >
                          {application.status || "PENDING"}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">
                        {new Date(application.appliedDate).toLocaleDateString()}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setSelectedApplication(application)}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEdit(application)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* View Application Dialog */}
        <Dialog open={selectedApplication !== null && !editMode} onOpenChange={() => setSelectedApplication(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Application Details</DialogTitle>
            </DialogHeader>
            {selectedApplication && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Job Position</h3>
                  <p>{selectedApplication.job?.title || "N/A"}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Applicant Information</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">Name:</span>
                      <span>{selectedApplication.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <a href={`mailto:${selectedApplication.email}`} className="text-primary hover:underline">
                        {selectedApplication.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <a href={`tel:${selectedApplication.phone}`} className="text-primary hover:underline">
                        {selectedApplication.phone}
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Resume</h3>
                  {selectedApplication.resumeUrl ? (
                    <a
                      href={selectedApplication.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                      <FileText className="w-4 h-4" />
                      View Resume
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-2 text-muted-foreground">
                      <FileText className="w-4 h-4" />
                      <span>No resume link provided</span>
                    </div>
                  )}
                </div>
                {selectedApplication.coverLetter && (
                  <div>
                    <h3 className="font-semibold mb-2">Cover Letter</h3>
                    <p className="whitespace-pre-wrap">{selectedApplication.coverLetter}</p>
                  </div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Edit Application Dialog */}
        <Dialog open={editMode} onOpenChange={(open) => !open && setEditMode(false)}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Edit Application</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={editForm.email}
                  onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={editForm.phone}
                  onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="status">Status</Label>
                <select
                  id="status"
                  value={editForm.status}
                  onChange={(e) => setEditForm({ ...editForm, status: e.target.value })}
                  className="w-full px-3 py-2 bg-background border border-input rounded-md"
                >
                  <option value="PENDING">Pending</option>
                  <option value="ACCEPTED">Accepted</option>
                  <option value="REJECTED">Rejected</option>
                </select>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setEditMode(false)}>
                  Cancel
                </Button>
                <Button onClick={handleUpdate}>Save Changes</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
