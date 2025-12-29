// src/app/home/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Section04() {
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
    <div className="sec04">
      <div className='innerCont'>
        <p className='titleText fs_32'>{t("sec04Text1-1")}</p>
        <div className='secCont'>
          <div className='contBox'>
            <img src="/mrware_web_sec04_img01.png" alt="제품 사용 이미지" width={770} height={432}/>
            <p className='descText fs_20'>{t("sec04Text2-1")}</p>
          </div>
          <div className='contBox'>
            <img src="/mrware_web_sec04_img02.png" alt="제품 사용 이미지" width={770} height={432}/>
            <p className='descText fs_20'>{t("sec04Text2-2")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
