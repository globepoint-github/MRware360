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
                    <image id="image0_507_7" width="1543" height="360" preserveAspectRatio="none" xlinkHref="/mrware_logo01.png"/>
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