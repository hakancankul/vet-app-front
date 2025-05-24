'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TeamSection from '@/components/sections/TeamSection';
import ReviewsSection from '@/components/sections/ReviewsSection';

const GallerySection = dynamic(() => import('@/components/sections/GallerySection'));

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhyUsSection />
        <ServicesSection />
        <TeamSection />
        <ReviewsSection />
        <GallerySection />
      </main>
    </>
  );
}
