// src/components/services/serviceID/ServiceDetailPage.tsx
'use client';
import services from '@/data/services';
import { Check } from 'lucide-react';
import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';


export default function ServiceDetailPage({ serviceID }: { serviceID: string }) {
    const service = services.find((s) => s.id === serviceID);

    if (!service) {
        return notFound();
    }

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
                    className="space-y-24"
                >
                    {/* Hero Section with Left/Right Layout */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0}
                        }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    >
                        {/* Content - Left Side */}
                        <div className="space-y-6">
                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-[#d64206]`}>
                                {React.createElement(service.icon, { className: "w-8 h-8" })}
                            </div>

                            <h2 className="text-3xl font-bold text-[#1f1f1f]">
                                What is {service.title}?
                            </h2>

                            <p className="text-gray-700 text-lg leading-relaxed">
                                {service.longDescription}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-xl font-bold text-[#1f1f1f] mb-4">Benefits</h3>
                                    <ul className="space-y-3">
                                        {service.benefits.map((benefit, idx) => (
                                            <li key={idx} className="flex items-center text-gray-600">
                                                <Check className="w-5 h-5 text-[#d64206] mr-2 flex-shrink-0" />
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-[#1f1f1f] mb-4">Features</h3>
                                    <ul className="space-y-3">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-gray-600">
                                                <Check className="w-5 h-5 text-[#d64206] mr-2 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Image - Right Side */}
                        <div className="relative">
                            <div className="aspect-video rounded-xl overflow-hidden bg-gray-100 shadow-lg">
                                <Image
                                    src={service.images.main}
                                    width={800}
                                    height={600}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* 4-Image Grid Section with Staggered Animation */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.3 }
                            }
                        }}
                        className="mt-20"
                    >
                        <motion.h2
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0}
                            }}
                            className="text-3xl font-bold text-[#1f1f1f] mb-8"
                        >
                            Key Features
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {service.features.slice(0, 4).map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                duration: 0.6,
                                                ease: "easeOut"
                                            }
                                        }
                                    }}
                                    className="text-center"
                                >
                                    {/* Image Wrapper with Fixed Height */}
                                    <div className="rounded-xl overflow-hidden shadow-md h-48 flex items-center justify-center bg-gray-100">
                                        <Image
                                            src={service.images.features[idx] || `/api/placeholder/400/300`}
                                            width={400}
                                            height={300}
                                            alt={`Feature ${idx + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Feature Text Below */}
                                    <p className="mt-3 text-lg font-medium text-gray-700">{feature}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Why Choose Us Section */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.6,
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                        className="mt-20 text-center"
                    >
                        <motion.h2
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="text-4xl font-bold text-[#1f1f1f]"
                        >
                            Why Choose Our {service.title} Service?
                        </motion.h2>

                        <motion.p
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1 }
                            }}
                            className="text-gray-700 text-lg max-w-3xl mx-auto mt-4"
                        >
                            We go beyond just providing services. Our team ensures seamless integration, cost-effective solutions, and long-term value to your business.
                        </motion.p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                            {service.whyChooseUs.map((reason, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                                    }}
                                    className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="w-12 h-12 bg-[#d64206]/10 rounded-lg flex items-center justify-center mb-4 text-[#d64206]">
                                        {React.createElement(reason.icon)}
                                    </div>
                                    <h3 className="text-xl font-bold text-[#d64206]">{reason.title}</h3>
                                    <p className="text-gray-600 mt-2">{reason.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}