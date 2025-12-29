// src/app/home/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Section08() {
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
    <div className="sec08">
      <div className='innerCont'>
        {/* {t("")} */}
        <div className='textBox'>
          <p className='fs_32'>{t("sec08Text1-1")}
            <span>{t("sec08Text1-2")}</span>
          </p>
          <button className='fs_16'>{t("sec08Text2-1")}</button>
        </div>
      </div>
    </div>
  );
}
