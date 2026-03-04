import { ReactNode } from "react";
import { Inter } from "next/font/google";
import dynamic from 'next/dynamic';
import '../app/globals.css';
import '../app/common.css';
import type { Metadata } from "next";
export { metadata } from './metadata';

const inter = Inter({ subsets: ["latin"] });
const Header = dynamic(() => import('@/components/Header'), { ssr: false });
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
