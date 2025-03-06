'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Activity, BarChart, Lightbulb, ShieldCheck, Users } from 'lucide-react';
import caseStudies from '@/data/case-studies';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function CaseStudyDetailsPage({ caseStudyID }: { caseStudyID: string }) {
  const id = parseInt(caseStudyID, 10);
  const caseStudy = caseStudies.find((caseStudy) => caseStudy.id === id);

  if (!caseStudy) {
    return notFound();
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Case Study Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex justify-center"
        >
          <Image
            src={caseStudy.image}
            width={800}
            height={500}
            alt={caseStudy.title}
            className="w-[60%] max-w-4xl rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Title & Description */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1f1f1f]">{caseStudy.title}</h1>
          <p className="text-lg text-gray-600 mt-4">{caseStudy.description}</p>
        </div>

        {/* Results Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            { icon: <TrendingUp className="w-6 h-6 text-[#d64206] mx-auto mb-2" />, label: caseStudy.results.metric1, description: "Performance Improvement" },
            { icon: <Activity className="w-6 h-6 text-[#d64206] mx-auto mb-2" />, label: caseStudy.results.metric2, description: "Operational Efficiency" },
            { icon: <BarChart className="w-6 h-6 text-[#d64206] mx-auto mb-2" />, label: caseStudy.results.metric3, description: "Financial Impact" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-center bg-gray-100 p-6 rounded-xl shadow-md"
            >
              <div className="w-12 h-12 bg-[#d64206]/10 rounded-lg flex items-center justify-center mx-auto">
                {stat.icon}
              </div>
              <div className="text-xl font-bold text-[#1f1f1f] mt-2">{stat.label}</div>
              <p className="text-gray-500 text-sm mt-1">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Challenges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-[#1f1f1f] mb-4">Key Challenges</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Before the solution was implemented, {caseStudy.category} businesses faced major issues, including inefficiencies, outdated technology, and scalability concerns.
          </p>
        </motion.div>

        {/* Implemented Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-[#1f1f1f] mb-4">Implemented Solution</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: <Lightbulb className="w-8 h-8 text-[#d64206] mx-auto mb-2" />, title: "Innovative AI Model", description: "Developed a predictive AI model to streamline processes and enhance accuracy." },
              { icon: <ShieldCheck className="w-8 h-8 text-[#d64206] mx-auto mb-2" />, title: "Enhanced Security", description: "Implemented end-to-end encryption and security measures." },
              { icon: <Users className="w-8 h-8 text-[#d64206] mx-auto mb-2" />, title: "User Experience", description: "Redesigned UI/UX for seamless interactions and better accessibility." },
              { icon: <BarChart className="w-8 h-8 text-[#d64206] mx-auto mb-2" />, title: "Scalable Infrastructure", description: "Migrated to cloud-based architecture for high availability." },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
                className="bg-gray-100 p-6 rounded-xl shadow-md text-center"
              >
                <div className="w-12 h-12 bg-[#d64206]/10 rounded-lg flex items-center justify-center mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#1f1f1f] mt-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Client Feedback (Optional) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-[#1f1f1f] mb-4">Client Feedback</h2>
          <blockquote className="text-lg text-gray-600 italic border-l-4 border-[#d64206] pl-4">
            &quot;This solution completely transformed our operations, increasing efficiency and reducing costs significantly!&quot;
            <span className="block mt-2 font-semibold">— CEO, {caseStudy.category} Industry</span>
          </blockquote>
        </motion.div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Link
            href="/case-studies"
            className="bg-[#d64206] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#b03505] transition"
          >
            Explore More Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
};
