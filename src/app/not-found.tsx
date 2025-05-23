import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="mb-2 text-6xl font-bold text-blue-600">404</h1>
        <h2 className="mb-4 text-4xl font-bold text-gray-900">Sayfa Bulunamadı</h2>
        <p className="mb-8 text-lg text-gray-600">
          Üzgünüz, aradığınız sayfa bulunamadı. Lütfen ana sayfaya dönün.
        </p>
        <Link
          href="/"
          className="inline-block rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-blue-700"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
} 