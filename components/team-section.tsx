"use client"

import { motion } from "framer-motion"
import { Linkedin, Twitter, Mail } from "lucide-react"

const team = [
  {
    name: "Aditya Narayan",
    role: "Chief Executive Officer",
    bio: "Visionary leader driving innovation and technological advancement at Ainrion",
    initials: "AN",
  },
  {
    name: "Jai Praksh Narayan",
    role: "Chief Technology Officer",
    bio: "Technology expert leading product development and engineering excellence",
    initials: "JN",
  },
]

export function TeamSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Meet Our Leadership Team</h2>
          <p className="text-muted-foreground text-lg">The innovators driving Ainrion's vision forward</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-28 h-28 bg-gradient-to-br from-primary via-primary to-primary/70 rounded-full flex items-center justify-center text-3xl font-bold text-primary-foreground mb-6 group-hover:scale-110 transition-transform duration-300">
                  {member.initials}
                </div>

                <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">{member.bio}</p>

                <div className="flex gap-3">
                  <button className="w-10 h-10 bg-background border border-border rounded-xl flex items-center justify-center hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-background border border-border rounded-xl flex items-center justify-center hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-background border border-border rounded-xl flex items-center justify-center hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
