import React from 'react';
import Link from 'next/link';
import Card from './Card';

interface ServiceCardProps {
  title: string;
  image: string;
  href: string;
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
  const isExternal = href.startsWith('http://') || href.startsWith('https://');

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

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`block flex group ${className}`}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <Link href={href} className={`block flex group ${className}`}>
      {cardContent}
    </Link>
  );
};

export default ServiceCard;

