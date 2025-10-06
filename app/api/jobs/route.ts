import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

// GET /api/jobs - Get all jobs
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const isActive = searchParams.get("isActive")

    const where = isActive !== null ? { isActive: isActive === "true" } : {}

    const jobs = await prisma.job.findMany({
      where,
      orderBy: { postedDate: "desc" },
      include: {
        _count: {
          select: { applications: true },
        },
      },
    })

    return NextResponse.json({ success: true, jobs }, { status: 200 })
  } catch (error) {
    console.error("Error fetching jobs:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch jobs" }, { status: 500 })
  }
}

// POST /api/jobs - Create new job
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { slug, title, department, location, type, description, requirements, responsibilities } = body

    const job = await prisma.job.create({
      data: {
        slug,
        title,
        department,
        location,
        type: type.toUpperCase().replace("-", "_"),
        description,
        requirements,
        responsibilities,
      },
    })

    return NextResponse.json({ success: true, job }, { status: 201 })
  } catch (error) {
    console.error("Error creating job:", error)
    return NextResponse.json({ success: false, error: "Failed to create job" }, { status: 500 })
  }
}
