'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lang', lng);
    router.refresh();
    setIsOpen(false);
  };

  return (
    <div className="absolute top-4 right-4 z-50" ref={dropdownRef}>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
          aria-label="Select language"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <img
            src="/language-icon.png"
            alt="Language"
            className="w-10 h-10"
            aria-hidden="true"
          />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl z-20 overflow-hidden border border-gray-200">
            <button
              className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-primary hover:text-white w-full text-left transition-colors focus:outline-none focus:bg-primary focus:text-white"
              onClick={() => changeLanguage('en')}
              aria-label="Switch to English"
            >
              English
            </button>
            <button
              className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-primary hover:text-white w-full text-left transition-colors focus:outline-none focus:bg-primary focus:text-white border-t border-gray-200"
              onClick={() => changeLanguage('ko')}
              aria-label="Switch to Korean"
            >
              한국어
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;

