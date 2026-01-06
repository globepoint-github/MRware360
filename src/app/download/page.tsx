"use client";

import { useEffect, useMemo } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "../../../i18n";
import "./download.css";

const DownloadPage = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);
  const Banner = useMemo(
    () => [
      {
        id: "solution01",
        color:"teal",
        solutionIcon: "/mrware_nurse_icon.png",
        solutionName: "핵심간호술기",
        mainText: "sub_dl_text01",
        moreLink:"page0401",
        mainBtn: "runNow",
        manualLink:"https://kr1-api-object-storage.nhncloudservice.com/v1/AUTH_4da40ab7f9d14b998a98d89a4810f18b/images/%ED%95%B5%EC%8B%AC%EA%B0%84%ED%98%B8%EC%88%A0%EA%B8%B0/%ED%95%B5%EC%8B%AC%EA%B0%84%ED%98%B8%EC%88%A0%EA%B8%B0%20%EC%BD%98%ED%85%90%EC%B8%A0%20%ED%99%9C%EC%9A%A9%20%EB%A7%A4%EB%89%B4%EC%96%BC_V.02%20(1).pdf",
        mainBtnLink_pc:"https://nursing360.mrware.world/",
        exeBtnLink:"https://kr1-api-object-storage.nhncloudservice.com/v1/AUTH_81b6b8c355154c84b73c941f22933b21/PC/MRWARE%20NursingSkill.exe",
      },
      {
        id: "solution02",
        color:"orange",
        solutionIcon: "/mrware_yoyang_icon.png",
        solutionName: "요양보호사",
        mainText: "sub_dl_text02",
        moreLink:"page0402",
        mainBtn: "runNow",
        manualLink:"",
        mainBtnLink_pc:"https://caregiver360.mrware.world/",
        webBtnLink:"https://caregiver360.mrware.world/",
      },
      {
        id: "solution03",
        color:"purple",
        solutionIcon: "/mrware_mully_icon.png",
        solutionName: "물리치료사",
        mainText: "sub_dl_text03",
        moreLink:"page0403",
        mainBtn: "runNow",
        manualLink:"",
        mainBtnLink_pc:"https://rehab360.mrware.world/",
        webBtnLink:"https://rehab360.mrware.world/",
      },
    ],
    []
  );
  return (
    <div className="subPage">
      <div className="subTop">
        <div className="textBox">
          <p className="fs_36">{t("dlTitle")}</p>
          <p className="fs_20">{t("dlSub")}</p>
        </div>
      </div>
      <div className="subCont">
        <ul>
          {Banner.map((item) => {
            return (
              <li key={item.id} className={item.color}>
                <div className="item_box">
                  <div>
                    <div className="p_name_box">
                      <div className="p_name">
                        <Image
                          src={item.solutionIcon}
                          alt={`${item.solutionName} 아이콘`}
                          width={50}
                          height={50}
                        />
                        <p className="fs_22 fw_eb title">{t(`${item.solutionName}`)}</p>
                      </div>
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="info_btn"
                      >
                        <path
                          d="M17.3408 6.77271V9.49998"
                          stroke="#8F8F93"
                          stroke-width="2.5"
                        />
                        <path
                          d="M17.3409 21.7726V13.5908H13.25"
                          stroke="#8F8F93"
                          stroke-width="2.5"
                        />
                        <path
                          d="M13.25 21.7727H21.4318"
                          stroke="#8F8F93"
                          stroke-width="2.5"
                        />
                        <path
                          d="M31.8617 19.0455C31.953 18.3766 32 17.6938 32 17C32 8.71573 25.2842 2 17 2C8.71573 2 2 8.71573 2 17C2 25.2842 8.71573 32 17 32C17.9314 32 18.8428 31.9152 19.7273 31.7526"
                          stroke="#8F8F93"
                          stroke-width="2.5"
                        />
                        <path
                          d="M20.375 26.8522L24.6705 31.1477L32.0341 21.9431"
                          stroke="#8F8F93"
                          stroke-width="2.5"
                        />
                      </svg>
                    </div>
                    <p className="fs_16 fw_m cont_txt">
                      {t(`${item.mainText}`)}
                    </p>
                    <a
                      href={t(item.moreLink)}
                      target="_blank"
                      className="fs_14 fw_m more_txt c_teal"
                    >
                      {t("learnMore")}
                    </a>
                  </div>
                  <div className="p_bot">
                    <div className="icon_wrap">
                      <a
                        href={item.manualLink}
                        target="_blank"
                        className="icon_box only_mo"
                      >
                        <Image
                          src="/down_menual_icon.png"
                          alt="매뉴얼(모바일)"
                          width={50}
                          height={50}
                        />
                        <p className="fs_14 fw_m">{t("manual")}</p>
                      </a>
                      <a
                        href={item.exeBtnLink}
                        target="_blank"
                        className="icon_box only_pc only_nurse"
                      >
                        <Image
                          src="/down_net_icon.png"
                          alt="윈도우 설치"
                          width={50}
                          height={50}
                        />
                        <p className="fs_14 fw_m">{t("windowIntl")}</p>
                      </a>
                    </div>
                    <div className="btn_wrap">
                      <a
                        href={item.manualLink}
                        target="_blank"
                        className="fs_14 fw_b menual_btn only_pc"
                      >
                        {t("manual")}
                      </a>
                      <a
                        href={item.mainBtnLink_pc}
                        target="_blank"
                        className="colored fs_14 fw_b dl_btn unable mo_menual "
                      >
                        {t(`${item.mainBtn}`)}
                      </a>
                      <a
                        href={item.webBtnLink}
                        target="_blank"
                        className="fs_14 fw_b dl_btn only_mo"
                      >
                        Web 바로가기
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DownloadPage;
