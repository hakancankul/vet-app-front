'use client';

import { motion, AnimatePresence, PanInfo } from 'framer-motion';
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

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const dragDistance = info.offset.x;
    const dragThreshold = 50; // minimum drag distance to trigger slide change

    if (dragDistance > dragThreshold) {
      prevReview();
    } else if (dragDistance < -dragThreshold) {
      nextReview();
    }
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

        <div className="relative">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className="relative touch-pan-x"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm text-center max-w-4xl mx-auto select-none"
              >
                {/* Stars Section */}
                <div className="flex justify-center mb-4">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Comment Section - Make it not interfere with swipe */}
                <div className="h-[200px] md:h-[180px] overflow-y-auto mb-6 px-2 touch-pan-y">
                  <p className="text-gray-700 text-base md:text-lg italic">
                    &ldquo;{reviews[currentIndex].comment}&rdquo;
                  </p>
                </div>

                {/* Profile Section */}
                <div className="flex items-center justify-center gap-4 pt-4 border-t border-gray-100">
                  <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-gray-100">
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
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Navigation Buttons - Hidden on mobile */}
          <div className="hidden sm:block">
            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-all z-10"
              aria-label="Previous review"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>

            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-all z-10"
              aria-label="Next review"
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 