"use client"

import { useState, useEffect } from "react" // Add useState import
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Briefcase, LogOut, ArrowRight } from "lucide-react"
import Link from "next/link"
import { getBlogPosts } from "@/lib/blog-data"
import { getJobs, getApplications } from "@/lib/careers-data"
import { useToast } from "@/hooks/use-toast"
import { useAdminAuth } from "@/hooks/use-admin-auth"
import { clearAuthToken } from "@/lib/auth"

export default function AdminPage() {
  const { isLoading } = useAdminAuth()
  const router = useRouter()
  const { toast } = useToast()
  const [blogPosts, setBlogPosts] = useState<any[]>([])
  const [jobs, setJobs] = useState<any[]>([])
  const [applications, setApplications] = useState<any[]>([])

  useEffect(() => {
    if (!isLoading) {
      // Fetch blog posts
      fetch("/api/blog")
        .then((res) => res.json())
        .then((data) => {
          if (data.success) setBlogPosts(data.posts)
        })
        .catch((e) => console.error("Error loading posts:", e))

      // Fetch jobs
      fetch("/api/jobs")
        .then((res) => res.json())
        .then((data) => {
          if (data.success) setJobs(data.jobs)
        })
        .catch((e) => console.error("Error loading jobs:", e))

      // Fetch applications
      fetch("/api/applications")
        .then((res) => res.json())
        .then((data) => {
          if (data.success) setApplications(data.applications)
        })
        .catch((e) => console.error("Error loading applications:", e))
    }
  }, [isLoading])

  const handleLogout = () => {
    clearAuthToken()
    toast({
      title: "Logged out",
      description: "You've been logged out successfully.",
    })
    router.push("/admin/login")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4 animate-pulse">
            <span className="text-primary-foreground font-bold text-2xl">A</span>
          </div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  const publishedPosts = blogPosts.filter((post) => post.status === "PUBLISHED" || post.status === "published")

  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your website content and applications</p>
          </div>
          <Button variant="outline" onClick={handleLogout} className="gap-2 bg-transparent">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Total Blog Posts</CardDescription>
              <CardTitle className="text-4xl">{blogPosts.length}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{publishedPosts.length} published</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Active Jobs</CardDescription>
              <CardTitle className="text-4xl">{jobs.length}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Open positions</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Applications</CardDescription>
              <CardTitle className="text-4xl">{applications.length}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Total received</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Draft Posts</CardDescription>
              <CardTitle className="text-4xl">{blogPosts.length - publishedPosts.length}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Unpublished</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="hover:border-primary/50 transition-all group">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Blog Management</CardTitle>
              <CardDescription>Create, edit, and manage blog posts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Link href="/admin/blog">
                  <Button variant="outline" className="w-full justify-between group/btn bg-transparent">
                    Manage Posts
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/admin/blog/new">
                  <Button className="w-full">Create New Post</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-all group">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Careers Management</CardTitle>
              <CardDescription>Manage job postings and applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Link href="/admin/careers">
                  <Button variant="outline" className="w-full justify-between group/btn bg-transparent">
                    Manage Jobs
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/admin/careers/applications">
                  <Button variant="outline" className="w-full justify-between group/btn bg-transparent">
                    View Applications
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/admin/careers/new">
                  <Button className="w-full">Create New Job</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Blog Posts */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Blog Posts</CardTitle>
                <CardDescription>Latest published articles</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {publishedPosts.slice(0, 5).map((post) => (
                    <div
                      key={post.id}
                      className="flex justify-between items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0"
                    >
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium truncate">{post.title}</h3>
                        <p className="text-sm text-muted-foreground">{post.category}</p>
                      </div>
                      <Link href={`/admin/blog/edit/${post.id}`}>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </Link>
                    </div>
                  ))}
                  {publishedPosts.length === 0 && (
                    <p className="text-sm text-muted-foreground text-center py-4">No published posts yet</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Recent Applications */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Applications</CardTitle>
                <CardDescription>Latest job applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {applications.slice(0, 5).map((app) => (
                    <div
                      key={app.id}
                      className="flex justify-between items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0"
                    >
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium truncate">{app.name}</h3>
                        <p className="text-sm text-muted-foreground truncate">{app.job?.title}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground whitespace-nowrap">
                          {new Date(app.appliedDate).toLocaleDateString()}
                        </span>
                        <Link href={`/admin/careers/applications`}>
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                  {applications.length === 0 && (
                    <p className="text-sm text-muted-foreground text-center py-4">No applications yet</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
