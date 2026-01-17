import { useEffect } from 'react';
import { initSmoothScroll } from '../utils/smoothScroll';
import {
  initHeroAnimations,
  initStatsAnimation,
  initCardsAnimation,
  initMagneticButtons,
} from '../utils/animations';

export const useAnimations = () => {
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    
    // Smooth scroll (desktop apenas)
    let lenis;
    if (!isMobile) {
      lenis = initSmoothScroll();
    }

    // Pequeno delay para garantir que o DOM está pronto
    const timer = setTimeout(() => {
      initHeroAnimations();
      initStatsAnimation();
      initCardsAnimation();
      
      if (!isMobile) {
        initMagneticButtons();
      }
    }, 100);

    // Cleanup
    return () => {
      clearTimeout(timer);
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);
};
