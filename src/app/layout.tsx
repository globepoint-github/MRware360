import { ReactNode } from "react";
import { Inter } from "next/font/google";
import dynamic from 'next/dynamic';
import '../app/globals.css';

const inter = Inter({ subsets: ["latin"] });

const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
