'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import galleryData from '@/data/gallery.json';

interface GalleryItem {
  id: number;
  image: string;
  description: string;
}

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsToShow = 4; // Bir seferde gösterilecek resim sayısı

  const gallery: GalleryItem[] = galleryData.gallery;

  const nextSlide = () => {
    setActiveIndex(prev => (prev + 1) % (gallery.length - itemsToShow + 1));
  };

  const prevSlide = () => {
    setActiveIndex(prev => (prev - 1 + (gallery.length - itemsToShow + 1)) % (gallery.length - itemsToShow + 1));
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % gallery.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + gallery.length) % gallery.length);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImage === null) return;
    
    if (e.key === 'ArrowRight') {
      setSelectedImage((selectedImage + 1) % gallery.length);
    } else if (e.key === 'ArrowLeft') {
      setSelectedImage((selectedImage - 1 + gallery.length) % gallery.length);
    } else if (e.key === 'Escape') {
      setSelectedImage(null);
    }
  };

  // Klavye kontrollerini ekle
  React.useEffect(() => {
    if (selectedImage !== null) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedImage]);

  return (
    <section id="galeri" className="relative overflow-hidden bg-white pt-12 pb-32">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            GALERİ
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base text-gray-600 sm:text-lg"
          >
            Modern ve tam donanımlı kliniğimizden görüntüler
          </motion.p>
        </div>

        {/* Gallery Slider */}
        <div className="relative mx-auto max-w-7xl py-8">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-4 shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl disabled:opacity-50 lg:-left-8"
            disabled={activeIndex === 0}
          >
            <ChevronLeft className="h-7 w-7 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-4 shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl disabled:opacity-50 lg:-right-8"
            disabled={activeIndex === gallery.length - itemsToShow}
          >
            <ChevronRight className="h-7 w-7 text-gray-600" />
          </button>

          {/* Gallery Container */}
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex gap-6 p-4"
              initial={false}
              animate={{ x: `-${activeIndex * (100 / itemsToShow)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {gallery.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="w-1/4 flex-shrink-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div
                    className="group cursor-pointer"
                    onClick={() => setSelectedImage(index)}
                  >
                    <div className="relative aspect-square overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl">
                      <Image
                        src={item.image}
                        alt={item.description}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              {/* Image Container */}
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="relative h-full w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={gallery[selectedImage].image}
                  alt={gallery[selectedImage].description}
                  fill
                  className="object-contain"
                  priority
                />
                <div 
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-lg bg-black/50 px-6 py-3 text-center backdrop-blur-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <p className="text-sm text-gray-200">{gallery[selectedImage].description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Decorative Elements */}
        <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 opacity-10">
          <div className="h-64 w-64 rounded-full bg-blue-600 blur-3xl"></div>
        </div>
        <div className="pointer-events-none absolute right-0 top-0 opacity-10">
          <div className="h-96 w-96 rounded-full bg-blue-400 blur-3xl"></div>
        </div>
      </motion.div>
    </section>
  );
} 