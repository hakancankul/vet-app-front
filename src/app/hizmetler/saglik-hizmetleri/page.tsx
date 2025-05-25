'use client';

import { Stethoscope, Syringe, TestTube, Microscope, HeartPulse, Pill } from 'lucide-react';
import ServiceLayout from '@/components/layouts/ServiceLayout';

const services = [
  {
    icon: <Stethoscope className="w-8 h-8" />,
    title: 'Genel Muayene ve Kontrol',
    image: '/images/services/genel-muayene.jpg',
    content: 'Evcil hayvanlarınızın sağlık durumunun kapsamlı değerlendirilmesi için düzenli kontroller büyük önem taşır. Genel muayene sırasında fiziksel kontrol, ağırlık takibi, kalp ve solunum sistemi kontrolü, deri ve tüy sağlığı değerlendirmesi yapılır. Erken teşhis ve önleyici sağlık hizmetleri ile olası sağlık sorunlarının önüne geçilir.'
  },
  {
    icon: <Syringe className="w-8 h-8" />,
    title: 'Aşılama ve Parazit Kontrolü',
    image: '/images/services/asilama.jpg',
    content: 'Evcil hayvanların sağlıklı bir yaşam sürdürebilmeleri için düzenli aşılama programı ve parazit kontrolü gereklidir. Yaş ve yaşam koşullarına uygun aşı takvimi oluşturulur, iç ve dış parazitlere karşı koruyucu uygulamalar yapılır. Aşı kartı düzenlenerek takip sağlanır.'
  },
  {
    icon: <TestTube className="w-8 h-8" />,
    title: 'Laboratuvar Tetkikleri',
    image: '/images/services/laboratuvar.jpg',
    content: 'Modern laboratuvar ekipmanlarımızla kan, idrar ve dışkı tahlilleri yapılarak detaylı sağlık değerlendirmesi sağlanır. Rutin kontroller ve hastalık şüphesi durumunda gerçekleştirilen tetkikler ile erken tanı konularak uygun tedavi planlanır.'
  },
  {
    icon: <Microscope className="w-8 h-8" />,
    title: 'Görüntüleme ve Tanı',
    image: '/images/services/goruntuleme.jpg',
    content: 'Dijital röntgen ve ultrason cihazlarımızla iç organların detaylı görüntülenmesi sağlanır. Kemik ve eklem problemleri, iç organ hastalıkları ve gebelik takibi gibi durumlarda hassas tanı imkanı sunar.'
  },
  {
    icon: <HeartPulse className="w-8 h-8" />,
    title: 'Diş ve Ağız Sağlığı',
    image: '/images/services/dis-sagligi.png',
    content: 'Diş taşı temizliği, diş çekimi ve ağız içi tedaviler profesyonel ekipmanlarla gerçekleştirilir. Düzenli diş bakımı ve kontroller ile ağız kokusunun önlenmesi, diş eti hastalıklarının tedavisi sağlanır.'
  },
  {
    icon: <Pill className="w-8 h-8" />,
    title: 'İlaç ve Tedavi Takibi',
    image: '/images/services/ilac-tedavi.png',
    content: 'Hastalık durumunda reçete edilen ilaçların düzenli kullanımı ve tedavi sürecinin takibi yapılır. Kronik hastalıkların yönetimi, ilaç dozlarının ayarlanması ve yan etkilerin kontrolü sağlanır.'
  }
];

export default function HealthServicesPage() {
  return (
    <ServiceLayout
      title="Sağlık Hizmetleri"
      description="Evcil hayvanlarınızın sağlığı bizim için en önemli önceliktir. Modern tıbbi ekipmanlar ve uzman kadromuzla, koruyucu sağlık hizmetlerinden tedavi süreçlerine kadar geniş bir yelpazede hizmet sunuyoruz. Düzenli sağlık kontrolleri ve erken tanı ile evcil dostlarınızın yaşam kalitesini artırıyor, uzun ve sağlıklı bir ömür sürmelerini hedefliyoruz. İşte kliniğimizde sunduğumuz kapsamlı sağlık hizmetleri:"
      services={services}
    />
  );
} 