'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'TELEFON',
    details: [
      { label: 'ACİL TELEFON', value: '0232 520 25 75' },
      { label: 'WHATSAPP', value: '0532 xxx xx xx' }
    ]
  },
  {
    icon: Mail,
    title: 'E-POSTA',
    details: [
      { label: 'GENEL BİLGİ', value: 'info@veteriner.com' },
      { label: 'RANDEVU', value: 'randevu@veteriner.com' }
    ]
  },
  {
    icon: MapPin,
    title: 'ADRES',
    details: [
      { label: 'KLİNİK', value: 'Atatürk Mah. Gazi Bulvarı No:123' },
      { label: 'BÖLGE', value: 'Bornova / İzmir' }
    ]
  },
  {
    icon: Clock,
    title: 'ÇALIŞMA SAATLERİ',
    details: [
      { label: 'HAFTA İÇİ', value: '09:00 - 19:00' },
      { label: 'HAFTA SONU', value: '10:00 - 17:00' }
    ]
  }
];

export default function ContactSection() {
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
            İLETİŞİM BİLGİLERİ
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-gray-600"
          >
            Evcil dostlarınızın sağlığı için 7/24 hizmetinizdeyiz. Bize aşağıdaki kanallardan ulaşabilirsiniz.
          </motion.p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={info.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group rounded-2xl bg-gray-50 p-8 text-center shadow-lg transition-all duration-300 hover:bg-white hover:shadow-xl"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white"
                >
                  <Icon size={32} />
                </motion.div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">{info.title}</h3>
                {info.details.map((detail) => (
                  <div key={detail.label} className="mb-2">
                    <p className="text-sm font-medium text-gray-500">{detail.label}</p>
                    <p className="text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                      {detail.value}
                    </p>
                  </div>
                ))}
              </motion.div>
            );
          })}
        </div>

        {/* Map */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 overflow-hidden rounded-2xl shadow-xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.346789!2d27.123456!3d38.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDA3JzM0LjQiTiAyN8KwMDcnMzQuNCJF!5e0!3m2!1str!2str!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* Decorative Elements */}
        <div className="pointer-events-none absolute left-0 top-1/4 opacity-10">
          <div className="h-96 w-96 rounded-full bg-blue-400 blur-3xl"></div>
        </div>
        <div className="pointer-events-none absolute right-0 top-3/4 opacity-10">
          <div className="h-64 w-64 rounded-full bg-blue-600 blur-3xl"></div>
        </div>
      </motion.div>
    </section>
  );
} 