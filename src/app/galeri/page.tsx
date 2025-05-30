'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import galleryData from '@/data/gallery.json';

interface GalleryItem {
  id: number;
  image: string;
  description: string;
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const gallery: GalleryItem[] = galleryData.gallery;

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

  const handleKeyDown = React.useCallback((e: KeyboardEvent) => {
    if (selectedImage === null) return;
    
    if (e.key === 'ArrowRight') {
      setSelectedImage((selectedImage + 1) % gallery.length);
    } else if (e.key === 'ArrowLeft') {
      setSelectedImage((selectedImage - 1 + gallery.length) % gallery.length);
    } else if (e.key === 'Escape') {
      setSelectedImage(null);
    }
  }, [selectedImage, gallery.length]);

  React.useEffect(() => {
    if (selectedImage !== null) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedImage, handleKeyDown]);

  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="container mx-auto p-4">
        {/* Gallery Grid */}
        <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {gallery.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.description}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-xs font-medium line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
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
            <div
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
            </div>
          </div>
        )}
      </div>
    </main>
  );
} 