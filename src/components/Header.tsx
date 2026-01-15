"use client"
import React, {useState} from "react";
import Image from "next/image";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Header = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  const [menuOpen, setMenuOpen] = useState(false);    
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

    return(
        <header>
            <div className="cont">
                <div className="logoBox"
                    onClick={() => window.location.href = "/"}
                >
                    <svg width="134" height="31" viewBox="0 0 134 31" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="134" height="31" fill="url(#pattern0_507_7)"/>
                    <defs>
                    <pattern id="pattern0_507_7" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_507_7" transform="matrix(0.000648088 0 0 0.00280141 0 -0.00425439)"/>
                    </pattern>
                    <image id="image0_507_7" width="1543" height="360" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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"/>
                    </defs>
                    </svg>
                </div>
                <nav>
                    <ul className="fs_18">
                        <li>
                            <a href={`${isEnglish ? 'https://vrware.world/page_en/page_0401.php' : 'https://vrware.world/page/page_0401.php'}`} target="_blank">
                            {t('핵심간호술기')}</a>
                        </li>
                        <li>
                            <a href={`${isEnglish ? 'https://vrware.world/page_en/page_0403.php' : 'https://vrware.world/page/page_0403.php'}`}  target="_blank">{t('물리치료')}</a>
                        </li>
                        <li>
                            <a href={`${isEnglish ? 'https://vrware.world/page_en/page_0402.php' : 'https://vrware.world/page/page_0402.php'}`}  target="_blank">{t('요양보호')}</a>
                        </li>
                        <li 
                            onMouseEnter={() => setOpen(true)}
                            onMouseLeave={() => setOpen(false)}
                            onFocus={() => setOpen(true)}
                        >
                            <a href="/download">{t('고객지원')}</a>
                            <ul className={`depth2 fs_16 ${open ? 'open' : ''}`}>
                                <li>
                                    <a href={t("라이선스 구매링크")} target="_blank">{t('라이선스 구매')}</a>
                                </li>
                                <li>
                                    <a href="/download">{t('다운로드')}</a>
                                </li>
                                <li>
                                    <a href="/inquiry">{t('구매/상담 문의')}</a>
                                </li>
                                <li>
                                    <a href="/faq">{t('자주 하는 질문')}</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div className="user fs_16">
                    {/* Logged in state */}
                    {mounted && localStorage.getItem('username') ? (
                        <>
                            <span className="mr-4">{localStorage.getItem('username')} {t('님')}</span>
                            <button 
                                onClick={() => {
                                    localStorage.removeItem('userToken');
                                    localStorage.removeItem('userInfo');
                                    localStorage.removeItem('username');
                                    window.location.href = '/';
                                }} 
                                className="login"
                            >
                                {t('로그아웃')}
                            </button>
                        </>
                    ) : (
                        <>
                            <a href="https://new.vrware.world/page/signup.php" target="_blank">{t('회원가입')}</a>
                            <a href="/login" className="login">{t('로그인')}</a>
                        </>
                    )}
                    <LanguageSwitcher />
                </div>
                <div  className={`hamburger ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(prev => !prev)}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div className={`mo_menu ${menuOpen ? 'open' : ''}`}>
                    <div className="user">
                        <div className="signs fs_14">
                            {mounted && localStorage.getItem('username') ? (
                                <>
                                    <span className="mr-2">{localStorage.getItem('username')}</span>
                                    <button 
                                        onClick={() => {
                                            localStorage.removeItem('userToken');
                                            localStorage.removeItem('userInfo');
                                            localStorage.removeItem('username');
                                            window.location.href = '/';
                                        }} 
                                        className="login"
                                    >
                                        {t('로그아웃')}
                                    </button>
                                </>
                            ) : (
                                <>
                                    <a href="https://new.vrware.world/page/signup.php" target="_blank">{t('회원가입')}</a>
                                    <a href="/login" className="login">{t('로그인')}</a>
                                </>
                            )}
                        </div>
                        <LanguageSwitcher />
                    </div>
                    <ul className="depth01 fs_16">
                        <li>
                            <a href={`${isEnglish ? 'https://vrware.world/page_en/page_0401.php' : 'https://vrware.world/page/page_0401.php'}`} target="_blank">
                            {t('핵심간호술기')}</a>
                        </li>
                        <li>
                            <a href={`${isEnglish ? 'https://vrware.world/page_en/page_0403.php' : 'https://vrware.world/page/page_0403.php'}`}  target="_blank">{t('물리치료')}</a>
                        </li>
                        <li>
                            <a href={`${isEnglish ? 'https://vrware.world/page_en/page_0402.php' : 'https://vrware.world/page/page_0402.php'}`}  target="_blank">{t('요양보호')}</a>
                        </li>
                        <li
                            // onFocus={() => setOpen(true)}
                            onClick={() => setOpen(prev => !prev)}
                        >
                            <button>{t('고객지원')}</button>
                            <ul className={`depth2 fs_14 ${open ? 'open' : ''}`}>
                                <li>
                                    <a href={t("라이선스 구매링크")}>{t('라이선스 구매')}</a>
                                </li>
                                <li>
                                    <a href="/download">{t('다운로드')}</a>
                                </li>
                                <li>
                                    <a href="/inquiry">{t('구매/상담 문의')}</a>
                                </li>
                                <li>
                                    <a href="/faq">{t('자주 하는 질문')}</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </header>
    )
}

export default Header;