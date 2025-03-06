'use client';

import { motion } from 'framer-motion';
import { Flag, Globe, Award, TrendingUp } from 'lucide-react';

const MilestonesSection = () => {
  const milestones = [
    {
      year: 2020,
      title: "Founded with Vision",
      description: "Founded with a bold vision for digital transformation, establishing our core mission and values.",
      icon: <Flag className="w-6 h-6" />
    },
    {
      year: 2021,
      title: "Platform Launch",
      description: "Launched our flagship digital transformation platform, empowering clients worldwide.",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      year: 2022,
      title: "Global Expansion",
      description: "Expanded operations globally, establishing new regional offices and partnerships.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      year: 2023,
      title: "Industry Recognition",
      description: "Recognized as a leading innovator in tech solutions by industry experts.",
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#d64206] font-medium">Our Journey</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f1f1f] mt-2 mb-4">
            Key Milestones
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tracking our growth and achievements as we continue to innovate and expand.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.3 }
              }
            }}
            className="relative space-y-24"
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <span className="text-[#d64206] font-bold text-2xl block mb-2">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-bold text-[#1f1f1f] mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Icon */}
                <div className="relative flex items-center justify-center w-16 h-16 bg-[#d64206] rounded-full shadow-lg">
                  <div className="text-white">
                    {milestone.icon}
                  </div>
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;