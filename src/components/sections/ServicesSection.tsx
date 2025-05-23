'use client';

import { motion } from 'framer-motion';
import { 
  Syringe, 
  Stethoscope, 
  Microscope, 
  Scissors, 
  Heart, 
  Hotel 
} from 'lucide-react';

const services = [
  {
    title: 'AŞILAMA',
    description: 'Düzenli aşılama programları ile evcil hayvanınızın sağlığını koruyoruz.',
    icon: Syringe
  },
  {
    title: 'GENEL MUAYENE',
    description: 'Kapsamlı sağlık kontrolleri ve önleyici bakım hizmetleri.',
    icon: Stethoscope
  },
  {
    title: 'LABORATUVAR',
    description: 'Modern cihazlarla tam donanımlı laboratuvar hizmetleri.',
    icon: Microscope
  },
  {
    title: 'CERRAHİ OPERASYONLAR',
    description: 'Deneyimli ekibimizle güvenli cerrahi müdahaleler.',
    icon: Scissors
  },
  {
    title: 'ACİL SERVİS',
    description: '7/24 acil veteriner hizmetleri.',
    icon: Heart
  },
  {
    title: 'PET HOTEL',
    description: 'Konforlu ve güvenli pet hotel hizmetimiz.',
    icon: Hotel
  }
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-4xl font-bold text-gray-900"
          >
            HİZMETLERİMİZ
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-gray-600"
          >
            Modern ekipmanlarımız ve uzman kadromuz ile evcil dostlarınıza en iyi hizmeti sunuyoruz.
          </motion.p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
                }}
                className="group rounded-xl bg-white p-8 shadow-lg transition-all duration-300"
              >
                <div className="mb-4 inline-block rounded-full bg-blue-100 p-3 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={24} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Decorative Elements */}
        <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 opacity-10">
          <div className="h-64 w-64 rounded-full bg-blue-600 blur-3xl"></div>
        </div>
        <div className="pointer-events-none absolute right-0 top-0 opacity-10">
          <div className="h-96 w-96 rounded-full bg-blue-400 blur-3xl"></div>
        </div>
      </motion.div>
    </section>
  );
} 