'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';

const HeroSection = dynamic(() => import('@/components/sections/HeroSection'));
const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection'));
const TeamSection = dynamic(() => import('@/components/sections/TeamSection'));
const GallerySection = dynamic(() => import('@/components/sections/GallerySection'));
const WhyUsSection = dynamic(() => import('@/components/sections/WhyUsSection'));

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <TeamSection />
        <GallerySection />
        <WhyUsSection />
      </main>
    </>
  );
}
