import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  backgroundColor?: string;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Section: React.FC<SectionProps> = ({
  children,
  title,
  subtitle,
  backgroundColor = 'white',
  className = '',
  maxWidth = 'lg',
  padding = 'md',
}) => {
  const maxWidthStyles = {
    sm: 'max-w-[640px]',
    md: 'max-w-[768px]',
    lg: 'max-w-[1024px]',
    xl: 'max-w-[1420px]',
    full: 'max-w-full',
  };

  const paddingStyles = {
    none: '',
    sm: 'py-10',
    md: 'py-section-sm',
    lg: 'py-section',
  };

  const bgColorClass = backgroundColor.startsWith('#') 
    ? '' 
    : `bg-${backgroundColor}`;

  const bgColorStyle = backgroundColor.startsWith('#') 
    ? { backgroundColor } 
    : {};

  return (
    <section
      className={`flex flex-col justify-center items-center w-full ${bgColorClass} ${paddingStyles[padding]} ${className}`}
      style={bgColorStyle}
    >
      <div className={`w-full ${maxWidthStyles[maxWidth]} flex flex-col items-center px-4 sm:px-6 lg:px-8`}>
        {title && (
          <h2 className="text-h2 font-bold text-center text-gray-700 mb-4 font-korean">
            {title}
          </h2>
        )}
        
        {subtitle && (
          <div className="text-h3 font-normal text-center text-gray-700 mb-8 font-korean">
            {subtitle}
          </div>
        )}

        {children}
      </div>
    </section>
  );
};

export default Section;

