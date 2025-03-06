// src/app/services/[serviceID]/page.tsx

import type { Metadata } from 'next';
import ServiceDetailHeroPage from '@/components/services/serviceID/ServiceDetailHeroPage';
import ServiceDetailPage from '@/components/services/serviceID/ServiceDetailPage';
import ServicesSection from '@/components/home/ServicesSection';
import BottomCTA from '@/components/home/BottomCTA';

export const metadata: Metadata = {
    title: 'Service Details - Ainrion | Digital Transformation & Innovation Solutions',
    description: 'Explore our comprehensive range of digital services including Digital Transformation, Data Analytics, Cloud Solutions, and AI & Automation.',
};

export default async function ServiceIDPage({ params }: { params: Promise<{ serviceID: string }> }) {

    const { serviceID } = await params;

    return (
        <>
            <ServiceDetailHeroPage serviceID={serviceID} />
            <ServiceDetailPage serviceID={serviceID} />
            <ServicesSection />
            <BottomCTA />
        </>
    );
}
