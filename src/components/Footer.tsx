"use client"
import React,{ useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  const router = useRouter();

  const handleAdminConfirm = () => {
    // 관리자 확인 후 로그인 페이지로 이동
    router.push('/admin/login');
  };

  const handleScrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // 부드럽게 스크롤
  });
};
const [familyOpen, setFamilyOpen] = useState(false);
  return (
      <footer id="b_footer">
        <div className="b_inner">
            <div className="b_ft_top">
                <h1 className="b_ft_logo"><a href="https://www.vrware.world/"><Image src="/ft_logo.png" width="212" height="25" alt="글로브포인트 로고"/></a></h1>
                <ul className="famSite fs_16">
                    <li className={`family ${familyOpen ? 'open' : ''}`}
              onClick={() => setFamilyOpen(prev => !prev)}
              >Family Site
                        <ul className={`dep2 ${familyOpen ? 'open' : ''}`}>
                            <li>
                                <a href="https://www.vrware.world/" target="_blank" className="">{t("VRWAREofficial")}</a>
                            </li>
                            <li>
                                <a href="https://vrware.store/index.html" target="_blank" className="">VRWARE STORE</a>
                            </li>
                            <li>
                                <a href="https://metatree.world/" target="_blank" className="">METATREE</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="b_ft_bot">
                <address>
                    <p className="fs_14">{t('address')}</p>
                    <p className="fs_14">Tel : {t('phone1')}  | Email : {t('email')}</p>
                    <p className='admin fs_14' onClick={handleAdminConfirm}>Admin</p>
                    <p className="b_copyright fs_12">{t('footerCopyRight')}</p>
                </address>
                <button className="b_top_btn" onClick={handleScrollTop}><Image src="/top_arw.png" width="16" height="16" alt="top 아이콘"/></button>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
