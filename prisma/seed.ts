import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
  console.log("Starting seed...")

  // Create admin user
  const adminPassword = await bcrypt.hash("admin123", 10)
  const admin = await prisma.user.upsert({
    where: { email: "admin@ainrion.com" },
    update: {},
    create: {
      email: "admin@ainrion.com",
      password: adminPassword,
      name: "Admin User",
      role: "ADMIN",
      isActive: true,
    },
  })
  console.log("Created admin user:", admin.email)

  // Create content writer user
  const writerPassword = await bcrypt.hash("writer123", 10)
  const writer = await prisma.user.upsert({
    where: { email: "writer@ainrion.com" },
    update: {},
    create: {
      email: "writer@ainrion.com",
      password: writerPassword,
      name: "Content Writer",
      role: "CONTENT_WRITER",
      isActive: true,
    },
  })
  console.log("Created content writer user:", writer.email)

  // Create HR user
  const hrPassword = await bcrypt.hash("hr123", 10)
  const hr = await prisma.user.upsert({
    where: { email: "hr@ainrion.com" },
    update: {},
    create: {
      email: "hr@ainrion.com",
      password: hrPassword,
      name: "HR Manager",
      role: "HR",
      isActive: true,
    },
  })
  console.log("Created HR user:", hr.email)

  console.log("Seed completed successfully!")
  console.log("\nDefault credentials:")
  console.log("Admin - Email: admin@ainrion.com, Password: admin123")
  console.log("Content Writer - Email: writer@ainrion.com, Password: writer123")
  console.log("HR - Email: hr@ainrion.com, Password: hr123")
}

main()
  .catch((e) => {
    console.error("Error during seed:", e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
