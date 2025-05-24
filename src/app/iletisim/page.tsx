'use client';

import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Instagram } from 'lucide-react';

interface ContactDetail {
  label: string;
  value: string;
  href?: string;
}

interface ContactInfo {
  icon: React.ElementType;
  title: string;
  details: ContactDetail[];
}

const contactInfo: ContactInfo[] = [
  {
    icon: Phone,
    title: 'TELEFON',
    details: [
      { label: 'TELEFON & WHATSAPP', value: '0554 173 05 86', href: 'tel:+905541730586' }
    ]
  },
  {
    icon: Clock,
    title: 'ÇALIŞMA SAATLERİ',
    details: [
      { label: 'HAFTA İÇİ', value: '09:30 - 21:00' },
      { label: 'CUMARTESİ', value: '09:30 - 21:00' },
      { label: 'PAZAR', value: '14:00 - 20:00' }
    ]
  },
  {
    icon: MapPin,
    title: 'ADRES',
    details: [
      { label: 'KLİNİK', value: 'Atatürk Mahallesi, 63. Sokak No:110/B' },
      { label: 'BÖLGE', value: 'Buca / İzmir' }
    ]
  },
  {
    icon: Instagram,
    title: 'SOSYAL MEDYA',
    details: [
      { 
        label: 'INSTAGRAM', 
        value: '@mekvetveterinerklinigi',
        href: 'https://www.instagram.com/mekvetveterinerklinigi/'
      }
    ]
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Main Content Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="h-full"
            >
              <div className="overflow-hidden rounded-xl bg-white p-3 shadow-lg">
                <div className="aspect-[4/3] w-full">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.8001527191814!2d27.186821875379497!3d38.37674437725771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b961469183c1ff%3A0x1cdeda80db00e4da!2sMekvet%20veteriner%20klinigi!5e0!3m2!1str!2str!4v1748101327550!5m2!1str!2str" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </motion.div>

            {/* Contact Info Section */}
            <div className="grid grid-cols-2 gap-3">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                    className={`group flex h-full flex-col rounded-xl bg-white p-4 text-center shadow transition-all duration-300 hover:shadow-md ${
                      info.icon === Instagram ? 'hover:bg-gradient-to-br hover:from-purple-600/10 hover:to-pink-500/10' : ''
                    }`}
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className={`mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 ${
                        info.icon === Instagram 
                          ? 'bg-gradient-to-br from-purple-600 to-pink-500 text-white' 
                          : 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
                      }`}
                    >
                      <Icon size={20} />
                    </motion.div>
                    <h3 className="mb-2 text-base font-bold text-gray-900">{info.title}</h3>
                    <div className="flex grow flex-col justify-center space-y-1">
                      {info.details.map((detail) => (
                        <div key={detail.label}>
                          <p className="text-xs font-medium text-gray-500">{detail.label}</p>
                          {detail.href ? (
                            <a 
                              href={detail.href}
                              className={`text-xs font-semibold transition-colors duration-300 ${
                                info.icon === Instagram 
                                  ? 'text-gray-900 hover:text-pink-600' 
                                  : 'text-gray-900 hover:text-blue-600'
                              }`}
                            >
                              {detail.value}
                            </a>
                          ) : (
                            <p className="text-xs font-semibold text-gray-900">
                              {detail.value}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Elements */}
      <div className="pointer-events-none fixed left-0 top-1/4 -z-10 opacity-10">
        <div className="h-96 w-96 rounded-full bg-blue-400 blur-3xl"></div>
      </div>
      <div className="pointer-events-none fixed right-0 top-3/4 -z-10 opacity-10">
        <div className="h-64 w-64 rounded-full bg-blue-600 blur-3xl"></div>
      </div>
    </div>
  );
} 