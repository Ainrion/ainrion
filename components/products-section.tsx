"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, GraduationCap, Building2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const products = [
  {
    name: "Riven LMS",
    tagline: "The Future of Learning Management",
    description:
      "Empower educational institutions with our comprehensive SaaS LMS platform. Streamline teaching, enhance student engagement, and drive academic success.",
    icon: GraduationCap,
    link: "https://riven.ainrion.com",
    gradient: "from-primary to-secondary",
    image: "/abstract-digital-tech-pattern-dark.jpg",
  },
  {
    name: "Yuzen",
    tagline: "Smart Company Management",
    description:
      "Company management platform focusing on catering needs of Startups and SMEs. Streamline operations, boost productivity, and scale with confidence.",
    icon: Building2,
    link: "https://yuzen.ainrion.com",
    gradient: "from-secondary to-accent",
    image: "/tech-abstract.jpg",
  },
]

function ProductCard({ product, index }: { product: (typeof products)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const Icon = product.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
      className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
      />

      <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={`${product.name} Dashboard`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
      </div>

      <div className="relative p-6 sm:p-8">
        <motion.div
          className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
        </motion.div>

        <h3 className="text-xl sm:text-2xl font-bold mb-2">{product.name}</h3>
        <p className="text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">{product.tagline}</p>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">{product.description}</p>

        <motion.a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary font-medium"
          whileHover={{ gap: "0.75rem" }}
          transition={{ duration: 0.2 }}
        >
          Visit Product
          <ExternalLink className="w-4 h-4" />
        </motion.a>
      </div>
    </motion.div>
  )
}

export function ProductsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4">Featured Products</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Innovative solutions designed to transform industries and empower organizations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-center"
        >
          <Link href="/products">
            <Button size="lg" variant="outline" className="gap-2 group bg-transparent">
              View All Products
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
