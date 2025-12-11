"use client";
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { useTranslation } from 'react-i18next';
import '../../../i18n';
const CareHub = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  return (
    <div className="NursingSkillBanner">
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg2.png')",
          // backgroundSize: "1920px 798.61px",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <div className="main-banner-title text-4xl font-bold text-[#FFFFFF] text-[63px] font-extrabold leading-[1.2] break-words text-center">
          {t('caregiver')}
          </div>
          <div className="text-2xl mt-8 mb-8 font-medium text-center text-[34.2px] leading-[44.46px] font-['Noto Sans KR']">
            <span className="line-1">{t('immersivePracticeEducation')}&nbsp;</span>
            <span className="line-2">{t('immersivePracticeEducation2')}</span>
          </div>
          <div className="text-2xl mt-2 mb-8 font-medium text-center text-[34.2px] leading-[44.46px] font-['Noto Sans KR']">
          <span className="line-1">{t('customPracticeManagementSystem')}&nbsp;</span>
          <span className="line-2">{t('customPracticeManagementSystem2')}</span>          
          </div>

          <div className="flex flex-col mt-60 md:flex-row md:space-x-20 space-y-4 md:space-y-0 items-center">
            <a
              href="https://globepoint-common.s3.ap-northeast-2.amazonaws.com/ICareNext4G/Nusling360/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-[#39D0FF] hover:bg-[#39bfe7] rounded-full w-[250px] h-[60px] transition-colors duration-300 transform hover:scale-105  shadow-lg"
            >
              <img src="/Group1.png" alt="Icon" className="w-6 h-6 mr-2" />
              {t('nav1')}
            </a>
            <a
              href="https://kr1-api-object-storage.nhncloudservice.com/v1/AUTH_4da40ab7f9d14b998a98d89a4810f18b/images/%ED%95%B5%EC%8B%AC%EA%B0%84%ED%98%B8%EC%88%A0%EA%B8%B0/%ED%95%B5%EC%8B%AC%EA%B0%84%ED%98%B8%EC%88%A0%EA%B8%B0%20%EC%BD%98%ED%85%90%EC%B8%A0%20%ED%99%9C%EC%9A%A9%20%EB%A7%A4%EB%89%B4%EC%96%BC_V.02%20(1).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-[#EF694C] hover:bg-[#eb6040] rounded-full w-[250px] h-[60px] transition-colors duration-300 transform hover:scale-105  shadow-lg"
            >
              <img src="/Group2.png" alt="Icon" className="w-6 h-6 mr-2" />
              {t('nav2')}
            </a>
          </div>
        </div>
      </div>

      <div className="nursing-skill-intro-wrap bg-[#FFF9F8]">
        {/* 첫번째 */}
        <div className="first flex justify-center items-center py-40 flex-col sm:flex-row ">
          <div className="contents-1 w-[300px] h-[320px] top-[1050.22px] left-[470px] rounded-[20px] bg-[#FFFFFF] mb-6 sm:mr-6 mt-10 shadow-lg transition-transform duration-2 transform hover:scale-105">
            <div className="first-icon flex justify-center items-center h-[10px] ">
              <img
                src="/first-icon-4.png"
                alt="9"
                className="w-[130px] h-[130px]"
              />
            </div>
            <div className="first-title mt-20">
              <p className="font-['Noto Sans KR'] font-[700] text-[22px] leading-[31.86px] text-center">
                Student
              </p>
            </div>
            <div className="first-text mt-4">
              <p className="font-['Noto Sans KR'] font-[400] text-[20px] leading-[28.96px] text-center">
              {t('noLocationConstraint')}              
              </p>
              <p className="font-['Noto Sans KR'] font-[400] text-[20px] leading-[28.96px] text-center">
              {t('practiceAnywhere')}
              </p>
              <p className="font-['Noto Sans KR'] font-[400] text-[20px] leading-[28.96px] text-center">
              {t('topicBasedPractice')}
              </p>
              <p className="font-['Noto Sans KR'] font-[400] text-[20px] leading-[28.96px] text-center">
              {t('likePracticeOptions')}
              </p>
            </div>
          </div>
          <div className="contents-2 w-[300px] h-[320px] top-[1050.22px] left-[470px] rounded-[20px] bg-[#FFFFFF] mb-6 sm:mr-6 mt-10 shadow-lg transition-transform duration-2 transform hover:scale-105">
            <div className="first-icon flex justify-center items-center h-[10px]">
              <img
                src="/first-icon-5.png"
                alt="9"
                className="w-[130px] h-[130px]"
              />
            </div>
            <div className="first-title mt-20">
              <p className="font-['Noto Sans KR'] font-[700] text-[22px] leading-[31.86px] text-center">
                Professor
              </p>
            </div>
            <div className="first-text mt-4">
            <p className="font-['Noto Sans KR'] font-[400] text-[20px] leading-[28.96px] text-center">
              {t('studentProgressPart1')}
            </p>
            <p className="font-['Noto Sans KR'] font-[400] text-[20px] leading-[28.96px] text-center">
              {t('studentProgressPart2')}
            </p>
            <p className="font-['Noto Sans KR'] font-[400] text-[20px] leading-[28.96px] text-center">
              {t('manageResults')}
            </p>
            <p className="font-['Noto Sans KR'] font-[400] text-[20px] leading-[28.96px] text-center">
              {t('easyFeedback')}
            </p>
            </div>
          </div>
          <div className="contents-2 w-[300px] h-[320px] top-[1050.22px] left-[470px] rounded-[20px] bg-[#FFFFFF] mb-6 sm:mr-6 mt-10 shadow-lg transition-transform duration-2 transform hover:scale-105">
            <div className="first-icon flex justify-center items-center h-[10px]">
              <img
                src="/first-icon-6.png"
                alt="9"
                className="w-[130px] h-[130px]"
              />
            </div>
            <div className="first-title mt-20">
              <p className="font-['Noto Sans KR'] font-[700] text-[22px] leading-[31.86px] text-center">
                School
              </p>
            </div>
            <div className="first-text mt-4">
            <p className="font-['Noto Sans KR'] font-[400] text-[20px] leading-[28.96px] text-center">
              {t('trainingEnvironmentNoConstraints')}
            </p>
            <p className="font-['Noto Sans KR'] font-[400] text-[20px] leading-[28.96px] text-center">
              {t('newEnvironmentForStudents')}
            </p>
            <p className="font-['Noto Sans KR'] font-[400] text-[20px] leading-[28.96px] text-center">
              {t('offerEnvironment')}
            </p>
            </div>
          </div>
        </div>
        {/* 두번째 */}
        <div className="second flex flex-col justify-center items-center py-20 w-full bg-[#FBDFCF]">
          <div className="max-w-[1024px] w-full flex flex-col items-center sm:items-center">
            <h1 className="nursing-skill-name font-['Noto Sans KR'] font-[700] text-[32px] leading-[46.34px] text-center text-[#2F2F2F]">
              <span className="line-1">{t('vrContentTitle')}&nbsp;</span>
              <span className="line-2">{t('vrContentTitle2')}</span>
            </h1>
            <div className="nursing-skill-desc mt-8 text-center">
              <p className="font-['Noto Sans KR'] font-[400] text-[24px] leading-[34.75px] text-[#2f2f2f] p-margin">
              
              <span className="line-1">{t('vrDescription1')}&nbsp;</span>
              <span className="line-2">{t('vrDescription1-1')}</span>
              </p>
              <p className="font-['Noto Sans KR'] font-[400] text-[24px] leading-[34.75px] text-[#2f2f2f] p-margin">
              <span className="line-1">{t('vrDescription2')}&nbsp;</span>
              <span className="line-2">{t('vrDescription2-2')}</span>
              </p>
            </div>
            <div className="w-full max-w-[1024px] h-auto mt-10 rounded-[20px] bg-[#FFFFFF] flex justify-center items-center flex-col">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                pagination={{
                  el: ".swiper-pagination",
                  clickable: true,
                  bulletElement: "button",
                  bulletClass:
                    "swiper-pagination-bullet w-[12px] h-[12px] bg-[#D9D9D9] rounded-full mr-2",
                  bulletActiveClass:
                    "swiper-pagination-bullet-active bg-[#7C7C7C]",
                }}
                className="w-full h-full mt-4"
              >
                <SwiperSlide className="flex justify-center">
                  <img
                    src="/image40.png"
                    alt="Image 1"
                    className="w-full h-auto max-w-[980px] max-h-[551.76px] rounded-[20px] ml-5"
                  />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center">
                  <img
                    src="/image41.png"
                    alt="Image 2"
                    className="w-full h-auto max-w-[980px] max-h-[551.76px] rounded-[20px] ml-5"
                  />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center">
                  <img
                    src="/image42.png"
                    alt="Image 3"
                    className="w-full h-auto max-w-[980px] max-h-[551.76px] rounded-[20px] ml-5"
                  />
                </SwiperSlide>
              </Swiper>
              </div>
            <div className="w-full flex justify-center items-center mt-20">
              <div className="swiper-pagination"></div>
            </div>

            <div className="flex justify-center items-center mt-4">
              <div className="w-[124.15px] h-[42.79px] rounded-[100px] flex justify-center items-center bg-[#EF694C]">
                <p className="font-['Noto Sans KR'] font-[400] text-[16px] leading-[23.17px] text-[#FFFFFF]">
                {t('realism')}
                </p>
              </div>
            </div>
            <div className="text-center">
              <p className="font-['Noto Sans KR'] font-[400] text-[24px] leading-[34.75px] text-[#2F2F2F] mt-6">
              <span className="line-1">{t('realismEnhanced')}&nbsp;</span>
              <span className="line-2">{t('realismEnhanced2')}</span>
              </p>
            </div>

            
          </div>
        </div>
        {/* 세번째 */}
        <div className="second flex flex-col justify-center items-center py-20 w-full bg-[#FFF9F8]">
          <div className="max-w-[1024px] w-full flex flex-col items-center sm:items-center">
            <h1 className="nursing-skill-name font-['Noto Sans KR'] font-[700] text-[32px] leading-[46.34px] text-center text-[#2F2F2F]">
            {t('efficientPractice')}
            </h1>
            <div className="nursing-skill-desc mt-8 text-center">
              <p className="font-['Noto Sans KR'] font-[400] text-[24px] leading-[34.75px] text-[#2f2f2f]">
              
              <span className="line-1">{t('caregiverSpecialTests')}&nbsp;</span>
              <span className="line-2">{t('caregiverSpecialTests2')}&nbsp;</span>
              <span className="line-3">{t('caregiverSpecialTests3')}&nbsp;</span>
              </p>
            </div>
            <div className="w-full max-w-[1420px] mt-10 rounded-[20px] bg-[#FFFFFF] flex justify-center items-center flex-col p-4">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="w-full max-w-[370.34px] h-[262.32px] rounded-[20px] flex flex-col justify-center items-center">
                  <div className="w-full h-[208px] rounded-[20px]">
                    <img
                      src="/box5.png"
                      alt="Image 1"
                      className="w-full h-full rounded-[20px]"
                    />
                  </div>
                  <div className="w-full h-[54px] mt-4 rounded-[10px] border-[1px] border-[#FBDFCF] bg-[#FBDFCF] flex justify-center items-center">
                    <p className="font-['Noto Sans KR'] font-[500] text-[22px] leading-[31.86px] text-center text-[#2F2F2F]">
                    {t('chooseTopic')}
                    </p>
                  </div>
                </div>
                <div className="w-full max-w-[370.34px] h-[262.32px] rounded-[20px] flex flex-col justify-center items-center">
                  <div className="w-full h-[208px] rounded-[20px]">
                    <img
                      src="/box6.png"
                      alt="Image 4"
                      className="w-full h-full rounded-[20px]"
                    />
                  </div>
                  <div className="w-full h-[54px] mt-4 rounded-[10px] border-[1px] border-[#FBDFCF] bg-[#FBDFCF] flex justify-center items-center">
                    <div className="nursing-skill-desc text-center">
                      <p className="font-['Noto Sans KR'] font-[400] text-[24px] leading-[34.75px] text-[#2f2f2f]">
                      {t('multipleChoiceQuestion')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="w-full max-w-[370.34px] h-[262.32px] rounded-[20px] flex flex-col justify-center items-center">
                  <div className="w-full h-[208px] rounded-[20px]">
                    <img
                      src="/box7.png"
                      alt="Image 1"
                      className="w-full h-full rounded-[20px]"
                    />
                  </div>
                  <div className="w-full h-[54px] mt-4 rounded-[10px] border-[1px] border-[#FBDFCF] bg-[#FBDFCF] flex justify-center items-center">
                    <p className="font-['Noto Sans KR'] font-[500] text-[22px] leading-[31.86px] text-center text-[#2F2F2F]">
                    {t('oxQuestion')}
                    </p>
                  </div>
                </div>
                <div className="w-full max-w-[370.34px] h-[262.32px] rounded-[20px] flex flex-col justify-center items-center">
                  <div className="w-full h-[208px] rounded-[20px]">
                    <img
                      src="/box8.png"
                      alt="Image 4"
                      className="w-full h-full rounded-[20px]"
                    />
                  </div>
                  <div className="w-full h-[54px] mt-4 rounded-[10px] border-[1px] border-[#FBDFCF] bg-[#FBDFCF] flex justify-center items-center">
                    <p className="font-['Noto Sans KR'] font-[500] text-[22px] leading-[31.86px] text-center text-[#2F2F2F]">
                    {t('multipleChoiceQuestions2')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 네번째 */}
        <div className="second flex flex-col justify-center items-center py-20 w-full bg-[#FFFFFF]">
        <div className="w-full max-w-[1060.04px] h-auto md:h-[260px] mt-10 rounded-[20px] bg-[#FFFFFF] border-[1px] border-[#1BC768] shadow-[0_4px_24px_rgba(233,233,233,0.5)]">
            <div className="flex flex-col md:flex-row justify-between items-center p-4 md:h-full">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-[370.34px] h-[208.21px] rounded-[10px] border-[1px] border-[#EFEFEF]">
                  <img
                    src="/LMSs.png"
                    alt="Image"
                    className="w-full h-full rounded-[10px]"
                  />
                </div>
                <div className="md:ml-10 mt-4 md:mt-0">
                  <div className="w-[90.69px] h-[36.77px] rounded-[100px] flex justify-center items-center bg-[#39D0FF]">
                    <p className="font-['Noto Sans KR'] font-[500] text-[16px] leading-[23.17px] text-[#FFFFFF]">
                      {t('student')}
                    </p>
                  </div>
                  <div className="text-left mt-6 mr-20 md:text-center"> {/* text-left로 변경 */}
                    <p className="font-['Noto Sans KR'] font-[500] text-[18px] md:text-[22px] leading-[36.86px] text-[#2F2F2F]">
                      <span className="line-1">{t('checkPracticeResults')}</span>
                      <span className="line-2">{t('checkPracticeResults1')}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[1060.04px] h-auto md:h-[260px] mt-10 rounded-[20px] bg-[#FFFFFF] border-[1px] border-[#1BC768] shadow-[0_4px_24px_rgba(233,233,233,0.5)]">
            <div className="flex flex-col md:flex-row justify-between items-center p-4 md:h-full">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-[370.34px] h-[208.21px] rounded-[10px] border-[1px] border-[#EFEFEF]">
                  <img
                    src="/LMSs.png"
                    alt="Image"
                    className="w-full h-full rounded-[10px]"
                  />
                </div>
                <div className="md:ml-10 mt-4 md:mt-0">
                  <div className="w-[90.69px] h-[36.77px] rounded-[100px] flex justify-center items-center bg-[#39D0FF]">
                    <p className="font-['Noto Sans KR'] font-[500] text-[16px] leading-[23.17px] text-[#FFFFFF]">
                      {t('instructor')}
                    </p>
                  </div>
                  <div className="text-left mt-6 mr-20 md:text-center"> {/* text-left로 변경 */}
                    <p className="font-['Noto Sans KR'] font-[500] text-[18px] md:text-[22px] leading-[36.86px] text-[#2F2F2F]">
                      {t('checkStudentPracticeStatus')}
                    </p>
                  </div>
                  <div className="text-left mr-2 md:text-center"> {/* text-left로 변경 */}
                    <p className="font-['Noto Sans KR'] font-[500] text-[18px] md:text-[22px] leading-[36.86px] text-[#2F2F2F]">
                      {t('provideFeedback')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 다섯번째 */}
        <div className="second flex flex-col justify-center items-center py-20 w-full bg-[#FFF9F8]">
          <div className="max-w-[1024px] w-full flex flex-col items-center sm:items-center">
            <h1 className="nursing-skill-name font-['Noto Sans KR'] font-[700] text-[32px] leading-[46.34px] text-center text-[#2F2F2F]">
            {t('easyAndConvenientAccessEnvironment')}
            </h1>
          </div>

          <div className="flex flex-col md:flex-row justify-between p-8 md:h-full">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-[641.39px] h-[414.65px] rounded-[10px] border-[1px] border-[#EFEFEF] mr-15">
                <img
                  src="/design.png"
                  alt="Image"
                  className="w-full h-full rounded-[10px]"
                />
              </div>
              <div className="md:ml-10 mt-4 md:mt-0 relative md:mt-0 md:ml-10">
                <div className="absolute w-[151.97px] h-[54.86px] rounded-[100px] flex justify-center items-center bg-[#EF694C] top-[-27px] left-[20px]"> {/* 위치 조정 */}
                  <p className="font-['Noto Sans KR'] font-[400] text-[16px] leading-[23.17px] text-[#FFFFFF]">
                    {t('webVersion')}
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-[570px] h-[168px] bg-[#FFFFFF] rounded-[20px] flex flex-col justify-center items-start pl-4 shadow-lg">
                    <p className="font-['Noto Sans KR'] font-[500] text-[18px] md:text-[22px] leading-[36.86px] text-[#2F2F2F]">
                      {t('webVersionDescription1')}
                    </p>
                    <p className="font-['Noto Sans KR'] font-[500] text-[18px] md:text-[22px] leading-[36.86px] text-[#2F2F2F]">
                      {t('webVersionDescription2')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 여섯번째 */}
        <div className="second flex flex-col justify-center items-center py-20 w-full bg-[#F8F8FF]">
          <div className="max-w-[1024px] w-full flex flex-col items-center sm:items-center">
            <h1 className="nursing-skill-name font-['Noto Sans KR'] font-[700] text-[32px] leading-[46.34px] text-center text-[#2F2F2F]">
            {t('recommendedSpecs')}
            </h1>
          </div>
          <table className="download-spec-table w-full max-w-[1024px] mt-10 font-['Noto Sans KR'] ">
            <thead>
              <tr className="download-spec-head bg-[#EF694C] h-[64px] rounded-[12px]">
                <th className="download-col-first w-[25%] px-4 text-left border-r border-[#EFEFEF] text-center text-[#FFFFFF]">
                {t('category')}
                </th>
                <th className="download-col-rest w-[75%] px-4 text-left text-center text-[#FFFFFF]">
                {t('webSpecs')}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="download-spec-info h-[64px] border-b border-[#EFEFEF] ">
                <td className="download-col-first w-[25%] px-4 text-left text-center">
                {t('processor')}
                </td>
                <td className="download-col-rest w-[75%] px-4 text-left text-center">
                {t('processorSpec')}
                </td>
              </tr>
              <tr className="download-spec-info h-[64px] border-b border-[#EFEFEF] ">
                <td className="download-col-first w-[25%] px-4 text-left text-center">
                {t('memory')}
                </td>
                <td className="download-col-rest w-[75%] px-4 text-left text-center">
                {t('memorySpec')}
                </td>
              </tr>
              <tr className="download-spec-info h-[64px] border-b border-[#EFEFEF] ">
                <td className="download-col-first w-[25%] px-4 text-left text-center">
                {t('operatingSystem')}
                </td>
                <td className="download-col-rest w-[75%] px-4 text-left text-center">
                <p>{t('osSpec')}</p>
                <p>({t('osSpecDetails')})</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CareHub;
