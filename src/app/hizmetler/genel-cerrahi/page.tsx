'use client';

import { Scale, Scissors, Heart, Ambulance, Eye, FlaskConical } from 'lucide-react';
import ServiceLayout from '@/components/layouts/ServiceLayout';

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
    <ServiceLayout
      title="Genel Cerrahi"
      description="Evcil hayvanların yaşam kalitesini korumak ve sağlıklarını yeniden kazandırmak amacıyla uygulanan cerrahi müdahaleler, veteriner tıbbında önemli bir yer tutar. Kliniğimizde gerçekleştirilen genel cerrahi operasyonlar, modern cihazlarla donatılmış steril ameliyathanemizde, uzman veteriner hekimler eşliğinde ve etik ilkeler doğrultusunda titizlikle uygulanır. İşte sunduğumuz kapsamlı cerrahi hizmetler:"
      services={services}
    />
  );
} 