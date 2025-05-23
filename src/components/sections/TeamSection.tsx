'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const team = [
  {
    name: 'DR. AHMET YILMAZ',
    role: 'BAŞ VETERİNER HEKİM',
    image: '/images/team/doctor-1.jpg',
    social: {
      twitter: '#',
      facebook: '#',
      linkedin: '#'
    }
  },
  {
    name: 'DR. AYŞE DEMİR',
    role: 'CERRAHİ UZMANI',
    image: '/images/team/doctor-2.jpg',
    social: {
      twitter: '#',
      facebook: '#',
      linkedin: '#'
    }
  },
  {
    name: 'DR. MEHMET KAYA',
    role: 'İÇ HASTALIKLARI UZMANI',
    image: '/images/team/doctor-3.jpg',
    social: {
      twitter: '#',
      facebook: '#',
      linkedin: '#'
    }
  }
];

export default function TeamSection() {
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
            UZMAN EKİBİMİZ
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-gray-600"
          >
            Deneyimli ve profesyonel veteriner hekimlerimizle evcil dostlarınıza en iyi bakımı sunuyoruz.
          </motion.p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group text-center"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="relative mb-6 overflow-hidden rounded-2xl"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={500}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 p-6 opacity-0 transition-all duration-300 group-hover:bottom-4 group-hover:opacity-100">
                  <motion.a 
                    whileHover={{ y: -4 }}
                    href={member.social.twitter} 
                    className="rounded-full bg-white p-2 text-gray-900 transition-colors hover:bg-blue-100"
                  >
                    <Twitter size={20} />
                  </motion.a>
                  <motion.a 
                    whileHover={{ y: -4 }}
                    href={member.social.facebook} 
                    className="rounded-full bg-white p-2 text-gray-900 transition-colors hover:bg-blue-100"
                  >
                    <Facebook size={20} />
                  </motion.a>
                  <motion.a 
                    whileHover={{ y: -4 }}
                    href={member.social.linkedin} 
                    className="rounded-full bg-white p-2 text-gray-900 transition-colors hover:bg-blue-100"
                  >
                    <Linkedin size={20} />
                  </motion.a>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                <h3 className="mb-1 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="pointer-events-none absolute left-0 top-1/3 opacity-10">
          <div className="h-96 w-96 rounded-full bg-blue-400 blur-3xl"></div>
        </div>
        <div className="pointer-events-none absolute right-0 top-2/3 opacity-10">
          <div className="h-64 w-64 rounded-full bg-blue-600 blur-3xl"></div>
        </div>
      </motion.div>
    </section>
  );
} 