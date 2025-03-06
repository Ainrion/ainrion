// src/components/home/ServicesSection.tsx
'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import {
  RefreshCw,
  Database,
  Cloud,
  Brain,
  ArrowRight
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: 'digital-transformation',
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Digital Transformation",
      description: "Embrace change with strategies that integrate the latest digital tools for streamlined operations.",
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      id: 'data-analytics',
      icon: <Database className="w-6 h-6" />,
      title: "Data Analytics",
      description: "Unlock the hidden potential in your data with actionable insights that fuel smarter decisions.",
      color: "from-green-500/20 to-teal-500/20"
    },
    {
      id: 'cloud-solutions',
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Solutions",
      description: "Scale with confidence using secure, flexible cloud services designed to keep you ahead.",
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      id: 'ai-automation',
      icon: <Brain className="w-6 h-6" />,
      title: "AI & Automation",
      description: "Revolutionize your workflows with intelligent automation that minimizes errors and maximizes productivity.",
      color: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#d64206] font-medium">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f1f1f] mt-2 mb-4">
            Comprehensive Solutions for
            <br />
            Digital Excellence
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform your business with our suite of innovative services designed to
            drive growth and optimize operations.
          </p>
        </motion.div>

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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="relative group"
            >
              <div className="h-full p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                <div className="relative">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br ${service.color}`}>
                    <div className="text-[#d64206]">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#1f1f1f] mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>

                  <Link href={`/services/${service.id}`}>
                    <Button
                      variant="ghost"
                      className="group/btn text-[#d64206] hover:text-[#d64206] hover:bg-[#d64206]/10"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>

                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;