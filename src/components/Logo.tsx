import React from 'react';

export interface LogoProps {
  className?: string;
  variant?: string; 
}

export const Logo: React.FC<LogoProps> = ({ className, variant }) => {
  return (
    <div className={className}>
      {/* O texto ou SVG do seu logo aqui */}
      <span style={{ color: variant === 'white' ? '#FFF' : 'inherit' }}>ANTARES</span>
    </div>
  );
};
