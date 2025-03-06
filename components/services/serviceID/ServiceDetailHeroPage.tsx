// src/components/services/serviceID/ServiceDetailHeroPage.tsx
'use client';

import services from '@/data/services';
import React from 'react';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';

export default function ServiceDetailHeroPage({ serviceID }: { serviceID: string }) {
    const service = services.find((s) => s.id === serviceID);

    if (!service) {
        return notFound();
    }

    return (
        <section className="pt-32 pb-20 bg-[#1f1f1f] relative overflow-hidden">
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
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'linear-gradient(45deg, #d64206 25%, transparent 25%), linear-gradient(-45deg, #d64206 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #d64206 75%), linear-gradient(-45deg, transparent 75%, #d64206 75%)',
                        backgroundSize: '20px 20px'
                    }}
                />
            </div>

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{service.title}</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">{service.description}</p>
                </motion.div>
            </div>
        </section>
    );
}