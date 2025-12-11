# MRWARE 관리자 로그인 설정 가이드

## 환경 변수 방식 (옵션 B) 구현 완료

환경 변수를 사용한 간단한 관리자 인증 시스템이 구현되었습니다.

## 설정 방법

### 1. 환경 변수 파일 생성

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 추가하세요:

```env
# 관리자 사용자명
ADMIN_USERNAME=admin

# 관리자 비밀번호 (평문 - 개발용)
ADMIN_PASSWORD=admin123
```

### 2. 프로덕션 환경 (권장)

프로덕션 환경에서는 해시된 비밀번호를 사용하세요:

```env
# 관리자 사용자명
ADMIN_USERNAME=admin

# 관리자 비밀번호 해시 (프로덕션용)
ADMIN_PASSWORD_HASH=$2a$10$...
```

### 3. 비밀번호 해시 생성

비밀번호 해시를 생성하려면 다음 명령어를 실행하세요:

```bash
node scripts/generate-password-hash.js <비밀번호>
```

예시:
```bash
node scripts/generate-password-hash.js mypassword123
```

출력된 해시를 `.env.local` 파일의 `ADMIN_PASSWORD_HASH`에 추가하세요.

## 기본 로그인 정보

### 개발 환경 (기본값)
- **사용자명**: `admin`
- **비밀번호**: `admin123`

⚠️ **주의**: 프로덕션 환경에서는 반드시 비밀번호를 변경하세요!

## 패키지 설치

다음 명령어로 필요한 패키지를 설치하세요:

```bash
npm install
```

## 사용 방법

1. `.env.local` 파일에 관리자 정보 설정
2. 개발 서버 실행: `npm run dev`
3. `/admin/login` 페이지에서 로그인
4. 로그인 성공 시 `/admin/dashboard`로 이동

## 보안 권장사항

1. **프로덕션 환경**에서는 반드시 `ADMIN_PASSWORD_HASH` 사용
2. `.env.local` 파일은 `.gitignore`에 포함되어 있어야 함
3. 강력한 비밀번호 사용 권장
4. 정기적인 비밀번호 변경

## 문제 해결

### "서버 설정 오류가 발생했습니다" 오류
- `.env.local` 파일이 제대로 생성되었는지 확인
- `ADMIN_USERNAME` 환경 변수가 설정되었는지 확인
- `ADMIN_PASSWORD` 또는 `ADMIN_PASSWORD_HASH` 중 하나가 설정되었는지 확인

### 로그인 실패
- 사용자명과 비밀번호가 환경 변수와 일치하는지 확인
- 해시를 사용하는 경우 올바른 해시인지 확인

