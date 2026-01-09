"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../i18n";
import "./inquiry.css";

const InquiryPage = () => {
  const { t, i18n } = useTranslation();
  const [fileName, setFileName] = useState("");
  const [fileObj, setFileObj] = useState<File | null>(null);
  const [captchaSvg, setCaptchaSvg] = useState<string>("");
  
  const [form, setForm] = useState({
    title: "",
    name: "",
    tel: "",
    email: "",
    content: "",
  });

  const [captchaInput, setCaptchaInput] = useState<string>("");
  const [isCaptchaValid, setIsCaptchaValid] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchCaptcha();
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  const fetchCaptcha = async () => {
    try {
      const res = await fetch("/api/captcha");
      if (res.ok) {
        const svg = await res.text();
        setCaptchaSvg(svg);
        setCaptchaInput("");
        setIsCaptchaValid(false);
      }
    } catch (error) {
      console.error("Failed to fetch captcha", error);
    }
  };

  const openErrorPopup = (message: string) => {
    alert(message);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      setCaptchaInput(val);
      
      if (val.length >= 6) {
          verifyCaptcha(val);
      } else {
          setIsCaptchaValid(false);
      }
  };

  const verifyCaptcha = async (value: string) => {
      try {
          const res = await fetch("/api/verify-captcha", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ captcha: value })
          });
          const data = await res.json();
          setIsCaptchaValid(data.valid);
      } catch (err) {
          console.error(err);
          setIsCaptchaValid(false);
      }
  };

  // ... (previous state)
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ... (previous functions)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isCaptchaValid) {
      alert("보안 문자가 일치하지 않습니다.");
      return;
    }

    try {
      // ... (formData creation)
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("name", form.name);
      formData.append("tel", form.tel);
      formData.append("email", form.email);
      formData.append("content", form.content);
      formData.append("captcha", captchaInput);
      if (fileObj) {
        formData.append("file", fileObj);
      }

      const response = await fetch("/api/inquiry", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // alert("문의가 성공적으로 접수되었습니다."); // Removed
        setIsModalOpen(true); // Open modal instead

        setForm({
          title: "",
          name: "",
          tel: "",
          email: "",
          content: "",
        });
        setFileName("");
        setFileObj(null);
        setCaptchaInput("");
        setIsCaptchaValid(false);
        fetchCaptcha(); 
      } else {
        const data = await response.json();
        alert(`문의 접수 실패: ${data.message}`);
        fetchCaptcha();
        setCaptchaInput("");
        setIsCaptchaValid(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("문의 접수 중 오류가 발생했습니다.");
    }
  };

  const closeModal = () => {
      setIsModalOpen(false);
  };

  return (
    <div className="subPage">
        {isModalOpen && (
            <div className="modal-overlay">
                <div className="modal-content">
                    <h3>문의가 접수되었습니다</h3>
                    <p>담당자가 내용을 확인 후<br/>빠른 시일 내에 답변 드리겠습니다.</p>
                    <button className="modal-close-btn" onClick={closeModal}>확인</button>
                </div>
            </div>
        )}
      <div className="subCont">
      {/* ... (rest of the component) */}
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
        <form onSubmit={handleSubmit} className="formWrap">
          <label htmlFor="title">
            <p className="fs_16">{t("inqInput1")}</p>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              placeholder={t("inqInput1")}
              className="fs_18"
            />
          </label>
          {/* ... (rest of inputs) */}
          <label htmlFor="name">
            <p className="fs_16">{t("inqInput2")}</p>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder={t("inqInput2")}
              className="fs_18"
            />
          </label>
          <label htmlFor="tel">
            <p className="fs_16">{t("inqInput3")}</p>
            <input
              type="tel"
              name="tel"
              value={form.tel}
              onChange={handleChange}
              required
              placeholder={t("inqInput3")}
              className="fs_18"
            />
          </label>
          <label htmlFor="email">
            <p className="fs_16">{t("inqInput4")}</p>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t("inqInput4")}
              className="fs_18"
              required
            />
          </label>
          <label htmlFor="content">
            <p className="fs_16">{t("inqInput5")}</p>
            <textarea
              name="content"
              value={form.content}
              onChange={handleChange}
              required
              placeholder={t("inqInput5")}
              className="fs_18"
            />
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
          
          <div className="captchaWrapper">
            <div className="captchaContainer">
                <div 
                    className="captchaImage" 
                    dangerouslySetInnerHTML={{ __html: captchaSvg }} 
                    onClick={fetchCaptcha}
                    title="클릭하여 새로고침"
                />
                <input
                    type="text"
                    value={captchaInput}
                    onChange={handleCaptchaChange}
                    placeholder="보안 문자를 입력하세요"
                    className="captchaInput"
                    style={{ borderColor: isCaptchaValid ? "#4CAF50" : (captchaInput.length >= 6 ? "#f44336" : "#ddd") }}
                />
            </div>
            <p className="fs_14 captcha-help">
                 * 이미지를 클릭하면 새로운 보안 문자가 생성됩니다. 
                 {isCaptchaValid && <span style={{ color: "#4CAF50", fontWeight: "bold", marginLeft: "10px" }}>✓ 일치합니다</span>}
            </p>
          </div>

          <button 
            type="submit" 
            className="sbmtBtn"
            disabled={!isCaptchaValid}
            style={{ 
                opacity: isCaptchaValid ? 1 : 0.5, 
                cursor: isCaptchaValid ? 'pointer' : 'not-allowed' 
            }}
          >
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
