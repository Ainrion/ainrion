"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Share2, Linkedin, Twitter } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"
import { useEffect, useMemo, useState } from "react"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const { toast } = useToast()
  const [post, setPost] = useState<any | null>(null)
  const [allPosts, setAllPosts] = useState<any[]>([])

  useEffect(() => {
    fetch(`/api/blog/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const p = data.post
          if (String(p.status).toUpperCase() !== "PUBLISHED") {
            notFound()
          }
          setPost(p)
        } else {
          notFound()
        }
      })
      .catch(() => notFound())

    fetch(`/api/blog?status=PUBLISHED`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setAllPosts(data.posts)
      })
      .catch(() => {})
  }, [slug])

  const relatedPosts = useMemo(() => {
    if (!post) return []
    return allPosts
      .filter((p) => p.id !== post.id && (p.category === post.category || (p.tags || []).some((tag: string) => (post.tags || []).includes(tag))))
      .slice(0, 3)
  }, [allPosts, post])

  if (!post) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    )
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  const shareText = post.title

  const handleShare = (platform: string) => {
    let url = ""
    if (platform === "linkedin") {
      url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    } else if (platform === "twitter") {
      url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`
    }

    if (url) {
      window.open(url, "_blank", "width=600,height=400")
    }
  }

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl)
    toast({
      title: "Link copied!",
      description: "The article link has been copied to your clipboard.",
    })
  }

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <Link href="/blog">
            <Button variant="ghost" className="gap-2 mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Button>
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              {post.category}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <span>By {post.author}</span>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground mr-2">Share:</span>
              <Button variant="outline" size="sm" onClick={() => handleShare("linkedin")} className="gap-2">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
              <Button variant="outline" size="sm" onClick={() => handleShare("twitter")} className="gap-2">
                <Twitter className="w-4 h-4" />
                Twitter
              </Button>
              <Button variant="outline" size="sm" onClick={copyLink} className="gap-2 bg-transparent">
                <Share2 className="w-4 h-4" />
                Copy Link
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden relative">
              {post.featuredImage ? (
                <Image src={post.featuredImage} alt={post.title} fill className="object-cover" />
              ) : (
                <div className="w-full h-full bg-[url('/tech-abstract.jpg')] opacity-50 bg-cover bg-center" />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              <div
                className="text-muted-foreground leading-relaxed whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br />") }}
              />
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-card border border-border rounded-full text-sm text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-24 bg-card/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Related Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/tech-abstract.jpg')] opacity-50 bg-cover bg-center group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                      {relatedPost.category}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{relatedPost.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
