// src/app/blog/page.tsx

import type { Metadata } from 'next';
import BlogHero from '@/components/blog/BlogHero';
import FeaturedBlog from '@/components/blog/FeaturedBlog';
import BlogList from '@/components/blog/BlogList';
import BottomCTA from '@/components/home/BottomCTA';

export const metadata: Metadata = {
    title: 'Blog - Ainrion | Digital Transformation & Innovation Solutions',
    description: 'Read our latest articles on digital transformation, data analytics, cloud solutions, AI & automation, and more.',
};

export default function BlogPage() {
    return (
        <>
            <BlogHero />
            <FeaturedBlog />
            <BlogList />
            <BottomCTA />
        </>
    );
}