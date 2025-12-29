import React from 'react';

interface HeroBannerProps {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  backgroundImage?: string | null;
  backgroundVideo?: string | null;
  overlay?: boolean;
  overlayOpacity?: number;
  children?: React.ReactNode;
  className?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({title,subtitle}) => {

  return (
        <div className="heroText h-full text-white px-4 sm:px-6">
          <div className="title01 fs_56 text-display  text-center mb-4 ">
            {title}
          </div>
          
          {subtitle && (
            <div className="subT fs_22 text-center">
              {subtitle}
            </div>
          )}
        </div>
  );
};

export default HeroBanner;

