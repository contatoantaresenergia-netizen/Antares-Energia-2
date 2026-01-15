import React from 'react';

export interface LogoProps {
  className?: string;
  variant?: string; // Isso impede o erro de "Property variant does not exist"
}

export const Logo: React.FC<LogoProps> = ({ className, variant }) => {
  // ... resto do seu código do SVG
