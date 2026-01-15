import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'white';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'light', className = '' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-10 h-10 flex items-center justify-center">
        <img 
          src="https://agzxythrwhlpvptlsepv.supabase.co/storage/v1/object/public/Orlando%20Air%20cond/logo.png" 
          alt="Antares Logo" 
          className={`w-full h-full object-contain ${variant === 'light' || variant === 'white' ? 'brightness-0 invert' : ''}`}
        />
      </div>
      <span className={`font-heading font-bold text-2xl tracking-tighter ${variant === 'light' || variant === 'white' ? 'text-white' : 'text-antares-dark'}`}>
        ANTARES
      </span>
    </div>
  );
};
