"use client"

import { Target, Eye, Heart, Zap, Users, TrendingUp } from "lucide-react"
import { TeamSection } from "@/components/team-section"
import Image from "next/image"
import { motion } from "framer-motion"

const values = [
  {
    icon: Zap,
    title: "Innovation",
    description: "Constantly pushing boundaries and exploring new technological frontiers",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Building strong partnerships and fostering teamwork across all levels",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Maintaining transparency, honesty, and ethical practices in everything we do",
  },
  {
    icon: TrendingUp,
    title: "Excellence",
    description: "Delivering high-quality solutions that exceed expectations",
  },
]

const timeline = [
  {
    year: "2024",
    title: "Global Expansion",
    description: "Expanding our reach to international markets with AI-powered solutions",
  },
  {
    year: "2025",
    title: "Blockchain Integration",
    description: "Launching decentralized solutions for enterprise clients",
  },
  {
    year: "2026",
    title: "IoT Revolution",
    description: "Pioneering smart city and industrial IoT applications",
  },
  {
    year: "2027",
    title: "AI Advancement",
    description: "Next-generation AI products transforming industries",
  },
]

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/50" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="text-sm sm:text-base text-primary font-medium tracking-wide uppercase">
                About Ainrion
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-balance leading-[1.1]"
            >
              Building the future of technology
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 text-balance leading-relaxed"
            >
              A product-based research and development company dedicated to creating innovative technology solutions
              that shape the future
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-border/50"
            >
              <Image
                src="/modern-tech-company-office--innovative-workspace--.jpg"
                alt="Ainrion Team"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Mission & Vision</h2>
            <p className="text-muted-foreground text-lg">Guiding principles that drive our innovation</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500">
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src="/target-mission-goal-achievement--business-strategy.jpg"
                    alt="Our Mission"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Target className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To develop cutting-edge technology products that solve real-world problems and empower organizations
                    to achieve their full potential. We strive to make advanced technology accessible, reliable, and
                    transformative for businesses of all sizes.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500">
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src="/future-vision-telescope--innovation-horizon--forwa.jpg"
                    alt="Our Vision"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Eye className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be a global leader in technology innovation, recognized for creating products that define the
                    future of education, enterprise management, and emerging technologies. We envision a world where
                    technology seamlessly enhances human potential.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Who We Are</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Ainrion is a dynamic team of innovators, engineers, and visionaries passionate about technology. We
                specialize in developing comprehensive SaaS platforms, AI-driven solutions, blockchain applications, and
                IoT systems.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Our products, including Riven LMS and Yuzen, are designed to meet the evolving needs of modern
                organizations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden border border-border/50"
            >
              <Image
                src="/diverse-tech-team-brainstorming--collaborative-wor.jpg"
                alt="Ainrion Team Collaboration"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Future Roadmap */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Future Roadmap</h2>
            <p className="text-muted-foreground text-lg">Our vision for the years ahead</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative flex gap-6 sm:gap-8 items-start"
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center font-bold text-primary-foreground relative z-10 text-sm">
                      {item.year}
                    </div>

                    <div className="flex-1 bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Innovation-Driven Culture</h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              At Ainrion, we foster a culture of creativity, continuous learning, and collaboration. Our team is
              encouraged to experiment, take calculated risks, and push the boundaries of what's possible. We believe
              that the best innovations come from diverse perspectives and open communication.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Join us in building the future. Explore our open positions and become part of a team that's shaping
              tomorrow's technology today.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
