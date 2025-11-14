import React from 'react';
import Badge from './Badge';

interface ImageTextSectionProps {
  image: string;
  imageAlt: string;
  badge?: {
    text: string;
    variant?: 'primary' | 'secondary' | 'accent' | 'nursing' | 'physio' | 'carehub';
  };
  title?: string;
  description: string | React.ReactNode;
  reverse?: boolean;
  className?: string;
}

const ImageTextSection: React.FC<ImageTextSectionProps> = ({
  image,
  imageAlt,
  badge,
  title,
  description,
  reverse = false,
  className = '',
}) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6 md:gap-10 ${className}`}>
      <div className="w-full md:w-1/2">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-auto rounded-card object-cover"
          loading="lazy"
        />
      </div>
      
      <div className="w-full md:w-1/2 space-y-4">
        {badge && (
          <div className="mb-4">
            <Badge variant={badge.variant || 'primary'}>
              {badge.text}
            </Badge>
          </div>
        )}
        
        {title && (
          <h3 className="text-h3 font-bold text-gray-700 font-korean">
            {title}
          </h3>
        )}
        
        <div className="text-body font-normal text-gray-700 font-korean">
          {typeof description === 'string' ? (
            <p>{description}</p>
          ) : (
            description
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageTextSection;

