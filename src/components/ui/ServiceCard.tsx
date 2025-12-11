import React from 'react';
import Card from './Card';

interface ServiceCardProps {
  title: string;
  image: string;
  href: string | null | undefined;
  variant: 'nursing' | 'physio' | 'carehub';
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  image,
  href,
  variant,
  className = '',
}) => {
  const variantStyles = {
    nursing: {
      text: 'text-nursing group-hover:text-white',
      bg: 'group-hover:bg-nursing',
    },
    physio: {
      text: 'text-physio group-hover:text-white',
      bg: 'group-hover:bg-physio',
    },
    carehub: {
      text: 'text-carehub group-hover:text-white',
      bg: 'group-hover:bg-carehub',
    },
  };

  const styles = variantStyles[variant];
  
  // href 유효성 검증 (null, undefined, 빈 문자열, 'null' 문자열 등 체크)
  if (!href || 
      typeof href !== 'string' || 
      href === 'null' || 
      href === 'undefined' || 
      href === 'NaN' ||
      href.trim() === '') {
    // href가 없거나 빈 문자열이면 클릭 불가능한 카드로 렌더링
    return (
      <div className={`block flex group ${className} opacity-50 cursor-not-allowed`}>
        <Card className={`p-8 sm:p-10 flex flex-col w-full h-full ${styles.bg} transition-colors duration-300`}>
          <p className={`${styles.text} text-h3 font-semibold text-center mb-4 transition-colors duration-300 font-korean`}>
            {title}
          </p>
          
          <div className="flex-1 flex items-center justify-center my-4">
            <img
              src={image}
              alt={title}
              className="w-[150px] h-[170px] object-contain"
              loading="lazy"
            />
          </div>

          <div className="mt-auto flex justify-end">
            <img
              src="/mrarrow.png"
              alt="arrow"
              className="w-8 h-8"
              aria-hidden="true"
            />
          </div>
        </Card>
      </div>
    );
  }
  
  // href가 유효한지 다시 한번 확인 (안전장치)
  // 이 시점에서 href는 반드시 문자열임이 보장됨
  const trimmedHref = (href as string).trim();
  
  // 추가 검증: 'null', 'undefined', 'NaN' 문자열 체크
  if (!trimmedHref || 
      typeof trimmedHref !== 'string' ||
      trimmedHref === 'null' || 
      trimmedHref === 'undefined' || 
      trimmedHref === 'NaN' || 
      trimmedHref === '') {
    // 유효하지 않은 href는 클릭 불가능한 카드로 렌더링
    return (
      <div className={`block flex group ${className} opacity-50 cursor-not-allowed`}>
        <Card className={`p-8 sm:p-10 flex flex-col w-full h-full ${styles.bg} transition-colors duration-300`}>
          <p className={`${styles.text} text-h3 font-semibold text-center mb-4 transition-colors duration-300 font-korean`}>
            {title}
          </p>
          
          <div className="flex-1 flex items-center justify-center my-4">
            <img
              src={image}
              alt={title}
              className="w-[150px] h-[170px] object-contain"
              loading="lazy"
            />
          </div>

          <div className="mt-auto flex justify-end">
            <img
              src="/mrarrow.png"
              alt="arrow"
              className="w-8 h-8"
              aria-hidden="true"
            />
          </div>
        </Card>
      </div>
    );
  }
  
  // trimmedHref가 유효한 문자열임이 보장됨
  const isExternal = trimmedHref && typeof trimmedHref === 'string' && 
    (trimmedHref.startsWith('http://') || trimmedHref.startsWith('https://'));

  const cardContent = (
    <Card className={`p-8 sm:p-10 flex flex-col w-full h-full ${styles.bg} transition-colors duration-300`}>
      <p className={`${styles.text} text-h3 font-semibold text-center mb-4 transition-colors duration-300 font-korean`}>
        {title}
      </p>
      
      <div className="flex-1 flex items-center justify-center my-4">
        <img
          src={image}
          alt={title}
          className="w-[150px] h-[170px] object-contain"
          loading="lazy"
        />
      </div>

      <div className="mt-auto flex justify-end">
        <img
          src="/mrarrow.png"
          alt="arrow"
          className="w-8 h-8 group-hover:hidden"
          aria-hidden="true"
        />
        <img
          src="/mrarrowhover.png"
          alt="arrow"
          className="w-8 h-8 hidden group-hover:block"
          aria-hidden="true"
        />
      </div>
    </Card>
  );

  // 최종 안전 검증: trimmedHref가 유효한 문자열인지 확인
  // 이 검증은 이미 위에서 수행되었지만, cardContent 생성 후 다시 한번 확인
  if (!trimmedHref || 
      typeof trimmedHref !== 'string' || 
      trimmedHref === 'null' || 
      trimmedHref === 'undefined' || 
      trimmedHref === 'NaN' ||
      trimmedHref.trim() === '') {
    // 유효하지 않은 href는 disabled 카드로 렌더링
    return (
      <div className={`block flex group ${className} opacity-50 cursor-not-allowed`}>
        {cardContent}
      </div>
    );
  }

  // finalHref 생성 및 최종 검증
  const finalHref = trimmedHref.trim();
  
  // 절대 null이나 undefined가 전달되지 않도록 보장
  if (!finalHref || 
      typeof finalHref !== 'string' || 
      finalHref === 'null' || 
      finalHref === 'undefined' || 
      finalHref === 'NaN' ||
      finalHref === '') {
    return (
      <div className={`block flex group ${className} opacity-50 cursor-not-allowed`}>
        {cardContent}
      </div>
    );
  }

  // 외부 링크 처리
  if (isExternal && (finalHref.startsWith('http://') || finalHref.startsWith('https://'))) {
    // 외부 링크 최종 검증 - 절대 null이 전달되지 않도록 보장
    const safeExternalHref = finalHref && 
        typeof finalHref === 'string' &&
        finalHref !== 'null' && 
        finalHref !== 'undefined' && 
        finalHref !== 'NaN' &&
        finalHref.length > 0 &&
        (finalHref.startsWith('http://') || finalHref.startsWith('https://'));
    
    if (safeExternalHref) {
      // 최종 안전 검증: href에 전달하기 직전에 한번 더 확인
      const hrefValue = String(finalHref).trim();
      if (hrefValue && hrefValue !== 'null' && hrefValue !== 'undefined' && hrefValue !== 'NaN' && hrefValue.length > 0) {
        return (
          <a
            href={hrefValue}
            target="_blank"
            rel="noopener noreferrer"
            className={`block flex group ${className}`}
          >
            {cardContent}
          </a>
        );
      }
    }
  }

  // 내부 링크는 일반 <a> 태그 사용 (SSR 안전)
  // Next.js Link는 SSR 중에 URL을 검증하여 오류를 발생시킬 수 있으므로
  // 모든 링크를 <a> 태그로 처리하여 안전성 확보
  if (finalHref.startsWith('/') && finalHref.length > 1) {
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
              className={`block flex group ${className}`}
            >
              {cardContent}
            </a>
          );
        }
      }
    }
  }

  // 유효하지 않은 href인 경우 클릭 불가능한 카드로 렌더링
  return (
    <div className={`block flex group ${className} opacity-50 cursor-not-allowed`}>
      {cardContent}
    </div>
  );
};

export default ServiceCard;

