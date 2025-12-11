import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

/**
 * 관리자 로그인 API
 * 환경 변수에 저장된 관리자 정보로 인증
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    // 필수 파라미터 확인
    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: '사용자명과 비밀번호를 입력해주세요.' },
        { status: 400 }
      );
    }

    // 환경 변수에서 관리자 정보 가져오기
    const adminUsername = process.env.ADMIN_USERNAME;
    const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;
    const adminPassword = process.env.ADMIN_PASSWORD; // 평문 비밀번호 (개발용)

    // 환경 변수가 설정되지 않은 경우
    if (!adminUsername) {
      console.error('ADMIN_USERNAME 환경 변수가 설정되지 않았습니다.');
      return NextResponse.json(
        { success: false, error: '서버 설정 오류가 발생했습니다.' },
        { status: 500 }
      );
    }

    // 사용자명 확인
    if (username !== adminUsername) {
      return NextResponse.json(
        { success: false, error: '사용자명 또는 비밀번호가 올바르지 않습니다.' },
        { status: 401 }
      );
    }

    // 비밀번호 확인
    let isPasswordValid = false;

    if (adminPasswordHash) {
      // 해시된 비밀번호가 있는 경우 (프로덕션)
      isPasswordValid = await bcrypt.compare(password, adminPasswordHash);
    } else if (adminPassword) {
      // 평문 비밀번호가 있는 경우 (개발용)
      isPasswordValid = password === adminPassword;
    } else {
      console.error('ADMIN_PASSWORD_HASH 또는 ADMIN_PASSWORD 환경 변수가 설정되지 않았습니다.');
      return NextResponse.json(
        { success: false, error: '서버 설정 오류가 발생했습니다.' },
        { status: 500 }
      );
    }

    if (!isPasswordValid) {
      return NextResponse.json(
        { success: false, error: '사용자명 또는 비밀번호가 올바르지 않습니다.' },
        { status: 401 }
      );
    }

    // 로그인 성공 - 토큰 생성
    const token = `token_${Date.now()}_${username}`;

    return NextResponse.json({
      success: true,
      token,
      username,
      message: '로그인 성공',
    });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, error: '로그인 처리 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

