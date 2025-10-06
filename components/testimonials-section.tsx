"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    content:
      "Ainrion's Riven LMS transformed our corporate training program. The platform is intuitive, powerful, and has significantly improved our employee engagement and learning outcomes.",
    rating: 5,
    company: "TechCorp",
  },
  {
    name: "Michael Chen",
    role: "CEO, EduVerse",
    content:
      "Working with Ainrion has been exceptional. Their innovative approach to technology and commitment to excellence sets them apart. Yuzen has streamlined our entire operation.",
    rating: 5,
    company: "EduVerse",
  },
  {
    name: "Emily Rodriguez",
    role: "Director of Innovation, FutureWorks",
    content:
      "The team at Ainrion doesn't just deliver products—they deliver solutions. Their deep understanding of emerging technologies like AI and blockchain is impressive.",
    rating: 5,
    company: "FutureWorks",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground"
          >
            Real feedback from organizations we've helped transform
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all group"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-primary/20 mb-4" />

              <p className="text-muted-foreground leading-relaxed mb-6">{testimonial.content}</p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
