/* eslint-disable @next/next/no-img-element */
// src/components/home/TestimonialsSection.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Ainrion's innovative solutions completely transformed our operational efficiency. Their approach was both strategic and personable, making us feel supported every step of the way.",
    author: "Sarah Chen",
    position: "CTO, TechFlex Solutions",
    image: "placeholder_testimony.jpeg"  // /api/placeholder/64/64 
  },
  {
    id: 2,
    quote: "Working with Ainrion has been a game-changer for our digital transformation journey. Their expertise in AI and automation helped us achieve remarkable results.",
    author: "Michael Rodriguez",
    position: "CEO, InnovateNow",
    image: "placeholder_testimony.jpeg"  // /api/placeholder/64/64
  },
  {
    id: 3,
    quote: "The team at Ainrion consistently delivers excellence. Their cloud solutions have helped us scale efficiently while maintaining top-notch security.",
    author: "Emily Thompson",
    position: "Director of Operations, CloudScale",
    image: "placeholder_testimony.jpeg"  // /api/placeholder/64/64
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setIsAutoPlaying(false);
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#d64206] font-medium">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f1f1f] mt-2">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="relative">
          <div className="relative h-[300px] flex items-center justify-center">  {/* added this div to fix the uneccessary expansion of div */}
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute w-full"
              >
                <div className="max-w-4xl mx-auto text-center">
                  <div className="mb-8 flex justify-center">
                    <div className="w-16 h-16 bg-[#d64206]/10 rounded-full flex items-center justify-center">
                      <Quote className="w-8 h-8 text-[#d64206]" />
                    </div>
                  </div>

                  <p className="text-xl md:text-2xl text-gray-700 mb-8 italic">
                    {testimonials[currentIndex].quote}
                  </p>

                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].author}
                      className="w-16 h-16 rounded-full"
                    />
                    <div className="text-left">
                      <h4 className="font-bold text-[#1f1f1f]">
                        {testimonials[currentIndex].author}
                      </h4>
                      <p className="text-gray-600">
                        {testimonials[currentIndex].position}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>


          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between items-center px-4 z-10">  {/* added z-10 to fix the button not showing */}
            <button
              onClick={() => paginate(-1)}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[#d64206] w-6' : 'bg-gray-300'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;