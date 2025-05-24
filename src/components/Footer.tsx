import Link from 'next/link';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

const services = [
  {
    title: 'Sağlık Hizmetleri',
    href: '/hizmetler/saglik-hizmetleri'
  },
  {
    title: 'Genel Cerrahi',
    href: '/hizmetler/genel-cerrahi'
  },
  {
    title: 'Evde Sağlık Hizmetlerimiz',
    href: '/hizmetler/evde-saglik'
  }
];

export default function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Information Grid */}
        <div className="grid gap-6 md:grid-cols-4">
          {/* İletişim */}
          <div>
            <h4 className="mb-3 text-base font-semibold text-blue-900">İletişim</h4>
            <div className="space-y-1.5 text-sm text-blue-700">
              <p>Atatürk Mahallesi, 63. Sokak No:110/B</p>
              <p>Buca / İzmir</p>
              <p>
                <a href="tel:+905541730586" className="text-blue-600 transition-colors hover:text-blue-800">
                  +90 554 173 05 86
                </a>
              </p>
            </div>
          </div>

          {/* Çalışma Saatleri */}
          <div>
            <h4 className="mb-3 text-base font-semibold text-blue-900">Çalışma Saatleri</h4>
            <div className="space-y-1.5 text-sm text-blue-700">
              <div>
                <p className="font-medium">Hafta içi</p>
                <p>09:30 - 21:00</p>
              </div>
              <div>
                <p className="font-medium">Cumartesi</p>
                <p>09:30 - 21:00</p>
              </div>
              <div>
                <p className="font-medium">Pazar</p>
                <p>14:00 - 20:00</p>
              </div>
            </div>
          </div>

          {/* Hizmetlerimiz */}
          <div>
            <h4 className="mb-3 text-base font-semibold text-blue-900">Hizmetlerimiz</h4>
            <ul className="space-y-1.5 text-sm">
              {services.map((service) => (
                <li key={service.title}>
                  <Link 
                    href={service.href}
                    className="text-blue-700 transition-colors hover:text-blue-900"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sosyal Medya */}
          <div>
            <h4 className="mb-3 text-base font-semibold text-blue-900">Sosyal Medya</h4>
            <div className="text-sm text-blue-700">
              <p className="mb-2">Sosyal Medyada Bizi Takip Edin!</p>
              <a
                href="https://www.instagram.com/mekvetveterinerklinigi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 px-4 py-2 text-white transition-transform hover:scale-105"
              >
                <Instagram className="h-4 w-4" />
                <span className="text-sm font-medium">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Logo Section */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo.png"
              alt="MEKVET Logo"
              width={160}
              height={160}
              className="h-32 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-3xl font-bold tracking-tight text-blue-600">MEKVET</span>
              <span className="text-xl font-medium text-blue-500">Veteriner Kliniği</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-blue-100 pt-4 text-center">
          <p className="text-sm text-blue-700">© MEKVET Veteriner Kliniği, Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  );
} 