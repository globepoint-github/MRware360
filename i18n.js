import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ko from "./locales/ko.json";
import en from "./locales/en.json";

const resources = {
  ko: { translation: ko },
  en: { translation: en },
};
// 언어 리소스 파일
// const resources = {
//   en: {
//     translation: {
//       // ===================================================================
//       // 메인
//       // ===================================================================
//       "Medical Reality,": "Medical Reality,",
//       "MRWARE": "MRWARE",
//       "OntheMRWARE": "On the MRWARE",
//       "OntheMRWARE2": "medical practice platform",
//       "Frompractice": "From practice to result management,",
//       "Frompractice2": "experience it anytime, anywhere.",
//       "newparadigm": "We present a new paradigm",
//       "newparadigm2": "in medical practice education.",
//       "핵심간호술기": "Core Nursing Skills",
//       "물리치료": "Physiotherapy",
//       "물리치료사": "Physiotherapy",
//       "요양보호": "Caregiving",
//       "요양보호사": "Caregiving",
//       "관리자":"Admin",
//       // 헤더
//       "라이선스 구매":"License Purchase",
//       "라이선스 구매링크":"https://new.vrware.world/page_en/payment.php",
//       "고객지원":"Support",
//       "다운로드": "Download",
//       "구매/상담 문의": "Purchase / Inquiry",
//       "자주 하는 질문":"FAQ",
//       "회원가입":"Sign up",
//       "로그인":"Sign in",
//       "로그인 중":"Signing in...",
//       // 로그인 페이지
//       "아이디":"ID",
//       "아이디pl":"Enter your ID",
//       "비밀번호":"Password",
//       "비밀번호pl":"Enter your password",
//       "아이디 저장":"Remember ID",
//       "아이디 찾기":"Find ID",
//       "비밀번호 찾기":"Find PW",
//       "아이디 찾기 링크":"https://new.vrware.world/page/find_id.php",
//       "비밀번호 찾기 링크":"https://new.vrware.world/page/find_pw.php",
//       "회원가입 멘트":"Not an MRWARE member yet?",
//       "회원가입":"Sign up",
//       "회원가입 링크":"https://new.vrware.world/page/signup.php",
//       // 메인 Section 01
//       "herotext01":"From 360° VR immersive training to assessment and performance management.",
//       "herotext02":"A new paradigm for healthcare education, unconstrained by time and location.",
//       // 메인 Section 02
//       "sec02Text1-1":"Extending practical training beyond theory-centered education,",
//       "sec02Text1-2":"",
//       "sec02Text1-3":"a healthcare training practice platform",
//       "sec02Text2-1":"Essential nursing skills, physical therapy assessments,",
//       "sec02Text2-2":"and caregiver training—delivered in a new way.",
//       // 메인 Section 03
//       "sec03Text1-1":"Immersive practical training for students, schools,",
//       "sec03Text1-2":"and educators—anytime, anywhere, as often as needed.",
//       "sec03Text2-1":"Now on MRWARE.",
//       // 메인 Section 04
//       "sec04Text1-1":"Learn More",
//       "sec04Text2-1":"MRWARE is a platform that provides 360° VR–based healthcare training content, designed for educational institutions and students in nursing, physical therapy, and caregiving programs.",
//       "sec04Text2-2":"With an integrated LMS, it enables easy tracking of individual training progress and feedback, supporting both students and educators.",
//       // 메인 Section 05
//       "sec05Text1-1":"Get Started",
//       "sec05Text1-2":"Start hands-on training tailored to your field today.",
//       "sec05Text2-1":"Start Now",
//       "sec05Text2-2":"Standard procedure–based 360° VR training for core skills such as hygiene, vital signs, and medication, with results managed through reports.",
//       "sec05Text2-3":"Scenario-based simulations for daily caregiving, safety, and communication with older adults, with results tracked through reports.",
//       "sec05Text2-4":"Case-based 360° VR training for specialized tests, assessment, and treatment, with performance managed via dashboards and reports.",
//       // 메인 Section 06
//       "sec06Text1-1":"FAQ",
//       "sec06Text1-2":"Common questions and answers, clearly explained.",
//       "faq1Question": "What are the benefits of 360° VR-based practice?",
//       "faq1Answer": "It provides an immersive experience that simulates real-life patient care, allowing users to repeat various practice scenarios anytime, anywhere without the constraints of time or space.",
//       "faq2Question": "What information can I access in the LMS?",
//       "faq2Answer": "Students can view their quiz results and scores during practice. <1></1>Instructors can track students’ progress and provide feedback.",
//       "faq3Question": "What platforms can I use to access MRWARE?",
//       "faq3Answer": "MRWARE can be accessed in two ways: directly via a web browser or by downloading the installation file. <1></1>You can use it on any PC or laptop, anytime, anywhere. Core nursing skills modules can also run on HMD devices like Meta Quest 2 or PICO G2 4K.",
//       "faq4Question": "Where can I download MRWARE?",
//       "faq4Answer": "A license is required to use MRWARE (Core Nursing Skills, Caregiving, Physical Therapy). <1></1>Individuals can purchase licenses through Customer Support → License Purchase, while schools or organizations can buy them from the <0>VRWARE STORE</0>.",
//       // 메인 Section 08
//       "sec08Text1-1":"Experience beyond space.",
//       "sec08Text1-2":"Discover it first with MRWARE.",
//       "sec08Text2-1":"Contact Sales",
//        // ===================================================================
//       // 서브 페이지 (다운로드/ 상담문의 / FAQ)
//       // ===================================================================
//       "dlTitle":"Service Download",
//       "dlSub":"Start hands-on training tailored to your major today.",
//       // 공통 버튼 텍스트
//       "manual":"Manual",
//       "windowIntl":"Window Install",
//       "runNow":"Run Now",
//       "learnMore":">> Learn More",
//       // 솔루션별 설명 텍스트
//       "sub_dl_text01":"A platform for learning, managing, and assessing 18 core basic nursing skills, aligned with the 4th-cycle curriculum.",
//       "sub_dl_text02":"A platform for learning, managing, and assessing 20 key caregiving practice procedures.",
//       "sub_dl_text03":"A platform for learning, managing, and assessing 20 physical therapy assessment procedures.",
//       "page0401":"https://vrware.world/page_en/page_0401.php",
//       "page0402":"https://vrware.world/page_en/page_0402.php",
//       "page0403":"https://vrware.world/page_en/page_0403.php",
//       // FAQ 페이지
//       "faqTitle":"FAQ",
//       "faqSub":"For more questions, please use the Purchase/Inquiry menu.",
//       // 구매상담 문의
//       "inqTitle":"MRWARE Purchase Inquiry",
//       "inqSub1":"End-to-end 360° VR training with assessment, reporting, and LMS integration.",
//       "inqSub2":"We consult on custom solutions tailored to your curriculum.",
//       "inqSub3":"If needed, please contact us by email: gpsales@globepoint.co.kr",
//       "inqInput1":"Subject",
//       "inqInput2":"Name (Company)",
//       "inqInput3":"Phone Number",
//       "inqInput4":"Email Address",
//       "inqInput5":"Message",
//       "inqInput6":"Choose File",
//       "inqInput7":"No file selected",
//       "inqInput8":"Submit",
//       "inqCapcha01":"Enter the security code.",
//       "inqCapcha02":"Click the image to refresh the CAPTCHA.",
//       "alertText01":"The security code does not match.",
//       "modalText01":"Your inquiry has been submitted.",
//       "modalText02":"Our team will review your message and get back to you as soon as possible.",
//       "modalText03":"OK",
//       // ===================================================================
//       // 풋터
//       // ===================================================================
//       "companyName": "Globepoint Inc.",
//       "address": "Address: : 1111, 83, Samwon-ro, Deogyang-gu, Goyang-si, Gyeonggi-do, Republic of Korea",
//       "phone1": "+82 31 911 0601",
//       "phone2": "+82 31 922 0602",
//       "email": "gpsales@globepoint.co.kr",
//       "footerCopyRight": "Copyright © 2024 Globepoint Inc. All rights reserved.",
//       "VRWAREofficial":"VRWARE Official Site",

//     }
//   },
//   ko: {
//     translation: {
//       // ===================================================================
//       // 메인
//       // ===================================================================
//       "Medical Reality,": "Medical Reality,",
//       "MRWARE": "MRWARE",
//       "OntheMRWARE": "의료 실습 플랫폼",
//       "OntheMRWARE2": "MRWARE에서",
//       "Frompractice": "실습부터 실습결과 관리까지,",
//       "Frompractice2": "언제 어디서든 만나 보세요.",
//       "newparadigm": "의료 실습 교육의 새로운 ",
//       "newparadigm2": "패러다임을 제시합니다.",
//       "herotext01":"360VR 기반 실감형 실습에서 평가·실습 결과 관리까지.",
//       "herotext02":"공간과 시간의 한계를 넘어, 보건 실습 교육의 새로운 패러다임을 제시합니다.",
//       "핵심간호술기": "핵심간호술기",
//       "물리치료": "물리치료",
//       "물리치료사": "물리치료사",
//       "요양보호": "요양보호",
//       "요양보호사": "요양보호사",
//       "관리자":"관리자",
//       // 헤더
//       "라이선스 구매":"라이선스 구매",
//       "라이선스 구매링크":"https://new.vrware.world/page/payment.php",
//       "고객지원":"고객지원",
//       "다운로드": "다운로드",
//       "구매/상담 문의": "구매/상담 문의",
//       "자주 하는 질문":"자주 하는 질문",
//       "회원가입":"회원가입",
//       "로그인":"로그인",
//       // 로그인 페이지
//       "아이디":"아이디",
//       "아이디pl":"아이디를 입력해 주세요.",
//       "비밀번호":"비밀번호",
//       "비밀번호pl":"비밀번호를 입력해 주세요.",
//       "아이디 저장":"아이디 저장",
//       "아이디 찾기":"아이디 찾기",
//       "비밀번호 찾기":"비밀번호 찾기",
//       "아이디 찾기 링크":"https://new.vrware.world/page/find_id.php",
//       "비밀번호 찾기 링크":"https://new.vrware.world/page/find_pw.php",
//       "회원가입 멘트":"아직 MRWARE 회원이 아닌가요?",
//       "회원가입":"회원가입",
//       "회원가입 링크":"https://new.vrware.world/page/signup.php",
//       // 메인 Section 01
//       "herotext01":"360VR 기반 실감형 실습에서 평가·실습 결과 관리까지.",
//       "herotext02":"공간과 시간의 한계를 넘어, 보건 실습 교육의 새로운 패러다임을 제시합니다.",
//       // 메인 Section 02
//       "sec02Text1-1":"이론 중심 수업의 한계를 넘어 실습 환경을 ",
//       "sec02Text1-2":"확장시켜주는",
//       "sec02Text1-3":"보건 과정 실습 플랫폼",
//       "sec02Text2-1":"핵심 기본간호술, 물리치료 특수검사, 요양보호 실습까지",
//       "sec02Text2-2":"이전에 없던 새로운 방식으로 제공합니다.",
//       // 메인 Section 03
//       "sec03Text1-1":"언제, 어디서나, 몇 번이든",
//       "sec03Text1-2":"학생·학교·선생님 모두를 위한 실감형 실습 교육,",
//       "sec03Text2-1":"이제 MRWARE에서",
//        // 메인 Section 04
//       "sec04Text1-1":"자세히 알아보기",
//       "sec04Text2-1":"MRWARE는 간호학/ 물리치료학 / 요양보호학과 등의 교육기관 및 학생들을 대상으로 실제 환경과 유사한 360vr기반의 보건사업 과정 실습 콘텐츠를 제공하는 플랫폼입니다.",
//       "sec04Text2-2":"개별 실습 현황 및 피드백 확인이 가능한 LMS 학습 관리 시스템으로 학생부터 선생님까지 누구나 활용할 수 있습니다.",
//       // 메인 Section 05
//       "sec05Text1-1":"바로 시작해보기",
//       "sec05Text1-2":"전공에 맞는 실습을 지금 시작해보세요.",
//       "sec05Text2-1":"바로 실행하기",
//       "sec05Text2-2":"표준 절차 기반 360VR 실습으로 위생·활력징후·투약 등 핵심 술기를 익히고, 리포트로 학습 결과를 관리",
//       "sec05Text2-3":"상황 기반 시뮬레이션으로 어르신의 일상 돌봄과 안전, 의사소통 절차를 익히고, 리포트로 학습 결과를 관리",
//       "sec05Text2-4":"케이스 기반 360VR 실습으로 특수검사와 평가·치료 절차를 숙련하고, 대시보드·리포트로 성과를 관리",

//       // 메인 Section 06
//       "sec06Text1-1":"자주 하는 질문",
//       "sec06Text1-2":"자주 나오는 질문과 답을 쉽게 정리했습니다.",
//       "faq1Question": "360 VR 기반 실습은 어떤 장점이 있나요?",
//       "faq1Answer": "실제와 비슷한 환경에서 환자를 대상으로 수행하는 듯한 몰입감 높은 경험을 제공하여 시간 및 공간의 제약 없이 다양한 상황별 주제 중 원하는 실습을 반복 수행할 수 있다는 장점이 있습니다.",
//       "faq2Question": "LMS에서는 어떤 정보를 확인할 수 있나요?",
//       "faq2Answer": "학생이라면, 실습 중 진행한 퀴즈에 대한 결과와 점수를 확인할 수 있습니다. <1></1>선생님이라면, 학생들의 학습 현황을 확인하고 피드백 내용을 작성할 수 있습니다. ",
//       "faq3Question": "어떤 접속 환경에서 사용할 수 있나요?",
//       "faq3Answer": "MRWARE 서비스는 2가지 접속환경을 제공합니다. 웹페이지에서 바로 실행하거나, 설치 파일을 다운로드하여 실행할 수 있습니다. <1></1>PC(컴퓨터, 노트북)만 있으면 언제 어디서든 접속 가능합니다.  핵심간호술기는 PC는 물론 HMD 기기(Meta Quest 2, PICO G2 4K)에서 실행할 수 있습니다.",
//       "faq4Question": "어디서 다운로드 받을 수 있나요?",
//       "faq4Answer": "MRWARE 서비스(핵심간호술기, 요양보호, 물리치료)를 이용하기 위해서는 라이선스를 구매해야 합니다. <1></1>개인이라면 고객지원 - 라이선스 구매에서, 학교 또는 기관이라면 <0>VRWARE STORE</0>에서 구매할 수 있습니다.",
//       // 메인 Section 08
//       "sec08Text1-1":"공간 너머의 경험을,",
//       "sec08Text1-2":"MRWARE로 먼저 만나보세요",
//       "sec08Text2-1":"구매 문의하기",
//       // ===================================================================
//       // 서브 페이지 (다운로드/ 상담문의 / FAQ)
//       // ===================================================================
//       // 다운로드
//       "dlTitle":"서비스 다운로드",
//       "dlSub":"전공에 맞는 실습을 지금 시작해보세요.",
//       // 공통 버튼 텍스트
//       "manual":"매뉴얼",
//       "windowIntl":"Window 설치",
//       "runNow":"바로 실행하기",
//       "learnMore":">> 자세히 보기",
//       // 솔루션별 설명 텍스트
//       "sub_dl_text01":"4주기 개정 내용을 반영한 핵심기본간호술 항목 18개의 주제별 절차 학습과 관리,평가가 가능한 교육 플랫폼",
//       "sub_dl_text02":"요양보호 학습 과정 중 20개의 주요 실습 절차 학습과 관리, 평가가 가능한 교육 플랫폼",
//       "sub_dl_text03":"물리치료 특수 검사 중 20개의 물리치료 절차 학습과 관리, 평가가 가능한 교육 플랫폼",
//       "page0401":"https://vrware.world/page/page_0401.php",
//       "page0402":"https://vrware.world/page/page_0402.php",
//       "page0403":"https://vrware.world/page/page_0403.php",
//       // FAQ 페이지
//       "faqTitle":"자주 하는 질문",
//       "faqSub":"더 궁금한 점이 있으시다면 구매 상담 문의를 해주세요.",
//       // 구매상담 문의
//       "inqTitle":"MRWARE 구매상담 문의",
//       "inqSub1":"360VR 실감형 실습부터 평가·리포트·LMS 연동까지.",
//       "inqSub2":"귀사의 기관 커리큘럼에 맞춘 제작을 상담해드립니다.",
//       "inqSub3":"필요하시면 메일로 연락 주세요: gpsales@globepoint.co.kr",
//       "inqInput1":"문의 제목",
//       "inqInput2":"성명(회사명)",
//       "inqInput3":"연락처",
//       "inqInput4":"답변 받을 이메일 주소",
//       "inqInput5":"문의 내용",
//       "inqInput6":"파일 찾기",
//       "inqInput7":"선택된 파일이 없습니다.",
//       "inqInput8":"문의 보내기",
//       "inqCapcha01":"보안 문자를 입력하세요.",
//       "inqCapcha02":"이미지를 클릭하면 새로운 보안 문자가 생성됩니다.",
//       "alertText01":"보안 문자가 일치하지 않습니다.",
//       "modalText01":"문의가 접수되었습니다.",
//       "modalText02":"담당자가 내용을 확인 후 빠른 시일 내에 답변 드리겠습니다.",
//       "modalText03":"확인",
//       // ===================================================================
//       // 풋터
//       // ===================================================================
//       "companyName": "(주)글로브포인트",
//       "address": "주소 : 경기도 고양시 덕양구 삼원로 83 광양프런티어밸리 6차 1111호 ",
//       "phone1": "031-911-0601",
//       "phone2": "031-922-0602",
//       "email": "gpsales@globepoint.co.kr",
//       "footerCopyRight": "Copyright © 2024 Globepoint Inc. All rights reserved.",
//       "VRWAREofficial":"VRWARE 공식 홈페이지",

//     }
//   }
// };

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ko", // 초기 언어 설정
    fallbackLng: "ko",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
