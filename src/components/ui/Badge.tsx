import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'nursing' | 'physio' | 'carehub';
  size?: 'sm' | 'md';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}) => {
  const baseStyles = 'rounded-badge flex justify-center items-center font-korean';
  
  const variantStyles = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white',
    accent: 'bg-accent text-white',
    nursing: 'bg-nursing text-white',
    physio: 'bg-physio text-white',
    carehub: 'bg-carehub text-white',
  };

  const sizeStyles = {
    sm: 'px-3 py-1 text-caption',
    md: 'px-4 py-2 text-caption',
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
      {children}
    </div>
  );
};

export default Badge;

