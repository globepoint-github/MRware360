'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const AdminDashboardPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const [username, setUsername] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 클라이언트 사이드에서만 실행
    if (typeof window === 'undefined') {
      return;
    }
    
    setMounted(true);
    
    // 로그인 상태 확인 (실제로는 토큰이나 세션 확인)
    const token = localStorage.getItem('adminToken');
    const savedUsername = localStorage.getItem('adminUsername');
    
    if (!token) {
      // 경로 검증 후 router.push 호출
      const loginPath = '/admin/login';
      if (loginPath && typeof loginPath === 'string' && loginPath.length > 0) {
        router.push(loginPath);
      }
    } else if (savedUsername && typeof savedUsername === 'string' && savedUsername.length > 0) {
      setUsername(savedUsername);
    }
  }, [router]);

  const handleAutoLogin = async (domain: string, serviceName: string) => {
    setIsLoading(domain);
    
    try {
      // 클라이언트 사이드에서만 실행
      if (typeof window === 'undefined') {
        return;
      }

      // 로그인 토큰 가져오기
      const token = localStorage.getItem('adminToken');
      const username = localStorage.getItem('adminUsername');
      
      if (!token || !username) {
        alert('로그인 정보가 없습니다. 다시 로그인해주세요.');
        const loginPath = '/admin/login';
        if (loginPath && typeof loginPath === 'string' && loginPath.length > 0) {
          router.push(loginPath);
        }
        return;
      }

      // domain 검증
      if (!domain || typeof domain !== 'string' || domain === 'null' || domain === 'undefined' || domain.trim() === '') {
        throw new Error('유효하지 않은 도메인입니다.');
      }
      
      const safeDomain = domain.trim();
      
      // 방법 1: 쿼리 파라미터 방식으로 자동 로그인 (가장 안전한 방법)
      // Next.js의 SSR 검증을 회피하기 위해 직접 window.open 사용
      const params = new URLSearchParams({
        autoLogin: 'true',
        token: token || '',
        username: username || '',
        timestamp: Date.now().toString(),
      });
      
      // URL 검증 및 생성
      const loginUrl = `${safeDomain}/login?${params.toString()}`;
      
      if (!loginUrl || 
          typeof loginUrl !== 'string' || 
          loginUrl === 'null' || 
          loginUrl === 'undefined' || 
          loginUrl.length === 0) {
        throw new Error('유효하지 않은 로그인 URL입니다.');
      }
      
      // URL 객체로 최종 검증
      try {
        const validatedUrl = new URL(loginUrl);
        // 검증된 URL로 새 창 열기
        window.open(validatedUrl.toString(), '_blank');
      } catch (urlError) {
        console.error('Invalid URL:', urlError);
        throw new Error('유효하지 않은 URL 형식입니다.');
      }
      
    } catch (error) {
      console.error('Auto login error:', error);
      alert(`${serviceName} 자동 로그인에 실패했습니다.\n직접 접속해주세요: ${domain}`);
    } finally {
      setIsLoading(null);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUsername');
    const loginPath = '/admin/login';
    if (loginPath && typeof loginPath === 'string' && loginPath.length > 0) {
      router.push(loginPath);
    }
  };

  // SSR 중에는 빈 화면 반환 (클라이언트에서만 렌더링)
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-primary-light/20 to-gray-100 flex items-center justify-center px-4 py-8 sm:py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600 font-korean">로딩 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-primary-light/20 to-gray-100 flex items-center justify-center px-4 py-8 sm:py-12">
      <div className="max-w-5xl w-full">
        {/* 헤더 섹션 */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full mb-4 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-2 font-korean">
            관리자 대시보드
          </h1>
          {username && (
            <p className="text-body-sm text-gray-600 font-korean">
              안녕하세요, <span className="font-semibold text-primary">{username}</span>님
            </p>
          )}
        </div>

        {/* 메인 컨텐츠 */}
        <div className="bg-white rounded-card shadow-card p-6 sm:p-8 lg:p-10">
          {/* 상단 액션 바 */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 pb-6 border-b border-gray-200">
            <div>
              <h2 className="text-h2 font-bold text-gray-800 mb-2 font-korean">
                서비스 관리
              </h2>
              <p className="text-body-sm text-gray-600 font-korean">
                관리할 서비스를 선택해주세요
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="mt-4 sm:mt-0 px-5 py-2.5 text-caption font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-button transition-all duration-300 hover:shadow-md font-korean flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              로그아웃
            </button>
          </div>

          {/* 서비스 카드 그리드 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* 요양보호사 관리 카드 */}
            <Card 
              className="relative overflow-hidden p-8 transition-all duration-300 hover:scale-[1.02] border-2 border-transparent hover:border-carehub/20"
              hover={true}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-carehub-light/30 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-carehub-light rounded-full mb-6 mx-auto">
                  <svg className="w-8 h-8 text-carehub" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-h3 font-bold text-gray-800 mb-2 font-korean">
                    요양보호사 관리
                  </h3>
                  <p className="text-body-sm text-gray-600 font-korean">
                    Caregiver360 Admin
                  </p>
                </div>
                <Button
                  onClick={() => handleAutoLogin('https://caregiver360-admin.mrware.world', '요양보호사 관리')}
                  variant="carehub"
                  size="md"
                  disabled={isLoading !== null}
                  className="w-full relative z-10"
                >
                  {isLoading === 'https://caregiver360-admin.mrware.world' ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      연결 중...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      접속하기
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  )}
                </Button>
              </div>
            </Card>

            {/* 물리치료 관리 카드 */}
            <Card 
              className="relative overflow-hidden p-8 transition-all duration-300 hover:scale-[1.02] border-2 border-transparent hover:border-physio/20"
              hover={true}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-physio-light/30 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-physio-light rounded-full mb-6 mx-auto">
                  <svg className="w-8 h-8 text-physio" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-h3 font-bold text-gray-800 mb-2 font-korean">
                    물리치료 관리
                  </h3>
                  <p className="text-body-sm text-gray-600 font-korean">
                    Rehab360 Admin
                  </p>
                </div>
                <Button
                  onClick={() => handleAutoLogin('https://rehab360-admin.mrware.world', '물리치료 관리')}
                  variant="physio"
                  size="md"
                  disabled={isLoading !== null}
                  className="w-full relative z-10"
                >
                  {isLoading === 'https://rehab360-admin.mrware.world' ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      연결 중...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      접속하기
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  )}
                </Button>
              </div>
            </Card>
          </div>

          {/* 하단 안내 메시지 */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-body-sm text-gray-600 font-korean">
                <p className="font-medium text-gray-700 mb-1">안내</p>
                <p>각 서비스를 클릭하면 새 창에서 해당 관리자 페이지로 자동 로그인됩니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;

