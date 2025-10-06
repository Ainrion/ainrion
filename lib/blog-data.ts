export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  featuredImage: string
  category: string
  tags: string[]
  author: string
  date: string
  readTime: string
  status: "published" | "draft"
}

const initialPosts: BlogPost[] = []

export function getBlogPosts(): BlogPost[] {
  if (typeof window === "undefined") return initialPosts

  const stored = localStorage.getItem("ainrion_blog_posts")
  return stored ? JSON.parse(stored) : initialPosts
}

export function saveBlogPosts(posts: BlogPost[]) {
  if (typeof window === "undefined") return
  localStorage.setItem("ainrion_blog_posts", JSON.stringify(posts))
}

export function getBlogPost(id: string): BlogPost | undefined {
  return getBlogPosts().find((post) => post.id === id)
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return getBlogPosts().find((post) => post.slug === slug)
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export function getPublishedPosts(): BlogPost[] {
  return getBlogPosts().filter((post) => post.status === "published")
}

export function getCategories(): string[] {
  const posts = getPublishedPosts()
  return Array.from(new Set(posts.map((post) => post.category)))
}
