"use client"

import { Lightbulb, Rocket, Users } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const features = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "Pioneering new technologies and solutions that push the boundaries of what's possible in the digital landscape.",
    image: "/tech-abstract.jpg",
  },
  {
    number: "02",
    icon: Rocket,
    title: "Rapid Development",
    description:
      "Agile methodologies and cutting-edge tools enable us to bring products from concept to market quickly.",
    image: "/abstract-digital-tech-pattern-dark.jpg",
  },
  {
    number: "03",
    icon: Users,
    title: "User-Centric Design",
    description:
      "Every product is crafted with the end-user in mind, ensuring intuitive experiences and maximum value.",
    image: "/placeholder.jpg",
  },
]

function FeatureCard({ feature, index }: { feature: (typeof features)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const Icon = feature.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300">
        <div className="relative w-full h-48 sm:h-56 overflow-hidden">
          <Image
            src={feature.image || "/placeholder.svg"}
            alt={feature.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-3 sm:gap-4 mb-4">
            <motion.div
              className="text-4xl sm:text-5xl font-bold text-primary"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.3, ease: "backOut" }}
            >
              {feature.number}
            </motion.div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{feature.title}</h3>
          <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4">Our Core Principles</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Building the future through innovation, speed, and user-focused design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.number} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
