'use client';

import { motion } from 'framer-motion';
import { 
  Search, 
  PenTool, 
  Layers, 
  BarChart,
  ArrowRight
} from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Discovery",
      description: "We start by understanding your business needs, challenges, and objectives through in-depth consultation.",
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Strategy",
      description: "Our team develops a tailored strategy and roadmap aligned with your business goals.",
      color: "from-green-500/20 to-green-600/20"
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Implementation",
      description: "We execute the strategy using agile methodologies, ensuring quick wins and continuous improvement.",
      color: "from-orange-500/20 to-orange-600/20"
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Optimization",
      description: "Continuous monitoring and optimization ensure long-term success and ROI.",
      color: "from-purple-500/20 to-purple-600/20"
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
          <span className="text-[#d64206] font-medium">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f1f1f] mt-2 mb-4">
            How We Deliver Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven methodology ensures consistent, high-quality results 
            for every project we undertake.
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
          className="relative"
        >
          {/* Connection Lines */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="relative group"
              >
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#d64206] rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center text-[#d64206] mb-4`}>
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#1f1f1f] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>

                  {/* Arrow for larger screens */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-[#d64206]" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;