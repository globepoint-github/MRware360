"use client";

import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import styles from "./nursing.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "../../../i18n";

const TAB_LIST = [
  { id: "tab1", key1: "nursing.sec03.tab1_1", key2: "nursing.sec03.tab1_2", src: "/img_nursing/video1.mp4" },
  { id: "tab2", key1: "nursing.sec03.tab2_1", key2: "nursing.sec03.tab2_2", src: "/img_nursing/video2.mp4" },
  { id: "tab3", key1: "nursing.sec03.tab3_1", key2: "nursing.sec03.tab3_2", src: "/img_nursing/video3.mp4" },
  { id: "tab4", key1: "nursing.sec03.tab4_1", key2: "nursing.sec03.tab4_2", src: "/img_nursing/video4.mp4" },
];

// slideKeys: 각 슬라이드의 줄별 키 배열
const SLIDES = [
  { keys: ["nursing.sec06.slide1_1", "nursing.sec06.slide1_2", "nursing.sec06.slide1_3"], bg: styles.bg_black },
  { keys: ["nursing.sec06.slide2_1", "nursing.sec06.slide2_2", "nursing.sec06.slide2_3"], bg: styles.bg_white },
  { keys: ["nursing.sec06.slide3_1", "nursing.sec06.slide3_2", "nursing.sec06.slide3_3"], bg: styles.bg_purple },
  { keys: ["nursing.sec06.slide4_1", "nursing.sec06.slide4_2", "nursing.sec06.slide4_3"], bg: styles.bg_black },
  { keys: ["nursing.sec06.slide5_1", "nursing.sec06.slide5_2", "nursing.sec06.slide5_3"], bg: styles.bg_white },
  { keys: ["nursing.sec06.slide6_1", "nursing.sec06.slide6_2", "nursing.sec06.slide6_3"], bg: styles.bg_teal },
  { keys: ["nursing.sec06.slide7_1", "nursing.sec06.slide7_2"], bg: styles.bg_white },
  { keys: ["nursing.sec06.slide8_1", "nursing.sec06.slide8_2", "nursing.sec06.slide8_3"], bg: styles.bg_purple },
  { keys: ["nursing.sec06.slide9_1", "nursing.sec06.slide9_2", "nursing.sec06.slide9_3"], bg: styles.bg_black },
  { keys: ["nursing.sec06.slide10_1", "nursing.sec06.slide10_2"], bg: styles.bg_teal },
];

const SEC08_LIST = [
  {
    img: "/img_nursing/mrware_sec08_img01.png",
    href: "https://nursing360.mrware.world/",
    btnKey: "nursing.sec08.btn1",
  },
  {
    img: "/img_nursing/mrware_sec08_img02.png",
    href: "https://kr1-api-object-storage.nhncloudservice.com/v1/AUTH_81b6b8c355154c84b73c941f22933b21/PC/MRWARE%20NursingSkill.exe",
    btnKey: "nursing.sec08.btn2",
  },
];

const LOGO_LIST = Array.from({ length: 11 }, (_, i) => ({
  src: `/mrware_logo${String(i + 1).padStart(2, "0")}.png`,
  w: 300,
  h: i === 0 ? 50 : 30,
}));

const NursingPage = () => {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState("tab1");
  const [isPlaying, setIsPlaying] = useState(true);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  const SEC04_LIST = [
    {
      img: "/img_nursing/mrware_sec03_img01.png",
      labelKey: "nursing.sec04.student.label",
      renderText: () => (
        <>
          <span className={styles.c_teal}>{t("nursing.sec04.student.text1")}</span>
          {t("nursing.sec04.student.text2")}
          <span className={styles.c_teal}>{t("nursing.sec04.student.text3")}</span>
        </>
      ),
    },
    {
      img: "/img_nursing/mrware_sec03_img02.png",
      labelKey: "nursing.sec04.teacher.label",
      renderText: () => (
        <>
          {t("nursing.sec04.teacher.text1")}
          <span className={styles.c_teal}>{t("nursing.sec04.teacher.text2")}</span>
          {t("nursing.sec04.teacher.text3")}
        </>
      ),
    },
    {
      img: "/img_nursing/mrware_sec03_img03.png",
      labelKey: "nursing.sec04.school.label",
      renderText: () => (
        <>
          <span className={styles.c_teal}>{t("nursing.sec04.school.text1")}</span>
          {t("nursing.sec04.school.text2")}
          <span className={styles.c_teal}>{t("nursing.sec04.school.text3")}</span>
          {t("nursing.sec04.school.text4")}
        </>
      ),
    },
  ];

  const SEC05_LIST = [
    { num: "01", textKey: "nursing.sec05.item1" },
    { num: "02", textKey: "nursing.sec05.item2" },
    { num: "03", textKey: "nursing.sec05.item3" },
  ];

  type Sec07Item = { renderText: () => React.ReactNode; isNew?: boolean };

  const SEC07_LIST: Sec07Item[][] = [
    [
      { renderText: () => t("nursing.sec07.item01") },
      { renderText: () => t("nursing.sec07.item02") },
      { renderText: () => t("nursing.sec07.item03") },
      { renderText: () => <>{t("nursing.sec07.item04")}<br /><span className={`${styles.br} fs_14`}>{t("nursing.sec07.item04_sub")}</span></> },
      { renderText: () => <>{t("nursing.sec07.item05")}<br /><span className={`${styles.br} fs_14`}>{t("nursing.sec07.item05_sub")}</span></> },
      { renderText: () => <>{t("nursing.sec07.item06")}<br /><span className={`${styles.br} fs_14`}>{t("nursing.sec07.item06_sub")}</span></> },
    ],
    [
      { renderText: () => t("nursing.sec07.item07") },
      { renderText: () => t("nursing.sec07.item08") },
      { renderText: () => t("nursing.sec07.item09") },
      { renderText: () => t("nursing.sec07.item10") },
      { renderText: () => t("nursing.sec07.item11") },
      { renderText: () => <>{t("nursing.sec07.item12")}<br /><span className={styles.br}>{t("nursing.sec07.item12_sub")}</span></> },
    ],
    [
      { renderText: () => <>{t("nursing.sec07.item13")}<br /><span className={styles.br}>{t("nursing.sec07.item13_sub")}</span></> },
      { renderText: () => <>{t("nursing.sec07.item14_1")}<span className="fs_14">{t("nursing.sec07.item14_2")}</span></> },
      { renderText: () => <>{t("nursing.sec07.item15")}<br /><span className={styles.br}>{t("nursing.sec07.item15_sub")}</span></> },
      { renderText: () => t("nursing.sec07.item16"), isNew: true },
      { renderText: () => <>{t("nursing.sec07.item17")}<br /><span className={styles.br}>{t("nursing.sec07.item17_sub")}</span></>, isNew: true },
      { renderText: () => <>{t("nursing.sec07.item18")}<br /><span className={`${styles.br} fs_14`}>{t("nursing.sec07.item18_sub")}</span></>, isNew: true },
    ],
  ];
  return (
    <>
      <section className={styles.sec01}>
        <Image
          src="/img_nursing/mrware_topper_img.png"
          width={2000}
          height={400}
          alt=""
        />
      </section>
      <section className={styles.sec02}>
        <div className={styles.secInner}>
          <p className="fs_20">{t("nursing.sec02.badge")}</p>
          <Image
            src="/img_nursing/mrware_logo_arch.png"
            width={300}
            height={100}
            alt=""
            className={styles.archLogo}
          />
          <h3 className={`${styles.title1} fs_56`}>
            {t("nursing.sec02.title1")} <br />
            <span className={styles.c_teal}>{t("nursing.sec02.title2")}</span>{" "}
            {t("nursing.sec02.title3")}
          </h3>
          <p className={`${styles.contText} fs_20`}>
            {t("nursing.sec02.desc1")} <br className={styles.br_720o} />
            {t("nursing.sec02.desc2")} <br />
            {t("nursing.sec02.desc3")} <br />
            {t("nursing.sec02.desc4")}
          </p>
          <a
            href="https://nursing360.mrware.world/"
            target="_blank"
            className={`${styles.arrowBtn} ${styles.bg_teal}`}
          >
            <span className="fs_20">{t("nursing.sec02.btn")}</span>
            <figure>
              <Image
                src="/img_nursing/more_arw.png"
                width={100}
                height={100}
                alt=""
              />
            </figure>
          </a>
        </div>
      </section>
      <section className={styles.sec03}>
        <div className={styles.secInner}>
          <div className={styles.titleBox}>
            <p className={`${styles.title1} fs_48`}>
              {t("nursing.sec03.title1")} <br />
              {t("nursing.sec03.title2")}
            </p>
          </div>
          <div className={styles.content}>
            <div className={`${styles.tab_menu}`}>
              {TAB_LIST.map((tab) => (
                <button
                  key={tab.id}
                  className={`${styles.tab_btn} fs_18 ${activeTab === tab.id ? styles.active : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {t(tab.key1)}
                  <br className={styles.br_720o} /> {t(tab.key2)}
                </button>
              ))}
            </div>
            <div className={`${styles.tab_content}`}>
              {TAB_LIST.map((tab) => (
                <div
                  key={tab.id}
                  className={styles.tab_item}
                  style={{ display: activeTab === tab.id ? "block" : "none" }}
                >
                  <video autoPlay loop muted playsInline>
                    <source src={tab.src} type="video/mp4" />
                    {t("nursing.sec03.video_fallback")}
                  </video>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sec04}>
        <div className={styles.secInner}>
          <div className={styles.titleBox}>
            <p className={`${styles.title1} fs_48`}>
              {t("nursing.sec04.title1")}
              <br />{" "}
              <span className={`${styles.c_teal} fs_56`}>
                {t("nursing.sec04.title2")}
              </span>
            </p>
            <p className={`${styles.contText} fs_20`}>
              {t("nursing.sec04.desc1")} <br className={styles.br_720o} />
              {t("nursing.sec04.desc2")}
            </p>
          </div>
          <div className={styles.content}>
            <ul className={`${styles.list03}`}>
              {SEC04_LIST.map((item, i) => (
                <li key={i}>
                  <div className={styles.imgCir}>
                    <figure>
                      <Image src={item.img} alt="" width={300} height={300} />
                    </figure>
                    <p className="fs_22">{t(item.labelKey)}</p>
                  </div>
                  <div className={styles.text_list}>
                    <p className="fs_18">{item.renderText()}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.sec05}>
        <div className={styles.secInner}>
          <div className={styles.titleBox}>
            <p className={`${styles.title1} fs_48`}>{t("nursing.sec05.title")}</p>
          </div>
          <div className={styles.content}>
            <div className={`${styles.b_img_box}`}>
              <ul>
                <li className={`${styles.b_img_01}`}>
                  <figure>
                    <Image
                      src="/img_nursing/mrware_sec04_img.png"
                      alt=""
                      width={700}
                      height={400}
                    />
                  </figure>
                </li>
              </ul>
            </div>
            <div className={`${styles.b_txt_box}`}>
              <ul>
                 {SEC05_LIST.map((item, i) => (
                  <li key={i} className={styles[`b_txt_0${i + 1}`]}>
                    <p className={`${styles.b_num} fs_36`}>{item.num}</p>
                    <p className={`${styles.b_cont} fs_22`}>{t(item.textKey)}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sec06}>
        <div className={styles.secInner}>
          <div className={styles.titleBox}>
             <p className={`${styles.title1} fs_48`}>
              {t("nursing.sec06.title1")} <br className={styles.br_m} />
              {t("nursing.sec06.title2")}
            </p>
          </div>
          <div className={styles.content}>
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              centeredSlides={true}
              spaceBetween={0}
              loop={true}
              loopAdditionalSlides={8}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={600}
              breakpoints={{
                760: {
                  slidesPerView: 3,
                  centeredSlides: true,
                },
                1180: {
                  slidesPerView: 4,
                  centeredSlides: false,
                },
                1340: {
                  slidesPerView: 5,
                  centeredSlides: false,
                },
                1600: {
                  slidesPerView: 6,
                  centeredSlides: false,
                },
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
             {SLIDES.map((slide, i) => (
                <SwiperSlide key={i}>
                  <div className={`${styles.cert_wrap} ${slide.bg}`}>
                    <div className={`${styles.card_slide}`}>
                      <p className="fs_32">
                        {slide.keys.map((key, j) => (
                          <span key={j}>
                            {t(key)}
                            {j < slide.keys.length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* <div className={`${styles.swiper_controls}`}>
            <button id="toggle_slide-btn">⏸</button>
          </div> */}
        </div>
      </section>
      <section className={styles.sec07}>
        <div className={styles.secInner}>
          <div className={styles.titleBox}>
            <p className={`${styles.title1} fs_48`}>
              {t("nursing.sec07.title1")} <br className={styles.br_m} />
              {t("nursing.sec07.title2")}
            </p>
            <p className={`${styles.contText} fs_20`}>
              {t("nursing.sec07.desc")}{" "}
            </p>
          </div>
          <div className={styles.content}>
           {SEC07_LIST.map((col, ci) => (
              <ul key={ci}>
                {col.map((item, li) => (
                  <li key={li} className={item.isNew ? styles.new : ""}>
                    <p className="fs_18">{item.renderText()}</p>
                  </li>
                ))}
                {ci === 2 && (
                  <Image src="/img_nursing/mrware_sec06_badge.png" alt="" className={styles.badge} width={200} height={200} />
                )}
              </ul>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.sec08}>
        <div className={styles.secInner}>
            <div className={styles.titleBox}>
              <p className={`${styles.title1} fs_48`}>{t("nursing.sec08.title")}</p>
            </div>
            <div className={styles.content}>
              {SEC08_LIST.map((item, i) => (
              <div key={i} className={styles.col_f}>
                <Image src={item.img} alt="" width={300} height={500} />
                <a href={item.href} target="_blank" className={styles.arrowBtn}>
                  <span className="fs_20">{t(item.btnKey)}</span>
                  <figure>
                    <Image src="/img_nursing/more_arw.png" width={100} height={100} alt="" />
                  </figure>
                </a>
              </div>
            ))}
            </div>
        </div>
      </section>
      <section className={styles.sec09}>
        <div className={styles.secInner}>
            <div className={styles.titleBox}>
              <p className={`${styles.title1} fs_48`}>{t("nursing.sec09.title")}</p>
            </div>
            <div className={styles.content}>
              <ul className={styles.logoList}>
                {LOGO_LIST.map((logo, i) => (
                <li key={i}>
                  <Image src={logo.src} width={logo.w} height={logo.h} alt="" />
                </li>
              ))}
              </ul>
            </div>
        </div>
      </section>
    </>
  );
};

export default NursingPage;
