import { initSmoothScroll } from './smooth-scroll.js';
import { initAnimations, initHoverEffects } from './animations.js';

// Espera o DOM carregar
document.addEventListener('DOMContentLoaded', () => {
  
  // Inicializa smooth scroll
  const lenis = initSmoothScroll();
  
  // Sincroniza GSAP com Lenis
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  
  gsap.ticker.lagSmoothing(0);
  
  // Inicializa todas as animações
  initAnimations();
  initHoverEffects();
  
  console.log('🚀 Animações carregadas!');
});
