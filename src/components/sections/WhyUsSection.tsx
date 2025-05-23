'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, UserPlus, Building2 } from 'lucide-react';

const features = [
  {
    name: 'GÜVENİLİR HİZMET',
    description: '20 yılı aşkın tecrübemizle evcil dostlarınıza en iyi bakımı sunuyoruz.',
    icon: Shield
  },
  {
    name: '7/24 HİZMET',
    description: 'Acil durumlar için 7 gün 24 saat hizmetinizdeyiz.',
    icon: Clock
  },
  {
    name: 'UZMAN KADRO',
    description: 'Alanında uzman veteriner hekimlerimizle profesyonel hizmet.',
    icon: UserPlus
  },
  {
    name: 'MODERN KLİNİK',
    description: 'Son teknoloji cihazlarla donatılmış modern kliniklerimiz.',
    icon: Building2
  }
];

export default function WhyUsSection() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-20">
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
            NEDEN BİZ?
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-gray-600"
          >
            Evcil dostlarınızın sağlığı için en iyi hizmeti sunmak önceliğimizdir.
          </motion.p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="text-center"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600"
                >
                  <Icon size={32} className="transition-transform duration-300 group-hover:rotate-12" />
                </motion.div>
                <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 hover:text-blue-600">
                  {feature.name}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Decorative Elements */}
        <div className="pointer-events-none absolute left-0 bottom-0 opacity-10">
          <div className="h-96 w-96 rounded-full bg-blue-400 blur-3xl"></div>
        </div>
        <div className="pointer-events-none absolute right-0 top-0 opacity-10">
          <div className="h-64 w-64 rounded-full bg-blue-600 blur-3xl"></div>
        </div>
      </motion.div>
    </section>
  );
} 