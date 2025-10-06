import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

// GET /api/blog/[slug] - Get single blog post
export async function GET(request: Request, { params }: { params: { slug: string } }) {
  try {
    const post = await prisma.blogPost.findUnique({
      where: { slug: params.slug },
    })

    if (!post) {
      return NextResponse.json({ success: false, error: "Post not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, post }, { status: 200 })
  } catch (error) {
    console.error("Error fetching blog post:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch post" }, { status: 500 })
  }
}

// PUT /api/blog/[slug] - Update blog post
export async function PUT(request: Request, { params }: { params: { slug: string } }) {
  try {
    const body = await request.json()
    const { title, excerpt, content, featuredImage, category, tags, author, readTime, status, newSlug } = body

    const post = await prisma.blogPost.update({
      where: { slug: params.slug },
      data: {
        slug: newSlug || params.slug,
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

    return NextResponse.json({ success: true, post }, { status: 200 })
  } catch (error) {
    console.error("Error updating blog post:", error)
    return NextResponse.json({ success: false, error: "Failed to update post" }, { status: 500 })
  }
}

// DELETE /api/blog/[slug] - Delete blog post
export async function DELETE(request: Request, { params }: { params: { slug: string } }) {
  try {
    await prisma.blogPost.delete({
      where: { slug: params.slug },
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Error deleting blog post:", error)
    return NextResponse.json({ success: false, error: "Failed to delete post" }, { status: 500 })
  }
}
