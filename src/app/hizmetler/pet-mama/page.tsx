'use client';

import { motion } from 'framer-motion';
import { Baby, Dog, HeartPulse, Gift } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    icon: <Baby className="w-8 h-8" />,
    title: 'Yavru Hayvanlar İçin Özel Mamalar',
    image: '/images/services/yavru-mama.png',
    content: 'Yavru kedi ve köpeklerin gelişim döneminde ihtiyaç duyduğu yüksek enerji, protein ve vitamin desteği özel formüllerle sağlanır. Bağışıklık sistemini güçlendiren, sindirimi kolay ve büyümeyi destekleyen yavru mamaları, veteriner hekim kontrolünde önerilir. Her yavrunun ırkına ve büyüme hızına göre mama seçimi yapılır ve takibi sağlanır.'
  },
  {
    icon: <Dog className="w-8 h-8" />,
    title: 'Yetişkin ve Kısırlaştırılmış Hayvan Mamaları',
    image: '/images/services/yetiskin-mama.png',
    content: 'Yetişkin kedi ve köpekler için özel olarak formüle edilmiş mamalar, günlük enerji ihtiyacını dengeler, kilo kontrolü sağlar ve tüy ile deri sağlığını destekler. Kısırlaştırılmış hayvanlarda ise hormon değişikliklerine bağlı olarak oluşabilecek kilo artışı ve idrar yolu sorunlarını önlemeye yardımcı özel mamalar tercih edilir. Bu mamalar düşük yağ oranı, ideal lif seviyesi ve dengeli mineral içeriği ile dikkat çeker.'
  },
  {
    icon: <HeartPulse className="w-8 h-8" />,
    title: 'Özel Diyet Mamalar',
    image: '/images/services/diyet-mama.png',
    content: 'Bazı evcil hayvanlar, kronik rahatsızlıkları ya da özel ihtiyaçları nedeniyle diyetetik mamalara ihtiyaç duyar. Kliniğimizde; böbrek ve karaciğer hastalıkları, şeker hastalığı (diyabet), gıda alerjileri ve intoleranslar, obezite ve kilo kontrolü, idrar yolu sağlığı gibi konularda destek sağlayan veteriner diyet mamaları temin edilir ve veteriner hekim gözetiminde kullanımı önerilir.'
  },
  {
    icon: <Gift className="w-8 h-8" />,
    title: 'Ödül ve Takviye Ürünleri',
    image: '/images/services/odul-mama.png',
    content: 'Sağlıklı yaşamın bir parçası olarak, dostlarınıza uygun ödül mamaları ve vitamin-mineral destekli takviyeler de sunulmaktadır. Bu ürünler hem eğitim süreçlerinde destek olur, hem de genel sağlık ve bağışıklığın korunmasına katkı sağlar. Doz ve kullanım sıklığı veteriner hekiminiz tarafından belirlenir.'
  }
];

export default function PetFoodPage() {
  return (
    <main className="min-h-screen bg-white pt-24 overflow-y-scroll">
      <div className="container mx-auto px-4 pt-16">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Pet Mamaları
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed"
          >
            Evcil hayvanların sağlıklı, uzun ömürlü ve mutlu bir yaşam sürebilmeleri için dengeli beslenme büyük önem taşır. Kliniğimizde sunduğumuz pet mama hizmetleri, yalnızca kaliteli ürünlerle sınırlı kalmaz; aynı zamanda her canlının yaşına, ırkına, yaşam tarzına ve özel sağlık durumuna göre beslenme planlaması yapılmasını da kapsar. İşte kliniğimizde sunduğumuz kapsamlı mama hizmetleri:
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

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center pb-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Detaylı bilgi ve mama danışmanlığı için bize ulaşın
          </p>
          <a
            href="tel:+902324253232"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Hemen Arayın
          </a>
        </motion.div>
      </div>
    </main>
  );
} 