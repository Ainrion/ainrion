'use client';

import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: "Aditya Narayan",
      position: "CEO",
      bio: "A visionary leader committed to turning bold ideas into actionable solutions.",
      image: "/api/placeholder/400/400",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Jane Doe",
      position: "CTO",
      bio: "The technical genius behind our cutting-edge platforms, always pushing boundaries.",
      image: "/api/placeholder/400/400",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "John Smith",
      position: "CFO",
      bio: "Ensuring financial strength and strategic investments fuel our growth.",
      image: "/api/placeholder/400/400",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#d64206] font-medium">Our Team</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f1f1f] mt-2 mb-4">
            Meet the Innovators
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our leadership team brings together decades of experience in technology, 
            innovation, and business transformation.
          </p>
        </motion.div>

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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-xl bg-white shadow-lg">
                <div className="aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1f1f1f] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#d64206] font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {member.bio}
                  </p>
                  
                  <div className="flex space-x-4">
                    <a
                      href={member.social.linkedin}
                      className="text-gray-400 hover:text-[#d64206] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="text-gray-400 hover:text-[#d64206] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Join the Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-[#1f1f1f] mb-4">
            Join Our Team
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for 
            innovation and excellence. Check out our current openings.
          </p>
          <a
            href="/careers"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#d64206] hover:bg-[#d64206]/90 transition-colors"
          >
            View Open Positions
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;