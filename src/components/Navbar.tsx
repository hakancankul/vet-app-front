'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone, Instagram } from 'lucide-react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

const navigation = [
  { 
    name: 'ANA SAYFA', 
    href: '/' 
  },
  { 
    name: 'HİZMETLERİMİZ',
    href: '/#hizmetlerimiz'
  },
  { 
    name: 'EKİBİMİZ',
    href: '/#ekibimiz'
  },
  { 
    name: 'GALERİ',
    href: '/#galeri'
  },
  { 
    name: 'İLETİŞİM',
    href: '/iletisim'
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
      setMobileMenuOpen(false);
    } else {
      setHidden(false);
    }
  });

  return (
    <div className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'} lg:transition-none`}>
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
              <a 
                href="https://www.instagram.com/mekvetveterinerklinigi/" 
                className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-100"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram sayfamızı ziyaret edin"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="bg-white shadow-md">
        <nav className="mx-auto max-w-7xl px-4 lg:px-8" aria-label="Global">
          {/* Main navbar content */}
          <div className="flex h-14 items-center">
            <Link href="/" className="p-0 transition-transform hover:scale-105">
              <span className="sr-only">Veteriner Kliniği</span>
              <div className="flex items-center gap-2 px-2 py-1.5">
                <Image
                  className="h-10 w-auto sm:h-12"
                  src="/images/logo.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  priority
                />
                <div className="flex flex-col">
                  <span className="text-base sm:text-lg font-bold tracking-tight text-blue-600">MEKVET</span>
                  <span className="text-[10px] sm:text-xs font-medium text-gray-600">Veteriner Kliniği</span>
                </div>
              </div>
            </Link>

            <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-12">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-600 transition-colors hover:text-blue-600"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <button
              type="button"
              className="lg:hidden ml-auto -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-600 transition-colors hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">{mobileMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Mobile menu */}
          <div 
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
} 