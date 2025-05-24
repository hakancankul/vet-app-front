'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const slides = [
  {
    image: '/images/hero/hero1.jpg',
    alt: 'Modern Veteriner Kliniği',
    title: 'Modern Kliniğimiz',
    description: 'Son teknoloji ekipmanlarla donatılmış modern kliniğimizde evcil dostlarınıza en iyi hizmeti sunuyoruz.'
  },
  {
    image: '/images/hero/hero2.jpg',
    alt: 'Ameliyathane',
    title: 'Steril Ameliyathane',
    description: 'Tam donanımlı ve steril ameliyathanemizde güvenli cerrahi operasyonlar gerçekleştiriyoruz.'
  },
  {
    image: '/images/hero/hero3.jpg',
    alt: 'Laboratuvar',
    title: 'Modern Laboratuvar',
    description: 'Gelişmiş laboratuvar ekipmanlarımızla hızlı ve güvenilir test sonuçları sağlıyoruz.'
  },
  {
    image: '/images/hero/hero4.jpg',
    alt: 'Hasta Bakımı',
    title: 'Özenli Bakım',
    description: 'Evcil dostlarınıza özel, sevgi dolu ve profesyonel bakım hizmeti sunuyoruz.'
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative overflow-hidden bg-gray-50 pt-16 pb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />

      {/* Content */}
      <div className="container relative mx-auto grid items-center px-4 py-16 lg:grid-cols-2 lg:gap-8">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Evcil Dostlarınızın
              <span className="block text-blue-600">Sağlığı İçin</span>
              Yanınızdayız
            </h1>
            <p className="mb-8 text-lg text-gray-600 sm:text-xl">
              20 yılı aşkın tecrübemiz ve uzman kadromuzla evcil dostlarınıza en iyi veteriner hizmetini sunuyoruz.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Link
              href="/randevu"
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-200 sm:w-auto"
            >
              <Calendar className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              RANDEVU AL
            </Link>
            <a
              href="tel:+902325202575"
              className="group flex w-full items-center justify-center gap-2 rounded-full border-2 border-gray-300 px-8 py-3 text-lg font-semibold text-gray-700 transition-all duration-300 hover:border-blue-600 hover:text-blue-600 sm:w-auto"
            >
              <Phone className="h-5 w-5 animate-pulse text-blue-600" />
              0232 520 25 75
            </a>
          </motion.div>
        </motion.div>

        {/* Image Carousel */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mt-8 lg:mt-0"
        >
          <div className="relative h-[400px] w-full overflow-hidden rounded-2xl lg:h-[500px]">
            {slides.map((slide, index) => (
              <motion.div
                key={slide.image}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: currentSlide === index ? 1 : 0,
                  x: `${(index - currentSlide) * 100}%`
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/20 to-transparent">
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <h3 className="mb-2 text-2xl font-bold">{slide.title}</h3>
                    <p className="text-sm text-gray-200">{slide.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:text-blue-600"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:text-blue-600"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    currentSlide === index
                      ? 'w-6 bg-white'
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute left-0 top-1/4 -translate-y-1/2 opacity-10">
        <div className="h-96 w-96 rounded-full bg-blue-400 blur-3xl"></div>
      </div>
      <div className="pointer-events-none absolute right-0 top-3/4 -translate-y-1/2 opacity-10">
        <div className="h-64 w-64 rounded-full bg-blue-600 blur-3xl"></div>
      </div>
    </section>
  );
} 