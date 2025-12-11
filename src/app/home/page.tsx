// src/app/home/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeroBanner from '@/components/ui/HeroBanner';
import ServiceCard from '@/components/ui/ServiceCard';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Home() {
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
        ? 'text-base sm:text-lg md:text-xl lg:text-2xl xl:text-h1 leading-relaxed' 
        : 'text-h1'}>
        <span className="line-1">{t('OntheMRWARE')}&nbsp;</span>
        <span className="line-2">{t('OntheMRWARE2')}</span>
      </p>
      <p className={`whitespace-nowrap px-2 ${
        isEnglish 
          ? 'text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed' 
          : 'text-[10px] sm:text-sm md:text-base lg:text-h1'
      }`}>
        {t('Frompractice')}&nbsp;{t('Frompractice2')}
      </p>
      <p className={isEnglish 
        ? 'text-base sm:text-lg md:text-xl lg:text-2xl xl:text-h1 leading-relaxed' 
        : 'text-h1'}>
        <span className="line-1">{t('newparadigm')}&nbsp;</span>
        <span className="line-2">{t('newparadigm2')}</span>
      </p>
    </div>
  );

  return (
    <div className="relative min-h-screen">
      <LanguageSwitcher />
      
      <HeroBanner
        title={title}
        subtitle={subtitle}
        backgroundVideo="/icare_main.mp4"
        overlay={true}
        overlayOpacity={0.4}
      >
        <div className="px-4 sm:px-8 md:px-16 lg:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-[1024px] mx-auto">
            <ServiceCard
              title={t('핵심간호술기')}
              image="/nursingskill.png"
              href="https://nursing360.mrware.world/"
              variant="nursing"
            />
            <ServiceCard
              title={t('물리치료')}
              image="/mr.png"
              href="https://rehab360.mrware.world/"
              variant="physio"
            />
            <ServiceCard
              title={t('요양보호')}
              image="/health.png"
              href="https://caregiver360.mrware.world/"
              variant="carehub"
            />
          </div>
        </div>
      </HeroBanner>
    </div>
  );
}
