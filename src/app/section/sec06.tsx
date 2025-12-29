// src/app/home/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Section06() {
  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const isEnglish = i18n.language === 'en';

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

   // FAQ 키 배열
  const faqKeys = ['faq1', 'faq2', 'faq3','faq4','faq5'];

  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
    setMounted(true);
  }, [i18n]);


  return (
    <div className="sec06">
      <div className='innerCont'>
        <p className='titleText fs_32'>{t("sec06Text1-1")}</p>
        <p className='subText fs_20'>{t("sec06Text1-2")}</p>
        <div className='secCont'>
          <ul>
             {faqKeys.map((faqKey, index) => (
              <li key={index}
                className={openIndex === index ? 'open' : ''}
                
              >
                <div
                  className='question'
                  onClick={() => toggleAnswer(index)}
                >
                  <div>
                    <span className='fs_26'>Q</span>
                    <p className='fs_20'>{t(`${faqKey}Question`)}</p>    
                  </div>      
                  <svg className={openIndex === index ? 'open' : ''} width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 10L10 1L19 10" stroke="#272727" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                <div className='answer'>
                  <div>
                    <span className='fs_26'>A</span>
                    <p className='fs_20'>{t(`${faqKey}Answer`)}</p>    
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
