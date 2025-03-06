'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Briefcase,
  Users,
  Coffee,
  Globe,
  Heart,
  Brain,
  Zap,
  ArrowRight,
  Clock,
  MapPin
} from 'lucide-react';

// Job listings data
const jobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Tech City, USA",
    description: "Join our core engineering team to build next-generation digital solutions.",
    requirements: [
      "8+ years of software development experience",
      "Strong background in cloud technologies",
      "Experience with React, Node.js, and modern frameworks",
      "Track record of leading technical projects"
    ]
  },
  {
    id: 2,
    title: "Data Scientist",
    department: "Analytics",
    type: "Full-time",
    location: "Remote",
    description: "Use your expertise to extract insights from data and drive strategic decision-making.",
    requirements: [
      "MS/PhD in Computer Science, Statistics, or related field",
      "Experience with machine learning and AI",
      "Proficiency in Python and data visualization",
      "Strong analytical and problem-solving skills"
    ]
  },
  {
    id: 3,
    title: "Project Manager",
    department: "Operations",
    type: "Full-time",
    location: "London, UK",
    description: "Lead transformative projects from conception to completion.",
    requirements: [
      "5+ years of project management experience",
      "PMP certification preferred",
      "Experience with Agile methodologies",
      "Strong leadership and communication skills"
    ]
  }
];

// Benefits data
const benefits = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Health & Wellness",
    description: "Comprehensive medical, dental, and vision coverage for you and your family"
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: "Work-Life Balance",
    description: "Flexible working hours and remote work options to suit your lifestyle"
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Learning & Development",
    description: "Continuous learning opportunities and professional development budget"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Opportunities",
    description: "Work with international teams and potential for global mobility"
  }
];

// Culture values
const values = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Innovation First",
    description: "We embrace new ideas and technologies to solve complex challenges"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Collaborative Spirit",
    description: "Success comes from working together and sharing knowledge"
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "People-Centric",
    description: "We prioritize our team's growth, wellbeing, and success"
  }
];

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  
  // Filter jobs based on search and department
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#1f1f1f] relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #d64206 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Build your career at Ainrion while helping businesses transform through 
              innovative technology solutions.
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search for jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1f1f1f] mb-4">
                Our Culture
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience a vibrant work environment that values creativity, 
                collaboration, and continuous learning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="bg-gray-50 p-8 rounded-xl"
                >
                  <div className="w-12 h-12 bg-[#d64206]/10 rounded-lg flex items-center justify-center text-[#d64206] mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1f1f1f] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1f1f1f] mb-4">
                Benefits & Perks
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer competitive benefits to support your professional and personal growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <div className="w-12 h-12 bg-[#d64206]/10 rounded-lg flex items-center justify-center text-[#d64206] mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1f1f1f] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1f1f1f] mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Find your next opportunity to make an impact.
              </p>

              <div className="flex flex-wrap gap-4 justify-center mb-12">
                {['All', 'Engineering', 'Analytics', 'Operations'].map((dept) => (
                  <Button
                    key={dept}
                    variant={selectedDepartment === dept ? "default" : "outline"}
                    onClick={() => setSelectedDepartment(dept)}
                    className={`${
                      selectedDepartment === dept
                        ? 'bg-[#d64206] text-white hover:bg-[#d64206]/90'
                        : 'text-gray-600 hover:text-[#d64206]'
                    }`}
                  >
                    {dept}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#1f1f1f] mb-2">
                        {job.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {job.department}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {job.location}
                        </div>
                      </div>
                    </div>
                    <Button 
                      className="bg-[#d64206] hover:bg-[#d64206]/90 text-white"
                    >
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Apply CTA Section */}
      <section className="py-20 bg-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Don&apos;t See the Right Fit?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We&apos;re always looking for talented individuals. Send us your resume and we&lsquo;ll 
              keep you in mind for future opportunities.
            </p>
            <Button 
              className="bg-[#d64206] hover:bg-[#d64206]/90 text-white px-8 py-6 text-lg"
            >
              Submit Your Resume
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}