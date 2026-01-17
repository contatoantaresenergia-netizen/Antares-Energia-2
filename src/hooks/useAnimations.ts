import { useEffect } from 'react';
import {
  initHeroAnimations,
  initStatsAnimation,
  initCardsAnimation,
  initMagneticButtons,
} from '../utils/animations';

export const useAnimations = () => {
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    
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
    };
  }, []);
};
