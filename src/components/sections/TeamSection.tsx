'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const team = [
  {
    name: 'Dr. Ahmet Yılmaz',
    role: 'Baş Veteriner Hekim',
    image: '/images/team/doctor-1.jpg'
  },
  {
    name: 'Dr. Ayşe Kaya',
    role: 'Veteriner Hekim',
    image: '/images/team/doctor-2.jpg'
  },
  {
    name: 'Dr. Mehmet Demir',
    role: 'Veteriner Hekim',
    image: '/images/team/doctor-3.jpg'
  }
];

export default function TeamSection() {
  return (
    <section id="ekibimiz" className="relative overflow-hidden bg-gray-50 pt-12 pb-24 scroll-mt-40">
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
            EKİBİMİZ
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base text-gray-600 sm:text-lg"
          >
            Deneyimli ve uzman kadromuz ile evcil dostlarınıza en iyi hizmeti sunuyoruz.
          </motion.p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl bg-white text-center shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <motion.div 
                  className="relative aspect-[3/4] w-full overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center transition-transform duration-500"
                  />
                  {/* Gradient overlay for text readability */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                    initial={{ opacity: 0.5 }}
                    whileHover={{ opacity: 0.7 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Text container */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-6 text-center"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <motion.h3 
                      className="text-lg font-bold text-white"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {member.name}
                    </motion.h3>
                    <motion.p 
                      className="text-sm font-medium text-white/90"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.3 }}
                    >
                      {member.role}
                    </motion.p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
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