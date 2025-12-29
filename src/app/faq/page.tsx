"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../i18n";
import "./faq.css";

const FAQPage = () => {
  const { t, i18n } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);
  const toggleAnswer = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

   // FAQ 키 배열
  const faqKeys = ['faq1', 'faq2', 'faq3','faq4','faq5'];

  return (
    <div className="subPage">
      <div className="subTop">
        <div className="textBox">
          <p className="fs_36">{t("faqTitle")}</p>
          <p className="fs_20">{t("faqSub")}</p>
        </div>
      </div>
      <div className="subCont">
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
  );
};

export default FAQPage;
