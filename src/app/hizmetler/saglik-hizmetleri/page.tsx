'use client';

import { motion } from 'framer-motion';
import { Stethoscope, Syringe, TestTube, Radio, Apple, Smile, QrCode } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    icon: <Stethoscope className="w-8 h-8" />,
    title: 'Genel Muayene ve Rutin Kontroller',
    image: '/images/services/genel-muayene.jpg',
    content: 'Evcil hayvanların sağlıklı bir yaşam sürdürebilmeleri için düzenli veteriner kontrolleri hayati önem taşır. Kliniğimizde gerçekleştirilen kapsamlı muayenelerde, hayvanınızın fiziksel durumu detaylı şekilde değerlendirilir. Vücut ısısı, kalp atış hızı, solunum ritmi, lenf bezleri, deri ve tüy sağlığı, göz ve kulak muayenesi, ağız ve diş sağlığı kontrolü gibi pek çok parametre incelenir. Ayrıca beslenme alışkanlıkları, aktivite düzeyi ve davranış değişiklikleri de değerlendirilerek, olası sağlık sorunlarının erken teşhisi sağlanır. Her muayene sonrası detaylı bir sağlık raporu hazırlanır ve gerekli öneriler sunulur.'
  },
  {
    icon: <Syringe className="w-8 h-8" />,
    title: 'Aşılama ve Parazit Kontrolü',
    image: '/images/services/asilama.jpg',
    content: 'Evcil hayvanların sağlıklı bir yaşam sürmesi ve bulaşıcı hastalıklardan korunması için düzenli aşılama programı büyük önem taşır. Kliniğimizde uygulanan aşı programı, her hayvanın yaşı, yaşam koşulları ve risk faktörleri göz önünde bulundurularak kişiselleştirilir. Köpekler için karma aşı (DHPP), kuduz, kennel cough (köpek gribi), leptospiroz; kediler için karma aşı (FVRCP), kuduz, lösemi (FeLV) gibi koruyucu aşılar uygulanır. Ayrıca düzenli iç ve dış parazit kontrolleri yapılarak, uygun antiparaziter ilaçlar reçete edilir. Tüm aşı ve parazit uygulamaları dijital kayıt altına alınır ve hatırlatma sistemi ile takip edilir.'
  },
  {
    icon: <TestTube className="w-8 h-8" />,
    title: 'Laboratuvar Testleri ve Tahlil Hizmetleri',
    image: '/images/services/laboratuvar.jpg',
    content: 'Modern veteriner hekimliğinde laboratuvar testleri, hastalıkların teşhis ve tedavisinde vazgeçilmez bir role sahiptir. Kliniğimizde tam kan sayımı (hemogram) ile kırmızı kan hücreleri, beyaz kan hücreleri ve trombosit değerleri; kan biyokimyası ile karaciğer, böbrek fonksiyonları, elektrolit dengesi, kan şekeri ve kolesterol seviyeleri değerlendirilir. İdrar tahlili ile böbrek fonksiyonları, üriner sistem enfeksiyonları ve metabolik hastalıklar; dışkı tahlili ile sindirim sistemi parazitleri ve sindirim bozuklukları tespit edilir. Hormon testleri ile tiroid, böbreküstü bezi fonksiyonları incelenir. Tüm test sonuçları dijital ortamda saklanır ve geçmiş değerlerle karşılaştırmalı analiz yapılır.'
  },
  {
    icon: <Radio className="w-8 h-8" />,
    title: 'Görüntüleme Yöntemleri',
    image: '/images/services/goruntuleme.jpg',
    content: 'Kliniğimizde kullanılan modern görüntüleme teknolojileri, iç organların ve dokuların detaylı incelenmesine olanak sağlar. Dijital röntgen cihazımız ile kemik ve eklem yapısı, kalp ve akciğerler, yabancı cisim yutma vakaları yüksek çözünürlükte görüntülenir. Ultrasonografi ile karaciğer, böbrekler, dalak, mide-bağırsak sistemi, idrar kesesi gibi iç organlar real-time olarak değerlendirilir. Gebelik takibi, organ büyümeleri, kistler ve tümöral oluşumlar ultrason ile tespit edilir. Endoskopi sayesinde sindirim ve solunum sisteminin iç yüzeyleri doğrudan gözlemlenir, biyopsi alınabilir ve bazı yabancı cisimler çıkarılabilir. Tüm görüntüleme sonuçları dijital arşivimizde saklanır ve gerektiğinde uzman konsültasyonu için paylaşılabilir.'
  },
  {
    icon: <Apple className="w-8 h-8" />,
    title: 'Beslenme ve Diyet Danışmanlığı',
    image: '/images/services/beslenme.png',
    content: 'Doğru beslenme, evcil hayvanların sağlıklı bir yaşam sürmesinde temel rol oynar. Kliniğimizde sunulan beslenme danışmanlığı hizmeti, her hayvanın bireysel ihtiyaçlarını göz önünde bulundurur. Yaş, cinsiyet, ırk, aktivite düzeyi, sağlık durumu ve yaşam tarzına göre özel beslenme programları oluşturulur. Yavru, yetişkin ve geriatrik dönemlerde farklılaşan besin gereksinimleri belirlenir. Obezite, diyabet, böbrek yetmezliği, karaciğer hastalıkları, gıda alerjileri gibi özel durumlarda terapötik diyet programları düzenlenir. Ticari mama seçimi, ev yapımı diyet önerileri, porsiyon kontrolü ve besin takviyesi kullanımı konularında detaylı bilgilendirme yapılır. Düzenli kilo takibi ve vücut kondisyon skorlaması ile beslenme programının etkinliği değerlendirilir.'
  },
  {
    icon: <Smile className="w-8 h-8" />,
    title: 'Ağız ve Diş Sağlığı',
    image: '/images/services/dis-sagligi.png',
    content: 'Ağız ve diş sağlığı, evcil hayvanların genel sağlığını doğrudan etkileyen önemli bir faktördür. Kliniğimizde sunulan dental hizmetler, koruyucu bakımdan kapsamlı tedavilere kadar geniş bir yelpazede yer alır. Diş taşı temizliği ultrasonik cihazlarla profesyonel olarak yapılır. Diş eti hastalıkları, diş çürükleri, kırık dişler ve ağız içi enfeksiyonlar modern tekniklerle tedavi edilir. Diş çekimi ve basit cerrahi müdahaleler gerektiğinde uygulanır. Her dental işlem öncesi detaylı ağız muayenesi yapılır ve gerektiğinde dental röntgen çekilir. İşlemler anestezi altında, hasta monitorizasyonu eşliğinde gerçekleştirilir. Diş bakımı konusunda pet sahiplerine eğitim verilir ve düzenli kontrol programı oluşturulur.'
  },
  {
    icon: <QrCode className="w-8 h-8" />,
    title: 'Mikroçip ve Kimliklendirme',
    image: '/images/services/mikrochip.png',
    content: 'Mikroçip uygulaması, evcil hayvanların kaybolması durumunda bulunabilmesi için en güvenilir yöntemdir. Pirinç tanesi büyüklüğündeki mikroçip, özel bir enjektör yardımıyla hayvanın deri altına yerleştirilir. Her mikroçipte benzersiz bir kimlik numarası bulunur ve bu numara uluslararası veri tabanlarında kayıt altına alınır. İşlem lokal anestezi gerektirmeyecek kadar basit ve ağrısızdır, sadece birkaç dakika sürer. Mikroçip uygulaması sonrası pet sahibine mikroçip sertifikası ve kimlik kartı verilir. Ayrıca pasaport çıkarma, yurt dışı seyahat işlemleri ve resmi kayıt gerektiren durumlarda danışmanlık hizmeti sunulur. Mikroçip bilgileri düzenli olarak kontrol edilir ve gerektiğinde güncellenir.'
  }
];

export default function HealthServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-4 pt-16">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Sağlık Hizmetleri
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed"
          >
            Evcil dostlarımızın sağlıklı bir yaşam sürdürebilmeleri için koruyucu hekimlik ve düzenli takip hizmetleri son derece önemlidir. Kliniğimizde sunduğumuz sağlık hizmetleri, hastalıkları önlemeye yönelik olduğu kadar erken teşhis ve etkili tedavi amacı da taşır. İşte sunduğumuz kapsamlı sağlık hizmetleri:
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