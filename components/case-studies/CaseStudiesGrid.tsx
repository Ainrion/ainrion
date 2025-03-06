/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Activity, BarChart } from 'lucide-react';
import Link from 'next/link';

const caseStudies = [
  {
    id: 1,
    title: "Healthcare Innovation",
    category: "Healthcare",
    image: "healthcare.jpg", // /api/placeholder/600/400
    description: "Implementing AI-driven diagnostics system resulting in 45% faster patient care",
    results: {
      metric1: "45% Faster",
      metric2: "98% Accuracy",
      metric3: "$2M Saved"
    }
  },
  {
    id: 2,
    title: "FinTech Transformation",
    category: "Finance",
    image: "/api/placeholder/600/400",
    description: "Modernizing legacy banking systems with cloud-native solutions",
    results: {
      metric1: "60% Faster",
      metric2: "99.9% Uptime",
      metric3: "3x Scalability"
    }
  },
  {
    id: 3,
    title: "Manufacturing Excellence",
    category: "Manufacturing",
    image: "/api/placeholder/600/400",
    description: "Smart factory implementation reducing operational costs by 35%",
    results: {
      metric1: "35% Savings",
      metric2: "50% Less Waste",
      metric3: "2x Output"
    }
  },
  {
    id: 4,
    title: "E-commerce Growth",
    category: "Retail",
    image: "/api/placeholder/600/400",
    description: "Building scalable digital marketplace handling millions of transactions",
    results: {
      metric1: "300% Growth",
      metric2: "0.1s Response",
      metric3: "99% Satisfaction"
    }
  },
  {
    id: 5,
    title: "Logistics Optimization",
    category: "Transportation",
    image: "/api/placeholder/600/400",
    description: "AI-powered route optimization reducing delivery times by 40%",
    results: {
      metric1: "40% Faster",
      metric2: "30% Fuel Saved",
      metric3: "2x Deliveries"
    }
  },
  {
    id: 6,
    title: "EdTech Revolution",
    category: "Education",
    image: "/api/placeholder/600/400",
    description: "Digital learning platform serving 1M+ students globally",
    results: {
      metric1: "1M+ Users",
      metric2: "95% Completion",
      metric3: "4.8/5 Rating"
    }
  }
];

const categories = ['All', 'Healthcare', 'Finance', 'Manufacturing', 'Retail', 'Transportation', 'Education'];

const CaseStudiesGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCaseStudies = activeCategory === 'All'
    ? caseStudies
    : caseStudies.filter(study => study.category === activeCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`${activeCategory === category
                    ? 'bg-[#d64206] text-white hover:bg-[#d64206]/90'
                    : 'text-gray-600 hover:text-[#d64206]'
                  }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Case Studies Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCaseStudies.map((study) => (
              <motion.div
                key={study.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative h-48">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-[#d64206]">
                      {study.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1f1f1f] mb-2">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {study.description}
                  </p>

                  {/* Results Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <TrendingUp className="w-5 h-5 text-[#d64206] mx-auto mb-1" />
                      <div className="text-sm font-medium text-[#1f1f1f]">
                        {study.results.metric1}
                      </div>
                    </div>
                    <div className="text-center">
                      <Activity className="w-5 h-5 text-[#d64206] mx-auto mb-1" />
                      <div className="text-sm font-medium text-[#1f1f1f]">
                        {study.results.metric2}
                      </div>
                    </div>
                    <div className="text-center">
                      <BarChart className="w-5 h-5 text-[#d64206] mx-auto mb-1" />
                      <div className="text-sm font-medium text-[#1f1f1f]">
                        {study.results.metric3}
                      </div>
                    </div>
                  </div>

                  <Link href={`/case-studies/${study.id}`}>
                    <Button
                      className="w-full bg-white hover:bg-gray-50 text-[#d64206] border border-[#d64206]"
                    >
                      View Case Study
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CaseStudiesGrid;