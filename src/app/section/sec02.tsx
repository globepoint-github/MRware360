// src/app/home/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Section02() {
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
    <div className="sec02 min-h-screen pin-section">
      <div className='innerCont'>
        {/* {t("")} */}
        <div className='textBox fs_32'>
          <p>{t("sec02Text1-1")} 
            <span>{t("sec02Text1-2")}  <span className='c_pur'>{t("sec02Text1-3")} </span></span>
          </p>
          <p>{t("sec02Text2-1")} 
            <span>{t("sec02Text2-2")}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
