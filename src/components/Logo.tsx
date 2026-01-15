import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'white';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'light', className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="w-32 h-16 flex items-center justify-start">
        <img 
          src="https://agzxythrwhlpvptlsepv.supabase.co/storage/v1/object/public/Orlando%20Air%20cond/logo.png" 
          alt="Antares Logo" 
          className={`w-full h-full object-contain ${variant === 'light' || variant === 'white' ? 'brightness-0 invert' : ''}`}
        />
      </div>
    </div>
  );
};
