'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    title: 'Sağlık Hizmetleri',
    description: 'Kapsamlı sağlık kontrolleri ve tedavi hizmetleri',
    details: [
      'Uzman Veteriner Kadrosu',
      'Modern Tıbbi Ekipmanlar'
    ],
    icon: '/images/health.png',
    link: '/hizmetler/saglik-hizmetleri'
  },
  {
    title: 'Genel Cerrahi',
    description: 'Uzman ekibimizle cerrahi operasyonlar',
    details: [
      'Steril Ameliyathane',
      'Deneyimli Cerrahi Ekibi'
    ],
    icon: '/images/surgery.png',
    link: '/hizmetler/genel-cerrahi'
  },
  {
    title: 'Pet Kuaför & Bakım',
    description: 'Profesyonel ekibimizle evcil dostlarınıza özel bakım hizmetleri',
    details: [
      'Uzman Kuaför Ekibi',
      'Hijyenik Bakım Ortamı'
    ],
    icon: '/images/grooming.png',
    link: '/hizmetler/pet-kuafor'
  },
  {
    title: 'Pet Mamalar',
    description: 'Evcil dostlarınız için özel seçilmiş kaliteli mama çeşitleri',
    details: [
      'Geniş Ürün Yelpazesi',
      'Veteriner Hekim Danışmanlığı'
    ],
    icon: '/images/food.png',
    link: '/hizmetler/pet-mama'
  }
];

export default function ServicesSection() {
  return (
    <section id="hizmetlerimiz" className="relative overflow-hidden bg-white py-12 scroll-mt-40">
      {/* Sol taraftaki mavi alan */}
      <div className="absolute left-0 top-0 bottom-0 w-[240px] bg-[#1e62b3] hidden lg:flex flex-col items-center justify-center text-white">
        <div className="text-[72px] font-bold leading-none">20</div>
        <div className="text-[32px] font-light">Yıllık</div>
        <div className="text-[32px] font-light">Deneyimle</div>
      </div>

      <div className="container mx-auto px-4 lg:pl-[280px]">
        <div className="mb-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            HİZMETLERİMİZ
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base text-gray-600 sm:text-lg"
          >
            Modern ekipmanlarımız ve uzman kadromuz ile evcil dostlarınıza en iyi hizmeti sunuyoruz.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Link 
              href={service.link} 
              key={service.title}
              className="block group"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f8f9ff] rounded-lg p-8 h-full hover:shadow-lg transition-all group-hover:bg-white flex flex-col"
              >
                <div className="h-12 mb-6 flex items-center">
                  <Image 
                    src={service.icon} 
                    alt={service.title} 
                    width={48}
                    height={48}
                    className="text-[#1e3c72] object-contain"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <div className="flex-grow">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 mb-2 text-gray-700">
                      <Check size={16} className="text-green-500 flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-[#1e62b3] font-semibold group-hover:text-[#154785] transition-colors flex items-center gap-1">
                  Devamını Oku
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 