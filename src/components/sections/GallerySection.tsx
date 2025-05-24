'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import galleryData from '@/data/gallery.json';

interface GalleryItem {
  id: number;
  image: string;
  description: string;
}

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const gallery: GalleryItem[] = galleryData.gallery.slice(0, 4); // Sadece ilk 4 fotoğraf

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

  React.useEffect(() => {
    if (selectedImage !== null) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedImage]);

  return (
    <section id="galeri" className="relative overflow-hidden bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            GALERİ
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-600 sm:text-lg">
            Modern ve tam donanımlı kliniğimizden görüntüler
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {gallery.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.description}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm font-medium">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/galeri"
            className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-gray-900 shadow-md transition-all hover:bg-blue-50 hover:shadow-lg"
          >
            <span>Tüm Galeriyi Gör</span>
            <ArrowRight className="h-5 w-5 text-blue-600 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
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
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
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
                  sizes="100vw"
                />
                <div 
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-lg bg-black/50 px-6 py-3 text-center backdrop-blur-sm"
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
        <div className="pointer-events-none absolute right-0 bottom-0 opacity-10">
          <div className="h-96 w-96 rounded-full bg-blue-400 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
} 