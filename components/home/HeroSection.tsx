// src/components/home/HeroSection.tsx
'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[#1f1f1f]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#d64206]/10 to-transparent" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at center, #d64206 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h1
            variants={fadeIn}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Innovate the Future
            <span className="text-[#d64206]"> with Ainrion</span>
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12"
          >
            Pioneering next-generation technology to transform your business
            into a digital powerhouse.
          </motion.p>

          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/services">
              <Button
                size="lg"
                className="bg-[#d64206] hover:bg-[#d64206]/90 text-white px-8 py-6 text-lg"
              >
                Discover Our Solutions
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>

            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-[#1f1f1f] hover:bg-white hover:text-[#d64206] px-8 py-6 text-lg"
              >
                Learn More
              </Button>
            </Link>
          </motion.div>

          {/* Animated Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white rounded-full p-1">
              <div className="w-1 h-2 bg-white rounded-full mx-auto" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;