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
    <section id="hizmetlerimiz" className="relative overflow-hidden bg-white pt-12 pb-24 scroll-mt-40">
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
            className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            HİZMETLERİMİZ
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base text-gray-600 sm:text-lg"
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
                  scale: 1.02,
                  y: -5,
                  transition: { type: "spring", stiffness: 300, damping: 15 }
                }}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-500"
              >
                <div className="relative z-10">
                  <motion.div 
                    className="mb-6 inline-block rounded-xl bg-blue-100 p-3 text-blue-600 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg"
                    whileHover={{ rotate: -8 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Icon size={28} className="transition-transform duration-500 group-hover:scale-110" />
                  </motion.div>
                  <motion.h3 
                    className="mb-4 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    {service.description}
                  </motion.p>
                </div>
                
                {/* Decorative background */}
                <motion.div 
                  className="absolute right-0 top-0 -z-10 h-full w-1/2 bg-gradient-to-l from-blue-50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  initial={{ x: 100 }}
                  whileHover={{ x: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 30 }}
                />
                <motion.div 
                  className="absolute bottom-0 left-0 -z-10 h-1/2 w-full bg-gradient-to-t from-blue-50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  initial={{ y: 50 }}
                  whileHover={{ y: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 30 }}
                />
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