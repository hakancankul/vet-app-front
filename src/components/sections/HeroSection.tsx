'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef, TouchEvent } from 'react';

const slides = [
  {
    image: '/images/hero/hero1.jpg',
    alt: 'Modern Veteriner Kliniği',
    title: 'Evcil Dostlarınızın',
    subtitle: 'Sağlık ve Mutluluğu',
    description: 'Modern kliniğimizde uzman kadromuzla evcil dostlarınıza özel, kapsamlı veterinerlik hizmetleri sunuyoruz.',
    buttonText: 'RANDEVU ALIN'
  },
  {
    image: '/images/hero/hero2.jpg',
    alt: 'Ameliyathane',
    title: 'Onlar Bizim',
    subtitle: 'Ailemiz',
    description: 'Kedi, köpek, kuş… Ne olursa olsun, hepsini canı gönülden seviyoruz. Çünkü burası sadece bir klinik değil, bir yuva.',
    buttonText: 'BİZE ULAŞIN'
  },
  {
    image: '/images/hero/hero3.png',
    alt: 'Ameliyathane',
    title: 'Profesyonel',
    subtitle: 'Cerrahi Hizmetler',
    description: 'Son teknoloji ekipmanlarla donatılmış ameliyathanemizde güvenli ve başarılı operasyonlar gerçekleştiriyoruz.',
    buttonText: 'BİZE ULAŞIN'
  },
  {
    image: '/images/hero/hero4.png',
    alt: 'Hasta Bakımı',
    title: 'Sevgi Dolu',
    subtitle: 'Özel Bakım',
    description: 'Evcil dostlarınıza aile sıcaklığında, sevgi dolu ve profesyonel bakım hizmeti sunuyoruz.',
    buttonText: 'DAHA FAZLA BİLGİ'
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isSliding = useRef(false);
  const isTouchingButton = useRef(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const getSlideX = (index: number) => {
    const diff = index - currentSlide;
    if (currentSlide === slides.length - 1 && index === 0) {
      return 100; // İlk slayt sağdan gelsin
    }
    if (currentSlide === 0 && index === slides.length - 1) {
      return -100; // Son slayt soldan gelsin
    }
    return diff * 100;
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e: TouchEvent) => {
    // Eğer dokunulan element bir buton veya link ise swipe'ı engelle
    const target = e.target as HTMLElement;
    if (target.closest('a') || target.closest('button')) {
      isTouchingButton.current = true;
      return;
    }
    isTouchingButton.current = false;
    touchStartX.current = e.touches[0].clientX;
    isSliding.current = false;
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isTouchingButton.current) return;
    
    touchEndX.current = e.touches[0].clientX;
    if (Math.abs(touchEndX.current - touchStartX.current) > 10) {
      isSliding.current = true;
    }
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (isTouchingButton.current || !isSliding.current) return;

    const swipeDistance = touchEndX.current - touchStartX.current;
    const minSwipeDistance = 50;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
  };

  return (
    <section 
      className="relative h-screen w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5 z-10" />

      {/* Image Carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.image}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentSlide === index ? 1 : 0,
              x: `${getSlideX(index)}%`
            }}
            transition={{ 
              duration: 0.5,
              ease: "easeInOut"
            }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              sizes="100vw"
              className={`object-cover ${index === 3 ? 'object-[center_20%]' : 'object-center'} select-none`}
              priority={index === 0}
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 flex h-full items-center justify-center">
        <div className="container mx-auto px-4">
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white drop-shadow-lg shadow-black sm:text-5xl lg:text-6xl tracking-tight">
              {slides[currentSlide].title}
              <span className="block text-blue-400 font-bold drop-shadow-lg shadow-black mt-2">{slides[currentSlide].subtitle}</span>
            </h1>
            <p className="mb-8 text-lg text-gray-100 sm:text-xl font-medium drop-shadow-md max-w-3xl mx-auto leading-relaxed">
              {slides[currentSlide].description}
            </p>

            {currentSlide === 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center px-4 sm:px-0"
              >
                <a
                  href="https://wa.me/905541730586?text=Merhaba,%20veteriner%20kliniğinizden%20randevu%20almak%20istiyorum.%20Müsait%20olan%20randevu%20saatlerini%20öğrenebilir%20miyim?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-4 sm:px-8 sm:py-3.5 text-base sm:text-lg font-bold text-white shadow-lg active:bg-green-700 active:shadow-inner sm:w-auto backdrop-blur-sm touch-manipulation"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span className="whitespace-nowrap">WHATSAPP İLE RANDEVU</span>
                </a>
                <a
                  href="tel:+905541730586"
                  className="group flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/80 bg-white/10 px-6 py-4 sm:px-8 sm:py-3.5 text-base sm:text-lg font-bold text-white shadow-lg backdrop-blur-sm active:bg-white/30 active:shadow-inner sm:w-auto touch-manipulation"
                >
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span className="whitespace-nowrap">0554 173 05 86</span>
                </a>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Navigation Buttons - Hidden on mobile, visible on desktop */}
      <div className="hidden sm:block">
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/90 p-3 text-gray-800 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:text-blue-600"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/90 p-3 text-gray-800 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:text-blue-600"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all ${
              currentSlide === index
                ? 'w-8 bg-white shadow-lg'
                : 'w-2.5 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
} 