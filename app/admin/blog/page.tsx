"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Plus, Edit, Trash2, Eye } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"
import { useAdminAuth } from "@/hooks/use-admin-auth"

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<any[]>([])
  const { isLoading } = useAdminAuth()
  const { toast } = useToast()

  useEffect(() => {
    if (!isLoading) {
      fetch("/api/blog")
        .then((res) => res.json())
        .then((data) => {
          if (data.success) setPosts(data.posts)
        })
        .catch((e) => console.error("Error loading posts:", e))
    }
  }, [isLoading])

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this post?")) {
      // Find slug by id in current list
      const post = posts.find((p) => p.id === id)
      const slug = post?.slug
      if (!slug) return
      fetch(`/api/blog/${slug}`, { method: "DELETE" })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            const updatedPosts = posts.filter((p) => p.slug !== slug)
            setPosts(updatedPosts)
            toast({ title: "Post deleted", description: "The blog post has been deleted successfully." })
          } else {
            throw new Error(data.error)
          }
        })
        .catch(() => toast({ title: "Error", description: "Failed to delete post.", variant: "destructive" }))
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
            <h1 className="text-3xl font-bold mb-2">Manage Blog Posts</h1>
            <p className="text-muted-foreground">Create, edit, and manage your blog content</p>
          </div>
          <Link href="/admin/blog/new">
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              New Post
            </Button>
          </Link>
        </div>

        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="text-left p-4 font-semibold">Title</th>
                  <th className="text-left p-4 font-semibold">Category</th>
                  <th className="text-left p-4 font-semibold">Status</th>
                  <th className="text-left p-4 font-semibold">Date</th>
                  <th className="text-right p-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id} className="border-b border-border last:border-0 hover:bg-muted/30">
                    <td className="p-4">
                      <div className="font-medium">{post.title}</div>
                      <div className="text-sm text-muted-foreground line-clamp-1">{post.excerpt}</div>
                    </td>
                    <td className="p-4">
                      <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {post.category}
                      </span>
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-block px-2 py-1 text-xs rounded-full ${
                          post.status === "published"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-yellow-500/10 text-yellow-500"
                        }`}
                      >
                        {post.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString()}</td>
                    <td className="p-4">
                      <div className="flex items-center justify-end gap-2">
                        {(post.status === "published" || post.status === "PUBLISHED") && (
                          <Link href={`/blog/${post.slug}`} target="_blank">
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                          </Link>
                        )}
                        <Link href={`/admin/blog/edit/${post.slug}`}>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </Link>
                        <Button variant="ghost" size="sm" onClick={() => handleDelete(post.id)}>
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
