'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">Bir Hata Oluştu</h1>
        <p className="mb-8 text-lg text-gray-600">
          Üzgünüz, bir şeyler yanlış gitti. Lütfen tekrar deneyin.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={reset}
            className="rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-blue-700"
          >
            Tekrar Dene
          </button>
          <Link
            href="/"
            className="rounded-full border-2 border-gray-300 px-8 py-3 text-lg font-semibold text-gray-700 transition-all hover:border-blue-600 hover:text-blue-600"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </div>
  );
} 