/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Clock, DollarSign } from 'lucide-react';

const FeaturedCaseStudy = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        >
          {/* Section Header */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-center mb-16"
          >
            <span className="text-[#d64206] font-medium">Featured Case Study</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1f1f1f] mt-2 mb-4">
              Retail Revolution: A Digital Transformation Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we helped a major retail chain achieve a 40% increase in operational 
              efficiency through data analytics and automation.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
              className="relative"
            >
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/api/placeholder/800/600"
                  alt="Retail Case Study"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Stats Overlay */}
              <div className="absolute -bottom-6 left-6 right-6 grid grid-cols-3 gap-4">
                {[
                  { icon: <TrendingUp className="w-5 h-5" />, value: "40%", label: "Efficiency Increase" },
                  { icon: <Clock className="w-5 h-5" />, value: "50%", label: "Time Saved" },
                  { icon: <DollarSign className="w-5 h-5" />, value: "2.5M", label: "Cost Savings" }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-4 text-center"
                  >
                    <div className="w-10 h-10 bg-[#d64206]/10 rounded-full flex items-center justify-center text-[#d64206] mx-auto mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-xl font-bold text-[#1f1f1f]">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 }
              }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-[#1f1f1f] mb-4">
                  Project Overview
                </h3>
                <p className="text-gray-600">
                  A major retail chain partnered with Ainrion to overhaul its legacy systems. 
                  By implementing our state-of-the-art data analytics and automation solutions, 
                  the client achieved remarkable improvements in efficiency and customer satisfaction.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#1f1f1f] mb-4">
                  Key Outcomes
                </h3>
                <ul className="space-y-4">
                  {[
                    "Streamlined supply chain operations reducing inventory costs by 30%",
                    "Enhanced customer experience through real-time data insights",
                    "Automated routine tasks saving 1000+ work hours monthly",
                    "Improved decision-making with predictive analytics"
                  ].map((outcome, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-[#d64206]/10 rounded-full flex items-center justify-center text-[#d64206] mt-1 mr-3 flex-shrink-0">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                      <span className="text-gray-600">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                className="bg-[#d64206] hover:bg-[#d64206]/90 text-white"
              >
                Read Full Case Study
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;