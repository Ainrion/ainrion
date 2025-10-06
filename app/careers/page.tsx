"use client"

import { useState, useMemo, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Briefcase, Calendar, Heart, Users, Zap, TrendingUp } from "lucide-react"
import Image from "next/image"

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs",
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Continuous learning and career development support",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with talented, passionate team members",
  },
  {
    icon: Zap,
    title: "Flexible Work",
    description: "Remote-first with flexible working hours",
  },
]

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null)
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [jobs, setJobs] = useState<any[]>([])

  useEffect(() => {
    fetch("/api/jobs?isActive=true")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setJobs(data.jobs)
      })
      .catch((e) => console.error("Error loading jobs:", e))
  }, [])

  const departments = useMemo(() => Array.from(new Set(jobs.map((j) => j.department))), [jobs])
  const types = useMemo(() => Array.from(new Set(jobs.map((j) => j.type))), [jobs])

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesDepartment = !selectedDepartment || job.department === selectedDepartment
      const matchesType = !selectedType || job.type === selectedType
      return matchesDepartment && matchesType
    })
  }, [jobs, selectedDepartment, selectedType])

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Our Team</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Help us build the future of technology. Work on innovative products that make a real impact.
              </p>
            </div>

            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image src="/tech-abstract.jpg" alt="Join Ainrion Team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Ainrion?</h2>
            <p className="text-muted-foreground">We believe in creating an environment where innovation thrives</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div
                  key={benefit.title}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-muted-foreground">Find your next opportunity with us</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-muted-foreground self-center mr-2">Department:</span>
              <Button
                variant={selectedDepartment === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedDepartment(null)}
                className={selectedDepartment === null ? "" : "bg-transparent"}
              >
                All
              </Button>
              {departments.map((dept) => (
                <Button
                  key={dept}
                  variant={selectedDepartment === dept ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDepartment(dept)}
                  className={selectedDepartment === dept ? "" : "bg-transparent"}
                >
                  {dept}
                </Button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-muted-foreground self-center mr-2">Type:</span>
              <Button
                variant={selectedType === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedType(null)}
                className={selectedType === null ? "" : "bg-transparent"}
              >
                All
              </Button>
              {types.map((type) => (
                <Button
                  key={type}
                  variant={selectedType === type ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedType(type)}
                  className={selectedType === type ? "" : "bg-transparent"}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>

          {/* Job Listings */}
          {filteredJobs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No positions found matching your criteria.</p>
            </div>
          ) : (
            <div className="space-y-6 max-w-4xl mx-auto">
              {filteredJobs.map((job) => (
                <Link
                  key={job.id}
                  href={`/careers/${job.slug}`}
                  className="block bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all group"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Posted {new Date(job.postedDate).toLocaleDateString()}
                        </span>
                      </div>

                      <p className="text-muted-foreground line-clamp-2">{job.description}</p>
                    </div>

                    <div className="flex-shrink-0">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        {String(job.type).replace(/_/g, " ")}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
