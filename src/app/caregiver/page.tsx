"use client";
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import styles from "./caregiver.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "../../../i18n";

const TAB_LIST = [
  { id: "tab1", key1: "caregiver.sec03.tab1_1", key2: "caregiver.sec03.tab1_2" },
  { id: "tab2", key1: "caregiver.sec03.tab2_1", key2: "caregiver.sec03.tab2_2" },
  { id: "tab3", key1: "caregiver.sec03.tab3_1", key2: "caregiver.sec03.tab3_2" },
];

type StepItem = {
  index: string;
  title: React.ReactNode;
  color: "org" | "blue" | "pink";
  lists: string[];
  hashes: string[];
  imgs: string[];
  showArrow?: boolean;
};

const STEP_LIST = [
  {
    index: "caregiver.sec03.step1.index",
    titleKey1: "caregiver.sec03.step1.title1",
    titleKey2: "caregiver.sec03.step1.title2",
    color: "org",
    listKeys: ["caregiver.sec03.step1.list1", "caregiver.sec03.step1.list2", "caregiver.sec03.step1.list3"],
    hashKeys: ["caregiver.sec03.step1.hash1", "caregiver.sec03.step1.hash2", "caregiver.sec03.step1.hash3"],
    imgs: ["/img_caregiver/yoyang_sec02_img01.png", "/img_caregiver/yoyang_sec02_img02.png", "/img_caregiver/yoyang_sec02_img03.png"],
  },
  {
    index: "caregiver.sec03.step2.index",
    titleKey1: "caregiver.sec03.step2.title1",
    titleKey2: "caregiver.sec03.step2.title2",
    color: "blue",
    listKeys: ["caregiver.sec03.step2.list1", "caregiver.sec03.step2.list2", "caregiver.sec03.step2.list3"],
    hashKeys: ["caregiver.sec03.step2.hash1", "caregiver.sec03.step2.hash2", "caregiver.sec03.step2.hash3"],
    imgs: ["/img_caregiver/yoyang_sec02_img04.png", "/img_caregiver/yoyang_sec02_img05.png", "/img_caregiver/yoyang_sec02_img06.png"],
  },
  {
    index: "caregiver.sec03.step3.index",
    titleKey1: "caregiver.sec03.step3.title1",
    titleKey2: "caregiver.sec03.step3.title2",
    color: "pink",
    showArrow: false,
    listKeys: ["caregiver.sec03.step3.list1", "caregiver.sec03.step3.list2"],
    hashKeys: ["caregiver.sec03.step3.hash1", "caregiver.sec03.step3.hash2", "caregiver.sec03.step3.hash3"],
    imgs: ["/img_caregiver/yoyang_sec02_img07.png"],
  },
];


const SWIPER_ROW1 = [
  {
    src: "/img_caregiver/yoyang_sec04_img01.png",
    label: (<>누운 자세로 <br />식사돕기 </>),
  },
  { src: "/img_caregiver/yoyang_sec04_img02.png", label: "화장실 사용 돕기" },
  { src: "/img_caregiver/yoyang_sec04_img03.png", label: "침상 배설 돕기" },
  { src: "/img_caregiver/yoyang_sec04_img04.png", label: "이동변기 사용 돕기" },
  { src: "/img_caregiver/yoyang_sec04_img05.png", label: "기저귀 사용 돕기" },
  { src: "/img_caregiver/yoyang_sec04_img06.png", label: "구강 청결 돕기" },
  { src: "/img_caregiver/yoyang_sec04_img07.png", label: "두발 청결 돕기" },
  { src: "/img_caregiver/yoyang_sec04_img08.png", label: "손/발 청결 돕기" },
  { src: "/img_caregiver/yoyang_sec04_img09.png", label: "회음부 청결 돕기" },
  { src: "/img_caregiver/yoyang_sec04_img10.png", label: "침상 목욕 돕기" },
];

const SWIPER_ROW2 = [
  { src: "/img_caregiver/yoyang_sec04_img11.png", label: "세면 돕기" },
  { src: "/img_caregiver/yoyang_sec04_img12.png", label: "환의 돕기" },
  { src: "/img_caregiver/yoyang_sec04_img13.png", label: "침상 청결 유지하기" },
  {
    src: "/img_caregiver/yoyang_sec04_img14.png",
    label: (
      <>
        체위 변경
        <br />
        (옆으로 눕히기)
      </>
    ),
  },
  {
    src: "/img_caregiver/yoyang_sec04_img15.png",
    label: (
      <>
        체위 변경
        <br />
        (일으켜 세우기)
      </>
    ),
  },
  {
    src: "/img_caregiver/yoyang_sec04_img16.png",
    label: (
      <>
        침대에서 <br />
        휠체어로 이동하기
      </>
    ),
  },
  {
    src: "/img_caregiver/yoyang_sec04_img17.png",
    label: (
      <>
        침대에서 <br />
        자동차로 이동하기
      </>
    ),
  },
  { src: "/img_caregiver/yoyang_sec04_img18.png", label: "휠체어 이동 돕기" },
  {
    src: "/img_caregiver/yoyang_sec04_img19.png",
    label: (
      <>
        지팡이 이용
        <br /> 보행 돕기
      </>
    ),
  },
  { src: "/img_caregiver/yoyang_sec04_img20.png", label: "응급 처치" },
];

const CareHub = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [imgIndex, setImgIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);
  useEffect(() => {
    setMounted(true);
  }, []);
  const activeStep = STEP_LIST[TAB_LIST.findIndex((t) => t.id === activeTab)];
  
  const SEC04_LIST = [
  {
    img: "/img_nursing/mrware_sec03_img01.png",
    labelKey: "caregiver.sec04.student.label",
    renderText: () => (
      <>
        <span className={styles.c_teal}>{t('caregiver.sec04.student.text1')}</span>
        {t('caregiver.sec04.student.text2')}
        <span className={styles.c_org}>{t('caregiver.sec04.student.text3')}</span>
      </>
    ),
  },
  {
    img: "/img_nursing/mrware_sec03_img02.png",
    labelKey: "caregiver.sec04.teacher.label",
    renderText: () => (
      <>
        {t('caregiver.sec04.teacher.text1')}
        <span className={styles.c_org}>{t('caregiver.sec04.teacher.text2')}</span>
        {t('caregiver.sec04.teacher.text3')}
      </>
    ),
  },
  {
    img: "/img_nursing/mrware_sec03_img03.png",
    labelKey: "caregiver.sec04.school.label",
    renderText: () => (
      <>
        <span className={styles.c_org}>{t('caregiver.sec04.school.text1')}</span>
        {t('caregiver.sec04.school.text2')}
        <span className={styles.c_org}>{t('caregiver.sec04.school.text3')}</span>
        {t('caregiver.sec04.school.text4')}
      </>
    ),
  },
];

const SWIPER_ROW1 = [
  { src: "/img_caregiver/yoyang_sec04_img01.png", labelKey: "caregiver.sec05.row1.slide1", labelKey1: "caregiver.sec05.row1.slide1_1", labelKey2: "caregiver.sec05.row1.slide1_2" },
  { src: "/img_caregiver/yoyang_sec04_img02.png", labelKey: "caregiver.sec05.row1.slide2" },
  { src: "/img_caregiver/yoyang_sec04_img03.png", labelKey: "caregiver.sec05.row1.slide3", labelKey1: "caregiver.sec05.row1.slide3_1", labelKey2: "caregiver.sec05.row1.slide3_2", enOnly: true },
  { src: "/img_caregiver/yoyang_sec04_img04.png", labelKey: "caregiver.sec05.row1.slide4", labelKey1: "caregiver.sec05.row1.slide4_1", labelKey2: "caregiver.sec05.row1.slide4_2", enOnly: true },
  { src: "/img_caregiver/yoyang_sec04_img05.png", labelKey: "caregiver.sec05.row1.slide5", labelKey1: "caregiver.sec05.row1.slide5_1", labelKey2: "caregiver.sec05.row1.slide5_2", enOnly: true },
  { src: "/img_caregiver/yoyang_sec04_img06.png", labelKey: "caregiver.sec05.row1.slide6"},
  { src: "/img_caregiver/yoyang_sec04_img07.png", labelKey: "caregiver.sec05.row1.slide7"},
  { src: "/img_caregiver/yoyang_sec04_img08.png", labelKey: "caregiver.sec05.row1.slide8"},
  { src: "/img_caregiver/yoyang_sec04_img09.png", labelKey: "caregiver.sec05.row1.slide9"},
  { src: "/img_caregiver/yoyang_sec04_img10.png", labelKey: "caregiver.sec05.row1.slide10"},
];
const SWIPER_ROW2 = [
  { src: "/img_caregiver/yoyang_sec04_img11.png", labelKey: "caregiver.sec05.row2.slide1" },
  { src: "/img_caregiver/yoyang_sec04_img12.png", labelKey: "caregiver.sec05.row2.slide2"},
  { src: "/img_caregiver/yoyang_sec04_img13.png", labelKey: "caregiver.sec05.row2.slide3"},
  { src: "/img_caregiver/yoyang_sec04_img14.png", labelKey: "caregiver.sec05.row2.slide4", labelKey1: "caregiver.sec05.row2.slide4_1", labelKey2: "caregiver.sec05.row2.slide4_2" },
  { src: "/img_caregiver/yoyang_sec04_img15.png", labelKey: "caregiver.sec05.row2.slide5", labelKey1: "caregiver.sec05.row2.slide5_1", labelKey2: "caregiver.sec05.row2.slide5_2" },
  { src: "/img_caregiver/yoyang_sec04_img16.png", labelKey: "caregiver.sec05.row2.slide6", labelKey1: "caregiver.sec05.row2.slide6_1", labelKey2: "caregiver.sec05.row2.slide6_2" },
  { src: "/img_caregiver/yoyang_sec04_img17.png", labelKey: "caregiver.sec05.row2.slide7", labelKey1: "caregiver.sec05.row2.slide7_1", labelKey2: "caregiver.sec05.row2.slide7_2" },
  { src: "/img_caregiver/yoyang_sec04_img18.png", labelKey: "caregiver.sec05.row2.slide8", labelKey1: "caregiver.sec05.row2.slide8_1", labelKey2: "caregiver.sec05.row2.slide8_2", enOnly: true },
  { src: "/img_caregiver/yoyang_sec04_img19.png", labelKey: "caregiver.sec05.row2.slide9", labelKey1: "caregiver.sec05.row2.slide9_1", labelKey2: "caregiver.sec05.row2.slide9_2" },
  { src: "/img_caregiver/yoyang_sec04_img20.png", labelKey: "caregiver.sec05.row2.slide10" },
];
  return (
    <>
      <section className={styles.sec01}>
        <Image
          src="/img_caregiver/mrware_yoyang_topper_img.png"
          width={2000}
          height={400}
          alt=""
        />
      </section>
      <section className={styles.sec02}>
        <div className={styles.secInner}>
          <p className="fs_20">
            {t('caregiver.sec02.badge1')}{" "}
            <span className={styles.c_org}>{t('caregiver.sec02.badge2')}</span>
          </p>
          <Image
            src="/img_nursing/mrware_logo_arch.png"
            width={300}
            height={100}
            alt=""
            className={styles.archLogo}
          />
          <h3 className={`${styles.title1} fs_56`}>
           {t('caregiver.sec02.title1')} <br />
            <span className={styles.c_blue}>{t('caregiver.sec02.title2')}</span>{t('caregiver.sec02.title3')}
          </h3>
          <div className={styles.yoyang01}>
           {['feature1', 'feature2', 'feature3'].map((key, i, arr) => (
            <React.Fragment key={i}>
              <div>
                <p className={`${styles.c_blue} fs_20`} style={{ whiteSpace: 'pre-line' }}>
                  {t(`caregiver.sec02.${key}`)}
                </p>
              </div>
              {i < arr.length - 1 && <p className="fs_48">+</p>}
            </React.Fragment>
          ))}
          </div>
          <p className={`${styles.contText} fs_20`}>
            {t('caregiver.sec02.desc1')}{" "}
            <br className={styles.br_m} />
            {t('caregiver.sec02.desc2')}{" "}
            <br className={styles.br_720x} />
            {t('caregiver.sec02.desc3')} <br className={styles.br_720o} />
            {t('caregiver.sec02.desc4')}{" "}
            <br className={styles.br_m} />
            {t('caregiver.sec02.desc5')}
          </p>
          <a
            href="https://caregiver360.mrware.world/"
            target="_blank"
            className={`${styles.arrowBtn} ${styles.bg_blue}`}
          >
            <span className="fs_20">{t('caregiver.sec02.btn')}</span>
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
              {t('caregiver.sec03.title1')} <br className={styles.br_720o} />
              <span className={styles.c_org}>{t('caregiver.sec03.title2')}</span>
            </p>
            <p className={`${styles.contText} fs_20`}>
              {t('caregiver.sec03.desc1')}{" "}
              <br className={styles.br_m} />
              {t('caregiver.sec03.desc2')}
            </p>
          </div>
          <div className={styles.content}>
            <div className={`${styles.tab_menu}`}>
              {TAB_LIST.map((tab) => (
                <button
                  key={tab.id}
                  className={`${styles.tab_btn} fs_18 ${activeTab === tab.id ? styles.active : ""}`}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setImgIndex(0);
                  }}
                >
                  {t(tab.key1)}
                  <br className={styles.br_720o} />{" "}
                  {t(tab.key2)}
                </button>
              ))}
            </div>
            <ul>
              <li
                className={
                  styles[`b_img_0${TAB_LIST.findIndex((t) => t.id === activeTab) + 1}`]
                }
              >
                <div className={styles.txt_box}>
                  <div className={styles.tit_box}>
                    <p className={`${styles.index} fs_20`}>
                      {t(activeStep.index)}
                    </p>
                    <p className={`${styles[`c_${activeStep.color}`]} ${styles.title} fs_42`}>
                      {t(activeStep.titleKey1)}
                      <br />
                      {t(activeStep.titleKey2)}
                    </p>
                  </div>
                  <div className={`${styles.lists} ${styles[activeStep.color]}`}>
                    {activeStep.listKeys.map((key, i) => (
                      <p key={i} className="fs_18">
                        {t(key)}
                      </p>
                    ))}
                  </div>
                  <div className={styles.hashes}>
                    {activeStep.hashKeys.map((key, i) => (
                      <span key={i} className={`${styles[`c_${activeStep.color}`]} fs_16`}>
                        {t(key)}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={styles.img_box}>
                  <figure>
                    <Image
                      src={activeStep.imgs[imgIndex]}
                      alt=""
                      width={700}
                      height={300}
                      className={styles.img_list}
                    />
                  </figure>
                  {activeStep.showArrow !== false && (
                    <div className={`${styles.arrow_set} ${styles[activeStep.color]}`}>
                      <svg
                        width="20"
                        height="24"
                        viewBox="0 0 25 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${styles.arrow_left} ${imgIndex > 0 ? styles.on : ""}`}
                        onClick={() => setImgIndex((prev) => Math.max(prev - 1, 0))}
                      >
                        <path
                          d="M1.92175 17.023C0.0859107 15.8419 0.085908 13.1581 1.92174 11.977L19.6269 0.586711C21.6234 -0.697694 24.25 0.735747 24.25 3.1097L24.25 25.8903C24.25 28.2643 21.6234 29.6977 19.6269 28.4133L1.92175 17.023Z"
                          fill="#CACACA"
                        />
                      </svg>
                      <svg
                        width="20"
                        height="24"
                        viewBox="0 0 25 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${styles.arrow_right} ${imgIndex < activeStep.imgs.length - 1 ? styles.on : ""}`}
                        onClick={() => setImgIndex((prev) => Math.min(prev + 1, activeStep.imgs.length - 1))}
                      >
                        <path
                          d="M1.92175 17.023C0.0859107 15.8419 0.085908 13.1581 1.92174 11.977L19.6269 0.586711C21.6234 -0.697694 24.25 0.735747 24.25 3.1097L24.25 25.8903C24.25 28.2643 21.6234 29.6977 19.6269 28.4133L1.92175 17.023Z"
                          fill="#CACACA"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.sec04}>
        <div className={styles.secInner}>
          <div className={styles.titleBox}>
            <p className={`${styles.title1} fs_48`}>
              {t('caregiver.sec04.title1')}
              <br /> <span className="fs_56">{t('caregiver.sec04.title2')}</span>
            </p>
            <p className={`${styles.contText} fs_20`}>
             {t('caregiver.sec04.desc1')}{" "}
              <br className={styles.br_720o} />
              {t('caregiver.sec04.desc2')}
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
            <p className={`${styles.title1} fs_42`}>
              {t(`caregiver.sec05.title1`)}{" "}
              <span className={styles.c_org}>{t(`caregiver.sec05.title2`)}</span>,<br />
              <span className="fs_56">
                {" "}
                {t(`caregiver.sec05.title3`)} <br className={styles.br_m} />
                {t(`caregiver.sec05.title4`)}
              </span>
            </p>
            <p className={`${styles.contText} fs_20`}>
              {t(`caregiver.sec05.desc`)}
            </p>
          </div>
          <div className={styles.content}>
            {mounted && (
              <Swiper
                modules={[Autoplay]}
                slidesPerView={1}
                spaceBetween={20}
                centeredSlides={true}
                speed={1500}
                loop={true}
                loopAdditionalSlides={-1}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  425: { slidesPerView: 1.7, spaceBetween: 15 },
                  760: { slidesPerView: 3, spaceBetween: 15 },
                  1025: { slidesPerView: 4, spaceBetween: 15 },
                  1440: { slidesPerView: 6, spaceBetween: 15 },
                }}
              >
                {SWIPER_ROW1.map((slide, i) => (
                  <SwiperSlide key={i}>
                    {({ isActive }) => (
                      <div className={`${styles.card_slide} ${isActive ? styles.active : ""}`}>
                        <Image src={slide.src} alt="" width={300} height={300} className={styles.card_bg} />
                        <p className="fs_20 fw_b">
                          {(slide.labelKey1 && (!slide.enOnly || i18n.language === 'en')) ? (
                            <>{t(slide.labelKey1)}<br />{t(slide.labelKey2!)}</>
                          ) : (
                            t(slide.labelKey!)
                          )}
                        </p>
                      </div>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
            {mounted && (
              <Swiper
                modules={[Autoplay]}
                slidesPerView={1}
                spaceBetween={20}
                centeredSlides={true}
                speed={1500}
                loop={true}
                loopAdditionalSlides={-1}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                  reverseDirection: true,
                }}
                breakpoints={{
                  425: { slidesPerView: 1.7, spaceBetween: 15 },
                  760: { slidesPerView: 3, spaceBetween: 15 },
                  1025: { slidesPerView: 4, spaceBetween: 15 },
                  1440: { slidesPerView: 6, spaceBetween: 15 },
                }}
                className={styles.blue}
              >
                {SWIPER_ROW2.map((slide, i) => (
                  <SwiperSlide key={i}>
                    {({ isActive }) => (
                      <div className={`${styles.card_slide} ${isActive ? styles.active : ""}`}>
                        <Image src={slide.src} alt="" width={300} height={300} className={styles.card_bg} />
                        <p className="fs_20 fw_b">
                          {(slide.labelKey1 && (!slide.enOnly || i18n.language === 'en')) ? (
                            <>{t(slide.labelKey1)}<br />{t(slide.labelKey2!)}</>
                          ) : (
                            t(slide.labelKey!)
                          )}
                        </p>
                      </div>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </section>
      <section className={styles.sec06}>
        <div className={styles.txt_box}>
          <p className="fs_42">{t(`caregiver.sec06.title1`)} <br/> <span className="fs_48">{t(`caregiver.sec06.title2`)}</span></p>
          <a
            href="https://caregiver360.mrware.world/"
            target="_blank"
            className={`${styles.arrowBtn} ${styles.bg_org}`}
          >
            <span className="fs_20">{t(`caregiver.sec06.btn`)}</span>
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
    </>
  );
};

export default CareHub;
