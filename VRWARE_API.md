# VRWARE 통합인증 및 라이선스 API 가이드

> 최종 업데이트: 2024-12-29  
> 버전: 1.0  
> 작성자: VRWare 개발팀

---

## 📑 목차

1. [개요](#1-개요)
2. [인증 흐름도](#2-인증-흐름도)
3. [도메인 로그인 API](#3-도메인-로그인-api)
4. [자동 로그인 API](#4-자동-로그인-api)
5. [라이선스 조회 API](#5-라이선스-조회-api)
6. [라이선스 검증 API](#6-라이선스-검증-api)
7. [라이선스 등록 API](#7-라이선스-등록-api)
8. [에러 코드](#8-에러-코드)


---

## 1. 개요

### 1.1 Base URL
```
https://auth.vrware.world
```

### 1.2 인증 방식
VRWARE는 **도메인 기반 통합인증(SSO)** 시스템을 사용합니다.

- **1단계**: 도메인 로그인으로 토큰 발급
- **2단계**: 토큰으로 자동 로그인 (세션 생성)
- **3단계**: 라이선스 검증 후 서비스 이용

### 1.3 지원 서비스

| 서비스명 | 도메인 코드 | 비밀키 |
|----------|-------------|---------|
| 메타트리 | METATREE | MTT_SECRET_KEY_2024_SECURE_001 |
| 픽셀메이커 | PIXEL | PXL_SECRET_KEY_2024_SECURE_002 |
| 스쿨 | SCHOOL | SCH_SECRET_KEY_2024_SECURE_003 |
| 스토리빌더 | STBUILDER | STB_SECRET_KEY_2024_SECURE_004 |
| 메타웨어 | METAWARE | MTW_SECRET_KEY_2024_SECURE_005 |
| 북클럽 | BOOKCLUB | BCL_SECRET_KEY_2024_SECURE_006 |

---

## 2. 인증 흐름도

```
┌─────────────────────────────────────────────────────────────┐
│                      사용자 로그인 요청                        │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│  1단계: 도메인 로그인 (POST /api/domain_login)                │
│  • member_id, domain, secret_key 전송                        │
│  • 응답: token, member_idx, member_id                        │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│  2단계: 자동 로그인 (POST /api/auto_login_token)              │
│  • token 전송                                                 │
│  • 세션/쿠키 생성                                              │
│  • 응답: 회원 정보                                             │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│  3단계: 라이선스 체크 (POST /api/my_licenses)                 │
│  • member_idx 전송                                            │
│  • 응답: 라이선스 목록 및 상태                                  │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│              라이선스 있음? (ACTIVE 상태)                       │
│                                                               │
│  YES ───> 서비스 메인 화면                                     │
│  NO  ───> 라이선스 구매 페이지                                  │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. 도메인 로그인 API

### 3.1 기본 정보

**항목명**: 도메인 로그인 (토큰 발급)  
**전송방식**: POST  
**데이터방식**: form  
**RequestURL**: `https://auth.vrware.world/api/domain_login`

### 3.2 파라미터

| 구분 | 항목명 | 타입 | 필수여부 | 설명 |
|------|--------|------|----------|------|
| Request | member_id | string | O | 회원 아이디 (이메일) |
| Request | domain | string | O | 도메인 코드 (METAWARE, STBUILDER 등) |
| Request | secret_key | string | O | 도메인별 비밀키 |
| Response | status | string | - | successful / error |
| Response | status_code | int | - | HTTP 상태 코드 |
| Response | alert_message | string | - | 한글 메시지 |
| Response | data.token | string | - | 자동 로그인용 토큰 |
| Response | data.member_idx | string | - | 회원 고유번호 |
| Response | data.member_id | string | - | 회원 아이디 |

### 3.3 요청 예제

#### cURL
```bash
curl -X POST https://auth.vrware.world/api/domain_login \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "member_id=test@example.com" \
  -d "domain=METAWARE" \
  -d "secret_key=MTW_SECRET_KEY_2024_SECURE_005"
```

#### JavaScript (Fetch)
```javascript
const response = await fetch('https://auth.vrware.world/api/domain_login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: new URLSearchParams({
    member_id: 'test@example.com',
    domain: 'METAWARE',
    secret_key: 'MTW_SECRET_KEY_2024_SECURE_005'
  })
});

const data = await response.json();
```

#### Postman
```
POST https://auth.vrware.world/api/domain_login

Body (x-www-form-urlencoded):
member_id: test@example.com
domain: METAWARE
secret_key: MTW_SECRET_KEY_2024_SECURE_005
```

### 3.4 응답 예제

#### 성공 (200)
```json
{
  "status": "successful",
  "status_code": 200,
  "status_message": "Domain login successful",
  "alert_message": "도메인 로그인 성공",
  "data": {
    "token": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",
    "member_idx": "123",
    "member_id": "test@example.com"
  }
}
```

#### 실패 (400)
```json
{
  "status": "error",
  "status_code": 400,
  "status_message": "Invalid credentials",
  "alert_message": "회원 정보가 일치하지 않습니다.",
  "data": {}
}
```

### 3.5 주의사항

⚠️ **중요**: 이 API는 토큰만 발급하며, 실제 로그인 상태가 아닙니다.  
→ 반드시 **자동 로그인 API**를 호출하여 세션을 생성해야 합니다.

---

## 4. 자동 로그인 API

### 4.1 기본 정보

**항목명**: 자동 로그인 (토큰 검증 및 세션 생성)  
**전송방식**: POST  
**데이터방식**: form  
**RequestURL**: `https://auth.vrware.world/api/auto_login_token`

### 4.2 파라미터

| 구분 | 항목명 | 타입 | 필수여부 | 설명 |
|------|--------|------|----------|------|
| Request | token | string | O | 도메인 로그인에서 받은 토큰 |
| Response | status | string | - | successful / error |
| Response | status_code | int | - | HTTP 상태 코드 |
| Response | alert_message | string | - | 한글 메시지 |
| Response | data.member_idx | string | - | 회원 고유번호 |
| Response | data.member_id | string | - | 회원 아이디 |
| Response | data.member_name | string | - | 회원 이름 |
| Response | data.member_email | string | - | 회원 이메일 |
| Response | data.member_nicname | string | - | 닉네임 |

### 4.3 요청 예제

#### cURL
```bash
curl -X POST https://auth.vrware.world/api/auto_login_token \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "token=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6"
```

#### JavaScript (Fetch)
```javascript
const response = await fetch('https://auth.vrware.world/api/auto_login_token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: new URLSearchParams({
    token: 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6'
  })
});

const data = await response.json();
```

### 4.4 응답 예제

#### 성공 (200)
```json
{
  "status": "successful",
  "status_code": 200,
  "status_message": "Auto login successful",
  "alert_message": "자동 로그인 성공",
  "data": {
    "member_idx": "123",
    "member_id": "test@example.com",
    "member_name": "홍길동",
    "member_email": "test@example.com",
    "member_nicname": "길동이"
  }
}
```

#### 실패 (401)
```json
{
  "status": "error",
  "status_code": 401,
  "status_message": "Invalid token",
  "alert_message": "유효하지 않은 토큰입니다.",
  "data": {}
}
```

### 4.5 세션/쿠키 처리

이 API 호출 시 서버에서 자동으로 다음을 처리합니다:

1. **세션 생성**: PHP 세션에 회원 정보 저장
2. **크로스 도메인 쿠키 설정**:
   - Domain: `.vrware.world`
   - SameSite: None
   - Secure: true (HTTPS)
   - HttpOnly: false (JavaScript 접근 가능)

---

## 5. 라이선스 조회 API

### 5.1 기본 정보

**항목명**: 내 라이선스 목록 조회  
**전송방식**: POST  
**데이터방식**: form  
**RequestURL**: `https://auth.vrware.world/api/my_licenses`

### 5.2 파라미터

| 구분 | 항목명 | 타입 | 필수여부 | 설명 |
|------|--------|------|----------|------|
| Request | member_idx | string | O | 회원 고유번호 |
| Response | status | string | - | successful / error |
| Response | status_code | int | - | HTTP 상태 코드 |
| Response | data[] | array | - | 라이선스 목록 |
| Response | data[].member_license_idx | string | - | 라이선스 고유번호 |
| Response | data[].license_code | string | - | 라이선스 코드 |
| Response | data[].license_type | string | - | 라이선스 타입 (metaware, school 등) |
| Response | data[].license_status | string | - | ACTIVE, EXPIRED, SUSPENDED |
| Response | data[].license_start_date | string | - | 시작일시 (YYYY-MM-DD HH:MM:SS) |
| Response | data[].license_end_date | string | - | 종료일시 (YYYY-MM-DD HH:MM:SS) |
| Response | data[].remaining_days | int | - | 남은 일수 |
| Response | total_count | int | - | 전체 라이선스 개수 |

### 5.3 요청 예제

#### cURL
```bash
curl -X POST https://auth.vrware.world/api/my_licenses \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "member_idx=123"
```

#### JavaScript (Fetch)
```javascript
const response = await fetch('https://auth.vrware.world/api/my_licenses', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: new URLSearchParams({
    member_idx: '123'
  })
});

const data = await response.json();
```

### 5.4 응답 예제

#### 성공 (200)
```json
{
  "status": "successful",
  "status_code": 200,
  "status_message": "Licenses retrieved successfully",
  "alert_message": "라이선스 조회 성공",
  "data": [
    {
      "member_license_idx": "456",
      "license_code": "ABC123DEF456",
      "license_type": "metaware",
      "license_status": "ACTIVE",
      "license_start_date": "2024-01-01 00:00:00",
      "license_end_date": "2024-12-31 23:59:59",
      "remaining_days": 180
    },
    {
      "member_license_idx": "457",
      "license_code": "XYZ789GHI012",
      "license_type": "school",
      "license_status": "EXPIRED",
      "license_start_date": "2023-01-01 00:00:00",
      "license_end_date": "2023-12-31 23:59:59",
      "remaining_days": 0
    }
  ],
  "total_count": 2
}
```

#### 라이선스 없음 (200)
```json
{
  "status": "successful",
  "status_code": 200,
  "status_message": "No licenses found",
  "alert_message": "등록된 라이선스가 없습니다.",
  "data": [],
  "total_count": 0
}
```

### 5.5 라이선스 상태 코드

| 상태 | 설명 | 사용 가능 여부 |
|------|------|----------------|
| ACTIVE | 활성 | ✅ 사용 가능 |
| EXPIRED | 만료 | ❌ 사용 불가 |
| SUSPENDED | 일시 정지 | ❌ 사용 불가 |
| CANCELLED | 취소됨 | ❌ 사용 불가 |

---

## 6. 라이선스 검증 API

### 6.1 기본 정보

**항목명**: 라이선스 검증 (v1.1)  
**전송방식**: POST  
**데이터방식**: form  
**RequestURL**: `https://auth.vrware.world/vrware/v1.1/licenses/verify`

### 6.2 파라미터

| 구분 | 항목명 | 타입 | 필수여부 | 설명 |
|------|--------|------|----------|------|
| Request | member_idx | string | O | 회원 고유번호 |
| Request | license_type | string | X | 라이선스 타입 (미입력 시 전체 조회) |
| Response | status | string | - | successful / error |
| Response | status_code | int | - | HTTP 상태 코드 |
| Response | data.has_license | bool | - | 라이선스 보유 여부 |
| Response | data.license_info | object | - | 라이선스 상세 정보 |

### 6.3 요청 예제

#### cURL
```bash
curl -X POST https://auth.vrware.world/vrware/v1.1/licenses/verify \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "member_idx=123" \
  -d "license_type=metaware"
```

#### JavaScript (Fetch)
```javascript
const response = await fetch('https://auth.vrware.world/vrware/v1.1/licenses/verify', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: new URLSearchParams({
    member_idx: '123',
    license_type: 'metaware'
  })
});

const data = await response.json();
```

### 6.4 응답 예제

#### 라이선스 있음 (200)
```json
{
  "status": "successful",
  "status_code": 200,
  "status_message": "License verified successfully",
  "alert_message": "라이선스 검증 성공",
  "data": {
    "has_license": true,
    "license_info": {
      "license_code": "ABC123DEF456",
      "license_type": "metaware",
      "license_status": "ACTIVE",
      "license_end_date": "2024-12-31 23:59:59",
      "remaining_days": 180
    }
  }
}
```

#### 라이선스 없음 (404)
```json
{
  "status": "error",
  "status_code": 404,
  "status_message": "No valid license found",
  "alert_message": "유효한 라이선스가 없습니다.",
  "data": {
    "has_license": false
  }
}
```

---

## 7. 라이선스 등록 API

### 7.1 기본 정보

**항목명**: 라이선스 코드 등록  
**전송방식**: POST  
**데이터방식**: form  
**RequestURL**: `https://auth.vrware.world/api/register_license`

### 7.2 파라미터

| 구분 | 항목명 | 타입 | 필수여부 | 설명 |
|------|--------|------|----------|------|
| Request | member_idx | string | O | 회원 고유번호 |
| Request | license_code | string | O | 라이선스 코드 (8자 이상) |
| Response | status | string | - | successful / error |
| Response | status_code | int | - | HTTP 상태 코드 |
| Response | data.license_type | string | - | 라이선스 타입 |
| Response | data.license_duration | int | - | 라이선스 기간 (일) |
| Response | data.start_date | string | - | 시작일시 |
| Response | data.end_date | string | - | 종료일시 |
| Response | data.remaining_days | int | - | 남은 일수 |

### 7.3 요청 예제

#### cURL
```bash
curl -X POST https://auth.vrware.world/api/register_license \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "member_idx=123" \
  -d "license_code=ABC123DEF"
```

#### JavaScript (Fetch)
```javascript
const response = await fetch('https://auth.vrware.world/api/register_license', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: new URLSearchParams({
    member_idx: '123',
    license_code: 'ABC123DEF'
  })
});

const data = await response.json();
```

### 7.4 응답 예제

#### 성공 (200)
```json
{
  "status": "successful",
  "status_code": 200,
  "status_message": "License registered successfully",
  "alert_message": "라이선스가 성공적으로 등록되었습니다!",
  "data": {
    "license_type": "metaware",
    "license_duration": 365,
    "license_code": "ABC123DEF",
    "start_date": "2024-01-01 00:00:00",
    "end_date": "2024-12-31 23:59:59",
    "remaining_days": 365
  }
}
```

#### 실패 - 이미 사용된 코드 (409)
```json
{
  "status": "error",
  "status_code": 409,
  "status_message": "License already used",
  "alert_message": "이미 사용된 라이선스 코드입니다.",
  "data": {}
}
```

#### 실패 - 유효하지 않은 코드 (400)
```json
{
  "status": "error",
  "status_code": 400,
  "status_message": "Invalid license code",
  "alert_message": "유효하지 않은 라이선스 코드입니다.",
  "data": {}
}
```

## 8. 에러 코드

### 8.1 HTTP 상태 코드

| 코드 | 의미 | 설명 |
|------|------|------|
| 200 | OK | 요청 성공 |
| 400 | Bad Request | 잘못된 요청 (필수 파라미터 누락, 유효하지 않은 값) |
| 401 | Unauthorized | 인증 실패 (잘못된 토큰, 비밀번호 불일치) |
| 403 | Forbidden | 권한 없음 |
| 404 | Not Found | 리소스 없음 (회원 없음, 라이선스 없음) |
| 409 | Conflict | 중복 (이미 사용된 라이선스 코드) |
| 500 | Internal Server Error | 서버 내부 오류 |

### 8.2 공통 에러 응답 형식

```json
{
  "status": "error",
  "status_code": 400,
  "status_message": "영문 에러 메시지",
  "alert_message": "한글 에러 메시지",
  "data": {}
}
```

### 8.3 주요 에러 메시지

| alert_message | 원인 | 해결 방법 |
|---------------|------|-----------|
| 필수 정보를 입력해주세요. | 필수 파라미터 누락 | 파라미터 확인 |
| 회원 정보가 일치하지 않습니다. | 잘못된 member_id 또는 비밀번호 | 로그인 정보 재확인 |
| 도메인 비밀키가 일치하지 않습니다. | 잘못된 secret_key | 올바른 비밀키 사용 |
| 유효하지 않은 토큰입니다. | 만료되거나 잘못된 토큰 | 재로그인 필요 |
| 이미 사용된 라이선스 코드입니다. | 라이선스 코드 중복 사용 | 새 라이선스 코드 필요 |
| 유효하지 않은 라이선스 코드입니다. | 존재하지 않는 라이선스 코드 | 코드 확인 |
| 유효한 라이선스가 없습니다. | ACTIVE 상태 라이선스 없음 | 라이선스 등록 또는 갱신 |

---

**© 2025 VRWARE. All rights reserved.**
