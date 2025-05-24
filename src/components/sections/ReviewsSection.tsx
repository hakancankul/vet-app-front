'use client';

import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const reviews = [
  {
    name: 'Damla Ghin',
    content: 'Herkes çok iyi davranıyor hep yardımcı oluyorlar, iyice zaman ayırıp acele etmeden dinliyorlar, sokaktan bulduğum kediyi öğrenci olduğum için de, kendileri bazı şeyleri üstlendiler, kısacası bilgi ve kibarlık konusunda oldukça iyiler, gerçekten teşekkürler ediyorum🙏',
    rating: 5,
    type: 'Kedi Sahibi'
  },
  {
    name: 'Elif Özsürücü',
    content: 'Kedimi ilk bulduğum andan itibaren tesadüfen gitmiştim. Duyum aldığım diğer veterinerler gibi para için yapmadıkları çok belli. Her bir canlıya özelinde değer vererek bakıyorlar. Kedim epilepsi hastası olduğu için özel tavsiyeler verdiler ve ne zaman gitsem ilgiyle dinleyip cevap verdiler. Artık başka bir şehirdeyim fakat yine de telefonla yardımcı olabileceklerini söyledikleri için hala iletişim halindeyim. İlgi gösteren herkese binlerce kez teşekkürler.',
    rating: 5,
    type: 'Kedi Sahibi'
  },
  {
    name: 'Burcu Karabayır',
    content: 'Hayatımda ilk kez kedi sahiplendim. Daha önce gittiğim veteriner baştan savma beni göndermiş. Mekvet\'e gittiğimde bu durumu anladım. Gittiğimden bu yana da çok çok memnunum. En ufak terslik, olumsuz bir durum dahi yaşamadım. Özellikle "Vuslat Hanım" her ziyaretimizde sorularımızı sabırla yanıtlıyor. Çok tatlı, işini çok seven bir veteriner. Harika bir hizmet sağlıyorlar 🌸',
    rating: 5,
    type: 'Kedi Sahibi'
  },
  {
    name: 'Nilüfer Ucurum',
    content: 'Kedim için gittim ve çok memnun kaldım harika tüm ekip özellikle vuslat hanım çok çok harika bir insan çok taşındığımız için sürekli veteriner değiştirmek zorunda kaldık ama artık tek adres olacak mekvet ve vuslat hanım bizim için gösterdiği ilgi ve alaka için vuslat hanım a ayrıca tüm ekibe çok teşekkür ederiz iyki varsınız ❤️',
    rating: 5,
    type: 'Kedi Sahibi'
  },
  {
    name: 'Ahmet Emre Türk',
    content: 'Köpeğimi götürdüm her yerde yüksek fiyat vererek tanı bile koyamadılar mekvete getirdim tek testle parazit tanısını ve tedavisini yaptılar',
    rating: 5,
    type: 'Köpek Sahibi'
  },
  {
    name: 'Enes Çelebi',
    content: 'Bilgi birikimi dışında bazen insanlar güven ve aile ortamını da arıyor. Sonuçta veterinere gitme nedenimiz beraber bir hayat sürdürdüğümüz canlarımız ve onları aileden biri gibi olan bir uzmanın kontrol ve tedavi etmesi yüreğimizde ki o endişeyi yok ediyor. İyi ki varsınız ailemiz olan muhteşem ekip 🤗',
    rating: 5,
    type: 'Hasta Sahibi'
  },
  {
    name: 'Bircan Beşgül',
    content: 'Tek kelime ile izmirde gidilecek tek klinik. Bilgi donanımı,hayvanlara olan sevgisi,sabrı ile her yerden farklı ve gözüm kapali güveniyorum.Kurulduğu günden İzmir çok şanslı.gittiginzde mutlaka Mert bey ile tanışın. Kendisi iyi ki var 💕',
    rating: 5,
    type: 'Hasta Sahibi'
  },
  {
    name: 'Simge Pelin Özsütemen',
    content: 'Üç kedimi de gönül rahatlığı ile götürüyorum. Çok iyiler çok ilgililer iyi ki varlar.',
    rating: 5,
    type: 'Kedi Sahibi'
  }
];

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-sm text-center h-[400px] flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-center mb-6">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              
              <p className="text-gray-700 text-lg md:text-xl mb-8 italic line-clamp-4">
                "{reviews[currentIndex].content}"
              </p>
            </div>

            <div>
              <div className="font-semibold text-gray-900 mb-1">
                {reviews[currentIndex].name}
              </div>
              <div className="text-gray-500">
                {reviews[currentIndex].type}
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-all"
            aria-label="Previous review"
          >
            <ChevronLeft size={24} className="text-gray-600" />
          </button>

          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-16 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-all"
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