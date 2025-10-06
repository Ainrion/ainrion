import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

// GET /api/applications - Get all applications
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const jobId = searchParams.get("jobId")

    const where = jobId ? { jobId } : {}

    const applications = await prisma.application.findMany({
      where,
      include: {
        job: {
          select: {
            title: true,
            slug: true,
          },
        },
      },
      orderBy: { appliedDate: "desc" },
    })

    return NextResponse.json({ success: true, applications }, { status: 200 })
  } catch (error) {
    console.error("Error fetching applications:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch applications" }, { status: 500 })
  }
}

// POST /api/applications - Create new application
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { jobId, name, email, phone, resumeUrl, coverLetter } = body

    const application = await prisma.application.create({
      data: {
        jobId,
        name,
        email,
        phone,
        resumeUrl,
        coverLetter,
      },
    })

    return NextResponse.json({ success: true, application }, { status: 201 })
  } catch (error) {
    console.error("Error creating application:", error)
    return NextResponse.json({ success: false, error: "Failed to create application" }, { status: 500 })
  }
}
