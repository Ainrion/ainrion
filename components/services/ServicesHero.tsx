'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ServicesHero = () => {
  return (
    <section className="pt-32 pb-20 bg-[#1f1f1f] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px'],
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
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive digital solutions tailored to transform your business and drive innovation.
          </p>
          <Link href="/contact">
            <Button
              className="bg-[#d64206] hover:bg-[#d64206]/90 text-white px-8 py-6 text-lg"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>

        {/* Service Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: "200+", label: "Active Clients" },
            { number: "95%", label: "Success Rate" },
            { number: "24/7", label: "Support Available" },
            { number: "50+", label: "Expert Team Members" },
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

export default ServicesHero;