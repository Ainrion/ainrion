'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactHero = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "info@ainrion.com",
      link: "mailto:info@ainrion.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "+91 735-584-8551",
      link: "tel:+917355848551"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: "Babu Bajar Ara, Ward No.-20, Arrah, P.O:Arrah, Bhojpur, 802301",
      link: "#map"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM",
      link: null
    }
  ];

  return (
    <section className="pt-32 pb-20 bg-[#1f1f1f] relative overflow-hidden">
      {/* Moving Gradient Background */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a] via-[#3a3a3a] to-[#1f1f1f] bg-[length:200%_200%]"
      />
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
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #d64206 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We&lsquo;re here to help you navigate your digital transformation journey.
            Reach out to us for any questions or opportunities.
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mt-6">
            Legal Name: Aditya Narayan
          </h1>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="relative group"
            >
              <a
                href={info.link || '#'}
                className={`block bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:bg-white/10 transition-all duration-300 ${info.link ? 'cursor-pointer' : 'cursor-default'
                  }`}
              >
                <div className="w-12 h-12 bg-[#d64206]/10 rounded-lg flex items-center justify-center text-[#d64206] mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-300">
                  {info.details}
                </p>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;