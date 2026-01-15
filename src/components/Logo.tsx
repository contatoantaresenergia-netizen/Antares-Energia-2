import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'light', className = '' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-8 h-8 bg-antares-cyan rounded-lg flex items-center justify-center">
        <span className="text-antares-dark font-black text-xl">A</span>
      </div>
      <span className={`font-heading font-bold text-2xl tracking-tighter ${variant === 'light' ? 'text-white' : 'text-antares-dark'}`}>
        ANTARES
      </span>
    </div>
  );
};
