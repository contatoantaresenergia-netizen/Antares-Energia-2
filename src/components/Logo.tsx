import React from 'react';

// A interface precisa declarar explicitamente o 'variant'
interface LogoProps {
  className?: string;
  variant?: 'white' | 'dark' | string; 
}

export const Logo: React.FC<LogoProps> = ({ className, variant }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 40" // Ajuste para o seu viewBox original
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Exemplo: Se variant for white, preenche com branco */}
      <path 
        d="..." 
        fill={variant === 'white' ? '#FFFFFF' : 'currentColor'} 
      />
    </svg>
  );
};
