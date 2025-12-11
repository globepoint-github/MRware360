'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import Modal from '@/components/ui/Modal';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
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

  const handleAdminClick = () => {
    // 관리자 메뉴 클릭 핸들러 - 모달 팝업 표시
    setIsOpen(false);
    setIsAdminModalOpen(true);
  };

  const handleAdminConfirm = () => {
    // 관리자 확인 후 로그인 페이지로 이동
    router.push('/admin/login');
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
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl z-20 overflow-hidden border border-gray-200">
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
            {/* 관리자 메뉴 - 한국어 아래에 표시 */}
            <button
              className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-primary hover:text-white w-full text-left transition-colors focus:outline-none focus:bg-primary focus:text-white border-t border-gray-200 pl-8 relative group"
              onClick={handleAdminClick}
              aria-label="Admin Menu"
            >
              <div className="flex items-center justify-between">
                <span>관리자</span>
                <span className="text-xs text-gray-400 group-hover:text-white/70 ml-2">(전용)</span>
              </div>
            </button>
          </div>
        )}
      </div>

      {/* 관리자 접근 확인 모달 */}
      <Modal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        onConfirm={handleAdminConfirm}
        title="관리자 전용 메뉴"
        message={`관리자 전용 메뉴입니다.\n관리자 권한이 있는 경우에만 접근 가능합니다.\n\n로그인 페이지로 이동하시겠습니까?`}
        confirmText="이동"
        cancelText="취소"
      />
    </div>
  );
};

export default LanguageSwitcher;

