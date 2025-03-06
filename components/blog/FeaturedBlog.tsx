'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bookmark, MessageCircle, Heart } from 'lucide-react';
import Image from 'next/image';

const FeaturedBlog = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1,
            transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Section Header */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-center mb-16"
          >
            <span className="text-[#d64206] font-medium">Featured Blog</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1f1f1f] mt-2 mb-4">
              The Future of AI in Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exploring how artificial intelligence is reshaping industries, improving efficiency, and driving innovation.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Right Column - Content (Text First) */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-[#1f1f1f] mb-4">Key Insights</h3>
                <ul className="space-y-4">
                  {[
                    "AI-driven automation boosts productivity by 30%",
                    "Ethical AI: Balancing innovation with responsibility",
                    "The impact of AI on the future job market",
                    "How businesses can leverage AI for growth",
                  ].map((point, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-[#d64206]/10 rounded-full flex items-center justify-center text-[#d64206] mt-1 mr-3 flex-shrink-0">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button className="bg-[#d64206] hover:bg-[#d64206]/90 text-white">
                Read Full Blog Post
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>

            {/* Left Column - Image */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              className="relative"
            >
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/api/placeholder/800/600"
                  width={800}
                  height={600}
                  alt="AI Blog Feature"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stats Overlay */}
              <div className="absolute -bottom-6 left-6 right-6 grid grid-cols-3 gap-4">
                {[
                  { icon: <Bookmark className="w-5 h-5" />, value: "2.3K", label: "Saves" },
                  { icon: <MessageCircle className="w-5 h-5" />, value: "1.2K", label: "Comments" },
                  { icon: <Heart className="w-5 h-5" />, value: "4.8K", label: "Likes" },
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedBlog;
