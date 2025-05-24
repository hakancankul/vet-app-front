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
    <section className="relative overflow-hidden bg-gray-50 pt-12 pb-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            NEDEN BİZ?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base text-gray-600 sm:text-lg"
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 text-center shadow-lg"
              >
                <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <Icon size={36} />
                </div>
                <h3 className="relative mb-4 text-xl font-bold text-gray-900">
                  {feature.name}
                </h3>
                <p className="relative text-gray-600">
                  {feature.description}
                </p>
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
      </div>
    </section>
  );
} 