/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Rocket } from 'lucide-react';

const StoryMission = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Innovation First",
      description: "Pushing boundaries with cutting-edge solutions"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client Success",
      description: "Dedicated to achieving your business goals"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Creative Solutions",
      description: "Unique approaches to complex challenges"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Future Focus",
      description: "Always looking ahead to what's next"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl font-bold text-[#1f1f1f] mb-6">Our Journey</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Our journey started with a dedicated team of experts passionate about solving 
                complex challenges and delivering tangible results. Today, we&apos;re proud to stand 
                at the forefront of digital transformation.
              </p>
              <p>
                With each project, we&apos;ve grown not just in size but in our understanding of 
                what businesses need to thrive in the digital age. Our experience spans 
                industries and continents, giving us unique insights into the challenges 
                of modern business.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="relative"
          >
            <div className="aspect-video rounded-xl overflow-hidden">
              <img 
                src="/api/placeholder/600/400" 
                alt="Ainrion Journey" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Mission Section */}
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
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl font-bold text-[#1f1f1f] mb-6"
          >
            Our Mission
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            At Ainrion, our mission is clear: empower businesses through innovative technology 
            that drives real-world results. We believe in fostering growth, streamlining operations, 
            and creating a future where technology and business success go hand in hand.
          </motion.p>
        </motion.div>

        {/* Values Grid */}
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
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-[#d64206]/10 rounded-lg flex items-center justify-center mb-4 text-[#d64206]">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1f1f1f] mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StoryMission;