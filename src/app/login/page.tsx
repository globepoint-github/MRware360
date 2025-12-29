'use client';

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import "./login.css";
import '../../../i18n';

const LoginPage = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
    setMounted(true);
  }, [i18n]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (!formData.username || !formData.password) {
        setError('아이디와 비밀번호를 입력해주세요.');
        setIsLoading(false);
        return;
      }

      // 실제 로그인 API 호출
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        // 로그인 성공 - 토큰 저장
        if (data.token && typeof data.token === 'string') {
          localStorage.setItem('adminToken', data.token);
        }
        if (data.username && typeof data.username === 'string') {
          localStorage.setItem('adminUsername', data.username);
        }
        
        // 관리자 대시보드로 이동
        const dashboardPath = '/admin/dashboard';
        if (dashboardPath && typeof dashboardPath === 'string' && dashboardPath.length > 0) {
          router.push(dashboardPath);
        }
      } else {
        setError(data.error || '로그인에 실패했습니다.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('로그인 처리 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  // SSR 중에는 빈 화면 반환 (클라이언트에서만 렌더링)
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600 font-korean">로딩 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="login-bg min-h-screen flex items-center justify-center">

        <div className="loginCont">
          <div className="text-center mb-8">
            <h1 className="fs_32">
              {t("로그인")}
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm font-korean">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="username" className="fs_16">
                {t("아이디")}
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="fs_16"
                placeholder={t("아이디pl")}
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label htmlFor="password" className="fs_16">
                {t("비밀번호")}
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="fs_16"
                placeholder={t("비밀번호pl")}
                required
                disabled={isLoading}
              />
            </div>
            <div className='fs_14 userhelp'>
              <label htmlFor="saveData">
                <input type="checkbox" id="saveData"/>
                <p>{t("아이디 저장")}</p>
              </label>
              <a href="#">{t("아이디/비밀번호 찾기")}</a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className=""
            >
              {isLoading ?  t('로그인 중') :  t('로그인')}
            </button>
          </form>

          <div className="mt-6 text-center signup">
            <p className='fs_14'>{t("회원가입 멘트")} <a href="#">{t("회원가입")}</a></p>
          </div>
        </div>
    </div>
  );
};

export default LoginPage;

