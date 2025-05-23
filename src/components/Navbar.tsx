'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const navigation = [
  { 
    name: 'ANA SAYFA', 
    href: '/' 
  },
  { 
    name: 'KLİNİKLERİMİZ',
    href: '/kliniklerimiz',
    children: [
      { name: 'BORNOVA POLİKLİNİĞİMİZ', href: '/kliniklerimiz/bornova' },
      { name: 'ALSANCAK KLİNİĞİMİZ', href: '/kliniklerimiz/alsancak' },
      { name: 'KÜÇÜKPARK KLİNİĞİMİZ', href: '/kliniklerimiz/kucukpark' },
    ]
  },
  { 
    name: 'HİZMETLERİMİZ',
    href: '/hizmetler',
    children: [
      { name: 'AŞILAMA VE MİKROÇİP UYGULAMA', href: '/hizmetler/asilama-mikrochip' },
      { name: 'KISIRLAŞTIRMA', href: '/hizmetler/kisirlatirma' },
      { name: 'DAHİLİYE', href: '/hizmetler/dahiliye' },
      { name: 'CERRAHİ', href: '/hizmetler/cerrahi' },
      { name: 'ENDOSKOPİ', href: '/hizmetler/endoskopi' },
      { name: 'ULTRASON - DOPPLER - EKOKARDİYOGRAFİ', href: '/hizmetler/ultrason' },
      { name: 'LABORATUVAR', href: '/hizmetler/laboratuvar' },
      { name: 'ACİL HEKİMLİĞİ', href: '/hizmetler/acil' },
    ]
  },
  { name: 'FİZİK TEDAVİ', href: '/fizik-tedavi' },
  { name: 'BLOG', href: '/blog' },
  { name: 'İLETİŞİM', href: '/iletisim' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 50) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed left-0 right-0 top-0 z-50"
    >
      {/* TopBanner */}
      <div className="bg-blue-600 py-2 transition-colors duration-300 hover:bg-blue-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center text-white sm:justify-between">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 animate-pulse" />
              <span className="text-sm font-semibold">7/24 ACİL TELEFON:</span>
              <a href="tel:+902325202575" className="text-sm font-bold transition-colors hover:text-blue-100">
                0232 520 25 75
              </a>
            </div>
            <div className="hidden items-center gap-4 sm:flex">
              <a href="#" className="text-sm font-medium transition-colors hover:text-blue-100">
                ENGLISH
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="bg-white shadow-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="p-0 transition-transform hover:scale-105">
              <span className="sr-only">Veteriner Kliniği</span>
              <Image
                className="h-16 w-auto"
                src="/images/logo.png"
                alt="Logo"
                width={100}
                height={100}
                priority
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Menüyü aç</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-semibold leading-6 text-gray-600 transition-colors hover:text-blue-600"
                >
                  {item.name}
                  {item.children && (
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </Link>
                {item.children && (
                  <div className="absolute left-0 top-full z-10 mt-2 hidden w-56 rounded-md bg-white p-2 shadow-lg ring-1 ring-gray-900/5 transition-all duration-200 group-hover:block">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-600"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {/* Randevu Al button removed */}
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden'}`}>
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Veteriner Kliniği</span>
              <Image
                className="h-12 w-auto"
                src="/images/logo.png"
                alt="Logo"
                width={100}
                height={100}
                priority
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-600 transition-colors hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Menüyü kapat</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-600 transition-colors hover:bg-gray-50 hover:text-blue-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-blue-600"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/randevu"
                  className="block rounded-lg bg-blue-600 px-4 py-2.5 text-center text-base font-semibold text-white transition-all duration-300 hover:bg-blue-700 active:scale-95"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  RANDEVU AL
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 