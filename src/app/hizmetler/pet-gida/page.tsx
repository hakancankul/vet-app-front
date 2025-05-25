'use client';

import { Baby, Dog, HeartPulse, Cookie } from 'lucide-react';
import ServiceLayout from '@/components/layouts/ServiceLayout';

const services = [
  {
    icon: <Baby className="w-8 h-8" />,
    title: 'Yavru Hayvan Mamaları',
    image: '/images/services/yavru-mama.jpg',
    content: 'Yavru evcil hayvanların sağlıklı gelişimi için özel olarak formüle edilmiş, yüksek kaliteli mama çeşitleri sunuyoruz. Büyüme dönemindeki protein, vitamin ve mineral ihtiyaçlarını karşılayan, sindirim sistemine uygun mamalar ile yavru dostlarımızın optimal beslenmesini sağlıyoruz. Her ırk ve yaş grubu için özel seçenekler mevcuttur.'
  },
  {
    icon: <Dog className="w-8 h-8" />,
    title: 'Yetişkin ve Kısırlaştırılmış Hayvan Mamaları',
    image: '/images/services/yetiskin-mama.jpg',
    content: 'Yetişkin ve kısırlaştırılmış evcil hayvanların farklılaşan besin ihtiyaçlarına yönelik özel mama seçenekleri sunuyoruz. Kilo kontrolü, kas yapısının korunması ve enerji dengesini gözeten formüller ile sağlıklı bir yaşam desteklenir. Premium markaların güvenilir ürünleri ile evcil dostlarınızın beslenmesinde kaliteyi garanti ediyoruz.'
  },
  {
    icon: <HeartPulse className="w-8 h-8" />,
    title: 'Özel Diyet ve Tedavi Mamaları',
    image: '/images/services/diyet-mama.jpg',
    content: 'Çeşitli sağlık sorunları yaşayan evcil hayvanlar için veteriner hekim kontrolünde önerilen özel diyet ve tedavi amaçlı mamalar bulunmaktadır. Böbrek, karaciğer, sindirim sistemi rahatsızlıkları, alerji gibi durumlar için özel formüle edilmiş mama çeşitleri ile tedavi sürecini destekliyoruz.'
  },
  {
    icon: <Cookie className="w-8 h-8" />,
    title: 'Ödül Mamaları ve Besin Takviyeleri',
    image: '/images/services/odul-mama.jpg',
    content: 'Eğitim sürecinde kullanılabilecek lezzetli ödül mamaları ve genel sağlığı destekleyici besin takviyeleri sunuyoruz. Vitamin, mineral, eklem sağlığı için glukozamin ve kondroitin içeren takviyeler, deri ve tüy sağlığı için omega yağ asitleri gibi özel ürünlerle evcil dostlarınızın yaşam kalitesini artırıyoruz.'
  }
];

export default function PetFoodPage() {
  return (
    <ServiceLayout
      title="Pet Gıda Hizmetleri"
      description="Evcil hayvanların sağlıklı ve mutlu bir yaşam sürdürebilmeleri için doğru beslenme büyük önem taşır. Kliniğimizde sunduğumuz pet gıda hizmetleri kapsamında, her yaş ve ırka özel premium kalitede mama çeşitleri ve besin takviyeleri bulunmaktadır. Veteriner hekimlerimizin önerileri doğrultusunda, evcil dostlarınızın bireysel ihtiyaçlarına uygun beslenme programları oluşturulur. İşte sunduğumuz kapsamlı pet gıda hizmetleri:"
      services={services}
    />
  );
} 