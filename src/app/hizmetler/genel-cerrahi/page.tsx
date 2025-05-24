'use client';

import { motion } from 'framer-motion';
import { Scale, Scissors, Heart, Ambulance, Eye, FlaskConical } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    icon: <Scale className="w-8 h-8" />,
    title: 'Genel Cerrahi',
    image: '/images/services/genel-cerrahi.jpg',
    content: 'Cerrahi operasyonlar, profesyonellik ve hijyen gerektiren, dikkatle planlanması gereken işlemlerdir. Kliniğimizdeki ameliyatlar, tam donanımlı steril ameliyathanemizde, uzman veteriner hekimler tarafından gerçekleştirilir.'
  },
  {
    icon: <Scissors className="w-8 h-8" />,
    title: 'Yumuşak Doku Ameliyatları',
    image: '/images/services/yumusak-doku.jpg',
    content: 'Tümör çıkarılması, kist alınması, mide ve bağırsak cerrahileri gibi iç organları veya cildi ilgilendiren yumuşak doku ameliyatları kliniğimizde başarıyla uygulanmaktadır. Operasyon öncesi tanı süreçleri ve sonrasında yara bakımına kadar tüm detaylar özenle yönetilir.'
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Kısırlaştırma (Sterilizasyon) Operasyonları',
    image: '/images/services/sterilizasyon.jpg',
    content: 'Evcil hayvanların üreme kontrolü amacıyla yapılan sterilizasyon işlemleri; hem istenmeyen gebelikleri önler hem de meme tümörleri, rahim enfeksiyonları (pyometra) ve prostat hastalıkları gibi sağlık risklerini azaltır. Dişi hayvanlarda yumurtalık ve/veya rahmin alınması, erkek hayvanlarda testislerin alınması işlemleri gerçekleştirilir. Operasyon sonrası ağrı yönetimi ve kontrol muayeneleriyle iyileşme süreci titizlikle takip edilir.'
  },
  {
    icon: <Ambulance className="w-8 h-8" />,
    title: 'Acil Cerrahi Müdahaleler',
    image: '/images/services/acil-cerrahi.jpg',
    content: 'Trafik kazaları, yüksekten düşme, ani iç kanama, mide dönmesi gibi yaşamı tehdit eden durumlarda hızlı müdahale hayati önem taşır. Kliniğimizde acil durumlar için hazır bekleyen ekipmanlar ve uzman kadro ile 7/24 müdahale kapasitesi sunulmaktadır.'
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: 'Göz ve Kulak Cerrahileri',
    image: '/images/services/goz-kulak.jpg',
    content: 'Evcil hayvanlarda göz kapağı içe kıvrılması (entropion), dışa dönmesi (ektropion), kulak kanalının daralması gibi durumlar cerrahi müdahale gerektirir. Mikroskobik cerrahi teknikler ve iyileşme takibiyle bu tür sorunlar kalıcı olarak çözülebilir.'
  },
  {
    icon: <FlaskConical className="w-8 h-8" />,
    title: 'Steril Ameliyathane ve Yoğun Bakım Takibi',
    image: '/images/services/ameliyathane.jpg',
    content: 'Tüm cerrahi işlemler tam donanımlı, düzenli olarak dezenfekte edilen steril ameliyathanemizde gerçekleştirilir. Operasyon sonrası, hastalarımız özel kafeslerde, kontrollü sıcaklık ve nem ortamında izlenir. Gerekli görüldüğünde serum, oksijen ve ilaç desteği sağlanır.'
  }
];

export default function SurgeryServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[600px] w-full">
        <Image
          src="/images/hero/cerrahi-hero.jpg"
          alt="Cerrahi Hizmetler"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
          <div className="container mx-auto h-full px-4">
            <div className="flex h-full items-center">
              <div className="max-w-2xl text-white">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-5xl md:text-6xl font-bold mb-6"
                >
                  Evcil Dostlarınızın<br />
                  <span className="text-blue-400">Sağlığı İçin</span><br />
                  Yanınızdayız
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xl md:text-2xl mb-8"
                >
                  20 yılı aşkın tecrübemiz ve uzman kadromuzla evcil dostlarınıza en iyi veteriner hizmetini sunuyoruz.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex gap-4"
                >
                  <a
                    href="/randevu"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
                  >
                    RANDEVU AL
                  </a>
                  <a
                    href="tel:+902325202575"
                    className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
                  >
                    0232 520 25 75
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-16">
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
            Detaylı bilgi ve randevu için bize ulaşın
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