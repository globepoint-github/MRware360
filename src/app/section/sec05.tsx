// src/app/home/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export default function Section0() {
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
    <div className="sec05">
      <div className='innerCont'>
        <p className='titleText fs_32'>{t("sec05Text1-1")}</p>
        <p className='subText fs_20'>{t("sec05Text1-2")}</p>
        <div className='secCont'>
          <div className='contBox'>
            <div className='imgBox'>
              <Image src="/mrware_nurse_pic.png" alt="제품 사용 이미지" quality={90}  width={500} height={500} />
            </div>
            <div className='textBox'>
              <div className='textOnly'>
                <div className='titleBox'>
                  <Image src="/mrware_nurse_icon.png" alt="간호술기 아이콘" width={70} height={70} />
                  <p className='fs_24'>{t("핵심간호술기")}</p>
                </div>
                <p className='fs_16'>{t("sec05Text2-2")}</p>
              </div>
              <button
              onClick={() => window.location.href = 'https://nursing360.mrware.world/'}
               className='btn fs_16'>{t("sec05Text2-1")}</button>
            </div>
          </div>
          <div className='contBox'>
            <div className='imgBox'>
              <Image src="/mrware_yoyang_pic.png" alt="제품 사용 이미지" quality={90} width={500} height={500} />
                            {/* <img src="/mrware_yoyang_pic.png" alt="제품 사용 이미지" /> */}
            </div>
            <div className='textBox'>
              <div className='textOnly'>
                <div className='titleBox'>
                  <Image src="/mrware_yoyang_icon.png" alt="요양보호 아이콘" width={70} height={70} />
                  <p className='fs_24'>{t("요양보호")}</p>
                </div>
                <p className='fs_16'>{t("sec05Text2-3")}</p>
              </div>
              <button
              onClick={() => window.location.href = 'https://caregiver360.mrware.world/'}
              className='btn fs_16'>{t("sec05Text2-1")}</button>
            </div>
          </div>
          <div className='contBox'>
            <div className='imgBox'>
              <Image src="/mrware_mully_pic.png" alt="제품 사용 이미지" quality={90} width={463} height={296} />
                            {/* <img src="/mrware_mully_pic.png" alt="제품 사용 이미지" /> */}
            </div>
            <div className='textBox'>
              <div className='textOnly'>
                <div className='titleBox'>
                  <Image src="/mrware_mully_icon.png" alt="물리치료 아이콘"  width={70} height={70}/>
                  <p className='fs_24'>{t("물리치료")}</p>
                </div>
                <p className='fs_16'>{t("sec05Text2-4")}</p>
              </div>
              <button 
              onClick={() => window.location.href = 'https://rehab360.mrware.world'}
              className='btn fs_16'>{t("sec05Text2-1")}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
