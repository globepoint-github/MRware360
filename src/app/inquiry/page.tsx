"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../i18n";
import "./inquiry.css";

const InquiryPage = () => {
  const { t, i18n } = useTranslation();
  const [fileName, setFileName] = useState("");
  const [fileObj, setFileObj] = useState<File | null>(null);
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);
const openErrorPopup = (message: string) => {
   alert(message);
  };
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // 파일 크기 제한 (10MB)
      if (file.size > 10 * 1024 * 1024) {
        openErrorPopup("파일 크기는 10MB 이하여야 합니다.");
        return;
      }
      
      setFileName(file.name);
      setFileObj(file);
    } else {
      setFileName("");
      setFileObj(null);
    }
  };

    const [form, setForm] = useState({
    title: "",
    name:"",
    tel:"",
    email: "",
    content: "",
    file:"",
  });
  return (
    <div className="subPage">
      <div className="subCont">
        <div className="textBox">
          <p className="fs_36">{t("inqTitle")}</p>
          <p className="fs_20">
            {t("inqSub1")}
            <br />
            {t("inqSub2")}
            <br />
            <br />
            {t("inqSub3")}
          </p>
        </div>
        <form action="" method="post" className="formWrap">
          <label htmlFor="title">
            <p className="fs_16">{t("inqInput1")}</p>
            <input type="text" placeholder={t("inqInput1")} className="fs_18" />
          </label>
          <label htmlFor="name">
            <p className="fs_16">{t("inqInput2")}</p>
            <input type="text" placeholder={t("inqInput2")} className="fs_18" />
          </label>
          <label htmlFor="phone">
            <p className="fs_16">{t("inqInput3")}</p>
            <input type="tel" placeholder={t("inqInput3")} className="fs_18" />
          </label>
          <label htmlFor="userEmail">
            <p className="fs_16">{t("inqInput4")}</p>
            <input
              type="email"
              placeholder={t("inqInput4")}
              className="fs_18"
            />
          </label>
          <label htmlFor="message">
            <p className="fs_16">{t("inqInput5")}</p>
            <textarea placeholder={t("inqInput5")} className="fs_18" />
          </label>
          <label htmlFor="file" className="fileAttach">
            <div>
              <input
                type="file"
                className="fileBtn"
                onChange={handleFileChange}
                accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.txt"
              />
              <p className="fs_16">{t("inqInput6")}</p>
            </div>
            <input
              type="text"
              readOnly
              value={fileName}
              placeholder={t("inqInput7")}
              className="fileName"
            />
          </label>
          <button type="submit" className="sbmtBtn">
            <svg
              width="23"
              height="18"
              viewBox="0 0 23 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.5171 3.93469V14.4685C22.5171 15.3201 22.188 16.1396 21.5969 16.7592C21.0059 17.3788 20.1977 17.7518 19.3377 17.8017L19.1395 17.8073H3.37756C2.51605 17.8073 1.68708 17.482 1.06026 16.8977C0.433446 16.3135 0.0561717 15.5146 0.0056294 14.6644L0 14.4685V3.93469L10.6337 10.9428L10.7643 11.0162C10.9182 11.0906 11.0872 11.1292 11.2585 11.1292C11.4298 11.1292 11.5989 11.0906 11.7528 11.0162L11.8834 10.9428L22.5171 3.93469Z"
                fill="white"
              />
              <path
                d="M19.1405 0C20.3564 0 21.4226 0.634367 22.017 1.58814L11.2595 8.67747L0.501953 1.58814C0.784239 1.13492 1.17208 0.755009 1.63311 0.480096C2.09414 0.205183 2.61499 0.0432441 3.15221 0.00779044L3.37851 0H19.1405Z"
                fill="white"
              />
            </svg>
            <p className="fs_18">{t("inqInput8")}</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default InquiryPage;
