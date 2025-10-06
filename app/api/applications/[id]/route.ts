import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

// GET /api/applications/[id] - Get single application
export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const application = await prisma.application.findUnique({
      where: { id: params.id },
      include: {
        job: {
          select: {
            title: true,
            slug: true,
          },
        },
      },
    })

    if (!application) {
      return NextResponse.json({ success: false, error: "Application not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, application }, { status: 200 })
  } catch (error) {
    console.error("Error fetching application:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch application" }, { status: 500 })
  }
}

// PUT /api/applications/[id] - Update application
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const { name, email, phone, status } = body

    const application = await prisma.application.update({
      where: { id: params.id },
      data: {
        name,
        email,
        phone,
        status,
      },
    })

    return NextResponse.json({ success: true, application }, { status: 200 })
  } catch (error) {
    console.error("Error updating application:", error)
    return NextResponse.json({ success: false, error: "Failed to update application" }, { status: 500 })
  }
}