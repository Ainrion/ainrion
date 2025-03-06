'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Briefcase,
  Clock,
  MapPin,
  DollarSign,
  Calendar,
  Users,
  CheckCircle,
  ArrowLeft,
  Send
} from 'lucide-react';
import Link from 'next/link';

// This would typically come from your CMS or API
const jobData = {
  title: "Senior Software Engineer",
  department: "Engineering",
  type: "Full-time",
  location: "Tech City, USA (Hybrid)",
  salary: "$120,000 - $180,000",
  experience: "5+ years",
  team: "Core Platform Team",
  postedDate: "2024-02-15",
  overview: `We're looking for a Senior Software Engineer to join our Core Platform team. In this role, you'll be responsible for designing, developing, and maintaining scalable solutions that power our digital transformation services.`,
  responsibilities: [
    "Lead the development of core platform features and services",
    "Collaborate with cross-functional teams to define technical requirements",
    "Mentor junior developers and conduct code reviews",
    "Drive technical decisions and architecture planning",
    "Implement best practices for code quality and testing",
    "Participate in agile ceremonies and technical planning sessions"
  ],
  requirements: [
    "5+ years of experience in software development",
    "Strong expertise in React, Node.js, and modern JavaScript",
    "Experience with cloud platforms (AWS, Azure, or GCP)",
    "Knowledge of microservices architecture and API design",
    "Excellent problem-solving and analytical skills",
    "Strong communication and leadership abilities"
  ],
  niceToHave: [
    "Experience with TypeScript and Next.js",
    "Knowledge of DevOps practices and tools",
    "Contributions to open-source projects",
    "Experience with AI/ML technologies"
  ],
  benefits: [
    "Competitive salary and equity package",
    "Health, dental, and vision insurance",
    "Flexible working hours and location",
    "Professional development budget",
    "Regular team events and activities",
    "Modern equipment and tools"
  ]
};

export default function JobPostingTemplate() {
  const [isApplying, setIsApplying] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Job Header */}
      <section className="bg-[#1f1f1f] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/careers" 
              className="inline-flex items-center text-gray-300 hover:text-white mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Jobs
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {jobData.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-gray-300">
              <div className="flex items-center">
                <Briefcase className="w-5 h-5 mr-2" />
                {jobData.department}
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                {jobData.type}
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                {jobData.location}
              </div>
              <div className="flex items-center">
                <DollarSign className="w-5 h-5 mr-2" />
                {jobData.salary}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2 }
                  }
                }}
                className="space-y-12"
              >
                {/* Overview */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="bg-white p-8 rounded-xl shadow-sm"
                >
                  <h2 className="text-2xl font-bold text-[#1f1f1f] mb-4">Overview</h2>
                  <p className="text-gray-600">{jobData.overview}</p>
                </motion.div>

                {/* Responsibilities */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="bg-white p-8 rounded-xl shadow-sm"
                >
                  <h2 className="text-2xl font-bold text-[#1f1f1f] mb-4">
                    Key Responsibilities
                  </h2>
                  <ul className="space-y-3">
                    {jobData.responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#d64206] mr-3 flex-shrink-0 mt-1" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Requirements */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="bg-white p-8 rounded-xl shadow-sm"
                >
                  <h2 className="text-2xl font-bold text-[#1f1f1f] mb-4">
                    Requirements
                  </h2>
                  <ul className="space-y-3">
                    {jobData.requirements.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#d64206] mr-3 flex-shrink-0 mt-1" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Nice to Have */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="bg-white p-8 rounded-xl shadow-sm"
                >
                  <h2 className="text-2xl font-bold text-[#1f1f1f] mb-4">
                    Nice to Have
                  </h2>
                  <ul className="space-y-3">
                    {jobData.niceToHave.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#d64206] mr-3 flex-shrink-0 mt-1" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Benefits */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="bg-white p-8 rounded-xl shadow-sm"
                >
                  <h2 className="text-2xl font-bold text-[#1f1f1f] mb-4">
                    Benefits & Perks
                  </h2>
                  <ul className="space-y-3">
                    {jobData.benefits.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#d64206] mr-3 flex-shrink-0 mt-1" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Quick Info */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-[#1f1f1f] mb-4">Quick Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-[#d64206] mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Team</p>
                      <p className="text-gray-900">{jobData.team}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-[#d64206] mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Posted On</p>
                      <p className="text-gray-900">{jobData.postedDate}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Application Form */}
              {!isApplying ? (
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Button
                    onClick={() => setIsApplying(true)}
                    className="w-full bg-[#d64206] hover:bg-[#d64206]/90 text-white"
                  >
                    Apply for this Position
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold text-[#1f1f1f] mb-4">
                    Apply Now
                  </h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <Input type="text" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <Input type="tel" placeholder="Your phone number" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Resume/CV
                      </label>
                      <Input type="file" accept=".pdf,.doc,.docx" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Cover Letter
                      </label>
                      <textarea
                        className="w-full min-h-[150px] px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d64206] focus:border-transparent"
                        placeholder="Tell us why you're interested in this position..."
                      />
                    </div>
                    <Button 
                      type="submit"
                      className="w-full bg-[#d64206] hover:bg-[#d64206]/90 text-white"
                    >
                      Submit Application
                      <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}