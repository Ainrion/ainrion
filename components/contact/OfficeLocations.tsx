/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const OfficeLocations = () => {
  const offices = [
    {
      city: "Tech City HQ",
      address: "123 Innovation Drive, Tech City, USA",
      phone: "+1 (555) 123-4567",
      email: "techcity@ainrion.com",
      timezone: "EST (UTC-5)",
      image: "/api/placeholder/600/400"
    },
    {
      city: "European Office",
      address: "45 Digital Avenue, Innovation District, London, UK",
      phone: "+44 20 7123 4567",
      email: "europe@ainrion.com",
      timezone: "GMT (UTC+0)",
      image: "/api/placeholder/600/400"
    },
    {
      city: "Asia Pacific Hub",
      address: "789 Tech Tower, Singapore",
      phone: "+65 6789 0123",
      email: "apac@ainrion.com",
      timezone: "SGT (UTC+8)",
      image: "/api/placeholder/600/400"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="locations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#d64206] font-medium">Global Presence</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f1f1f] mt-2 mb-4">
            Our Office Locations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With offices around the globe, we&lsquo;re here to serve you wherever you are.
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
          {offices.map((office, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Office Image */}
              <div className="relative h-48">
                <img
                  src={office.image}
                  alt={office.city}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                  {office.city}
                </h3>
              </div>

              {/* Office Details */}
              <div className="p-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#d64206] flex-shrink-0 mt-1" />
                  <p className="text-gray-600">{office.address}</p>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#d64206] flex-shrink-0" />
                  <p className="text-gray-600">{office.phone}</p>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#d64206] flex-shrink-0" />
                  <p className="text-gray-600">{office.email}</p>
                </div>

                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-[#d64206] flex-shrink-0" />
                  <p className="text-gray-600">{office.timezone}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OfficeLocations;