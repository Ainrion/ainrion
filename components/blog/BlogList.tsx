/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const blogs = [
  {
    id: 1,
    title: "The Future of AI in Healthcare",
    category: "Technology",
    image: "/api/placeholder/800/500",
    excerpt: "AI is transforming healthcare with faster diagnoses, personalized treatments, and predictive analytics...",
    author: "Jane Doe",
    date: "Feb 25, 2025",
    readingTime: "5 min read"
  },
  {
    id: 2,
    title: "10 UX Principles for Better Web Design",
    category: "Design",
    image: "/api/placeholder/600/400",
    excerpt: "Good UX is not about aesthetics alone but ensuring usability, accessibility, and efficiency...",
    author: "John Smith",
    date: "Mar 1, 2025",
    readingTime: "7 min read"
  },
  {
    id: 3,
    title: "Scaling Your Startup with Cloud Solutions",
    category: "Business",
    image: "/api/placeholder/600/400",
    excerpt: "Cloud computing allows startups to scale operations efficiently without heavy infrastructure costs...",
    author: "Lisa Wong",
    date: "Feb 18, 2025",
    readingTime: "6 min read"
  },
  {
    id: 4,
    title: "Cybersecurity Trends in 2025",
    category: "Security",
    image: "/api/placeholder/600/400",
    excerpt: "As cyber threats evolve, businesses must adopt zero-trust security, AI-driven threat detection, and more...",
    author: "Alex Carter",
    date: "Mar 3, 2025",
    readingTime: "4 min read"
  }
];

const categories = ['All', 'Technology', 'Design', 'Business', 'Security'];

const BlogList = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredBlogs = activeCategory === 'All'
    ? blogs
    : blogs.filter(blog => blog.category === activeCategory);

  return (
    <section className="py-20 bg-white">
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

        {/* Blog List Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {filteredBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-transform duration-300 ${
                  index === 0 ? "lg:col-span-2" : "" // Make the first blog full-width
                }`}
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-64 object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-sm font-medium text-[#d64206] mb-2">
                    {blog.category}
                  </div>

                  <h3 className="text-2xl font-bold text-[#1f1f1f] mb-3">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {blog.excerpt}
                  </p>

                  {/* Author & Date */}
                  <div className="flex items-center text-gray-500 text-sm mb-6">
                    <span className="mr-3">{blog.author}</span>
                    <span>• {blog.date}</span>
                    <span className="ml-3">{blog.readingTime}</span>
                  </div>

                  <Link href={`/blog/${blog.id}`}>
                    <Button
                      className="w-full bg-[#d64206] hover:bg-[#d64206]/90 text-white"
                    >
                      Read More
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

export default BlogList;
