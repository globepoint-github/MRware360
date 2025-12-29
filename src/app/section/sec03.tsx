// src/app/home/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Section03() {
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


  return (
    <div className="sec03 min-h-screen pin-section">
      <div className='innerCont'>
        <div className='textBox fs_32'>
          <p>{t("sec03Text1-1")} 
            <span>{t("sec03Text1-2")}</span>
          </p>
          <p className='c_blue'>{t("sec03Text2-1")}</p>
        </div>
      </div>
    </div>
  );
}
