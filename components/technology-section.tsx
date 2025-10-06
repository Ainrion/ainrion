"use client"

import { Brain, Blocks, Cpu, Cloud } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const technologies = [
  {
    name: "Artificial Intelligence",
    icon: Brain,
    description: "Machine learning and AI-powered solutions",
    image: "/artificial-intelligence-neural-network--ai-brain--.jpg",
  },
  {
    name: "Blockchain",
    icon: Blocks,
    description: "Decentralized and secure systems",
    image: "/blockchain-network--distributed-ledger--crypto-tec.jpg",
  },
  {
    name: "Internet of Things",
    icon: Cpu,
    description: "Connected devices and smart systems",
    image: "/iot-connected-devices--smart-home-technology--sens.jpg",
  },
  {
    name: "Cloud Computing",
    icon: Cloud,
    description: "Scalable cloud-native applications",
    image: "/cloud-computing-infrastructure--data-centers--scal.jpg",
  },
]

function TechnologyCard({ tech, index }: { tech: (typeof technologies)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const Icon = tech.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 group"
    >
      <div className="relative w-full h-32 sm:h-40 overflow-hidden">
        <Image
          src={tech.image || "/placeholder.svg"}
          alt={tech.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
      </div>

      <div className="p-4 sm:p-6 text-center">
        <motion.div
          className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
          whileHover={{ scale: 1.15, rotate: 10 }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
        </motion.div>
        <h3 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2">{tech.name}</h3>
        <p className="text-xs sm:text-sm text-muted-foreground">{tech.description}</p>
      </div>
    </motion.div>
  )
}

export function TechnologySection() {
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4">Technology Focus</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Leveraging cutting-edge technologies to build the future
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {technologies.map((tech, index) => (
            <TechnologyCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
