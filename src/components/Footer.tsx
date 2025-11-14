"use client"
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 min-w-[200px] py-8 relative text-white text-center">
      <div className="max-w-6xl mx-auto px-4">
        <div>
          <p className="text-white text-body-lg font-semibold font-korean">
            {t('companyName')}
          </p>
        </div>
        
        <p className="text-white text-body-sm font-normal mt-6 font-korean">
          {t('address')}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 mt-6">
          <div className="flex items-center gap-2">
            <img 
              src="/footer1.png" 
              alt="" 
              className="w-5 h-5" 
              aria-hidden="true"
            />
            <a 
              href={`tel:${t('phone1').replace(/\s/g, '')}`}
              className="text-white hover:text-primary-light transition-colors"
            >
              {t('phone1')}
            </a>
          </div>
          
          <div className="flex items-center gap-2">
            <img 
              src="/footer2.png" 
              alt="" 
              className="w-5 h-5" 
              aria-hidden="true"
            />
            <a 
              href={`tel:${t('phone2').replace(/\s/g, '')}`}
              className="text-white hover:text-primary-light transition-colors"
            >
              {t('phone2')}
            </a>
          </div>
          
          <div className="flex items-center gap-2">
            <img 
              src="/footer3.png" 
              alt="" 
              className="w-5 h-5" 
              aria-hidden="true"
            />
            <a
              href={`mailto:${t('email')}`}
              className="text-white hover:text-primary-light transition-colors"
            >
              {t('email')}
            </a>
          </div>
        </div>
        
        <p className="text-gray-500 text-caption font-medium mt-6">
          {t('footerCopyRight')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
