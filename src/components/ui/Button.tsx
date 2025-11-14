import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string | null;
  onClick?: () => void;
  variant?: 'nursing' | 'physio' | 'carehub' | 'primary' | 'secondary' | 'accent' | 'purple' | 'cyan';
  size?: 'sm' | 'md' | 'lg' | 'full';
  className?: string;
  icon?: React.ReactNode;
  external?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  external = false,
  disabled = false,
}) => {
  const baseStyles = 'flex items-center justify-center rounded-button font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';
  
  const variantStyles = {
    nursing: 'bg-nursing hover:bg-nursing-hover text-white focus:ring-nursing',
    physio: 'bg-physio hover:bg-physio-hover text-white focus:ring-physio',
    carehub: 'bg-carehub hover:bg-carehub-hover text-white focus:ring-carehub',
    primary: 'bg-primary hover:bg-primary-hover text-white focus:ring-primary',
    secondary: 'bg-secondary hover:bg-secondary-hover text-white focus:ring-secondary',
    accent: 'bg-accent hover:bg-accent-hover text-white focus:ring-accent',
    purple: 'bg-purple hover:bg-purple-hover text-white focus:ring-purple',
    cyan: 'bg-cyan hover:bg-cyan-hover text-white focus:ring-cyan',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-body-sm h-10',
    md: 'px-6 py-3 text-body-sm h-[60px]',
    lg: 'px-8 py-4 text-body h-16',
    full: 'px-6 py-3 text-body-sm h-[60px] w-full',
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} shadow-lg hover:shadow-xl`;

  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </>
  );

  // href가 유효한 문자열인지 확인 (서버 사이드 렌더링 안전)
  // 먼저 기본적인 null/undefined 체크
  if (!href || typeof href !== 'string') {
    // href가 없거나 문자열이 아니면 button 렌더링으로 진행
  } else {
    // href가 문자열인 경우 추가 검증
    const trimmedHref = href.trim();
    
    // 빈 문자열, 'null', 'undefined', 'NaN' 체크
    if (trimmedHref === '' || 
        trimmedHref === 'null' || 
        trimmedHref === 'undefined' || 
        trimmedHref === 'NaN') {
      // 유효하지 않은 href는 button으로 렌더링
    } else {
      // 유효한 href인지 추가 검증
      const isValidHref = trimmedHref.length > 0 &&
        (trimmedHref.startsWith('http://') || 
         trimmedHref.startsWith('https://') || 
         (trimmedHref.startsWith('/') && trimmedHref.length > 1));

      if (isValidHref && !disabled) {
        // 최종 안전 검증: trimmedHref가 유효한 문자열인지 확인
        if (!trimmedHref || 
            typeof trimmedHref !== 'string' || 
            trimmedHref === 'null' || 
            trimmedHref === 'undefined' || 
            trimmedHref === 'NaN' ||
            trimmedHref.trim() === '') {
          // 유효하지 않은 href는 button으로 렌더링
        } else {
          const finalHref = trimmedHref.trim();
          
          if (external || finalHref.startsWith('http://') || finalHref.startsWith('https://')) {
            // 외부 링크는 <a> 태그 사용
            // 최종 검증: null이나 undefined가 아닌지 확인
            if (finalHref && finalHref !== 'null' && finalHref !== 'undefined' && finalHref !== 'NaN') {
              // 최종 안전 검증: href에 전달하기 직전에 한번 더 확인
              const hrefValue = String(finalHref).trim();
              if (hrefValue && hrefValue !== 'null' && hrefValue !== 'undefined' && hrefValue !== 'NaN' && hrefValue.length > 0) {
                return (
                  <a
                    href={hrefValue}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes}
                  >
                    {content}
                  </a>
                );
              }
            }
          } else if (finalHref.startsWith('/') && finalHref.length > 1) {
            // 내부 링크는 일반 <a> 태그 사용 (SSR 안전)
            // Next.js Link는 SSR 중에 URL을 검증하여 오류를 발생시킬 수 있으므로
            // 모든 링크를 <a> 태그로 처리하여 안전성 확보
            const safeHref = finalHref && 
                typeof finalHref === 'string' &&
                finalHref !== 'null' && 
                finalHref !== 'undefined' && 
                finalHref !== 'NaN' &&
                finalHref.length > 1 &&
                finalHref[0] === '/' &&
                !finalHref.includes('null') &&
                !finalHref.includes('undefined');
            
            if (safeHref) {
              // 추가 문자열 검증: 경로가 유효한 형식인지 확인
              const isValidPath = /^\/[a-zA-Z0-9\-_/]*$/.test(finalHref) || 
                                 /^\/[a-zA-Z0-9\-_/?#=&]*$/.test(finalHref);
              
              if (isValidPath) {
                // 최종 안전 검증: href에 전달하기 직전에 한번 더 확인
                const hrefValue = String(finalHref).trim();
                if (hrefValue && hrefValue !== 'null' && hrefValue !== 'undefined' && hrefValue !== 'NaN' && hrefValue.length > 0) {
                  return (
                    <a
                      href={hrefValue}
                      className={classes}
                    >
                      {content}
                    </a>
                  );
                }
              }
            }
          }
        }
      }
    }
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {content}
    </button>
  );
};

export default Button;

