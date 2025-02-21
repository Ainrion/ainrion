// src/components/home/IntroductionSection.tsx
'use client';

import { motion } from 'framer-motion';
import { Rocket, Zap, Target } from 'lucide-react';

const IntroductionSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const features = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Innovative Solutions",
      description: "Cutting-edge technology tailored to your needs"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategic Approach",
      description: "Data-driven strategies for optimal results"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Rapid Deployment",
      description: "Quick implementation with lasting impact"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-block p-2 bg-[#d64206]/10 rounded-lg mb-4"
          >
            <span className="text-[#d64206] font-medium">Welcome to Ainrion</span>
          </motion.div>
          
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-[#1f1f1f] mb-6"
          >
            Where Innovative Thinking Meets
            <br />
            Cutting-Edge Technology
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-gray-600 text-lg"
          >
            We&lsquo;re dedicated to empowering businesses through tailored solutions that drive growth,
            efficiency, and success in an ever-evolving digital landscape.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-[#d64206]/10 rounded-lg flex items-center justify-center mb-4 text-[#d64206]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1f1f1f] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IntroductionSection;