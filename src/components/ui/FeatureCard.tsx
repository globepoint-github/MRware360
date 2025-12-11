import React from 'react';
import Card from './Card';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string | React.ReactNode;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className = '',
}) => {
  return (
    <Card className={`p-6 sm:p-8 flex flex-col items-center text-center ${className}`}>
      <div className="flex justify-center items-center mb-6">
        <img
          src={icon}
          alt=""
          className="w-[130px] h-[130px] object-contain"
          aria-hidden="true"
        />
      </div>
      
      <h3 className="text-h3 font-bold text-gray-700 mb-4 font-korean">
        {title}
      </h3>
      
      <div className="text-body-sm font-normal text-gray-700 font-korean space-y-2">
        {typeof description === 'string' ? (
          <p>{description}</p>
        ) : (
          description
        )}
      </div>
    </Card>
  );
};

export default FeatureCard;

