import { ReactNode } from "react";
import { Inter } from "next/font/google";
import dynamic from 'next/dynamic';
import '../app/globals.css';
import '../app/common.css';
import Header from '@/components/Header';

const inter = Inter({ subsets: ["latin"] });

const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
