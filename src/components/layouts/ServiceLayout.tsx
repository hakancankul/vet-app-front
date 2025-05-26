'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ReactNode } from 'react';

interface ServiceProps {
  title: string;
  description: string;
  services: {
    icon: ReactNode;
    title: string;
    image: string;
    content: string;
  }[];
}

export default function ServiceLayout({ title, description, services }: ServiceProps) {
  return (
    <div className="fixed inset-0 overflow-y-auto bg-white">
      <div className="min-h-screen">
        <div className="sticky top-0 left-0 right-0 h-24 bg-white z-10" />
        
        <div className="container mx-auto px-4 pt-16">
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed"
            >
              {description}
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="flex flex-col divide-y divide-gray-200">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="py-12 first:pt-0 last:pb-0"
              >
                <div className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} gap-8`}>
                  <div className="w-full md:w-1/3 relative aspect-[4/3]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="rounded-xl object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={index === 0}
                    />
                  </div>
                  <div className="w-full md:w-2/3">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                        {service.icon}
                      </div>
                      <h2 className="text-2xl font-semibold text-gray-900">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-justify">
                      {service.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="py-16 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center"
            >
              <p className="text-lg text-gray-600 mb-6">
                Detaylı bilgi ve randevu için bize ulaşın
              </p>
              <a
                href="tel:+902324253232"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full border-2 border-gray-900 text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                Bilgi / Randevu
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 