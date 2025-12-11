/**
 * .env.local 파일 생성 스크립트
 * UTF-8 인코딩으로 파일 생성
 */

const fs = require('fs');
const path = require('path');

const envContent = `# MRWARE 관리자 로그인 설정

# 관리자 사용자명
ADMIN_USERNAME=admin

# 관리자 비밀번호 (평문 - 개발용)
# 프로덕션에서는 ADMIN_PASSWORD_HASH 사용 권장
ADMIN_PASSWORD=admin123

# 관리자 비밀번호 해시 (프로덕션용)
# 비밀번호 해시 생성: node scripts/generate-password-hash.js <비밀번호>
# ADMIN_PASSWORD_HASH=$2a$10$...

# 참고:
# - 개발 환경: ADMIN_PASSWORD 사용 (평문)
# - 프로덕션 환경: ADMIN_PASSWORD_HASH 사용 (해시)
# - 두 값이 모두 있으면 ADMIN_PASSWORD_HASH가 우선
`;

const envPath = path.join(__dirname, '..', '.env.local');

try {
  fs.writeFileSync(envPath, envContent, { encoding: 'utf8' });
  console.log('✅ .env.local 파일이 성공적으로 생성되었습니다.');
  console.log('\n설정된 값:');
  console.log('  ADMIN_USERNAME=admin');
  console.log('  ADMIN_PASSWORD=admin123');
  console.log('\n⚠️  프로덕션 환경에서는 비밀번호를 변경하세요!');
} catch (error) {
  console.error('❌ 파일 생성 중 오류 발생:', error.message);
  process.exit(1);
}

