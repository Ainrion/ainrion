export interface Job {
  id: string
  slug: string
  title: string
  department: string
  location: string
  type: "Full-time" | "Part-time" | "Contract" | "Remote"
  postedDate: string
  description: string
  requirements: string[]
  responsibilities: string[]
}

export interface Application {
  id: string
  jobId: string
  jobTitle: string
  name: string
  email: string
  phone: string
  resume: string
  coverLetter: string
  appliedDate: string
}

const initialJobs: Job[] = []

export function getJobs(): Job[] {
  if (typeof window === "undefined") return initialJobs

  const stored = localStorage.getItem("ainrion_jobs")
  return stored ? JSON.parse(stored) : initialJobs
}

export function saveJobs(jobs: Job[]) {
  if (typeof window === "undefined") return
  localStorage.setItem("ainrion_jobs", JSON.stringify(jobs))
}

export function getJob(id: string): Job | undefined {
  return getJobs().find((job) => job.id === id)
}

export function getJobBySlug(slug: string): Job | undefined {
  return getJobs().find((job) => job.slug === slug)
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export function getApplications(): Application[] {
  if (typeof window === "undefined") return []

  const stored = localStorage.getItem("ainrion_applications")
  return stored ? JSON.parse(stored) : []
}

export function saveApplications(applications: Application[]) {
  if (typeof window === "undefined") return
  localStorage.setItem("ainrion_applications", JSON.stringify(applications))
}

export function getDepartments(): string[] {
  const jobs = getJobs()
  return Array.from(new Set(jobs.map((job) => job.department)))
}
