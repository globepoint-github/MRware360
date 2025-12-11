# MRWARE 프로젝트 데이터베이스 설계 방안

## 권장 방안: 별도 간단한 DB 사용

### 데이터베이스 구조
```sql
-- MRWARE 전용 관리자 테이블
CREATE TABLE mrware_admins (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,  -- bcrypt 해시
  email VARCHAR(100),
  name VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  is_active BOOLEAN DEFAULT TRUE
);
```

### 데이터베이스 연결 정보
```
DATABASE_URL="mysql://globepoint:globepoint@180.210.83.9:3306/MRwareDB"
```

### 장점
1. ✅ **독립성**: 각 시스템이 독립적으로 관리됨
2. ✅ **단순성**: 관리자 인증만 필요하므로 테이블이 단순함
3. ✅ **확장성**: 나중에 MRWARE 전용 기능 추가 시 용이
4. ✅ **보안**: 각 시스템의 데이터베이스 접근 권한 분리

---

## 대안 1: 기존 DB 활용 (비권장)

### caregiverDB 또는 Rehab360 DB의 관리자 정보 활용
- 장점: 별도 DB 불필요
- 단점: 
  - 두 시스템의 관리자 정보가 다를 수 있음
  - 관리자 계정이 중복될 수 있음
  - 시스템 간 의존성 증가

---

## 대안 2: 통합 관리자 DB (복잡함)

### 공통 관리자 테이블 생성
- 모든 시스템이 하나의 관리자 테이블 공유
- 장점: 중앙 집중식 관리
- 단점: 복잡도 증가, 시스템 간 결합도 높음

---

## 구현 우선순위

1. **옵션 1 (권장)**: 별도 간단한 DB 사용
   - MRwareDB 생성
   - 간단한 관리자 테이블만 생성
   - Prisma 또는 직접 MySQL 연결

2. **옵션 2**: 환경 변수로 간단한 인증 (개발/테스트용)
   - .env 파일에 관리자 정보 저장
   - 프로덕션에서는 옵션 1 사용

