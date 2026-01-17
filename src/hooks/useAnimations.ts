import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initHeroAnimations = () => {
  // Force hero elements to be visible
  const heroTitle = document.querySelector('.hero-title');
  const heroSubtitle = document.querySelector('.hero-subtitle');
  const fadeInElements = document.querySelectorAll('.animate-fade-in');
  
  if (heroTitle) {
    gsap.set(heroTitle, { opacity: 1, y: 0, clearProps: 'all' });
  }
  
  if (heroSubtitle) {
    gsap.set(heroSubtitle, { opacity: 1, y: 0, clearProps: 'all' });
  }
  
  fadeInElements.forEach((el) => {
    gsap.set(el, { opacity: 1, y: 0, clearProps: 'all' });
  });
  
  console.log('Hero visibility enforced with GSAP.set');
};

export const initStatsAnimation = () => {
  const stats = document.querySelectorAll('.stat-number');
  
  stats.forEach((stat) => {
    const target = stat.getAttribute('data-target');
    const suffix = stat.getAttribute('data-suffix') || '';
    const prefix = stat.getAttribute('data-prefix') || '';
    
    if (target) {
      ScrollTrigger.create({
        trigger: stat,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.to(stat, {
            innerText: target,
            duration: 2,
            snap: { innerText: 1 },
            ease: 'power1.out',
            onUpdate: function() {
              const value = Math.ceil(this.targets()[0].innerText);
              stat.textContent = prefix + value + suffix;
            }
          });
        }
      });
    }
  });
};

export const initCardsAnimation = () => {
  const cards = document.querySelectorAll('.tech-card');
  
  if (cards.length > 0) {
    cards.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: index * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          once: true
        }
      });
    });
  }
};

export const initMagneticButtons = () => {
  const buttons = document.querySelectorAll('.btn-magnetic');
  
  buttons.forEach((button) => {
    const btn = button as HTMLElement;
    
    // Garantir que o botão esteja visível primeiro
    gsap.set(btn, { opacity: 1, scale: 1 });
    
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, { scale: 1.05, duration: 0.3 });
    });
    
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { scale: 1, x: 0, y: 0, duration: 0.3 });
    });
    
    btn.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(btn, {
        x: x * 0.2,
        y: y * 0.2,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });
};
