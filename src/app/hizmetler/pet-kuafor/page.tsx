'use client';

import { Scissors, Bath, Footprints, Ear, Heart, Brush } from 'lucide-react';
import ServiceLayout from '@/components/layouts/ServiceLayout';

const services = [
  {
    icon: <Scissors className="w-8 h-8" />,
    title: 'Tüy Kesimi ve Mevsimsel Tıraş',
    image: '/images/services/tuy-kesimi.png',
    content: 'Evcil hayvanların tüy yapısı ve mevsimsel döngüleri dikkate alınarak profesyonelce uygulanan tıraş işlemleri, hem rahatlık sağlar hem de cilt sağlığını destekler. Irka özel kesim teknikleri ile estetik bir görünüm elde edilirken, aşırı tüy dökülmesinin önüne geçilir. Yaz aylarında serinlik sağlayan tıraşlar ve kışa hazırlık için şekillendirme işlemleri, hijyenik koşullarda ve veteriner kontrolünde gerçekleştirilir.'
  },
  {
    icon: <Bath className="w-8 h-8" />,
    title: 'Banyo ve Deri Bakımı',
    image: '/images/services/banyo.png',
    content: 'Pet kuaför hizmetlerimizin en önemli adımlarından biri olan banyo uygulamaları, her hayvanın cilt tipine uygun özel şampuanlarla gerçekleştirilir. Deri pH dengesi korunarak yapılan banyo işlemleri, kötü koku oluşumunu önler, kaşıntı ve tahriş riskini azaltır. Profesyonel kurutma teknikleri ile hem hijyen hem de konfor sağlanır.'
  },
  {
    icon: <Footprints className="w-8 h-8" />,
    title: 'Tırnak Kesimi ve Ayak Bakımı',
    image: '/images/services/tirnak-kesimi.png',
    content: 'Evcil hayvanlarda düzenli tırnak kesimi, yürüme konforu ve ayak sağlığı açısından büyük önem taşır. Uzamış tırnaklar yalnızca yürüyüşü zorlaştırmakla kalmaz, aynı zamanda eklem ve patilerde baskıya neden olabilir. Kliniğimizde, uygun ekipman ve uzman ellere emanet edilen tırnak kesimi işlemleri ile güvenli bir bakım sağlanır.'
  },
  {
    icon: <Ear className="w-8 h-8" />,
    title: 'Kulak ve Göz Temizliği',
    image: '/images/services/kulak-goz.png',
    content: 'Kulak ve göz temizliği, enfeksiyonların önlenmesi ve genel hijyen için düzenli olarak yapılması gereken bakım işlemlerindendir. Kliniğimizde kulak içi temizliği, göz akıntılarının giderilmesi ve göz çevresi bakımı özenle gerçekleştirilir. Özellikle kulak yapısı hassas olan ırklar için özel çözümler sunulur.'
  },
  {
    icon: <Brush className="w-8 h-8" />,
    title: 'Parazit Temizliği ve Tüy Bakımı',
    image: '/images/services/parazit.png',
    content: 'Dış parazitlerin tüylerde tutunmasını ve çoğalmasını engellemek amacıyla uygulanan özel temizlik ve bakım işlemleri ile tüy sağlığı korunur. Tarama, parazit tarama spreyi ve koruyucu solüsyonlarla gerçekleştirilen işlemler sayesinde evcil dostlarımız çok daha konforlu hisseder.'
  }
];

export default function PetGroomingPage() {
  return (
    <ServiceLayout
      title="Pet Kuaför Hizmetleri"
      description="Evcil dostlarımızın hijyenik, sağlıklı ve mutlu bir yaşam sürdürebilmeleri için düzenli bakım uygulamaları büyük önem taşır. Kliniğimizde sunduğumuz pet kuaför hizmetleri, yalnızca estetik değil, aynı zamanda sağlık açısından da fayda sağlar. Tüy sağlığının korunması, parazitlerin önlenmesi ve genel konfor için düzenli kuaför bakımı önerilir. İşte kliniğimizde sunduğumuz kapsamlı pet kuaför hizmetleri:"
      services={services}
    />
  );
} 