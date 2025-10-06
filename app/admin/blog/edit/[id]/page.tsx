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
import { generateSlug } from "@/lib/blog-data"
import { useToast } from "@/hooks/use-toast"
import { useAdminAuth } from "@/hooks/use-admin-auth"

export default function EditBlogPostPage({ params }: { params: { id: string } }) {
  const { isLoading } = useAdminAuth()
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    featuredImage: "",
    category: "",
    tags: "",
    status: "draft" as "published" | "draft",
  })
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    if (isLoading) return

    // Load post from API by slug
    fetch(`/api/blog/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const post = data.post
          setFormData({
            title: post.title,
            excerpt: post.excerpt,
            content: post.content,
            featuredImage: post.featuredImage || "",
            category: post.category,
            tags: (post.tags || []).join(", "),
            status: String(post.status).toLowerCase() as "published" | "draft",
          })
        } else {
          toast({
            title: "Error",
            description: "Failed to load blog post.",
            variant: "destructive",
          })
          router.push("/admin/blog")
        }
      })
      .catch((e) => {
        console.error("Error loading post:", e)
        toast({
          title: "Error",
          description: "Failed to load blog post.",
          variant: "destructive",
        })
        router.push("/admin/blog")
      })
  }, [params.id, router, toast, isLoading])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const updated = {
        title: formData.title,
        excerpt: formData.excerpt,
        content: formData.content,
        featuredImage: formData.featuredImage || null,
        category: formData.category,
        tags: formData.tags.split(",").map((tag) => tag.trim()).filter(Boolean),
        readTime: `${Math.ceil(formData.content.split(" ").length / 200)} min read`,
        status: formData.status,
        newSlug: generateSlug(formData.title),
      }

      const res = await fetch(`/api/blog/${params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      })

      const data = await res.json()
      if (!data.success) throw new Error(data.error)

      toast({ title: "Post updated!", description: "Your blog post has been updated successfully." })
      router.push("/admin/blog")
    } catch (err) {
      console.error("Error updating post:", err)
      toast({ title: "Error", description: "Failed to update post.", variant: "destructive" })
    }
  }

  if (isLoading) {
    return null
  }

  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link href="/admin/blog">
          <Button variant="ghost" className="gap-2 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog Management
          </Button>
        </Link>

        <h1 className="text-3xl font-bold mb-8">Edit Blog Post</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="excerpt">Excerpt *</Label>
            <Textarea
              id="excerpt"
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              rows={3}
              required
            />
          </div>

          <div>
            <Label htmlFor="content">Content *</Label>
            <Textarea
              id="content"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              rows={15}
              required
              className="font-mono text-sm"
            />
          </div>

          <div>
            <Label htmlFor="featuredImage">Featured Image URL</Label>
            <Input
              id="featuredImage"
              type="url"
              value={formData.featuredImage}
              onChange={(e) => setFormData({ ...formData, featuredImage: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="category">Category *</Label>
              <Input
                id="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="tags">Tags (comma-separated) *</Label>
              <Input
                id="tags"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="status">Status</Label>
            <select
              id="status"
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value as "published" | "draft" })}
              className="w-full px-3 py-2 bg-background border border-input rounded-md"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>

          <Button type="submit" className="w-full">
            Update Post
          </Button>
        </form>
      </div>
    </div>
  )
}
