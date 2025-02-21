/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';
import { 
  RefreshCw, 
  Database, 
  Cloud, 
  Brain,
  Check,
  ArrowRight 
} from 'lucide-react';
import { Button } from "@/components/ui/button";

const services = [
  {
    id: 'digital-transformation',
    icon: <RefreshCw className="w-8 h-8" />,
    title: "Digital Transformation",
    description: "Transform your business with our end-to-end digital transformation solutions. We integrate modern technologies to streamline processes, enhance customer experiences, and drive sustainable growth.",
    benefits: [
      "Process automation and optimization",
      "Enhanced customer experience",
      "Improved operational efficiency",
      "Data-driven decision making"
    ],
    features: [
      "Legacy system modernization",
      "Digital workflow implementation",
      "Change management support",
      "Technology integration services"
    ],
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    id: 'data-analytics',
    icon: <Database className="w-8 h-8" />,
    title: "Data Analytics",
    description: "Turn raw data into your most valuable asset. Our analytics services provide deep insights that help you make informed decisions, optimize operations, and stay ahead of the competition.",
    benefits: [
      "Actionable business insights",
      "Predictive analytics",
      "Performance optimization",
      "Competitive advantage"
    ],
    features: [
      "Custom dashboard development",
      "Real-time analytics",
      "Machine learning integration",
      "Data visualization"
    ],
    color: "from-green-500/20 to-teal-500/20"
  },
  {
    id: 'cloud-solutions',
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Solutions",
    description: "Experience secure, scalable, and flexible cloud services that grow with your business. Our cloud solutions are designed to enhance performance while ensuring data security and compliance.",
    benefits: [
      "Improved scalability",
      "Cost optimization",
      "Enhanced security",
      "Business continuity"
    ],
    features: [
      "Cloud migration services",
      "Multi-cloud management",
      "Security implementation",
      "Performance optimization"
    ],
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    id: 'ai-automation',
    icon: <Brain className="w-8 h-8" />,
    title: "AI & Automation",
    description: "Leverage the power of artificial intelligence to automate routine tasks and boost efficiency. Our AI-driven solutions not only reduce costs but also improve accuracy across your operations.",
    benefits: [
      "Increased productivity",
      "Cost reduction",
      "Error minimization",
      "Faster processing"
    ],
    features: [
      "Process automation",
      "AI model development",
      "Natural language processing",
      "Computer vision solutions"
    ],
    color: "from-purple-500/20 to-pink-500/20"
  }
];

const ServiceDetails = () => {
  return (
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
          className="space-y-24"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="space-y-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-[#d64206]`}>
                  {service.icon}
                </div>
                
                <h2 className="text-3xl font-bold text-[#1f1f1f]">
                  {service.title}
                </h2>
                
                <p className="text-gray-600 text-lg">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#1f1f1f] mb-4">Benefits</h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <Check className="w-5 h-5 text-[#d64206] mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#1f1f1f] mb-4">Features</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <Check className="w-5 h-5 text-[#d64206] mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button 
                  className="bg-[#d64206] hover:bg-[#d64206]/90 text-white mt-6"
                >
                  Learn More 
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>

              {/* Image/Illustration */}
              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden bg-gray-100">
                  <img 
                    src={`/api/placeholder/600/400`}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetails;