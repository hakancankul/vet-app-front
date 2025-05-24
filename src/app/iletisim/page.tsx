'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon, LatLngExpression } from 'leaflet';

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
      { label: 'ACİL TELEFON', value: '0232 520 25 75', href: 'tel:+902325202575' },
      { label: 'WHATSAPP', value: '0532 xxx xx xx', href: 'https://wa.me/905321234567' }
    ]
  },
  {
    icon: Mail,
    title: 'E-POSTA',
    details: [
      { label: 'GENEL BİLGİ', value: 'info@veteriner.com', href: 'mailto:info@veteriner.com' },
      { label: 'RANDEVU', value: 'randevu@veteriner.com', href: 'mailto:randevu@veteriner.com' }
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
    icon: Clock,
    title: 'ÇALIŞMA SAATLERİ',
    details: [
      { label: 'HAFTA İÇİ', value: '09:00 - 19:00' },
      { label: 'HAFTA SONU', value: '10:00 - 17:00' }
    ]
  }
];

// Fix for default marker icon
const icon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const center: LatLngExpression = [38.375620, 27.157992];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-blue-600 py-12">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-3xl font-bold text-white sm:text-4xl"
            >
              İLETİŞİM
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-blue-100"
            >
              Evcil dostlarınızın sağlığı için 7/24 hizmetinizdeyiz. 
              Bize aşağıdaki kanallardan ulaşabilirsiniz.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Map Section */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="h-full"
            >
              <div className="sticky top-24 overflow-hidden rounded-2xl bg-white p-4 shadow-lg">
                <div className="aspect-[16/10] w-full relative">
                  <MapContainer 
                    center={center}
                    zoom={19}
                    style={{ height: "100%", width: "100%", position: "absolute" }}
                    scrollWheelZoom={false}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={center} icon={icon}>
                      <Popup>
                        Mek-Vet Veteriner Kliniği
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>
              </div>
            </motion.div>

            {/* Contact Info Section */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="grid gap-6 sm:grid-cols-2">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -4 }}
                      className="group rounded-2xl bg-white p-6 text-center shadow-lg transition-all duration-300 hover:shadow-xl"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white"
                      >
                        <Icon size={28} />
                      </motion.div>
                      <h3 className="mb-3 text-lg font-bold text-gray-900">{info.title}</h3>
                      {info.details.map((detail) => (
                        <div key={detail.label} className="mb-2">
                          <p className="text-sm font-medium text-gray-500">{detail.label}</p>
                          {detail.href ? (
                            <a 
                              href={detail.href}
                              className="text-base font-semibold text-gray-900 transition-colors duration-300 hover:text-blue-600"
                            >
                              {detail.value}
                            </a>
                          ) : (
                            <p className="text-base font-semibold text-gray-900">
                              {detail.value}
                            </p>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Media Section */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl bg-white p-6 text-center shadow-lg"
              >
                <h2 className="mb-4 text-xl font-bold text-gray-900">Sosyal Medya</h2>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://www.instagram.com/mekvetveterinerklinigi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 px-6 py-3 text-white transition-transform hover:scale-105"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="font-medium">Instagram</span>
                  </a>
                </div>
              </motion.div>
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