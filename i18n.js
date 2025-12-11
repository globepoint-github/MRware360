import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 언어 리소스 파일
const resources = {
  en: {
    translation: {
      // ===================================================================
      // 메인
      // ===================================================================
      "Medical Reality,": "Medical Reality,",
      "MRWARE": "MRWARE",
      "OntheMRWARE": "On the MRWARE",
      "OntheMRWARE2": "medical practice platform",
      "Frompractice": "From practice to result management,",
      "Frompractice2": "experience it anytime, anywhere.",
      "newparadigm": "We present a new paradigm",
      "newparadigm2": "in medical practice education.",
      "핵심간호술기": "Core Nursing Skills",
      "물리치료": "Physiotherapy",
      "요양보호": "Caregiving",
      // ===================================================================
      // 풋터
      // ===================================================================
      "companyName": "Globepoint Inc.",
      "address": "Address: 1111, 83 Samwon-ro, Deokyang-gu, Goyang-si, Gyeonggi-do (10550)",
      "phone1": "+82 31 911 0601",
      "phone2": "+82 31 922 0602",
      "email": "gpsales@globepoint.co.kr",
      "footerCopyRight": "Copyright © 2024 Globepoint Inc. All rights reserved.",
      // ===================================================================
      // 간호술기입니다.
      // ===================================================================
      "coreNursingSkills": "Core Nursing Skills",
      "practiceManage": "System for practical training and evaluation at school and home",
      "nav1": "Run on Web",
      "nav2": "Download Manual",
      "nav3": "Download the installation version.",
      "vrNursingEdu": "VR-based Core Nursing Skills Education Content",
      "vrDesc1": "Core nursing skills is an immersive training education platform based on 360VR.",
      "vrDesc2": "You can check the practical training content of 20 topics and the results.",

      "studentLearningStatus": "Understanding the learning",
      "studentLearningStatus2": "and acquisition status of each student,",
      "feedbackIsGood": "It's great that feedback is possible.",
      "coreNursingSkillScoring": "Scoring of core nursing skills",
      "coreNursingSkillManaging": "and management is possible.",

      "welcomeMessage": "Core Nursing Skills Training Content via Virtual Reality (VR)",
      "introDescription1": "Core Nursing Skills is a realistic practice education platform based on 360VR.",
      "introDescription2": "You can check the practical content of 18 topics and the results of the practice status.",
      "onsiteFeeling": "Realism",
      "onsiteFeelingDescription": "Enhanced realism through real shooting of the nurse desk and ward",
      "practice": "Practice",
      "practiceDescription": "Learn procedures on each topic without time and place constraints. Repeated practice of procedures.",
      "evaluation": "Evaluation",
      "evaluationDescription": "Establish a system that allows instructors to check evaluation data on students' practice results",  

      "immersivePractice": "Immersive Practice",
      "immersionDescription1": "Content that allows learning and evaluation of 18 different topic-specific procedures",
      "immediateAccess": "Immediate Access",
      "goalAndSituation": "Goals and Presenting Situations",
      "learningAndAssessment": "Learning and Assessment Mode",
      "coreSkillsSelection": "Select Core Basic Nursing Skills",
      "customizableQuestions": "Customizable Questions",
      "multipleChoiceQuestions": "Multiple Choice Questions",
      "supplementaryVideos": "Supplementary Videos",
      "voiceRecognition": "Voice Recognition",

      "practiceEvaluationManagement": "Practice and Evaluation Management",
      "student": "Student",
      "studentDescription1": "- View evaluation results for different topics",
      "instructor": "Instructor",
      "instructorDescription1": "- View the practice status of each student",
      "instructorDescription2": "- Provide feedback on practice content",
      "easyAccessEnvironment": "- Easy and Convenient Access Environment",
      "webVersion": "Web Version",
      "webVersionDescription1": "- Run directly from the webpage",
      "webVersionDescription2": "- Practice without location constraints",
      "installVersion": "Install Version",
      "installVersionDescription1": "- Run after downloading installer files",
      "installVersionDescription2": "- Provide a stable operating environment",
      "recommendedSpecs": "Recommended Specifications",
      "category": "Category",
      "webSpecs": "Recommended Specs for Web Version",
      "processor": "Processor (CPU)",
      "memory": "Memory (RAM)",
      "operatingSystem": "Operating System (OS)",
      "processorSpec": "Intel® Core™ i5",
      "memorySpec": "4GB RAM or more",
      "osSpec": "Windows® 10 64-bit (browser supporting WebGL 2.0 or higher)",

      "hmdCompatible": "Compatible HMD",
      "immersivePractice": "Immersive practice through HMD",
      // ===================================================================
      // 물리치료
      // ===================================================================
      "physicalTherapy": "Physical Therapy",
      "immersivePracticeEducation": "Immersive Practice Education Content",
      "immersivePracticeEducation2": "and Management System",

      "practiceAnywhere2": "Practice Anytime, Anywhere",
      "practiceAnyhere": "I'm glad I can do it.",
      "likeRepeatedPractice": "Repeat the necessary topics",
      "likeRepeatedPractice2": "It's great that I can do it.",

      "computerGraphicDesc1": "through Computer Graphic",
      "computerGraphicDesc2": "",

      "dedicatedPracticeRoom": "The problem of insufficient dedicated practice rooms",
      "problemSolved": "has been resolved.",
      "newPracticeEnvironment1": "We can provide students with a new practice",
      "newPracticeEnvironment2": "environment.",

      "vrPhysicalTherapyContent": "Physical Therapy Practice Content",
      "vrPhysicalTherapyContent2": "through Virtual Reality (VR)",
      "physicalTherapyDesc1": "Physical Therapy is a realistic",
      "physicalTherapyDesc1-1": "practice education platform based on 360VR.",
      "physicalTherapyDesc2": "You can check the practice",
      "physicalTherapyDesc2-2": "content and results status of 20 topics.",

      "realism": "Realism",
      "realismEnhanced": "Enhanced realism through",
      "realismEnhanced2": "real shooting",
      "efficientPractice": "Efficient Practice",
      "physicalTherapyTests": "Providing various types of problems",
      "physicalTherapyTests2": "for 20 types of special physical therapy tests",

      "chooseTopic": "Choose Topic",
      "vrExplanation": "Explanation through VR",
      "customQuestions": "Custom Questions",
      "multipleChoiceQuestions2": "Selection Questions",

      "practiceAndEvaluationManagement": "Practice and Evaluation Management",
      "checkPracticeResults": "- Check practice results and ",
      "checkPracticeResults1": "evaluation records for each topic",
      "checkStudentPracticeStatus": "- Check the practice status of each student",
      "provideFeedback": "- Provide feedback on practice content",
      "easyAndConvenientAccessEnvironment": "Easy and Convenient Access Environment",
      // ===================================================================
      // 요양보호사
      // ===================================================================
      "caregiver": "Caregiver",
      "customPracticeManagementSystem": "Custom practice and",
      "customPracticeManagementSystem2": "manageable system",

      "noLocationConstraint": "No location constraints,",
      "practiceAnywhere": "Practice anywhere you like.",
      "topicBasedPractice": "Practice based on topics and situations,",
      "likePracticeOptions": "It's nice to organize practice sessions.",

      "studentProgressPart1": "You can check students'",
      "studentProgressPart2": "learning progress at a glance.",
      "manageResults": "It's convenient to manage practice results and scores",
      "easyFeedback": "Providing feedback is easy",

      "trainingEnvironmentNoConstraints": "Without constraints of training environment",
      "newEnvironmentForStudents": "Provide a new practice environment to students",
      "offerEnvironment": "We can offer a new practice environment.",

      "vrContentTitle": "Caregiver Training Content",
      "vrContentTitle2": "through Virtual Reality (VR)",
      "vrDescription1": "Caregiver Training Platform with",
      "vrDescription1-1": "360VR immersive practice education.",
      "vrDescription2": "You can access 20 practice topics",
      "vrDescription2-2": "and check practice progress results.",

      "caregiverSpecialTests": "Providing various types of questions",
      "caregiverSpecialTests2": "for 20 special topics",
      "caregiverSpecialTests3": "related to caregivers",
      "multipleChoiceQuestion": "Multiple Choice Question",
      "oxQuestion": "OX Question",

      "resultsAndAnswersByTopic": "- Check results and answers by topic and episode"


    }
  },
  ko: {
    translation: {
      // ===================================================================
      // 메인
      // ===================================================================
      "Medical Reality,": "Medical Reality,",
      "MRWARE": "MRWARE",
      "OntheMRWARE": "의료 실습 플랫폼",
      "OntheMRWARE2": "MRWARE에서",
      "Frompractice": "실습부터 실습결과 관리까지,",
      "Frompractice2": "언제 어디서든 만나 보세요.",
      "newparadigm": "의료 실습 교육의 새로운 ",
      "newparadigm2": "패러다임을 제시합니다.",
      "핵심간호술기": "핵심간호술기",
      "물리치료": "물리치료",
      "요양보호": "요양보호",
      // ===================================================================
      // 풋터
      // ===================================================================
      "companyName": "(주)글로브포인트",
      "address": "주소 : 경기도 고양시 덕양구 삼원로 83, 1111호 (10550)",
      "phone1": "031-911-0601",
      "phone2": "031-922-0602",
      "email": "gpsales@globepoint.co.kr",
      "footerCopyRight": "Copyright © 2024 Globepoint Inc. All rights reserved.",
      // ===================================================================
      // 간호술기
      // ===================================================================
      "coreNursingSkills": "핵심간호술기",
      "practiceManage": "학교 및 집에서도 실습 및 평가 가능한 시스템",
      "nav1": "웹에서 실행하기",
      "nav2": "매뉴얼 다운로드",
      "nav3": "설치버전 다운로드",
      "vrNursingEdu": "가상현실(VR)을 통한 핵심간호술기 교육 콘텐츠",
      "vrDesc1": "핵심간호술기는 360VR 기반의 실감형 실습교육 플랫폼입니다.",
      "vrDesc2": "20개 주제의 실습 콘텐츠와 실습 현황 결과를 확인할 수 있습니다.",

      "welcomeMessage": "가상현실(VR)을 통한 핵심간호술기 교육 콘텐츠",
      "introDescription1": "핵심간호술기는 360VR 기반의 실감형 실습교육 플랫폼입니다.",
      "introDescription2": "18개 주제의 실습 콘텐츠와 실습 현황 결과를 확인할 수 있습니다.",
      "onsiteFeeling": "현장감",
      "onsiteFeelingDescription": "간호데스크 및 병실에 대한 실사 촬영으로 현장감 증대",
      "practice": "실습",
      "practiceDescription": "장소와 시간대에 구애 받지 않고 각 주제에 대한 절차 학습. 실습절차에 대한 반복학습.",
      "evaluation": "평가",
      "evaluationDescription": "학생의 실습 결과에 대한 평가 데이터를 교수자 확인이 가능한 시스템 구축" ,

      "immersivePractice": "실감형 실습",
      "immersionDescription1": "18개의 주제별 절차학습과 평가가 가능한 콘텐츠",
      "immediateAccess": "실습 바로가기",
      "goalAndSituation": "목표 및 상황 제시",
      "learningAndAssessment": "학습모드와 평가모드",
      "coreSkillsSelection": "핵심기본간호술 항목선택",
      "customizableQuestions": "맞춤형 문항",
      "multipleChoiceQuestions": "선택형 문항",
      "supplementaryVideos": "보충영상",
      "voiceRecognition": "음성인식",

      "practiceEvaluationManagement": "실습 및 평가 관리",
      "student": "학생",
      "studentDescription1": "- 주제별 실습 결과 확인 평가 내역 확인",
      "instructor": "교수자",
      "instructorDescription1": "- 학생별 실습 현황 확인",
      "instructorDescription2": "- 실습 내용에 대한 피드백 전달",
      "easyAccessEnvironment": "쉽고 편리한 접속환경 제공",
      "webVersion": "웹버전",
      "webVersionDescription1": "- 웹페이지에서 바로 실행",
      "webVersionDescription2": "- 장소 제약 없이 실습 가능",
      "installVersion": "설치버전",
      "installVersionDescription1": "- 설치 파일 다운로드 후 실행",
      "installVersionDescription2": "- 안정적인 구동 환경을 제공함",
      "recommendedSpecs": "권장사양 안내",
      "category": "구분",
      "webSpecs": "웹버전 권장사양",
      "processor": "프로세서(CPU)",
      "memory": "메모리(RAM)",
      "operatingSystem": "운영체제(OS)",
      "processorSpec": "Intel® Core™ i5",
      "memorySpec": "4GB RAM 또는 그 이상",
      "osSpec": "Windows® 10 64-bit (WebGL 2.0 이상 지원 브라우저)",

      "hmdCompatible": "호환 HMD",
      "immersivePractice": "HMD를 통한 몰입감 있는 실습",
      // ===================================================================
      // 물리치료
      // ===================================================================
      "physicalTherapy": "물리치료",
      "immersivePracticeEducation": "실감형 실습 교육 콘텐츠 및",
      "immersivePracticeEducation2": "관리 시스템",
      "practiceAnywhere2": "언제 어디서나 실습을",
      "practiceAnyhere": "할 수 있어서 좋아요.",
      "likeRepeatedPractice": "필요한 주제를 반복해서",
      "likeRepeatedPractice2": "할 수 있어 좋아요.",
      "studentLearningStatus": "학생들별 학습 및 습득",
      "studentLearningStatus2": "현황 파악과 피드백이 ",
      "feedbackIsGood": "가능해서 좋네요.",
      "coreNursingSkillScoring": "핵심간호술기의 점수화",
      "coreNursingSkillManaging": "및 관리가 가능해요.",
      "dedicatedPracticeRoom": "부족했던 전용 실습실",
      "problemSolved": "문제가 해결되었어요.",
      "newPracticeEnvironment1": "학생들에게 새로운 실습",
      "newPracticeEnvironment2": "환경을 제공할 수 있어요.",

      "vrPhysicalTherapyContent": "가상현실(VR)을 통한 물리치료",
      "vrPhysicalTherapyContent2": "실습 콘텐츠",
      "physicalTherapyDesc1": "물리치료는 360VR 기반의",
      "physicalTherapyDesc1-1": "실감형 실습교육 플랫폼입니다.",
      "physicalTherapyDesc2": "20개 주제의 실습 콘텐츠와 실습 현황 결과를",
      "physicalTherapyDesc2-2": "확인할 수 있습니다.",

      "computerGraphicDesc1": "Computer Graphic을",
      "computerGraphicDesc2": "통한 보충 설명",

      "realism": "실재감",
      "realismEnhanced": "실사 촬영을 통한",
      "realismEnhanced2": "실재감 향상",

      "efficientPractice": "효율적인 실습",
      "physicalTherapyTests": "물리치료 특수검사 20종에 대하여",
      "physicalTherapyTests2": "다양한 유형의 문제 제공",

      "chooseTopic": "주제 선택",
      "vrExplanation": "VR을 통한 설명",
      "customQuestions": "맞춤형 문항",
      "multipleChoiceQuestions2": "선택형 문항",

      "practiceAndEvaluationManagement": "실습 및 평가 관리",
      "student": "학생",
      "checkPracticeResults": "- 주제별 실습 결과 확인",
      "checkPracticeResults1": "평가 내역 확인",
      "checkStudentPracticeStatus": "- 학생별 실습 현황 확인",
      "provideFeedback": "- 실습 내용에 대한 피드백 전달",
      "easyAndConvenientAccessEnvironment": "쉽고 편리한 접속환경 제공",
      // ===================================================================
      // 요양보호사
      // ===================================================================
      "caregiver": "요양보호사",
      "customPracticeManagementSystem": "사용자 맞춤형 실습 및",
      "customPracticeManagementSystem2": "관리 가능한 시스템",

      "noLocationConstraint": "장소의 제약 없이",
      "practiceAnywhere": "실습할 수 있어 좋아요.",
      "topicBasedPractice": "주제 및 상활별로 실습을",
      "likePracticeOptions": "진행할 수 있어 좋아요.",

      "studentProgressPart1": "학생들의 학습 현황을",
      "studentProgressPart2": "한 눈에 확인할 수 있어요.",
      "manageResults": "실습 결과와 점수를 관리하고",
      "easyFeedback": "피드백하기 편리해요.",

      "trainingEnvironmentNoConstraints": "실습 및 훈련 환경의",
      "newEnvironmentForStudents": "제약 없이 학생들에게 새로운",
      "offerEnvironment": "실습 환경을 제공할 수 있어요.",

      "vrContentTitle": "가상현실(VR)을 통한 요양보호사",
      "vrContentTitle2": "실습 콘텐츠",
      "vrDescription1": "요양보호사는 360VR 기반의 실감형",
      "vrDescription1-1": "실습교육 플랫폼입니다.",
      "vrDescription2": "20개 주제의 실습 콘텐츠와 실습 현황",
      "vrDescription2-2": "결과를 확인할 수 있습니다.",

      "caregiverSpecialTests": "요양보호사",
      "caregiverSpecialTests2": "주제별 20종에 대하여",
      "caregiverSpecialTests3": "다양한 유형의 문제 제공",
        "multipleChoiceQuestion": "객관식 문항",
        "oxQuestion": "OX 문항",
      
      "resultsAndAnswersByTopic": "- 주제별, 회차별 실습 결과 및 정답 확인",

    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'ko', // 초기 언어 설정
    fallbackLng: 'ko',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;