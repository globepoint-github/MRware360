import React from 'react';

interface HeroBannerProps {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  backgroundImage?: string;
  backgroundVideo?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  children?: React.ReactNode;
  className?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subtitle,
  backgroundImage,
  backgroundVideo,
  overlay = true,
  overlayOpacity = 0.5,
  children,
  className = '',
}) => {
  return (
    <div
      className={`relative h-screen bg-cover bg-center ${className}`}
      style={backgroundImage ? { backgroundImage: `url('${backgroundImage}')` } : undefined}
    >
      {backgroundVideo && (
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </div>
      )}
      
      {overlay && (
        <div
          className="absolute inset-0 bg-black z-[1]"
          style={{ opacity: overlayOpacity }}
          aria-hidden="true"
        />
      )}

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 sm:px-6">
        <div className="text-display font-extrabold text-center mb-4 sm:mb-6 max-w-5xl px-2">
          {title}
        </div>
        
        {subtitle && (
          <div className="font-medium text-center mb-6 sm:mb-8 max-w-5xl w-full px-2 sm:px-4">
            {subtitle}
          </div>
        )}

        {children && (
          <div className="mt-8 sm:mt-12 w-full max-w-4xl">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroBanner;

