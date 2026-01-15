import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-20 md:h-32 lg:h-36" }) => {
  const logoUrl = "https://agzxythrwhlpvptlsepv.supabase.co/storage/v1/object/public/Orlando%20Air%20cond/logo.png";
  
  const antaresBlueFilter = "invert(58%) sepia(93%) saturate(2400%) hue-rotate(168deg) brightness(102%) contrast(107%)";
  
  return (
    <div className="relative flex items-center group cursor-pointer antares-logo-container">
      <img 
        src={logoUrl} 
        alt="Antares Energia" 
        className={`${className} w-auto transition-all duration-500 ease-in-out object-contain group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_rgba(0,194,255,0.4)]`}
        style={{ filter: 'brightness(0) invert(1)' }}
      />
      <style dangerouslySetInnerHTML={{ __html: `
        .antares-logo-container:hover img {
          filter: ${antaresBlueFilter} !important;
        }
      `}} />
    </div>
  );
};
