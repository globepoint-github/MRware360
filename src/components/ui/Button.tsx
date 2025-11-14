import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
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

  if (href && !disabled) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
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

