'use client';

import { motion } from 'framer-motion';
import caseStudies from '@/data/case-studies';
import { notFound } from 'next/navigation';

export default function CaseStudyHeroPage({ caseStudyID }: { caseStudyID: string }) {

  // converting the caseStudyID to a number
  const id = parseInt(caseStudyID, 10);
  const caseStudy = caseStudies.find((caseStudy) => caseStudy.id === id);

  if (!caseStudy) {
      return notFound();
  }
  
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
            backgroundImage:
              'linear-gradient(45deg, #d64206 25%, transparent 25%), linear-gradient(-45deg, #d64206 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #d64206 75%), linear-gradient(-45deg, transparent 75%, #d64206 75%)',
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-widest text-[#d64206] mb-2">{caseStudy.category}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{caseStudy.title}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{caseStudy.description}</p>
        </motion.div>
      </div>
    </section>
  );


};
