import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Veteriner Kliniği | Profesyonel Veteriner Hizmetleri",
    template: "%s | Veteriner Kliniği"
  },
  description: "Modern ekipmanlarımız ve uzman kadromuz ile evcil dostlarınıza en iyi veteriner hizmetini sunuyoruz.",
  keywords: ["veteriner", "klinik", "pet", "hayvan hastanesi", "veteriner kliniği", "aşılama", "pet bakım"],
  authors: [{ name: "Veteriner Kliniği" }],
  creator: "Veteriner Kliniği",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    title: "Veteriner Kliniği | Profesyonel Veteriner Hizmetleri",
    description: "Modern ekipmanlarımız ve uzman kadromuz ile evcil dostlarınıza en iyi veteriner hizmetini sunuyoruz.",
    siteName: "Veteriner Kliniği"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.className} antialiased overflow-x-hidden`}>
        <Navbar />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
