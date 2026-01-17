import { useEffect } from 'react';
import type Lenis from '@studio-freight/lenis';
import { initSmoothScroll } from '../utils/smoothScroll';
import { initAllAnimations } from '../utils/animations';

export const useAnimations = (): void => {
  useEffect(() => {
    console.log('🎬 Iniciando animações...');
    
    const isMobile = window.innerWidth < 768;
    
    let lenis: Lenis | undefined;
    if (!isMobile) {
      lenis = initSmoothScroll();
      console.log('✅ Smooth scroll ativado');
    }

    initAllAnimations();
    console.log('✅ Animações GSAP ativadas');

    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);
};
