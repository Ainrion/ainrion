import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

// GET /api/blog - Get all blog posts
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get("status")

    const where = status ? { status: status.toUpperCase() as any } : {}

    const posts = await prisma.blogPost.findMany({
      where,
      orderBy: { date: "desc" },
    })

    return NextResponse.json({ success: true, posts }, { status: 200 })
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch posts" }, { status: 500 })
  }
}

// POST /api/blog - Create new blog post
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { slug, title, excerpt, content, featuredImage, category, tags, author, readTime, status } = body

    const post = await prisma.blogPost.create({
      data: {
        slug,
        title,
        excerpt,
        content,
        featuredImage,
        category,
        tags,
        author,
        readTime,
        status: status?.toUpperCase() || "DRAFT",
      },
    })

    return NextResponse.json({ success: true, post }, { status: 201 })
  } catch (error) {
    console.error("Error creating blog post:", error)
    return NextResponse.json({ success: false, error: "Failed to create post" }, { status: 500 })
  }
}
