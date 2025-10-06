"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

// This will be replaced with actual blog data later
const recentPosts = [
  {
    id: 1,
    title: "The Future of AI in Education",
    excerpt:
      "Exploring how artificial intelligence is transforming the learning experience for students and educators alike.",
    date: "2025-03-15",
    readTime: "5 min read",
    category: "AI",
  },
  {
    id: 2,
    title: "Building Scalable SaaS Applications",
    excerpt: "Best practices and architectural patterns for creating enterprise-grade SaaS platforms that scale.",
    date: "2025-03-10",
    readTime: "8 min read",
    category: "Development",
  },
  {
    id: 3,
    title: "Blockchain Beyond Cryptocurrency",
    excerpt: "Discovering practical applications of blockchain technology in supply chain, healthcare, and more.",
    date: "2025-03-05",
    readTime: "6 min read",
    category: "Blockchain",
  },
]

function BlogCard({ post, index }: { post: (typeof recentPosts)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
    >
      <Link
        href={`/blog/${post.id}`}
        className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 block"
      >
        <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/tech-abstract.jpg')] opacity-50 bg-cover bg-center group-hover:scale-110 transition-transform duration-700 ease-out" />
        </div>
        <div className="p-5 sm:p-6">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
            {post.category}
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
          <div className="flex items-center gap-3 sm:gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export function BlogPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 gap-4"
        >
          <div className="px-4 md:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Latest Insights</h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Thoughts on technology, innovation, and the future
            </p>
          </div>
          <Link href="/blog" className="hidden md:block">
            <Button variant="outline" className="gap-2 group bg-transparent">
              View All Posts
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {recentPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-center mt-6 sm:mt-8 md:hidden px-4"
        >
          <Link href="/blog">
            <Button variant="outline" className="gap-2 group bg-transparent w-full sm:w-auto">
              View All Posts
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
