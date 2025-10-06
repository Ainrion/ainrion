import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

// GET /api/jobs/[slug] - Get single job
export async function GET(request: Request, { params }: { params: { slug: string } }) {
  try {
    const job = await prisma.job.findUnique({
      where: { slug: params.slug },
      include: {
        applications: true,
      },
    })

    if (!job) {
      return NextResponse.json({ success: false, error: "Job not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, job }, { status: 200 })
  } catch (error) {
    console.error("Error fetching job:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch job" }, { status: 500 })
  }
}

// PUT /api/jobs/[slug] - Update job
export async function PUT(request: Request, { params }: { params: { slug: string } }) {
  try {
    const body = await request.json()
    const { title, department, location, type, description, requirements, responsibilities, isActive, newSlug } = body

    const job = await prisma.job.update({
      where: { slug: params.slug },
      data: {
        slug: newSlug || params.slug,
        title,
        department,
        location,
        type: type.toUpperCase().replace("-", "_"),
        description,
        requirements,
        responsibilities,
        isActive: isActive ?? true,
      },
    })

    return NextResponse.json({ success: true, job }, { status: 200 })
  } catch (error) {
    console.error("Error updating job:", error)
    return NextResponse.json({ success: false, error: "Failed to update job" }, { status: 500 })
  }
}

// DELETE /api/jobs/[slug] - Delete job
export async function DELETE(request: Request, { params }: { params: { slug: string } }) {
  try {
    await prisma.job.delete({
      where: { slug: params.slug },
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Error deleting job:", error)
    return NextResponse.json({ success: false, error: "Failed to delete job" }, { status: 500 })
  }
}
