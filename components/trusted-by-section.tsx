"use client"

import { motion } from "framer-motion"

const clients = [
  { name: "TechCorp", logo: "TC" },
  { name: "EduVerse", logo: "EV" },
  { name: "InnovateLabs", logo: "IL" },
  { name: "FutureWorks", logo: "FW" },
  { name: "DataStream", logo: "DS" },
  { name: "CloudNine", logo: "C9" },
  { name: "SmartCity", logo: "SC" },
  { name: "NextGen", logo: "NG" },
]

export function TrustedBySection() {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-primary"
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground"
          >
            Organizations worldwide rely on our innovative solutions
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="group relative">
                <div className="w-32 h-32 bg-card border border-border rounded-2xl flex items-center justify-center hover:border-primary/50 transition-all group-hover:scale-105">
                  <span className="text-2xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                    {client.logo}
                  </span>
                </div>
                <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
