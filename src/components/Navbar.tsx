'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { Menu, X, Phone, Instagram, ChevronDown } from 'lucide-react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

const services = [
  { 
    name: 'Sağlık Hizmetleri',
    href: '/hizmetler/saglik-hizmetleri'
  },
  { 
    name: 'Genel Cerrahi',
    href: '/hizmetler/genel-cerrahi'
  },
  { 
    name: 'Pet Kuaför & Bakım',
    href: '/hizmetler/pet-kuafor'
  },
  { 
    name: 'Pet Mamalar',
    href: '/hizmetler/pet-mama'
  }
];

const navigation = [
  { 
    name: 'ANA SAYFA', 
    href: '/' 
  },
  { 
    name: 'HİZMETLERİMİZ',
    href: '/#hizmetlerimiz',
    dropdown: true
  },
  { 
    name: 'EKİBİMİZ',
    href: '/#ekibimiz'
  },
  { 
    name: 'GALERİ',
    href: '/galeri'
  },
  { 
    name: 'İLETİŞİM',
    href: '/iletisim'
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
      setMobileMenuOpen(false);
      setDropdownOpen(false);
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
            <Link href="/" className="p-0">
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
                <div key={item.name} className="relative" ref={item.dropdown ? dropdownRef : null}>
                  {item.dropdown ? (
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="flex items-center gap-1 text-sm font-semibold leading-6 text-gray-600 transition-colors hover:text-blue-600"
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-sm font-semibold leading-6 text-gray-600 transition-colors hover:text-blue-600"
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && dropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                          onClick={() => setDropdownOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
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
              mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                        className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                      >
                        {item.name}
                        <ChevronDown className={`h-4 w-4 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {mobileDropdownOpen && (
                        <div className="ml-4 space-y-1">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-blue-600"
                              onClick={() => {
                                setMobileDropdownOpen(false);
                                setMobileMenuOpen(false);
                              }}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
} 