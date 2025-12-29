// src/app/home/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeroBanner from '@/components/ui/HeroBanner';

export default function Section01() {
  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const isEnglish = i18n.language === 'en';

  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
    setMounted(true);
  }, [i18n]);

  // SSR 중에는 빈 화면 반환 (클라이언트에서만 렌더링)
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600 font-korean">로딩 중...</p>
        </div>
      </div>
    );
  }

  const title = (
    <>
      <span>{t('Medical Reality,')}</span> <span>{t('MRWARE')}</span>
    </>
  );

  const subtitle = (
    <div className={`${isEnglish ? 'space-y-3 sm:space-y-4' : 'space-y-4'}`}>
      <p className={isEnglish 
        ? '' 
        : ''}>
        <span className="line-1">{t("herotext01")}<br/></span>
        <span className="line-2">{t("herotext02")}</span>
      </p>
    </div>
  );

  return (
    <div className="sec01 pin-section min-h-screen">
      <div className="absolute bg-cover bg-center inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover bg_vid"
          >
            <source src="/mrware_bg_video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="innerCont">
             <HeroBanner
                title={title}
                subtitle={subtitle}
            >
            </HeroBanner>
        </div>
     
    </div>
  );
}
