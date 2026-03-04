"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Image from "next/image";
import styles from "./physiotherapy.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import '../../../i18n';

const Physioterapypage = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [imgIndex, setImgIndex] = useState(0);
  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const TAB_LIST = [
    {
      id: "tab1",
      label: (
        <>
          {t('physiotherapy.sec03.tab1_1')}<br className={styles.br_720o} /> {t('physiotherapy.sec03.tab1_2')}
        </>
      ),
    },
    {
      id: "tab2",
      label: (
        <>
          {t('physiotherapy.sec03.tab2_1')}<br className={styles.br_720o} /> {t('physiotherapy.sec03.tab2_2')}
        </>
      ),
    },
    {
      id: "tab3",
      label: (
        <>
          {t('physiotherapy.sec03.tab3_1')}<br className={styles.br_720o} /> {t('physiotherapy.sec03.tab3_2')}
        </>
      ),
    },
  ];

  type StepItem = {
    index: string;
    title: React.ReactNode;
    color: "grn" | "pur" | "pink";
    lists: string[];
    hashes: string[];
    imgs: string[];
    showArrow?: boolean;
  };

  const STEP_LIST: StepItem[] = [
    {
      index: t('physiotherapy.sec03.step1.index'),
      title: (
        <>
          {t('physiotherapy.sec03.step1.title1')} <br />
          {t('physiotherapy.sec03.step1.title2')}
        </>
      ),
      color: "grn",
      lists: [
        t('physiotherapy.sec03.step1.list1'),
        t('physiotherapy.sec03.step1.list2'),
        t('physiotherapy.sec03.step1.list3'),
      ],
      hashes: [
        t('physiotherapy.sec03.step1.hash1'),
        t('physiotherapy.sec03.step1.hash2'),
      ],
      imgs: [
        "/img_physiotherapy/mully_sec02_img01.png",
        "/img_physiotherapy/mully_sec02_img02.png",
        "/img_physiotherapy/mully_sec02_img03.png",
      ],
    },
    {
      index: t('physiotherapy.sec03.step2.index'),
      title: (
        <>
          {t('physiotherapy.sec03.step2.title1')} <br />
          {t('physiotherapy.sec03.step2.title2')}
        </>
      ),
      color: "pur",
      lists: [
        t('physiotherapy.sec03.step2.list1'),
        t('physiotherapy.sec03.step2.list2'),
        t('physiotherapy.sec03.step2.list3'),
      ],
      hashes: [
        t('physiotherapy.sec03.step2.hash1'),
        t('physiotherapy.sec03.step2.hash2'),
        t('physiotherapy.sec03.step2.hash3'),
      ],
      imgs: [
        "/img_physiotherapy/mully_sec02_img04.png",
        "/img_physiotherapy/mully_sec02_img05.png",
        "/img_physiotherapy/mully_sec02_img06.png",
      ],
    },
    {
      index: t('physiotherapy.sec03.step3.index'),
      title: (
        <>
          {t('physiotherapy.sec03.step3.title1')} <br />
          {t('physiotherapy.sec03.step3.title2')}
        </>
      ),
      color: "pink",
      lists: [
        t('physiotherapy.sec03.step3.list1'),
        t('physiotherapy.sec03.step3.list2'),
        t('physiotherapy.sec03.step3.list3'),
      ],
      hashes: [
        t('physiotherapy.sec03.step3.hash1'),
        t('physiotherapy.sec03.step3.hash2'),
        t('physiotherapy.sec03.step3.hash3'),
      ],
      imgs: [
        "/img_physiotherapy/mully_sec02_img07.png",
        "/img_physiotherapy/mully_sec02_img08.png",
        "/img_physiotherapy/mully_sec02_img09.png",
      ],
    },
  ];

  const SEC04_LIST = [
    {
      img: "/img_nursing/mrware_sec03_img01.png",
      label: t('physiotherapy.sec04.student.label'),
      text: (
        <>
          <span className={styles.c_pur}>{t('physiotherapy.sec04.student.text1')}</span>{t('physiotherapy.sec04.student.text2')}
          <span className={styles.c_pur}>{t('physiotherapy.sec04.student.text3')}</span>
        </>
      ),
    },
    {
      img: "/img_nursing/mrware_sec03_img02.png",
      label: t('physiotherapy.sec04.teacher.label'),
      text: (
        <>
          {t('physiotherapy.sec04.teacher.text1')}
          <span className={styles.c_pur}>{t('physiotherapy.sec04.teacher.text2')}</span>
          {t('physiotherapy.sec04.teacher.text3')}
        </>
      ),
    },
    {
      img: "/img_nursing/mrware_sec03_img03.png",
      label: t('physiotherapy.sec04.school.label'),
      text: (
        <>
          <span className={styles.c_pur}>{t('physiotherapy.sec04.school.text1')}</span>
          {t('physiotherapy.sec04.school.text2')}
          <span className={styles.c_pur}>{t('physiotherapy.sec04.school.text3')}</span>
          {t('physiotherapy.sec04.school.text4')}
        </>
      ),
    },
  ];

  const SWIPER_ROW1 = [
  { src: "/img_physiotherapy/mully_sec05_img01.png", labelKey: "physiotherapy.sec05.row1.slide1", labelKey1: "physiotherapy.sec05.row1.slide1_1", labelKey2: "physiotherapy.sec05.row1.slide1_2", subKey: "physiotherapy.sec05.row1.slide1_sub" },
  { src: "/img_physiotherapy/mully_sec05_img02.png", labelKey: "physiotherapy.sec05.row1.slide2", subKey: "physiotherapy.sec05.row1.slide2_sub" },
  { src: "/img_physiotherapy/mully_sec05_img03.png", labelKey: "physiotherapy.sec05.row1.slide3", subKey: "physiotherapy.sec05.row1.slide3_sub" },
  { src: "/img_physiotherapy/mully_sec05_img04.png", labelKey: "physiotherapy.sec05.row1.slide4", labelKey1: "physiotherapy.sec05.row1.slide4_1", labelKey2: "physiotherapy.sec05.row1.slide4_2", subKey: "physiotherapy.sec05.row1.slide4_sub", enOnly: true },
  { src: "/img_physiotherapy/mully_sec05_img05.png", labelKey: "physiotherapy.sec05.row1.slide5", labelKey1: "physiotherapy.sec05.row1.slide5_1", labelKey2: "physiotherapy.sec05.row1.slide5_2", subKey: "physiotherapy.sec05.row1.slide5_sub" },
  { src: "/img_physiotherapy/mully_sec05_img06.png", labelKey: "physiotherapy.sec05.row1.slide6", subKey: "physiotherapy.sec05.row1.slide6_sub" },
  { src: "/img_physiotherapy/mully_sec05_img07.png", labelKey: "physiotherapy.sec05.row1.slide7", subKey: "physiotherapy.sec05.row1.slide7_sub" },
  { src: "/img_physiotherapy/mully_sec05_img08.png", labelKey: "physiotherapy.sec05.row1.slide8", subKey: "physiotherapy.sec05.row1.slide8_sub" },
  { src: "/img_physiotherapy/mully_sec05_img09.png", labelKey: "physiotherapy.sec05.row1.slide9", subKey: "physiotherapy.sec05.row1.slide9_sub" },
  { src: "/img_physiotherapy/mully_sec05_img10.png", labelKey: "physiotherapy.sec05.row1.slide10", subKey: "physiotherapy.sec05.row1.slide10_sub" },
];

  const SWIPER_ROW2 = [
  { src: "/img_physiotherapy/mully_sec05_img11.png", labelKey: "physiotherapy.sec05.row2.slide1", subKey: "physiotherapy.sec05.row2.slide1_sub" },
  { src: "/img_physiotherapy/mully_sec05_img12.png", labelKey: "physiotherapy.sec05.row2.slide2", subKey: "physiotherapy.sec05.row2.slide2_sub" },
  { src: "/img_physiotherapy/mully_sec05_img13.png", labelKey: "physiotherapy.sec05.row2.slide3", labelKey1: "physiotherapy.sec05.row2.slide3_1", labelKey2: "physiotherapy.sec05.row2.slide3_2", subKey: "physiotherapy.sec05.row2.slide3_sub" },
  { src: "/img_physiotherapy/mully_sec05_img14.png", labelKey: "physiotherapy.sec05.row2.slide4", subKey: "physiotherapy.sec05.row2.slide4_sub" },
  { src: "/img_physiotherapy/mully_sec05_img15.png", labelKey: "physiotherapy.sec05.row2.slide5", subKey: "physiotherapy.sec05.row2.slide5_sub" },
  { src: "/img_physiotherapy/mully_sec05_img16.png", labelKey: "physiotherapy.sec05.row2.slide6", subKey: "physiotherapy.sec05.row2.slide6_sub" },
  { src: "/img_physiotherapy/mully_sec05_img17.png", labelKey: "physiotherapy.sec05.row2.slide7", labelKey1: "physiotherapy.sec05.row2.slide7_1", labelKey2: "physiotherapy.sec05.row2.slide7_2", subKey: "physiotherapy.sec05.row2.slide7_sub", enOnly: true },
  { src: "/img_physiotherapy/mully_sec05_img18.png", labelKey: "physiotherapy.sec05.row2.slide8", subKey: "physiotherapy.sec05.row2.slide8_sub" },
  { src: "/img_physiotherapy/mully_sec05_img19.png", labelKey: "physiotherapy.sec05.row2.slide9", subKey: "physiotherapy.sec05.row2.slide9_sub" },
  { src: "/img_physiotherapy/mully_sec05_img20.png", labelKey: "physiotherapy.sec05.row2.slide10", subKey: "physiotherapy.sec05.row2.slide10_sub" },
];
  const activeStep = STEP_LIST[TAB_LIST.findIndex((t) => t.id === activeTab)];
  return (
    <>
      <section className={styles.sec01}>
        <Image
          src="/img_physiotherapy/mrware_mully_topper_img.png"
          width={2000}
          height={400}
          alt=""
        />
      </section>
      <section className={styles.sec02}>
        <div className={styles.secInner}>
          <p className="fs_20">
            {t('physiotherapy.sec02.badge1')}{" "}
            <span className={styles.c_pur}>{t('physiotherapy.sec02.badge2')}</span>
          </p>
          <Image
            src="/img_nursing/mrware_logo_arch.png"
            width={300}
            height={100}
            alt=""
            className={styles.archLogo}
          />
          <h3 className={`${styles.title1} fs_56`}>
            {t('physiotherapy.sec02.title1')} <br />
            <span className={styles.c_grn}>{t('physiotherapy.sec02.title2')}</span>{t('physiotherapy.sec02.title3')}
          </h3>
          <div className={styles.yoyang01}>
            {[
              { text: <>{t('physiotherapy.sec02.feature1_1')}<br /> {t('physiotherapy.sec02.feature1_2')}</> },
              { text: <>{t('physiotherapy.sec02.feature2_1')}<br /> {t('physiotherapy.sec02.feature2_2')}</> },
              { text: <>{t('physiotherapy.sec02.feature3_1')}<br /> {t('physiotherapy.sec02.feature3_2')}</> },
            ].map((item, i, arr) => (
              <React.Fragment key={i}>
                <div>
                  <p className={`${styles.c_blue} fs_20`}>{item.text}</p>
                </div>
                {i < arr.length - 1 && <p className="fs_48">+</p>}
              </React.Fragment>
            ))}
          </div>
          <p className={`${styles.contText} fs_20`}>
            {t('physiotherapy.sec02.desc1')}{" "}
            <br className={styles.br_m} />
            {t('physiotherapy.sec02.desc2')}{" "}
            <br className={styles.br_720x} />
            {t('physiotherapy.sec02.desc3')} <br className={styles.br_720o} />
            {t('physiotherapy.sec02.desc4')}{" "}
            <br className={styles.br_m} />
            {t('physiotherapy.sec02.desc5')}
          </p>
          <a
            href="https://rehab360.mrware.world/"
            target="_blank"
            className={`${styles.arrowBtn} ${styles.bg_grn}`}
          >
            <span className="fs_20">{t('physiotherapy.sec02.btn')}</span>
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
              {t('physiotherapy.sec03.title1')} <br className={styles.br_720o} />
              <span className={styles.c_grn}>{t('physiotherapy.sec03.title2')}</span>
            </p>
            <p className={`${styles.contText} fs_20`}>
              {t('physiotherapy.sec03.desc1')}{" "}
              <br className={styles.br_m} />
              {t('physiotherapy.sec03.desc2')}
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
                  {tab.label}
                </button>
              ))}
            </div>
            <ul>
              <li
                className={
                  styles[
                    `b_img_0${TAB_LIST.findIndex((t) => t.id === activeTab) + 1}`
                  ]
                }
              >
                <div className={styles.txt_box}>
                  <div className={styles.tit_box}>
                    <p className={`${styles.index} fs_20`}>
                      {activeStep.index}
                    </p>
                    <p
                      className={`${styles[`c_${activeStep.color}`]} ${styles.title} fs_42`}
                    >
                      {activeStep.title}
                    </p>
                  </div>
                  <div
                    className={`${styles.lists} ${styles[activeStep.color]}`}
                  >
                    {activeStep.lists.map((text, i) => (
                      <p key={i} className="fs_18">
                        {text}
                      </p>
                    ))}
                  </div>
                  <div className={styles.hashes}>
                    {activeStep.hashes.map((hash, i) => (
                      <span
                        key={i}
                        className={`${styles[`c_${activeStep.color}`]} fs_16`}
                      >
                        {hash}
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
                    <div
                      className={`${styles.arrow_set} ${styles[activeStep.color]}`}
                    >
                      <svg
                        width="20"
                        height="24"
                        viewBox="0 0 25 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${styles.arrow_left} ${imgIndex > 0 ? styles.on : ""}`}
                        onClick={() =>
                          setImgIndex((prev) => Math.max(prev - 1, 0))
                        }
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
                        onClick={() =>
                          setImgIndex((prev) =>
                            Math.min(prev + 1, activeStep.imgs.length - 1),
                          )
                        }
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
              {t('physiotherapy.sec04.title1')}
              <br />{" "}
              <span className={`${styles.c_pur} fs_56`}>
                {t('physiotherapy.sec04.title2')}
              </span>
            </p>
            <p className={`${styles.contText} fs_20`}>
              {t('physiotherapy.sec04.desc1')} <br className={styles.br_720o}/>{t('physiotherapy.sec04.desc2')}
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
                    <p className="fs_22">{item.label}</p>
                  </div>
                  <div className={styles.text_list}>
                    <p className="fs_18">{item.text}</p>
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
              <span className={styles.c_grn}>{t('physiotherapy.sec05.title1')}</span>,<br />
              <span className="fs_56">
                {" "}
                 {t('physiotherapy.sec05.title2_1')} <br className={styles.br_m} />
                {t('physiotherapy.sec05.title2_2')}
              </span>
            </p>
            <p className={`${styles.contText} fs_20`}>
              {t('physiotherapy.sec05.desc')}
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
                            t(slide.labelKey)
                          )}
                          <br /><span className="fs_14" style={{ whiteSpace: 'pre-line' }}>{t(slide.subKey)}</span>
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
                className={styles.pur}
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
                            t(slide.labelKey)
                          )}
                          <br /><span className="fs_14" style={{ whiteSpace: 'pre-line' }}>{t(slide.subKey)}</span>
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
          <p className="fs_42">{t('physiotherapy.sec06.title1')} <br/> <span className="fs_48">{t('physiotherapy.sec06.title2')}</span></p>
          <a
            href="https://rehab360.mrware.world/"
            target="_blank"
            className={`${styles.arrowBtn} ${styles.bg_grn}`}
          >
            <span className="fs_20">{t('physiotherapy.sec06.btn')}</span>
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

export default Physioterapypage


;
