'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";


const AboutHero = () => {

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="pt-32 pb-20 relative overflow-hidden bg-[#1f1f1f]">
      {/* Background Pattern */}
      <div className="absolute inset-0">
      <motion.div
          animate={{
            backgroundPosition: ['0px 50px', '50px 0px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 opacity-10"
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
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Story
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Founded on a vision to redefine technological possibilities, Ainrion began with a simple idea:
            to merge innovation with practicality.
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              onClick={() => scrollToSection('team-section')}
              className="bg-[#d64206] hover:bg-[#d64206]/90 text-white text-lg px-8 py-6"
            >
              Meet Our Team
            </Button>
            <Button
              onClick={() => scrollToSection('story-mission')}
              variant="outline"
              className="border-white text-[#1f1f1f] hover:bg-white hover:text-[#1f1f1f] text-lg px-8 py-6"
            >
              Our Mission
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          {[
            { number: "2020", label: "Founded" },
            { number: "500+", label: "Projects Completed" },
            { number: "98%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div key={index} className="p-6">
              <div className="text-4xl font-bold text-[#d64206] mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;