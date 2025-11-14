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
            {(() => {
              const phone1 = t('phone1');
              const phone1Href = phone1 && typeof phone1 === 'string' ? `tel:${phone1.replace(/\s/g, '')}` : '#';
              return (
                <a 
                  href={phone1Href}
                  className="text-white hover:text-primary-light transition-colors"
                >
                  {phone1 || ''}
                </a>
              );
            })()}
          </div>
          
          <div className="flex items-center gap-2">
            <img 
              src="/footer2.png" 
              alt="" 
              className="w-5 h-5" 
              aria-hidden="true"
            />
            {(() => {
              const phone2 = t('phone2');
              const phone2Href = phone2 && typeof phone2 === 'string' ? `tel:${phone2.replace(/\s/g, '')}` : '#';
              return (
                <a 
                  href={phone2Href}
                  className="text-white hover:text-primary-light transition-colors"
                >
                  {phone2 || ''}
                </a>
              );
            })()}
          </div>
          
          <div className="flex items-center gap-2">
            <img 
              src="/footer3.png" 
              alt="" 
              className="w-5 h-5" 
              aria-hidden="true"
            />
            {(() => {
              const email = t('email');
              const emailHref = email && typeof email === 'string' ? `mailto:${email}` : '#';
              return (
                <a
                  href={emailHref}
                  className="text-white hover:text-primary-light transition-colors"
                >
                  {email || ''}
                </a>
              );
            })()}
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
