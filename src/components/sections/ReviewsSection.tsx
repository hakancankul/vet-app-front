'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import reviewsData from '@/data/reviews.json';

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = reviewsData.reviews;

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="bg-[#f8f9ff] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4"
          >
            Hasta Sahiplerinden Gelenler
          </motion.h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-sm text-center h-[500px] flex flex-col"
            >
              {/* Stars and Comment Section - Takes up most space */}
              <div className="flex-1 flex flex-col">
                <div className="flex justify-center mb-6">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                
                <div className="flex-1 flex items-center justify-center">
                  <p className="text-gray-700 text-lg md:text-xl italic">
                    &ldquo;{reviews[currentIndex].comment}&rdquo;
                  </p>
                </div>
              </div>

              {/* Profile Section - Fixed height at bottom */}
              <div className="mt-8">
                <div className="flex items-center justify-center gap-4">
                  <div className="relative w-16 h-16 overflow-hidden rounded-full border-2 border-gray-100">
                    <Image
                      src={reviews[currentIndex].profileImage}
                      alt={reviews[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">
                      {reviews[currentIndex].name}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 md:-translate-x-12 lg:-translate-x-16 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-all z-10"
            aria-label="Previous review"
          >
            <ChevronLeft size={24} className="text-gray-600" />
          </button>

          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 md:translate-x-12 lg:translate-x-16 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-all z-10"
            aria-label="Next review"
          >
            <ChevronRight size={24} className="text-gray-600" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8 flex-wrap">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex 
                    ? 'bg-blue-600 w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 