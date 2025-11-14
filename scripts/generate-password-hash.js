/**
 * 비밀번호 해시 생성 유틸리티
 * 사용법: node scripts/generate-password-hash.js <비밀번호>
 */

const bcrypt = require('bcryptjs');

const password = process.argv[2];

if (!password) {
  console.error('사용법: node scripts/generate-password-hash.js <비밀번호>');
  process.exit(1);
}

// 비밀번호 해시 생성
const saltRounds = 10;
bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) {
    console.error('해시 생성 오류:', err);
    process.exit(1);
  }
  
  console.log('\n비밀번호 해시 생성 완료:');
  console.log('================================');
  console.log('원본 비밀번호:', password);
  console.log('해시:', hash);
  console.log('\n.env.local 파일에 다음을 추가하세요:');
  console.log('ADMIN_PASSWORD_HASH=' + hash);
  console.log('================================\n');
});

