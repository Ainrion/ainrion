'use client';

import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Clock,
  Award
} from 'lucide-react';

const CaseStudiesHero = () => {
  const stats = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      number: "40%",
      label: "Average Efficiency Increase"
    },
    {
      icon: <Users className="w-6 h-6" />,
      number: "500+",
      label: "Clients Transformed"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      number: "30%",
      label: "Time Saved"
    },
    {
      icon: <Award className="w-6 h-6" />,
      number: "95%",
      label: "Client Satisfaction"
    }
  ];

  return (
    <section className="pt-32 pb-20 bg-[#1f1f1f] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(45deg, #d64206 25%, transparent 25%), linear-gradient(-45deg, #d64206 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #d64206 75%), linear-gradient(-45deg, transparent 75%, #d64206 75%)',
            backgroundSize: '20px 20px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Success Stories
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we&apos;ve helped businesses transform their operations and achieve 
            remarkable results through innovative technology solutions.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="relative group"
            >
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-[#d64206]/10 rounded-lg flex items-center justify-center text-[#d64206] mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-300">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesHero;